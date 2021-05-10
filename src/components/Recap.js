import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  margin-top: ${({ theme }) => theme.style.margin};
  margin-bottom: ${({ theme }) => theme.style.margin};
  margin-right: ${({ theme }) => theme.style.margin};
  padding: ${({ theme }) => theme.style.margin};
  border-radius: ${({ theme }) => theme.style.corner};
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  & h1 {
    width: 40%;
  }
  & .label {
    color: #666;
    font-weight: 200;
    font-size: 1.4rem;
  }

  @media ${({ theme }) => theme.mediaQueries.below1000} {
    margin: ${({ theme }) => theme.style.margin};
    & h1 {
      width: 100%;
      margin-bottom: 1rem;
    }
  }
`;

const Recap = ({ accountInfo }) => {
  return (
    <Container>
      <h1>£ {accountInfo ? accountInfo.balance.amount : '-'}</h1>
      <div className="group">
        <p className="label">Account</p>
        <p className="value">
          {accountInfo ? accountInfo.provider.title : '-'}
        </p>
      </div>
      <div className="group">
        <p className="label">Account Number</p>
        <p className="value">
          {accountInfo ? accountInfo.provider.account_number : '-'}
        </p>
      </div>
      <div className="group">
        <p className="label">Sort Code</p>
        <p className="value">
          {accountInfo ? accountInfo.provider.sort_code : '-'}
        </p>
      </div>
      <div className="group">
        <p className="label">Description</p>
        <p className="value">
          {accountInfo ? accountInfo.provider.description : '-'}
        </p>
      </div>
    </Container>
  );
};

export default Recap;
