function debounce(fn, delay) {
  let timeOutId;

  return function () {
    if (timeOutId) {
      clearTimeout(timeOutId);
    }

    timeOutId = setTimeout(() => {
      fn();
    }, delay);
  };
}

export default debounce;
