function formatDuration(seconds) {
    seconds = 31556952;
    if (seconds === 0) return 'now';

    // Seconds
    let sec = { time: 0, type: 'second' };
    sec.time = seconds;
    if (sec.time < 60) {
        return getFormat(sec);
    }
    let format = [];
    sec.time %= 60;
    format.push(sec);

    // Minutes
    let min = { time: 0, type: 'minute' };
    min.time = parseInt(seconds / 60);
    format.push(min);
    if (min.time < 60) {
        return getReturn(format.reverse().map(unit => getFormat(unit)).filter(unit => unit !== null));
    }
    min.time %= 60;

    // Hours
    let hrs = { time: 0, type: 'hour' };
    hrs.time = parseInt(seconds / 3600);
    format.push(hrs);
    if (hrs.time < 24) {
        return getReturn(format.reverse().map(unit => getFormat(unit)).filter(unit => unit !== null));
    }
    hrs.time %= 24;

    // Days
    let day = { time: 0, type: 'day' };
    day.time = parseInt(seconds / 86400);
    format.push(day);
    if (day.time < 365) {
        return getReturn(format.reverse().map(unit => getFormat(unit)).filter(unit => unit !== null));
    }
    day.time %= 365;

    // Years
    let year = { time: 0, type: 'year' };
    year.time = parseInt(seconds / 31556952);
    format.push(year);
    return getReturn(format.reverse().map(unit => getFormat(unit)).filter(unit => unit !== null));
}

function getFormat(unit) {
    switch (unit.time) {
        case 0:
            return null;
        case 1:
            return `${unit.time} ${unit.type}`;
        default:
            return `${unit.time} ${unit.type}s`;
    }
}

function getReturn(arr) {
    switch (arr.length) {
        case 1:
            return arr[0];
        case 2:
            return `${arr[0]} and ${arr[1]}`;
        case 3:
            return `${arr[0]}, ${arr[1]} and ${arr[2]}`;
        case 4:
            return `${arr[0]}, ${arr[1]}, ${arr[2]} and ${arr[3]}`;
        default:
            return `${arr[0]}, ${arr[1]}, ${arr[2]}, ${arr[3]} and ${arr[4]}`;
    }
}

console.log(formatDuration());