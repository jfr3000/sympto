function convertToSymptoFormat(val) {
  const sympto = { date: val.date }
  if (val.temperature) sympto.temperature = {
    value: val.temperature,
    exclude: false
  }
  if (val.mucus) sympto.mucus = {
    value: val.mucus,
    exclude: false
  }
  if (val.bleeding) sympto.bleeding = {
    value: val.bleeding,
    exclude: false
  }
  return sympto
}

module.exports.cycleWithFhm = [
  { date: '2018-06-01', temperature: 36.7, bleeding: 2 },
  { date: '2018-06-02', temperature: 36.75 },
  { date: '2018-06-04', temperature: 36.7 },
  { date: '2018-06-05', temperature: 36.65 },
  { date: '2018-06-06', temperature: 36.8, mucus: 0 },
  { date: '2018-06-13', temperature: 36.9, mucus: 4 },
  { date: '2018-06-15', temperature: 37.0, mucus: 2 },
  { date: '2018-06-16', temperature: 37.0, mucus: 2 },
  { date: '2018-06-17', temperature: 37.0, mucus: 2 },
  { date: '2018-06-18', temperature: 37.0, mucus: 2 }
].map(convertToSymptoFormat)

module.exports.cycleWithoutFhm = [
  { date: '2018-06-01', temperature: 36.7, bleeding: 2 },
  { date: '2018-06-02', temperature: 36.75 },
  { date: '2018-06-04', temperature: 36.7 },
  { date: '2018-06-05', temperature: 36.65 },
  { date: '2018-06-06', temperature: 36.8, mucus: 0 },
  { date: '2018-06-09', temperature: 36.9, mucus: 4 },
  { date: '2018-06-10', temperature: 37.0, mucus: 2 },
  { date: '2018-06-13', temperature: 37.0, mucus: 2 }
].map(convertToSymptoFormat)

module.exports.longAndComplicatedCycle = [
  { date: '2018-06-01', temperature: 36.7, bleeding: 2 },
  { date: '2018-06-02', temperature: 36.75 },
  { date: '2018-06-04', temperature: 36.7 },
  { date: '2018-06-05', temperature: 36.65 },
  { date: '2018-06-06', temperature: 36.8, mucus: 0 },
  { date: '2018-06-09', temperature: 36.6, mucus: 4 },
  { date: '2018-06-10', temperature: 36.5, mucus: 2 },
  { date: '2018-06-13', temperature: 36.55, mucus: 3 },
  { date: '2018-06-14', temperature: 36.6, mucus: 4 },
  { date: '2018-06-15', temperature: 36.65, mucus: 4 },
  { date: '2018-06-16', temperature: 36.8, mucus: 3 },
  { date: '2018-06-17', temperature: 36.75, mucus: 3 },
  { date: '2018-06-18', temperature: 36.85, mucus: 4 },
  { date: '2018-06-19', temperature: 36.9, mucus: 1 },
  { date: '2018-06-20', temperature: 36.95, mucus: 2 },
  { date: '2018-06-21', temperature: 36.9, mucus: 2 },
  { date: '2018-06-22', temperature: 37.0, mucus: 2 },
  { date: '2018-06-25', temperature: 37.0, mucus: 1 },
  { date: '2018-06-26', temperature: 36.9, mucus: 1 },
  { date: '2018-06-27', temperature: 37.0, mucus: 1 }
].map(convertToSymptoFormat)

module.exports.cycleWithTempAndNoMucusShift = [
  { date: '2018-06-01', temperature: 36.7, bleeding: 2 },
  { date: '2018-06-02', temperature: 36.75 },
  { date: '2018-06-05', temperature: 36.65 },
  { date: '2018-06-06', temperature: 36.8, mucus: 0 },
  { date: '2018-06-08', temperature: 36.55, mucus: 1 },
  { date: '2018-06-09', temperature: 36.6, mucus: 4 },
  { date: '2018-06-10', temperature: 36.5, mucus: 2 },
  { date: '2018-06-11', temperature: 36.6, mucus: 3 },
  { date: '2018-06-13', temperature: 36.55, mucus: 3 },
  { date: '2018-06-14', temperature: 36.6, mucus: 4 },
  { date: '2018-06-15', temperature: 36.65, mucus: 4 },
  { date: '2018-06-16', temperature: 36.8, mucus: 3 },
  { date: '2018-06-17', temperature: 36.75, mucus: 3 },
  { date: '2018-06-18', temperature: 36.85, mucus: 4 },
  { date: '2018-06-19', temperature: 36.9, mucus: 4 },
  { date: '2018-06-20', temperature: 36.95, mucus: 4 },
  { date: '2018-06-23', temperature: 37.0, mucus: 3 },
  { date: '2018-06-24', temperature: 36.95, mucus: 4 },
  { date: '2018-06-26', temperature: 36.9, mucus: 4 },
  { date: '2018-06-27', temperature: 37.0, mucus: 4 }
].map(convertToSymptoFormat)

