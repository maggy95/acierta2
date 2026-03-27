
async function getCSS() {
  try {
    const response = await fetch('https://www.acierta.org/');
    const html = await response.text();
    const cssMatches = html.match(/href="([^">]+\.css[^">]*)"/g);
    console.log('CSS Files:', cssMatches ? cssMatches.map(m => m.match(/href="([^">]+)"/)[1]) : 'Not found');
    
    // Fetch the first few CSS files to look for colors
    if (cssMatches) {
      for (const cssUrl of cssMatches.map(m => m.match(/href="([^">]+)"/)[1]).slice(0, 5)) {
        const cssResponse = await fetch(cssUrl);
        const cssText = await cssResponse.text();
        const colors = cssText.match(/#[a-fA-F0-9]{6}/g);
        if (colors) {
          console.log(`Colors in ${cssUrl}:`, [...new Set(colors)].slice(0, 10));
        }
      }
    }
  } catch (error) {
    console.error('Error fetching CSS:', error);
  }
}

getCSS();
