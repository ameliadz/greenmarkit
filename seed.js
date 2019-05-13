const { Vendor, Produce, Day, Schedule } = require('../models.js')

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
  await growNycGrainstandGuest.setProduce(alcohol)

  await spirits.addDays([friday, saturday]);
  await alewife.addDays([monday, friday]);
  await americanSeafood.addDay(wednesday);
  await andrewsLocal.addDays([wednesday, saturday]);
  await anthonyRoad.addDay(saturday);
  await appleState.addDay(monday);
  await ardithMae.addDay(saturday);
  await bakersBounty.addDay(wednesday);
  await bearCreekFarm.addDays(wednesday, friday, saturday);
  await berkshireBerries.addDays(monday, wednesday, saturday);
  await bethsFarmKitchen.addDays(wednesday, friday, saturday);
  await blueOysterCultivation.addDays(monday, saturday);
  await bobolinkDairyBakery.addDay(friday);
  await bodySoulBakery.addDays(monday, wednesday, friday, saturday);
  await borgheseVineyard.addDay(friday);
  await breadAlone.addDays(monday,wednesday, friday, saturday);
  await breezyHillOrchard.addDays(wednesday, friday);
  await bulichMushrooms.addDays(wednesday, saturday);
  await campoRosso.addDay(friday);
  await caradonnaFarm.addDays(friday, saturday);
  await catoCornerFarm.addDay(saturday);
  await catskillMerino.addDay(saturday);
  await centralValleyDairy.addDays(monday, friday);
  await chateauRenaissance.addDay(saturday);
  await cherryLaneFarm.addDays(wednesday, saturday);
  await citySaucery.addDays(wednesday, friday, saturday);
  await considerBardwellFarm.addDays(monday, wednesday, friday);
  await dattolicoOrganics.addDay(saturday);
  await deepMountainMaple.addDays(friday, saturday);
  await dipaolaTurkeyFarm.addDays(wednesday, friday);
  await dutchmillGarden.addDays(monday, wednesday);
  await eckertonHillFarm.addDays(wednesday, saturday);
  await fantasticGardens.addDays(wednesday, friday, saturday);
  await fiestyAcresFarm.addDay(wednesday);
  await fledgingCrowFarm.addDay(wednesday);
  await flyingPigsFarm.addDays(friday, saturday);
  await francescasBakery.addDay(friday);
  await furnaceCreekFarm.addDays(wednesday, friday);
  await gailsFarm.addDays(monday, wednesday, saturday);
  await gopalFarm.addDay(friday);
  await gorzynskiOrneryFarm.addDay(saturday);
  await grazinAngusAcres.addDay(saturday);
  await grazinDistillery.addDay(saturday);
  await growNycGrainstand.addDays(wednesday, saturday);
  await growNycGrainstandGuest.addDays(wednesday, saturday);
  

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
