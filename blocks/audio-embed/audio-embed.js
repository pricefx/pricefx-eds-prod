function hasValidExtension(url) {
  try {
    const { pathname } = new URL(url);
    return pathname.endsWith('.mp3') || pathname.endsWith('.ogg');
  } catch (e) {
    return false;
  }
}

export default function decorate(block) {
  const [audioPathElement] = block.children;
  const audioPathTrimmed = audioPathElement.textContent.trim();

  block.textContent = '';

  if (audioPathTrimmed && hasValidExtension(audioPathTrimmed)) {
    const audioElement = document.createElement('audio');
    audioElement.controls = true;
    audioElement.src = audioPathTrimmed;
    audioElement.setAttribute('aria-label', 'Audio file');
    block.innerHTML = '';
    block.appendChild(audioElement);
  } else {
    block.innerHTML = 'Invalid audio file link.';
  }
}
