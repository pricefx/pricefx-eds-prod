import ffetch from '../../scripts/ffetch.js';

// TODO: Remove placeholder data
const data = [
  {
    ':path': '/content/pricefx/en/spreadsheets/customers-logo/jcr:content/row',
    industries: 'Automotive',
    region: 'APAC',
    logo: 'https://www.pricefx.com/wp-content/uploads/2021/03/Allosource_logo.png',
    'alt text': 'bosch logo',
  },
  {
    ':path': '/content/pricefx/en/spreadsheets/customers-logo/jcr:content/row_591676672',
    industries: 'Chemicals',
    region: 'APAC',
    logo: 'https://www.pricefx.com/wp-content/uploads/2021/03/AMAG.svg',
    'alt text': 'ineos-styrolution logo',
  },
  {
    ':path': '/content/pricefx/en/spreadsheets/customers-logo/jcr:content/row_651532577',
    industries: 'Manufacturing',
    region: 'APAC',
    logo: 'https://www.pricefx.com/wp-content/uploads/2022/11/Aeromexico-Logo.png',
    'alt text': 'client-avery-dennison logo',
  },
  {
    ':path': '/content/pricefx/en/spreadsheets/customers-logo/jcr:content/row_828414009',
    industries: 'Manufacturing',
    region: 'APAC',
    logo: 'https://www.pricefx.com/wp-content/themes/pricefx-v2/dest/img/clients/client_Anda.svg',
    'alt text': 'bosch logo',
  },
  {
    ':path': '/content/pricefx/en/spreadsheets/customers-logo/jcr:content/row_460504866',
    industries: 'Manufacturing',
    region: 'APAC',
    logo: 'https://www.pricefx.com/wp-content/uploads/2021/03/Allosource_logo.png',
    'alt text': 'iPlex logo',
  },
  {
    ':path': '/content/pricefx/en/spreadsheets/customers-logo/jcr:content/row_1533474562',
    industries: 'Manufacturing',
    region: 'APAC',
    logo: 'https://www.pricefx.com/wp-content/uploads/2021/03/AMAG.svg',
    'alt text': 'schneider-electric logo',
  },
  {
    ':path': '/content/pricefx/en/spreadsheets/customers-logo/jcr:content/row_683254420',
    industries: 'Manufacturing',
    region: 'APAC',
    logo: 'https://www.pricefx.com/wp-content/uploads/2022/11/Aeromexico-Logo.png',
    'alt text': 'firth logo',
  },
  {
    ':path': '/content/pricefx/en/spreadsheets/customers-logo/jcr:content/row_1026339906',
    industries: 'Manufacturing',
    region: 'APAC',
    logo: 'https://www.pricefx.com/wp-content/themes/pricefx-v2/dest/img/clients/client_Anda.svg',
    'alt text': 'fletcher-building logo',
  },
  {
    ':path': '/content/pricefx/en/spreadsheets/customers-logo/jcr:content/row_846019456',
    industries: 'Manufacturing',
    region: 'APAC',
    logo: 'https://www.pricefx.com/wp-content/uploads/2021/03/Allosource_logo.png',
    'alt text': 'stramit logo',
  },
  {
    ':path': '/content/pricefx/en/spreadsheets/customers-logo/jcr:content/row_1383342826',
    industries: 'Automotive',
    region: 'EMEA',
    logo: 'https://www.pricefx.com/wp-content/uploads/2021/03/AMAG.svg',
    'alt text': 'bosch logo',
  },
  {
    ':path': '/content/pricefx/en/spreadsheets/customers-logo/jcr:content/row_372393629',
    industries: 'Automotive',
    region: 'EMEA',
    logo: 'https://www.pricefx.com/wp-content/uploads/2022/11/Aeromexico-Logo.png',
    'alt text': 'bpw-logo',
  },
  {
    ':path': '/content/pricefx/en/spreadsheets/customers-logo/jcr:content/row_854787783',
    industries: 'Automotive',
    region: 'EMEA',
    logo: 'https://www.pricefx.com/wp-content/themes/pricefx-v2/dest/img/clients/client_Anda.svg',
    'alt text': 'corteco',
  },
  {
    ':path': '/content/pricefx/en/spreadsheets/customers-logo/jcr:content/row_2020050424',
    industries: 'Automotive',
    region: 'EMEA',
    logo: 'https://www.pricefx.com/wp-content/uploads/2021/03/Allosource_logo.png',
    'alt text': 'client-d-Ieteren',
  },
  {
    ':path': '/content/pricefx/en/spreadsheets/customers-logo/jcr:content/row_315124815',
    industries: 'Automotive',
    region: 'EMEA',
    logo: 'https://www.pricefx.com/wp-content/uploads/2021/03/AMAG.svg',
    'alt text': 'client-elring',
  },
  {
    ':path': '/content/pricefx/en/spreadsheets/customers-logo/jcr:content/row_2073884623',
    industries: 'Automotive',
    region: 'EMEA',
    logo: 'https://www.pricefx.com/wp-content/uploads/2022/11/Aeromexico-Logo.png',
    'alt text': 'client-fricke',
  },
  {
    ':path': '/content/pricefx/en/spreadsheets/customers-logo/jcr:content/row_1136580143',
    industries: 'Automotive',
    region: 'EMEA',
    logo: 'https://www.pricefx.com/wp-content/themes/pricefx-v2/dest/img/clients/client_Anda.svg',
    'alt text': 'iveco',
  },
  {
    ':path': '/content/pricefx/en/spreadsheets/customers-logo/jcr:content/row_661677933',
    industries: 'Automotive',
    region: 'EMEA',
    logo: 'https://www.pricefx.com/wp-content/uploads/2021/03/Allosource_logo.png',
    'alt text': 'client-mahle',
  },
  {
    ':path': '/content/pricefx/en/spreadsheets/customers-logo/jcr:content/row_314620724',
    industries: 'Automotive',
    region: 'EMEA',
    logo: 'https://www.pricefx.com/wp-content/uploads/2021/03/AMAG.svg',
    'alt text': 'client-michelin',
  },
  {
    ':path': '/content/pricefx/en/spreadsheets/customers-logo/jcr:content/row_1588205352',
    industries: 'Automotive',
    region: 'EMEA',
    logo: 'https://www.pricefx.com/wp-content/uploads/2022/11/Aeromexico-Logo.png',
    'alt text': 'ngk',
  },
  {
    ':path': '/content/pricefx/en/spreadsheets/customers-logo/jcr:content/row_877697498',
    industries: 'Automotive',
    region: 'EMEA',
    logo: 'https://www.pricefx.com/wp-content/themes/pricefx-v2/dest/img/clients/client_Anda.svg',
    'alt text': 'client-toyo-tires',
  },
  {
    ':path': '/content/pricefx/en/spreadsheets/customers-logo/jcr:content/row_1750370119',
    industries: 'Chemicals ',
    region: 'EMEA',
    logo: 'https://www.pricefx.com/wp-content/uploads/2021/03/Allosource_logo.png',
    'alt text': 'client-ineos-styrolution',
  },
  {
    ':path': '/content/pricefx/en/spreadsheets/customers-logo/jcr:content/row_1219568589',
    industries: 'Chemicals ',
    region: 'EMEA',
    logo: 'https://www.pricefx.com/wp-content/uploads/2021/03/AMAG.svg',
    'alt text': 'client-flintGroup',
  },
  {
    ':path': '/content/pricefx/en/spreadsheets/customers-logo/jcr:content/row_1746574848',
    industries: 'Chemicals ',
    region: 'EMEA',
    logo: 'https://www.pricefx.com/wp-content/uploads/2022/11/Aeromexico-Logo.png',
    'alt text': 'client-igp-powder-coatings',
  },
  {
    ':path': '/content/pricefx/en/spreadsheets/customers-logo/jcr:content/row_1938299949',
    industries: 'Chemicals ',
    region: 'EMEA',
    logo: 'https://www.pricefx.com/wp-content/themes/pricefx-v2/dest/img/clients/client_Anda.svg',
    'alt text': 'kluber-lubrication',
  },
  {
    ':path': '/content/pricefx/en/spreadsheets/customers-logo/jcr:content/row_670302447',
    industries: 'Chemicals ',
    region: 'EMEA',
    logo: 'https://www.pricefx.com/wp-content/uploads/2021/03/Allosource_logo.png',
    'alt text': 'client-stahl',
  },
  {
    ':path': '/content/pricefx/en/spreadsheets/customers-logo/jcr:content/row_1646402873',
    industries: 'Manufacturing',
    region: 'EMEA',
    logo: 'https://www.pricefx.com/wp-content/uploads/2021/03/AMAG.svg',
    'alt text': 'client-bosch',
  },
  {
    ':path': '/content/pricefx/en/spreadsheets/customers-logo/jcr:content/row_121796636',
    industries: 'Manufacturing',
    region: 'EMEA',
    logo: 'https://www.pricefx.com/wp-content/uploads/2022/11/Aeromexico-Logo.png',
    'alt text': 'bpw-logo',
  },
  {
    ':path': '/content/pricefx/en/spreadsheets/customers-logo/jcr:content/row_326547037',
    industries: 'Manufacturing',
    region: 'EMEA',
    logo: 'https://www.pricefx.com/wp-content/themes/pricefx-v2/dest/img/clients/client_Anda.svg',
    'alt text': 'ngk',
  },
  {
    ':path': '/content/pricefx/en/spreadsheets/customers-logo/jcr:content/row_1996426637',
    industries: 'Manufacturing',
    region: 'EMEA',
    logo: 'https://www.pricefx.com/wp-content/uploads/2021/03/Allosource_logo.png',
    'alt text': 'client-schneider-electric',
  },
  {
    ':path': '/content/pricefx/en/spreadsheets/customers-logo/jcr:content/row_203784364',
    industries: 'Manufacturing',
    region: 'EMEA',
    logo: 'https://www.pricefx.com/wp-content/uploads/2021/03/AMAG.svg',
    'alt text': 'klockner-pentaplast',
  },
  {
    ':path': '/content/pricefx/en/spreadsheets/customers-logo/jcr:content/row_1217219657',
    industries: 'Manufacturing',
    region: 'EMEA',
    logo: 'https://www.pricefx.com/wp-content/uploads/2022/11/Aeromexico-Logo.png',
    'alt text': 'client-kongsberg',
  },
  {
    ':path': '/content/pricefx/en/spreadsheets/customers-logo/jcr:content/row_616199875',
    industries: 'Manufacturing',
    region: 'EMEA',
    logo: 'https://www.pricefx.com/wp-content/themes/pricefx-v2/dest/img/clients/client_Anda.svg',
    'alt text': 'magneti-marelli-logo-2019',
  },
  {
    ':path': '/content/pricefx/en/spreadsheets/customers-logo/jcr:content/row_1572027412',
    industries: 'Manufacturing',
    region: 'EMEA',
    logo: 'https://www.pricefx.com/wp-content/uploads/2021/03/Allosource_logo.png',
    'alt text': 'nexans',
  },
  {
    ':path': '/content/pricefx/en/spreadsheets/customers-logo/jcr:content/row_807327853',
    industries: 'Manufacturing',
    region: 'EMEA',
    logo: 'https://www.pricefx.com/wp-content/uploads/2021/03/AMAG.svg',
    'alt text': 'orum-logo-rgb',
  },
  {
    ':path': '/content/pricefx/en/spreadsheets/customers-logo/jcr:content/row_355633978',
    industries: 'Manufacturing',
    region: 'EMEA',
    logo: 'https://www.pricefx.com/wp-content/uploads/2022/11/Aeromexico-Logo.png',
    'alt text': 'client-profiParts',
  },
  {
    ':path': '/content/pricefx/en/spreadsheets/customers-logo/jcr:content/row_1559856665',
    industries: 'Manufacturing',
    region: 'EMEA',
    logo: 'https://www.pricefx.com/wp-content/themes/pricefx-v2/dest/img/clients/client_Anda.svg',
    'alt text': 'spinner',
  },
  {
    ':path': '/content/pricefx/en/spreadsheets/customers-logo/jcr:content/row_1185740606',
    industries: 'Manufacturing',
    region: 'EMEA',
    logo: 'https://www.pricefx.com/wp-content/uploads/2021/03/Allosource_logo.png',
    'alt text': 'client-tata-steel',
  },
  {
    ':path': '/content/pricefx/en/spreadsheets/customers-logo/jcr:content/row_2143603770',
    industries: 'Manufacturing',
    region: 'EMEA',
    logo: 'https://www.pricefx.com/wp-content/uploads/2021/03/AMAG.svg',
    'alt text': 'client-tesa',
  },
  {
    ':path': '/content/pricefx/en/spreadsheets/customers-logo/jcr:content/row_1973309877',
    industries: 'Manufacturing',
    region: 'EMEA',
    logo: 'https://www.pricefx.com/wp-content/uploads/2022/11/Aeromexico-Logo.png',
    'alt text': 'client-tfg-transfracht',
  },
  {
    ':path': '/content/pricefx/en/spreadsheets/customers-logo/jcr:content/row_1613789207',
    industries: 'Manufacturing',
    region: 'EMEA',
    logo: 'https://www.pricefx.com/wp-content/themes/pricefx-v2/dest/img/clients/client_Anda.svg',
    'alt text': 'client-vaillant',
  },
  {
    ':path': '/content/pricefx/en/spreadsheets/customers-logo/jcr:content/row_1044667659',
    industries: 'Manufacturing',
    region: 'EMEA',
    logo: 'https://www.pricefx.com/wp-content/uploads/2021/03/Allosource_logo.png',
    'alt text': 'logo_verallia',
  },
  {
    ':path': '/content/pricefx/en/spreadsheets/customers-logo/jcr:content/row_1026873103',
    industries: 'Manufacturing',
    region: 'EMEA',
    logo: 'https://www.pricefx.com/wp-content/uploads/2021/03/AMAG.svg',
    'alt text': 'ahlsell',
  },
  {
    ':path': '/content/pricefx/en/spreadsheets/customers-logo/jcr:content/row_7814670',
    industries: 'Manufacturing',
    region: 'EMEA',
    logo: 'https://www.pricefx.com/wp-content/uploads/2022/11/Aeromexico-Logo.png',
    'alt text': 'amcor',
  },
  {
    ':path': '/content/pricefx/en/spreadsheets/customers-logo/jcr:content/row_463380316',
    industries: 'Manufacturing',
    region: 'EMEA',
    logo: 'https://www.pricefx.com/wp-content/themes/pricefx-v2/dest/img/clients/client_Anda.svg',
    'alt text': 'bridgestone-logo',
  },
  {
    ':path': '/content/pricefx/en/spreadsheets/customers-logo/jcr:content/row_805781210',
    industries: 'Manufacturing',
    region: 'EMEA',
    logo: 'https://www.pricefx.com/wp-content/uploads/2021/03/Allosource_logo.png',
    'alt text': 'client-eagleBurgmann',
  },
  {
    ':path': '/content/pricefx/en/spreadsheets/customers-logo/jcr:content/row_1672379869',
    industries: 'Manufacturing',
    region: 'EMEA',
    logo: 'https://www.pricefx.com/wp-content/uploads/2021/03/AMAG.svg',
    'alt text': 'client-john-crane',
  },
  {
    ':path': '/content/pricefx/en/spreadsheets/customers-logo/jcr:content/row_1419432222',
    industries: 'Manufacturing',
    region: 'EMEA',
    logo: 'https://www.pricefx.com/wp-content/uploads/2022/11/Aeromexico-Logo.png',
    'alt text': 'client-karcher',
  },
  {
    ':path': '/content/pricefx/en/spreadsheets/customers-logo/jcr:content/row_836833754',
    industries: 'Automotive ',
    region: 'Americas',
    logo: 'https://www.pricefx.com/wp-content/themes/pricefx-v2/dest/img/clients/client_Anda.svg',
    'alt text': 'client-avery-dennison',
  },
  {
    ':path': '/content/pricefx/en/spreadsheets/customers-logo/jcr:content/row_973267368',
    industries: 'Automotive ',
    region: 'Americas',
    logo: 'https://www.pricefx.com/wp-content/uploads/2021/03/Allosource_logo.png',
    'alt text': 'client-john-crane',
  },
];

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

