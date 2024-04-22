import axios from "axios";
import { END_POINTS } from "../endPoints";
import Cookies from "js-cookie";
import Notification from "../notification/Notification";
import { useDispatch } from "react-redux";
import { messageOk } from "../../redux/features/NotificationSlice";

function CartItem({
  title,
  price,
  quantity,
  stock,
  id,
  setDeleteButton,
  url,
  status,
}) {
  const dispatch = useDispatch();

  const removeProduct = async () => {
    const TokenCookie = Cookies.get("coderCookieToken");
    console.log("dentre");
    try {
      const response = await axios.delete(
        `${END_POINTS.URL()}/api/carts/products/${id}`,

        {
          withCredentials: true,
          headers: {
            Authorization: `coderCookieToken=${TokenCookie}`,
          },
        }
      );

      console.log(response.data);
      setDeleteButton(true);
      dispatch(messageOk("se elimino el producto del carrito"));
      window.scrollTo(0, 0);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section className="cart__card flexrow">
        <div className="cart__card--product ccp flexcolum">
          <div className="ccp__img">
            <img src={url} alt={title} title={title} />
          </div>
          {/* <p className="ccp__info">
            SAVE
            <strong>$199.00</strong>
          </p> */}
        </div>

        <div className="cart__card--remove" onClick={removeProduct}>
          <i className="ri-close-line "></i>
        </div>

        <div className="cart__card--info cci flexcolum">
          <p>
            {title} X <span>{quantity}</span>
          </p>
          <span>${price} X unid.</span>
          {/* <div>
            <span>
              <button>-</button>
             
              <button>+</button>
            </span>
          </div> */}
          <div className="flexrow">
            <span
              className={`sps2__shipping  cci__shipping ${
                status ? "freeShipping" : "nofreeShipping"
              } `}
            >
              {status ? "disponible" : "no disponible"}
            </span>
          </div>
          <span className="inStock">
            {stock != 0 && status ? (
              <>
                <i className="ri-check-line"></i>
                in stock : {stock}
              </>
            ) : (
              <>
                <i className="ri-close-line noStock"></i>
                no stock : {stock}
              </>
            )}
          </span>
        </div>
      </section>
    </>
  );
}

export default CartItem;
