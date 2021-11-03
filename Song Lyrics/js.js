const form = document.getElementById('form');
const search = document.getElementById('search');
const result = document.getElementById('result');
const more = document.getElementById('more');

const apiURL = 'https://api.lyrics.ovh';


form.addEventListener('submit', e => {
    e.preventDefault(); // prevent it from submitting the form
  
    const searchTerm = search.value.trim();
  
    searchSongs(searchTerm);
    
});



async function searchSongs(term){

    const song = await fetch(`${apiURL}/suggest/${term}`);

    const data = await song.json();

    showData(data);
}


function showData(data){

    result.innerHTML = `

        <ul class="songs">

            ${ data.data.map( song => `
                                    <li>
                                        <span> 
                                            <span class="artistName"> <strong> ${song.artist.name} </strong></span> - ${song.title}
                                        </span>     

                                        <button class="btn" data-artist="${song.artist.name}" data-songtitle="${song.title}">
                                            Get Lyrics
                                        </button>
                    
                                    </li> ` ).join('')  // remove ( , )

            }
        
        </ul>`;
        
}


    
result.addEventListener('click', e => {
    const clickedEl = e.target;
  
    if (clickedEl.tagName === 'BUTTON') {

      const artist = clickedEl.getAttribute('data-artist');
      const songTitle = clickedEl.getAttribute('data-songtitle');
  
      getLyrics(artist, songTitle);
    }
  }); 
  
  
async function getLyrics(artist, songTitle) {

  const res = await fetch(`${apiURL}/v1/${artist}/${songTitle}`);
  const data = await res.json();

   if (data.error) 
        result.innerHTML = data.error;
   else {
        const lyrics = data.lyrics.replace(/(\r\n|\r|\n)/g, '<br>');

        result.innerHTML = `
            <h2><strong>${artist}</strong> - ${songTitle}</h2>
            <span>${lyrics}</span>`;
  }

  more.innerHTML = '';
}
    
    
    

