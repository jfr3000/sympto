module.exports = function (cycleDays, tempEvalEndIndex) {
  const notDetected = { detected: false }
  const cervixDays = cycleDays
    .filter(day => day.cervix)
    .filter(day => typeof day.cervix.opening === 'number' && typeof day.cervix.firmness === 'number')

  // we search for the day of cervix peak, which must:
  // * have fertile cervix values
  // * be followed by at least 3 days
  // * must happen prior to end of temperature evaluation
  // these 3 following days must all show infertile cervix values
  // if everything applies we must check the days until the end of temperature evaluation
  // during these relevantDays no fertile cervix must occur

  for (let i = 0; i < cervixDays.length; i++) {
    const day = cervixDays[i]
    if (isClosedAndHard(day.cervix)) continue

    // the three following days must be with closed and hard cervix (indicating an infertile cervix)
    const threeFollowingDays = cervixDays.slice(i + 1, i + 4)
    if (threeFollowingDays.length < 3) continue

    const fertileCervixOccursIn3FollowingDays = threeFollowingDays.some(day => {
      return !isClosedAndHard(day.cervix)
    })
    if (fertileCervixOccursIn3FollowingDays) continue

    const cycleDayIndex = cycleDays.indexOf(day)

    // no other fertile cervix value may occur until temperature evaluation has
    // been completed
    const relevantDays = cycleDays
      .slice(cycleDayIndex + 1, tempEvalEndIndex + 1)
      .filter(day => day.cervix)

    const onlyClosedAndHardUntilEndOfTempEval = relevantDays.every(day => {
      return isClosedAndHard(day.cervix)
    })

    if (onlyClosedAndHardUntilEndOfTempEval) {
      return {
        detected: true,
        cervixPeakBeforeShift: day,
        evaluationCompleteDay: threeFollowingDays[threeFollowingDays.length - 1]
      }
    }
  }

  return notDetected
}

function isClosedAndHard (cervixDay) {
  return cervixDay.opening === 0 && cervixDay.firmness === 0
}
