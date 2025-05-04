import React from 'react'
import Hero from './Hero'
import Features from './Features'
import FAQ from './FAQ'
import EWastePredictor from './EWastePredictor'
type Props = {}

const Home = (props: Props) => {
  return (
    <>
    <Hero/>
      <EWastePredictor/>
    <Features/>
    <FAQ/>
    </>
  )
}

export default Home
