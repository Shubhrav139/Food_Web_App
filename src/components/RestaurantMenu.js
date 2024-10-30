import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState({});

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  const getRestaurantInfo = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5355161&lng=77.3910265&restaurantId=${id}`
    );
    const json = await data.json();
    setRestaurant(json?.data?.cards[2]?.card?.card?.info);
    console.log(json?.data?.cards[2]?.card?.card?.info);
  };

  return !Object.keys(restaurant).length ? (
    <Shimmer />
  ) : (
    <div>
      <h1>Restaurant id: {id}</h1>
      <h2>{restaurant?.name}</h2>
      <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId}></img>
      <h3>{restaurant?.areaName}</h3>
      <h3>{restaurant?.city}</h3>
      <h3>{restaurant?.avgRating}</h3>
      <h3>{restaurant?.costForTwoMessage}</h3>
    </div>
  );
};

export default RestaurantMenu;
