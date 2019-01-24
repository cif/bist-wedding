import React from 'react'
import Head from 'next/head'
import Stars from '../components/Stars'
import FooterImage from '../components/FooterImage'
import countDownEffect from '../effects/countDownEffect'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlassCheers, faPlane, faBed } from '@fortawesome/free-solid-svg-icons'

library.add(faGlassCheers, faPlane, faBed)

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
           margin: 10px 0;
        }
        .content {
          margin: 0 auto;
          min-height: 400px;
          padding: 90px 0 0 0;
          color: #BDFFF7;
          text-transform: uppercase;
          text-align: center;
          font-weight: 100;
          z-index: 100;
          max-width: 800px;
        }
        .content p {
          color: #fff;
          font-size: 14px;
          letter-spacing: 1px;
          margin-top: 35px;
          line-height: 30px;
          text-transform: none;
        }
        .content a {
          color: #eee;
          text-decoration: none;
          display: inline-block;
          border-bottom: 1px dotted #eee;
        }
        .footer {
          position: relative;
          background-color: #2c6c69;
          padding: 35px 20px 50px 20px;
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
          .events {
            flex-direction: column;
          }
        }
        .section {
          margin-top: 60px;
        }
        .section p {
          font-size: 16px;
        }
        .events {
          display: flex;
        }
        .event {
          flex: 1;
          
        }
        .event p {
          line-height: 26px;
        }
        .event i {
          font-size: 11px;
        }
        h4 {
          margin: 0;
          font-size: 18px;
        }
      `}
      </style>
      <div className="body-wrap">
        <Stars /> 
        <div className="content">
          <h2>Ben Ipsen & Sarah Tantillo</h2> 
          <h1>09&nbsp; 14&nbsp; 19</h1>
          <h3>{countDown}</h3>
          <p><b>RSVP information will arrive with invitations soon.</b> <br /> 
          We look forward to having you with us in September.</p>

          <div className="section">
            <FontAwesomeIcon icon="glass-cheers" size="3x" style={{ marginBottom: 20 }} />
            <h2>Schedule Of Events</h2>
            <div className="events">
              <div className="event">
                <p>
                  <h4>Welcome</h4>
                  Friday, September 13th, 5:00p<br />
                  <a href="https://goo.gl/maps/DRaWLiyT3Xq" target="_blank">
                    <b>The Marina Park</b></a><br /><i>Hood River, Oregon</i>
                  <br />
                  Casual Attire<br />
                </p>
              </div>
              <div className="event">
                <p>
                  <h4>Wedding</h4>
                  Saturday, September 14th, 4:00p<br />
                  <a href="https://goo.gl/maps/rhTarrddCq12" target="_blank">
                    <b>Mt. Hood Organic Farms</b></a><br /><i>Parkdale, Oregon</i>
                  <br />
                  Semi-formal Attire<br />
                </p>
              </div>
            </div>  
          </div>

          <div className="section">
          <FontAwesomeIcon icon="plane" size="3x" style={{ marginBottom: 20 }} />
            <h2>Traveling Here</h2>
<p>
  For those of you <b>flying</b> to join us, <b>Portland International Airport<a href="https://goo.gl/maps/Ku8gzBacGYP2" target="_blank">(PDX)</a>{' '}</b> 
  has flights to and from all major airports.
  Portland (our home) is a vibrant city with a great food scene. We encourage you to take some time to explore it if your plans allow.
</p>
<p>
  To make the most of your time here in northwest Oregon, <b>we recommend renting a car</b>. Alternatively, there are <b>shuttles and/or bus</b> available 
  to transport you to where the wedding events will take place. <b>Uber</b> and <b>Lyft</b> are available for local transport around Portland and Hood River.
</p>

</div>
<div className="section">
<FontAwesomeIcon icon="bed" size="3x" style={{ marginBottom: 20 }} />
<h2>Where to Stay</h2>
            <p style={{ fontSize: 18 }}>
            We highly recommend all guests stay in <b>Hood River</b>, a quaint town on the Columbia River which is about a <b>one hour drive from Portland.</b>
            </p>
<p>
  <b>Transporation will be provided to/from downtown Hood River to the wedding</b> which wil take place at Mt Hood Organic Farms in Parkdale.
</p>

<p>
Bigger groups of family and/or friends may prefer to <b>rent a house</b>. 
There are serveral options on <b>
  <a href="https://www.airbnb.com/s/Hood-River--OR--United-States/all?refinement_paths%5B%5D=%2Ffor_you&query=Hood%20River%2C%20OR%2C%20United%20States&place_id=ChIJ5w8cTGEOllQRXJh9TX7P9lY&checkin=2019-09-13&checkout=2019-09-16" target="_blank">Airbnb</a>
</b> as well as{' '}
<b><a href="https://www.vrbo.com/results?petIncluded=false&ssr=true&adultsCount=6&q=Hood%20River%2C%20OR%2C%20USA&from-date=2019-09-13&to-date=2019-09-16" target="_blank">VRBO.</a></b>
{' '}
Should you find <b>a hotel</b> more suitable, we suggest one of the following:
</p>
<p style={{ fontSize: 13 }}>
<b><a href="https://goo.gl/maps/Qv3uUZGwZNP2" target="_blank">Hampton Inn</a><br /></b> 
No-frills, newer hotel close to downtown and walking distance to the welcome party.
</p>
<p style={{ fontSize: 13 }}>
<b><a href="https://goo.gl/maps/E1vLFG3JufK2" target="_blank">The Hood River Hotel</a></b><br /> 
Historic hotel in the heart of downtown. This one will book up fast!
</p> 
<p style={{ fontSize: 13 }}>
<b><a href="https://goo.gl/maps/aVonasXAbJR2" target="_blank">Best Western Inn</a></b><br />
Slightly outdated but within a walking distance from the water and downtown.

            </p>
          </div>
<br />
        <p style={{ marginTop: 50, marginBottom: 50, fontSize: 18 }}>
          Please <b><a href="mailto:sarahtantillo@gmail.com">get in touch with us</a></b> should you have more specific questions. 
          <br />We're happy to help and can't wait to see you!
        </p>
        <br />              
        </div>
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