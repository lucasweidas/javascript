// If you do not pass any argumment, the value of the "name" parameter will be "undefined" and undefined is a (Falsy) value. Therefore, when the code tests whether the value of "name" is true, there will be false, so it will assign "myself" to the name parameter.
function bestFriend(name) {
  name = name || 'myself';
  console.log(`My best friend is ${name}`);
}
bestFriend();
bestFriend('Thiago');
