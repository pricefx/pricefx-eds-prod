export default async function decorate(block) {
  const [cookieBannerText, rejectCtaLabel, acceptCtaLabel] = block.children;
  block.textContent = '';

  console.log(cookieBannerText);

  // Create content container element
  // TODO: Add checks for authored Description
  const contentContainer = document.createElement('div');
  contentContainer.classList.add('cookie-banner__content');
  contentContainer.innerHTML = `We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies. <a href="/">Privacy Policy and Impressum</a>`;

  // Create reject CTA element
  if (rejectCtaLabel.textContent.trim() !== '') {
    const rejectCta = document.createElement('button');
    rejectCta.classList.add('cookie-banner__reject-cta');
    rejectCta.textContent = rejectCtaLabel.textContent.trim();
  }

  // Create accept CTA element
  if (acceptCtaLabel.textContent.trim() !== '') {
    const acceptCta = document.createElement('button');
    acceptCta.classList.add('cookie-banner__accept-cta');
    acceptCta.textContent = acceptCtaLabel.textContent.trim();
  }
}
