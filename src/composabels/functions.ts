
export const formateNumber = (n: number) => {
  let doubleNumber = n.toFixed(2);
  return parseFloat(doubleNumber).toLocaleString();
};