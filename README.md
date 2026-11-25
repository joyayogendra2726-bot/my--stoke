# My Stoke — India Share Portfolio & Daily Market Color Tracker

## Features
- **Purchased Shares Tracker**: Add qty, buy average, target, stop-loss, and 52-week range.
- **Today's Market Color (Green / Red)**: Instant daily trend badge + Overall Net P&L.
- **Family Portfolio Mode**: Switch between Self, Family, or All Combined.
- **1-Tap Broker CSV Import**: Import Zerodha / Groww / Standard CSV holdings without broker password.
- **3 Languages**: English, ગુજરાતી, and हिन्दी.
- **Central Live Price API**: Connect `backend/server.js` (deploy on Render/Railway) — no user Google Sheets needed.

## GitHub + Capacitor 7 Android Setup (No PC Needed)
1. Upload all files from this folder to a new GitHub repository (`my-stoke`).
2. Go to **Actions** tab -> Run **Build My Stoke Android APK** -> Download `My-Stoke-Debug-APK` on your Oppo F29 Pro.
3. For Mobile OTP & Gmail Login across devices, create a free project at `https://console.firebase.google.com/` and paste your keys into `www/firebase-config.example.js`.
4. Deploy `backend/` on Render/Vercel and paste your `https://.../api/prices` URL inside the app's **Import / API** modal.

## SEBI & Play Store Compliance Note
My Stoke is strictly a personal portfolio tracking tool. Do not add buy/sell tips or advisory calls without a SEBI Registered Analyst license.
