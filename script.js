const img = document.querySelector('img');

img.addEventListener('click', () => {
    img.style.transition = '1s';
    img.classList.toggle('transition');
})

document.addEventListener('keyup', function(e) {
    let anchorID;
    if (e.code === 'KeyA') {
        anchorID = document.querySelector('#one');
    } else if (e.code === 'KeyB') {
        anchorID = document.querySelector('#two');
    } else if (e.code === 'KeyC') {
        anchorID = document.querySelector('#three');
    } else if (e.code === 'KeyD') {
        anchorID = document.querySelector('#four')
    }    

    anchorID.scrollIntoView({
        behavior: 'smooth'
    })      
})