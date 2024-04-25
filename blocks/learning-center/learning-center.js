import ffetch from '../../scripts/ffetch.js';

const isDesktop = window.matchMedia('(min-width: 986px)');

// Fetch Header content from JSON endpoint
const articleData = await ffetch('/article-index.json').all();

/**
 * Reset Filter Accordions to Default State
 * @param {Element} filterToggle The CTA that show/hide the Filter Category
 */
const resetFilterAccordions = (filterToggle) => {
  const filterContent = filterToggle.nextElementSibling;
  const contentScroll = filterContent.scrollHeight;

  filterContent.style.visibility = 'visible';
  filterContent.style.maxHeight = `${contentScroll}px`;

  filterContent.setAttribute('aria-hidden', 'false');
  filterToggle.setAttribute('aria-expanded', 'true');
};

/**
 * Toggle Filter Accordions
 * @param {Element} toggle The CTA that show/hide the Filter Category
 */
const toggleFilterAccordion = (toggle) => {
  const content = toggle.nextElementSibling;
  const contentScroll = content.scrollHeight;

  if (!content.style.maxHeight) {
    content.style.visibility = 'hidden';
    content.style.maxHeight = '0px';
  } else if (content.style.maxHeight === '0px') {
    content.style.visibility = 'visible';
    content.style.maxHeight = `${contentScroll}px`;
  } else {
    content.style.visibility = 'hidden';
    content.style.maxHeight = '0px';
  }

  const ariaHiddenState = content.attributes[3].value;
  const setAriaHidden = ariaHiddenState === 'true' ? 'false' : 'true';
  content.setAttribute('aria-hidden', setAriaHidden);

  const ariaExpandedState = toggle.attributes[3].value;
  const setAriaExpanded = ariaExpandedState === 'false' ? 'true' : 'false';
  toggle.setAttribute('aria-expanded', setAriaExpanded);
};

/**
 * Toggle Filter Sidebar
 * @param {Element} filterMenuToggle The CTA that show/hide the Filter Menu
 * @param {Element} filterMenu The element container for the Filter
 */
const toggleFilterMenu = (filterMenuToggle, filterMenu) => {
  const filterMenuToggleAriaExpanded = filterMenuToggle.attributes[3].value;
  const setfilterMenuToggleAriaExpanded = filterMenuToggleAriaExpanded === 'false' ? 'true' : 'false';
  filterMenuToggle.setAttribute('aria-expanded', setfilterMenuToggleAriaExpanded);

  if (filterMenuToggleAriaExpanded === 'false') {
    filterMenu.focus();
    filterMenuToggle.innerHTML = `<span class="filter-icon"></span><span class="toggle-label">Hide Filter</span>`;
  } else {
    filterMenu.blur();
    filterMenuToggle.innerHTML = `<span class="filter-icon"></span><span class="toggle-label">Show Filter</span>`;
    const filterAccordions = document.querySelectorAll('.filter-category-toggle');
    filterAccordions.forEach((accordion) => {
      resetFilterAccordions(accordion);
    });
  }

  const filterMenuAriaHidden = filterMenu.attributes[3].value;
  const setFilterMenuAriaHidden = filterMenuAriaHidden === 'false' ? 'true' : 'false';
  filterMenu.setAttribute('aria-hidden', setFilterMenuAriaHidden);
};

/**
 * Decorates Learning Center on DOM
 * @param {Element} block The Learning Center block element
 */
