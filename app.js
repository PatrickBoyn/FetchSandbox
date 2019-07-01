document.querySelector('#btn-1').addEventListener('click', getText);
document.querySelector('#btn-2').addEventListener('click', getJSON);

// Get text file.
function getText() {
  fetch('test.txt').then(function(response) {
    return response
      .text()
      .then(function(data) {
        console.log(data);
        document.getElementById('output').innerHTML = `<p>${data}</p>;`;
      })
      .catch(function(error) {
        console.error(error);
      });
  });
}

// Get JSON file.
function getJSON() {}
