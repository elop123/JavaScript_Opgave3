const myImages = ['Dinny-01.jpg', 'Dinny-02.jpg', 'Dinny-03.jpg', 'Dinny-04.jpg', 'Dinny-05.jpg',
'Dinny-06.jpg', 'Dinny-07.jpg', 'Dinny-08.jpg', 'Dinny-09.jpg'];

let myImageCount = 0;

let myGalleryElement = document.getElementById('gallery_image');

let myForward = document.getElementById("arrow_forward");

myForward.addEventListener('click', (e) => {

myImageCount++; // increase by 1

if (myImageCount >= myImages.length) {
myImageCount = 0;
}
showImage();

});

let myBack = document.getElementById("arrow_back");



myBack.addEventListener('click', (e) => {

myImageCount--; // decrement by 1

if (myImageCount < 0) {

myImageCount = myImages.length - 1;
}

showImage();
});

showImage();




// Function shows gallery images

function showImage() {

let myUrl = 'assets/images/' + myImages[myImageCount];

myGalleryElement.src = myUrl;
}
