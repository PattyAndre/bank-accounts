import React, { FC, ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppCard } from "../../components";
import "./index.scss";

type AccountType = "CREDIT_CARD" | "ACCOUNT";
type AccountStatus = "ACTIVE" | "INACTIVE";

export interface Account {
  id: number;
  balance: number;
  creditline: string | number;
  name: string;
  status: AccountStatus;
  type: AccountType;
}

const AccountPage = () => {
  const navigate = useNavigate();

  const [accounts, setAccounts] = useState<Account[]>([]);
  const [cards, setCards] = useState<Account[]>([]);

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
        setAccounts(data.filter((item: Account) => item.type === "ACCOUNT"));
        setCards(data.filter((item: Account) => item.type === "CREDIT_CARD"));
      });
  };

  const handleItemClick = (id: number) => {
    navigate(`/accounts/${id}`);
  };

  return (
    <section>
      <AppCard>
        <h1 className="text-center">
          Hola Renzo <br /> <p>Bienvenido!</p>
        </h1>
      </AppCard>
      <AppCard>
        <div>
          <h2>CUENTAS</h2>
          {accounts.map((account) => (
            <div
              className="card-detail"
              key={account.id}
              onClick={() => handleItemClick(account.id)}
            >
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
          {cards.map((card) => (
            <div
              className="card-detail"
              key={card.id}
              onClick={() => handleItemClick(card.id)}
            >
              <p className="card-detail__title">
                {card.name} <br />
                {/* Use the ID as account number */}
                <span className="card-detail__title__account-number">
                  *{card.id}
                </span>
              </p>
              <p className="card-detail__title__balance">
                S/ {card.creditline} <br />
                <span>{card.creditline !== "" && "Línea de crédito"}</span>
              </p>
            </div>
          ))}
        </div>
      </AppCard>
    </section>
  );
};

export default AccountPage;
