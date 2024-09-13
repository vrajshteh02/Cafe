
var swiper = new Swiper('.swiper', {
  speed: 1000,
  spaceBetween: 100,
  initialSlide: 0,
  autoHeight: false,
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 2000,
  },
  autoplayStopOnLast: false,

  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: false,
    clickable: true
  },

  navigation: {
    nextEl: '.carousel-control-next',
    prevEl: '.carousel-control-prev',
  },

  effect: 'slide',

  slidesOffsetBefore: 0,

  grabCursor: true,

  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    575: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    991: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 20
    }
  }
})

//gallery modal

let modal = document.getElementById('imageModal');
let modalImg = document.getElementById('modalImage');
let imageNumber = document.getElementById('imageNumber');
let currentIndex = 0;

let imgList = document.getElementsByClassName('img-click');

for (let i = 0; i < imgList.length; i++) {
  imgList[i].onclick = function () {
    modal.style.display = 'block';
    modalImg.src = this.src;
    currentIndex = i;
    updateImageNumber();
  };
}

function changeImage(direction) {
  currentIndex += direction;

  if (currentIndex >= imgList.length) {
    currentIndex = 0;
  }
  if (currentIndex < 0) {
    currentIndex = imgList.length - 1;
  }

  modalImg.src = imgList[currentIndex].src;
  updateImageNumber();
}

function updateImageNumber() {
  imageNumber.innerHTML = `Image ${currentIndex + 1} of ${imgList.length}`;
}

let span = document.getElementsByClassName('close')[0];
span.onclick = function () {
  modal.style.display = 'none';
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};

document.onkeydown = function (event) {
  if (modal.style.display === 'block') {
    switch (event.key) {
      case 'ArrowLeft':
        changeImage(-1);
        break;
      case 'ArrowRight':
        changeImage(1);
        break;
      case 'Escape':
        modal.style.display = 'none';
        break;
    }
  }
};



