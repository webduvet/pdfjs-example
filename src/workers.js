import MyWorker from "./workers/my.worker"
import YourWorker from './workers/your.worker'

const myworker = new MyWorker();
const yourworker = new YourWorker();

myworker.postMessage({ myValue: {
  hello: 'from main' 
}});

myworker.onmessage = function(ev) {
  console.log('this is the event received:')
  console.log(ev.data);
}
yourworker.onmessage = function(ev) {
  console.log('this is the event received:')
  console.log(ev.data);
}

setTimeout(function() {
  yourworker.postMessage({
    toYourWorker: 'hello to your worker after all'
  })
}, 2000)
