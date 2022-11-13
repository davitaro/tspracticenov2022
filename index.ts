const axios = require("axios");

const url = "https://jsonplaceholder.typicode.com/todos/1";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const getAndPrintToDo = async (apiUrl: string) => {
  try {
    const response = await axios.get(apiUrl);

    const todo = response.data as Todo;

    const id = todo.id;
    const title = todo.title;
    const completed = todo.completed;
    logToDo(id, title, completed);
  } catch (error) {
    console.error(error);
  }
};

const logToDo = (id: number, title: string, completed: boolean) => {
  console.log(`
    The todo with ID: ${id}
    Has a title of: ${title}
    Is it finished? ${completed}`);
};

getAndPrintToDo(url);
