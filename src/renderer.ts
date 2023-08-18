import './index.css';
import { createTaskNode } from './lib/create-task-node';

const tasks: Task[] = [
  { id: '1', completed: true, title: 'Task' },
  { id: '2', completed: false, title: 'Another Task' },
];

const newTaskForm = document.getElementById('new-task');

const newTaskTitle = document.getElementById(
  'new-task-title',
) as HTMLInputElement;

const submitButton = document.getElementById('submit-new-task');

const list = document.getElementById('task-list');

newTaskTitle?.addEventListener('input', (event) => {
  event.preventDefault();

  const title = newTaskTitle.value;

  if (title.length > 0) {
    submitButton?.removeAttribute('disabled');
  } else {
    submitButton?.setAttribute('disabled', 'disabled');
  }
});

newTaskForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(event.target as HTMLFormElement);
  const title = data.get('new-task-title');

  // Here… we would send the data to the main process.

  newTaskTitle.value = '';
  submitButton?.setAttribute('disabled', 'disabled');
});

tasks.forEach((task) => {
  const taskNode = createTaskNode(task);
  list?.appendChild(taskNode);
});
