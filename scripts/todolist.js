document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById('todoInput');
    const addTodoBtn = document.getElementById('addTodoBtn');
    const todoList = document.getElementById('todoItems');

    const loadTodos = () => {
        const savedTodos = localStorage.getItem('todos');
        if (savedTodos) {
            const todos = JSON.parse(savedTodos);
            todos.forEach(todo => {
                createTodoElement(todo.text, todo.completed);
            });
        }
    };

    const saveTodos = () => {
        const todos = [];
        document.querySelectorAll('#todoItems li').forEach(li => {
            todos.push({
                text: li.querySelector('.todoText').textContent,
                completed: li.querySelector('.todoCheckbox').checked
            });
        });
        localStorage.setItem('todos', JSON.stringify(todos));
    };

    const createTodoElement = (text, completed = false) => {
        const li = document.createElement('li');
        
        const todoContent = document.createElement('div');
        todoContent.className = 'todoContent';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'todoCheckbox';
        checkbox.checked = completed;
        checkbox.addEventListener('change', () => {
            todoText.classList.toggle('completed');
            saveTodos();
        });

        const todoText = document.createElement('span');
        todoText.textContent = text;
        todoText.className = 'todoText';
        if (completed) {
            todoText.classList.add('completed');
        }

        const removeBtn = document.createElement('button');
        removeBtn.textContent = '×';
        removeBtn.className = 'removeBtn';
        removeBtn.addEventListener('click', () => {
            li.remove();
            saveTodos();
        });

        todoContent.appendChild(checkbox);
        todoContent.appendChild(todoText);
        li.appendChild(todoContent);
        li.appendChild(removeBtn);
        todoList.appendChild(li);
    };

    const addTodo = () => {
        const text = todoInput.value.trim();
        if (text === '') return;

        createTodoElement(text);
        saveTodos();
        
        todoInput.value = '';
        todoInput.focus();
    };

    addTodoBtn.addEventListener('click', addTodo);

    todoInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            addTodo();
        }
    });

    loadTodos();
});