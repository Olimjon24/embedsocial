import arrow  from '../../assets/images/arrow.png'
import headerRight from "../../assets/images/header-right.png";
export default function HeaderContent() {
    return (
      <div className="header-content container">
        <div className="header_info">
          <div className="header_info-left">
            <h1>
              Display Instagram Stories on any website, <mark>in seconds.</mark>
            </h1>
            <p>
              Display Instagram Stories Widget on your website, that auto-syncs,
              and updates each time you add a photo in your active story.{" "}
            </p>
            <form>
              <input type="email" placeholder="Enter your email..." />
              <button>
                Start Free Trial <img src={arrow} alt="arrow" />
              </button>
            </form>
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <div className="header_info-left">
            <img src={headerRight} alt="rigth" />
          </div>
        </div>
      </div>
    );
}