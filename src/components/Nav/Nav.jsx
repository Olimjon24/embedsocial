import Navlist from "../NavList/Navlist";
export default function Nav(){
    return (
      <nav className="header-nav">
        <div className="container nav-container">
          <a href="#" className="logo">
            <img src="/public/logo.png" alt="logo-img" className="logo-img" />
            <span>embedsocial</span>
          </a>
          <Navlist />
          <div className="nav-form">
            <span>Login</span>
            <span>Start Free Trial</span>
          </div>
        </div>
      </nav>
    );
}