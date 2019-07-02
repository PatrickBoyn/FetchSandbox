document.querySelector('#btn-1').addEventListener('click', getText);
document.querySelector('#btn-2').addEventListener('click', getJSON);
document.querySelector('#btn-3').addEventListener('click', fetchAPIData);
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
function getJSON() {
  fetch('posts.json')
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data);

      let output = ``;

      data.forEach(post => {
        output += `<h1>${post.title}</h1> <ul><li>${post.body}</li></ul>`;
      });

      document.getElementById('output').innerHTML = output;
    })
    .catch(error => {
      console.log(error);
    });
}

// Get external api data
function fetchAPIData() {
  // This is to an API I wrote using .Net Core 2.2 (Unpublished, but not a secret)
  fetch('http://localhost:5000/api/employee')
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);

      let output = '';

      data.forEach(employee => {
        output += `<h1>${employee.firstName} ${employee.lastName}</h1>`;
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch(error => {
      console.log(error);
    });
}
