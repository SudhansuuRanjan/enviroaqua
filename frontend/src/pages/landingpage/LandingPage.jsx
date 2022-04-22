import React from "react";
import "./LandingPage.css";
import { Link } from "react-router-dom"

const LandingPage = () => {

//   const menu = document.querySelector(".fa-bars");
//   const menuTray = document.querySelector(".mobile-head");
//   menu.addEventListener("click", () => {
//     menuTray.classList.toggle("visible");
//   });

  return (
    <div>
      <header>
        <div class="head">
          <div class="logo">
            EnviroAqua
          </div>
          <div class="hamburger">
            <i class="fas fa-bars fa-2x"></i>
          </div>
          <div class="box-head-middle">
            <table>
              <td>
                <div class="dropdown">
                  {" "}
                  <button class="drop-btn"> Home</button>
                  <div class="dropdown-content">
                    <Link to="/dashboard" className="Link">Dashboard</Link>
                    <Link to="/plots" className="Link">Plots</Link>
                    <Link to="/main" className="Link">Main</Link>
                    
                  </div>
                </div>
              </td>
              <td>
                <div class="dropdown">
                  {" "}
                  <button class="drop-btn">About</button>
                  {/* <div class="dropdown-content">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                  </div> */}
                </div>
              </td>
              <td>
                <div class="dropdown">
                  {" "}
                  <button class="drop-btn"> Documentation</button>
                  <div class="dropdown-content">
                    <a href="#">Getting started</a>
                    <a href="#">Why Enviroaqua?</a>
                    <a href="#">How to use?</a>
                  </div>
                </div>
              </td>
            </table>
          </div>
          <div class="buy-button">
            <button class="buyy-button">Get Started</button>
          </div>
        </div>

        <div class="mobile-head visible">
          <ul>
            <li class="red-link">Organisation</li>
            <li>Agency</li>
            <li>Business</li>
            <li>Startup</li>
            <li>
              <div class="hr"></div>
            </li>
            <li class="red-link">Secondary</li>
            <li>Article-page</li>
            <li>Blog Grid</li>
            <li>About</li>
            <li>Get in Touch</li>
            <li>
              <div class="hr"></div>
            </li>
            <li class="red-link">Documentation</li>
            <li>Getting Started</li>
            <li>Changelog</li>
            <li>Components</li>
            <li>
              <div class="hr"></div>
            </li>
          </ul>
          <button class="buyy-button">Buy now</button>
        </div>
      </header>
      <div class="space"></div>
      <div class="page1">
        <div class="page1-left">
          <h1 class="headline">
Go sustainable  <span class="red-text"> to water for us.</span>
          </h1>
          <p class="headline-intro">
            Enviroaqua ensures proper distribution of water available on earth for the usage by each and every person in present time as well as in future.
          </p>

          <div class="buttons">
            <div>
              <button class="purchase">Dashboard</button>
            </div>
            <div>
              <button class="learn-more">Learn more</button>
            </div>
          </div>
        </div>
        <div class="page1-right">
          <img src="img/dev-focus.svg" alt="" class="focus" />
        </div>
      </div>

      <main class="page2">
        <div class="cards ">
          <div class="page2-item card1">
            <img src="img/creative-draft.svg" alt="" class="svg1" />
            <h2 class="text-line1">Need of Enviroaqua</h2>
            <h3 class="text-line2">
            Responsible water use is essential in the current situation.As our core idea is about data, so let us look at data :).Fresh water withdrawals have increased six-fold since the beginning of the 20th century, raising the question of whether we are using the water that we have sustainably.
            </h3>
          </div>
          <div class="page2-item card2">
            <img src="img/accept-tasks.svg" alt="" class="svg1" />
            <h2 class="text-line1">What is Enviroaqua</h2>
            <h3 class="text-line2">
             Enviroaqua is an initiative to implement what we are taught a thousands time theoritically i.e sustainable usage of water, water wastage , water conservation and what not.On analyzing data on water usage, we get to know where usage of water limit exceeds,automated warning is generated.
            </h3>
          </div>
          <div class="page2-item card3">
            <img src="img/growth-curve.svg" alt="" class="svg1" />
            <h2 class="text-line1">Show Support</h2>
            <h3 class="text-line2">
             We are obliged to join our hands for betterment of enviromental issues otherwise we can't predict the misrey on earth. 
            </h3>
          </div>
        </div>

        <div class="experience">
          <div class="absurd">
            {" "}
            <img src="img/experience-tailmars-design.svg" alt="" class="demo" />
          </div>
          <div class="exp-right">
            <h3 class="exp-head">
              Our Acheivements
            </h3>
            <h3 class="headline-intro demo-text1">
             We are appreciated by corporations and various communities for our work. Many state government has sponsored us for our contribution for betterment of our environment.
            </h3>
            <h3 class="headline-intro demo-text2">
              We have saved 100 gallons of water to be wasted till now.
            </h3>
          </div>
        </div>

        <div class="purchase-red">
          <div class="purchase-text">
            <h1 class="purchase-h1">Let us make our earth Blue again</h1>
            <h3 class="purchase-h3">
             Increasing scarcity of water have raised question on Earth being called "Blue"
            </h3>
          </div>
          <div class="purchase-buttt">
            <button class="final-purchase">Dashboard!</button>
          </div>
        </div>

        <div class="purchase-black">
          <h2 class="textt1">Simple pricing</h2>
          <h4 class="textt2">
            For a one-time purchase, you'll get access to lifetime releases of
            landing pages and components as we advance our theme.
          </h4>
        </div>

        <div class="purchase-box">
          <div class="space2"></div>
          {/* <h1 class="textt4">$5</h1> */}
          <h4 class="textt3">Wanna Save Water?</h4>
          <hr noshade />
          <h4 class="textt3">Use for personal or your clients</h4>
          <h4 class="textt3">Access to updates and future realeases</h4>
          <button class="final-purchase">Get Started</button>
        </div>

        <div class="social">
          <div>
            <i class="fab fa-facebook fa-2x"></i>
          </div>
          <div>
            <i class="fab fa-instagram fa-2x"></i>
          </div>
          <div>
            <i class="fab fa-twitter fa-2x"></i>
          </div>
          <div>
            <i class="fab fa-github fa-2x"></i>
          </div>
          <div>
            <i class="fab fa-slack fa-2x"></i>
          </div>
        </div>
        <div class="foot">© 2022 Enviroaqua, Inc. All rights reserved.</div>
      </main>
    </div>
  );
};

export default LandingPage;
