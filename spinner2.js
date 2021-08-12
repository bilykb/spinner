const os = require('os');


const loadingAnimation = times => {
  const timerArr = ['\r|   ', '\r/   ', '\r-   ', '\r\\   '];
  let delay = 100;
  let longTimerArr = [];
  
  for(let i = 1; i <= times; i++) {
    longTimerArr = longTimerArr.concat(timerArr)
  }

  longTimerArr.forEach((element, index) => {
    setTimeout(() => {
      process.stdout.write(element);
      if (index === longTimerArr.length - 1) {
        process.stdout.write(os.EOL);
      }
    }, delay);
    delay += 200;
  });
};


loadingAnimation(5);