// Render badges based on authored field
const renderBadges = (badges) => {
  let markup = '';
  badges.forEach((badge) => {
    markup += `
      <div class="badge__container">
        <a title="${badge.textContent}" href="https://www.g2.com/products/pricefx/reviews?utm_source=rewards-badge">
          <img decoding="async" alt="${badge.textContent}" data-src="${badge.href}" src="${badge.href}" class="lazyloaded badge__icon">
        </a>
      </div>
    `;
  });
  return markup;
};

// Render iframes based on authored field
const renderIframes = (iframes, height, width) => {
  let markup = '';

  if (iframes.length === 3) {
    markup = `
      <div class="iframe__left-column" ${width ? `style=max-width:${width + 36}px;` : ''}>
        <div class="iframe__container" ${width ? `style=max-width:${width + 36}px;` : ''}>
          <iframe src="${iframes[0].textContent.trim()}" frameborder="0" style=${height ? `min-height:${height}px;` : ''}></iframe>
        </div>
        <div class="iframe__container" ${width ? `style=max-width:${width + 36}px;` : ''}>
          <iframe src="${iframes[1].textContent.trim()}" frameborder="0" style=${height ? `min-height:${height}px;` : ''}></iframe>
        </div>
      </div>
      <div class="iframe__right-column" ${width ? `style=max-width:${width + 36}px;` : ''}>
        <div class="iframe__container" ${width ? `style=max-width:${width + 36}px;` : ''}>
          <iframe src="${iframes[2].textContent.trim()}" frameborder="0" style=${height ? `min-height:${height + height + 36}px;` : ''}></iframe>
        </div>
      </div>
    `;
  } else {
    iframes.forEach((iframe) => {
      const iframeSource = iframe.textContent.trim();
      markup += `
        <div class="iframe__container" ${width ? `style=max-width:${width + 36}px;` : ''}>
          <iframe src="${iframeSource}" frameborder="0" style=${height ? `min-height:${height}px;` : ''}></iframe>
        </div>
      `;
    });
  }
  return markup;
};

export default function decorate(block) {
  const [badgeLinks, iframeLinks, widthElement, heightElement] = block.children;
  const badgeItems = badgeLinks.querySelectorAll('a');
  const iframeItems = iframeLinks.querySelectorAll('p');
  const height = Number(heightElement.textContent);
  const width = Number(widthElement.textContent);
  block.textContent = '';

  // Create badge wrapper element and render individual badges
  if (badgeLinks.textContent.trim() !== '') {
    const badgeFragment = new DocumentFragment();
    const badgeWrapper = document.createElement('div');
    badgeWrapper.classList.add('badge__wrapper');
    badgeWrapper.innerHTML = renderBadges(badgeItems);
    badgeFragment.append(badgeWrapper);
    block.append(badgeFragment);
  }

  // Create iFrame wrapper element and render individual iFrames
  if (iframeLinks.textContent.trim() !== '') {
    const iframeFragment = new DocumentFragment();
    const iframeWrapper = document.createElement('div');
    iframeWrapper.classList.add('iframe__wrapper');

    // Add custom class for 3 iframes
    if (iframeItems.length === 3) {
      iframeWrapper.classList.add('iframe__wrapper--three-iframes');
    }

    // Add custom class if badges are present
    if (badgeLinks.textContent.trim() !== '') {
      iframeWrapper.classList.add('frame__wrapper--with-badge');
    }

    iframeWrapper.innerHTML = renderIframes(iframeItems, height, width);
    iframeFragment.append(iframeWrapper);
    block.append(iframeFragment);
  }
}
