import * as categoryAPI from "./categoryService";

const quotes = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    title: "Terminator",
    category: { _id: "5b21ca3eeb7f6fbccd471818", name: "WoodCraft" },
    numberInStock: 6,
    dailyRentalRate: 2.5,
    publishDate: "2018-01-03T19:04:28.809Z",
    favorite: true
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    title: "Die Hard",
    category: { _id: "5b21ca3eeb7f6fbccd471818", name: "WoodCraft" },
    numberInStock: 5,
    dailyRentalRate: 2.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    title: "Get Out",
    category: { _id: "5b21ca3eeb7f6fbccd471820", name: "FiberCraft" },
    numberInStock: 8,
    dailyRentalRate: 3.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd471819",
    title: "Trip to Italy",
    category: { _id: "5b21ca3eeb7f6fbccd471814", name: "ThermaPlus" },
    numberInStock: 7,
    dailyRentalRate: 3.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181a",
    title: "Airplane",
    category: { _id: "5b21ca3eeb7f6fbccd471814", name: "ThermaPlus" },
    numberInStock: 7,
    dailyRentalRate: 3.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181b",
    title: "Wedding Crashers",
    category: { _id: "5b21ca3eeb7f6fbccd471814", name: "ThermaPlus" },
    numberInStock: 7,
    dailyRentalRate: 3.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181e",
    title: "Gone Girl",
    category: { _id: "5b21ca3eeb7f6fbccd471820", name: "FiberCraft" },
    numberInStock: 7,
    dailyRentalRate: 4.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181f",
    title: "The Sixth Sense",
    category: { _id: "5b21ca3eeb7f6fbccd471820", name: "FiberCraft" },
    numberInStock: 4,
    dailyRentalRate: 3.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd471821",
    title: "The Avengers",
    category: { _id: "5b21ca3eeb7f6fbccd471818", name: "WoodCraft" },
    numberInStock: 7,
    dailyRentalRate: 3.5
  }
];

export function getQuotes() {
  return quotes;
}

export function getQuote(id) {
  return quotes.find(m => m._id === id);
}

export function saveQuote(quote) {
  let quoteInDb = quotes.find(m => m._id === quote._id) || {};
  quoteInDb.name = quote.name;
  quoteInDb.category = categoryAPI.categories.find(
    g => g._id === quote.categoryId
  );
  quoteInDb.numberInStock = quote.numberInStock;
  quoteInDb.dailyRentalRate = quote.dailyRentalRate;

  if (!quoteInDb._id) {
    quoteInDb._id = Date.now();
    quotes.push(quoteInDb);
  }

  return quoteInDb;
}

// export function deleteQuote(id) {
//   let quoteInDb = quotes.find(m => m._id === id);
//  quotes.splice quotes.indexOf(quoteInDb), 1);
//   return quoteInDb;
// }
