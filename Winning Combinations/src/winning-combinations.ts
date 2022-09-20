
type WinningCombinationsResult = [number, number[]][];

function call(lines: number[]): WinningCombinationsResult {
  
  const noPaying = [10, 11, 12, 13, 14, 15];
  const results: WinningCombinationsResult = [];
  lines.forEach((value1, index1) => {
    if (noPaying.includes(value1)) return;
    let referenceValue = value1;
    let ended = false;
    let repeatedIndex = [index1];

    lines.forEach((value2, index2) => {
      if (index2 <= index1) return;
      if (referenceValue === 0) {
        referenceValue = value2;
        repeatedIndex.push(index2);
      } else if (!ended && referenceValue === value2 
        || (!ended && value2 === 0)) {
        repeatedIndex.push(index2);
      } else {
        ended = true;
        return;
      };
    });

    if (repeatedIndex.length >= 3) {
      const onlyZeroes = lines.filter(n => n === 0).length === lines.length;
      if (referenceValue === 0 && !onlyZeroes) return;
      if (results.find(r => r[0] === referenceValue)) return;
      results.push([referenceValue, [...repeatedIndex]]);
    }
  });

  return results;
}
export const WinningCombinations = { call };
