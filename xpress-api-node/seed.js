const { Genre } = require("./models/genre");
const { Quote } = require("./models/quote");
const mongoose = require("mongoose");
const config = require("config");

const data = [
  {
    name: "ThermaPlus",
    movies: [
      { title: "TP738482", numberInStock: 5, productAggCost: 27461 },
      { title: "TP92746", numberInStock: 10, productAggCost: 22555 },
      { title: "TP2864", numberInStock: 15, productAggCost: 22464 }
    ]
  },
  {
    name: "WoodCraft",
    movies: [
      { title: "PD8653", numberInStock: 5, productAggCost: 1863 },
      { title: "LD6493", numberInStock: 10, productAggCost: 7342 },
      { title: "PD92564", numberInStock: 15, productAggCost: 2266 }
    ]
  },
  {
    name: "ThermaPremium",
    movies: [
      { title: "TPP8254", numberInStock: 5, productAggCost: 3845 },
      { title: "TPP9696", numberInStock: 10, productAggCost: 2956 },
      { title: "TPP4986285", numberInStock: 15, productAggCost: 2654 }
    ]
  },
  {
    name: "FiberCraft",
    movies: [
      { title: "MSR9865", numberInStock: 5, productAggCost: 8246 },
      { title: "PLK93856", numberInStock: 10, productAggCost: 28576 },
      { title: "FD9652", numberInStock: 15, productAggCost: 27845 }
    ]
  }
];

async function seed() {
  await mongoose.connect(config.get("db"));

  await Quote.deleteMany({});
  await Genre.deleteMany({});

  for (let genre of data) {
    const { _id: genreId } = await new Genre({ name: genre.name }).save();
    const movies = genre.quotes.map(quote => ({
      ...quote,
      genre: { _id: genreId, name: genre.name }
    }));
    await Quote.insertMany(quotes);
  }

  mongoose.disconnect();

  console.info("Done!");
}

seed();
