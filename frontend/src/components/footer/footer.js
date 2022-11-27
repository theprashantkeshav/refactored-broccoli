import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="page-footer font-small  ">
      <div className="container">
        <div className="row">
          <div className="col-md-12 py-5">
            <div className="mb-5 flex-center">
              <a
                className="ins-ic"
                href="https://www.instagram.com/troppers_ssb/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x">
                  {" "}
                </i>
              </a>

              {/* <a
                className="fb-ic"
                href="https://www.facebook.com/Troppers-104945798376354"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x">
                  {" "}
                </i>
              </a> */}

              {/* <a
                className="tw-ic"
                href="https://twitter.com/troppers6"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x">
                  {" "}
                </i>
              </a> */}
              <a className="gplus-ic" href="troppers.contact@gmail.com">
                <i className="fas fa-envelope fa-lg white-text mr-md-5 mr-3 fa-2x">
                  {" "}
                </i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-copyright text-center py-3">
        © {new Date().getFullYear()} Copyright:
        <a href="#!"> troppers.com</a>
      </div>
    </footer>
  );
};

export default Footer;
