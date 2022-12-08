import React, { FC, ReactNode } from "react";

interface HomeProps {}

export const Home: FC<HomeProps> = () => {
  return (
    <section>
      <div>
        <h1>Hola Renzo Bienvenido</h1>
      </div>
      <div>
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
      </div>
    </section>
  );
};
