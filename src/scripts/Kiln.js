export const firePottery = (potteryObj, temperature ) => {
 
potteryObj.fired = true


if (temperature > 2200){
    potteryObj.cracked = true
} else {
    potteryObj.cracked = false
}
return potteryObj
}



/*if (temperature > 1200){
    clayObj.cracked = true

  }else {
    clayObj.cracked = false
  }
  return clayObj
  */