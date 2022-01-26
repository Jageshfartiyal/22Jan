let add="this is a string string";

//length is used to find the length of the string
console.log(add.length);

//indexof is used to find the starting index 
//if there are multiple occurence then lastIndexof is used to find the last word
//console.log(add.indexOf("string"));
console.log(add.lastIndexOf("string"))

//slice is used to return the character from the starting index to the ending index
console.log(add.slice(5,10))

//replace is used to replace the string 
console.log(add.replace("is","was"))