import { useParams } from 'react-router-dom';

import RestaurantInfo from '../components/RestaurantInfo';
import ShimmerRestaurant from '../components/shimmers/ShimmerRestaurant';
import RestaurantMenu from '../components/RestaurantMenu';
import useRestaurantsMenu from '../hooks/useRestaurantsMenu';

const Restaurant = () => {
  const { id } = useParams();
  const { restaurant, isLoading } = useRestaurantsMenu(id);

  console.log("third ");
  console.log(restaurant?.data?.cards[4]);

  return (
    <div className='container-md my-8'>
      {isLoading ? (
        <ShimmerRestaurant />
      ) : (
        <>
          <RestaurantInfo info={restaurant?.data?.cards[2]?.card?.card.info} />
          <RestaurantMenu
            menu={
              restaurant?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
            }
          />
        </>
      )}
    </div>
  );
};
export default Restaurant;
