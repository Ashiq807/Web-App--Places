import React from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Building",
    dscription: "One of the most famous sky scrapers in the world!",
    imageUrl:
      "https://tse4.mm.bing.net/th?id=OIP.O0s0S3jT3QkBv7LRV408KAHaJ4&pid=Api&P=0&h=220",
    address: "20 W 34th St., New York, NY 10001, United States",
    location: {
      lat: 40.7484445,
      lng: -73.9882393,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Empire State Building 2",
    dscription: "One of the most famous sky scrapers in the world!",
    imageUrl:
      "https://tse4.mm.bing.net/th?id=OIP.O0s0S3jT3QkBv7LRV408KAHaJ4&pid=Api&P=0&h=220",
    address: "20 W 34th St., New York, NY 10001, United States",
    location: {
      lat: 10.3114685,
      lng: 76.3343774,
    },
    creator: "u2",
  },
];

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
