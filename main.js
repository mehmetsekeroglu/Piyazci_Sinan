const fishFarm = [{
    fishType: "Salmon",
    price: 15.7,
    entryDate: new Date(2021, 0, 1), // 01.01.2021
    durationInDays: 30,
    itemWeightInGrams: 145,
    originCountry: "Norway",
    season: "Winter",
    stockVolumeInKg: 6500,
    saleLocations: ["ZH", "GE", "BE", "VD"],
  },
  {
    fishType: "Seatrout",
    price: 7.9,
    entryDate: new Date(2021, 11, 12), // 12.12.2021
    durationInDays: 20,
    itemWeightInGrams: 460,
    originCountry: "Japan",
    season: "Winter",
    stockVolumeInKg: 1600,
    saleLocations: ["GL", "GR", "BE", "VS"],
  },
  {
    fishType: "Sailfish",
    price: 5.2,
    entryDate: new Date(2021, 3, 19),
    durationInDays: 15,
    itemWeightInGrams: 240,
    originCountry: "United Kingdom",
    season: "Spring",
    stockVolumeInKg: 500,
    saleLocations: ["ZH", "SH", "BL", "SO"],
  },
  {
    fishType: "Red Drum",
    price: 3.1,
    entryDate: new Date(2021, 5, 15),
    durationInDays: 18,
    itemWeightInGrams: 300,
    originCountry: "Poland",
    season: "Summer",
    stockVolumeInKg: 15500,
    saleLocations: ["FR", "GE", "NE", "TI"],
  },
  {
    fishType: "Pompano",
    price: 10,
    entryDate: new Date(2021, 8, 17),
    durationInDays: 20,
    itemWeightInGrams: 645,
    originCountry: "France",
    season: "Autumn",
    stockVolumeInKg: 1500,
    saleLocations: ["ZH", "GE", "BE", "VD"],
  },
  {
    fishType: "Bluefish",
    price: 13.7,
    entryDate: new Date(2021, 10, 11),
    durationInDays: 5,
    itemWeightInGrams: 845,
    originCountry: "Italy",
    season: "Winter",
    stockVolumeInKg: 200,
    saleLocations: ["NW", "OW", "UR", "LU"],
  },
  {
    fishType: "Mackerel",
    price: 8.9,
    entryDate: new Date(2021, 6, 18),
    durationInDays: 16,
    itemWeightInGrams: 150,
    originCountry: "GREECE",
    season: "Summer",
    stockVolumeInKg: 8100,
    saleLocations: ["AG", "BL", "BE", "VD", "TG"],
  },
  {
    fishType: "Perch",
    price: 11.9,
    entryDate: new Date(2021, 10, 1),
    durationInDays: 30,
    itemWeightInGrams: 222,
    originCountry: "Egypt",
    season: "Summer",
    stockVolumeInKg: 9500,
    saleLocations: ["TI", "GE", "ZH", "VD", "AR"],
  },
  {
    fishType: "Mullet",
    price: 4.8,
    entryDate: new Date(2021, 2, 14),
    durationInDays: 30,
    itemWeightInGrams: 333,
    originCountry: "Vietnam",
    season: "Summer",
    stockVolumeInKg: 600,
    saleLocations: ["ZH", "GE", "BE", "VD"],
  },
  {
    fishType: "Tuna",
    price: 19.5,
    entryDate: new Date(2021, 0, 1),
    durationInDays: 30,
    itemWeightInGrams: 250,
    originCountry: "Spain",
    season: "Winter",
    stockVolumeInKg: 2300,
    saleLocations: ["ZH", "VD", "BS", "TI", "SG"],
  },
];

const europeanCountry = [
  "Austria",
  "Italy",
  "Belgium",
  "Latvia",
  "Bulgaria",
  "Lithuania",
  "Croatia",
  "Luxembourg",
  "Cyprus",
  "Malta",
  "Czechia",
  "Netherlands",
  "Denmark",
  "Poland",
  "Estonia",
  "Portugal",
  "Finland",
  "Romania",
  "France",
  "Slovakia",
  "Germany",
  "Slovenia",
  "Greece",
  "Spain",
  "Hungary",
  "Sweden",
  "Ireland",
];
const swissRomandeRegion = ["FR", "GE", "JU", "NE", "VL", "VD"];

