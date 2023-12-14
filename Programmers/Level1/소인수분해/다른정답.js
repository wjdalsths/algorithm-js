const solution = (n) => {
  const counter = (n, i = 2, acc = []) => {
    if (i > n) {
      return [...new Set(acc)];
    }
    if (n % i === 0) {
      return counter(n / i, i, [...acc, i]);
    }
    return counter(n, i + 1, acc);
  };
  return counter(n);
};
