export function filteringYears() {
  const nowYear: number = new Date().getFullYear();
  let lastYear = 2000;
  const filteringYears: number[] = [];

  while (nowYear >= lastYear) {
    filteringYears.push(lastYear);
    lastYear++;
  }

  return filteringYears;
}
