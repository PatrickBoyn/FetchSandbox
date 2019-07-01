document.querySelector('#btn-1').addEventListener('click', getText);

function getText() {
  fetch('test.txt').then(function(response) {
    return response
      .text()
      .then(function(data) {
        console.log(data);
      })
      .catch(function(error) {
        console.error(error);
      });
  });
}
