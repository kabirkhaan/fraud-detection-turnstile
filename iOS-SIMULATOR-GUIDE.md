# 📱 iOS Simulator Setup Guide

## 🚀 Quick Start

### Step 1: Install Xcode (if not already installed)
1. Open the **Mac App Store**
2. Search for "Xcode" and install it (this may take a while - it's a large download)
3. Once installed, open Xcode and agree to the license terms

### Step 2: Start Your Node.js Server
```bash
cd /Users/k8473/Desktop/tests
npm install  # if not already done
npm start
```
Your server will run at `http://localhost:3000`

### Step 3: Open iOS Simulator

**Method A: Through Xcode**
1. Open **Xcode**
2. Go to **Xcode** → **Open Developer Tool** → **Simulator**

**Method B: Through Terminal (faster)**
```bash
open -a Simulator
```

**Method C: Through Spotlight**
1. Press `Cmd + Space`
2. Type "Simulator"
3. Press Enter

### Step 4: Choose Your iOS Device
1. In Simulator, go to **Device** → **iOS** → **iPhone 15** (or your preferred model)
2. Wait for the iOS to boot up

### Step 5: Open Safari on iOS Simulator
1. Find and tap the **Safari** app on the home screen
2. In the address bar, type: `http://localhost:3000`
3. Press **Go**

## 🎯 Your Turnstile Widget Should Now Load!

## 🛠️ Alternative Network Access Methods

If `localhost:3000` doesn't work, try these alternatives:

### Method 1: Use Your Mac's IP Address
1. Find your Mac's IP address:
   ```bash
   ifconfig | grep "inet " | grep -Fv 127.0.0.1 | awk '{print $2}' | head -1
   ```
2. Use that IP in Safari: `http://YOUR_IP_ADDRESS:3000`

### Method 2: Use 0.0.0.0 Binding
Update your server.js to bind to all interfaces:
```javascript
app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Server running on http://0.0.0.0:${PORT}`);
});
```

## 📱 iOS Simulator Controls

- **Home Button**: `Cmd + Shift + H`
- **Lock Screen**: `Cmd + L`
- **Rotate Device**: `Cmd + →` or `Cmd + ←`
- **Shake Device**: `Device` → `Shake`
- **Take Screenshot**: `Cmd + S`
- **Reset Content**: `Device` → `Erase All Content and Settings`

## 🔧 Troubleshooting

### Issue 1: "Cannot Connect to Server"
- **Solution**: Make sure your Node.js server is running (`npm start`)
- Check if you can access `http://localhost:3000` in your Mac's browser first

### Issue 2: Page Loads But Widget Doesn't Appear
- **Solution**: Check the browser console in Safari (see debugging section below)
- Turnstile might have issues with simulator networking

### Issue 3: Slow Loading
- **Solution**: iOS Simulator can be slow. Wait a few seconds for the Turnstile script to load

## 🐛 Debugging in iOS Simulator

### Enable Web Inspector:
1. On your Mac, open **Safari**
2. Go to **Safari** → **Preferences** → **Advanced**
3. Check "Show Develop menu in menu bar"
4. Go to **Develop** → **Simulator** → **iOS XX.X** → **Safari** → **localhost**
5. You can now inspect elements and see console logs!

## 📊 Testing Different iOS Versions

Change iOS version in Simulator:
1. **Device** → **iOS** → **Download Runtimes**
2. Install different iOS versions
3. Test your Turnstile widget across versions

## 🎯 Pro Tips

1. **Performance**: Close other apps to make simulator run faster
2. **Testing**: Test both portrait and landscape orientations
3. **Touch**: Use mouse to simulate finger touches
4. **Keyboard**: Use your Mac keyboard when text fields are focused
5. **Network**: Simulator uses your Mac's internet connection

## 🚨 Known Limitations

- Simulator might not perfectly replicate all device behaviors
- Some Cloudflare Turnstile features might work differently than on real devices
- Network latency simulation isn't perfect

Enjoy testing your Turnstile widget on iOS! 🎉
