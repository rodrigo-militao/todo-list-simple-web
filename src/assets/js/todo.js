(() => {
   require('web/selector');
   require('web/addEventListener');

   s('#todo-form').addEventListener('submit', (e) => {
      e.preventDefault();
      const todo = s('#todo-input').value;

      s('#todo-input').value = '';
      const todoItem = document.createElement('li');

      todoItem.innerHTML = `<span>${todo}</span>`;
      s('#todo-list').appendChild(todoItem);

      const deleteButton = document.createElement('button');

      deleteButton.innerHTML = 'X';
      deleteButton.classList.add('btn-delete');
      deleteButton.addEventListener('click', () => todoItem.remove());
      todoItem.appendChild(deleteButton);

   });

})();