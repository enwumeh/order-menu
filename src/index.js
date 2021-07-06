import prompt from "prompt"
import breakfast from './meals/breakfast.js'
import lunch from './meals/lunch.js'
import dinner from './meals/dinner.js';


console.log("tell us your order in this style: Brunch 2 1 3 1");
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
