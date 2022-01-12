

// function fetchapi() {
//         fetch('Projects.js')
//         .then(res => res.json())
//         .then((data) => (projects = data.projects));
// }

// fetchapi();



function Projects_Display() {
  for (let i = 0; i < projects.length; i++) {
    const element = projects[i];
    const cards = document.createElement('div');
    const container = document.querySelector('.card-content').appendChild(cards);
    cards.classList.add('card');
    cards.innerHTML =
      ` 
     
            <img class="card-img-top" src="${element.img}" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">${element.name}</h5>
              <p class="card-text">${element.description}</p>
              <div class="card-bottom">
              <a href="#" class="btn btn-primary">${element.languages}</a>
            </div>

            `
  }
}


Projects_Display();
