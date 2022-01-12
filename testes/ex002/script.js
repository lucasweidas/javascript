(() => {
    let number = 1;
    setInterval(() => {
        console.log('sim');
        document.querySelector(`#radio${number}`).checked = true;
        if (number < 4) return number++;
        number = 1;
    }, 5000);
})();