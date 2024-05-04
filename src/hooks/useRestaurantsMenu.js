import axios from 'axios';
import { useEffect, useState } from 'react';
import { GET_RESTAURANTS_URL } from '../utils/constants';

const useRestaurantsMenu = (restId) => {
  const [restaurant, setRestaurant] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  // console.log("hello")

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const res = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.49674162111705&lng=76.6015943271671&restaurantId=${restId}&catalog_qa=undefined&submitAction=ENTER`)
        const data = await res.json() ;
        //  console.log("l akdsjf asld;kfj asdlfkj ");
        // console.log("not "+data?.data.cards);
        setRestaurant(data);
      } catch (err) {
        console.log(err.response);
        setError(err.response);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  console.log("second"+JSON.stringify(restaurant));
  return { restaurant, isLoading, error };
};

export default useRestaurantsMenu;
