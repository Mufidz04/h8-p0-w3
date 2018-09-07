function balikString(string) {

var balikString = '';
for (var i = string.length - 1; i >= 0; i--) {
  console.log(i, string[i]);
  balikString += string[i];
} 
string = balikString;
return string;
}
console.log(balikString('Hello World!'));