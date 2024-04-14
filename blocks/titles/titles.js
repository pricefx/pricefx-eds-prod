export default async function decorate(block) {
  const titleData = block.querySelector("div[data-aue-prop='title']")?.textContent.trim() || '';
  const titleType = block.querySelector("div[data-aue-prop='type']")?.textContent.trim() || 'h2';
  block.innerHTML = '';
  if (titleData) {
    const titleTypeElement = document.createElement(titleType);
    titleTypeElement.classList.add(titleType);
    titleTypeElement.innerHTML = titleData;
    block.append(titleTypeElement);
  }
}
