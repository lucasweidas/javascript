function findLyrics(artist, song) {
  return fetch(`https://api.lyrics.ovh/v1/${artist}/${song}`);
}

const form = document.querySelector('#search-form');
form.addEventListener('submit', e => {
  e.preventDefault();
  doSubmit();
});

async function doSubmit() {
  const lyric_letter = document.querySelector('#lyric-letter');
  const artist = document.querySelector('#input-artist');
  const song = document.querySelector('#input-song');

  // Using async await
  try {
    const findLyricsResponse = await findLyrics(artist.value, song.value);
    const data = await findLyricsResponse.json();
    if (data.lyrics) {
      lyric_letter.innerText = data.lyrics;
    } else {
      lyric_letter.innerText = data.error;
    }
  } catch (error) {
    console.log(error);
  }

  // Using then
  // findLyrics(artist.value, song.value)
  //   .then(response => response.json())
  //   .then(data => {
  //     if (data.lyrics) {
  //       lyric_letter.innerText = data.lyrics;
  //     } else {
  //       lyric_letter.innerText = data.error;
  //     }
  //   })
  //   .catch(error => {
  //     lyric_letter.innerText = `Sorry, we can\'t find this song! ${error}`;
  //   });
}
