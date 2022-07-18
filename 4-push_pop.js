var lastBench = ['kalam', 'balam', 'salam'];
console.log(lastBench);
lastBench.push('Shibly');
lastBench.push('Noman');
lastBench.push('Rayan');
console.log(lastBench);
lastBench.pop();
console.log(lastBench);

// push:- add element in a array as  the last element
// pop:- remove element from last

var friendsAge = [12, 54, 15, 14, 21];
console.log(friendsAge);
friendsAge.pop();
friendsAge.pop();
friendsAge.pop();
friendsAge.pop();
friendsAge.pop();
friendsAge.pop();
friendsAge.pop();
console.log(friendsAge); //result: [] --when there is nothing to pop from the array

var myFriends = ['Alif', 'Shagor', 'Sayem', 'Hridoy', 'Someone'];
console.log(myFriends);
var lastFriend = myFriends.pop();
console.log(myFriends);
console.log(lastFriend);//this is how we can store the deleted variable or the value

// js remove first item from an array!! -array.shift()
// js add element to an array from the beginning!! -array.unshift()