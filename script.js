const priceElement = document.getElementById('price');
let lastPrice = null;

const ws = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@trade');

ws.onmessage = function (event) {
  const message = JSON.parse(event.data);
  const price = parseFloat(message.p).toFixed(2);

  if (price !== lastPrice) {
    priceElement.textContent = `$${price}`;
    lastPrice = price;
  }
};
