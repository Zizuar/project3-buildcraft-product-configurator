import * as categoryAPI from "./categoryService";

const quotes = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    title: "Knotty Alder 3/4-lt. Ocean-Privacy",
    category: { _id: "5b21ca3eeb7f6fbccd471818", name: "WoodCraft" },
    numberInStock: 6,
    productAggCost: 27461,
    publishDate: "2018-01-03T19:04:28.809Z",
    favorite: true
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    title: "Legacy Mahogany Full Lt. Tejas",
    category: { _id: "5b21ca3eeb7f6fbccd471818", name: "WoodCraft" },
    numberInStock: 5,
    productAggCost: 22555
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    title: "KA-Grain 2-panel Florence Speakeasy",
    category: { _id: "5b21ca3eeb7f6fbccd471820", name: "FiberCraft" },
    numberInStock: 8,
    productAggCost: 22464
  },
  {
    _id: "5b21ca3eeb7f6fbccd471819",
    title: "TP-Solid Madrid Speakeasy SatinBlack",
    category: { _id: "5b21ca3eeb7f6fbccd471814", name: "ThermaPlus" },
    numberInStock: 7,
    productAggCost: 1863
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181a",
    title: "TP-Full Lt. Florence ORB-Satin",
    category: { _id: "5b21ca3eeb7f6fbccd471814", name: "ThermaPlus" },
    numberInStock: 7,
    productAggCost: 7342
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181b",
    title: "TP-3/4lt. Charelston SatinGrey",
    category: { _id: "5b21ca3eeb7f6fbccd471814", name: "ThermaPlus" },
    numberInStock: 7,
    productAggCost: 2266
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181e",
    title: "Amer. Blk Walnut Full-lt. Tejas",
    category: { _id: "5b21ca3eeb7f6fbccd471820", name: "FiberCraft" },
    numberInStock: 7,
    productAggCost: 3845
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181f",
    title: "Cherry-Grain 1/2-lt Charelston WI",
    category: { _id: "5b21ca3eeb7f6fbccd471820", name: "FiberCraft" },
    numberInStock: 4,
    productAggCost: 2956
  },
  {
    _id: "5b21ca3eeb7f6fbccd471821",
    title: "Portobello 3/4-lt Marsala",
    category: { _id: "5b21ca3eeb7f6fbccd471818", name: "WoodCraft" },
    numberInStock: 7,
    productAggCost: 2654
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
  quoteInDb.productAggCost = quote.productAggCost;

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
