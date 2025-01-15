import pic1 from '../../assets/images/cards2/cards2-pic1.png';
import pic2 from "../../assets/images/cards2/cards2-pic2.png";
import pic3 from "../../assets/images/cards2/cards2-pic3.png";
import ava from "../../assets/images/cards2/ava.png";
import clovin from "../../assets/images/cards2/clovin.png";

import '../Card2/Card2.css'
export default function Card2(){
    return (
      <div className="card2">
        <div className="container card2__content">
          <h1 className="card2__title">
            Double your <span className="card2_mark">conversions</span>. <br />{" "}
            Double your <span className="card2_mark">growth</span>.
          </h1>
          <div className="card2__cards">
            <div className="card2__card">
              <h1>Brands</h1>
              <div className="card2__text">
                <img src={pic1} alt="" />
                <h2>Icreases conversions</h2>
              </div>
              <p>
                Enhance the visual showcase of your products with unique content
                making visitors convert to buyers.
              </p>
            </div>
            <div className="card2__card">
              <h1>Marketers</h1>
              <div className="card2__text">
                <img src={pic2} alt="" />
                <h2>Save time</h2>
              </div>
              <p>
                No more re-purposing, re-cropping or re-uploading the same
                content from your Instagram stories to your website.
              </p>
            </div>
            <div className="card2__card">
              <h1>Web designers</h1>
              <div className="card2__text">
                <img src={pic3} alt="" />
                <h2>Fresh content</h2>
              </div>
              <p>
                Every story you post on Instagram, it is automatically saved in
                your account. Auto updates you unique content.
              </p>
            </div>
          </div>
        </div>
        <div className="card2_visit container">
          <img src={clovin} alt="" />
          <p>
            “Storytelling on another level. EmbedStories is great - it takes
            pride of place on our homepage aggregating stories from our
            Instagram account. I highly recommend this product. ”.
          </p>
          <div className="card2_visit-card">
            <img src={ava} alt='' />
            <h3>
              <span>Ben Calahen,</span> COO at Clovin
            </h3>
          </div>
        </div>
      </div>
    );
}