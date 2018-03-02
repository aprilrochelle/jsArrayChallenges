// Challenge 1

var challengeOneInput = "jumbo shrimp";
var inputArray = challengeOneInput.split(' ');
var inputArray1 = inputArray[0].split('');
var inputArray2 = inputArray[1].split('');
var array1Score = 0;
var array2Score = 0;

for (var i=0; i<inputArray1.length; i++) {
    array1Score += inputArray1[i].charCodeAt();
}
for (var j=0; j<inputArray2.length; j++) {
    array2Score += inputArray2[j].charCodeAt();
}

if (array1Score > array2Score) {
    document.getElementById('challenge-1').innerHTML = inputArray1.join('');
} else if (array1Score < array2Score) {
    document.getElementById('challenge-1').innerHTML = inputArray2.join('');
} else {
    document.getElementById('challenge-1').innerHTML = inputArray[0];
};

