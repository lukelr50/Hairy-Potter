import { usePottery } from './PotteryCatalog.js'

export const potteryList = () => {

    const list = usePottery()

    let htmlString = '<article class="potteryList">'

    // create html representation

    for (const pottery of list ){
    
    
    htmlString += `<section class="pottery" id="${pottery.id}">
    <h2 class="pottery__shape">${pottery.shape}</h2>
    <div class="pottery__properties">
        Item weighs ${pottery.weight} grams and is ${pottery.height} cm in height
    </div>
    <div class="pottery__price">   
    Price is $ ${pottery.price}
    </div>
</section>
 `   
// not sure where price exists as a property
}
htmlString += `</article>`

return htmlString
}
