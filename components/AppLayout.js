import React, { useCallback } from "react";



const AppLayout = () => {

   const onSubmitForm  = function(e) {
    e.preventDefault();
    console.log(e)
   }.bind(this)

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
                <span class="uk-margin-small-right" uk-icon="check">
                  Logo
                </span>
              </div>
            </div>
            <div className="uk-navbar-right">
              <ul className="uk-navbar-nav uk-visible@s">
                <li className="uk-active uk-visible@m">
                  <a href="" data-uk-icon="home">
                    Home
                  </a>
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
          <div className="uk-container-center uk-text-center">
            <h1 className="uk-margin-remove-top">링크는 간단하게 뭘봐</h1>
            <div class="uk-margin">
              <div class="uk-inline">
                <form>
                  <span class="uk-form-icon uk-icon" uk-icon="icon: link">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      data-svg="link"
                    >
                      <path
                        fill="none"
                        stroke="#000"
                        stroke-width="1.1"
                        d="M10.625,12.375 L7.525,15.475 C6.825,16.175 5.925,16.175 5.225,15.475 L4.525,14.775 C3.825,14.074 3.825,13.175 4.525,12.475 L7.625,9.375"
                      ></path>
                      <path
                        fill="none"
                        stroke="#000"
                        stroke-width="1.1"
                        d="M9.325,7.375 L12.425,4.275 C13.125,3.575 14.025,3.575 14.724,4.275 L15.425,4.975 C16.125,5.675 16.125,6.575 15.425,7.275 L12.325,10.375"
                      ></path>
                      <path
                        fill="none"
                        stroke="#000"
                        stroke-width="1.1"
                        d="M7.925,11.875 L11.925,7.975"
                      ></path>
                    </svg>
                  </span>

                  <input class="uk-input uk-form-width-large" type="text" placeholder="URL Paste" />
                  <div class="uk-float-right">
                    <input
                      type="submit"
                      value="CUT"
                      class="uk-input uk-button-default"
                      onClick={onSubmitForm}
                    />
                  </div>
                </form>
              </div>
            </div>
            <p className="subtitle-text">
              Tempor incididunt ut labore et dolordedd maagna aliqua. Ut enim ad
              minim veniam, quis nostruddd exercitation ullamco{" "}
            </p>
          </div>
          {/* <div
            className="uk-grid uk-grid-match uk-grid-width-1-1 uk-grid-width-medium-1-3 tm-grid-height-250"
            data-uk-scrollspy="cls: uk-animation-slide-right-medium; target: > *; delay: 150"
            uk-grid
          >
            <div className="uk-row-first"></div>
            <div className="uk-grid-margin">
              <h3 className="uk-text-primary uk-margin-small-bottom">
                RESEARCH
              </h3>
              {/* <h1 className="uk-margin-remove-top">Innovation in your hands.</h1>
              <input
                type="text"
                className="uk-input uk-margin-remove-top  uk-form-large"
                autoComplete="off"
                name="url"
                placeholder="URL 붙여넣기"
              />
              <p className="subtitle-text uk-visible@s">
                Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco{" "}
              </p>
            </div>
          </div> */}
        </div>
        {/* <!-- /TOP CONTAINER --> */}
        {/* <!-- TOP IMAGE --> */}
        <img
          src="https://source.unsplash.com/y5_mFlLMwJk/2000x1000"
          data-srcset="https://source.unsplash.com/y5_mFlLMwJk/640x700 640w,
                            https://source.unsplash.com/y5_mFlLMwJk/960x700 960w,
                            https://source.unsplash.com/y5_mFlLMwJk/1200x900 1200w,
                            https://source.unsplash.com/y5_mFlLMwJk/2000x1000 2000w"
          data-src="https://source.unsplash.com/y5_mFlLMwJk/1200x900"
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
};

export default AppLayout;
