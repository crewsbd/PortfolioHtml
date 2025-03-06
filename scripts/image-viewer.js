const imageViewer = document.getElementById("image-dialog");
const modalImage = document.querySelector("#image-dialog-image");
const images = document.querySelectorAll("img.clickable");

imageViewer.addEventListener("click", (event) => {
  event.currentTarget
    .animate([{ transform: "scale(1)" }, { transform: "scale(0)" }], {
      duration: 200,
    })
    .finished.then(() => {
      imageViewer.classList.remove("zoom-in");
      imageViewer.close();
    });
});

// Add an onclick to all clickable images
images.forEach((imageElement) => {
  console.log("loop");
  imageElement.addEventListener("click", (event) => {
    imageViewer.classList.add("zoom-in");
    const file = imageElement.currentSrc;
    modalImage.src = file;
    imageViewer.showModal();
  });
});
