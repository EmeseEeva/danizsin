// Given a string, compute recursively a new string where all the 'x' chars have been removed.
export { };
const baseString: string = 'x x x x x x x x erfre fre f ererf  x x x erfx x xrerx re';

function removeAllX(convertThis: string) {
  let newStringWithoutX: string = convertThis;
  if (convertThis.indexOf('x') === -1) {
    return newStringWithoutX;
  }
  return removeAllX(convertThis.replace('x', ''));
}

console.log(removeAllX(baseString));