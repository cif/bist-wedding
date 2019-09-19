import React from 'react'
import Head from 'next/head'
import Stars from '../components/Stars'
import FooterImage from '../components/FooterImage'
// import RsvpForm from '../components/RsvpForm'
// import Countdown from '../components/Countdown'
import Photos from '../components/Photos';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlassCheers, faPlane, faBed, faShoppingBag, faHiking, faWineGlassAlt, faBicycle, faFish, faUtensils, faGift } from '@fortawesome/free-solid-svg-icons'

library.add(faGlassCheers, faPlane, faBed, faShoppingBag, faWineGlassAlt, faHiking, faBicycle, faFish, faUtensils, faGift)

const Index = () => {
  return (
    <div>
      <Head>
        <title>The BIST Wedding Ever - September 14th 2019</title>
        <link rel="stylesheet" href="https://use.typekit.net/hfp3zvi.css"></link>
        <meta name="viewport" content="width=device-width,user-scalable=no,initial-scale=1, maximum-scale=1" />
      </Head>
      <style global jsx>
        {`
        body, html {
          font-family: urbane-rounded, sans-serif;
          font-weight: 100;
          font-style: normal;
          margin: 0;
          padding: 0;
          background-image: -webkit-linear-gradient(top, #295b7c 0%,#b7ab77 113%, #E9D3B4 100%);
          background-repeat: no-repeat;
        }
        h2, h3 {
          font-size: 18px;
          font-weight: 100;
          margin: 5px;
          letter-spacing: 2px;
        }
        h3{
          margin: 10px;
          font-size: 18px;
        }
        h1{
           font-weight: 300;
           font-size: 60px;
           margin: 10px 0 30px 0;
        }
        .content {
          position: relative;
          margin: 0 auto;
          min-height: 400px;
          padding: 90px 0 0 0;
          color: #BDFFF7;
          text-transform: uppercase;
          text-align: center;
          font-weight: 100;
          z-index: 100;

        }
        .content p {
          color: #eff;
          font-size: 14px;
          letter-spacing: 1px;
          margin-top: 35px;
          line-height: 30px;
          text-transform: none;
        }
        .content a {
          color: #fff;
          text-decoration: none;
          display: inline-block;
          padding-bottom: 0;
          line-height: 20px;
          border-bottom: 1px dotted #eee;
        }
        .footer {
          position: relative;
          background-color: #2c6c69;
          padding: 35px 20px 50px 20px;
          margin-top: -25px;
          text-align: center;
          font-size: 13px;
          line-height: 25px;
          color: #fff;
        }
        .footer a{
          color: #eee;
          font-weight: 400;
          text-decoration: none;
        }

        .content a.giftButton{
          display: inline-block;
          background-color: #FFF;
          color: #687f7a;
          padding: 19px 70px;
          font-size: 25px;
          border: none;
          border-radius: 5px;
          urbane-rounded, sans-serif;
          margin: 5px;
          cursor: pointer;
        }

        .section {
            margin: 0 auto;
            max-width: 800px;
        }

        @media only screen and (max-width: 900px)  {
          .content {
             min-height: 100px;
             padding: 95px 35px 0 35px;
            max-width: 100%;

          }
          .content h1{
            font-size: 50px;
          }
          .content h2{
            font-size: 15px;
          }
          .content h3{
            font-size: 18px;
          }
          .content p{
            font-size: 15px;
            line-height: 24px;
          }
          .footer {
            padding: 50px;
          }
          .events, .section, .hotels {
            flex-direction: column;
          }
        }
        .section {
          margin-top: 60px;
        }
        .section p {
          font-size: 16px;
        }
        .events, .hotels {
          display: flex;
        }
        .event, .hotel {
          flex: 1;
        }
        .hotel {
          font-size: 12px !important;
          line-height: 20px;
          padding: 0 10px;
        }
        .event h4 {
          margin: 0;
          margin-top: 36px;
          color: #fff;
          letter-spacing: 3px;
        }
        .event p {
          margin-top: 3px;
          line-height: 26px;
        }
        .event i {
          font-size: 11px;
        }
        h4 {
          margin: 0;
          font-size: 18px
        }
      `}
      </style>
      <div className="body-wrap">

        <div className="content">
          <h2>Ben & Sarah Ipsen</h2>
          <h1>09&nbsp; 14&nbsp; 19</h1>
          <h3>Thank you! <br /><br />What an amazing weekend</h3>
          <p>Please share your photos with us! </p>
         <Photos />


          <div className="section">
            <FontAwesomeIcon icon="gift" size="3x" style={{ marginBottom: 20 }} />

            <h2>Gifts</h2>
            <p style={{ fontSize: 20 }}>
              Your presence at our wedding was already a gift!
            </p>
            <p>
              If you'd still like to send a gift, we've set up a secure site to help pay for our travels.
            </p>
            <a href="https://www.honeyfund.com/wedding/thebistwedding" className="giftButton" target="_blank">Contribute To Our Honeymoon</a>
            <p>
              Our friend Adrian created a registry with some really cool items from her shop{' '}
              <a href="https://bungalow608.com/" target="_blank">Bungalow 608.</a>
            </p>
            <a href="https://bungalow608.com/collections/the-bist-wedding" className="giftButton" target="_blank">Buy Us Cool Things</a>
            <br /><br />
          </div>

          <br />
          <p style={{ marginTop: 50, marginBottom: 50, fontSize: 18 }}>

          </p>
          <br />
        </div>
        <Stars />
        <FooterImage />
        <div className="footer">
          <p>Coded with React 16 + Next.js + &#9829;. Deployed fearlessly with <a href="https://now.sh" target="_blank">Now</a>.<br />
            Please geek out on the <a href="https://github.com/cif/bist-wedding" target="_blank">source code.</a></p>
        </div>
      </div>

    </div>
  )
}

export default Index