module.exports.cycleWithEarlyMucus = [
  { date: '2018-06-01', temperature: 36.7, bleeding: 2 },
  { date: '2018-06-02', temperature: 36.75, mucus: 3 },
  { date: '2018-06-05', temperature: 36.65 },
  { date: '2018-06-06', temperature: 36.8, mucus: 0 },
  { date: '2018-06-08', temperature: 36.55, mucus: 1 },
  { date: '2018-06-09', temperature: 36.6, mucus: 4 },
  { date: '2018-06-10', temperature: 36.5, mucus: 2 },
  { date: '2018-06-11', temperature: 36.6, mucus: 3 },
  { date: '2018-06-13', temperature: 36.55, mucus: 3 },
  { date: '2018-06-14', temperature: 36.6, mucus: 4 },
  { date: '2018-06-15', temperature: 36.65, mucus: 4 },
  { date: '2018-06-16', temperature: 36.8, mucus: 3 },
  { date: '2018-06-17', temperature: 36.75, mucus: 3 },
  { date: '2018-06-18', temperature: 36.85, mucus: 4 },
  { date: '2018-06-19', temperature: 36.9, mucus: 4 },
  { date: '2018-06-20', temperature: 36.95, mucus: 4 },
  { date: '2018-06-23', temperature: 37.0, mucus: 3 },
  { date: '2018-06-24', temperature: 36.95, mucus: 4 },
  { date: '2018-06-26', temperature: 36.9, mucus: 4 },
  { date: '2018-06-27', temperature: 37.0, mucus: 4 }
].map(convertToSymptoFormat)

module.exports.cycleWithMucusOnFirstDay = [
  { date: '2018-06-01', temperature: 36.7, bleeding: 2, mucus: 3},
  { date: '2018-06-02', temperature: 36.75, mucus: 3 },
  { date: '2018-06-05', temperature: 36.65 },
  { date: '2018-06-06', temperature: 36.8, mucus: 0 },
  { date: '2018-06-08', temperature: 36.55, mucus: 1 },
  { date: '2018-06-09', temperature: 36.6, mucus: 4 },
  { date: '2018-06-10', temperature: 36.5, mucus: 2 },
  { date: '2018-06-11', temperature: 36.6, mucus: 3 },
  { date: '2018-06-13', temperature: 36.55, mucus: 3 },
  { date: '2018-06-14', temperature: 36.6, mucus: 4 },
  { date: '2018-06-15', temperature: 36.65, mucus: 4 },
  { date: '2018-06-16', temperature: 36.8, mucus: 3 },
  { date: '2018-06-17', temperature: 36.75, mucus: 3 },
  { date: '2018-06-18', temperature: 36.85, mucus: 4 },
  { date: '2018-06-19', temperature: 36.9, mucus: 4 },
  { date: '2018-06-20', temperature: 36.95, mucus: 4 },
  { date: '2018-06-23', temperature: 37.0, mucus: 3 },
  { date: '2018-06-24', temperature: 36.95, mucus: 4 },
  { date: '2018-06-26', temperature: 36.9, mucus: 4 },
  { date: '2018-06-27', temperature: 37.0, mucus: 4 }
].map(convertToSymptoFormat)

module.exports.cycleWithoutAnyShifts = [
  { date: '2018-06-01', temperature: 36.7, bleeding: 2 },
  { date: '2018-06-02', temperature: 36.75 },
  { date: '2018-06-04', temperature: 36.7 },
  { date: '2018-06-05', temperature: 36.65 },
  { date: '2018-06-06', temperature: 36.8, mucus: 0 },
  { date: '2018-06-07', temperature: 36.85, mucus: 0 },
  { date: '2018-06-08', temperature: 36.55, mucus: 1 }
].map(convertToSymptoFormat)

