import { loadFragment } from '../fragment/fragment.js';
import { LEFTCHEVRON, RIGHTCHEVRON } from '../../scripts/constants.js';

export default async function decorate(block) {
  const [carouselTitle, carouselDescription, carouselSlideFrag, isAutoSlide] = block.children;
  block.innerHTML = '';

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
  const description = document.createElement('p');
  description.classList.add('carousel-descritpion');
  description.textContent = carouselDescription.textContent.trim();
  carouselDetails.append(description);

  // Create container to hold the Carousel
  const carouselContainer = document.createElement('div');
  carouselContainer.classList.add('carousel-wrapper');
  block.append(carouselContainer);

  // Create container to hold all the carousel slides from Fragment
  const carouselPanels = document.createElement('div');
  carouselPanels.classList.add('carousel-panels-container');
  carouselContainer.append(carouselPanels);
  while (fragment.firstElementChild) {
    carouselPanels.append(fragment.firstElementChild);
  }

  // Create container to hold the Carousel navigations (Previous and Next arrows)
  const carouselNavigation = document.createElement('div');
  carouselNavigation.classList.add('carousel-nav');
  carouselContainer.append(carouselNavigation);
  carouselNavigation.innerHTML = `
    <button class="carousel-prev hidden" aria-label="Previous Slide">${LEFTCHEVRON}</button>
    <button class="carousel-next" aria-label="Next Slide">${RIGHTCHEVRON}</button>
  `;

  // Create container to hold the Carousel paginations
  const carouselPagination = document.createElement('div');
  carouselPagination.classList.add('carousel-pagination');
  carouselContainer.append(carouselPagination);
  carouselPagination.innerHTML = `
    <button class="carousel-page active" id="carousel-page-1"></button>
    <button class="carousel-page" id="carousel-page-2"></button>
    <button class="carousel-page" id="carousel-page-3"></button>
  `;
}
