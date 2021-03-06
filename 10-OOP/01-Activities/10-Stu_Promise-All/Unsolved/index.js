const apiCallDurations = [3000, 4000, 5000, 6000];
const maxDuration = 9999;

const callAPI = (duration) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (duration >= maxDuration){
        reject (new Error ('Time out!'));
      }  else {
        resolve (`Resolved Promise in ${duration}!`)
      }  
      // TODO: If the duration is longer than maxDuration, reject() the promise
      // TODO: Otherwise resolve() the promise
    }, duration);
  
  });
const promises = [];

apiCallDurations.map((duration) => promises.push(callAPI(duration)));

console.log('Promises array before the timeouts have finished: ', promises);

// TODO: Use Promise.all() to capture when the array of promises has been resolved or if any of them were rejected
Promise.all(promises)
  .then((message) => 
    console.log('\nThe returned array from our Promise.all() call:', message))
  .catch((err) => console.log('This is an error', err));