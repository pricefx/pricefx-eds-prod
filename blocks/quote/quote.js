export default async function decorate(block) {
  const [quoteText, authorName] = block.children;
  block.textContent = '';

  const quoteEl = document.createElement('q');
  quoteEl.textContent = quoteText.textContent;

  const authorEl = document.createElement('div');
  authorEl.textContent = `-- ${authorName.textContent}`;
  authorEl.classList.add('author');

  block.appendChild(quoteEl);
  block.appendChild(authorEl);
}