// Get filter options from JSON data
const getFilterOptions = (clientsDataJson, filterName) => {
  const allOptions = [];
  if (filterName === 'industries') {
    clientsDataJson.forEach((client) => {
      allOptions.push(client.industries.trim().toLowerCase());
    });
  } else {
    clientsDataJson.forEach((client) => {
      allOptions.push(client.region.trim().toLowerCase());
    });
  }
  const uniqueOptionsArray = [...new Set(allOptions)];
  return uniqueOptionsArray;
};

// Render client logos from JSON data
const renderClientLogos = (clientsDataJson) => {
  let markup = '';
  if (clientsDataJson.length > 0) {
    clientsDataJson.forEach((client) => {
      const imageAltText = client['alt text'].includes('-')
        ? client['alt text'].replaceAll('-', ' ')
        : client['alt text'];
      markup += `
        <li class="tabbed-filter__content-item">
          <img class="tabbed-filter__content-item-image" src="${client.logo}" alt="${imageAltText}">
        </li>
      `;
    });
    return markup;
  }
  markup = `
      <p class="no-clients">Sorry, there are no results based on these choices. Please update and try again.</p>
    `;
  return markup;
};

// Render filter options markup
const renderFilterOptions = (filterOptions) => {
  let markup = '';
  filterOptions.forEach((option) => {
    markup += `
      <option value="${option}">${option}</option>
    `;
  });
  return markup;
};

