const body = document.body;
const div = document.createElement('div');
div.classList.add('div');
const isDiv = div.classList.contains('div');
const isBox = div.classList.contains('box');

/*******************************************************/

// Only execute the console.log if "isDiv" equal to true
isDiv && console.log('Have class div');
// Remember, the logical operator AND "&&" will only execute some oparation, if both values are true. In this case, "isDiv" is true. When the code tries to check if the second value equals true, it will execute the "console.log".

/*******************************************************/

// Only execute the console.log if "isBox" equal to false
isBox || console.log('Do not have class box');
// Remember, the logical operator OR "||" will only perform any oparation, if at least one of the values is true. In this case, "isBox" is false. When the code tries to check if the second value equals true, it will execute the "console.log".