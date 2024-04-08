import image1 from "../assets/images/hotel-image-1.png";
import image2 from "../assets/images/hotel-image-2.png";
import image3 from "../assets/images/hotel-image-3.png";

export interface TravelData {
  title: string;
  location: string;
  departingFrom: string;
  rating: number;
  adults?: number;
  children?: number;
  infants?: number;
  date: string;
  length: number;
  price: number;
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
    length: 7,
    price: 1136.5,
    overview: `The Iberostar Grand Salome has an exceptional location in the south of Tenerife, overlooking the Atlantic Ocean. It is situated between the Golf del Sur and the Amarillo Golf courses, and is an ideal hotel for families, couples and groups who are looking for a holiday full of sport, sun and sea.`,
    image: image1,
  },
  {
    title: "Aguamarina Golf Hotel",
    location: "Costa Adeje, Tenerife",
    departingFrom: "Liverpool",
    rating: 4,
    adults: 2,
    children: 1,
    date: "27th May 2019",
    length: 7,
    price: 696.8,
    overview: `The Iberostar Grand Salome has an exceptional location in the south of Tenerife, overlooking the Atlantic Ocean. It is situated between the Golf del Sur and the Amarillo Golf courses, and is an ideal hotel for families, couples and groups who are looking for a holiday full of sport, sun and sea.`,
    image: image2,
  },
  {
    title: "Las Piramides Resort",
    location: "Costa Adeje, Tenerife",
    departingFrom: "Liverpool",
    rating: 3,
    adults: 2,
    children: 2,
    date: "3rd July 2019",
    length: 7,
    price: 499.99,
    overview: `The Iberostar Grand Salome has an exceptional location in the south of Tenerife, overlooking the Atlantic Ocean. It is situated between the Golf del Sur and the Amarillo Golf courses, and is an ideal hotel for families, couples and groups who are looking for a holiday full of sport, sun and sea.`,
    image: image3,
  },
];

//come back to turn price into a number and use the moments package in the view
