function isPalindrome(x) {
   let reverseValue = x.toString().split("").reverse().join("");
   let xString = x.toString();
   if(reverseValue==xString)
   {
    return true;
   } else {
    return false;
   }
}