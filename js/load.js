let images = document.querySelectorAll('img')
let eliminarLoader = document.querySelector('.js-loader')


    imagesLoaded( images, function() {
        console.log('all images are loaded');
        eliminarLoader.classList.toggle('activo')
    });
