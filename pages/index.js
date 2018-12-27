import React from 'react'
import Head from 'next/head'
import Stars from '../components/Stars'
import FooterImage from '../components/FooterImage'
import countDownEffect from '../effects/countDownEffect'

const Index = () => {
  const {
    countDown
  } = countDownEffect()
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
          paddding: 0;
          background-image: -webkit-linear-gradient(top, #295b7c 0%,#b7ab77 85%, #E9D3B4 98%);
          background-repeat: no-repeat;
          background-color: #E9D3B4;
        }
        h2, h3 {
          font-size: 18px;
          font-weight: 100;
          margin: 5px;
          letter-spacing: 2px;
        }
        h3{
          margin: 10px;
          font-size: 25px;
        }
        h1{
           font-weight: 300;
           font-size: 80px;
           margin: 10px 0;
        }
        .content {
          height: 400px;
          padding: 120px 0 0 0;
          color: #BDFFF7;
          text-transform: uppercase;
          text-align: center;
          font-weight: 100;
        }
        .content p {
          color: #fff;
          font-size: 14px;
          letter-spacing: 1px;
          margin-top: 35px;
          line-height: 30px;
          text-transform: none;
        }
        .footer {
          position: relative;
          background-color: #E9D3B4;
          padding: 35px 0 50px 0;
          top: -10px;
          text-align: center;
          font-size: 13px;
        }
        .footer a{
          color: #A24634;
          font-weight: 400;
          text-decoration: none;
        }
        @media only screen and (max-width: 900px)  {
          .content {
             min-height: 400px;
             padding: 95px 35px;
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
        }
      `}
      </style>
      <div className="body-wrap">
        <Stars /> 
        <div className="content">
          <h2>Ben Ipsen & Sarah Tantillo</h2> 
          <h1>09&nbsp; 14&nbsp; 19</h1>
          <h3>{countDown}</h3>
          <p>RSVP information will arrive with invitations soon. <br /> 
          We look forward to having you with us in September.</p>
        </div>
        <FooterImage />
        <div className="footer">
          <p>Handcrafted with &#9829; in Portland, Oregon</p>
          <p>Created with React/Next.js. Please geek out on the <a href="https://github.com/cif/bist-wedding" target="_blank">source code.</a></p>
        </div>
      </div>
  
    </div>
  )
}

export default Index