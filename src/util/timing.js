
const timingController = () => {
  let debounceTimer;
  let throttlePause;
  
  const debounce = (callback, time) => {
    window.clearTimeout(debounceTimer);
    debounceTimer = window.setTimeout(callback, time);
  }
  
  const throttle = (callback, time) => {
    if(throttlePause) return;
  
    throttlePause = true;
    setTimeout(()=>{
      callback();
  
      throttlePause = false;
    }, time);
  };
  
  return {
    debounce,
    throttle
  }
};

export default timingController;