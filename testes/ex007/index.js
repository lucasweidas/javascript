function comp(array1, array2) {
    if (array1 === null || array2 === null) return false;

    return array2
        .map(num => Math.sqrt(num))
        .reduce((res, num) => {
            if (array1.includes(num) && res) {
                array1.splice(array1.indexOf(num), 1);
                return true;
            }
            return false;
        }, true);

    // console.log(same);

    // if (array2 === null || array2 === null) return false;

    // return array2
    //     .map(num => Math.sqrt(num))
    //     .reduce((res, num) => {
    //         if (!array1.includes(num)) res = false;
    //         return res;
    //     }, true);
}
const a1 = [121, 144, 19, 161, 19, 144, 19, 11];
const a2 = [
    11 * 11,
    121 * 121,
    144 * 144,
    19 * 19,
    161 * 161,
    19 * 19,
    144 * 144,
    19 * 19,
];

a1.inde
console.log(comp(a1, a2));