function findOutlier(integers) {
    let outlier = integers.reduce(
        (acc, curr) => {
            if (curr % 2) {
                acc[0].push(curr);
            } else {
                acc[1].push(curr);
            }
            return acc;
        },
        [[], []]
    );
    if (outlier[0].length < outlier[1].length) return outlier[0].pop();
    return outlier[1].pop();
}
console.log(findOutlier([21, 61, 81, 101, 30]));