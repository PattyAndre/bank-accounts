import React, { FC, ReactNode, useEffect, useState } from "react";
import { AppCard } from "../../components";
// import { GetAccounts } from "../../service/accounts";
import "./index.scss";

interface AccountProps {
  id: number;
  balance: number;
  creditline: string | number | "";
  name: string;
  status: string;
  type: string;
}

export const Home = () => {
  const [accounts, setAccounts] = useState([]);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    (async () => {
      await getAccounts();
    })();
  }, []);

  const getAccounts = async () => {
    fetch(
      "https://my-json-server.typicode.com/racordovaindracompany/accounts/accounts"
    )
      .then((response) => response.json())
      .then((data) => {
        setAccounts(data.filter((item: any) => item.type === "ACCOUNT"));
        setCards(data.filter((item: any) => item.type === "CREDIT_CARD"));
      });
  };

  return (
    <section>
      <AppCard>
        <h1 className="textCenter">
          Hola Renzo <br /> <p>Bienvenido!</p>
        </h1>
      </AppCard>
      <AppCard>
        <div>
          <h2>CUENTAS</h2>
          {accounts.map((account: AccountProps) => (
            <div className="card-detail" key={account.id}>
              <p className="card-detail__title">
                {account.name} <br />
                {/* Use the ID as account number */}
                <span className="card-detail__title__account-number">
                  *{account.id}
                </span>
              </p>
              <p className="card-detail__title__balance">
                S/ {account.balance} <br />
                <span>{account.creditline === "" && "Saldo disponible"}</span>
              </p>
            </div>
          ))}
        </div>
      </AppCard>
      <AppCard>
        <div>
          <h2>TARJETAS</h2>
          {cards.map((card: AccountProps) => (
            <div className="card-detail" key={card.id}>
              <p className="card-detail__title">
                {card.name} <br />
                {/* Use the ID as account number */}
                <span className="card-detail__title__account-number">
                  *{card.id}
                </span>
              </p>
              <p className="card-detail__title__balance">
                S/ {card.balance} <br />
                <span>{card.creditline !== "" && "Línea de crédito"}</span>
              </p>
            </div>
          ))}
        </div>
      </AppCard>
    </section>
  );
};
