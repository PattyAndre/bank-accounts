import React, { FC, ReactNode } from "react";
import { AppCard } from "../../components";
import "./index.scss";

interface HomeProps {}

export const Home: FC<HomeProps> = () => {
  return (
    <section>
      <AppCard>
        <h1 className="textCenter">
          Hola Renzo <br /> <p>Bienvenido!</p>
        </h1>
      </AppCard>
      <AppCard>
        <h2>CUENTAS</h2>
        <div>
          <div className="card-detail">
            <p className="card-detail__title">
              Cuenta fácil <br />
              <span className="card-detail__title__account-number">*3970</span>
            </p>
            <p className="card-detail__title__balance">
              1500 <br />
              <span>Saldo disponible</span>
            </p>
          </div>
          <div className="card-detail">
            <p className="card-detail__title">
              Cuenta fácil <br />
              <span className="card-detail__title__account-number">*3970</span>
            </p>
            <p className="card-detail__title__balance">
              1500 <br />
              <span>Saldo disponible</span>
            </p>
          </div>
        </div>
      </AppCard>
    </section>
  );
};
