let isShown = false;
let timeout = false;

function wakeUpNiwtify() {
    fetch(`https://niwtify.niweera.gq/v2`).catch(console.log)
}

function openSpotify(link) {
    window.location = link;
}

function showSpotify() {
    let popup = document.getElementById("myPopup");
    
    
    if (isShown){
        popup.classList.remove("show");
        if (timeout) clearTimeout(timeout);
        isShown = false;
        return;
    }

  fetch(`https://niwtify.niweera.gq/v2`)
        .then(response => {
            return response.json();
        })
        .then(data => {
                popup.innerHTML =`<div onclick="openSpotify('${data.musicLink?.spotify}')"><img src="${data.albumCover}"/><p>${data.songName}</p><p>${data.artistName}</p></div>`
                popup.classList.add("show");
                isShown = true
                timeout = setTimeout(()=>{popup.classList.remove("show"); isShown=false;},12000)
        })
        .catch(err => {
            console.log(err);
        });


    
  }