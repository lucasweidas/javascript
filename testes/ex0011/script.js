function solution(input, markers) {
  markers = ["%", "!"];
  input = "apples, plums % and bananas\npears\noranges !applesauce";
  const reg = /^[a-zA-Z,]*$/;
  return input.split('\n').reduce((res, str) => {
    if (reg.test(str)) {
      res.push(str);
      return res;
    }
    markers.forEach(mark => {
      str.includes(mark) && res.push(str.slice(0, str.indexOf(mark) - 1));
    });
    return res;
  }, []).join('\n');
}
console.log(solution());
