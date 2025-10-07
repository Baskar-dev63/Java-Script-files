import earnMoney from "./demo.js";
import {growMoney,giveMoney} from "./demo.js";

import * as dh from "./demo.js";


console.log(earnMoney());
console.log(growMoney());
console.log(giveMoney());
console.log(dh.default());
console.log(dh.giveMoney()); 
console.log(dh.growMoney());

import Subscriber from "./demo.js";

console.log(Subscriber);

const me=new Subscriber("John");
console.log(me.email());
console.log(new Subscriber("Ravi").email());