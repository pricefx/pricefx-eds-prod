export default function decorate(block) {
  const [link, buttonLabel, type] = block.children;
  block.textContent = '';

  if (link.textContent.trim() !== '') {
    const buttonEl = document.createElement('a');
    buttonEl.classList.add('button');
    buttonEl.textContent = buttonLabel.textContent.trim();
    buttonEl.href = link.textContent.trim();
    block.appendChild(buttonEl);
  } else {
    const buttonEl = document.createElement('button');
    buttonEl.classList.add('button');
    buttonEl.textContent = buttonLabel.textContent.trim();
    block.appendChild(buttonEl);
  }

  if (type.textContent.trim() === 'primary-dropdown') {
    block.classList.add('button-icon');
  } else if (type.textContent.trim() === 'primary-light') {
    block.classList.add('primary-lt');
  } else if (type.textContent.trim() === 'primary-light-dropdown') {
    block.classList.add('primary-lt');
    block.classList.add('button-icon');
  } else if (type.textContent.trim() === 'secondary') {
    block.classList.add('secondary');
  } else if (type.textContent.trim() === 'secondary-dropdown') {
    block.classList.add('secondary');
    block.classList.add('button-icon');
  } else if (type.textContent.trim() === 'secondary-light') {
    block.classList.add('secondary-lt');
  } else if (type.textContent.trim() === 'secondary-light-dropdown') {
    block.classList.add('secondary-lt');
    block.classList.add('button-icon');
  } else if (type.textContent.trim() === 'tertiary') {
    block.classList.add('tertiary');
  } else if (type.textContent.trim() === 'tertiary-underline') {
    block.classList.add('tertiary');
    block.classList.add('tertiary-underline');
  } else if (type.textContent.trim() === 'tertiary-light') {
    block.classList.add('tertiary');
    block.classList.add('tertiary-lt');
  } else if (type.textContent.trim() === 'tertiary-light-underline') {
    block.classList.add('tertiary');
    block.classList.add('tertiary-lt');
    block.classList.add('tertiary-underline');
  }

  console.log(block.children, link.textContent.trim(), buttonLabel.textContent.trim(), type.textContent.trim());
}
