import './index.css';
import { newTaskForm, newTaskTitle, submitButton } from './lib/elements';

newTaskForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(event.target as HTMLFormElement);
  const title = data.get('new-task-title');

  console.log(`Adding task: ${title}`);

  // Here… we would send the data to the main process.

  newTaskTitle.value = '';
  submitButton?.setAttribute('disabled', 'disabled');
});
