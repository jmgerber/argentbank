import styled from 'styled-components'

function Account({name, amount, amountDescription}) {
  return (
    <AccountContainer>
      <div className="account-content-wrapper">
        <h3 className="account-title">{name}</h3>
        <p className="account-amount">{amount}</p>
        <p className="account-amount-description">{amountDescription}</p>
      </div>
      <div className="account-content-wrapper cta">
        <button className="transaction-button">View transactions</button>
      </div>
    </AccountContainer>
  )
}

export default Account

/////  Style  /////

const AccountContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #000;
  background-color: #fff;
  width: 80%;
  margin: 0 auto;
  padding: 1.5rem;
  box-sizing: border-box;
  text-align: left;
  margin-bottom: 2rem;

  & .account-content-wrapper {
    width: 100%;
    flex: 1;

    & .account-title {
      padding: 0;
      font-size: 1rem;
      font-weight: normal;
    }

    & .account-amount {
      font-size: 2.5rem;
      font-weight: bold;
    }

    & .account-amount-description, .account-amount, .account-title {
      margin: 0;
    }

    &.cta {
      flex: 0;

      & .transaction-button {
        width: 200px;
        display: block;
        padding: 8px;
        font-size: 1.1rem;
        font-weight: bold;
        margin-top: 1rem;
        border-color: #00bc77;
        background-color: #00bc77;
        color: #fff;
      }
    }
  }
`