import React, { FC, ReactNode } from "react";
import { AppCard } from "../../components";
import logo from "../../assets/test.png";

interface HomeProps {}

export const Home: FC<HomeProps> = () => {
  return (
    <section>
      <AppCard>
        <h1>Hola Renzo Bienvenido</h1>
      </AppCard>
      <AppCard>
        <h2>CUENTAS</h2>
        <div>
          <div>
            <span>Cuenta fácil</span>
            <span>1500</span>
            <span>Saldo disponible</span>
          </div>
          <div>
            <span>Cuenta fácil</span>
            <span>4500</span>
            <span>Saldo disponible</span>
          </div>
        </div>
      </AppCard>
    </section>
  );
};
