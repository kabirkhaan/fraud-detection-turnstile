#!/bin/bash

# 📱 iOS Simulator Testing Script
# Makes it super easy to test your Turnstile widget on iOS

echo "🚀 Starting iOS Simulator Testing Environment..."

# Check if Node.js server is already running
if lsof -Pi :3000 -sTCP:LISTEN -t >/dev/null ; then
    echo "⚠️  Port 3000 is already in use. Stopping existing server..."
    lsof -ti:3000 | xargs kill -9 2>/dev/null || true
    sleep 2
fi

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    echo "📦 Installing Node.js dependencies..."
    npm install
fi

echo "🌐 Starting Node.js server..."
npm start &
SERVER_PID=$!

# Wait for server to start
sleep 3

# Get local IP address
LOCAL_IP=$(ifconfig | grep "inet " | grep -Fv 127.0.0.1 | awk '{print $2}' | head -1)

echo ""
echo "✅ Server is running!"
echo "📱 Open iOS Simulator and navigate to:"
echo "   Primary: http://$LOCAL_IP:3000"
echo "   Backup:  http://localhost:3000"
echo ""
echo "🎯 iOS Simulator Quick Setup:"
echo "   1. Open Xcode → Open Developer Tool → Simulator"
echo "   2. Choose iPhone 15 (or your preferred device)"
echo "   3. Open Safari and paste the URL above"
echo ""
echo "⏹️  Press Ctrl+C to stop the server"

# Function to handle cleanup
cleanup() {
    echo ""
    echo "🛑 Stopping server..."
    kill $SERVER_PID 2>/dev/null || true
    echo "✅ Server stopped. Goodbye!"
    exit 0
}

# Set trap to catch Ctrl+C
trap cleanup INT

# Keep script running
wait $SERVER_PID
