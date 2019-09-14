const sympto = require('.')

const cycle = [
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
]

const previousCyle = [
  { date: '2018-05-01', temperature: 36.7, bleeding: 2 },
  { date: '2018-05-02', temperature: 36.75 },
  { date: '2018-05-04', temperature: 36.7 },
  { date: '2018-05-05', temperature: 36.65 },
  { date: '2018-05-06', temperature: 36.8, mucus: 0 },
  { date: '2018-05-13', temperature: 36.9, mucus: 4 },
  { date: '2018-05-15', temperature: 37.0, mucus: 2 },
  { date: '2018-05-16', temperature: 37.0, mucus: 2 },
  { date: '2018-05-17', temperature: 37.0, mucus: 2 },
  { date: '2018-05-18', temperature: 37.0, mucus: 2 }
]

console.log(sympto({cycle, previousCyle}))