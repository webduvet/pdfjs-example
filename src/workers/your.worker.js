onmessage = function(e) {
  console.log('Message received from main script');
  console.log(JSON.stringify(e.data, null, 2))
  console.log('Posting message back to main script');
  postMessage({ myValue: 'hello from your worker' });
}
