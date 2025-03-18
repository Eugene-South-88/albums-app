export function filterDataByKeys(data, filterKeys) {
  return data
    .filter(item => filterKeys.includes(item.key))
    .sort((a, b) => filterKeys.indexOf(a.key) - filterKeys.indexOf(b.key));
}
