
async function getLogo() {
  try {
    const response = await fetch('https://www.acierta.org/');
    const html = await response.text();
    const logoMatch = html.match(/<img[^>]+src="([^">]+)"/i);
    console.log('Logo Match:', logoMatch ? logoMatch[1] : 'Not found');
    
    // Also look for background colors in inline styles or common CSS classes
    const colorMatch = html.match(/#[a-fA-F0-9]{6}/g);
    console.log('Found Hex Colors:', [...new Set(colorMatch)]);
  } catch (error) {
    console.error('Error fetching site:', error);
  }
}

getLogo();
