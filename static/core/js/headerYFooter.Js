// Llamado de header
var headerRequest = new XMLHttpRequest();
headerRequest.open('GET', 'header.html', true);
headerRequest.onreadystatechange = function () {
  if (headerRequest.readyState === 4 && headerRequest.status === 200) {
    document.getElementById('header').innerHTML = headerRequest.responseText;
  }
};
headerRequest.send();

// Llamado de footer
var footerRequest = new XMLHttpRequest();
footerRequest.open('GET', 'footer.html', true);
footerRequest.onreadystatechange = function () {
  if (footerRequest.readyState === 4 && footerRequest.status === 200) {
    document.getElementById('footer').innerHTML = footerRequest.responseText;
  }
};
footerRequest.send();