/**************SORU-1******************/
let over500kgFishList = findOverStockVolumeFishList(fishFarm, 500)
console.log("Stok miktari 500 kg uzerinde olan baliklarin isimleri:")
over500kgFishList.map(fish => console.log(`FISH: ${fish.fishType} STOCK: ${fish.stockVolumeInKg}`))

/**************SORU-2******************/
let specialPriceRangeFish = findSpecialPriceRangeFish(fishFarm, 9, 12)
console.log("9-12 fiyat araligindaki baliklarin isimleri:")
specialPriceRangeFish.map(fish => console.log(`FISH: ${fish.fishType} PRICE: ${fish.price}`))

/**************SORU-3******************/
//Bern Kantonunda Kis mevsiminde satilan baliklar
let fishInBernInWinter = findInSeasonInLocationFish(fishFarm, "Winter", "BE");
//Bern Kantonunda Kis mevsiminde satilan baliklarin ekrana yazdirilmasi
let viewFishInBernInWinter = viewFishType(fishInBernInWinter)

/**************SORU-4******************/
let lastUseDate = findLastUseDate(fishFarm)
let sortedLastUseDate = sortLastUseDate(lastUseDate)
console.log("Son kullanma tarihini iceren balik listesi:")
sortedLastUseDate.map(fish => console.log(` DATE: ${fish.date} FISH: ${fish.name}`))

/**************SORU-5******************/
let europeanFish = findEuropeanFish(fishFarm, europeanCountry, 10)
let sortedAlphabeticalList = sortAlphabeticalList(europeanFish)
console.log(`AB kaynakli 10 CHF'den daha ucuz ve alfabetik olarak siralanmis baliklar: ${sortedAlphabeticalList}`)

/**************SORU-6******************/
let totalFishStock = findTotalFishStock(fishFarm)
console.log(`Toplam Balik Stogu : ${totalFishStock} Kg`)

/**************SORU-7******************/
let mostExpensiveFish = findMostExpensiveFish(fishFarm)
console.log(`Ciftlikteki en pahali balik: ${mostExpensiveFish} CHF`)

/**************SORU-8******************/
let maxDurationFishCountry = findMaxDurationFishCountry(fishFarm);
let viewMaxDurationFishCountry =["En uzun sure dayanabilen baliklarin ithal edildigi ülkeler, balik türleri ve dayanma süreleri:", maxDurationFishCountry] 
console.log(viewMaxDurationFishCountry)

/**************SORU-9******************/
//Swiss Romande Bölgesinde satilan baliklar
let fishInRomandeRegion = findFishInRomandeRegion(swissRomandeRegion, fishFarm);
//Swiss Romande Bölgesinde Sonbahar ve Kis aylarinda satilan baliklar
let withSeasonFishList = findWithSeasonFishList(fishInRomandeRegion);
//Swiss Romande Bölgesinde Sonbahar ve Kis aylarinda satilan baliklarin ortalama fiyati
let averageFishPrice = findAveragePrice(withSeasonFishList)
console.log(`Kis ve sonbahar sezonu icin swiss romande region'da satilan baliklarin ortalama fiyati ${averageFishPrice}`)

/**************SORU-10******************/
let ticinoFishStock = findLocationFishStock(fishFarm,"TI")
console.log(`Ticino Kantonunda satilabilecek balik stogu: ${ticinoFishStock} kg`)

/**************SORU-11******************/
//Zurih Kantonunda Yaz mevsiminde satilan baliklar
let fishInSummerInZurih = findInSeasonInLocationFish(fishFarm, "Summer", "ZH");
//Zurih Kantonunda Yaz mevsiminde satilan baliklarin gramajlarinin ortalamasi
let avarageFishInSummerInZurih = findAverageFishGram(fishInSummerInZurih)
console.log(`Zurih Kantonunda Yaz mevsiminde satilan baliklarin gramajlarinin ortalamasi: ${avarageFishInSummerInZurih}`);