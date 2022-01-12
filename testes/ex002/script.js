(() => {
    const slideImages = document.querySelectorAll('.slide img');
    let counter = 1;
    setInterval(() => {
        document.querySelector(`#radio${counter}`).checked = true;
        if (counter <= slideImages.length -1) return counter++;
        counter = 1;
    }, 5000);
})();