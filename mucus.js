module.exports = function (cycleDays, tempEvalEndIndex) {
  const notDetected = { detected: false }
  const mucusDays = cycleDays.filter(day => typeof day.mucus === 'number')
  let currentBestQuality = 0

  for (let i = 0; i < mucusDays.length; i++) {
    let print
    if (i === 13) {
      print = true
    } else {
      print === false
    }
    const day = mucusDays[i]

    if (day.mucus > currentBestQuality) {
      currentBestQuality = day.mucus
    }

    // if mucus only changes from dry to nothing, it doesn't constitute a shift
    if (currentBestQuality < 2) continue

    if (day.mucus !== currentBestQuality) continue

    // the three following days must be of lower quality
    const threeFollowingDays = mucusDays.slice(i + 1, i + 4)
    if (threeFollowingDays.length < 3) continue

    const bestQualityOccursIn3FollowingDays = threeFollowingDays.some(day => {
      return day.mucus >= currentBestQuality
    })
    if (bestQualityOccursIn3FollowingDays) continue

    const cycleDayIndex = cycleDays.indexOf(day)

    // no best quality day may occur until temperature evaluation has
    // been completed
    const relevantDays = cycleDays
      .slice(cycleDayIndex + 1, tempEvalEndIndex + 1)
      .filter(day => typeof day.mucus === 'number')

    const noBestQualityUntilEndOfTempEval = relevantDays.every(day => {
      return day.mucus < currentBestQuality
    })

    if (noBestQualityUntilEndOfTempEval) {
      return {
        detected: true,
        mucusPeak: day,
        evaluationCompleteDay: threeFollowingDays[threeFollowingDays.length - 1]
      }
    }
  }

  return notDetected
}

