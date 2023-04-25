import styled from 'styled-components'
import SignInCard from "../../components/SignInCard"

function SignIn() {
  return (
    <MainContainer>
      <SignInCard />
    </MainContainer>
  )
}

export default SignIn

/////  Style  /////

const MainContainer = styled.main`
  background-color: #12002b;
  flex: 1;
`