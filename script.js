const imgContainer = document.querySelector(".img-container");

const timer = 4000;
let isRunning = true;

const showNextImage = () => {
  const images = imgContainer.querySelectorAll("img");

  const cur = Array.from(images).findIndex((img) =>
    img.classList.contains("show")
  );

  const next = cur === images.length - 1 ? 0 : cur + 1;
  const prev = cur === 0 ? images.length - 1 : cur - 1;

  images[prev].classList.remove("previous");

  images[cur].classList.remove("show");
  images[cur].classList.add("previous");

  images[next].classList.add("show");
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

// imgContainer.addEventListener("click", function () {
//   showNextImage();
// });
