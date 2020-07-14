import mainImg from '../static/main.png'


// UIkit.img(element, options);

const AppLayout = () => {
    return (
      // <!-- TOP -->
      <div className="top-wrap uk-position-relative uk-light uk-background-secondary">
        {/* <!-- NAV --> */}
        <div
          className="nav"
          data-uk-sticky="cls-active: uk-background-secondary uk-box-shadow-medium; top: 100vh; animation: uk-animation-slide-top"
        >
          <div className="uk-container">
            <nav
              className="uk-navbar uk-navbar-container uk-navbar-transparent"
              data-uk-navbar
            >
              <div className="uk-navbar-left">
                <div className="uk-navbar-item uk-padding-remove-horizontal">
                  {/* <a href="" classNameName="uk-icon-link" uk-icon="arrow-down"></a> */}
                </div>
              </div>
              <div className="uk-navbar-right">
                <ul className="uk-navbar-nav uk-visible@s">
                  <li className="uk-active uk-visible@m">
                    <a href="" data-uk-icon="home"></a>
                  </li>
                  <li>
                    <a href="">Features</a>
                  </li>
                  <li>
                    <a href="#" data-uk-icon="chevron-down">
                      Products
                    </a>
                    <div className="uk-navbar-dropdown">
                      <ul className="uk-nav uk-navbar-dropdown-nav">
                        <li>
                          <a href="#">Big Data</a>
                        </li>
                        <li>
                          <a href="#">Marketing</a>
                        </li>
                        <li>
                          <a href="#">Analytics</a>
                        </li>
                        <li>
                          <a href="#">AI Lab</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a href="">Testimonials</a>
                  </li>
                </ul>
                <a
                  className="uk-navbar-toggle uk-navbar-item uk-hidden@s"
                  data-uk-toggle
                  data-uk-navbar-toggle-icon
                  href="#offcanvas-nav"
                ></a>
              </div>
            </nav>
          </div>
        </div>
        {/* <!-- /NAV --> */}

        <div className="uk-cover-container uk-light uk-flex uk-flex-middle top-wrap-height">
          {/* <!-- TOP CONTAINER --> */}
          <div
            className="uk-container uk-flex-auto top-container uk-position-relative uk-margin-medium-top"
            data-uk-parallax="y: 0,50; easing:0; opacity:0.2"
          >
            <div
              className="uk-width-1-2@s"
              data-uk-scrollspy="cls: uk-animation-slide-right-medium; target: > *; delay: 150"
            >
              <h6 className="uk-text-primary uk-margin-small-bottom">RESEARCH</h6>
              <h1 className="uk-margin-remove-top">Innovation in your hands.</h1>
              <p className="subtitle-text uk-visible@s">
                Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco{" "}
              </p>
              <a
                href="#"
                title="Learn More"
                className="uk-button uk-button-primary uk-border-pill"
                data-uk-scrollspy-className="uk-animation-fade"
              >
                LEARN MORE
              </a>
            </div>
          </div>
          {/* <!-- /TOP CONTAINER --> */}
          {/* <!-- TOP IMAGE --> */}
            <img
              src="https://source.unsplash.com/user/erondu/2000x1000"
              data-srcset="https://source.unsplash.com/user/erondu/640x700 640w,
                            https://source.unsplash.com/user/erondu/960x700 960w,
                            https://source.unsplash.com/user/erondu/1200x900 1200w,
                            https://source.unsplash.com/user/erondu/2000x1000 2000w"
              data-src="https://source.unsplash.com/user/erondu/1200x900"
              data-sizes="100vw"
              alt="엥?"
              data-uk-cover
              data-uk-img
              data-uk-parallax="opacity: 1,0.1; easing:0"
            />
          {/* <!-- /TOP IMAGE --> */}
        </div>
        <div className="uk-position-bottom-center uk-position-medium uk-position-z-index uk-text-center">
          <a
            href="#content"
            data-uk-scroll="duration: 500"
            data-uk-icon="icon: arrow-down; ratio: 2"
          ></a>
        </div>
      </div>
    );
}

export default AppLayout