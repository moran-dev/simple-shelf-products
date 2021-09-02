import { useState, useEffect } from "react";
import products from "./info-products";
import WishListFalse from "./wish-list";
import WishListTrue from "./wish-list-true";
import Check from "./check";

type Props = {
  id: number;
  name: string;
  available: boolean;
  listPrice: number;
  sellingPrice: number;
  numberOfInstallments: number;
  installmentsValue: number;
  hasInterestRate: boolean;
  imageUrl: string;
};

const CardsInfo = (props: Props) => {
  const [buttonState, setButtonState] = useState(false);
  const [newButtonState, setNewButtonState] = useState(false);
  const [wishListState, setWishListState] = useState(false);
  const [wishListStateV2, setWishListStateV2] = useState(false);

  const handleSubmitAdd = () => {
    setButtonState(!buttonState);
  };
  const handleSubmitWish = () => {
    setWishListState(!wishListState);
  };

  useEffect(() => {
    if (products.length) {
      if (buttonState === false) {
        const customButtonStateFalse = (
          <button className="add-to-cart" onClick={handleSubmitAdd}>
            Adicionar
          </button>
        );
        setNewButtonState(Object(customButtonStateFalse));
      }
      if (buttonState === true) {
        const customButtonStateTrue = (
          <button className="add-to-cart-true" onClick={handleSubmitAdd}>
            <Check />
            Adicionado
          </button>
        );
        setNewButtonState(Object(customButtonStateTrue));
      }
      if (wishListState === false) {
        const customWishFalse = (
            <button className="wish-list-button" onClick={handleSubmitWish}>
              <WishListFalse />
            </button>
        );
        setWishListStateV2(Object(customWishFalse));
      }
      if (wishListState === true) {
        const customWishTrue = (
            <button className="wish-list-button-true" onClick={handleSubmitWish}>
              <WishListTrue />
            </button>
        );
        setWishListStateV2(Object(customWishTrue));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [buttonState, wishListState]);

  return (
    <>
      <div className="container-all-cards">
        {products.length !== 0
          ? products.map((info) => (
              <div className="card-container">
                <>
                  {wishListStateV2}
                </>
                <img
                  alt="info"
                  src={info.imageUrl}
                  width="240"
                  height="240"
                ></img>
                <span className="product-name">{info.name}</span>
                <div className="price-content">
                  <span className="list-price">
                    {info.listPrice.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </span>
                  <span className="selling-price">
                    {info.sellingPrice.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </span>
                  <span className="installments-info">
                    Em até
                    <span className="installments-price">
                      {info.numberOfInstallments}x de{" "}
                      {info.installmentsValue.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </span>
                    sem juros
                  </span>
                </div>
                <>{newButtonState}</>
              </div>
            ))
          : null}
      </div>
    </>
  );
};

export default CardsInfo;
