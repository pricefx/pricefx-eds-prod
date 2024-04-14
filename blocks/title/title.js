export default async function decorate(block) {
  const titleData = block.querySelector("div[data-aue-prop='title']")?.textContent.trim() || '';
  const titleType = block.querySelector("div[data-aue-prop='type']")?.textContent.trim() || 'h2';
  const titleColor = block.querySelector("div[data-aue-prop='fontColor']")?.textContent.trim() || '';
  const titleMargin = block.querySelector("div[data-aue-prop='margin']")?.textContent.trim() || '';
  block.innerHTML = '';
  if (titleData) {
    const titleElement = document.createElement(titleType);
    block.classList.add(titleColor);
    block.classList.add(titleMargin);
    titleElement.innerHTML = titleData;
    block.append(titleElement);
  }
}
