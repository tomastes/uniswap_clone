export const shortenString = (string: string) => {
  console.log(string);

  return ` ${string.slice(0, 6)} ... ${string.slice(
    string.length - 6,
    string.length
  )} `;
};
