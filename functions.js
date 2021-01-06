/*************  1.SORU *******************/                 
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
 * Belirli bir mevsimde belirli bir bölgede satilan baliklari bulur
 * @param {*} pFarmList 
 * @param {*} pSeason 
 * @param {*} pLocation 
 */
function findInSeasonInLocationFish(pFarmList, pSeason, pLocation) {
  let listInSeasonInLocation = (fish) => (fish.season.includes(pSeason) && fish.saleLocations.includes(pLocation))
  let listInSeasonInLocationFish = pFarmList.filter(listInSeasonInLocation)
  return listInSeasonInLocationFish
}

console.log(findInSeasonInLocationFish(fishFarm, "Winter", "BE"))

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
function sortAlphabeticalList(pFarmList,pCountryList) {
  let alphabeticalList = findEuropeanFish(pFarmList,pCountryList).sort();
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
  let listInSeasonInLocation = (fish) => (fish.season.includes(pSeason) && fish.saleLocations.includes(pLocation))
  let listInSeasonInLocationFish = pFarmList.filter(listInSeasonInLocation)
  return listInSeasonInLocationFish
}
/**
 * Belirli bir bölgede belirli bir mevsimde satilan baliklarin ortalama gramajini bulur.
 * @param {*} pFarmList 
 * @param {*} pSeason 
 * @param {*} pLocation 
 */
function findAverageFishGram(pFarmList, pSeason, pLocation) {
  let totalGram = null;
  findInSeasonInLocationFish(pFarmList, pSeason, pLocation).map(fish => totalGram += fish.itemWeightInGrams)
  let averageFishGram = Math.round(totalGram / findInSeasonInLocationFish(pFarmList, pSeason, pLocation).length)
  return averageFishGram
}
console.log(findAverageFishGram(fishFarm, "Summer", "ZH"))