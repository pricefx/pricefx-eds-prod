export default async function decorate(block) {
  const [spacerData] = block.children;
  block.textContent = '';
  block.classList.add(spacerData.textContent.trim());
  block.appendChild(block.textContent);
}
