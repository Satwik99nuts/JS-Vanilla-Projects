let form = document.querySelector('.box1'); // let is used to create a variable named form
let ul = document.querySelector('.tasks_list'); // queryselector is used to select the first element that matches a specified CSS selector(s) in the document.
// queryselector-->It helps us find things on the page.Think of it like a magnifying glass 🔍 that searches for HTML elements.


// function to return html template
function htmlTemplate(todo) {
  return `<li>${todo} <span class="del">x</span></li>`;
}

form.addEventListener('submit', function(e) {
  e.preventDefault();

  let todo = form.task.value.trim();
  if (todo.length === 0) {
    alert("Please enter a valid task!");
    return;
  }

  let li = htmlTemplate(todo);
  ul.innerHTML += li;

  form.reset(); // clear input
});

// delete task
ul.addEventListener('click', function(e) {
  if (e.target.classList.contains('del')) {
    e.target.parentElement.remove();
  }
});
