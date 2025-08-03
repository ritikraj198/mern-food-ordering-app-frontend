import {
  useCreateMyRestaurant,
  useGetMyRestaurant,
  useUpdateMyRestaurant,
} from "@/api/MyRestaurantApi";
import ManageRestaurantForm from "@/forms/manage-restaurant-form/ManageRestaurantForm";

const ManageRestaurantPage = () => {
  const { createRestaurant, isLoading: isCreateLoading } =
    useCreateMyRestaurant();
  const { restaurant } = useGetMyRestaurant();
  const { updateRestaurant, isLoading: isUpdateLoading } =
    useUpdateMyRestaurant();

  const isEditing = !!restaurant; //This is a double negation trick to convert any value into a boolean, if restaurant exist then return true else return false

  return (
    <ManageRestaurantForm
      isLoading={isCreateLoading || isUpdateLoading}
      restaurant={restaurant}
      onSave={isEditing ? updateRestaurant : createRestaurant}
    />
  );
};

export default ManageRestaurantPage;
