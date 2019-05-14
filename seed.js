const { Vendor, Produce, Day, } = require('./models.js')

async function main() {
  /* delete everything in the database */
  await Vendor.destroy({
    where: {}
  });

  await Produce.destroy({
    where: {}
  });

  await Day.destroy({
    where: {}
  });

  /* add vendor seed data */
  const spirits = await Vendor.create({
    name: '1857 Spirits',
    products: 'Potato Vodka'
  });

  const alewife = await Vendor.create({
    name: 'Alewife Farm',
    products: 'Vegetables'
  });

  const americanSeafood = await Vendor.create({
    name: 'American Seafood',
    products: 'Seafood'
  });

  const andrewsLocal = await Vendor.create({
    name: `Andrew's Local Honey`,
    products: 'Honey, Soap'
  });

  const anthonyRoad = await Vendor.create({
    name: 'Anthony Road Winery',
    products: 'Finger Lakes wines'
  });

  const appleState = await Vendor.create({
    name: 'Apple State Hilltop',
    products: 'Honey'
  });

  const ardithMae = await Vendor.create({
    name: 'Ardith Mae Farm',
    products: 'Goat cheese, Meat'
  });

  const bakersBounty = await Vendor.create({
    name: `Baker's Bounty`,
    products: 'Baked goods'
  });

  const bearCreekFarm = await Vendor.create({
    name: 'Bear Creek Farm',
    products: 'Curt flowers'
  });

  const berkshireBerries = await Vendor.create({
    name: 'Berkshire Berries',
    products: 'Jam, Honey, Syrup'
  });

  const bethsFarmKitchen = await Vendor.create({
    name: `Beth's Farm Kitchen `,
    products: 'Jams, Preserves'
  });

  const blueOysterCultivation = await Vendor.create({
    name: 'Blue Oyster Cultivation',
    products: 'Mushrooms'
  });

  const bobolinkDairyBakery = await Vendor.create({
    name: 'Bobolink Dairy & Bakery',
    products: 'Cow cheese, bread'
  });

  const bodySoulBakery = await Vendor.create({
    name: 'Body & Soul Bakery',
    products: 'Vegan/GF baked goods'
  });

  const borgheseVineyard = await Vendor.create({
    name: 'Borghese Vineyard',
    products: 'Long Island Wine'
  });

  const breadAlone = await Vendor.create({
    name: 'Bread Alone',
    products: 'Baked goods'
  });

  const breezyHillOrchard = await Vendor.create({
    name: 'Breezy Hill Orchard',
    products: 'Orchard fruit & related'
  });

  const bulichMushrooms = await Vendor.create({
    name: 'Bulich Mushrooms',
    products: 'Mushrooms'
  });

  const campoRosso = await Vendor.create({
    name: 'Campo Russo',
    products: 'Vegetables'
  });

  const caradonnaFarm = await Vendor.create({
    name: 'Caradonna Farm',
    products: 'Orchard fruit & veg'
  });

  const catoCornerFarm = await Vendor.create({
    name: 'Cato Corner Farm',
    products: 'Cow cheese'
  });

  const catskillMerino = await Vendor.create({
    name: 'Catskill Merino',
    products: ' Lamb & Wool'
  });

  const centralValleyDairy = await Vendor.create({
    name: 'Central Valley Dairy',
    products: 'Cow Cheese, eggs, vegetables'
  });

  const chateauRenaissance = await Vendor.create({
    name: 'Chateau Renaissance',
    products: `Finger Lake's Wine`
  });

  const cherryLaneFarm = await Vendor.create({
    name: 'Cherry Lane Farm',
    products: 'Vegetables'
  });

  const citySaucery = await Vendor.create({
    name: 'City Saucery',
    products: 'Preserved Tomatoes'
  });

  const considerBardwellFarm = await Vendor.create({
    name: 'Consider Bardwell Farm',
    products: 'Cheese',
  });

  const dattolicoOrganics = await Vendor.create({
    name: `D'Attolico Organics`,
    products: 'Organic Vegetables & Hummus'
  });

  const deepMountainMaple = await Vendor.create({
    name: 'Deep Mountain Maple',
    products: 'Maple Products'
  });

  const dipaolaTurkeyFarm = await Vendor.create({
    name: 'DiPaola Turkey Farm',
    products: 'Turkey products'
  });

  const dutchmillGarden = await Vendor.create({
    name: 'Dutchmill Garden',
    products: 'Cut Flowers'
  });

  const eckertonHillFarm = await Vendor.create({
    name: 'Eckerton Hill Farm',
    products: 'Vegetables & fruit'
  });

  const fantasticGardens = await Vendor.create({
    name: 'Fantastic Gardens',
    products: 'Potted plants'
  });

  const fiestyAcresFarm = await Vendor.create({
    name: 'Fiesty Acres Farm',
    products: 'Game birds & eggs'
  });

  const fledgingCrowFarm = await Vendor.create({
    name: 'Fledging Crow Farm',
    products: 'Cert. organic vegetables'
  });

  const flyingPigsFarm = await Vendor.create({
    name: 'Flying Pigs Farm',
    products: 'Pork, chicken & eggs'
  });

  const francescasBakery = await Vendor.create({
    name: `Francesca's Bakery`,
    products: 'Baked Goods'
  });

  const furnaceCreekFarm = await Vendor.create({
    name: 'Furnace Creek Farm',
    products: 'Herbs, tisanes & elixers'
  });

  const gailsFarm = await Vendor.create({
    name: `Gail's Farm`,
    products: 'Eggs, Mushrooms'
  });

  const gopalFarm = await Vendor.create({
    name: 'Gopal Farm',
    products: 'Indian Vegetables'
  });

  const gorzynskiOrneryFarm = await Vendor.create({
    name: 'Gorzynski Ornery Farm',
    products: 'Vegetables, eggs'
  });

  const grazinAngusAcres = await Vendor.create({
    name: `Grazin' Angus Farm`,
    products: 'Beef, pork, chicken, eggs'
  });

  const grazinDistillery = await Vendor.create({
    name: `Grazin' Distillery`,
    products: 'Whiskey'
  });

  const growNycGrainstand = await Vendor.create({
    name: 'GrowNYC Grainstand',
    products: 'Flour, grains, beans'
  }); 

  const growNycGrainstandGuest = await Vendor.create({
    name: 'GrowNYC Grainstand Guest',
    products: 'Beer & Spirits'
  });

  const hawthorneValleyFarm = await Vendor.create({
    name: 'Hawthorne Valley Farm',
    products: 'Vegetables, Cheese, Bakery'
  });

  const hickoryLedges = await Vendor.create({
    name: 'Hickory Ledges',
    products: 'Moonshine'
  });

  const hillrockEstateDistillery = await Vendor.create({
    name: 'Hillrock Estate Distillery',
    products: 'Whiskey'
  });

  const hoeffnerFarms = await Vendor.create({
    name: 'Hoffner Farms',
    products: 'Vegetables & potted plants'
  });

  const holySchmitts = await Vendor.create({
    name: `Holy Schmitt's`,
    products: 'Horseradish'
  });

  const hudsonValleyColdPress = await Vendor.create({
    name: 'Hudson Valley Cold Press',
    products: 'Sunflower oil & flour'
  });

  const hudsonValleyDuck = await Vendor.create({
    name: 'Hudson Valley Duck',
    products: 'Duck Products'
  });

  const hudsonValleyOrganics = await Vendor.create({
    name: 'Hudson Valley Organics',
    products: 'Sprouts & microgreens'
  });

  const jamesDurrFlowers = await Vendor.create({
    name: 'James Durr FLowers',
    products: 'FLowers'
  });

  const josephinesFeast = await Vendor.create({
    name: `Josephine's Feast!`,
    products: 'Jams & Preserves'
  });

  const keithsFarm = await Vendor.create({
    name: `Keith's Farm`,
    products: 'Vegetables'
  });

  const kernanFarms = await Vendor.create({
    name: `Kernan Farms`,
    products: 'Vegetables & fruit'
  });

  const kimcheeHarvest = await Vendor.create({
    name: 'Kimchee Harvest',
    products: 'Kimchee'
  });

  const knollKrestFarm = await Vendor.create({
    name: 'Knoll Krest Farm',
    products: 'Vegetables & fruit'
  });

  const lanisFarm = await Vendor.create({
    name: `Lani's Farm`,
    products: 'Vegetables'
  });

  const lasDelicias = await Vendor.create({
    name: 'Las Delicias',
    products: 'Kosher & GF bakery'
  });

  const lavenderByTheBay = await Vendor.create({
    name: 'Lavender By The Bay',
    products: 'Lavendar products'
  });

  const locustGroveFarm = await Vendor.create({
    name: 'Locust Grove Farm',
    products: 'Orchard fruit'
  });

  const lostBread = await Vendor.create({
    name: 'Lost Bread',
    products: 'Bakery'
  });

  const lowlandFarm = await Vendor.create({
    name: 'Lowland Farm',
    products: 'Beef & lamb'
  });

  const luckyDogOrganics = await Vendor.create({
    name: 'Luck Dog Organics',
    products: 'Vegetables & Goat dairy'
  });

  const lunaFamilyFarm = await Vendor.create({
    name: 'Luna Family Farm',
    products: 'Cut Flowers & Herbs'
  });
  
  const lynnhavenGoatFarm = await Vendor.create({
    name: 'LynnHaven Goat Farm',
    products: 'Goat dairy & meat'
  });

  const maduraFarm = await Vendor.create({
    name: 'Madura Farm',
    products: 'Vegetables'
  });

  const martinsPretzels = await Vendor.create({
    name: `Martin's Pretzels`,
    products: 'Pretzels'
  });

  const maxCreekHatchery = await Vendor.create({
    name: 'Max Creek Hatchery',
    products: 'Fish'
  });

  const migliorelliFarm = await Vendor.create({
    name: 'Migliorelli Farm',
    products: 'Vegetable, fruit & beer'
  });

  const miliportDairy = await Vendor.create({
   name: 'Miliport Dairy',
   products: 'Cheese, meat & eggs' 
  });

  const mountainSweetBerry = await Vendor.create({
    name: 'Mountain Sweet Berry',
    products: 'Vegetables, chips & strawberries'
  });

  const moxieRidgeCreamery = await Vendor.create({
    name: 'Moxie Ridge Creamery',
    products: 'Goat dairy'
  });

  const nemethBakery = await Vendor.create({
    name: 'Nemeth Bakery',
    products: 'Baked goods'
  });

  const northshireFarms = await Vendor.create({
    name: 'Northshire Farms',
    products: 'Vegetables, eggs & honey'
  });

  const norwichMeadowsFarm = await Vendor.create({
    name: 'Norwich Meadows Farm',
    products: 'Vegetables, chicken, eggs & pickles'
  });

  const newYorkCiderCo = await Vendor.create({
    name: 'New York Cider Co.',
    products: 'Hard Cider'
  });

  const oakGrovePlantation = await Vendor.create({
    name: 'Oak Grove Plantation',
    products: 'Vegetables, plants, fruit & grain'
  });

  const offTheWheat = await Vendor.create({
    name: 'Off The Wheat',
    products: 'GF & Keto bakery'
  });

  const orangeCountyDistillery = await Vendor.create({
    name: 'Orange County Distillery',
    products: 'Spitits'
  });

  const oleMotherHubbert = await Vendor.create({
    name:  `Ole' Mother Hubbbert`,
    products: 'Dairy, eggs, cheese'
  });

  const ourDailyBread = await Vendor.create({
    name: 'Our Daily Bread',
    products: 'Baked Goods'
  });

  const paintedGoat = await Vendor.create({
    name: 'Painted Goat',
    products: 'Goat cheese'
  });

  const paffenrothGarden = await Vendor.create({
    name: 'Paffernroth Garden',
    products: 'Vegetables'
  });

  const peddSeafood = await Vendor.create({
    name: 'PP&DD Seafood',
    products: 'Seafood'
  });

  const petaiPlantsFlowers = await Vendor.create({
    name: 'PetAI Plants & Flowers',
    products: 'Potted plants'
  });

  const phillipsFarms = await Vendor.create({
    name: 'Phillips Farms',
    products: 'Vegetables, fruit, preserves'
  });

  const puraVidaFisheries = await Vendor.create({
    name: 'Pura Vida Fisheries',
    products: 'Seafood'
  });

  const quartonFarm = await Vendor.create({
    name: 'Quarton Farm',
    products: 'Vegetables & Beans'
  });

  const quattrosGameFarm = await Vendor.create({
    name: `Quattro's Game Farm`,
    products: 'Poultry, game & eggs'
  });

  const raceFarm = await Vendor.create({
    name: 'Race Farm',
    products: 'Vegetable, fruit & related'
  });

  const rambleCreek = await Vendor.create({
    name: 'Ramble Creek',
    products: 'Poultry, mushrooms'
  });

  const ravenBoar = await Vendor.create({
    name: 'Raven & Boar',
    products: 'Sasuage, Dunmplings'
  });

  const riseRootFarm = await Vendor.create({
    name: 'Rise & Root Farm',
    products: 'Stater plants & vegetables'
  });

  const riverGarden = await Vendor.create({
    name: 'River Garden',
    products: 'Flowers, dried flowers'
  });

  const riverineRanch = await Vendor.create({
    name: 'Riverine Ranch',
    products: 'Water buffalo meat, dairy'
  });

  const roamingAcres = await Vendor.create({
    name: 'Roaming Acres',
    products: 'Bison, ostrich and pork'
  });

  const ronnybrookFarm = await Vendor.create({
    name: 'Ronnybrook Farm',
    products: 'Cow Dairy'
  });

  const roseMeadowFarm = await Vendor.create({
    name: 'Rose Meadow Farm',
    products: 'Flowers'
  });

  const rosehavenAlpacas = await Vendor.create({
    name: 'Rosehaven Alpacas',
    products: 'Wool products & yarn'
  });

  const rowByRowFarm = await Vendor.create({
    name: 'Row By Row Farm',
    products: 'Vegetables & eggs'
  });

  const roxburyMountainMaple = await Vendor.create({
    name: 'Roxbury Mountain Maple',
    products: 'Maple syrup products'
  });

  const runnerStone = await Vendor.create({
    name: 'Runner & Stone',
    products: 'Baked goods'
  });
  











  /* add produce seed data */
  const vegetableHerbs = await Produce.create({
    name: 'Vegetables/Herbs'
  });

  const fruitOrchard = await Produce.create({
    name: 'Fruit/Orchard'
  });

  const livestock = await Produce.create({
    name: 'Livestock'
  });

  const plantsFlowers = await Produce.create({
    name: 'Plants/Flowers'
  });

  const bakerGrains = await Produce.create({
    name: 'Baker/Grains'
  });

  const fish = await Produce.create({
    name: 'Fish'
  });

  const honey = await Produce.create({
    name: 'Honey'
  });

  const dairyCheese = await Produce.create({
    name: 'Dairy/Cheese'
  });

  const eggsPoultry = await Produce.create({
    name: 'Eggs/Poultry'
  });

  const mushrooms = await Produce.create({
    name: 'Mushrooms'
  });

  const alcohol = await Produce.create({
    name: 'Wine/Beer/Spirits'
  });

  const mapleSyrup = await Produce.create({
    name: 'Maple Syrup'
  });

  const jamsPicklesPreserves = await Produce.create({
    name: 'Jams/Pickles/Preserves'
  });


  /* add day seed data */
  const monday = await Day.create({
    name: 'Monday'
  });

  const wednesday = await Day.create({
    name: 'Wednesday'
  });

  const friday = await Day.create({
    name: 'Friday'
  });

  const saturday = await Day.create({
    name: 'Saturday'
  });

  /* add association data */
  await spirits.setProduce(alcohol);
  await alewife.setProduce(vegetableHerbs);
  await americanSeafood.setProduce(fish);
  await andrewsLocal.setProduce(honey);
  await anthonyRoad.setProduce(alcohol);
  await appleState.setProduce(honey);
  await ardithMae.setProduce(dairyCheese);
  await bakersBounty.setProduce(bakedGoods);
  await bearCreekFarm.setProduce(cutFlowers);
  await berkshireBerries.setProduce(jamsPicklesPreserves);
  await bethsFarmKitchen.setProduce(jamsPicklesPreserves);
  await blueOysterCultivation.setProduce(mushrooms);
  await bobolinkDairyBakery.setProduce(dairyCheese);
  await bodySoulBakery.setProduce(bakerGrains);
  await borgheseVineyard.setProduce(alcohol);
  await breadAlone.setProduce(bakerGrains);
  await breezyHillOrchard.setProduce(fruitOrchard);
  await bulichMushrooms.setProduce(mushrooms);
  await campoRosso.setProduce(vegetableHerbs);
  await caradonnaFarm.setProduce(fruitOrchard);
  await catoCornerFarm.setProduce(dairyCheese);
  await catskillMerino.setProduce(livestock);
  await centralValleyDairy.setProduce(dairyCheese);
  await chateauRenaissance.setProduce(alcohol);
  await cherryLaneFarm.setProduce(vegetableHerbs);
  await citySaucery.setProduce(vegetableHerbs);
  await considerBardwellFarm.setProduce(dairyCheese);
  await dattolicoOrganics.setProduce(vegetableHerbs);
  await deepMountainMaple.setProduce(mapleSyrup);
  await dipaolaTurkeyFarm.setProduce(livestock);
  await dutchmillGarden.setProduce(cutFlowers);
  await eckertonHillFarm.setProduce(vegetableHerbs);
  await fantasticGardens.setProduce(plantsFlowers);
  await fiestyAcresFarm.setProduce(livestock);
  await fledgingCrowFarm.setProduce(vegetableHerbs);
  await flyingPigsFarm.setProduce(livestock);
  await francescasBakery.setProduce(bakedGoods);
  await furnaceCreekFarm.setProduce(vegetableHerbs);
  await gailsFarm.setProduce(mushrooms);
  await gopalFarm.setProduce(vegetableHerbs);
  await gorzynskiOrneryFarm.setProduce(vegetableHerbs);
  await grazinAngusAcres.setProduce(livestock);
  await grazinDistillery.setProduce(alcohol);
  await growNycGrainstand.setProduce(bakerGrains);
  await growNycGrainstandGuest.setProduce(alcohol);
  await hawthorneValleyFarm.setProduce(vegetableHerbs);
  await hickoryLedges.setProduce(alcohol);
  await hillrockEstateDistillery.setProduce(alcohol);
  await hoeffnerFarms.setProduce(vegetableHerbs);
  await holySchmitts.setProduce(vegetableHerbs);
  await hudsonValleyColdPress.setProduce(vegetableHerbs);
  await hudsonValleyDuck.setProduce(livestock);
  await hudsonValleyOrganics.setProduce(vegetableHerbs);
  await jamesDurrFlowers.setProduce(plantsFlowers);
  await josephinesFeast.setProduce(jamsPicklesPreserves);
  await keithsFarm.setProduce(vegetableHerbs);
  await kernanFarms.setProduce(vegetableHerbs);
  await kimcheeHarvest.setProduce(vegetableHerbs);
  await knollKrestFarm.setProduce(eggsPoultry);
  await lanisFarm.setProduce(vegetableHerbs);
  await lasDelicias.setProduce(bakedGoods);
  await lavenderByTheBay.setProduce(vegetableHerbs);
  await locustGroveFarm.setProduce(fruitOrchard);
  await lostBread.setProduce(bakerGrains);
  await lowlandFarm.setProduce(livestock);
  await luckyDogOrganics.setProduce(vegetableHerbs);
  await lunaFamilyFarm.setProduce(plantsFlowers)
  await lynnhavenGoatFarm.setProduce(livestock);
  await maduraFarm.setProduce(vegetableHerbs);
  await martinsPretzels.setProduce(bakedGoods);
  await maxCreekHatchery.setProduce(vegetableHerbs);
  await migliorelliFarm.setProduce(vegetableHerbs);
  await miliportDairy.setProduce(dairyCheese);
  await mountainSweetBerry.setProduce(vegetableHerbs);
  await moxieRidgeCreamery.setProduce(dairyCheese);
  await nemethBakery.setProduce(bakedGoods);
  await northshireFarms.setProduce(vegetableHerbs);
  await norwichMeadowsFarm.setProduce(vegetableHerbs);
  await newYorkCiderCo.setProduce(alcohol);
  await oakGrovePlantation.setProduce(vegetableHerbs);
  await offTheWheat.setProduce(bakerGrains);
  await orangeCountyDistillery.setProduce(alcohol);
  await oleMotherHubbert.setProduce(dairyCheese);
  await ourDailyBread.setProduce(bakerGrains);
  await paintedGoat.setProduce(dairyCheese);
  await paffenrothGarden.setProduce(vegetableHerbs);
  await peddSeafood.setProduce(americanSeafood);
  await petaiPlantsFlowers.setProduce(plantsFlowers);
  await phillipsFarms.setProduce(vegetableHerbs);
  await puraVidaFisheries.setProduce(americanSeafood);
  await quartonFarm.setProduce(vegetableHerbs);
  await quattrosGameFarm.setProduce(livestock);
  await raceFarm.setProduce(vegetableHerbs);
  await rambleCreek.setProduce(eggsPoultry);
  await ravenBoar.setProduce(livestock);
  await riseRootFarm.setProduce(plantsFlowers);
  await riverGarden.setProduce(plantsFlowers);
  await riverineRanch.setProduce(livestock);
  await roamingAcres.setProduce(livestock);
  await ronnybrookFarm.setProduce(dairyCheese);
  await roseMeadowFarm.setProduce(plantsFlowers);
  await rosehavenAlpacas.setProduce(livestock);
  await rowByRowFarm.setProduce(vegetableHerbs);
  await roxburyMountainMaple.setProduce(mapleSyrup);
  await runnerStone.setProduce(bakedGoods);
  

  await spirits.addDays([friday, saturday]);
  await alewife.addDays([monday, friday]);
  await americanSeafood.addDay(wednesday);
  await andrewsLocal.addDays([wednesday, saturday]);
  await anthonyRoad.addDay(saturday);
  await appleState.addDay(monday);
  await ardithMae.addDay(saturday);
  await bakersBounty.addDay(wednesday);
  await bearCreekFarm.addDays([wednesday, friday, saturday]);
  await berkshireBerries.addDays([monday, wednesday, saturday]);
  await bethsFarmKitchen.addDays([wednesday, friday, saturday]);
  await blueOysterCultivation.addDays([monday, saturday]);
  await bobolinkDairyBakery.addDay(friday);
  await bodySoulBakery.addDays([monday, wednesday, friday, saturday]);
  await borgheseVineyard.addDay(friday);
  await breadAlone.addDays([monday,wednesday, friday, saturday]);
  await breezyHillOrchard.addDays([wednesday, friday]);
  await bulichMushrooms.addDays([wednesday, saturday]);
  await campoRosso.addDay(friday);
  await caradonnaFarm.addDays([friday, saturday]);
  await catoCornerFarm.addDay(saturday);
  await catskillMerino.addDay(saturday);
  await centralValleyDairy.addDays([monday, friday]);
  await chateauRenaissance.addDay(saturday);
  await cherryLaneFarm.addDays([wednesday, saturday]);
  await citySaucery.addDays([wednesday, friday, saturday]);
  await considerBardwellFarm.addDays([monday, wednesday, friday]);
  await dattolicoOrganics.addDay(saturday);
  await deepMountainMaple.addDays([friday, saturday]);
  await dipaolaTurkeyFarm.addDays([wednesday, friday]);
  await dutchmillGarden.addDays([monday, wednesday]);
  await eckertonHillFarm.addDays([wednesday, saturday]);
  await fantasticGardens.addDays([wednesday, friday, saturday]);
  await fiestyAcresFarm.addDay(wednesday);
  await fledgingCrowFarm.addDay(wednesday);
  await flyingPigsFarm.addDays([friday, saturday]);
  await francescasBakery.addDay(friday);
  await furnaceCreekFarm.addDays([wednesday, friday]);
  await gailsFarm.addDays([monday, wednesday, saturday]);
  await gopalFarm.addDay(friday);
  await gorzynskiOrneryFarm.addDay(saturday);
  await grazinAngusAcres.addDay(saturday);
  await grazinDistillery.addDay(saturday);
  await growNycGrainstand.addDays([wednesday, saturday]);
  await growNycGrainstandGuest.addDays([wednesday, saturday]);
  await hawthorneValleyFarm.addDays([wednesday, saturday]);
  await hickoryLedges.addDays([friday, saturday]);
  await hillrockEstateDistillery.addDay(monday);
  await hoeffnerFarms.addDays([wednesday, saturday]);
  await holySchmitts.addDays([friday, saturday]);
  await hudsonValleyColdPress.addDay(wednesday);
  await hudsonValleyDuck.addDays([monday, wednesday, saturday]);
  await hudsonValleyOrganics.addDay(saturday);
  await jamesDurrFlowers.addDay(saturday);
  await josephinesFeast.addDays([wednesday, saturday]);
  await keithsFarm.addDays([wednesday, saturday]);
  await kernanFarms.addDay(wednesday);
  await kimcheeHarvest.addDays([monday, wednesday, friday, saturday]);
  await knollKrestFarm.addDays([wednesday, saturday]);
  await lanisFarm.addDays([monday, wednesday, saturday]);
  await lasDelicias.addDays([monday, wednesday, friday]);
  await lavenderByTheBay.addDays([monday, wednesday, friday, saturday]);
  await locustGroveFarm.addDays([wednesday, saturday]);
  await lostBread.addDays([wednesday, friday]);
  await lowlandFarm.addDay(monday);
  await luckyDogOrganics.addDay(friday);
  await lunaFamilyFarm.addDay(wednesday);
  await lynnhavenGoatFarm.addDays([wednesday, saturday]);
  await maduraFarm.addDays([monday, wednesday, friday]);
  await martinsPretzels.addDays([monday, wednesday, friday, saturday]);
  await maxCreekHatchery.addDay(wednesday);
  await migliorelliFarm.addDays([wednesday, friday, saturday]);
  await miliportDairy.addDays([wednesday, friday, saturday]);
  await mountainSweetBerry.addDays([wednesday, friday, saturday]);
  await moxieRidgeCreamery.addDay(friday);
  await nemethBakery.addDay(monday);
  await northshireFarms.addDay(saturday);
  await norwichMeadowsFarm.addDays([monday, friday, saturday]);
  await newYorkCiderCo.addDay(saturday);
  await oakGrovePlantation.addDays([wednesday, friday, saturday]);
  await offTheWheat.addDays([monday, friday, saturday]);
  await orangeCountyDistillery.addDays([wednesday, friday, saturday]);
  await oleMotherHubbert.addDays([monday, friday]);
  await ourDailyBread.addDays([wednesday, friday, saturday]);
  await paintedGoat.addDay(monday);
  await paffenrothGarden.addDays([wednesday, saturday]);
  await peddSeafood.addDays([monday, saturday]);
  await petaiPlantsFlowers.addDays([wednesday, friday, saturday]);
  await phillipsFarms.addDays([monday, wednesday, friday, saturday]);
  await puraVidaFisheries.addDay([friday]);
  await quartonFarm.addDay(monday);
  await quattrosGameFarm.addDay(saturday);
  await raceFarm.addDay(monday);
  await rambleCreek.addDay(friday);
  await ravenBoar.addDays([wednesday, saturday]);
  await riseRootFarm.addDay(friday);
  await riverGarden.addDays([monday, wednesday, friday, saturday]);
  await riverineRanch.addDays([wednesday, saturday]);
  await roamingAcres.addDays([monday, friday, saturday]);
  await ronnybrookFarm.addDays([wednesday, saturday]);
  await roseMeadowFarm.addDays([monday, friday, saturday]);
  await rosehavenAlpacas.addDays([wednesday, friday]);
  await rowByRowFarm.addDay(saturday);
  await roxburyMountainMaple.addDays([monday, wednesday]); 
  await runnerStone.addDay(saturday);
  

  

}

async function seed() {
  try {
    await main();
  } catch (e) {
    console.error(e);
  } finally {
    await process.exit();
  };
};

seed();
