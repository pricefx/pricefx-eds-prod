export default async function decorate(block) {
  const [titleData] = block.children;
  block.textContent = '';
  block.classList.add(titleData.textContent.trim());
  block.appendChild(block.textContent);
}
