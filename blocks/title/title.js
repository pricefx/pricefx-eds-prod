export default async function decorate(block) {
  const titleData = block.querySelector("div[data-aue-prop='title']")?.textContent.trim() || '';
  const titleType = block.querySelector("div[data-aue-prop='type']")?.textContent.trim() || 'h2';
  const titleColor = block.querySelector("div[data-aue-prop='fontColor']")?.textContent.trim() || '';
  const titleMargin = block.querySelector("div[data-aue-prop='margin']")?.textContent.trim() || '';
  block.innerHTML = '';
  if (titleData) {
    const titleTypeElement = document.createElement(titleType);
    titleTypeElement.classList.add(titleType);
    titleTypeElement.classList.add(titleColor);
    titleTypeElement.classList.add(titleMargin);
    titleTypeElement.innerHTML = titleData;
    block.append(titleTypeElement);
  }
}
