import React from 'react'
import Head from 'next/head'
import Stars from '../components/Stars'
import FooterImage from '../components/FooterImage'
import RsvpForm from '../components/RsvpForm'
import Countdown from '../components/Countdown'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlassCheers, faPlane, faBed, faShoppingBag, faHiking, faWineGlassAlt, faBicycle, faFish, faUtensils } from '@fortawesome/free-solid-svg-icons'

library.add(faGlassCheers, faPlane, faBed, faShoppingBag, faWineGlassAlt, faHiking, faBicycle, faFish, faUtensils)

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
          max-width: 800px;
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
          <h2>Ben Ipsen & Sarah Tantillo</h2>
          <h1>09&nbsp; 14&nbsp; 19</h1>
          <h3><Countdown /></h3>
          <RsvpForm />
          <div className="section">
            <FontAwesomeIcon icon="glass-cheers" size="3x" style={{ marginBottom: 20 }} />
            <h2>Schedule Of Events</h2>
            <div className="events">
              <div className="event">
                <h4>Welcome</h4>
                <p>
                  Friday, September 13th, 5:00p<br />
                  <a href="https://goo.gl/maps/DRaWLiyT3Xq" target="_blank">
                    <b>The Marina Park</b></a><br /><i>Hood River, Oregon</i>
                  <br />
                  Casual Attire<br />
                </p>
              </div>
              <div className="event">
                <h4>Wedding</h4>
                <p>
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

            <h2>Traveling</h2>
            <p style={{ fontSize: 18 }}>
              <b>Portland International Airport <a href="https://goo.gl/maps/Ku8gzBacGYP2" target="_blank">(PDX)</a>{' '}</b>
              serves flights to and from most major airports in the US. Wedding events will take place an hour's drive from Portland in <a href="https://goo.gl/maps/kYpD349ykB72" target="_blank"><b>Hood River</b></a>.
            </p>
            <p>
              To make the most of your time in Oregon <b>we recommend renting a car</b>. This will provide the most flexibility and more activity options during your trip.
            </p>
            <p>
              Alternatively, there are <a href="https://www.rome2rio.com/map/Portland-Airport-PDX/Hood-River" target="_blank"><b>shuttles available</b></a> between Portland and where the wedding events will take place.{' '}
              <b>Uber</b> and <b>Lyft</b> are available for local transport.
            </p>
          </div>

          <div className="section">
            <FontAwesomeIcon icon="bed" size="3x" style={{ marginBottom: 20 }} />
            <h2>Where to Stay</h2>
            <p style={{ fontSize: 18 }}>
              During the wedding weekend we <b>suggest staying in Hood River.</b> Transportation to and from the wedding will be provided from one or two locations in the city.
            </p>

            <p>
              Bigger groups of family and/or friends may prefer to <b>rent a house</b>.
              There are several options on <b>
              <a href="https://www.airbnb.com/s/Hood-River--OR--United-States/all?refinement_paths%5B%5D=%2Ffor_you&query=Hood%20River%2C%20OR%2C%20United%20States&place_id=ChIJ5w8cTGEOllQRXJh9TX7P9lY&checkin=2019-09-13&checkout=2019-09-16" target="_blank">Airbnb</a>
            </b> as well as{' '}
            <b><a href="https://www.vrbo.com/results?petIncluded=false&ssr=true&adultsCount=6&q=Hood%20River%2C%20OR%2C%20USA&from-date=2019-09-13&to-date=2019-09-16" target="_blank">VRBO.</a></b>
            </p>
            <p>
            Should you find <b>a hotel</b> more suitable, we suggest one of the following:
            </p>
            <div className="hotels">
              <p className="hotel">
              <b><a href="https://goo.gl/maps/Qv3uUZGwZNP2" target="_blank">Hampton Inn</a><br /></b>
                A newer hotel, downtown and walking distance to the welcome party.
              </p>
              <p className="hotel">
              <b><a href="https://goo.gl/maps/E1vLFG3JufK2" target="_blank">The Hood River Hotel</a></b><br />
                Historic hotel in the heart of downtown. This one will book up fast!
              </p>
              <p className="hotel">
              <b><a href="https://goo.gl/maps/aVonasXAbJR2" target="_blank">Best Western Inn</a></b><br />
                Slightly outdated but within a walking distance from the water and downtown.

              </p>
            </div>
          </div>

        <div className="section">
          <FontAwesomeIcon icon="bicycle" size="2x" style={{ marginBottom: 20, marginRight: 15 }} />
          <FontAwesomeIcon icon="shopping-bag" size="2x" style={{ marginBottom: 20, marginRight: 15 }} />
          <FontAwesomeIcon icon="hiking" size="2x" style={{ marginBottom: 20, marginRight: 15 }} />
          <FontAwesomeIcon icon="utensils" size="2x" style={{ marginBottom: 20, marginRight: 15 }} />
          <FontAwesomeIcon icon="wine-glass-alt" size="2x" style={{ marginBottom: 20, marginRight: 15 }} />
          <FontAwesomeIcon icon="fish" size="2x" style={{ marginBottom: 20, marginRight: 15 }} />
          <h2>What To Do</h2>
          <p style={{ fontSize: 18 }}>
            We're excited for you to come see our home (and playground) in the <b>Great Pacific Northwest.</b>
            {' '}Whether you are here for the weekend or a week, here are some things to do and check out:
          </p>
          <p>
            <b>Explore Portland:</b> Our home is a vibrant city with a great food & drink scene. <br />
            A few of our favorite neighborhoods to eat in are <a href="https://goo.gl/maps/MFcdkdtdh9T2" target="_blank"><b>N Mississippi</b></a>,{' '}
            <a href="https://goo.gl/maps/6pgCLYfcSoG2" target="_blank"><b>NE Alberta</b></a>, and
            <a href="https://goo.gl/maps/Enr6wvsvoFF2" target="_blank"><b>NW 21st - 23rd Ave</b>.</a>{' '}

            Between meals be sure to check out {' '}
            <a href="https://goo.gl/maps/nLiTWxdutb92" target="_blank"><b>The Japanese Gardens</b></a>,{' '}
            <a href="https://goo.gl/maps/HfYY5dkcmpQ2" target="_blank"><b>Pittock Mansion</b></a>,{' '}
            <a href="https://goo.gl/maps/3tiiCwVT33k" target="_blank"><b>Powells City of Books,</b></a>{' '}
            and <a href="https://goo.gl/maps/693QTtRPGu22" target="_blank"><b>OMSI</b></a>.
          </p>

          <p>
            <b>Explore Hood River:</b> A scenic town on the Columbia River offering endless <b>outdoor activities</b> such as{' '}
            <a href="http://hoodriver.org/biking/" target="_blank"><b>biking</b></a>,{' '}
            <a href="http://hoodriver.org/hood-river-hiking/" target="_blank"><b>hiking</b></a>,{' '}
            and <a href="http://hoodriver.org/fishing/" target="_blank"><b>fishing</b></a>.<br />
            Rental equipment is readily available in town.
            </p>
            <p>
            There are plenty of{' '}
            <a href="https://www.google.com/maps/search/wine+tasting+near+hood+river/@45.6873467,-121.6214137,11z/data=!3m1!4b1" target="_blank">
            <b>vineyards and wine tastings</b></a> near by and Hood River's quaint downtown
            offers plenty of <a href="http://hoodriver.org/shop/" target="_blank"><b>shopping</b></a>.

            Some or our favorite places to eat in Hood River are: {' '}
              <a href="https://goo.gl/maps/n87JrmNnXLM2" target="_blank"><b>River Daze Cafe</b></a> (amazing breakfast sandos!),{' '}
              <a href="https://goo.gl/maps/uAMh2vyHPgz" target="_blank"><b>Double Mountain Brewing</b></a>,{' '} and
              and <a href="https://goo.gl/maps/FseSRZBsHJF2" target="_blank"><b>pFriem Brewing</b></a>.{' '}
          </p>

          <p>
            <b>Explore Oregon:</b>{' '}
            Stunning coastal views are only 2 hours from the Portland Airport. Check out the coastline and grab a coffee in <a href="https://goo.gl/maps/AuPGtUjBEAp" target="_blank"><b>Cannon Beach</b></a>. {' '}
            From there head north to check out <a href="https://goo.gl/maps/3Lzn1CqTEsB2" target="_blank"><b>Buoy Beer Co.</b></a> in Astoria.
            For more outdoor activity and sunshine in the high desert, the outdoorsy town of{' '}
            <a href="https://goo.gl/maps/2X6UrBPUU5w" target="_blank"><b>Bend</b></a> is about 2.5 hours from Hood River.

          </p>

        </div>

<br />
        <p style={{ marginTop: 50, marginBottom: 50, fontSize: 18 }}>
          Please <b><a href="mailto:sarahtantillo@gmail.com">get in touch with us</a></b> should you have more specific questions.
          <br />We're happy to help and can't wait to see you!
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