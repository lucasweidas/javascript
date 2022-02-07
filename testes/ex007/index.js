function formatDuration(seconds) {
    seconds = 3661;
    // Seconds
    if (seconds === 0) return 'now';
    if (seconds < 60) {
        return getSecTxt(seconds);
    }
    // Minutes
    let sec = seconds % 60;
    let min = (seconds - sec) / 60;
    if (min < 60) {
        if (sec === 0) return getMinTxt(min);
        return `${getMinTxt(min)} and ${getSecTxt(sec)}`;
    }
    // Hours
    let hrs = parseInt(min / 60);
    min %= 60;
    if (hrs <= 23) {
        if (min === 0) return `${getHrsTxt(hrs)}`;
        if (sec === 0) return `${getHrsTxt(hrs)} and ${getMinTxt(min)}`;
        return `${getHrsTxt(hrs)}, ${getMinTxt(min)} and ${getSecTxt(sec)}`;
    }
}

function getSecTxt(seconds) {
    let txt = '';
    switch (seconds) {
        case 0:
            break;
        case 1:
            txt = `${seconds} second`;
            break;
        default:
            txt = `${seconds} seconds`;
    }
    return txt;
}

function getMinTxt(minutes) {
    let txt = '';
    switch (minutes) {
        case 0:
            break;
        case 1:
            txt = `${minutes} minute`;
            break;
        default:
            txt = `${minutes} minutes`;
    }
    return txt;
}

function getHrsTxt(hours) {
    let txt = '';
    switch (hours) {
        case 0:
            break;
        case 1:
            txt = `${hours} hour`;
            break;
        default:
            txt = `${hours} hours`;
    }
    return txt;
}

console.log(formatDuration());
