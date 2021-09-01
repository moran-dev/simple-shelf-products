import React from "react";
import products from "./info-products";

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
  console.log("products", products);

  const sellingPriceValues = products.map((item) => item.sellingPrice);
  console.log("info", sellingPriceValues);

  return (
    <>
      <div className="container-all-cards">
        {products.length !== 0
          ? products.map((info) => (
              <div className="card-container">
                <img
                  alt="info"
                  src={info.imageUrl}
                  width="240"
                  height="240"
                ></img>
                <span>{info.name}</span>
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
                <button>Adicionar</button>
              </div>
            ))
          : null}
      </div>
    </>
  );
};

export default CardsInfo;
