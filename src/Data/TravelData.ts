export interface TravelData {
  title: string;
  location: string;
  departingFrom: string;
  rating?: number;
  adults?: number;
  children?: number;
  infants?: number;
  date: string;
  length: string;
  price: string;
  overview: string;
  image?: any;
}

export const travelData: TravelData[] = [
  {
    title: "Iberostar Grand Salome",
    location: "Costa Adeje, Tenerife",
    departingFrom: "East Midlands",
    rating: 5,
    adults: 2,
    children: 2,
    infants: 1,
    date: "3rd July 2019",
    length: "7 days",
    price: "£1,136.50",
    overview: `The Iberostar Grand Salome has an exceptional location in the south of Tenerife, overlooking the Atlantic Ocean. It is situated between the Golf del Sur and the Amarillo Golf courses, and is an ideal hotel for families, couples and groups who are looking for a holiday full of sport, sun and sea.`,
  },
  {
    title: "Aguamarina Golf Hotel",
    location: "Costa Adeje, Tenerife",
    departingFrom: "Liverpool",
    rating: 4,
    adults: 2,
    children: 1,
    date: "27th May 2019",
    length: "7 days",
    price: "696.80",
    overview: `The Iberostar Grand Salome has an exceptional location in the south of Tenerife, overlooking the Atlantic Ocean. It is situated between the Golf del Sur and the Amarillo Golf courses, and is an ideal hotel for families, couples and groups who are looking for a holiday full of sport, sun and sea.`,
  },
  {
    title: "Las Piramides Resort",
    location: "Costa Adeje, Tenerife",
    departingFrom: "Liverpool",
    rating: 4,
    adults: 2,
    children: 2,
    date: "3rd July 2019",
    length: "7 days",
    price: "499.99",
    overview: `The Iberostar Grand Salome has an exceptional location in the south of Tenerife, overlooking the Atlantic Ocean. It is situated between the Golf del Sur and the Amarillo Golf courses, and is an ideal hotel for families, couples and groups who are looking for a holiday full of sport, sun and sea.`,
  },
];

//come back to turn price into a number and use the moments package in the view