// Append client logos markup
const appendClientLogos = (clientsDataJson, clientLogosContainer) => {
  clientLogosContainer.innerHTML = renderClientLogos(clientsDataJson);
};

// Handle filter logic
const handleFilter = (
  clientsDataJson,
  industriesFilter,
  regionsFilter,
  clientLogosContainer,
  showMoreCta,
  showMoreLabel,
) => {
  let currentFilteredData = [...clientsDataJson];
  let initialCurrentFilteredData;
  if (industriesFilter.value !== 'all-industries' && regionsFilter.value === 'all-regions') {
    currentFilteredData = currentFilteredData.filter(
      (filteredData) => filteredData.industries.trim().toLowerCase() === industriesFilter.value,
    );
    initialCurrentFilteredData = currentFilteredData.slice(currentFilteredData, 12);
    appendClientLogos(initialCurrentFilteredData, clientLogosContainer);
  } else if (industriesFilter.value === 'all-industries' && regionsFilter.value !== 'all-regions') {
    currentFilteredData = currentFilteredData.filter(
      (filteredData) => filteredData.region.trim().toLowerCase() === regionsFilter.value,
    );
    initialCurrentFilteredData = currentFilteredData.slice(currentFilteredData, 12);
    appendClientLogos(initialCurrentFilteredData, clientLogosContainer);
  } else if (industriesFilter.value !== 'all-industries' && regionsFilter.value !== 'all-regions') {
    currentFilteredData = currentFilteredData.filter(
      (filteredData) =>
        filteredData.industries.trim().toLowerCase() === industriesFilter.value &&
        filteredData.region.trim().toLowerCase() === regionsFilter.value,
    );
    initialCurrentFilteredData = currentFilteredData.slice(currentFilteredData, 12);
    appendClientLogos(initialCurrentFilteredData, clientLogosContainer);
  } else {
    currentFilteredData = clientsDataJson;
    initialCurrentFilteredData = currentFilteredData.slice(currentFilteredData, 12);
    appendClientLogos(initialCurrentFilteredData, clientLogosContainer);
  }

  showMoreCta.setAttribute('aria-expanded', 'false');
  showMoreCta.textContent = showMoreLabel.textContent.trim();
  if (currentFilteredData.length <= 12) {
    showMoreCta.classList.add('hidden');
  } else {
    showMoreCta.classList.remove('hidden');
  }

  return currentFilteredData;
};

