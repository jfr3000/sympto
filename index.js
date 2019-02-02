const getTemperatureShift = require('./temperature')
const getMucusShift = require('./mucus')
const getCervixShift = require('./cervix')
const { LocalDate } = require('js-joda')
const assert = require('assert')

module.exports = function getSymptoThermalStatus(cycleInfo) {
  const {
    cycle,
    previousCycle,
    earlierCycles = [],
    secondarySymptom = 'mucus',
    excludePreOvu
  } = cycleInfo
  throwIfArgsAreNotInRequiredFormat([cycle, ...earlierCycles])

  const status = {
    phases: {}
  }

  // if there was no first higher measurement in the previous cycle,
  // no infertile pre-ovulatory phase may be assumed
  if (!excludePreOvu && previousCycle) {
    const getPreOvulatoryPhase = require('./pre-ovulatory')
    const statusForLast = getSymptoThermalStatus({
      cycle: previousCycle,
      secondarySymptom: secondarySymptom
    })
    if (statusForLast.temperatureShift) {
      const preOvuPhase = getPreOvulatoryPhase(
        cycle,
        [previousCycle, ...earlierCycles],
        secondarySymptom
      )
      if (preOvuPhase) {
        status.phases.preOvulatory = preOvuPhase
        if (status.phases.preOvulatory.cycleDays.length === cycle.length) {
          return status
        }
      }
    }
  }

  // TODO maybe add indicator if there was no preovuphase?
  status.phases.periOvulatory = {
    start: { date: null },
    cycleDays: []
  }
  const periPhase = status.phases.periOvulatory

  if (status.phases.preOvulatory) {
    const prePhase = status.phases.preOvulatory
    const startDate = LocalDate.parse(prePhase.end.date).plusDays(1).toString()
    periPhase.start.date = startDate
    const lastPreDay = prePhase.cycleDays[prePhase.cycleDays.length - 1]
    periPhase.cycleDays = cycle.slice(cycle.indexOf(lastPreDay) + 1)
  } else {
    periPhase.start.date = cycle[0].date
    periPhase.cycleDays = [...cycle]
  }

  const temperatureShift = getTemperatureShift(cycle)

  if (!temperatureShift.detected) return status

  const tempEvalEndIndex = cycle.indexOf(temperatureShift.evaluationCompleteDay)

  let secondaryShift
  if (secondarySymptom === 'mucus') {
    secondaryShift = getMucusShift(cycle, tempEvalEndIndex)
  } else if (secondarySymptom === 'cervix') {
    secondaryShift = getCervixShift(cycle, tempEvalEndIndex)
  }

  if (!secondaryShift.detected) return status

  let periOvulatoryEnd
  const tempOver = temperatureShift.evaluationCompleteDay.date
  const secondarySymptomOver = secondaryShift.evaluationCompleteDay.date

  if (tempOver >= secondarySymptomOver) {
    periOvulatoryEnd = temperatureShift.evaluationCompleteDay
  } else if (secondarySymptom > tempOver) {
    periOvulatoryEnd = secondaryShift.evaluationCompleteDay
  }

  const previousPeriDays = periPhase.cycleDays
  const previousPeriEndIndex = previousPeriDays.indexOf(periOvulatoryEnd)

  status.phases.postOvulatory = {
    start: {
      date: periOvulatoryEnd.date,
      time: '18:00'
    },
    cycleDays: previousPeriDays.slice(previousPeriEndIndex)
  }

  periPhase.cycleDays = previousPeriDays.slice(0, previousPeriEndIndex + 1)
  periPhase.end = status.phases.postOvulatory.start

  if (secondarySymptom === 'mucus') {
    status.mucusShift = secondaryShift
  } else if (secondarySymptom === 'cervix') {
    status.cervixShift = secondaryShift
  }

  status.temperatureShift = temperatureShift

  return status
}

function throwIfArgsAreNotInRequiredFormat(cycles) {
  cycles.forEach(cycle => {
    assert.ok(Array.isArray(cycle), "Cycles must be arrays.")
    assert.ok(cycle.length > 0, "Cycle must not be empty.")
    assert.ok(cycle[0].bleeding !== null, "First cycle day should have bleeding.")
    assert.equal(typeof cycle[0].bleeding, 'object', "First cycle day must contain bleeding value.")
    assert.equal(typeof cycle[0].bleeding.value, 'number', "First cycle day bleeding value must be a number.")
    cycle.forEach(day => {
      assert.equal(typeof day.date, 'string', "Date must be given as a string.")
      assert.doesNotThrow(() => LocalDate.parse(day.date), "Date must be given in right string format.")
      if (day.temperature) assert.equal(typeof day.temperature.value, 'number', "Temperature value must be a number.")
      if (day.mucus) assert.equal(typeof day.mucus.value, 'number', "Mucus value must be a number.")
      if (day.mucus) assert.ok(day.mucus.value >= 0, "Mucus value must greater or equal to 0.")
      if (day.mucus) assert.ok(day.mucus.value <= 4, "Mucus value must be below 5.")
      if (day.cervix) assert.ok(day.cervix.opening >= 0, "Cervix opening value must be 0 or bigger")
      if (day.cervix) assert.ok(day.cervix.opening <= 2, "Cervix opening value must be 2 or smaller")
      if (day.cervix) assert.ok(day.cervix.firmness >= 0, "Cervix firmness value must be 0 or bigger")
      if (day.cervix) assert.ok(day.cervix.firmness <= 1, "Cervix firmness value must be 1 or smaller")
      assert.equal(typeof cycle[0].bleeding.value, 'number', "Bleeding value must be a number")
    })
  })
}
