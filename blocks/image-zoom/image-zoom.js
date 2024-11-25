import { loadScript } from '../../scripts/aem.js';
import { DM_CONTENT_SERVER_URL, DM_SERVER_URL } from '../../scripts/url-constants.js';

export default function decorate(block) {
  const [filePath, zoomType] = block.children;
  const url = filePath.textContent.trim();
  let scriptUrl = '';
  let funcNam = '';

  switch (zoomType) {
    case 'image_zoom': {
      scriptUrl = 'https://s7d9.scene7.com/s7viewers/html5/js/BasicZoomViewer.js';
      funcNam = 'BasicZoomViewer';
      break;
    }
    case 'Flyout': {
      scriptUrl = 'https://s7d9.scene7.com/s7viewers/html5/js/FlyoutViewer.js';
      funcNam = 'FlyoutViewer';
      break;
    }
    case 'InlineZoom': {
      scriptUrl = 'https://s7d9.scene7.com/s7viewers/html5/js/FlyoutViewer.js';
      funcNam = 'FlyoutViewer';
      break;
    }
    case 'ZoomVertical_dark': {
      scriptUrl = 'https://s7d9.scene7.com/s7viewers/html5/js/ZoomVerticalViewer.js';
      funcNam = 'ZoomVerticalViewer';
      break;
    }
    case 'ZoomVertical_light': {
      scriptUrl = 'https://s7d9.scene7.com/s7viewers/html5/js/ZoomVerticalViewer.js';
      funcNam = 'ZoomVerticalViewer';
      break;
    }
    default: {
      scriptUrl = 'https://s7d9.scene7.com/s7viewers/html5/js/BasicZoomViewer.js';
      funcNam = 'BasicZoomViewer';
    }
  }

  block.innerHTML = '<div id="s7basiczoom_div" class="image_zoom"></div>';
  const urlObj = new URL(url); // Create a URL object
  const params = new URLSearchParams(urlObj.search); // Get the query parameters
  const assetValue = params.get('asset');

  loadScript(scriptUrl)
    .then(() => {
      const scene7Script = document.createElement('script');
      scene7Script.textContent = `var s7basiczoomviewer = new s7viewers.${funcNam}({
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