// Handle show more or less clients logos
const handleCtaClick = (industriesFilter, regionsFilter, initialClientsData, filteredClientsData, contentContainer) => {
  if (industriesFilter.value !== 'all-industries' && regionsFilter.value === 'all-regions') {
    appendClientLogos(filteredClientsData, contentContainer);
  } else if (industriesFilter.value === 'all-industries' && regionsFilter.value !== 'all-regions') {
    appendClientLogos(filteredClientsData, contentContainer);
  } else if (industriesFilter.value !== 'all-industries' && regionsFilter.value !== 'all-regions') {
    appendClientLogos(filteredClientsData, contentContainer);
  } else {
    // TODO: Replace data with actual data from JSON endpoint
    appendClientLogos(initialClientsData, contentContainer);
  }
};

export default async function decorate(block) {
  const [spreadsheetPath, eyebrowText, title, showMoreLabel, filterIndustryAllLabel, filterRegionAllLabel] =
    block.children;
  block.textContent = '';

  // Fetch client logos from JSON endpoint
  const clientData = await ffetch(spreadsheetPath.textContent.trim()).all();
  // TODO: Replace data with actual data from JSON endpoint
  const initialClientData = data.slice(data, 12);
  let filteredClientsData = data;

  // Create eyebrow element
  if (eyebrowText.textContent.trim() !== '') {
    const eyebrowEl = document.createElement('p');
    eyebrowEl.classList.add('tabbed-filter__eyebrow');
    eyebrowEl.textContent = eyebrowText.textContent.trim();
    block.append(eyebrowEl);
  }

  // Create title element
  if (title.textContent.trim() !== '') {
    const titleEl = document.createElement('h2');
    titleEl.classList.add('tabbed-filter__title');
    titleEl.textContent = title.textContent.trim();
    block.append(titleEl);
  }

  // Create the variables to store the filter options
  const industriesFilterOptions = getFilterOptions(clientData, 'industries');
  const regionsFilterOptions = getFilterOptions(clientData, 'region');

  // Create container to hold the filter dropdowns
  if (!industriesFilterOptions.length > 0 && !regionsFilterOptions.length > 0) {
    return;
  }
  const filtersWrapper = document.createElement('div');
  filtersWrapper.classList.add('tabbed-filter__filters-wrapper');
  block.append(filtersWrapper);

  // Create industries filter
  if (industriesFilterOptions.length > 0) {
    const industriesFilterContainer = document.createElement('div');
    industriesFilterContainer.classList.add('tabbed-filter__filter-container');
    filtersWrapper.append(industriesFilterContainer);
    const industriesFilterLabel = document.createElement('label');
    setAttributes(industriesFilterLabel, { class: 'sr-only', for: 'filter-industries' });
    industriesFilterLabel.textContent = 'Filter by Industries';
    const industriesFilter = document.createElement('select');
    setAttributes(industriesFilter, {
      class: 'tabbed-filter__filter tabbed-filter__industries-filter',
      name: 'filter-industries',
      id: 'filter-industries',
    });
    industriesFilterContainer.append(industriesFilterLabel);
    industriesFilterContainer.append(industriesFilter);

    industriesFilter.innerHTML = `
    <option value="all-industries" selected>${filterIndustryAllLabel.textContent.trim()}</option>
    ${renderFilterOptions(industriesFilterOptions)}
  `;
  }

  // Create regions filter
  if (regionsFilterOptions.length > 0) {
    const regionsFilterContainer = document.createElement('div');
    regionsFilterContainer.classList.add('tabbed-filter__filter-container');
    filtersWrapper.append(regionsFilterContainer);
    const regionsFilterLabel = document.createElement('label');
    setAttributes(regionsFilterLabel, { class: 'sr-only', for: 'filter-regions' });
    regionsFilterLabel.textContent = 'Filter by Regions';
    const regionsFilter = document.createElement('select');
    setAttributes(regionsFilter, {
      class: 'tabbed-filter__filter tabbed-filter__regions-filter',
      name: 'filter-regions',
      id: 'filter-regions',
    });
    regionsFilterContainer.append(regionsFilterLabel);
    regionsFilterContainer.append(regionsFilter);

    regionsFilter.innerHTML = `
      <option value="all-regions" selected>${filterRegionAllLabel.textContent.trim()}</option>
      ${renderFilterOptions(regionsFilterOptions)}
    `;
  }

  // Create content container
  const contentContainer = document.createElement('ul');
  setAttributes(contentContainer, {
    class: 'tabbed-filter__content-container',
    id: 'content-container',
    'aria-labelledby': 'content-container-toggle',
  });
  block.append(contentContainer);
  appendClientLogos(initialClientData, contentContainer);

  // Create show more CTA
  const industriesFilter = document.getElementById('filter-industries');
  const regionsFilter = document.getElementById('filter-regions');
  if (showMoreLabel.textContent.trim() !== '' && filteredClientsData.length > 12) {
    const showMoreCta = document.createElement('button');
    setAttributes(showMoreCta, {
      class: 'tabbed-filter__show-more-cta primary',
      id: 'content-container-toggle',
      'aria-controls': 'content-container',
      'aria-expanded': 'false',
    });
    showMoreCta.textContent = showMoreLabel.textContent.trim();
    block.append(showMoreCta);

    showMoreCta.addEventListener('click', () => {
      if (showMoreCta.getAttribute('aria-expanded') === 'false') {
        showMoreCta.setAttribute('aria-expanded', 'true');
        showMoreCta.textContent = 'Show Less';
        // TODO: Replace data with actual data from JSON endpoint
        handleCtaClick(industriesFilter, regionsFilter, data, filteredClientsData, contentContainer);
      } else {
        showMoreCta.setAttribute('aria-expanded', 'false');
        showMoreCta.textContent = showMoreLabel.textContent.trim();
        handleCtaClick(industriesFilter, regionsFilter, initialClientData, filteredClientsData, contentContainer);
      }
    });
  }

  // Handle filter logics
  const showMoreCta = document.querySelector('.tabbed-filter__show-more-cta');
  industriesFilter.addEventListener('change', () => {
    // TODO: Replace data with actual data from JSON endpoint
    filteredClientsData = handleFilter(
      data,
      industriesFilter,
      regionsFilter,
      contentContainer,
      showMoreCta,
      showMoreLabel,
    );
  });

  regionsFilter.addEventListener('change', () => {
    // TODO: Replace data with actual data from JSON endpoint
    filteredClientsData = handleFilter(
      data,
      industriesFilter,
      regionsFilter,
      contentContainer,
      showMoreCta,
      showMoreLabel,
    );
  });
}
