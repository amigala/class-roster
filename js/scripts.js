// My Scripts


// Data source from AirTable API
// Note: We're using NoCode API to make connecting to AirTable easier
const url = "https://assets.codepen.io/16425/spring23web3.json";

// Get data
fetch(url)
  .then( response  => response.json())
  .then( data  => {
    // check-check: get one image
    // Note: Webflow returns data in array called `items`


    // get container for data
    const gallery = document.querySelector(".gallery");

    // loop through data
    data.forEach( (student) => {
      
      // template
      const template = `
          <figure>
            <figcaption>${student.Name}</figcaption>
            <p>${student.Emoji}</p>
            <img src="${student.Image}" alt="${student.Name}">
          </figure>
       `;

      // insert EACH `student` record into container
      gallery.insertAdjacentHTML("afterbegin", template);
    });
  });
