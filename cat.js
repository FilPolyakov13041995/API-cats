const img = document.querySelector('img');

fetch('https://api.giphy.com/v1/gifs/translate?api_key=JIjIrxP7IKLm3Ja84JR1S2FkIMXoWQJt&s=cats',
{mode: 'cors'})
    
.then(response => {
    return response.json();
})
.then(response => {
    img.src = response.data.images.original.url;
    console.log(response);
});