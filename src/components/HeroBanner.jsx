import styled from 'styled-components'
import BannerImage from '../assets/bank-tree.jpeg'

function HeroBanner() {
  return (
    <HeroBannerContainer>
      <section className="hero-content">
        <h2 className="sr-only">Promoted content</h2>
        <p className="subtitle">No fees.</p>
        <p className="subtitle">No minimum deposit.</p>
        <p className="subtitle">High interest rates.</p>
        <p className="text">Open a savings account with Argent Bank today!</p>
      </section>
    </HeroBannerContainer>
  )
}

export default HeroBanner

/////  Style  /////

const HeroBannerContainer = styled.div`
  height: 400px;
  background-image: url(${BannerImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 0% 33%;
  position: relative;

  & .hero-content {
    position: absolute;
    top: 50px;
    right: 50px;
    width: 300px;
    margin: 2rem;
    text-align: left;
    padding: 2rem;
    background: #fff;
  }

  & .subtitle {
    font-size: 1.5rem;
    font-weight: bold;
    margin: 0;
  }

  & .text {
    font-size: 1.2rem;
    margin-bottom: 0;
  }
`