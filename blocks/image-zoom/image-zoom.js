import { loadScript } from '../../scripts/aem.js';
import { DM_CONTENT_SERVER_URL, DM_SERVER_URL } from '../../scripts/url-constants.js';

export default function decorate(block) {
  const [url] = block.children;
  const zoomType = 'image_zoom';

  block.innerHTML = '<div id="s7basiczoom_div" class="image_zoom"></div>';
  const urlObj = new URL(url); // Create a URL object
  const params = new URLSearchParams(urlObj.search); // Get the query parameters
  const assetValue = params.get('asset');

  loadScript(`https://s7d9.scene7.com/s7viewers/html5/js/BasicZoomViewer.js`)
    .then(() => {
      const scene7Script = document.createElement('script');
      scene7Script.textContent = `var s7basiczoomviewer = new s7viewers.BasicZoomViewer({
		  "containerId" : "s7basiczoom_div",
		  "params" : { 
        "serverurl" : "${DM_SERVER_URL}",
        "contenturl" : "${DM_CONTENT_SERVER_URL}", 
        "config" : "pricefxstage/${zoomType}",
        "asset" : "${assetValue}" }
        })
      s7basiczoomviewer.init();`;
      block.appendChild(scene7Script);
    })
    .catch((error) => {
      console.error(`Error loading ${zoomType} Viewer script:`, error);
    });
}
