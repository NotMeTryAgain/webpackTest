require('./app.scss');

let textContent = require('./content.js');

function appendListItem() {
  let newItem = document.createElement("li");
  let text = document.createTextNode(textContent);
  newItem.appendChild(text);

  let list = document.getElementById("list");
  list.insertBefore(newItem, list.childNodes[0]);
};

let button = document.getElementById("add_button");
button.addEventListener("click", appendListItem);

if (module.hot) {
  module.hot.accept();
  module.hot.dispose(function() {
    button.removeEventListener("click", appendListItem);
  });
}
