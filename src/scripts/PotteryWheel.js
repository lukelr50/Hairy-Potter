let pottery = 1


// I definded function, need to export function
export const makePottery = (Shape, Weight , Height) => {
    //console.log(Shape)
   // console.log(Weight)
   // console.log(Height)
 const newPottery = {
    shape: Shape,
    weight: Weight,
    height: Height,
    id: pottery
}
pottery++
 return newPottery
}  
/* {
        shape: "",
        weight: "",
        height: "",
        id: ""
    }
*/



// already doing this in main.js?
// const potteryList = makePottery()
