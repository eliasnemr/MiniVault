Minima.init((msg) => {
  if (msg.event === 'connected') {
    console.log('Minima online.');
  }
});