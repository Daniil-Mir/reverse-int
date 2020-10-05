module.exports = function reverse (n) {
  let s = n.toString().split('');
  let temp = [];

   if (s[0] === '-') { // Remove minus if any
       s.shift();
   };

   let nonZero = false;
   for (let i = s.length - 1; i >= 0; i--) { // Strips zeros from the end
       if (s[i] === '0' && !nonZero) {
           s.pop();
       } else {
           nonZero = true;
       };
   };

  for (let i = s.length - 1; i >= 0; i--) { // reverse
        temp.push(s[i]);
  };

  let res = temp.join('');
  return Number(res);
}
