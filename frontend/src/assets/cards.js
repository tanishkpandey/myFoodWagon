import Sale1 from "../assets/Sale1.png";
import Sale2 from "../assets/Sale2.png";
import Sale3 from "../assets/Sale3.png";
import Sale4 from "../assets/Sale4.png";

const foodData = [
  {
    image: Sale1,
    discount: getRandomNumber(1, 50),
    itemName: "Fresh Salad",
    daysRemaining: getRandomNumber(1, 10),
    location: getRandomLocation(),
  },
  {
    image: Sale2,
    discount: getRandomNumber(1, 50),
    itemName: "Tomato Pasta",
    daysRemaining: getRandomNumber(1, 10),
    location: getRandomLocation(),
  },
  {
    image: Sale3,
    discount: getRandomNumber(1, 50),
    itemName: "Chicken Curry",
    daysRemaining: getRandomNumber(1, 10),
    location: getRandomLocation(),
  },
  {
    image: Sale4,
    discount: getRandomNumber(1, 50),
    itemName: "Dal Makhani",
    daysRemaining: getRandomNumber(1, 10),
    location: getRandomLocation(),
  },
  {
    image: Sale1,
    discount: getRandomNumber(1, 50),
    itemName: "Butter Chicken",
    daysRemaining: getRandomNumber(1, 10),
    location: getRandomLocation(),
  },
  {
    image: Sale2,
    discount: getRandomNumber(1, 50),
    itemName: "Paneer Tikka",
    daysRemaining: getRandomNumber(1, 10),
    location: getRandomLocation(),
  },
  {
    image: Sale3,
    discount: getRandomNumber(1, 50),
    itemName: "Chicken Biryani",
    daysRemaining: getRandomNumber(1, 10),
    location: getRandomLocation(),
  },
  {
    image: Sale4,
    discount: getRandomNumber(1, 50),
    itemName: "Samosa",
    daysRemaining: getRandomNumber(1, 10),
    location: getRandomLocation(),
  }
];

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomLocation() {
  const locations = ["Delhi", "Mumbai", "Bangalore", "Kolkata", "Chennai"];
  return locations[Math.floor(Math.random() * locations.length)];
}

export default foodData;
