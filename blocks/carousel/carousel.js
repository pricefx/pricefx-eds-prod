import { loadFragment } from '../fragment/fragment.js';
import { LEFTCHEVRON, RIGHTCHEVRON } from '../../scripts/constants.js';

export default async function decorate(block) {
  const [carouselTitle, carouselDescription, carouselSlideFrag, isAutoSlide] = block.children;
  block.innerHTML = '';
  // TODO: Implementing this later
  console.log(isAutoSlide);

  // load Carousel Fragment
  const carouselFragPath = carouselSlideFrag.querySelector('a').href;
  const url = new URL(carouselFragPath);
  const fragmentPath = url.pathname;
  const fragment = await loadFragment(fragmentPath);

  // Create container to hold Carousel Title and Description
  const carouselDetails = document.createElement('div');
  carouselDetails.classList.add('carousel-details');
  block.append(carouselDetails);

  // Create Title element
  const title = document.createElement('h2');
  title.classList.add('carousel-title');
  title.textContent = carouselTitle.textContent.trim();
  carouselDetails.append(title);

  // Create Descritpion element
  const description = carouselDescription.firstElementChild;
  description.classList.add('carousel-description');
  carouselDetails.append(description);

  // Create container to hold the Carousel
  const carouselContentContainer = document.createElement('div');
  carouselContentContainer.classList.add('carousel-content-container');
  const carouselContent = document.createElement('div');
  carouselContent.classList.add('carousel-content');
  carouselContentContainer.append(carouselContent);
  block.append(carouselContentContainer);

  // Create container to hold all the carousel slides from Fragment
  const carouselTrackContainer = document.createElement('div');
  carouselTrackContainer.classList.add('carousel-track-container');
  carouselContent.append(carouselTrackContainer);
  while (fragment.firstElementChild) {
    carouselTrackContainer.append(fragment.firstElementChild);
  }
  const carouselTrack = carouselTrackContainer.firstChild;
  carouselTrack.classList.add('carousel-track');
  const carouselSlides = carouselTrack.children;
  [...carouselSlides].forEach((slide) => slide.classList.add('carousel-slide'));
  if (carouselContent.querySelector('.quote')) {
    block.setAttribute('data-carousel-type', 'carousel-quote');
  } else {
    block.setAttribute('data-carousel-type', 'carousel-image');
  }

  // Create Carousel Prev and Next CTAs
  const carouselPrevCta = document.createElement('button');
  carouselPrevCta.classList.add('carousel-prev-cta', 'hidden');
  carouselPrevCta.setAttribute('aria-label', 'Previous Slide');
  carouselPrevCta.innerHTML = LEFTCHEVRON;
  carouselContent.insertAdjacentElement('afterbegin', carouselPrevCta);

  const carouselNextCta = document.createElement('button');
  carouselNextCta.classList.add('carousel-next-cta');
  carouselNextCta.setAttribute('aria-label', 'Next Slide');
  carouselNextCta.innerHTML = RIGHTCHEVRON;
  carouselContent.insertAdjacentElement('beforeend', carouselNextCta);

  // Create container to hold the Carousel Navigation
  const carouselNavigation = document.createElement('div');
  carouselNavigation.classList.add('carousel-navigation');
  carouselContentContainer.append(carouselNavigation);

  const renderCarouselIndicator = () => {
    let markup = '';
    [...carouselSlides].forEach((slide, i) => {
      if ([...carouselSlides].indexOf(slide) === 0) {
        markup += `
          <button class="carousel-indicator active-slide" id="carousel-indicator-${i}"></button>
        `;
      } else {
        markup += `
          <button class="carousel-indicator" id="carousel-indicator-${i}"></button>
        `;
      }
    });
    return markup;
  };
  carouselNavigation.innerHTML = renderCarouselIndicator();
}
