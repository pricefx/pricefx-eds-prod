export default async function decorate(block) {
  // const [cookieBannerText, rejectCtaLabel, acceptCtaLabel] = block.children;
  block.textContent = '';

  // Create content container element
  // TODO: Add checks for authored Description
  const contentContainer = document.createElement('div');
  contentContainer.classList.add('cookie-banner__content');
  contentContainer.innerHTML = `We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies. <a href="/">Privacy Policy and Impressum</a>`;

  // Create reject CTA element
  // TODO: Add checks for authored reject CTA label
  const rejectCtaLabel = document.createElement('button');
  rejectCtaLabel.classList.add('cookie-banner__reject-cta');
  rejectCtaLabel.textContent = 'Reject All';

  // Create accept CTA element
  // TODO: Add checks for authored accept CTA label
  const acceptCtaLabel = document.createElement('button');
  acceptCtaLabel.classList.add('cookie-banner__accept-cta');
  acceptCtaLabel.textContent = 'Accept All';
}
