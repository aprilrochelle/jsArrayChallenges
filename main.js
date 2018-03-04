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
    document.getElementById('challenge-1').innerHTML += inputArray1.join('');
} else if (array1Score < array2Score) {
    document.getElementById('challenge-1').innerHTML += inputArray2.join('');
} else {
    document.getElementById('challenge-1').innerHTML += inputArray[0];
};


// Challenge 2

var challengeTwoInputA = [1,2,3,4,5,6,7,8,9];  
var str 
for (var i=0; i<challengeTwoInputA.length; i++) {
    str = challengeTwoInputA[i].toString();
    if (str.includes('3')) {
        challengeTwoInputA[i] = 1 * (str.replace(/3/g, '7'));
        } else if (str.includes('7')) {
        challengeTwoInputA[i] = 1 * (str.replace(/7/g, '3'));
        } else {
        challengeTwoInputA[i] = 1 * str;
        }
    }
document.getElementById('challenge-2').innerHTML += challengeTwoInputA;

var challengeTwoInputB = [12,13,14];
var str2 
for (var i=0; i<challengeTwoInputB.length; i++) {
    str2 = challengeTwoInputB[i].toString();
    if (str2.includes('3')) {
        challengeTwoInputB[i] = 1 * (str2.replace(/3/g, '7'));
        } else if (str.includes('7')) {
        challengeTwoInputB[i] = 1 * (str2.replace(/7/g, '3'));
        } else {
        challengeTwoInputB[i] = 1 * str2;
        }
    }
document.getElementById('challenge-2').innerHTML += '<br>' + challengeTwoInputB;

var challengeTwoInputC = [9,2,4,7,3];
var str3 
for (var i=0; i<challengeTwoInputC.length; i++) {
    str3 = challengeTwoInputC[i].toString();
    if (str3.includes('3')) {
        challengeTwoInputC[i] = 1 * (str3.replace(/3/g, '7'));
        } else if (str3.includes('7')) {
        challengeTwoInputC[i] = 1 * (str3.replace(/7/g, '3'));
        } else {
        challengeTwoInputC[i] = 1 * str3;
        }
    }
document.getElementById('challenge-2').innerHTML += '<br>' + challengeTwoInputC;


// Challenge 4

var chall4A = [1,2,3];
for (var i=0; i<chall4A.length; i++) {
    chall4A[i] = chall4A[i] * 2;
};
document.getElementById('challenge-4').innerHTML += chall4A;

var chall4B = [ 3, 8, 1, 2, 4, 12 ];
for (var i=0; i<chall4B.length; i++) {
    chall4B[i] = chall4B[i] * 2;
};
document.getElementById('challenge-4').innerHTML += '<br>' + chall4B;


// Challenge 5

var array1 = [1,2];
var array2 = [1];
for (var i=0; i<array1.length; i++) {
    for (var j=0; j<array2.length; j++) {
        if (array1[i] === array2[j]) {
            array1.splice(i, 1);
        }
    }
}
document.getElementById('challenge-5').innerHTML += array1;

var array1 = [1, 2, 4, 7, 5, 9];
var array2 = [5, 9, 2];
for (var i=0; i<array1.length; i++) {
    for (var j=0; j<array2.length; j++) {
        if (array1[i] === array2[j]) {
            array1.splice(i, 1);
        }
    }
}
document.getElementById('challenge-5').innerHTML += '<br>' + array1;

=======
// Challenge 6

var test1 = [1,3];
var missing = [];
for (var i=1; i<test1.length + 1; i++) {
    if (test1.indexOf(i) === -1) {
        missing.push(i);
    }
}
document.getElementById('challenge-6').innerHTML += missing;

var test2 = [2,3,4];
var missing = [];
for (var i=1; i<test2.length + 1; i++) {
    if (test2.indexOf(i) === -1) {
        missing.push(i);
    }
}
document.getElementById('challenge-6').innerHTML += '<br>' + missing;

var test3 = [13,11,10,3,2,1,4,5,6,9,7,8];
var missing = [];
for (var i=1; i<test3.length + 1; i++) {
    if (test3.indexOf(i) === -1) {
        missing.push(i);
    }
}
document.getElementById('challenge-6').innerHTML += '<br>' + missing;

// Challenge 9

var phoneNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var num2 = phoneNumber.splice(0, 0, '(');
var num3 = phoneNumber.splice(4, 0, ') ');
var num4 = phoneNumber.splice(8, 0, '-');
document.getElementById('challenge-9').innerHTML += phoneNumber.join('');

// Challenge 10
bowlingPins = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (var i=0; i<bowlingPins.length; i++) {
    if (bowlingPins[i] === 3 || bowlingPins[i] === 5 || bowlingPins[i] === 9) {
        bowlingPins.splice(i, 1);
    }
}
document.getElementById('challenge-10').innerHTML += bowlingPins;
