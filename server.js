const express = require('express');
const path = require('path');
const os = require('os');

const app = express();
const PORT = process.env.PORT || 3000;

// Function to get local IP address
function getLocalIPAddress() {
    const interfaces = os.networkInterfaces();
    for (const devName in interfaces) {
        const iface = interfaces[devName];
        for (let i = 0; i < iface.length; i++) {
            const alias = iface[i];
            if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
                return alias.address;
            }
        }
    }
    return 'localhost';
}

// Serve static files from the current directory
app.use(express.static(__dirname));

// Route to serve your HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'test.html'));
});

// Optional: API endpoint to handle Turnstile token verification
app.post('/verify-token', express.json(), (req, res) => {
    const { token } = req.body;
    
    console.log('Received Turnstile token:', token);
    
    // Here you would typically verify the token with Cloudflare
    // For demo purposes, we'll just log it
    res.json({ 
        success: true, 
        message: 'Token received successfully',
        token: token 
    });
});

// Bind to all interfaces so iOS Simulator can access it
app.listen(PORT, '0.0.0.0', () => {
    const localIP = getLocalIPAddress();
    
    console.log('\n🚀 Server is running and accessible from:');
    console.log(`   💻 Desktop: http://localhost:${PORT}`);
    console.log(`   📱 iOS Simulator: http://${localIP}:${PORT}`);
    console.log(`   🌐 Network: http://0.0.0.0:${PORT}`);
    console.log('\n📱 iOS Simulator Instructions:');
    console.log('   1. Open Xcode → Open Developer Tool → Simulator');
    console.log('   2. Open Safari in the simulator');
    console.log(`   3. Navigate to: http://${localIP}:${PORT}`);
    console.log('   4. If that doesn\'t work, try: http://localhost:' + PORT);
    console.log('\n✨ Ready to test your Turnstile widget!\n');
});

