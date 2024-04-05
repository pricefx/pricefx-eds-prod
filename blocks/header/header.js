// media query match that indicates mobile/tablet width
// const isDesktop = window.matchMedia('(min-width: 900px)');

const getHeaderContent = () => {
  const headerJsonUrl = '/header.json';
  fetch(headerJsonUrl, {
    method: 'GET',
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
};

const testData = [
  {
    'Level 1': 'Who We Help ',
    'Level 2': 'Roles',
    'Level 3': 'Pricing | www.pricefx.com/test.html | _blank',
  },
  {
    'Level 1': 'Who We Help ',
    'Level 2': 'Roles',
    'Level 3': 'Sales | www.pricefx.com/test.html | _blank',
  },
  {
    'Level 1': 'Who We Help ',
    'Level 2': 'Roles',
    'Level 3': 'Finance | www.pricefx.com/test.html | _blank',
  },
  {
    'Level 1': 'Who We Help ',
    'Level 2': 'Roles',
    'Level 3': 'Costing | www.pricefx.com/test.html | _blank',
  },
  {
    'Level 1': 'Who We Help ',
    'Level 2': 'Roles',
    'Level 3': 'Rebates | www.pricefx.com/test.html | _blank',
  },
  {
    'Level 1': 'Who We Help ',
    'Level 2': 'Roles',
    'Level 3': 'Executive | www.pricefx.com/test.html | _blank',
  },
  {
    'Level 1': 'Who We Help ',
    'Level 2': 'Roles',
    'Level 3': 'Data Science | www.pricefx.com/test.html | _blank',
  },
  {
    'Level 1': 'Who We Help ',
    'Level 2': 'Roles',
    'Level 3': 'IT | www.pricefx.com/test.html | _blank',
  },
  {
    'Level 1': 'Who We Help ',
    'Level 2': 'Manufacturing',
    'Level 3': 'Industrial | www.pricefx.com/test.html | _blank',
  },
  {
    'Level 1': 'Who We Help ',
    'Level 2': 'Manufacturing',
    'Level 3': 'Automotive | www.pricefx.com/test.html | _blank',
  },
  {
    'Level 1': 'Who We Help ',
    'Level 2': 'Manufacturing',
    'Level 3': 'Building Products | www.pricefx.com/test.html | _blank',
  },
  {
    'Level 1': 'Who We Help ',
    'Level 2': 'Manufacturing',
    'Level 3': 'High Tech | www.pricefx.com/test.html | _blank',
  },
  {
    'Level 1': 'Who We Help ',
    'Level 2': 'Distribution',
    'Level 3': 'Industrial | www.pricefx.com/test.html | _blank',
  },
  {
    'Level 1': 'Who We Help ',
    'Level 2': 'Distribution',
    'Level 3': 'Automotive | www.pricefx.com/test.html | _blank',
  },
  {
    'Level 1': 'Who We Help ',
    'Level 2': 'Distribution',
    'Level 3': 'Building Products | www.pricefx.com/test.html | _blank',
  },
  {
    'Level 1': 'Who We Help ',
    'Level 2': 'Distribution',
    'Level 3': 'High Tech | www.pricefx.com/test.html | _blank',
  },
  {
    'Level 1': 'Who We Help ',
    'Level 2': 'Process Industries',
    'Level 3': 'Chemicals | www.pricefx.com/test.html | _blank',
  },
  {
    'Level 1': 'Who We Help ',
    'Level 2': 'Process Industries',
    'Level 3': 'Lubricants | www.pricefx.com/test.html | _blank',
  },
  {
    'Level 1': 'Our Software',
    'Level 2': 'Insights',
    'Level 3': 'Analytics | www.pricefx.com/test.html | _blank',
  },
  {
    'Level 1': 'Our Software',
    'Level 2': 'Insights',
    'Level 3': 'Actionable Insights | www.pricefx.com/test.html | _blank',
  },
  {
    'Level 1': 'Our Software',
    'Level 2': 'Insights',
    'Level 3': 'Plasma | www.pricefx.com/test.html | _blank',
  },
  {
    'Level 1': 'Our Software',
    'Level 2': 'Price Management',
    'Level 3': 'Price Setting | www.pricefx.com/test.html | _blank',
  },
  {
    'Level 1': 'Our Software',
    'Level 2': 'Price Management',
    'Level 3': 'Agreements and Promotions | www.pricefx.com/test.html | _blank',
  },
  {
    'Level 1': 'Our Software',
    'Level 2': 'Price Management',
    'Level 3': 'Rebates/Enable | www.pricefx.com/test.html | _blank',
  },
  {
    'Level 1': 'Our Software',
    'Level 2': 'Price Management',
    'Level 3': 'Channel Management | www.pricefx.com/test.html | _blank',
  },
  {
    'Level 1': 'Our Software',
    'Level 2': 'Quoting',
    'Level 3': 'Quoting (CPQ) | www.pricefx.com/test.html | _blank',
  },
  {
    'Level 1': 'Our Software',
    'Level 2': 'Quoting',
    'Level 3': 'Sales Compensation | www.pricefx.com/test.html | _blank',
  },
  {
    'Level 1': 'Our Software',
    'Level 2': 'Al Optimisation | www.pricefx.com/test.html | _blank',
    'Level 3': '',
  },
  {
    'Level 1': 'Our Software',
    'Level 2': 'PlatformManager | www.pricefx.com/test.html | _blank',
    'Level 3': '',
  },
  {
    'Level 1': 'Get Started',
    'Level 2': '',
    'Level 3': 'Path to Value | www.pricefx.com/test.html | _blank',
  },
  {
    'Level 1': 'Get Started',
    'Level 2': '',
    'Level 3': 'Partners | www.pricefx.com/test.html | _blank',
  },
  {
    'Level 1': 'Get Started',
    'Level 2': '',
    'Level 3': 'Calculator | www.pricefx.com/test.html | _blank',
  },
  {
    'Level 1': 'Get Started',
    'Level 2': 'Sign In | www.pricefx.com/test.html | _blank',
    'Level 3': '',
  },
  {
    'Level 1': 'Resources',
    'Level 2': '',
    'Level 3': 'Blog | www.pricefx.com/test.html | _blank',
  },
  {
    'Level 1': 'Resources',
    'Level 2': '',
    'Level 3': 'Case Studies | www.pricefx.com/test.html | _blank',
  },
  {
    'Level 1': 'Resources',
    'Level 2': '',
    'Level 3': 'Events | www.pricefx.com/test.html | _blank',
  },
  {
    'Level 1': 'Resources',
    'Level 2': '',
    'Level 3': 'Knowledge Base | www.pricefx.com/test.html | _blank',
  },
  {
    'Level 1': 'Resources',
    'Level 2': '',
    'Level 3': 'Webinars | www.pricefx.com/test.html | _blank',
  },
  {
    'Level 1': 'Resources',
    'Level 2': '',
    'Level 3': 'Ebook | www.pricefx.com/test.html | _blank',
  },
  {
    'Level 1': 'Resources',
    'Level 2': '',
    'Level 3': 'Videos | www.pricefx.com/test.html | _blank',
  },
  {
    'Level 1': 'About Us',
    'Level 2': '',
    'Level 3': 'Company | www.pricefx.com/test.html | _blank',
  },
  {
    'Level 1': 'About Us',
    'Level 2': '',
    'Level 3': 'Careers | www.pricefx.com/test.html | _blank',
  },
  {
    'Level 1': 'About Us',
    'Level 2': '',
    'Level 3': 'Awards | www.pricefx.com/test.html | _blank',
  },
];

// function closeOnEscape(e) {
//   if (e.code === 'Escape') {
//     const nav = document.getElementById('nav');
//     const navSections = nav.querySelector('.nav-sections');
//     const navSectionExpanded = navSections.querySelector('[aria-expanded="true"]');
//     if (navSectionExpanded && isDesktop.matches) {
//       // eslint-disable-next-line no-use-before-define
//       toggleAllNavSections(navSections);
//       navSectionExpanded.focus();
//     } else if (!isDesktop.matches) {
//       // eslint-disable-next-line no-use-before-define
//       toggleMenu(nav, navSections);
//       nav.querySelector('button').focus();
//     }
//   }
// }

// function openOnKeydown(e) {
//   const focused = document.activeElement;
//   const isNavDrop = focused.className === 'nav-drop';
//   if (isNavDrop && (e.code === 'Enter' || e.code === 'Space')) {
//     const dropExpanded = focused.getAttribute('aria-expanded') === 'true';
//     // eslint-disable-next-line no-use-before-define
//     toggleAllNavSections(focused.closest('.nav-sections'));
//     focused.setAttribute('aria-expanded', dropExpanded ? 'false' : 'true');
//   }
// }

// function focusNavSection() {
//   document.activeElement.addEventListener('keydown', openOnKeydown);
// }

/**
 * Toggles all nav sections
 * @param {Element} sections The container element
 * @param {Boolean} expanded Whether the element should be expanded or collapsed
 */
// function toggleAllNavSections(sections, expanded = false) {
//   sections.querySelectorAll('.nav-sections .default-content-wrapper > ul > li').forEach((section) => {
//     section.setAttribute('aria-expanded', expanded);
//   });
// }

/**
 * Toggles the entire nav
 * @param {Element} nav The container element
 * @param {Element} navSections The nav sections within the container element
 * @param {*} forceExpanded Optional param to force nav expand behavior when not null
 */
// function toggleMenu(nav, navSections, forceExpanded = null) {
//   const expanded = forceExpanded !== null ? !forceExpanded : nav.getAttribute('aria-expanded') === 'true';
//   const button = nav.querySelector('.nav-hamburger button');
//   document.body.style.overflowY = expanded || isDesktop.matches ? '' : 'hidden';
//   nav.setAttribute('aria-expanded', expanded ? 'false' : 'true');
//   toggleAllNavSections(navSections, expanded || isDesktop.matches ? 'false' : 'true');
//   button.setAttribute('aria-label', expanded ? 'Open navigation' : 'Close navigation');
//   // enable nav dropdown keyboard accessibility
//   const navDrops = navSections.querySelectorAll('.nav-drop');
//   if (isDesktop.matches) {
//     navDrops.forEach((drop) => {
//       if (!drop.hasAttribute('tabindex')) {
//         drop.setAttribute('role', 'button');
//         drop.setAttribute('tabindex', 0);
//         drop.addEventListener('focus', focusNavSection);
//       }
//     });
//   } else {
//     navDrops.forEach((drop) => {
//       drop.removeAttribute('role');
//       drop.removeAttribute('tabindex');
//       drop.removeEventListener('focus', focusNavSection);
//     });
//   }
//   // enable menu collapse on escape keypress
//   if (!expanded || isDesktop.matches) {
//     // collapse menu on escape press
//     window.addEventListener('keydown', closeOnEscape);
//   } else {
//     window.removeEventListener('keydown', closeOnEscape);
//   }
// }

/**
 * decorates the header, mainly the nav
 * @param {Element} block The header block element
 */
export default async function decorate(block) {
  block.innerHTML = '';

  // Render Brand Logo
  const brandWrapper = document.createElement('div');
  brandWrapper.classList.add('brand');
  brandWrapper.innerHTML = `
    <a class="brand-logo-wrapper"><img src="./icons/price-fx-logo.png" alt="Price Fx"></a>
  `;
  block.append(brandWrapper);

  // Render Navigation
  const nav = document.createElement('nav');
  nav.classList.add('header-nav');
  nav.id = 'header-nav';
  block.append(nav);

  const navLevelOne = document.createElement('ul');
  navLevelOne.classList.add('nav-list-level-1');

  // Render Level 3 Navigation
  const groupByLevelTwo = Object.groupBy(testData, (data) => data['Level 2'].trim());
  const renderLevelThreeItems = (navLabel) => {
    const navLevelThreeNames = [];
    let markup = '';
    groupByLevelTwo[navLabel].forEach((group) => {
      navLevelThreeNames.push(group['Level 3']);
    });
    const uniqueNavLevelThreeNames = [...new Set(navLevelThreeNames)];
    uniqueNavLevelThreeNames.forEach((level3Label) => {
      if (level3Label.includes('|')) {
        const linkInfoArray = level3Label.split('|');
        markup += `
          <li class="nav-list-level-3-item">
            <a href="${linkInfoArray[1].trim()}" target="${linkInfoArray.length === 3 ? linkInfoArray[2].trim() : '_self'}">${linkInfoArray[0].trim()}</a>
          </li>
        `;
      }
    });
    return markup;
  };

  // Render Level 2 Navigation
  const groupByLevelOne = Object.groupBy(testData, (data) => data['Level 1'].trim());
  const renderLevelTwoItems = (navLabel) => {
    const navLevelTwoNames = [];
    const navLevelThreeNames = [];
    let markup = '';
    groupByLevelOne[navLabel].forEach((group) => {
      navLevelTwoNames.push(group['Level 2']);
      if (group['Level 2'] === '') {
        navLevelThreeNames.push(group['Level 3']);
      }
    });
    const uniqueNavLevelTwoNames = [...new Set(navLevelTwoNames)];
    uniqueNavLevelTwoNames.forEach((level2Label) => {
      if (level2Label.includes('|')) {
        const linkInfoArray = level2Label.split('|');
        markup += `
          <li class="nav-list-level-2-item">
            <a href="${linkInfoArray[1].trim()}" target="${linkInfoArray.length === 3 ? linkInfoArray[2].trim() : '_self'}">${linkInfoArray[0].trim()}</a>
          </li>
        `;
      } else if (!level2Label.includes('|') && level2Label !== '') {
        markup += `
          <li class="nav-list-level-2-item">
            <span class="nav-list-level-2-item-category">${level2Label}</span>
            <ul class="nav-list-level-3">
              ${renderLevelThreeItems(level2Label)}
            </ul>
          </li>
        `;
      } else if (level2Label === '') {
        navLevelThreeNames.forEach((level3Label) => {
          if (level3Label.includes('|')) {
            const linkInfoArray = level3Label.split('|');
            markup += `
              <li class="nav-list-level-2-item no-category">
                <a href="${linkInfoArray[1].trim()}" target="${linkInfoArray.length === 3 ? linkInfoArray[2].trim() : '_self'}">${linkInfoArray[0].trim()}</a>
              </li>
            `;
          }
        });
      }
    });
    return markup;
  };

  // Render Level 1 Navigation
  const navLevelOneNames = [];
  // TODO: Change with real JSON data
  testData.forEach((dataItem) => {
    navLevelOneNames.push(dataItem['Level 1'].trim());
  });
  const uniqueNavLevelOneNames = [...new Set(navLevelOneNames)];

  const renderLevelOneItems = (navLabels) => {
    let markup = '';
    navLabels.forEach((navLabel) => {
      markup += `
        <li class="nav-list-level-1-item">
          <span class="nav-list-level-1-item-name">${navLabel}</span>
          <ul class="nav-list-level-2">
            ${renderLevelTwoItems(navLabel)}
					</ul>
        </li>
      `;
    });
    navLevelOne.innerHTML = markup;
  };
  renderLevelOneItems(uniqueNavLevelOneNames);
  nav.append(navLevelOne);

  // Render Header Search
  const searchWrapper = document.createElement('div');
  searchWrapper.classList.add('search-wrapper');
  searchWrapper.innerHTML = `
    <button class="header-search-cta" aria-label="Search">
      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="37" viewBox="0 0 36 37" fill="none">
        <path d="M31.5 32.0005L22.5 23.0005M25.5 15.5005C25.5 21.2995 20.799 26.0005 15 26.0005C9.20101 26.0005 4.5 21.2995 4.5 15.5005C4.5 9.7015 9.20101 5.00049 15 5.00049C20.799 5.00049 25.5 9.7015 25.5 15.5005Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
    <div class="search-input-wrapper">
      <button type="submit">
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="37" viewBox="0 0 36 37" fill="none">
          <path d="M31.5 32.0005L22.5 23.0005M25.5 15.5005C25.5 21.2995 20.799 26.0005 15 26.0005C9.20101 26.0005 4.5 21.2995 4.5 15.5005C4.5 9.7015 9.20101 5.00049 15 5.00049C20.799 5.00049 25.5 9.7015 25.5 15.5005Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      <input type="text" name="search" aria-label="Search">
    </div>
  `;
  nav.insertAdjacentElement('afterend', searchWrapper);

  // Render Talk to an Expert CTA
  const expertCta = document.createElement('a');
  expertCta.classList.add('expertCta');
  expertCta.textContent = 'Talk to an Expert';
  block.insertAdjacentElement('beforeend', expertCta);

  // if (navSections) {
  //   navSections.querySelectorAll(':scope .default-content-wrapper > ul > li').forEach((navSection) => {
  //     if (navSection.querySelector('ul')) {
  //       navSection.classList.add('nav-drop');
  //     }
  //     navSection.addEventListener('click', () => {
  //       if (isDesktop.matches) {
  //         const expanded = navSection.getAttribute('aria-expanded') === 'true';
  //         toggleAllNavSections(navSections);
  //         navSection.setAttribute('aria-expanded', expanded ? 'false' : 'true');
  //       }
  //     });
  //   });
  // }

  // hamburger for mobile
  // const hamburger = document.createElement('div');
  // hamburger.classList.add('nav-hamburger');
  // hamburger.innerHTML = `<button type="button" aria-controls="nav" aria-label="Open navigation">
  //     <span class="nav-hamburger-icon"></span>
  //   </button>`;
  // hamburger.addEventListener('click', () => toggleMenu(nav, navSections));
  // nav.prepend(hamburger);
  // nav.setAttribute('aria-expanded', 'false');
  // // prevent mobile nav behavior on window resize
  // toggleMenu(nav, navSections, isDesktop.matches);
  // isDesktop.addEventListener('change', () => toggleMenu(nav, navSections, isDesktop.matches));

  getHeaderContent();
}
