import { slotCadence } from './SlotMachineCadence';

const roundOne = [ 
  { column: 0, row: 2 },
  { column: 1, row: 3 },
  { column: 3, row: 4 },
]

const roundTwo = [ 
  { column: 0, row: 2 },
  { column: 0, row: 3 }
]

describe('slotCadence test function', () => {
  test('should return a correct array with roundOne', () => {
    const result = [0, 0.25, 0.5, 0.75 , 1]
    expect(slotCadence(roundOne)).toStrictEqual(result);
  });

  test('should return a correct array with roundTwo', () => {
    const result = [0, 2, 2.25, 2.5, 2.75]
    expect(slotCadence(roundTwo)).toStrictEqual(result);
  });

  test('should return a not null result', () => {
    const result = []
    expect(slotCadence([])).not.toBe(result);
  });

  test('should return a default cadence result', () => {
    const result = [0, 0.25, 0.5, 0.75, 1]
    expect(slotCadence([])).toStrictEqual(result);
  });
})

