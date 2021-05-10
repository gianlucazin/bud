import React from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.button`
  display: flex;
  align-items: center;
  background-color: ${({ primary, theme }) =>
    primary ? theme.colors.blue : theme.colors.white};
  color: ${({ primary }) => (primary ? 'white' : 'black')};
  font-family: 'Roboto', sans-serif;
  padding: 1rem;
  margin-top: ${({ theme }) => theme.style.margin};
  margin-bottom: ${({ theme }) => theme.style.margin};
  width: 100%;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.06), 0 2px 2px rgba(0, 0, 0, 0.06),
    0 4px 4px rgba(0, 0, 0, 0.06), 0 8px 8px rgba(0, 0, 0, 0.06),
    0 16px 16px rgba(0, 0, 0, 0.06);

  & span {
    margin-left: 1rem;
    margin-right: 1.5rem;
  }
`;

const Button = ({ primary, onClickHandler, children }) => {
  const renderTag = () => {
    if (primary) {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="white"
        >
          <path d="M21.698 10.658l2.302 1.342-12.002 7-11.998-7 2.301-1.342 9.697 5.658 9.7-5.658zm-9.7 10.657l-9.697-5.658-2.301 1.343 11.998 7 12.002-7-2.302-1.342-9.7 5.657zm0-19l8.032 4.685-8.032 4.685-8.029-4.685 8.029-4.685zm0-2.315l-11.998 7 11.998 7 12.002-7-12.002-7z" />
        </svg>
      );
    } else {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M9.776 2l11.395 11.395-7.78 7.777-11.391-11.391v-7.781h7.776zm.829-2h-10.605v10.609l13.391 13.391 10.609-10.604-13.395-13.396zm-3.191 7.414c-.781.782-2.046.782-2.829.001-.781-.783-.781-2.048 0-2.829.782-.782 2.048-.781 2.829-.001.782.783.781 2.047 0 2.829z" />
        </svg>
      );
    }
  };

  return (
    <ButtonStyled primary={primary} onClick={() => onClickHandler()}>
      <span className="icon">{renderTag()}</span>
      {children}
    </ButtonStyled>
  );
};

export default Button;
