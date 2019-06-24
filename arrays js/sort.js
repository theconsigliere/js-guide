const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 }
];

// Array.prototype.sort()
// * 3. Sort the inventors by birthdate, oldest to youngest
// The sort() method sorts the elements of an array in place and returns the sorted array.

// const ordered = inventors.sort((firstPerson, secondPerson) => {
//   if (firstPerson.year > secondPerson.year) {
//     return 1;
//   } else {
//     return -1;
//   }
// });

const ordered = inventors.sort((a, b) => (a.year > b.year ? 1 : -1));

console.log(ordered);

/*0: {first: "Lise", last: "Meitner", year: 1878, passed: 1968}
1: {first: "Max", last: "Planck", year: 1858, passed: 1947}
2: {first: "Isaac", last: "Newton", year: 1643, passed: 1727}
3: {first: "Katherine", last: "Blodgett", year: 1898, passed: 1979}
4: {first: "Hanna", last: "Hammarström", year: 1829, passed: 1909}
5: {first: "Galileo", last: "Galilei", year: 1564, passed: 1642}
6: {first: "Albert", last: "Einstein", year: 1879, passed: 1955}
7: {first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543}
8: {first: "Marie", last: "Curie", year: 1867, passed: 1934}
9: {first: "Johannes", last: "Kepler", year: 1571, passed: 1630}
10: {first: "Sarah E.", last: "Goode", year: 1855, passed: 1905}
11: {first: "Ada", last: "Lovelace", year: 1815, passed: 1852} */

// * 5. Sort the inventors by years lived

const oldest = inventors.sort((firstItem, secondItem) => {
  const firstGuy = firstItem.passed - firstItem.year;
  const secondGuy = secondItem.passed - secondItem.year;
  return firstGuy > secondGuy ? -1 : 1;
});

console.log(oldest);

/* 0: {first: "Lise", last: "Meitner", year: 1878, passed: 1968}
1: {first: "Max", last: "Planck", year: 1858, passed: 1947}
2: {first: "Isaac", last: "Newton", year: 1643, passed: 1727}
3: {first: "Katherine", last: "Blodgett", year: 1898, passed: 1979}
4: {first: "Hanna", last: "Hammarström", year: 1829, passed: 1909}
5: {first: "Galileo", last: "Galilei", year: 1564, passed: 1642}
6: {first: "Albert", last: "Einstein", year: 1879, passed: 1955}
7: {first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543}
8: {first: "Marie", last: "Curie", year: 1867, passed: 1934}
9: {first: "Johannes", last: "Kepler", year: 1571, passed: 1630}
10: {first: "Sarah E.", last: "Goode", year: 1855, passed: 1905}
11: {first: "Ada", last: "Lovelace", year: 1815, passed: 1852} */
