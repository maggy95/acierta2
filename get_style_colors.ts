
async function getStyleColors() {
  try {
    const response = await fetch('https://www.acierta.org/');
    const html = await response.text();
    const styleMatches = html.match(/<style[^>]*>([\s\S]*?)<\/style>/gi);
    if (styleMatches) {
      for (const style of styleMatches) {
        const colors = style.match(/#[a-fA-F0-9]{6}/g);
        if (colors) {
          console.log('Found Colors in Style Tag:', [...new Set(colors)]);
        }
      }
    }
    
    // Also look for background-color or color in the HTML itself
    const inlineColors = html.match(/(?:background-color|color):\s*(#[a-fA-F0-9]{6}|rgb\([^)]+\))/gi);
    console.log('Inline Colors:', [...new Set(inlineColors)]);
  } catch (error) {
    console.error('Error fetching site:', error);
  }
}

getStyleColors();
