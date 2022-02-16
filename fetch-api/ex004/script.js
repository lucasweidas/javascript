const imagesURL = ['./images/afternoon.jpg', './images/beach.jpg', './images/montain.jpg'];

imagesURL.forEach(image => {
  getImage(image);
});

async function getImage(image) {
  try {
    const response = await fetch(image);
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    const img = document.createElement('img');
    img.src = url;
    document.body.appendChild(img);
  } catch (error) {
    console.error(error);
  }
}
