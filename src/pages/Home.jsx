import styled from 'styled-components'
import Feature from "../components/Feature"
import HeroBanner from "../components/HeroBanner"
import iconChat from '../assets/icon-chat.png'
import iconMoney from '../assets/icon-money.png'
import iconSecurity from '../assets/icon-security.png'

const featuresList = [
  {
    id: "01-chat",
    img: iconChat,
    title: "You are our #1 priority",
    text: "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
  },
  {
    id: "02-money",
    img: iconMoney,
    title: "More savings means higher rates",
    text: "The more you save with us, the higher your interest rate will be!"
  },
  {
    id: "03-security",
    img: iconSecurity,
    title: "Security you can trust",
    text: "We use top of the line encryption to make sure your data and money is always safe."
  }
]

function Home() {
  return (
    <main>
      <HeroBanner />
      <FeatureSection>
        <h2 className='sr-only'>Features</h2>
        {featuresList.map((feature) => (
          <Feature
            key={feature.id}
            featureImg={feature.img}
            title={feature.title}
            text={feature.text}
          />
        ))}
      </FeatureSection>
    </main>
  )
}

export default Home

/////  Style  /////

const FeatureSection = styled.section`
  display: flex;
`