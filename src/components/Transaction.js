import React from 'react';
import styled from 'styled-components';

import Shop from '../images/shop.svg';
import Bills from '../images/bills.svg';
import EatOut from '../images/eat-out.svg';
import Entertainment from '../images/entertainment.svg';
import Groceries from '../images/Groceries.svg';
import Income from '../images/Income.svg';
import Transport from '../images/transport.svg';

const TransactionStyled = styled.div`
  height: 4.5rem;
  display: grid;
  grid-template-columns: 1fr 3fr 10fr 5fr;
  align-items: center;
  border-bottom: 1px solid #222;
  color: ${({ theme }) => theme.colors.white};

  & img {
    fill: #fff;
  }

  & .date {
    font-weight: 200;
  }

  & .amount {
    font-weight: 500;
    text-align: right;
    margin-right: ${({ theme }) => theme.style.margin};
  }
  .subject {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media ${({ theme }) => theme.mediaQueries.below1000} {
    grid-template-columns: 2fr 3fr 10fr 5fr;
  }
`;

const renderedIcon = (category) => {
  switch (category) {
    case 'Shopping':
      return Shop;
    case 'Bills':
      return Bills;
    case 'Eating Out':
      return EatOut;
    case 'Entertainment':
      return Entertainment;
    case 'Groceries':
      return Groceries;
    case 'Transport':
      return Transport;
    case 'Shopping':
      return Shop;
    case 'Income':
      return Income;
    default:
      return null;
  }
};

const Transaction = ({ transaction }) => {
  const convertDate = (dateString) => {
    var p = dateString.split(/\D/g);
    return [p[2], p[1], p[0]].join('/');
  };

  return (
    <TransactionStyled data-testid="transaction">
      {/* <div className="category">{transaction.category_title}</div> */}
      <div className="category">
        <img
          src={renderedIcon(transaction.category_title)}
          alt={transaction.category_title + ' icon'}
        />
      </div>
      <p className="date">{convertDate(transaction.date)}</p>
      <p className="description">{transaction.description}</p>
      <p className="amount">{transaction.amount.value}</p>
    </TransactionStyled>
  );
};

export default Transaction;
