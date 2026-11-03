import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateOrderSummary, generateBotResponse, CAFE_MENU_ITEMS } from './chatbotEngine';

test('CAFE_MENU_ITEMS contains popular food and coffee items', () => {
  assert.ok(CAFE_MENU_ITEMS.length >= 3);
  const avocado = CAFE_MENU_ITEMS.find(i => i.name.includes('Avocado'));
  assert.ok(avocado, 'Avocado toast exists in menu');
  assert.equal(avocado.price, 14.0);
});

test('calculateOrderSummary calculates correct subtotal, tax, and total', () => {
  const items = [
    { name: 'Avocado Toast', quantity: 1, price: 14.0 },
    { name: 'Flat White', quantity: 1, price: 4.8 },
  ];
  const summary = calculateOrderSummary(items);
  // subtotal = 14 + 4.8 = 18.8
  assert.equal(summary.subtotal, 18.8);
  // tax = 10% = 1.88
  assert.equal(summary.tax, 1.88);
  // total = 20.68
  assert.equal(summary.total, 20.68);
});

test('generateBotResponse handles menu inquiries correctly', () => {
  const responseId = generateBotResponse('tolong lihat menu rekomendasi', 'id');
  assert.equal(responseId.sender, 'bot');
  assert.ok(responseId.text.includes('The Daily Bean'));
  assert.ok(responseId.quickReplies && responseId.quickReplies.length > 0);

  const responseEn = generateBotResponse('what is on the food menu?', 'en');
  assert.equal(responseEn.sender, 'bot');
  assert.ok(responseEn.text.includes('artisanal'));
});

test('generateBotResponse generates order ticket with items and calculations', () => {
  const response = generateBotResponse('saya mau pesan avocado toast', 'id');
  assert.equal(response.sender, 'bot');
  assert.ok(response.orderData, 'Order data attached to message');
  assert.ok(response.text.includes('Origins AI System'));
  assert.ok(response.orderData.total > 0);
});

test('generateBotResponse handles hours and reservations', () => {
  const hoursRes = generateBotResponse('kapan jam buka cafe?', 'id');
  assert.ok(hoursRes.text.includes('Jam Operasional'));

  const reserveRes = generateBotResponse('mau booking reservasi meja', 'id');
  assert.ok(reserveRes.text.includes('Reservasi Meja'));
});

test('generateBotResponse handles package and pricing inquiry', () => {
  const packageRes = generateBotResponse('saya mau tanya paket growth', 'id');
  assert.equal(packageRes.sender, 'bot');
  assert.ok(packageRes.text.includes('Paket Growth'));
  assert.ok(packageRes.text.includes('1.490.000'));
});
