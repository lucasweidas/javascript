async function getAfternoon() {
  try {
    const response = await fetch('./afternoon.jpg');
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    document.querySelector('#afternoon').src = url;
  } catch (error) {
    console.error(error);
  }
}
getAfternoon();

/* 
fetch('./afternoon.jpg')
  .then(response => response.blob())
  .then(blob => {
    const url = URL.createObjectURL(blob);
    document.querySelector('#afternoon').src = url;
  })
  .catch(error => console.error(error)); 
*/
