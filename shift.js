let arr=["jagesh", "btech", 34];
console.log(arr);

//shift function is used topo omit the first element in the array
arr.shift();
console.log(arr);

//unshift is used to add the element in the array at the starting index
arr.unshift("Jagesh");
console.log(arr);
console.log(arr);

//unshift can also be used to return the size of the new array
len=arr.unshift("jagesh");
console.log(len);