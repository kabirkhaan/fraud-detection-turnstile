const jsdom = require('jsdom');
const { JSDOM } = jsdom;

// Enhanced jsdom setup with more browser-like environment
const dom = new JSDOM(`
  <!DOCTYPE html>
  <html>
    <head>
      <title>Server-side Turnstile Simulation</title>
    </head>
    <body>
      <div id="widget-container"></div>
      <script>
        // Placeholder for Turnstile simulation
        console.log('DOM environment ready');
      </script>
    </body>
  </html>
`, {
  runScripts: "dangerously",
  resources: "usable",
  pretendToBeVisual: true,
  beforeParse(window) {
    // Add browser-like globals
    window.console.log = (...args) => {
      console.log('🌐 [Browser]:', ...args);
    };
  }
});

// Set up global environment
global.window = dom.window;
global.document = dom.window.document;
global.navigator = dom.window.navigator;

console.log('🚀 Server-side DOM simulation started');
console.log('📝 Widget container found:', !!document.getElementById('widget-container'));

// Simulate Turnstile behavior (since real Turnstile requires browser environment)
function simulateTurnstile() {
  console.log('🛡️  Simulating Turnstile widget...');
  
  const widgetContainer = document.getElementById('widget-container');
  if (widgetContainer) {
    widgetContainer.innerHTML = '<div>Turnstile Widget Placeholder (Server-side)</div>';
    console.log('✅ Widget container updated');
    
    // Simulate successful challenge completion after 2 seconds
    setTimeout(() => {
      const mockToken = 'mock_token_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
      console.log('🎉 Simulated challenge completed with token:', mockToken);
      
      // You can add your token processing logic here
      processToken(mockToken);
    }, 2000);
  }
}

function processToken(token) {
  console.log('🔄 Processing token:', token);
  
  // Simulate server-side token verification
  const verification = {
    success: true,
    timestamp: new Date().toISOString(),
    token: token,
    hostname: 'localhost',
    action: 'server-side-simulation'
  };
  
  console.log('✅ Token verification result:', verification);
  return verification;
}

// Start the simulation
simulateTurnstile();

// Keep the process alive for demonstration
console.log('⏰ Simulation running... Press Ctrl+C to exit');

