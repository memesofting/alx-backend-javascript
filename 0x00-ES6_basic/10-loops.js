export default function appendToEachArrayValue(array, appendString) {
  const result = [];
  for (const idx of array) {
    // const value = appendString + idx;
    // result += value;
    result.push(appendString + idx);
  }

  return result;
}
