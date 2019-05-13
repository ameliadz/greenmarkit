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

  await spirits.addDays([friday, saturday]);
  await alewife.addDays([monday, friday]);
  await americanSeafood.addDay(wednesday);
  await andrewsLocal.addDays([wednesday, saturday]);
  await anthonyRoad.addDay(saturday);
  await appleState.addDay(monday);
  await ardithMae.addDay(saturday);

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
