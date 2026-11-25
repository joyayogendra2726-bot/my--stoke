const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

let cache = { timestamp: 0, data: {} };

async function fetchFromMarketProvider(symbols) {
  const fallback = {
    RELIANCE: { price: 1383.00, prevClose: 1351.00 },
    TCS: { price: 2517.20, prevClose: 2460.00 },
    HDFCBANK: { price: 849.40, prevClose: 817.80 },
    INFY: { price: 1133.90, prevClose: 1103.40 },
    ITC: { price: 310.20, prevClose: 301.00 }
  };
  return fallback;
}

app.get('/api/prices', async (req, res) => {
  try {
    const now = Date.now();
    if (now - cache.timestamp < 60000 && Object.keys(cache.data).length > 0) {
      return res.json({ cached: true, prices: cache.data });
    }
    const symbols = (req.query.symbols || '').split(',').filter(Boolean);
    const prices = await fetchFromMarketProvider(symbols);
    cache = { timestamp: now, data: prices };
    res.json({ cached: false, prices });
  } catch (err) {
    res.status(500).json({ error: 'Price feed unavailable' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`My Stoke Price API running on port ${PORT}`));