export default async function decorate(block) {
  const [
    featuredArticle,
    searchPath,
    searchPlaceholder,
    numOfArticles,
    defaultSort,
    filterOne,
    filterOneOptions,
    filterTwo,
    filterTwoOptions,
    filterThree,
    filterThreeOptions,
    filterFour,
    filterFourOptions,
  ] = block.children;
  block.innerHTML = '';
  console.log(defaultSort);

  // Creates a div container to hold the Filter Menu Toggle and Sort by dropdown
  const filterControls = document.createElement('div');
  filterControls.classList.add('filter-controls');
  block.append(filterControls);

  // Creates a div container for flex-box styling use
  const flexContainer = document.createElement('div');
  flexContainer.classList.add('flex-container');
  block.append(flexContainer);

  // Creates a div container for the actual Filter Menu
  const filter = document.createElement('div');
  filter.classList.add('filter-wrapper');
  filter.id = 'filter-menu';
  filter.setAttribute('aria-labelledby', 'filter-menu-toggle');
  filter.setAttribute('aria-hidden', 'false');
  flexContainer.append(filter);

  // Creates a div container to hold Learning Center articles
  const learningCenterContent = document.createElement('div');
  learningCenterContent.classList.add('learning-center-content');
  flexContainer.append(learningCenterContent);

  // Markup for filterControls
  filterControls.innerHTML = `
    <button class="filter-menu-toggle" id="filter-menu-toggle" aria-controls="filter-menu" aria-expanded="true"><span class="filter-icon"></span><span class="toggle-label">Hide Filter</span></button>
    <div class="sort-content-wrapper">
      <label for="sort-content" class="sr-only">Short by</label>
      <select name="sort-content" id="sort-content">
        <option value="" selected disabled>Sort by</option>
        <optgroup label="Date">
          <option value="date-desc">Date (New → Old)</option>
          <option value="date-asc">Date (Old → New)</option>
        </optgroup>
        <optgroup label="Title">
          <option value="title-desc">Title (A → Z)</option>
          <option value="title-asc">Title (Z → A)</option>
        </optgroup>
      </select>
    </div>
  `;

  // Click event for Filter Menu Toggle
  const filterMenuToggle = document.querySelector('.filter-menu-toggle');
  filterMenuToggle.addEventListener('click', () => {
    toggleFilterMenu(filterMenuToggle, filter);
  });

  // Watch for screen size change and switch between Desktop and Mobile Filter
  if (!isDesktop.matches && filterMenuToggle.getAttribute('aria-expanded') === 'true') {
    filterMenuToggle.setAttribute('aria-expanded', 'false');
    filter.setAttribute('aria-hidden', 'true');
  }

  // Render Filter Categories
  const renderFilterCategory = (filterNum, filterCategoryName, filterCategoryOptions, filterAllId, filterRadioName) => {
    const optionsArray = filterCategoryOptions.textContent.trim().split(',');
    let filterOptionsMarkup = '';
    optionsArray.forEach((option) => {
      const optionSplit = option.split('/')[1];
      if (optionSplit === 'e-books' || optionSplit === 'c-suite') {
        filterOptionsMarkup += `
          <li class="filter-category-item">
            <input type="radio" id="filter-${optionSplit}" name="${filterRadioName}" value="filter-${optionSplit}" />
            <label for="filter-${optionSplit}">${optionSplit}</label>
          </li>
        `;
      } else {
        const optionReplace = optionSplit.replaceAll('-', ' ');
        filterOptionsMarkup += `
          <li class="filter-category-item">
            <input type="radio" id="filter-${optionSplit}" name="${filterRadioName}" value="filter-${optionSplit}" />
            <label for="filter-${optionSplit}">${optionReplace}</label>
          </li>
        `;
      }
    });

    const markup = `
      <div class="filter-category">
        <button class="filter-category-toggle" id="filter-category-${filterNum}-toggle" aria-controls="filter-category-${filterNum}-content" aria-expanded="true">${filterCategoryName.textContent.trim()}<span class="accordion-icon"></span></button>
        <ul class="filter-category-content" id="filter-category-${filterNum}-content" aria-labelledby="filter-category-${filterNum}-toggle" aria-hidden="false">
          <li class="filter-category-item">
            <input type="radio" id="${filterAllId}" name="${filterRadioName}" value="${filterAllId}" />
            <label for="${filterAllId}">All</label>
          </li>
            ${filterOptionsMarkup}
        </ul>
      </div>
    `;
    return markup;
  };

  filter.innerHTML = `
    <form class="filter-search-wrapper" action=${searchPath.textContent.trim()} method="get">
      <label for="filter-search" class="sr-only">Search</label>
      <input type="text" name="filter-search" id="filter-search" placeholder=${searchPlaceholder.textContent.trim()} />
      <button type="submit" aria-label="Submit search"></button>
    </form>
    ${renderFilterCategory(1, filterOne, filterOneOptions, 'filter-all-content-type', 'filter-type')}
    ${renderFilterCategory(2, filterTwo, filterTwoOptions, 'filter-all-industry', 'filter-industry')}
    ${renderFilterCategory(3, filterThree, filterThreeOptions, 'filter-all-role', 'filter-role')}
    ${renderFilterCategory(4, filterFour, filterFourOptions, 'filter-all-pfx', 'filter-pfx')}
  `;

  // Set initial max-height for Filter Categories to create smooth accordion transition
  const filterContents = document.querySelectorAll('.filter-category-content');
  filterContents.forEach((content) => {
    content.style.visibility = 'visible';
    content.style.maxHeight = '300px';
  });

  // Click event for Filter Accordions
  const filterAccordionToggles = document.querySelectorAll('.filter-category-toggle');
  filterAccordionToggles.forEach((toggle) => {
    toggle.addEventListener('click', () => {
      toggleFilterAccordion(toggle);
    });
  });

  // TODO: This is using a placeholder featuredArticle until the authoring experience is fixed
  featuredArticle.textContent = '/learning-center/g2-report-pricing-software';

  // Clean-up and Render Article Category
  const renderArticleCategory = (articles) => {
    const categoriesArray = articles.category.split(',');
    let markup = '';
    let innerMarkup = '';

    categoriesArray.forEach((category) => {
      if (category === '') {
        return;
      }

      const removePrefixCategory = category.split('/')[1];
      const removeHyphenCategory =
        removePrefixCategory !== 'e-books' || removePrefixCategory !== 'c-suite'
          ? removePrefixCategory.replaceAll('-', ' ')
          : removePrefixCategory;

      innerMarkup += `<span>${removeHyphenCategory}${categoriesArray.indexOf(category) + 1 >= 1 && categoriesArray.indexOf(category) + 1 !== categoriesArray.length ? `${categoriesArray.indexOf(category) + 1 === categoriesArray.length - 1 ? ' & ' : ', '}` : ''}</span>`;
    });
    markup = `<p class="article-subtitle">${innerMarkup}</p>`;
    return markup;
  };

  // Clean-up and Render Article Authors
  const renderArticleAuthors = (articles) => {
    const authorsArray = articles.authors.split(',');
    let markup = '';
    let innerMarkup = '';

    authorsArray.forEach((author) => {
      if (author === '') {
        return;
      }

      const removePrefixAuthor = author.split('/')[1];
      const removeHyphenAuthor = removePrefixAuthor.replaceAll('-', ' ');

      innerMarkup +=
        authorsArray.indexOf(author) + 1 === authorsArray.length
          ? `<a class="article-author-link" href="/learning-center/writer/${removePrefixAuthor}">${removeHyphenAuthor}</a>`
          : `<a class="article-author-link" href="/learning-center/writer/${removePrefixAuthor}">${removeHyphenAuthor}</a> & `;
    });
    markup = `<p class="article-info">${articles.author !== '' ? `By ${innerMarkup}` : ''} ${articles.articlePublishDate !== '' ? `${articles.author !== '' ? 'on' : ''} ${articles.articlePublishDate}</p>` : ''}`;
    return markup;
  };

  // Render Featured Article
  const renderFeaturedArticle = () => {
    const featuredArticleData = articleData.find((data) => data.path === featuredArticle.textContent);
    let markup = '';
    markup = `
      <div class="featured-article">
        <div class="article-image"><img src="${featuredArticleData.image}" alt="${featuredArticleData.title}"></div>
        <div class="article-content">
          ${
            featuredArticleData.category !== '' ||
            featuredArticleData.title !== '' ||
            featuredArticleData.authors !== '' ||
            featuredArticleData.articlePublishDate !== ''
              ? `<div class="article-details">
              ${featuredArticleData.category !== '' ? renderArticleCategory(featuredArticleData) : ''}
              ${featuredArticleData.title !== '' ? `<h3 class="article-title">${featuredArticleData.title}</h3>` : ''}
              ${featuredArticleData.authors !== '' || featuredArticleData.articlePublishDate !== '' ? renderArticleAuthors(featuredArticleData) : ''}
            </div>`
              : ''
          }
          <div class="article-cta-container">
            <a class="article-link" href="${featuredArticleData.path}">Read Now</a>
            ${featuredArticleData.readingTime !== '' ? `<p class="article-readtime">${featuredArticleData.readingTime} min read</p>` : ''}
          </div>
        </div>
      </div>
    `;
    return markup;
  };

  // Render Learning Center Article Card
  const renderArticleCard = () => {
    const noFeaturedArticleData = articleData.filter((data) => data.path !== featuredArticle.textContent);
    const initialArticleData = noFeaturedArticleData.slice(noFeaturedArticleData, numOfArticles.textContent.trim());
    let markup = '';
    console.log(initialArticleData);
    initialArticleData.forEach((article) => {
      renderArticleAuthors(article);
      markup += `
        <div class="article-card">
          <div class="article-image"><img src="${article.image}" alt="${article.title}"></div>
          <div class="article-content">
            ${
              article.category !== '' ||
              article.title !== '' ||
              article.authors !== '' ||
              article.articlePublishDate !== ''
                ? `<div class="article-details">
                ${article.category !== '' ? renderArticleCategory(article) : ''}
                ${article.title !== '' ? `<h3 class="article-title">${article.title}</h3>` : ''}
                ${article.authors !== '' || article.articlePublishDate !== '' ? renderArticleAuthors(article) : ''}
              </div>`
                : ''
            }
            <div class="article-cta-container">
              <a class="article-link" href="${article.path}">Read Now</a>
              ${article.readingTime !== '' ? `<p class="article-readtime">${article.readingTime} min read</p>` : ''}
            </div>
          </div>
        </div>
      `;
    });
    return markup;
  };

  learningCenterContent.innerHTML = `
    ${renderFeaturedArticle()}
    <div class="articles-container">
      ${renderArticleCard()}
    </div>
  `;
}
