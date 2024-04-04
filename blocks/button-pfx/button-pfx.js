export default function decorate(block) {
  const [link, buttonLabel, type] = block.children;
  block.textContent = '';

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
    block.appendChild(buttonEl);
  }

  if (type.textContent.trim() === 'primary-dropdown') {
    block.children[0].className = '';
    block.children[0].classList.add('button', 'button-icon');
  } else if (type.textContent.trim() === 'primary-light') {
    block.children[0].className = '';
    block.children[0].classList.add('button', 'primary-lt');
  } else if (type.textContent.trim() === 'primary-light-dropdown') {
    block.children[0].className = '';
    block.children[0].classList.add('button', 'primary-lt', 'button-icon');
  } else if (type.textContent.trim() === 'secondary') {
    block.children[0].className = '';
    block.children[0].classList.add('button', 'secondary');
  } else if (type.textContent.trim() === 'secondary-dropdown') {
    block.children[0].className = '';
    block.children[0].classList.add('button', 'secondary', 'button-icon');
  } else if (type.textContent.trim() === 'secondary-light') {
    block.children[0].className = '';
    block.children[0].classList.add('button', 'secondary-lt');
  } else if (type.textContent.trim() === 'secondary-light-dropdown') {
    block.children[0].className = '';
    block.children[0].classList.add('button', 'secondary-lt', 'button-icon');
  } else if (type.textContent.trim() === 'tertiary') {
    block.children[0].className = '';
    block.children[0].classList.add('button', 'tertiary');
  } else if (type.textContent.trim() === 'tertiary-underline') {
    block.children[0].className = '';
    block.children[0].classList.add('button', 'tertiary', 'tertiary-underline');
  } else if (type.textContent.trim() === 'tertiary-light') {
    block.children[0].className = '';
    block.children[0].classList.add('button', 'tertiary', 'tertiary-lt');
  } else if (type.textContent.trim() === 'tertiary-light-underline') {
    block.children[0].className = '';
    block.children[0].classList.add('button', 'tertiary', 'tertiary-lt', 'tertiary-underline');
  }
}
