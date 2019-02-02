# Sympto

Accepts an array of cycle days (one cycle) and returns the symptothermal status for that cycle. Run `node example.js` for a demo.

## Usage

Pass in all necessary info as an object with the following properties:

* cycle: An array of the cycle's days in object form. See the assertions in index.js for how to format them.
* previousCycle (_optional_): Same format as cycle. Sympto must be able to detect ovulation in the previous cycle in order to detect a pre-ovulatory phase.
* earlierCycles (_optional_): Needed to correctly determine pre-pvulatory phase length.
* secondarySymptom (_default: `mucus`_): Determines which values are used for symptothermal evaluation, can be `'mucus'` or `'cervix`.
* excludePreOvu (_default: `false`_): Pass in true if you don't want the pre-ovulatory phase to be included in the status.