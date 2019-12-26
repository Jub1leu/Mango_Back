import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default class Home extends React.Component {
  render() {
    return (
      <div
        className="container-fluid"
        style={{
          padding: "0"
        }}
      >
        <NavBar />

        {/* Bloco 1 - Intro */}
        <div
          className="container-fluid"
          style={{
            height: "100hv",
            width: "100wv"
          }}
        >
          <div className="row">
            <img
              src="https://expedicaopara.com.br/wp-content/uploads/2016/05/BelemP-22.jpg"
              className="img-fluid"
              alt=""
              style={{
                flex: "1"
              }}
            />
            <div
              className="col text-center"
              style={{
                color: "white",
                position: "absolute",
                paddingTop: "25%"
              }}
            >
              <h1 className="reponsive white-text font-weight-bold">ManGO</h1>
              <h6 className="reponsive white-text font-weight-bold">
                App de Mobilidade Urbaba
              </h6>
              <div>
                <button type="button" class="btn btn-outline-light">
                  Download
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bloco 2 */}

        <div
          className="container-fluid"
          style={{
            height: "600px",
            width: "100wv",
            backgroundColor: "yellow"
          }}
        >
          <div className="row justify-content-center">
            <div
              className="col text-center"
              style={{
                position: "absolute"
              }}
            >
              <p>
                <h1>Why is it so great?</h1>
                <text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </text>
              </p>

              <p>
                <h5>Imagem</h5>
              </p>
              <p>
                <h5>Safety</h5>
                <text>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit enim
                  ad minima veniam, quis nostrum exercitationem ullam.
                  Reprehenderit maiores aperiam assumenda deleniti hic.
                </text>
              </p>
              <p>
                <h5>Technology</h5>
                <text>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit enim
                  ad minima veniam, quis nostrum exercitationem ullam.
                  Reprehenderit maiores aperiam assumenda deleniti hic.
                </text>
              </p>
              <p>
                <h5>Finance</h5>
                <text>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit enim
                  ad minima veniam, quis nostrum exercitationem ullam.
                  Reprehenderit maiores aperiam assumenda deleniti hic.
                </text>
              </p>
            </div>
          </div>
        </div>

        {/* Bloco 3 */}

        <div
          className="container-fluid"
          style={{
            height: "600px",
            width: "100wv",
            backgroundColor: "gray"
          }}
        >
          <div class="container">
            <div class="row text-center">
              <p>
                <h1>Why is it so great?</h1>
                <text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </text>
              </p>

              <div class="col">
                <p>
                  <h6>Analytics</h6>
                  <text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam.
                  </text>
                </p>
              </div>

              <div class="col">
                <p>
                  <h6>Tutorials</h6>
                  <text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam.
                  </text>
                </p>
              </div>

              <div class="col">
                <p>
                  <h6>Support</h6>
                  <text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam.
                  </text>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bloco 3 */}

        <div
          className="container-fluid"
          style={{
            height: "100hv",
            width: "100wv",
            backgroundColor: "green"
          }}
        >
          <div class="container">
            <div class="row text-center">
              <p>
                <h1>International</h1>
                <text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </text>
              </p>

              <div class="col">
                <div className="row">
                  <div class="col">
                    <p>
                      <h6>International</h6>
                      <text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam.
                      </text>
                    </p>

                    <p>
                      <h6>Experimental</h6>
                      <text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam.
                      </text>
                    </p>

                    <p>
                      <h6>Relaxing</h6>
                      <text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam.
                      </text>
                    </p>
                  </div>
                </div>
              </div>

              <div class="col">
                <p>
                  <h6>Imagem</h6>
                </p>
              </div>

              <div class="col">
                <div className="row">
                  <div class="col">
                    <p>
                      <h6>Beloved</h6>
                      <text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam.
                      </text>
                    </p>

                    <p>
                      <h6>Rapid</h6>
                      <text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam.
                      </text>
                    </p>

                    <p>
                      <h6>Magical</h6>
                      <text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam.
                      </text>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
