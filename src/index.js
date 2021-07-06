import prompt from "prompt"
// const prompt = require("prompt")
import breakfast from './meals/breakfast.js'
// const breakfast = require("./meals/breakfast.js")
import lunch from './meals/lunch.js'
// const lunch = require('./meals/lunch.js')
import dinner from './meals/dinner.js';
// const dinner = require('./meals/breakfast.js')


const firstMessage = () => {
return console.log("tell us your order in this style: Brunch 2 1 3 1");
}

firstMessage()
prompt.get(["order"], function (err, res) {
  let responseArr = res.order.split(" ");
  let menu = responseArr[0];

  switch (menu) {
    case "breakfast":
      breakfast(responseArr);
      break;
    case "lunch":
      lunch(responseArr);

      break;
    case "dinner":
      dinner(responseArr);
      break;
  }
});

module.export = {
  firstMessage
}
