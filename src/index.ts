// Import stylesheets
import './style.css';
import fs from 'fs';


const form: HTMLFormElement = document.querySelector('#defineform');


form.onsubmit = () => {
  const formData = new FormData(form);

  console.log(formData);
  const text = formData.get('defineword') as string;
  console.log(text);
  return false; // prevent reload
};