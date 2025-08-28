# 🚀 Running Turnstile Script with Node.js

## 📋 Step-by-Step Instructions

### Method 1: Express Server (Recommended)

#### Step 1: Install Node.js Dependencies
Open your terminal in the project directory and run:
```bash
cd /Users/k8473/Desktop/tests
npm install
```

#### Step 2: Start the Server
```bash
npm start
```
Or for development with auto-restart:
```bash
npm run dev
```

#### Step 3: Access Your Application
Open your browser and go to:
```
http://localhost:3000
```

#### Step 4: Test the Turnstile Widget
1. You should see a dark-themed Cloudflare Turnstile widget
2. Complete the challenge by following the prompts
3. Check the browser console and server terminal for token logs
4. The token will be automatically sent to your Node.js server

### Method 2: Alternative Server-Side DOM Simulation

If you want to run the script purely in Node.js without a browser, you can use jsdom:

#### Setup for jsdom approach:
```bash
npm install jsdom node-fetch
```

#### Create a server-side script:
```javascript
// server-side-turnstile.js
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const fetch = require('node-fetch');

// Create a virtual DOM environment
const dom = new JSDOM(`
  <!DOCTYPE html>
  <html>
    <body>
      <div id="widget-container"></div>
    </body>
  </html>
`);

global.window = dom.window;
global.document = dom.window.document;

console.log('🌐 Virtual DOM environment created');
console.log('📝 Widget container element:', document.getElementById('widget-container'));

// Note: Turnstile requires browser-specific APIs that aren't easily simulated
// This approach is more suitable for other types of DOM manipulation
```

## 🛠️ Project Structure
```
tests/
├── package.json          # Project dependencies and scripts
├── server.js             # Express server
├── test.html             # Your enhanced Turnstile widget
└── README.md             # This guide
```

## 🔧 Troubleshooting

### Common Issues:

1. **Port already in use**
   - Change the PORT in server.js or kill the process using port 3000
   - Use: `lsof -ti:3000 | xargs kill -9`

2. **Module not found**
   - Run `npm install` to install dependencies
   - Make sure you're in the correct directory

3. **Turnstile widget not loading**
   - Check your internet connection (widget loads from Cloudflare CDN)
   - Verify the sitekey is correct for your domain
   - Check browser console for errors

4. **CORS errors**
   - The Express server is configured to serve static files correctly
   - Make sure you're accessing via localhost:3000, not file://

## 📝 Notes

- The sitekey `0x4AAAAAABu2cnvWTKANXPr6` is a test key that works on localhost
- For production, you'll need your own Cloudflare Turnstile sitekey
- The server includes an endpoint `/verify-token` to handle token verification
- Browser console will show detailed logs of the Turnstile process

## 🎯 Next Steps

1. **Token Verification**: Implement proper token verification with Cloudflare's API
2. **Error Handling**: Add more robust error handling for network issues
3. **Styling**: Customize the appearance to match your application
4. **Security**: Add rate limiting and other security measures for production

Enjoy your Turnstile widget running on Node.js! 🎉

