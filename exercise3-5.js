function palindrome(string) {

    var balikString = '';
    for (var i = string.length - 1; i >= 0; i--) {
      console.log(string[i]);
      balikString += string[i];
    } 
    if (string === balikString ) {
        return true
    } else {
        return false
    }
    }
    console.log(palindrome('katak'));//true
    console.log(palindrome('blanket')); // false
    console.log(palindrome('civic')); // true
    console.log(palindrome('kasur rusak')); // true
    console.log(palindrome('mister')); // false