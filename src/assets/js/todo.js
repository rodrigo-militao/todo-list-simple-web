(() => {
   require('web/selector');
   require('web/addEventListener');

   const handleCheckboxClick = (event) => {
      const checkbox = event.target;
      const li = checkbox.parentNode;

      li.classList.toggle('done');
   };

   const handleLiClick = (event) => {
      const li = event.target;
      let checkbox = null;

      if (li.tagName === 'SPAN') checkbox = li.parentNode.querySelector('input[type="checkbox"]');
      else checkbox = li.querySelector('input[type="checkbox"]');

      checkbox.checked = !checkbox.checked;
      handleCheckboxClick({ target: checkbox });
   };

   s('#todo-form').addEventListener('submit', (e) => {
      e.preventDefault();
      const todo = s('#todo-input').value;

      s('#todo-input').value = '';
      const todoItem = document.createElement('li');
      const checkbox = document.createElement('input');

      todoItem.addEventListener('click', handleLiClick);

      checkbox.type = 'checkbox';
      checkbox.className = 'todo-checkbox';
      checkbox.addEventListener('click', (event) => handleCheckboxClick(event));
      
      todoItem.appendChild(checkbox);
      
      const span = document.createElement('span');

      span.innerText = todo;
      todoItem.appendChild(span);

      s('#todo-list').appendChild(todoItem);

      const deleteButton = document.createElement('button');

      deleteButton.innerHTML = 'X';
      deleteButton.classList.add('btn-delete');
      deleteButton.addEventListener('click', () => todoItem.remove());
      todoItem.appendChild(deleteButton);

   });

})();