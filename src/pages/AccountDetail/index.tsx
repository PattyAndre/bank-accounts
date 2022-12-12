import React, { FC, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppCard } from "../../components";
import "./index.scss";

interface Transaction {
  id: number;
  date: string;
  name: string;
  amount: number;
}
interface IAccountDetail {
  id: number;
  name: string;
  availableBalance: string;
  latest_transactions: { date: string; transactions: Transaction[] }[];
}

const ACCOUNT_DETAIL_MOCK: IAccountDetail = {
  id: 1,
  name: "Cuenta fácil",
  availableBalance: "2,500",
  latest_transactions: [
    {
      date: "23 agosto 2021",
      transactions: [
        {
          id: 4,
          date: "23 agosto 2021",
          name: "Compra comerc...",
          amount: -30,
        },
      ],
    },
    {
      date: "18 agosto 2021",
      transactions: [
        {
          id: 3,
          date: "18 agosto 2021",
          name: "Deposito 0001...",
          amount: 20,
        },
        {
          id: 2,
          date: "18 agosto 2021",
          name: "Deposito 0002...",
          amount: 50,
        },
      ],
    },
    {
      date: "29 junio 2021",
      transactions: [
        {
          id: 1,
          date: "29 junio 2021",
          name: "Pago de servic...",
          amount: -70,
        },
      ],
    },
  ],
};
const AccountDetailPage: FC = () => {
  const navigate = useNavigate();

  const { accountId } = useParams();

  const [details, setDetails] = useState<IAccountDetail | undefined>(undefined);

  useEffect(() => {
    if (accountId) {
      (async () => {
        getAccountDetail(Number(accountId)).then((accountDetail) =>
          setDetails(accountDetail)
        );
      })();
    }
  }, []);

  const getAccountDetail = async (id: number): Promise<IAccountDetail> => {
    return ACCOUNT_DETAIL_MOCK;
  };

  return (
    <section>
      <div className="header">
        <button className="close-btn" onClick={() => navigate("/")}>
          x
        </button>
      </div>
      <AppCard>
        <div className="text-center account">
          <h2>{details?.name}</h2>
          <h2>S/ {details?.availableBalance}</h2>
          <p className="available-balance">Saldo disponible</p>
        </div>
      </AppCard>
      <div className="account-detail">
        <h2>ÚLTIMOS MOVIMIENTOS</h2>
        {details?.latest_transactions.map((item, itemIndex) => (
          <div key={item.date} className="account-detail__content">
            <p>{item.date}</p>
            {item.transactions.map((transaction, transactionIndex) => (
              <div
                key={transaction.id}
                className="account-detail__content__movements"
                style={{
                  borderBottom:
                    itemIndex === details.latest_transactions.length - 1 &&
                    transactionIndex === item.transactions.length - 1
                      ? "none"
                      : undefined,
                }}
              >
                <span>{transaction.name}</span>
                <span>S/ {transaction.amount}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
      <p className="see-more">Ver todos</p>
    </section>
  );
};

export default AccountDetailPage;
