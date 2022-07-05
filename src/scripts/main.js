// Imports go first

import { makePottery } from './PotteryWheel.js'

import { firePottery } from './Kiln.js'
import { toSellOrNotToSell, usePottery } from './PotteryCatalog.js';
import {potteryList} from './PotteryList.js' 


// Make 5 pieces of pottery at the wheel
let mug = makePottery("bowl" , 3 , 3);
let plate = makePottery("flat",1,2);
let jar = makePottery("circle", 7, 8);
let fork = makePottery("rod",4 , 6)
let cup = makePottery("oblong", 5, 4)

//let plate = makePottery("flate", 3, 4)
// console.log(cup, fork,jar,plate, mug)
// Fire each piece of pottery in the kiln
let firedMug = firePottery(mug, 2900)
let firedPlate = firePottery(plate, 2000)
let firedJar = firePottery(jar,1800)
let firedFork = firePottery(fork, 900)
let firedCup = firePottery(cup, 2600)


//console.log(firedMug, firedPlate, firedJar, firedFork, firedCup )



// Determine which ones should be sold, and their price
let catMug = toSellOrNotToSell(firedMug)
let catPlate = toSellOrNotToSell(firedPlate)
let catJar = toSellOrNotToSell(firedJar)
let catFork = toSellOrNotToSell(firedFork)
let catCup = toSellOrNotToSell(firedCup)
console.log(firedMug, firedPlate, firedJar,firedFork,firedCup) // catmug displays undefined
// console logging mug displays price, but reads wrong cracked property
let potteryArray = usePottery()
console.log(potteryArray)
// Invoke the component function that renders the HTML list
let newList = potteryList()
console.log(newList)


const parentHTMLElement = document.querySelector(".potteryList")


parentHTMLElement.innerHTML = potteryList()


