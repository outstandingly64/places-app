import React from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Angkor Wat",
    description:
      "Angkor Wat was built by the Khmer King Suryavarman II in the early 12th century in Yaśodharapura, the capital of the Khmer Empire, as his state temple and eventual mausoleum.",
    imageUrl:
      "https://imgs.search.brave.com/z2IZQu8rxfZRMZi6GNziv6OSRDszQL-vwrapC069utM/rs:fit:1200:802:1/g:ce/aHR0cHM6Ly9jZG4u/YXJzdGVjaG5pY2Eu/bmV0L3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDE4LzEwL2FuZ2tv/clRPUC5qcGc",
    address: "Krong Siem Reap, Cambodia",
    location: {
      lat: 13.4124693,
      lng: 103.864797,
    },
    creator: "u3",
  },
  {
    id: "p2",
    title: "Tenochtitlan",
    description:
      "The city was built on an island in what was then Lake Texcoco in the Valley of Mexico. The city was the capital of the expanding Aztec Empire in the 15th century until it was captured by the Spanish in 1521. At its peak, it was the largest city in the pre-Columbian Americas.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/El_templo_mayor_en_Tenochtitlan.png/800px-El_templo_mayor_en_Tenochtitlan.png",
    address:
      "Historic center of Mexico City, Centro, Mexico City, CDMX, Mexico",
    location: {
      lat: 19.4337383,
      lng: -99.1454316,
    },
    creator: "u1",
  },
  {
    id: "p3",
    title: "Alexandria",
    description:
      "Alexandria is a port city located on the Mediterranean Sea in northern Egypt founded in 331 BCE by Alexander the Great.",
    imageUrl:
      "https://m.economictimes.com/thumb/msid-68970748,width-1200,height-900,resizemode-4,imgsize-1607403/1.jpg",
    address:
      "Alexandria, Alexandria Governorate, Egypt",
    location: {
      lat: 31.2242387,
      lng: 29.884846,
    },
    creator: "u2",
  },
];

const UserPlaces = (props) => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);

  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
