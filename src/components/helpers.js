function getSumPoints (points) {
  let acc = 0;
  let sum = points.reduce((acc, cv) => acc + cv);
  return sum;
}

export default getSumPoints;
