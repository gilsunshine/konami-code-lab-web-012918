const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function

  let index = 0;

  document.addEventListener('keydown', onKeyDownHandler)

  function onKeyDownHandler(e) {
    const key = parseInt(e.detail || e.which);

    if (key === code[index]) {
      index++;
      console.log(index)
      console.log(key)

      if (index === code.length) {
        console.log('hello')
        alert("Hurray!")

        index = 0;
      }
    } else {
      index = 0;
    }
  }
}
