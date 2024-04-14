export default async function decorate(block) {
  const titleData = block.querySelector("div[data-aue-prop='title']")?.textContent.trim() || '';
  const titleType = block.querySelector("div[data-aue-prop='type']")?.textContent.trim() || 'h2';
  const titleColor = block.querySelector("div[data-aue-prop='fontColor']")?.textContent.trim() || '';
  block.innerHTML = '';
  if (titleData) {
    const titleElement = document.createElement(titleType);
    if (titleColor !== '') {
      block.classList.add(titleColor);
    }
    titleElement.innerHTML = titleData;
    block.append(titleElement);
  }
}
