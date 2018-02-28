module.exports = function check(str, bracketsConfig) {
  const string = str;
  const roundBr = ['(', ')'];
  const squareBr = ['[', ']'];
  const curlyBr = ['{', '}'];
  const straightBr = ['|', '|'];
  const closedBr = [')',']','}'];
  const openedBr = ['(','[','{'];
  const stack = [];
  let state = true;
  if (!openedBr.find((bracket)=>bracket===string[0]) && string[0]!=='|') {
    return false;
  } else {
      for (var i = 0; i < string.length; i++) {
          if (openedBr.find(bracket=>bracket===string[i]) || string[i]==='|')
              { stack.push(string[i]); }
     else if (closedBr.find((bracket)=>bracket===string[i])) {
              let closedOneIndex = closedBr.indexOf(string[i]);
              let openedOne = openedBr[closedOneIndex];
              if (stack[stack.length-1]===openedOne) stack.pop();
              else stack.push(string[i]);
          }
            else { break;}
        };
          if (stack.length===0) return true;
          else return false;
      }
}