module.exports.fiveDayCycle = [
  { date: '2018-06-01', bleeding: 2 },
  { date: '2018-06-03', bleeding: 3 },
].map(convertToSymptoFormat)

module.exports.mucusPeakAndFhmOnSameDay = [
  { date: '2018-06-01', temperature: 36.7, bleeding: 2 },
  { date: '2018-06-02', temperature: 36.75 },
  { date: '2018-06-04', temperature: 36.7 },
  { date: '2018-06-05', temperature: 36.65 },
  { date: '2018-06-06', temperature: 36.8, mucus: 0 },
  { date: '2018-06-09', temperature: 36.6, mucus: 4 },
  { date: '2018-06-10', temperature: 36.5, mucus: 2 },
  { date: '2018-06-13', temperature: 36.55, mucus: 3 },
  { date: '2018-06-14', temperature: 36.6, mucus: 4 },
  { date: '2018-06-15', temperature: 36.65, mucus: 4 },
  { date: '2018-06-16', temperature: 36.8, mucus: 3 },
  { date: '2018-06-17', temperature: 36.75, mucus: 3 },
  { date: '2018-06-18', temperature: 36.85, mucus: 4 },
  { date: '2018-06-19', temperature: 36.9, mucus: 3 },
  { date: '2018-06-20', temperature: 37.0, mucus: 2 },
  { date: '2018-06-21', temperature: 36.9, mucus: 2 },
  { date: '2018-06-22', temperature: 37.0, mucus: 2 },
  { date: '2018-06-25', temperature: 37.0, mucus: 1 },
  { date: '2018-06-26', temperature: 36.9, mucus: 1 },
  { date: '2018-06-27', temperature: 37.0, mucus: 1 }
].map(convertToSymptoFormat)

module.exports.mucusPeakOnLastDayOfTempEval = [
  { date: '2018-06-01', temperature: 36.7, bleeding: 2 },
  { date: '2018-06-02', temperature: 36.75 },
  { date: '2018-06-04', temperature: 36.7 },
  { date: '2018-06-05', temperature: 36.65 },
  { date: '2018-06-06', temperature: 36.8, mucus: 0 },
  { date: '2018-06-09', temperature: 36.6, mucus: 1 },
  { date: '2018-06-10', temperature: 36.5, mucus: 2 },
  { date: '2018-06-13', temperature: 36.55, mucus: 2 },
  { date: '2018-06-14', temperature: 36.6, mucus: 2 },
  { date: '2018-06-15', temperature: 36.65, mucus: 1 },
  { date: '2018-06-16', temperature: 36.8, mucus: 2 },
  { date: '2018-06-17', temperature: 36.75, mucus: 2 },
  { date: '2018-06-18', temperature: 36.85, mucus: 2 },
  { date: '2018-06-19', temperature: 36.9, mucus: 2 },
  { date: '2018-06-20', temperature: 36.95, mucus: 3 },
  { date: '2018-06-21', temperature: 36.9, mucus: 2 },
  { date: '2018-06-22', temperature: 37.0, mucus: 2 },
  { date: '2018-06-25', temperature: 37.0, mucus: 1 },
  { date: '2018-06-26', temperature: 36.9, mucus: 1 },
].map(convertToSymptoFormat)

module.exports.mucusPeakAfterLastDayOfTempEval = [
  { date: '2018-06-01', temperature: 36.7, bleeding: 2 },
  { date: '2018-06-02', temperature: 36.75 },
  { date: '2018-06-04', temperature: 36.7 },
  { date: '2018-06-05', temperature: 36.65 },
  { date: '2018-06-06', temperature: 36.8, mucus: 0 },
  { date: '2018-06-09', temperature: 36.6, mucus: 1 },
  { date: '2018-06-10', temperature: 36.5, mucus: 2 },
  { date: '2018-06-13', temperature: 36.55, mucus: 2 },
  { date: '2018-06-14', temperature: 36.6, mucus: 2 },
  { date: '2018-06-15', temperature: 36.65, mucus: 1 },
  { date: '2018-06-16', temperature: 36.8, mucus: 2 },
  { date: '2018-06-17', temperature: 36.75, mucus: 2 },
  { date: '2018-06-18', temperature: 36.85, mucus: 2 },
  { date: '2018-06-19', temperature: 36.9, mucus: 2 },
  { date: '2018-06-20', temperature: 37.0, mucus: 2 },
  { date: '2018-06-21', temperature: 36.9, mucus: 3 },
  { date: '2018-06-22', temperature: 37.0, mucus: 2 },
  { date: '2018-06-25', temperature: 37.0, mucus: 1 },
  { date: '2018-06-26', temperature: 36.9, mucus: 1 },
].map(convertToSymptoFormat)

