let potterySold = []

export const toSellOrNotToSell = (potteryObj) => {
if (potteryObj.weight >= 6){
 potteryObj.price  = 40
}else {
 potteryObj.price = 20
}

if (potteryObj.cracked === false){
    potterySold.push(potteryObj)
}
}

export const usePottery = () => {

    return potterySold.map(pots => ({...pots}))
}
