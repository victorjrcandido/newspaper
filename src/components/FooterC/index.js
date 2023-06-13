import React from 'react'
import { FlexboxGrid, Footer } from 'rsuite';

const FooterC = () => {
  return (
    <Footer className='footer'>
      <FlexboxGrid justify="space-around">
        <FlexboxGrid.Item colspan={3}>
          <h5>News</h5>
          <p>Home Page</p>
          <p>Politic</p>
          <p>Business</p>
        </FlexboxGrid.Item>
        <FlexboxGrid.Item colspan={3}>
          <h5>Subscribe</h5>
          <p>Home Delivery</p>
          <p>Subscription</p>
          <p>Newsletters</p>
        </FlexboxGrid.Item>
        <FlexboxGrid.Item colspan={3}>
          <h5>Company</h5>
          <p>About</p>
          <p>Press</p>
          <p>Contact</p>
        </FlexboxGrid.Item>
        <FlexboxGrid.Item colspan={3}>
          <h5>Socials</h5>
          <a target='_blank' href="https://www.linkedin.com/feed/"><i class="fa-brands fa-linkedin fa-lg"></i></a>
          <a target='_blank' href="https://github.com/victorjrcandido"><i class="fa-brands fa-github fa-lg"></i></a>
          <a target='_blank' href="https://www.instagram.com/victorjrcandido/"><i class="fa-brands fa-instagram fa-lg"></i></a>
        </FlexboxGrid.Item>
      </FlexboxGrid>
    </Footer>
  )
}

export default FooterC