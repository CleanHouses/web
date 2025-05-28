import { IProduct } from "../interface";

export const PRODUCT_MOCK: IProduct[] = [
  {
    title: "apartmentsHouse",
    price: 300,
    isSoon: false,
    id: 1,
    category: "Apartments cleaning",
    images: {
      main: "https://www.mollymaid.com/us/en-us/_assets/images/service-header-images/mly-home-cleaning-header-desktop.webp",
    },
    tags: ["house", "cleaning"],
  },
  {
    title: "carpet",
    price: 300,
    isSoon: false,
    id: 2,
    category: "House cleaning",
    images: {
      main:  "https://i5.walmartimages.com/seo/TWINNIS-Boho-Area-Rug-Vintage-Tribal-Carpet-Anti-Slip-Rug-Washable-Persian-Carpet-for-Living-Room-Bedroom-Red-5-x8_0e728c9b-166c-4658-8254-5688e585936a.0764fae229334a747f1f531f18140ae3.jpeg",
    },

    tags: ["house", "cleaning"],
  },
  {
    title: "office",
    price: 300,
    isSoon: false,
    id: 3,
    category: "Office cleaning",
    images: {
      main:  "https://aztecjanitorial.com/wp-content/uploads/2022/05/Commercial-Cleaning-houston.jpg",
    },

    tags: ["house", "cleaning"],
  },
];

export const SOON = [
  {
    title: "roof",
    price: 150,
    isSoon: true,
    id: 4,
    category: "Cleaning the roof",
    images: {
      main: "https://airtasker-seo-assets-prod.s3.amazonaws.com/en_AU/1628496616932_roof-cleaning.jpg",
    },
    tags: ["roof", "cleaning", "house"],
    descriptions: "Soon",
  },
  {
    title: "A/C",
    price: 199,
    isSoon: true,
    id: 5,
    category: "Cleaning clothes ",
    images: {
      main: "https://s3-media0.fl.yelpcdn.com/bphoto/PIxftmwX47XwC0-3npe6Hw/1000s.jpg",
    },
    tags: ["clothes", "cleaning"],
    descriptions: "Soon",
  },
];