module.exports.mucusPeakOnAndAfterLastDayOfTempEval = [
  { date: '2018-06-01', temperature: 36.7, bleeding: 2 },
  { date: '2018-06-02', temperature: 36.75 },
  { date: '2018-06-04', temperature: 36.7 },
  { date: '2018-06-05', temperature: 36.65 },
  { date: '2018-06-06', temperature: 36.8, mucus: 0 },
  { date: '2018-06-09', temperature: 36.6, mucus: 1 },
  { date: '2018-06-10', temperature: 36.5, mucus: 2 },
  { date: '2018-06-13', temperature: 36.55, mucus: 2 },
  { date: '2018-06-14', temperature: 36.6, mucus: 2 },
  { date: '2018-06-15', temperature: 36.65, mucus: 1 },
  { date: '2018-06-16', temperature: 36.8, mucus: 2 },
  { date: '2018-06-17', temperature: 36.75, mucus: 2 },
  { date: '2018-06-18', temperature: 36.85, mucus: 2 },
  { date: '2018-06-19', temperature: 36.9, mucus: 2 },
  { date: '2018-06-20', temperature: 37.0, mucus: 3 },
  { date: '2018-06-21', temperature: 36.9, mucus: 3 },
  { date: '2018-06-22', temperature: 37.0, mucus: 2 },
  { date: '2018-06-25', temperature: 37.0, mucus: 1 },
  { date: '2018-06-26', temperature: 36.9, mucus: 1 },
].map(convertToSymptoFormat)

module.exports.mucusPeakTwoDaysBeforeFhm = [
  { date: '2018-06-01', temperature: 36.7, bleeding: 2 },
  { date: '2018-06-02', temperature: 36.75 },
  { date: '2018-06-04', temperature: 36.7 },
  { date: '2018-06-05', temperature: 36.65, mucus: 2 },
  { date: '2018-06-06', temperature: 36.8, mucus: 0 },
  { date: '2018-06-09', temperature: 36.6, mucus: 4 },
  { date: '2018-06-10', temperature: 36.5, mucus: 2 },
  { date: '2018-06-13', temperature: 36.55, mucus: 3 },
  { date: '2018-06-14', temperature: 36.6, mucus: 4 },
  { date: '2018-06-15', temperature: 36.65, mucus: 4 },
  { date: '2018-06-16', temperature: 36.8, mucus: 4 },
  { date: '2018-06-17', temperature: 36.75, mucus: 3 },
  { date: '2018-06-18', temperature: 36.85, mucus: 2 },
  { date: '2018-07-02', temperature: 36.9, mucus: 3 },
  { date: '2018-07-03', temperature: 37.0, mucus: 2 },
  { date: '2018-07-04', temperature: 36.9, mucus: 2 },
].map(convertToSymptoFormat)

module.exports.mucusPeak5DaysAfterFhm = [
  { date: '2018-06-01', temperature: 36.7, bleeding: 2 },
  { date: '2018-06-02', temperature: 36.75, mucus: 2 },
  { date: '2018-06-04', temperature: 36.7 },
  { date: '2018-06-05', temperature: 36.65 },
  { date: '2018-06-06', temperature: 36.8, mucus: 0 },
  { date: '2018-06-09', temperature: 36.6, mucus: 4 },
  { date: '2018-06-10', temperature: 36.5, mucus: 2 },
  { date: '2018-06-13', temperature: 36.55, mucus: 3 },
  { date: '2018-06-14', temperature: 36.6, mucus: 3 },
  { date: '2018-06-15', temperature: 36.65, mucus: 3 },
  { date: '2018-06-16', temperature: 36.8, mucus: 3 },
  { date: '2018-06-17', temperature: 36.75, mucus: 3 },
  { date: '2018-06-18', temperature: 36.70, mucus: 2 },
  { date: '2018-06-19', temperature: 36.9, mucus: 2 },
  { date: '2018-06-20', temperature: 36.95, mucus: 2 },
  { date: '2018-06-21', temperature: 36.9, mucus: 2 },
  { date: '2018-06-22', temperature: 37.0, mucus: 2 },
  { date: '2018-06-25', temperature: 37.0, mucus: 1 },
  { date: '2018-06-26', temperature: 36.9, mucus: 4 },
  { date: '2018-06-30', temperature: 37.0, mucus: 1 },
  { date: '2018-07-01', temperature: 37.0, mucus: 1 },
  { date: '2018-07-02', temperature: 37.0, mucus: 1 }
].map(convertToSymptoFormat)

