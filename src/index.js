module.exports = function check(str, bracketsConfig) {
  const string = str;
  const diff = ['|','7','8'];
  const closedBr = [')',']','}','2','4','6'];
  const openedBr = ['(','[','{','1','3','5'];
  const stack = [];
  if (!openedBr.find((bracket)=>bracket===string[0]) && !diff.find((bracket)=>bracket===string[0])) {
    return false;
  } else {
      for (var i = 0; i < string.length; i++) {
          if (openedBr.find(bracket=>bracket===string[i]) || diff.find(bracket=>bracket===string[i]))
              {
                if (diff.find(bracket=>bracket===string[i] && stack[stack.length-1]===string[i])) {
                  stack.pop();
                  continue;
                 }
                stack.push(string[i]);
               }
     else if (closedBr.find((bracket)=>bracket===string[i]) ) {
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
