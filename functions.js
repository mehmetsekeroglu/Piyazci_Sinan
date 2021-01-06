
/**
 * Stok miktari 500 kg uzerinde olan baliklari bulur
 * @param {obj} pFarmList
 * @param {int} pFishQuantity
 */
function findOverStockVolumeFishList(pFarmList, pFishQuantity) {
  let overStockVolumeFish = pFarmList.filter((fish) => fish.stockVolumeInKg > pFishQuantity);
  return overStockVolumeFish;
}

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
/**
 * Son kullanma tarihini de iceren balik listesi olusturur
 * @param {obj} pFarmList
 */
function findLastUseDate(pFarmList) {
  let withExpDateList = [];
  pFarmList.map((fish) => {
    fish.entryDate.setDate(fish.entryDate.getDate() + fish.durationInDays);
    withExpDateList.push({date:fish.entryDate , name:fish.fishType});
  });
  return withExpDateList;
}
/**
 * Son kullanma tarihine göre siralanmis liste olusturur
 * @param {*} pFishDateList 
 */
function sortLastUseDate(pFishDateList){
  let withExpDateListToSort = pFishDateList.sort(function (firstFish, secondFish) {
    return firstFish.date.getTime() - secondFish.date.getTime();
  
  });
  return withExpDateListToSort
}
/**
 * Avrupali baliklari bulur
 * @param {*} pFarmList 
 * @param {*} pCountryList 
 */
function findEuropeanFish(pFarmList, pCountryList, pPrice) {
  let europeanFish = [];
  pFarmList.filter(fish => {
    for (let index = 0; index < pCountryList.length; index++) {
      const country = pCountryList[index].toLowerCase();
      if (fish.originCountry.toLowerCase() === country&& fish.price<pPrice) {
        europeanFish.push(fish.fishType)
      }
    }
  })
  return europeanFish;
}
/**
 * Avrupali baliklari alfabetik siraya dizer
 * @param {*} pFishList 
 */
function sortAlphabeticalList(pFishList) {
  let alphabeticalList = pFishList.sort();
  return alphabeticalList;
}
/**
 * Toplam balik stogunu bulur
 * @param {*} pFarmList 
 */
function findTotalFishStock(pFarmList) {
  let totalStockVolumeKg = null;
  pFarmList.map(fish => totalStockVolumeKg += fish.stockVolumeInKg)
  return totalStockVolumeKg
}

/**
 * En pahali baligi bulur
 * @param {*} pFarmList 
 */
function findMostExpensiveFish(pFarmList) {
  let mostExpensiveFish = [];
  let priceList = pFarmList.map((fish) => fish.price);
  let highestPrice = Math.max(...priceList);
  pFarmList.find((fish) => {
    if (fish.price === highestPrice) {
      mostExpensiveFish = fish.fishType + "-" + fish.price;
    }
  });
  return mostExpensiveFish;
}
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
         FISH:fish.fishType,
         COUNTRY:fish.originCountry,
         DURATION_DAYS:fish.durationInDays,
    })
    }
  })
  return maxDurationFishCountry
}
/**
 * Swiss Romande bölgesinde satilan baliklari bulur
 * @param {*} pRegionList 
 * @param {*} pFarmList 
 */
function findFishInRomandeRegion(pRegionList, pFarmList) {
  let fishInRomandeRegionList = [];
  for (let index = 0; index < pRegionList.length; index++) {
      const region = pRegionList[index];
      fishInRomandeRegionList = pFarmList.filter(fish => fish.saleLocations.includes(region))
  }
  return fishInRomandeRegionList
}
/**
* Swiss Romande bölgesinde sonbahar ve kis aylarinda satilan baliklari bulur
* @param {*} pFishList 
*/
function findWithSeasonFishList(pFishList) {
  let listInSeason =pFishList.filter((fish) => (fish.season === ("Autumn") || fish.season === ("Winter")))
  return listInSeason
}
/**
* Swiss Romande bölgesinde sonbahar ve kis aylarinda satilan baliklarin ortalama satis fiyatini bulur 
* @param {*} pFishList 
*/
function findAveragePrice(pFishList) {
  let totalPrice = null;
  pFishList.map(fish => totalPrice += fish.price)
  let averagePrice = totalPrice / pFishList.length
  return averagePrice
}
/**
 * Ticino Kantonunda satilabilecek balik stogunu bulur
 * @param {*} pFarmList 
 * @param {*} pLocation 
 */
function findLocationFishStock(pFarmList, pLocation) {
  let locationFishStock = 0
  pFarmList.filter(fish => fish.saleLocations.includes(pLocation))
           .map(fish => locationFishStock += fish.stockVolumeInKg)
  return locationFishStock
}
/**
 * Belirli bir mevsimde belirli bir gölgede satilan baliklari bulur
 * @param {*} pFarmList 
 * @param {*} pSeason 
 * @param {*} pLocation 
 */
function findInSeasonInLocationFish(pFarmList, pSeason, pLocation) {
  let listInSeasonInLocation=pFarmList.filter((fish) => fish.season===pSeason && fish.saleLocations.includes(pLocation))  
  return listInSeasonInLocation
 }
 /**
 * Belirli bir bölgede belirli bir mevsimde satilan baliklarin ortalama gramajini bulur.
 * @param {*} pFarmList 
 * @param {*} pSeason 
 * @param {*} pLocation 
 */
 function findAverageFishGram(pFishList) {
  let totalGram = pFishList.reduce((firstFish,secondFish)=>firstFish.itemWeightInGrams+secondFish.itemWeightInGrams);
  let averageFishGram=totalGram/pFishList.length;
  return averageFishGram
 }
/**
 * Bern Kantonu'nda Kis Sezonunda satilan baliklari ekrana yazdirir
 * @param {*} pFarmList 
 */
 function viewFishType (pFarmList){
  console.log(`Bern Kantonu'nda Kis Sezonunda satilan baliklar`)
pFarmList.map(fish=>
  console.log(`${fish.fishType}`))
}


