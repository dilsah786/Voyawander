import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateSingleProduct } from "../Redux/payment/action-creator";
import styles from "./HotelComponent.module.css";

const HotelComponent = ({
  hotel: { title, image, price, rating, location, city, category, reviewCount },
  group_size,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className={styles.hotel_component}>
      <div>
        <img src={image} alt={title} />
      </div>
      <h2>{title}</h2>
      <p>{location}</p>
      <div>
        <div>
          <p>Starts from</p>
          <h4>₹ {price} / night + taxes</h4>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            dispatch(
              updateSingleProduct({
                title: title,
                price_per_day: price,
                group_size: group_size,
                act_price: price,
                tour_length: 10,
                save_price: price - price,
              })
            );
            navigate("/payment");
          }}>
          Book Now
        </button>
      </div>
    </div>
  );
};
export default HotelComponent;
