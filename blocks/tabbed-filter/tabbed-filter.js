import ffetch from '../../scripts/ffetch.js';

/**
 * Helps set multiple attributes to an element at once
 * @param {Element} element The element you want to set the attributes to
 * @param {attributes} Object An object containing the attributes as key/value pairs
 */
const setAttributes = (element, attributes) => {
  Object.entries(attributes).forEach(([key, val]) => {
    element.setAttribute(key, val);
  });
};

export default async function decorate(block) {
  const [spreadsheetPath, showMoreLabel] = block.children;
  block.textContent = '';

  // Fetch client logos from JSON endpoint
  const clientData = await ffetch(spreadsheetPath.textContent.trim()).all();
  console.log(clientData);

  // Create eyebrow element
  // TODO: Add check for eyebrow text
  const eyebrowEl = document.createElement('p');
  eyebrowEl.classList.add('tabbed-filter__eyebrow');
  eyebrowEl.textContent = 'Clients Tell All';
  block.append(eyebrowEl);

  // Create title element
  // TODO: Add check for title text
  const titleEl = document.createElement('h2');
  titleEl.classList.add('tabbde-filter__title');
  titleEl.textContent = 'Trusted By Customers Globally';
  block.append(titleEl);

  // Create container to hold the filter dropdowns
  // TODO: Add check to see if filter title(s) exist
  const tabbedFilterContainer = document.createElement('div');
  tabbedFilterContainer.classList.add('tabbed-filter__filters-container');
  block.append(tabbedFilterContainer);

  // Create industries filter
  // TODO: Add check to see if industries filter exist
  const industriesFilterContainer = document.createElement('div');
  industriesFilterContainer.classList.add('tabbed-filter__industries-filter-container');
  tabbedFilterContainer.append(industriesFilterContainer);
  const industriesFilterLabel = document.createElement('label');
  industriesFilterLabel.classList.add('sr-only');
  setAttributes(industriesFilterLabel, { for: 'filter-industries' });
  const industriesFilter = document.createElement('select');
  industriesFilter.classList.add('tabbed-filter__industries-filter');
  setAttributes(industriesFilter, { name: 'filter-industries', id: 'filter-industries' });
  industriesFilterContainer.append(industriesFilterLabel);
  industriesFilterContainer.append(industriesFilter);

  industriesFilter.innerHTML = `
    <option value="all-industries" selected>Industries</option>
    <option value="automotive">Automotive</option>
    <option value="chemicals">Chemicals</option>
    <option value="manufacturing">Manufacturing</option>
  `;

  // Create regions filter
  // TODO: Add check to see if regions filter exist
  const regionsFilterContainer = document.createElement('div');
  regionsFilterContainer.classList.add('tabbed-filter__regions-filter-container');
  tabbedFilterContainer.append(regionsFilterContainer);
  const regionsFilterLabel = document.createElement('label');
  regionsFilterLabel.classList.add('sr-only');
  setAttributes(regionsFilterLabel, { for: 'filter-regions' });
  const regionsFilter = document.createElement('select');
  regionsFilter.classList.add('tabbed-filter__regions-filter');
  setAttributes(regionsFilter, { name: 'filter-regions', id: 'filter-regions' });
  regionsFilterContainer.append(regionsFilterLabel);
  regionsFilterContainer.append(regionsFilter);

  regionsFilter.innerHTML = `
    <option value="all-regions" selected>All Regions</option>
    <option value="apac">APAC</option>
    <option value="emea">EMEA</option>
    <option value="america">America</option>
  `;

  // Create content container
  // TODO: Add check to see if clientData exist
  const contentContainer = document.createElement('ul');
  contentContainer.classList.add('tabbed-filter__content-container');
  block.append(contentContainer);

  // Render client logos
  contentContainer.innerHTML = `
    <li class="tabbed-filter__content-item">
      <img class="tabbed-filter__content-item-image" src="https://www.pricefx.com/wp-content/uploads/2021/03/Allosource_logo.png" alt="placeholder alt text">
    </li>
    <li class="tabbed-filter__content-item">
      <img class="tabbed-filter__content-item-image" src="https://www.pricefx.com/wp-content/uploads/2021/03/AMAG.svg" alt="placeholder alt text">
    </li>
    <li class="tabbed-filter__content-item">
      <img class="tabbed-filter__content-item-image" src="https://www.pricefx.com/wp-content/uploads/2022/11/Aeromexico-Logo.png" alt="placeholder alt text">
    </li>
    <li class="tabbed-filter__content-item">
      <img class="tabbed-filter__content-item-image" src="https://www.pricefx.com/wp-content/themes/pricefx-v2/dest/img/clients/client_Anda.svg" alt="placeholder alt text">
    </li>
    <li class="tabbed-filter__content-item">
      <img class="tabbed-filter__content-item-image" src="https://www.pricefx.com/wp-content/uploads/2021/03/Allosource_logo.png" alt="placeholder alt text">
    </li>
    <li class="tabbed-filter__content-item">
      <img class="tabbed-filter__content-item-image" src="https://www.pricefx.com/wp-content/uploads/2021/03/AMAG.svg" alt="placeholder alt text">
    </li>
    <li class="tabbed-filter__content-item">
      <img class="tabbed-filter__content-item-image" src="https://www.pricefx.com/wp-content/uploads/2022/11/Aeromexico-Logo.png" alt="placeholder alt text">
    </li>
    <li class="tabbed-filter__content-item">
      <img class="tabbed-filter__content-item-image" src="https://www.pricefx.com/wp-content/themes/pricefx-v2/dest/img/clients/client_Anda.svg" alt="placeholder alt text">
    </li>
    <li class="tabbed-filter__content-item">
      <img class="tabbed-filter__content-item-image" src="https://www.pricefx.com/wp-content/uploads/2021/03/Allosource_logo.png" alt="placeholder alt text">
    </li>
    <li class="tabbed-filter__content-item">
      <img class="tabbed-filter__content-item-image" src="https://www.pricefx.com/wp-content/uploads/2021/03/AMAG.svg" alt="placeholder alt text">
    </li>
    <li class="tabbed-filter__content-item">
      <img class="tabbed-filter__content-item-image" src="https://www.pricefx.com/wp-content/uploads/2022/11/Aeromexico-Logo.png" alt="placeholder alt text">
    </li>
    <li class="tabbed-filter__content-item">
      <img class="tabbed-filter__content-item-image" src="https://www.pricefx.com/wp-content/themes/pricefx-v2/dest/img/clients/client_Anda.svg" alt="placeholder alt text">
    </li>
  `;

  // Create show more CTA
  // TODO: Add check to see if showMoreCta filter exist
  const showMoreCta = document.createElement('button');
  showMoreCta.classList.add('tabbed-filter__show-more-cta', 'primary');
  showMoreCta.textContent = showMoreLabel.textContent.trim();
  block.append(showMoreCta);
}
