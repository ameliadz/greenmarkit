const { Vendor, Category, Day } = require('./models.js');

async function main() {
  /* delete everything in the database */
  await Vendor.destroy({
    where: {},
  });

  await Category.destroy({
    where: {},
  });

  await Day.destroy({
    where: {}
  });

  /* add vendor seed data */
  const spirits = await Vendor.create({
    name: '1857 Spirits',
    products: 'potato vodka'
  });

  const alewife = await Vendor.create({
    name: 'Alewife Farm',
    products: 'vegetables'
  });

  const americanSeafood = await Vendor.create({
    name: 'American Seafood',
    products: 'seafood'
  });

  const andrewsLocal = await Vendor.create({
    name: `Andrew's Local Honey`,
    products: 'honey, soap'


  const anthonyRoad = await Vendor.create({
    name: 'Anthony Road Winery',
    products: 'finger lakes wines'
  });

  const appleState = await Vendor.create({
    name: 'Apple State Hilltop',
    products: 'honey'
  });

  const ardithMae = await Vendor.create({
    name: 'Ardith Mae Farm',
    products: 'goat cheese, meat'
  });

  const bakersBounty = await Vendor.create({
    name: `Baker's Bounty`,
    products: 'baked goods'
  });

  const bearCreekFarm = await Vendor.create({
    name: 'Bear Creek Farm',
    products: 'cut flowers'
  });

  const berkshireBerries = await Vendor.create({
    name: 'Berkshire Berries',
    products: 'jam, honey, syrup'
  });

  const bethsFarmKitchen = await Vendor.create({
    name: `Beth's Farm Kitchen `,
    products: 'jams, preserves'
  });

  const blueOysterCultivation = await Vendor.create({
    name: 'Blue Oyster Cultivation',
    products: 'mushrooms'
  });

  const bobolinkDairyBakery = await Vendor.create({
    name: 'Bobolink Dairy & Bakery',
    products: 'cow cheese, bread'
  });

  const bodySoulBakery = await Vendor.create({
    name: 'Body & Soul Bakery',
    products: 'vegan, gluten free, baked goods'
  });

  const borgheseVineyard = await Vendor.create({
    name: 'Borghese Vineyard',
    products: 'long island wine'
  });

  const breadAlone = await Vendor.create({
    name: 'Bread Alone',
    products: 'baked goods'
  });

  const breezyHillOrchard = await Vendor.create({
    name: 'Breezy Hill Orchard',
    products: 'orchard fruit, orchard fruit related'
  });

  const bulichMushrooms = await Vendor.create({
    name: 'Bulich Mushrooms',
    products: 'mushrooms'
  });

  const campoRosso = await Vendor.create({
    name: 'Campo Russo',
    products: 'vegetables'
  });

  const caradonnaFarm = await Vendor.create({
    name: 'Caradonna Farm',
    products: 'orchard fruit, vegetables'
  });

  const catoCornerFarm = await Vendor.create({
    name: 'Cato Corner Farm',
    products: 'cow cheese'
  });

  const catskillMerino = await Vendor.create({
    name: 'Catskill Merino',
    products: 'lamb, wool'
  });

  const centralValleyDairy = await Vendor.create({
    name: 'Central Valley Dairy',
    products: 'cow cheese, eggs, vegetables'
  });

  const chateauRenaissance = await Vendor.create({
    name: 'Chateau Renaissance',
    products: 'finger lakes wine'
  });

  const cherryLaneFarm = await Vendor.create({
    name: 'Cherry Lane Farm',
    products: 'vegetables'
  });

  const citySaucery = await Vendor.create({
    name: 'City Saucery',
    products: 'preserved tomatoes'
  });

  const considerBardwellFarm = await Vendor.create({
    name: 'Consider Bardwell Farm',
    products: 'cheese'
  });

  const dattolicoOrganics = await Vendor.create({
    name: `D'Attolico Organics`,
    products: 'organic, vegetables, hummus'
  });

  const deepMountainMaple = await Vendor.create({
    name: 'Deep Mountain Maple',
    products: 'maple, maple products'
  });

  const dipaolaTurkeyFarm = await Vendor.create({
    name: 'DiPaola Turkey Farm',
    products: 'turkey, turkey products'
  });

  const dutchmillGarden = await Vendor.create({
    name: 'Dutchmill Garden',
    products: 'cut flowers'
  });

  const eckertonHillFarm = await Vendor.create({
    name: 'Eckerton Hill Farm',
    products: 'vegetables, fruit'
  });

  const fantasticGardens = await Vendor.create({
    name: 'Fantastic Gardens',
    products: 'potted plants'
  });

  const feistyAcresFarm = await Vendor.create({
    name: 'Feisty Acres Farm',
    products: 'game birds, eggs'
  });

  const fledgingCrowFarm = await Vendor.create({
    name: 'Fledging Crow Farm',
    products: 'organic, vegetables'
  });

  const flyingPigsFarm = await Vendor.create({
    name: 'Flying Pigs Farm',
    products: 'pork, chicken, eggs'
  });

  const francescasBakery = await Vendor.create({
    name: `Francesca's Bakery`,
    products: 'baked goods'
  });

  const furnaceCreekFarm = await Vendor.create({
    name: 'Furnace Creek Farm',
    products: 'herbs, tisanes, elixirs'
  });

  const gailsFarm = await Vendor.create({
    name: `Gail's Farm`,
    products: 'eggs, mushrooms'
  });

  const gopalFarm = await Vendor.create({
    name: 'Gopal Farm',
    products: 'indian vegetables'
  });

  const gorzynskiOrneryFarm = await Vendor.create({
    name: 'Gorzynski Ornery Farm',
    products: 'vegetables, eggs'
  });

  const grazinAngusAcres = await Vendor.create({
    name: `Grazin' Angus Farm`,
    products: 'beef, pork, chicken, eggs'
  });

  const grazinDistillery = await Vendor.create({
    name: `Grazin' Distillery`,
    products: 'whiskey'
  });

  const growNycGrainstand = await Vendor.create({
    name: 'GrowNYC Grainstand',
    products: 'flour, grains, beans'
  });

  const growNycGrainstandGuest = await Vendor.create({
    name: 'GrowNYC Grainstand Guest',
    products: 'beer, spirits'
  });

  const hawthorneValleyFarm = await Vendor.create({
    name: 'Hawthorne Valley Farm',
    products: 'vegetables, cheese, bakery'
  });

  const hickoryLedges = await Vendor.create({
    name: 'Hickory Ledges',
    products: 'moonshine'
  });

  const hillrockEstateDistillery = await Vendor.create({
    name: 'Hillrock Estate Distillery',
    products: 'whiskey'
  });

  const hoeffnerFarms = await Vendor.create({
    name: 'Hoffner Farms',
    products: 'vegetables, potted plants'
  });

  const holySchmitts = await Vendor.create({
    name: `Holy Schmitt's`,
    products: 'horseradish'
  });

  const hudsonValleyColdPress = await Vendor.create({
    name: 'Hudson Valley Cold Press',
    products: 'sunflower oil, flour'
  });

  const hudsonValleyDuck = await Vendor.create({
    name: 'Hudson Valley Duck',
    products: 'duck products'
  });

  const hudsonValleyOrganics = await Vendor.create({
    name: 'Hudson Valley Organics',
    products: 'sprouts, microgreens'
  });

  const jamesDurrFlowers = await Vendor.create({
    name: 'James Durr Flowers',
    products: 'flowers'
  });

  const josephinesFeast = await Vendor.create({
    name: `Josephine's Feast!`,
    products: 'jams, preserves'
  });

  const keithsFarm = await Vendor.create({
    name: `Keith's Farm`,
    products: 'vegetables'
  });

  const kernanFarms = await Vendor.create({
    name: `Kernan Farms`,
    products: 'vegetables, fruit'
  });

  const kimcheeHarvest = await Vendor.create({
    name: 'Kimchee Harvest',
    products: 'kimchee'
  });

  const knollKrestFarm = await Vendor.create({
    name: 'Knoll Krest Farm',
    products: 'vegetables', 'fruit'
  });

  const lanisFarm = await Vendor.create({
    name: `Lani's Farm`,
    products: 'vegetables'
  });

  const lasDelicias = await Vendor.create({
    name: 'Las Delicias',
    products: 'kosher, gluten free, baked goods'
  });

  const lavenderByTheBay = await Vendor.create({
    name: 'Lavender By The Bay',
    products: 'lavender products'
  });

  const locustGroveFarm = await Vendor.create({
    name: 'Locust Grove Farm',
    products: 'orchard fruit'
  });

  const lostBread = await Vendor.create({
    name: 'Lost Bread',
    products: 'baked goods'
  });

  const lowlandFarm = await Vendor.create({
    name: 'Lowland Farm',
    products: 'beef, lamb'
  });

  const luckyDogOrganics = await Vendor.create({
    name: 'Luck Dog Organics',
    products: 'vegetables, goat dairy'
  });

  const lunaFamilyFarm = await Vendor.create({
    name: 'Luna Family Farm',
    products: 'cut flowers, herbs'
  });

  const lynnhavenGoatFarm = await Vendor.create({
    name: 'LynnHaven Goat Farm',
    products: 'goat dairy, goat meat'
  });

  const maduraFarm = await Vendor.create({
    name: 'Madura Farm',
    products: 'vegetables'
  });

  const martinsPretzels = await Vendor.create({
    name: `Martin's Pretzels`,
    products: 'pretzels'
  });

  const maxCreekHatchery = await Vendor.create({
    name: 'Max Creek Hatchery',
    products: 'fish'
  });

  const migliorelliFarm = await Vendor.create({
    name: 'Migliorelli Farm',
    products: 'vegetable, fruit, beer'
  });

  const millportDairy = await Vendor.create({
   name: 'Millport Dairy',
   products: 'cheese, meat, eggs'
  });

  const mountainSweetBerry = await Vendor.create({
    name: 'Mountain Sweet Berry',
    products: 'vegetables, chips, strawberries'
  });

  const moxieRidgeCreamery = await Vendor.create({
    name: 'Moxie Ridge Creamery',
    products: 'goat dairy'
  });

  const nemethBakery = await Vendor.create({
    name: 'Nemeth Bakery',
    products: 'baked goods'
  });

  const northshireFarms = await Vendor.create({
    name: 'Northshire Farms',
    products: 'vegetables, eggs, honey'
  });

  const norwichMeadowsFarm = await Vendor.create({
    name: 'Norwich Meadows Farm',
    products: 'vegetables, chicken, eggs, pickles'
  });

  const newYorkCiderCo = await Vendor.create({
    name: 'New York Cider Co.',
    products: 'hard cider'
  });

  const oakGrovePlantation = await Vendor.create({
    name: 'Oak Grove Plantation',
    products: 'vegetables, plants, fruit, grain'
  });

  const offTheWheat = await Vendor.create({
    name: 'Off The Wheat',
    products: 'gluten free, keto, baked goods'
  });

  const orangeCountyDistillery = await Vendor.create({
    name: 'Orange County Distillery',
    products: 'spirits'
  });

  const oleMotherHubbert = await Vendor.create({
    name:  `Ole' Mother Hubbert`,
    products: 'dairy, eggs, cheese'
  });

  const ourDailyBread = await Vendor.create({
    name: 'Our Daily Bread',
    products: 'baked goods'
  });

  const paintedGoat = await Vendor.create({
    name: 'Painted Goat',
    products: 'goat cheese'
  });

  const paffenrothGarden = await Vendor.create({
    name: 'Paffenroth Garden',
    products: 'vegetables'
  });

  const peddSeafood = await Vendor.create({
    name: 'PE&DD Seafood',
    products: 'seafood'
  });

  const petalPlantsFlowers = await Vendor.create({
    name: 'PetAl Plants & Flowers',
    products: 'potted plants'
  });

  const phillipsFarms = await Vendor.create({
    name: 'Phillips Farms',
    products: 'vegetables, fruit, preserves'
  });

  const puraVidaFisheries = await Vendor.create({
    name: 'Pura Vida Fisheries',
    products: 'seafood'
  });

  const quartonFarm = await Vendor.create({
    name: 'Quarton Farm',
    products: 'vegetables, beans'
  });

  const quattrosGameFarm = await Vendor.create({
    name: `Quattro's Game Farm`,
    products: 'poultry, game, eggs'
  });

  const raceFarm = await Vendor.create({
    name: 'Race Farm',
    products: 'vegetable, fruit, related'
  });

  const rambleCreek = await Vendor.create({
    name: 'Ramble Creek',
    products: 'poultry, mushrooms'
  });

  const ravenBoar = await Vendor.create({
    name: 'Raven & Boar',
    products: 'sausage, dumplings'
  });

  const riseRootFarm = await Vendor.create({
    name: 'Rise & Root Farm',
    products: 'starter plants, vegetables'
  });

  const riverGarden = await Vendor.create({
    name: 'River Garden',
    products: 'flowers, dried flowers'
  });

  const riverineRanch = await Vendor.create({
    name: 'Riverine Ranch',
    products: 'water buffalo meat, dairy'
  });

  const roamingAcres = await Vendor.create({
    name: 'Roaming Acres',
    products: 'bison, ostrich, pork'
  });

  const ronnybrookFarm = await Vendor.create({
    name: 'Ronnybrook Farm',
    products: 'cow dairy'
  });

  const roseMeadowFarm = await Vendor.create({
    name: 'Rose Meadow Farm',
    products: 'flowers'
  });

  const rosehavenAlpacas = await Vendor.create({
    name: 'Rosehaven Alpacas',
    products: 'wool products, yarn'
  });

  const rowByRowFarm = await Vendor.create({
    name: 'Row By Row Farm',
    products: 'vegetables, eggs'
  });

  const roxburyMountainMaple = await Vendor.create({
    name: 'Roxbury Mountain Maple',
    products: 'maple syrup products'
  });

  const runnerStone = await Vendor.create({
    name: 'Runner & Stone',
    products: 'baked goods'
  });

  const ssoProduce = await Vendor.create({
    name: 'S&SO Produce',
    products: 'vegetables'
  });

  const samascottOrchards = await Vendor.create({
    name: 'Samascott Orchards',
    products: 'fruit, vegetables, fruit related, vegetable related'
  });

  const seatuckFishCompany = await Vendor.create({
    name: 'Seatuck Fish Company',
    products: 'seafood'
  });

  const shannonBrookFarm = await Vendor.create({
    name: 'Shannon Brook Farm',
    products: 'poultry, red meat, eggs'
  });

  const sheWolfBakery = await Vendor.create({
    name: 'She Wolf Bakery',
    products: 'bread'
  });

  const shushanValleyHydro = await Vendor.create({
    name: 'Shushan Valley Hydro',
    products: 'hydroponic, tomatoes, vegetables'
  });

  const silvaOrchids = await Vendor.create({
    name: 'Silva Orchids',
    products: 'orchids'
  });

  const stokesFarm = await Vendor.create({
    name: 'Stokes Farm',
    products: 'vegetables, plants'
  });

  const stonyMountainRanch = await Vendor.create({
    name: 'Stony Mountain Ranch',
    products: 'meat, chicken, pork, eggs'
  });

  const sunFedBeef = await Vendor.create({
    name: 'Sun Fed Beef',
    products: 'beef, rabbit, chicken'
  });

  const sycamoreFarms = await Vendor.create({
    name: 'Sycamore Farms',
    products: 'vegetables, fruit'
  });

  const tamarackHollowFarm = await Vendor.create({
    name: 'Tamarack Hollow Farm',
    products: 'vegetables, eggs'
  });

  const terhuneOrchards = await Vendor.create({
    name: 'Terhune Orchards',
    products: 'fruit, baked goods'
  });

  const toigoOrchards = await Vendor.create({
    name: 'Toigo Orchards',
    products: 'fruit, tomato, preserves'
  });

  const tonjesFarmDairy = await Vendor.create({
    name: 'Tonjes Farm Dairy',
    products: 'cows milk, cows dairy'
  });

  const transgenerationalFarm = await Vendor.create({
    name: 'Transgenerational Farm',
    products: 'herbs, vegetables, microgreens'
  });

  const treeliciousOrchard = await Vendor.create({
    name: 'Treelicious Orchard',
    products: 'fruit, baked goods'
  });

  const tremblayApiaries = await Vendor.create({
    name: 'Tremblay Apiaries',
    products: 'honey, candles, soap'
  });

  const troncillitoFarms = await Vendor.create({
    name: 'Troncillito Farms',
    products: 'fruit, cider'
  });

  const tweefonteinFarm = await Vendor.create({
    name: 'Tweefontein Farm',
    products: 'teas, herbs, tinctures'
  });

  const twoGuysFromWoodbridge = await Vendor.create({
    name: 'Two Guys From Woodbridge',
    products: 'hydroponic, vegetables'
  });

  const unionSquareGrassman = await Vendor.create({
    name: 'Union Square Grassman',
    products: 'wheatgrass, sprouts'
  });

  const valleyShepherd = await Vendor.create({
    name: 'Valley Shepherd',
    products: 'cheese, butter'
  });

  const vanHoutenFarms = await Vendor.create({
    name: 'Van Houten Farms',
    products: 'vegetables, plants, trees'
  });

  const violetHillFarm = await Vendor.create({
    name: 'Violet Hill Farm',
    products: 'meat, pork, eggs, herbs'
  });

  const wildcraftFarm = await Vendor.create({
    name: 'Wildcraft Farm',
    products: 'popcorn, popcorn kernels'
  });

  const wilklowOrchards = await Vendor.create({
    name: 'Wilklow Orchards',
    products: 'fruits, vegetables'
  });

  const willowWispOrganic = await Vendor.create({
    name: 'Willow Wisp Organic',
    products: 'vegetables, cut flowers'
  });

  const wildYarrow = await Vendor.create({
    name: 'Wild Yarrow',
    products: 'plant starts'
  });

  const windfallFarms = await Vendor.create({
    name: 'Windfall Farms',
    products: 'vegetables, eggs, syrup'
  });

  const woodHomesteadMaple = await Vendor.create({
    name: 'Wood Homestead Maple',
    products: 'maple products, eggs'
  });

  const yellowBellFarm = await Vendor.create({
    name: 'Yellow Bell Farm',
    products: 'chicken, eggs'
  });



  /* add produce seed data */
  const vegetableHerbs = await Category.create({
    name: 'Vegetables/Herbs'
  });

  const fruitOrchard = await Category.create({
    name: 'Fruit/Orchard'
  });

  const livestock = await Category.create({
    name: 'Livestock'
  });

  const plantsFlowers = await Category.create({
    name: 'Plants/Flowers'
  });

  const bakerGrains = await Category.create({
    name: 'Baker/Grains'
  });

  const fish = await Category.create({
    name: 'Fish'
  });

  const honey = await Category.create({
    name: 'Honey'
  });

  const dairyCheese = await Category.create({
    name: 'Dairy/Cheese'
  });

  const eggsPoultry = await Category.create({
    name: 'Eggs/Poultry'
  });

  const mushrooms = await Category.create({
    name: 'Mushrooms'
  });

  const alcohol = await Category.create({
    name: 'Wine/Beer/Spirits'
  });

  const mapleSyrup = await Category.create({
    name: 'Maple Syrup'
  });

  const jamsPicklesPreserves = await Category.create({
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
  await spirits.setCategory(alcohol);
  await alewife.setCategory(vegetableHerbs);
  await americanSeafood.setCategory(fish);
  await andrewsLocal.setCategory(honey);
  await anthonyRoad.setCategory(alcohol);
  await appleState.setCategory(honey);
  await ardithMae.setCategory(dairyCheese);
  await bakersBounty.setCategory(bakerGrains);
  await bearCreekFarm.setCategory(plantsFlowers);
  await berkshireBerries.setCategory(jamsPicklesPreserves);
  await bethsFarmKitchen.setCategory(jamsPicklesPreserves);
  await blueOysterCultivation.setCategory(mushrooms);
  await bobolinkDairyBakery.setCategory(dairyCheese);
  await bodySoulBakery.setCategory(bakerGrains);
  await borgheseVineyard.setCategory(alcohol);
  await breadAlone.setCategory(bakerGrains);
  await breezyHillOrchard.setCategory(fruitOrchard);
  await bulichMushrooms.setCategory(mushrooms);
  await campoRosso.setCategory(vegetableHerbs);
  await caradonnaFarm.setCategory(fruitOrchard);
  await catoCornerFarm.setCategory(dairyCheese);
  await catskillMerino.setCategory(livestock);
  await centralValleyDairy.setCategory(dairyCheese);
  await chateauRenaissance.setCategory(alcohol);
  await cherryLaneFarm.setCategory(vegetableHerbs);
  await citySaucery.setCategory(jamsPicklesPreserves);
  await considerBardwellFarm.setCategory(dairyCheese);
  await dattolicoOrganics.setCategory(vegetableHerbs);
  await deepMountainMaple.setCategory(mapleSyrup);
  await dipaolaTurkeyFarm.setCategory(eggsPoultry);
  await dutchmillGarden.setCategory(plantsFlowers);
  await eckertonHillFarm.setCategory(vegetableHerbs);
  await fantasticGardens.setCategory(plantsFlowers);
  await feistyAcresFarm.setCategory(eggsPoultry);
  await fledgingCrowFarm.setCategory(vegetableHerbs);
  await flyingPigsFarm.setCategory(livestock);
  await francescasBakery.setCategory(bakerGrains);
  await furnaceCreekFarm.setCategory(vegetableHerbs);
  await gailsFarm.setCategory(dairyCheese);
  await gopalFarm.setCategory(vegetableHerbs);
  await gorzynskiOrneryFarm.setCategory(vegetableHerbs);
  await grazinAngusAcres.setCategory(livestock);
  await grazinDistillery.setCategory(alcohol);
  await growNycGrainstand.setCategory(bakerGrains);
  await growNycGrainstandGuest.setCategory(alcohol);
  await hawthorneValleyFarm.setCategory(vegetableHerbs);
  await hickoryLedges.setCategory(alcohol);
  await hillrockEstateDistillery.setCategory(alcohol);
  await hoeffnerFarms.setCategory(vegetableHerbs);
  await holySchmitts.setCategory(jamsPicklesPreserves);
  await hudsonValleyColdPress.setCategory(jamsPicklesPreserves);
  await hudsonValleyDuck.setCategory(eggsPoultry);
  await hudsonValleyOrganics.setCategory(vegetableHerbs);
  await jamesDurrFlowers.setCategory(plantsFlowers);
  await josephinesFeast.setCategory(jamsPicklesPreserves);
  await keithsFarm.setCategory(vegetableHerbs);
  await kernanFarms.setCategory(vegetableHerbs);
  await kimcheeHarvest.setCategory(jamsPicklesPreserves);
  await knollKrestFarm.setCategory(eggsPoultry);
  await lanisFarm.setCategory(vegetableHerbs);
  await lasDelicias.setCategory(bakerGrains);
  await lavenderByTheBay.setCategory(plantsFlowers);
  await locustGroveFarm.setCategory(fruitOrchard);
  await lostBread.setCategory(bakerGrains);
  await lowlandFarm.setCategory(livestock);
  await luckyDogOrganics.setCategory(vegetableHerbs);
  await lunaFamilyFarm.setCategory(plantsFlowers);
  await lynnhavenGoatFarm.setCategory(dairyCheese);
  await maduraFarm.setCategory(vegetableHerbs);
  await martinsPretzels.setCategory(bakerGrains);
  await maxCreekHatchery.setCategory(fish);
  await migliorelliFarm.setCategory(vegetableHerbs);
  await millportDairy.setCategory(dairyCheese);
  await mountainSweetBerry.setCategory(vegetableHerbs);
  await moxieRidgeCreamery.setCategory(dairyCheese);
  await nemethBakery.setCategory(bakerGrains);
  await northshireFarms.setCategory(vegetableHerbs);
  await norwichMeadowsFarm.setCategory(vegetableHerbs);
  await newYorkCiderCo.setCategory(alcohol);
  await oakGrovePlantation.setCategory(vegetableHerbs);
  await offTheWheat.setCategory(bakerGrains);
  await orangeCountyDistillery.setCategory(alcohol);
  await oleMotherHubbert.setCategory(dairyCheese);
  await ourDailyBread.setCategory(bakerGrains);
  await paintedGoat.setCategory(dairyCheese);
  await paffenrothGarden.setCategory(vegetableHerbs);
  await peddSeafood.setCategory(fish);
  await petalPlantsFlowers.setCategory(plantsFlowers);
  await phillipsFarms.setCategory(vegetableHerbs);
  await puraVidaFisheries.setCategory(fish);
  await quartonFarm.setCategory(vegetableHerbs);
  await quattrosGameFarm.setCategory(eggsPoultry);
  await raceFarm.setCategory(vegetableHerbs);
  await rambleCreek.setCategory(eggsPoultry);
  await ravenBoar.setCategory(livestock);
  await riseRootFarm.setCategory(vegetableHerbs);
  await riverGarden.setCategory(plantsFlowers);
  await riverineRanch.setCategory(livestock);
  await roamingAcres.setCategory(eggsPoultry);
  await ronnybrookFarm.setCategory(dairyCheese);
  await roseMeadowFarm.setCategory(plantsFlowers);
  await rosehavenAlpacas.setCategory(livestock);
  await rowByRowFarm.setCategory(vegetableHerbs);
  await roxburyMountainMaple.setCategory(mapleSyrup);
  await runnerStone.setCategory(bakerGrains);
  await ssoProduce.setCategory(vegetableHerbs);
  await samascottOrchards.setCategory(fruitOrchard);
  await seatuckFishCompany.setCategory(fish);
  await shannonBrookFarm.setCategory(livestock);
  await sheWolfBakery.setCategory(bakerGrains);
  await shushanValleyHydro.setCategory(vegetableHerbs);
  await silvaOrchids.setCategory(plantsFlowers);
  await stokesFarm.setCategory(vegetableHerbs);
  await stonyMountainRanch.setCategory(livestock);
  await sunFedBeef.setCategory(livestock);
  await sycamoreFarms.setCategory(vegetableHerbs);
  await tamarackHollowFarm.setCategory(vegetableHerbs);
  await terhuneOrchards.setCategory(fruitOrchard);
  await toigoOrchards.setCategory(fruitOrchard);
  await tonjesFarmDairy.setCategory(dairyCheese);
  await transgenerationalFarm.setCategory(vegetableHerbs);
  await treeliciousOrchard.setCategory(fruitOrchard);
  await tremblayApiaries.setCategory(honey);
  await troncillitoFarms.setCategory(fruitOrchard);
  await tweefonteinFarm.setCategory(vegetableHerbs);
  await twoGuysFromWoodbridge.setCategory(vegetableHerbs);
  await unionSquareGrassman.setCategory(vegetableHerbs);
  await valleyShepherd.setCategory(dairyCheese);
  await vanHoutenFarms.setCategory(plantsFlowers);
  await violetHillFarm.setCategory(livestock);
  await wildcraftFarm.setCategory(vegetableHerbs);
  await wilklowOrchards.setCategory(fruitOrchard);
  await willowWispOrganic.setCategory(vegetableHerbs);
  await wildYarrow.setCategory(plantsFlowers);
  await windfallFarms.setCategory(vegetableHerbs);
  await woodHomesteadMaple.setCategory(mapleSyrup);
  await yellowBellFarm.setCategory(eggsPoultry);



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
  await breadAlone.addDays([monday, wednesday, friday, saturday]);
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
  await feistyAcresFarm.addDay(wednesday);
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
  await millportDairy.addDays([wednesday, friday, saturday]);
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
  await petalPlantsFlowers.addDays([wednesday, friday, saturday]);
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
  await ssoProduce.addDays([wednesday, saturday]);
  await samascottOrchards.addDay(friday);
  await seatuckFishCompany.addDay(saturday);
  await shannonBrookFarm.addDay(wednesday);
  await sheWolfBakery.addDays([monday, wednesday, friday]);
  await shushanValleyHydro.addDays([wednesday, saturday]);
  await silvaOrchids.addDays([wednesday, saturday]);
  await stokesFarm.addDays([wednesday, saturday]);
  await stonyMountainRanch.addDay(wednesday);
  await sunFedBeef.addDay(friday);
  await sycamoreFarms.addDays([wednesday, friday, saturday]);
  await tamarackHollowFarm.addDays([wednesday, saturday]);
  await terhuneOrchards.addDays([wednesday, saturday]);
  await toigoOrchards.addDay(friday);
  await tonjesFarmDairy.addDay(saturday);
  await transgenerationalFarm.addDay(wednesday);
  await treeliciousOrchard.addDay(friday);
  await tremblayApiaries.addDays([friday, saturday]);
  await troncillitoFarms.addDay(monday);
  await tweefonteinFarm.addDays([monday, friday, saturday]);
  await twoGuysFromWoodbridge.addDays([wednesday, friday, saturday]);
  await unionSquareGrassman.addDays([monday, wednesday, friday, saturday]);
  await valleyShepherd.addDay(saturday);
  await vanHoutenFarms.addDays([monday, wednesday, friday, saturday]);
  await violetHillFarm.addDay(saturday);
  await wildcraftFarm.addDays([monday, wednesday, friday, saturday]);
  await wilklowOrchards.addDay(monday);
  await willowWispOrganic.addDay(wednesday);
  await wildYarrow.addDays([wednesday, saturday]);
  await windfallFarms.addDays([wednesday, saturday]);
  await woodHomesteadMaple.addDay(saturday);
  await yellowBellFarm.addDay(wednesday);
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
