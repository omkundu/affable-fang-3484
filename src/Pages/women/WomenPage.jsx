import React from "react"
import "./WomenPage.css"

import { BottomNav } from "../../Components/Navbar/BottomNav"
import "../../Components/Navbar/BottomNav.css"
import { Navbar } from "../../Components/Navbar/Navbar";
import { Women } from "../../Components/Navbar/NavData"

import { Link } from "react-router-dom";
// import { useMediaQuery } from 'react-responsive'

export const WomenPage = () => {


  return (<>
    <Navbar data={Women} />
    {/* <BottomNav data={Women} /> */}
    <div className="container">
      <div className="main_img">
        <Link to="/womenproducts">
          <br></br>
          <img src="https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW44/ODLR_Big_DSK_2x_20221028110114.jpg?imwidth=1180&imdensity=1" alt="women-img" />

          <div>

          </div>
        </Link>
      </div>
      <div className="banner">
        <h4 className="ha4">DON'T MISS OUT</h4>
        <h1 className="ha1">New Arrivals</h1>
        <h5 className="ha5">Jonathan Simkhai, Proenza Schouler, Staud...</h5>
        <Link to="/womenproducts"><button className="btn">SHOP NOW</button></Link>
      </div>
      <div className="start">
        <div className="left">
          <h4 className="ha4" >THE EXCLUSIVE CAPSULE COLLECTION</h4>
          <h1 className="ha1">Roger vivier X Mytheresa</h1>
          <br />
          <br />
          <img src="https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW45/Actbox_Tall_Small_2x_20221107113119.jpg?imwidth=600&imdensity=1" alt="" />
          <br />
          <Link to="/womenproducts">
            <button className="btn">SHOP NOW</button></Link>
        </div>
        <div className="right">
          <h4 className="ha4">LIFE'S LITTLE LUXIRIES</h4>
          <h1 className="ha1">Mytheresa presents Gucci  <br />Decor</h1>
          <br />
          <br />
          <img src="https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW45/ActboxSmall-GucciDecor_2x_20221107113141.jpg?imwidth=600&imdensity=1" alt="" />
          <br />
          <Link to="/womenproducts">
            <button className="btn-shop">SHOP NOW</button></Link>
          <hr></hr>
          <h4 className="ha4">FAMILY FESTIVITIES</h4>
          <h1 className="ha1">Embrace festive family<br /> moments</h1>
          <br />
          <br />
          <img src="https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW45/Festive-Nov_ActboxSmall_Family_2x_20221107113245.jpg?imwidth=600&imdensity=1" alt="" />
          <br />
          <Link to="/womenproducts">
            <button className="btn">SHOP NOW</button></Link>

        </div>
      </div>
      <br></br>
      <hr></hr>
      <div className="second">
        <div className="left">
          <h4 className="ha4">THE PERFECT GIFT</h4>
          <h1 className="ha1">Heartwarming gifts you'll <br /> love</h1>
          <br />
          <br />
          <img src="https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW44/Festive-Nov_ActboxSmall_GiftHER_2x_20221028110218.jpg?imwidth=600&imdensity=1" alt="" />
          <br />
          <Link to="/womenproducts">
            <button className="btn">SHOP NOW</button></Link>
          <br></br>
          <hr></hr>
          <br></br>
          <h4 className="ha4">THE IT-BAG EDIT</h4>
          <h1 className="ha1">New styles to add to your <br />collection
          </h1>
          <br />
          <br />
          <img src="https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW45/CW45_ActboxSmall_2x_20221107113353.jpg?imwidth=600&imdensity=1" alt="" />
          <br />
          <Link to="/womenproducts">
            <button className="btn-shop">SHOP NOW</button></Link>
        </div>
        <div className="right">
          <h4 className="ha4" >SPORTY STYLES FOR SNOMY SETTINGS</h4>
          <h1 className="ha1">The Ski Edit </h1>
          <br />
          <br />
          <img src="https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW45/ActboxTall-SKIEDIT_2x_20221107113331.jpg?imwidth=600&imdensity=1" alt="" />
          <br />
          <Link to="/womenproducts">
            <button className="btn-shop">SHOP NOW</button></Link>
        </div>

      </div>
      <div className="third">
        <div>
          <h4 className="ha4" >IT'S A MATCH</h4>
          <h1 className="ha1">Cozy textures and warm tones</h1>
        </div>
        <div className="third-img">
          <div>
            <img className="img1" src="https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW45/CW45_FE_642x642_2x__20221107113403.jpg" alt="" />
            <h4 className="ha4">Jacquemust</h4>
          </div>
          <div>
            <img className="img1" src="https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW45/CW45_FE_642x642_2x_2_20221107113403.jpg" alt="" />
            <h4 className="ha4">Gabriela Hearst</h4>
          </div>
          <div>
            <img className="img1" src="https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW45/CW45_FE_642x642_2x_3_20221107113404.jpg" alt="" />
            <h4 className="ha4">isabel Marant</h4>
          </div>
          <div>
            <img className="img1" src="https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW45/CW45_FE_642x642_2x_4_20221107113403.jpg" alt="" />
            <h4 className="ha4">Loewe</h4>
          </div>

        </div>
        <Link to="/womenproducts">
          <button className="btn-shop last-btn">SHOP NOW</button></Link>
        <hr></hr>
      </div>
      <div className="texts-div">
        {/* <h2>Mytheresa – Men’s luxury and designer fashion</h2>
          <p>Mytheresa has organized a collection of designer menswear items to keep every man looking his best. Each item in our menswear assortment has been curated and edited by leading experts in men’s fashion. By simply browsing our website, you will discover a luxury shopping experience and find all you need to help you achieve a distinct, well-refined look. We offer fast, worldwide shipping to 130 countries within 72 hours on everything. From the most beloved luxury fashion brands for men, to our highly sought after exclusive menswear designer collaborations – Mytheresa’s tailored edit is suited to stylish men worldwide.</p>
          <p>Amongst our daily New Arrivals, you will uncover the freshest trends straight off the runway. With Mytheresa’s assortment of designer clothes you are guaranteed to look distinguished and build a sophisticated closet that serves your preferred lifestyle. Discover sharp suiting options by Ermenegildo Zegna for work or opt for an elevated off-duty item from Polo Ralph Lauren. Put your best foot forward in men’s designer shoes from esteemed labels like Prada and Saint Laurent. Not forgetting the perfect finishing touch with classic accessories for men, such as a luxury watch, a classic Burberry scarf or a statement tie. Our buyers have put together the finest selection of iconic styles to help maintain your reputation as a dashing gentleman. A helping hand, our team have carefully selected the perfect designer bags to complete your everyday look.</p> */}
        <section className="text_below">
          <br></br>
          <h2 className="ha2">MYTHERESA – WOMEN’S LUXURY AND DESIGNER FASHION
          </h2>
          <br></br>
          <p className="p-tag">
            Mytheresa is the most-trusted source for finding the finest selection of luxurious womenswear. Our expert buying team travels the globe with a simple mission: to bring international fashion’s finest directly to your doorstep. With our runway-fresh new arrivals every week, an easy-to-navigate platform and a mobile app to shop on-the-go, we ensure a boutique-like feeling for a unique shopping experience.
          </p>
          <br></br>

          <div className="exp_quality">
            <div className="exp">
              <h5 className="p-tag">A LUXURY SHOPPING EXPERIENCE</h5>
              <ul>
                <li>
                  The finest edit of more than 100 international luxury brands
                </li>
                <li>400 new arrivals each week directly from the runway</li>
                <li>
                  Well-curated selection of items for a boutique-like shopping
                  experience
                </li>
                <li>
                  Exclusive designer collaborations and capsule collections
                  that you <br /> won’t find anywhereelse
                </li>
              </ul>
            </div>
            <div className="quality">
              <p className="p-tag">SERVICE AND QUALITY</p>
              <ul>
                <li>Authentic products guaranteed</li>
                <li>
                  Fast, reliable delivery to over 130 countries within 72
                  hours
                </li>
                <li>Free returns and exchanges within 30 days</li>
                <li>
                  Exceptional customer service available 24 hours a day, 6
                  days a week in 13 different languages
                </li>
              </ul>
            </div>
          </div>
          <br></br>
          <p className="p-tag">
            Whether you are looking for the latest Bottega Veneta pouch for everyday wear, Jimmy Choo heels for an upcoming wedding, or a Burberry scarf to gift a friend, our edit comprises the key pieces that you need for an elegant season ahead. With our assortment of timeless items and exclusive capsule collections, which includes everything from the understated luxury of Loro Piana and avant-garde appeal of Maison Margiela, to Saint Laurent bags and time-honored Gucci loafers; you are certain to find everything you want to build your dream closet.
          </p>
          <br></br>
          <p className="p-tag">
            Get inspired by our coveted edit, which makes occasion dressing easy by breaking down our buy into easy-to-shop categories such as fashion sneakers or exquisite gowns. Delve into our exclusive selection of designer must-haves. Our exceptional customer service team is here to help you through every step of the order process, and beyond, to make sure you start every day dressed to conquer.
          </p>
          <br></br>
          <p className="p-tag">
            Shop with us and discover why Mytheresa is your final destination for online shopping for women.
          </p>
          <br></br>
        </section>
      </div>

    </div>
  </>
  )
}


export default WomenPage