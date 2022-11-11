
import "./MenPage.css"

import { Navbar } from "../../components/Navbar/Navbar";
import "../../components/Navbar/BottomNav.css"
import { BottomNav } from "../../components/Navbar/BottomNav"
import { Men } from "../../components/Navbar/NavData"
import { MymenSlider } from "./Men"
import { Footer } from "../../components/Footer/Footer";
import { MywomenSlider } from "../WnewArrival/Women"
import { Link } from "react-router-dom"

export const MenPage = () => {

   const data = Men;
  return (<>
  <br></br>
  <Navbar data={Men} />
     <BottomNav data={data} /> 
    <div className="container">
      <Link to="/">
        <div >
          <img id="mmm" src="https://img.mytheresa.com/media/static/raw/cms/l/MW_HP_2022_CW45/BIG1/DESKTOP_2x_20221107134833.jpg?imwidth=1180&imdensity=1://img.mytheresa.com/media/static/raw/cms/l/MW_HP_CW18_2022/BIG1/2x/BIG_1_TABLET_2X_1_20220502141254.jpg?imwidth=1024&imdensity=1" alt=""/>
        </div>
      </Link>
      <MymenSlider />
      <Link to="/">
        <div className="mimage">
          <img id="mimg" src="https://img.mytheresa.com/media/static/raw/cms/l/MW_HP_2022_CW45/BIG2/DESKTOP_2X_20221107170819.jpg?imwidth=1180&imdensity=1"  alt=""/>
        </div>
      </Link>
      <MymenSlider />
      <Link to="/">
        <div className="mimage">
          <img id="mimg" src="https://creativemachine.co/wp-content/uploads/2020/03/ecommerce_men_s_clothing_banner_template_13_1200x628.jpg"  alt=""/>        </div>
      </Link>
      <MywomenSlider />
      <div className="texts-div">
        {/* <h2>Mytheresa – Men’s luxury and designer fashion</h2>
          <p>Mytheresa has organized a collection of designer menswear items to keep every man looking his best. Each item in our menswear assortment has been curated and edited by leading experts in men’s fashion. By simply browsing our website, you will discover a luxury shopping experience and find all you need to help you achieve a distinct, well-refined look. We offer fast, worldwide shipping to 130 countries within 72 hours on everything. From the most beloved luxury fashion brands for men, to our highly sought after exclusive menswear designer collaborations – Mytheresa’s tailored edit is suited to stylish men worldwide.</p>
          <p>Amongst our daily New Arrivals, you will uncover the freshest trends straight off the runway. With Mytheresa’s assortment of designer clothes you are guaranteed to look distinguished and build a sophisticated closet that serves your preferred lifestyle. Discover sharp suiting options by Ermenegildo Zegna for work or opt for an elevated off-duty item from Polo Ralph Lauren. Put your best foot forward in men’s designer shoes from esteemed labels like Prada and Saint Laurent. Not forgetting the perfect finishing touch with classic accessories for men, such as a luxury watch, a classic Burberry scarf or a statement tie. Our buyers have put together the finest selection of iconic styles to help maintain your reputation as a dashing gentleman. A helping hand, our team have carefully selected the perfect designer bags to complete your everyday look.</p> */}
        <section className="text_below">
          <br></br>
          <h2 className="ha2">MYTHERESA – MEN’S LUXURY AND DESIGNER FASHION
          </h2>
          <br></br>
          <p className="p-tag">
          Mytheresa has organized a collection of designer menswear items to keep every man looking his best. Each item in our menswear assortment has been curated and edited by leading experts in men’s fashion. By simply browsing our website, you will discover a luxury shopping experience and find all you need to help you achieve a distinct, well-refined look. We offer fast, worldwide shipping to 130 countries within 72 hours on everything. From the most beloved luxury fashion brands for men, to our highly sought after exclusive menswear designer collaborations – Mytheresa’s tailored edit is suited to stylish men worldwide
          </p>
          <br></br>
          <p className="p-tag">
          Amongst our daily New Arrivals, you will uncover the freshest trends straight off the runway. With Mytheresa’s assortment of designer clothes you are guaranteed to look distinguished and build a sophisticated closet that serves your preferred lifestyle. Discover sharp suiting options by Zegna for work or opt for an elevated off-duty item from Polo Ralph Lauren. Put your best foot forward in men’s designer shoes from esteemed labels like Prada and Saint Laurent. Not forgetting the perfect finishing touch with classic accessories for men, such as a luxury watch, a classic Burberry scarf or a statement tie. Our buyers have put together the finest selection of iconic styles to help maintain your reputation as a dashing gentleman. A helping hand, our team have carefully selected the perfect designer bags to complete your everyday look.
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
          Mytheresa has a long and rich fashion heritage that spans more than 30 years. What began in the heart of Munich as a contained local boutique offering creations from international designers has now grown to become one of the most innovative luxury e-commerce companies in the world. Whether you’re paying a visit to our Mytheresa Store, browsing from your computer at home, or shopping on-the-go via our mobile app, our goal always remains the same: to provide the perfect space that caters to all your shopping desires.
          </p>
          <br></br>
          <p className="p-tag">
          At Mytheresa we know that stylish men love fashion too and as a result, our professional Customer Service team is here to help with your order and make sure you are always dressed for success.
          </p>
          <br></br>
         
        </section>
      </div>

    </div>
    <Footer data={data} />
  </>
  )
}