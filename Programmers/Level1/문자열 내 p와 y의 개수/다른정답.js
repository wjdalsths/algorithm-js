function numPY(s) {
  return s.match(/p/gi).length == s.match(/y/gi).length;
}
console.log(numPY("pPoooyY"));
console.log(numPY("Pyy"));
