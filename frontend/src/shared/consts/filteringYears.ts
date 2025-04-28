<<<<<<< HEAD
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
=======

export function filteringYears () {
    const nowYear: number = new Date().getFullYear();
    let lastYear: number = 2000;
    const filteringYears: number[] = [];

    while(nowYear >= lastYear) {
        filteringYears.push(lastYear)
        lastYear++;
    }

    return filteringYears;
}
>>>>>>> 6d89d5e6d5195afb7cb6975a9572e8d5741fdeb4
