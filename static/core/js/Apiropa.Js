$(document).ready(function () {
  var productContainer = $('#product-container');

  $.get('http://fakestoreapi.com/products', function (data) {
    var shuffledData = shuffleArray(data); // Resultados distintos 
    var numProductsToShow = 9; // Número de productos a mostrar

    for (var i = 0; i < numProductsToShow; i++) {
      var product = shuffledData[i];
      var card = `
        <div class="col-lg-4">
          <div class="card">
            <img src="${product.image}" class="card-img-top" alt="${product.title}">
            <div class="card-body">
              <h5 class="card-title">${product.title}</h5>
              <p class="card-text">Price: ${product.price}</p>
              <p class="card-text">Category: ${product.category}</p>
              <p class="card-text">Description: ${product.description}</p>
            </div>
          </div>
        </div>
      `;
      productContainer.append(card);
    }
  });
});

// 
function shuffleArray(array) {
  var currentIndex = array.length;
  var temporaryValue, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}