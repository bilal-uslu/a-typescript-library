export const sum = (a: number, b: number) => {
  if ('development' === process.env.NODE_ENV) {
    console.log('boopxxxxx1');
  }
  return a + b;
};
