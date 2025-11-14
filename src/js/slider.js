export function slider() {
  const slider = document.querySelector('.slider');
  const sliderSlide = document.querySelectorAll('.slider__slide');
  const sliderImages = document.querySelector('.slider__images');
  const sliderArrowRight = document.querySelector('.slider__arrow_right');
  const sliderArrowLeft = document.querySelector('.slider__arrow_left');
  const currentNumberSlide = document.querySelector(
    '.slider__number_current-number'
  );
  const totalNumberSlide = document.querySelector(
    '.slider__number-total-number'
  );
  const sliderControl = document.querySelectorAll('.slider__control');

  let current = 0;

  currentNumberSlide.textContent = '01';
  totalNumberSlide.textContent = `0${sliderSlide.length}`;

  const moveSlide = () => {
    sliderImages.style.transform = `translateX(-${current * 100}%)`;
  };

  const updateActiveSlide = () => {
    sliderSlide.forEach((slide, index) => {
      slide.classList.remove('slider__slide_active');
      if (index === current) {
        slide.classList.add('slider__slide_active');
      }
    });
  };

  const updateNumberSlide = () => {
    currentNumberSlide.textContent = `0${current + 1}`;
  };

  const updateControl = () => {
    sliderControl.forEach((control, index) => {
      control.classList.remove('slider__control_active');
      if (index === current) {
        control.classList.add('slider__control_active');
      }
    });
  };

  const updateStateSlider = () => {
    moveSlide();
    updateActiveSlide();
    updateNumberSlide();
    updateControl();
  };

  sliderArrowRight.addEventListener('click', function () {
    current++;
    if (current == sliderSlide.length) {
      current = 0;
    }
    updateStateSlider();
  });

  sliderArrowLeft.addEventListener('click', function () {
    if (current == 0) {
      current = sliderSlide.length;
    }
    current--;
    updateStateSlider();
  });

  const handleClickControl = () => {
    sliderControl.forEach((control, index) => {
      control.addEventListener('click', function() {
        current = index;
        updateStateSlider();
      });
    });
  };

  handleClickControl();
}
