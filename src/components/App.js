import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Sidebar from './Sidebar';
import Recap from './Recap';
import ListTransactions from './ListTransactions';

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.black};
  width: 100vw;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 30rem auto;
  grid-template-rows: min-content auto;
  @media ${({ theme }) => theme.mediaQueries.below1000} {
    grid-template-columns: auto;
  }
`;

const App = () => {
  const [accountInfo, setAccountInfo] = useState();
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch('http://www.mocky.io/v2/5c62e7c33000004a00019b05')
      .then((response) => response.json())
      .then((data) => {
        setTransactions(data.transactions);
        setAccountInfo(data);
      });
  }, []);

  const onClickTenHandler = () => {
    const transactions = accountInfo.transactions;
    // Take only first 10 smallest expenses
    const filteredTransactions = transactions
      .filter((transaction) => transaction.amount.value < 0)
      .sort((a, b) => (a.amount.value > b.amount.value ? -1 : 1))
      .slice(0, 10);
    setTransactions(filteredTransactions);
  };
  const onClickPrimaryHandler = () => {
    setTransactions(accountInfo.transactions);
  };

  return (
    <Container>
      <Sidebar
        onClickTenHandler={onClickTenHandler}
        onClickPrimaryHandler={onClickPrimaryHandler}
      />
      <Recap accountInfo={accountInfo} />
      <ListTransactions transactions={transactions} />
    </Container>
  );
};

export default App;
