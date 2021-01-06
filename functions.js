
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




let withLastDateList = fishFarm;


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
function findEuropeanFish(pFarmList, pCountryList) {
  let europeanFish = [];
  pFarmList.filter(fish => {
    for (let index = 0; index < pCountryList.length; index++) {
      const country = pCountryList[index].toLowerCase();
      if (fish.originCountry.toLowerCase() === country) {
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
function sortAlphabeticalList(pFarmList, pCountryList) {
  let alphabeticalList = findEuropeanFish(pFarmList, pCountryList).sort();
  return alphabeticalList;
}
console.log(sortAlphabeticalList(fishFarm, europeanCountry));

/**
 * Toplam balik stogunu bulur
 * @param {*} pFarmList 
 */
function findTotalFishStock(pFarmList) {
  let totalStockVolumeKg = null;
  pFarmList.map(fish => {
    totalStockVolumeKg += fish.stockVolumeInKg
  })
  return totalStockVolumeKg
}

console.log(findTotalFishStock(fishFarm))
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

/**
 * Swiss Romande bölgesinde satilan baliklari bulur
 * @param {*} pRegionList 
 * @param {*} pFarmList 
 */
function findFishInRomandeRegion(pRegionList, pFarmList) {
  let fishInRomandeRegionList = null
  for (let index = 0; index < pRegionList.length; index++) {
    const region = pRegionList[index];
    fishInRomandeRegionList = pFarmList.filter(fish => fish.saleLocations.includes(region))
  }
  return fishInRomandeRegionList
}
/**
 * Swiss Romande bölgesinde sonbahar ve kis aylarinda satilan baliklari bulur
 * @param {*} pRegionList 
 * @param {*} pFarmList 
 */
function findWithSeasonFishList(pRegionList, pFarmList) {
  let listInSeason = (fish) => (fish.season === ("Autumn") || fish.season === ("Winter"))
  let withSeasonList = findFishInRomandeRegion(pRegionList, pFarmList).filter(listInSeason)
  return withSeasonList
}

/**
 * Swiss Romande bölgesinde sonbahar ve kis aylarinda satilan baliklarin ortalama satis fiyatini bulur
 * @param {*} pRegionList 
 * @param {*} pFarmList 
 */
function findAveragePrice(pRegionList, pFarmList) {
  let totalPrice = null;
  findWithSeasonFishList(pRegionList, pFarmList).map(fish => totalPrice += fish.price)
  let averagePrice = Math.round(totalPrice / findWithSeasonFishList(pRegionList, pFarmList).length)
  return averagePrice
}

console.log(findAveragePrice(swissRomandeRegion, fishFarm))

/**
 * Ticino Kantonunda satilabilecek balik stogunu bulur
 * @param {*} pFarmList 
 */
function findTicinoFishStock(pFarmList) {
  let ticinoFishStock = 0
  pFarmList.filter(fish => fish.saleLocations.includes("TI"))
    .map(fish => ticinoFishStock += fish.stockVolumeInKg)
  return ticinoFishStock
}

console.log(findTicinoFishStock(fishFarm))
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


