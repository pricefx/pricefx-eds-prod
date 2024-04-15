export default async function decorate(block) {
  const [link, target, buttonLabel] = block.children;
  block.textContent = '';
  const targetValue = target.textContent.trim() === 'true' ? '_blank' : '_self';

  if (link.textContent.trim() === '') {
    const buttonEl = document.createElement('button');
    buttonEl.classList.add('button');
    buttonEl.textContent = buttonLabel.textContent.trim();
    block.appendChild(buttonEl);
  } else {
    const buttonEl = document.createElement('a');
    buttonEl.classList.add('button');
    buttonEl.textContent = buttonLabel.textContent.trim();
    buttonEl.href = link.textContent.trim();
    buttonEl.setAttribute('target', targetValue);
    block.appendChild(buttonEl);
  }
}
