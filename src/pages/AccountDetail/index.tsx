import React from "react";
import { AppCard } from "../../components";
import "./index.scss";

export const AccountDetail = () => {
  return (
    <section>
      <AppCard>
        <div className="textCenter account">
          <h2>Cuenta fácil</h2>
          <h2>S/ 2,500</h2>
          <p className="available-balance">Saldo disponible</p>
        </div>
      </AppCard>
      <div className="account-detail">
        <h2>ÚLTIMOS MOVIMIENTOS</h2>
        <div className="account-detail__content">
          <p>23 agosto 2021</p>
          <div className="account-detail__content__movements">
            <span>Compra comerc..</span>
            <span>S/ -30</span>
          </div>
        </div>
        <div className="account-detail__content">
          <p>18 agosto 2021</p>
          <div className="account-detail__content__movements">
            <span>Compra comerc..</span>
            <span>S/ -30</span>
          </div>
          <div className="account-detail__content__movements">
            <span>Compra comerc..</span>
            <span>S/ -30</span>
          </div>
        </div>
        <div className="account-detail__content">
          <p>15 agosto 2021</p>
          <div className="account-detail__content__movements">
            <span>Compra comerc..</span>
            <span>S/ -30</span>
          </div>
        </div>
      </div>
    </section>
  );
};