module.exports.highestMucusQualityAfterEndOfEval = [
  { date: '2018-06-01', temperature: 36.7, bleeding: 2 },
  { date: '2018-06-02', temperature: 36.75, mucus: 2 },
  { date: '2018-06-04', temperature: 36.7 },
  { date: '2018-06-05', temperature: 36.65 },
  { date: '2018-06-06', temperature: 36.8, mucus: 0 },
  { date: '2018-06-09', temperature: 36.6, mucus: 1 },
  { date: '2018-06-10', temperature: 36.5, mucus: 2 },
  { date: '2018-06-13', temperature: 36.55, mucus: 3 },
  { date: '2018-06-14', temperature: 36.6, mucus: 3 },
  { date: '2018-06-15', temperature: 36.65, mucus: 3 },
  { date: '2018-06-16', temperature: 36.8, mucus: 3 },
  { date: '2018-06-17', temperature: 36.75, mucus: 3 },
  { date: '2018-06-18', temperature: 36.70, mucus: 2 },
  { date: '2018-06-19', temperature: 36.9, mucus: 3 },
  { date: '2018-06-20', temperature: 36.95, mucus: 3 },
  { date: '2018-06-21', temperature: 36.9, mucus: 3 },
  { date: '2018-06-22', temperature: 37.0, mucus: 1 },
  { date: '2018-06-25', temperature: 37.0, mucus: 1 },
  { date: '2018-06-26', temperature: 36.9, mucus: 1 },
  { date: '2018-06-30', temperature: 37.0, mucus: 1 },
  { date: '2018-07-01', temperature: 37.0, mucus: 4 },
  { date: '2018-07-02', temperature: 37.0, mucus: 1 }
].map(convertToSymptoFormat)

module.exports.fhm5DaysAfterMucusPeak = [
  { date: '2018-06-01', temperature: 36.7, bleeding: 2 },
  { date: '2018-06-02', temperature: 36.75 },
  { date: '2018-06-04', temperature: 36.7 },
  { date: '2018-06-05', temperature: 36.65 },
  { date: '2018-06-06', temperature: 36.8, mucus: 0 },
  { date: '2018-06-09', temperature: 36.6, mucus: 4 },
  { date: '2018-06-10', temperature: 36.5, mucus: 2 },
  { date: '2018-06-13', temperature: 36.55, mucus: 3 },
  { date: '2018-06-14', temperature: 36.6, mucus: 4 },
  { date: '2018-06-15', temperature: 36.65, mucus: 3 },
  { date: '2018-06-16', temperature: 36.8, mucus: 3 },
  { date: '2018-06-17', temperature: 36.75, mucus: 3 },
  { date: '2018-06-18', temperature: 36.85, mucus: 2 },
  { date: '2018-06-19', temperature: 36.9, mucus: 2 },
  { date: '2018-06-20', temperature: 36.95, mucus: 2 },
  { date: '2018-06-21', temperature: 36.9, mucus: 2 },
  { date: '2018-06-22', temperature: 37.0, mucus: 2 },
  { date: '2018-06-25', temperature: 37.0, mucus: 1 },
  { date: '2018-06-26', temperature: 36.9, mucus: 4 },
  { date: '2018-06-27', temperature: 37.0, mucus: 1 }
].map(convertToSymptoFormat)

