const imgContainer = document.querySelector(".img-container");

const timer = 4000;
let isRunning = true;

const showNextImage = () => {
  const images = imgContainer.querySelectorAll("img");

  const currentIndex = Array.from(images).findIndex((img) =>
    img.classList.contains("show")
  );

  const nextIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;

  images[currentIndex].classList.remove("show");
  images[nextIndex].classList.add("show");
};

let interval = setInterval(showNextImage, timer);

const togglePause = () => {
  imgContainer.classList[isRunning ? "remove" : "add"]("pause");
};

imgContainer.addEventListener("click", function () {
  if (isRunning) {
    clearInterval(interval);
    isRunning = false;
  } else {
    showNextImage();
    interval = setInterval(showNextImage, timer);
    isRunning = true;
  }

  togglePause();
});
