import React from 'react'
import Banner from '../Banner'
import Leatest from '../Leatest'
import Add from '../Add'
import Shopex from '../Shopex'
import FeaturedProducts from '../FeaturedProducts'
import Trending from '../Trending'
import Addtwo from '../Addtwo'
import Discount from '../Discount'
import Topcat from '../Topcat'
import Award from '../Award'

const Home = () => {
  return (
    <div>
      <Banner/>
      <FeaturedProducts/>
      <Leatest/>
      <Shopex/>
      <Add/>
      <Trending/>
      <Discount/>
      <Topcat/>
      <Addtwo/>
      <Award/>
    </div>
  )
}

export default Home