module.exports.fhmOnDay12 = [
  { date: '2018-06-01', temperature: 36.7, bleeding: 2 },
  { date: '2018-06-02', temperature: 36.75 },
  { date: '2018-06-04', temperature: 36.7 },
  { date: '2018-06-05', temperature: 36.65 },
  { date: '2018-06-06', temperature: 36.8, mucus: 0 },
  { date: '2018-06-09', temperature: 36.6, mucus: 2 },
  { date: '2018-06-10', temperature: 36.5, mucus: 3 },
  { date: '2018-06-12', temperature: 36.9, mucus: 3 },
  { date: '2018-06-14', temperature: 37.0, mucus: 2 },
  { date: '2018-06-17', temperature: 37.0, mucus: 2 },
  { date: '2018-06-18', temperature: 37.0, mucus: 2 },
].map(convertToSymptoFormat)

module.exports.fhmOnDay15 = [
  { date: '2018-06-01', temperature: 36.7, bleeding: 2 },
  { date: '2018-06-02', temperature: 36.75 },
  { date: '2018-06-04', temperature: 36.7 },
  { date: '2018-06-05', temperature: 36.65 },
  { date: '2018-06-06', temperature: 36.8, mucus: 0 },
  { date: '2018-06-09', temperature: 36.6, mucus: 2 },
  { date: '2018-06-10', temperature: 36.5, mucus: 3 },
  { date: '2018-06-15', temperature: 36.9, mucus: 3 },
  { date: '2018-06-16', temperature: 37.0, mucus: 2 },
  { date: '2018-06-17', temperature: 37.0, mucus: 2 },
  { date: '2018-06-18', temperature: 37.0, mucus: 2 },
].map(convertToSymptoFormat)

module.exports.mucusPeakSlightlyBeforeTempShift = [
  { date: '2018-06-01', temperature: 36.7, bleeding: 2 },
  { date: '2018-06-02', temperature: 36.75 },
  { date: '2018-06-04', temperature: 36.7 },
  { date: '2018-06-07', temperature: 36.5, mucus: 1 },
  { date: '2018-06-08', temperature: 36.45, mucus: 2},
  { date: '2018-06-09', temperature: 36.5, mucus: 2},
  { date: '2018-06-10', temperature: 36.55, mucus: 2},
  { date: '2018-06-11', temperature: 36.5, mucus: 3},
  { date: '2018-06-12', temperature: 36.55, mucus: 3},
  { date: '2018-06-13', temperature: 36.55, mucus: 4},
  { date: '2018-06-14', temperature: 36.65, mucus: 3},
  { date: '2018-06-15', temperature: 36.7, mucus: 3},
  { date: '2018-06-16', temperature: 36.7, mucus: 3},
  { date: '2018-06-17', temperature: 36.65, mucus: 2},
  { date: '2018-06-18', temperature: 36.7, mucus: 1},
  { date: '2018-06-19', temperature: 36.8, mucus: 1},
  { date: '2018-06-20', temperature: 36.85, mucus: 1},
  { date: '2018-06-21', temperature: 36.9, mucus: 1},
  { date: '2018-06-22', temperature: 36.9, mucus: 1}
].map(convertToSymptoFormat)

module.exports.mucusOnlyAfterEndOfTempEval = [
  { date: '2018-06-01', temperature: 36.7, bleeding: 2 },
  { date: '2018-06-02', temperature: 36.75 },
  { date: '2018-06-04', temperature: 36.7 },
  { date: '2018-06-05', temperature: 36.65 },
  { date: '2018-06-06', temperature: 36.8 },
  { date: '2018-06-09', temperature: 36.6 },
  { date: '2018-06-10', temperature: 36.5 },
  { date: '2018-06-13', temperature: 36.55 },
  { date: '2018-06-14', temperature: 36.6 },
  { date: '2018-06-15', temperature: 36.65 },
  { date: '2018-06-16', temperature: 36.8 },
  { date: '2018-06-17', temperature: 36.75 },
  { date: '2018-06-18', temperature: 36.70 },
  { date: '2018-06-19', temperature: 36.9 },
  { date: '2018-06-20', temperature: 36.95 },
  { date: '2018-06-21', temperature: 36.9 },
  { date: '2018-06-22', temperature: 37.0 },
  { date: '2018-06-25', temperature: 37.0, mucus: 4 },
  { date: '2018-06-26', temperature: 36.9, mucus: 1 },
  { date: '2018-06-30', temperature: 37.0, mucus: 1 },
  { date: '2018-07-01', temperature: 37.0, mucus: 1 },
  { date: '2018-07-02', temperature: 37.0, mucus: 1 }
].map(convertToSymptoFormat)
