const axios = require("axios");

const url = "https://jsonplaceholder.typicode.com/todos/1";

const printData = async (apiUrl) => {
  try {
    const response = await axios.get(apiUrl);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

printData(url);
