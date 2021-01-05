/**
 * Stok miktari 500 kg uzerinde olan baliklari bulur
 * @param {obj} pFarmList
 * @param {int} pFishQuantity
 */
function findOverStockVolumeFish(pFarmList, pFishQuantity) {
  let overStockVolumeFish = pFarmList.filter(
    (fish) => fish.stockVolumeInKg > pFishQuantity
  );
  return overStockVolumeFish;
}

console.log(findOverStockVolumeFish(fishFarm, 500));

/**
 * 9-12 fiyat araligindaki baliklari bulur
 * @param {obj} pFarmList
 * @param {int} pLowPrice
 * @param {int} pHighPrice
 */
function findSpecialPriceRangeFish(pFarmList, pLowPrice, pHighPrice) {
  let specialPriceRangeFish = pFarmList.filter(
    (fish) => fish.price >= pLowPrice && fish.price <= pHighPrice
  );
  return specialPriceRangeFish;
}

console.log(findSpecialPriceRangeFish(fishFarm, 9, 12));

let withLastDateList = fishFarm;
/**
 * Son kullanma tarihini de iceren balik listesi olusturur
 * @param {obj} pFarmList
 */
function creatWithLastDayList(pFarmList) {
  let lastDay = [];
  pFarmList.map(fish => {
    fish.entryDate.setDate(fish.entryDate.getDate() + fish.durationInDays);
    lastDay.push(fish.entryDate);
  })
  for (let index = 0; index < lastDay.length; index++) {
    withLastDateList[index].expirationDate = lastDay[index];
  }
  return withLastDateList;
}
/**
 * Son kullanma tarihine göre siralanmis liste olusturur
 * @param {obj} pFarmList
 */
function sortetInLastDay(pFarmList) {
  let sortetFishFarm = creatWithLastDayList(pFarmList).sort(
    (firstDate, secondDate) =>
      new Date(firstDate.expirationDate) - new Date(secondDate.expirationDate)
  );
  return sortetFishFarm;
}
console.log(sortetInLastDay(fishFarm));

/**
 * Avrupali baliklari bulur
 * @param {*} pFarmList 
 * @param {*} pCountryList 
 */
function findEuropeanFish(pFarmList, pCountryList) {
    pFarmList.filter(fish=>{
    for (let index = 0; index < pCountryList.length; index++) {
        const country = pCountryList[index].toLowerCase();
        if(fish.originCountry.toLowerCase()===country){
            europeanFish.push(fish.fishType)
        }
    }   
})
return europeanFish;
}

console.log(findEuropeanFish(fishFarm, europeanCountry))
/**
 * Avrupali baliklari alfabetik siraya dizer
 * @param {*} pFishList 
 */
function sortAlphabeticalList(pFishList) {
   let alphabeticalList = pFishList.sort();
   return alphabeticalList;
}
console.log(sortAlphabeticalList(europeanFish));

/**
 * Toplam balik stogunu bulur
 * @param {*} pFarmList 
 */
function findTotalFishStock(pFarmList) {
    pFarmList.map(fish=>{
    totalStockVolumeKg+= fish.stockVolumeInKg 
}) 
return totalStockVolumeKg
}

console.log(findTotalFishStock(fishFarm))
/**
 * En pahali baligi bulur
 * @param {*} pFarmList 
 */
function findMostExpensiveFish(pFarmList) {
  let priceList = pFarmList.map((fish) => fish.price);
  let highestPrice = Math.max(...priceList);
  pFarmList.find((fish) => {
    if (fish.price === highestPrice) {
      mostExpensiveFish = fish.fishType + " " + fish.price;
    }
  });
  return mostExpensiveFish;
}
console.log(findMostExpensiveFish(fishFarm));

/**
 * En dayanikli baliklarin ülkesini bulur
 * @param {*} pFarmList 
 */
function findMaxDurationFishCountry(pFarmList) {
  let maxDurationFishCountry = [];
  let maxDurationInDay = Math.max(...pFarmList.map((fish) => fish.durationInDays))
  pFarmList.filter((fish) => {
    if (maxDurationInDay === fish.durationInDays) {
      maxDurationFishCountry.push({
        fishType: fish.fishType,
        originCountry: fish.originCountry,
        durationInDays: fish.durationInDays,
      })
    }
  })
  return maxDurationFishCountry
}