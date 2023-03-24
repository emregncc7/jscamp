import { BaseLogger, ElasticLogger, MongoLogger } from "../crossCuttingConcerns/logging/logger.js"
import Customer from "../models/customer.js"
import User from "../models/user.js"
import UserService from "../services/userService.js"

// let dolarDun = 25;
// let dolarBugun = 30;
// if (dolarDun<dolarBugun) {
//     console.log("Dolar Arttı")
// }
// else{
//     console.log("Dolar Düştü")
// }

let konutKredis = ["Tasıt kredisi","konut kredisi","ihtiyac kredisi","Sup kredisi"]


for(let i =0; i<konutKredis.length;i++ ){
console.log(konutKredis[i])
}