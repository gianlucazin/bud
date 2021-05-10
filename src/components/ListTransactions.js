import React from 'react';
import styled from 'styled-components';

import Transaction from './Transaction';

const Container = styled.div`
  margin-bottom: ${({ theme }) => theme.style.margin};
  margin-right: ${({ theme }) => theme.style.margin};

  @media ${({ theme }) => theme.mediaQueries.below1000} {
    margin: ${({ theme }) => theme.style.margin};
  }
`;

const ListTransactions = ({ transactions }) => {
  // Sort transactions by date
  const sortedTransactions = transactions.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );
  const renderTransactions = sortedTransactions.map((transaction) => {
    return <Transaction key={transaction.id} transaction={transaction} />;
  });
  return <Container>{renderTransactions}</Container>;
};

export default ListTransactions;
