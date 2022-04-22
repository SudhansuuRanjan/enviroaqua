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
        <div className="head">
          <div className="logo">
            EnviroAqua
          </div>
          <div className="hamburger">
            <i className="fas fa-bars fa-2x"></i>
          </div>
          <div className="box-head-middle">
            <table>
              <td>
                <div className="dropdown">
                  {" "}
                  <button className="drop-btn"> Home</button>
                  <div className="dropdown-content">
                    <Link to="/dashboard" className="Link">Dashboard</Link>
                    <Link to="/plots" className="Link">Plots</Link>
                    <Link to="/main" className="Link">Main</Link>
                    
                  </div>
                </div>
              </td>
              <td>
                <div className="dropdown">
                  {" "}
                  <button className="drop-btn">About</button>
                  {/* <div className="dropdown-content">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                  </div> */}
                </div>
              </td>
              <td>
                <div className="dropdown">
                  {" "}
                  <button className="drop-btn"> Documentation</button>
                  <div className="dropdown-content">
                    <a href="#">Getting started</a>
                    <a href="#">Why Enviroaqua?</a>
                    <a href="#">How to use?</a>
                  </div>
                </div>
              </td>
            </table>
          </div>
          <div className="buy-button">
            <button className="buyy-button"><Link to="/main" className="link">Get Started</Link></button>
          </div>
        </div>

        <div className="mobile-head visible">
          <ul>
            <li className="red-link">Organisation</li>
            <li>Agency</li>
            <li>Business</li>
            <li>Startup</li>
            <li>
              <div className="hr"></div>
            </li>
            <li className="red-link">Secondary</li>
            <li>Article-page</li>
            <li>Blog Grid</li>
            <li>About</li>
            <li>Get in Touch</li>
            <li>
              <div className="hr"></div>
            </li>
            <li className="red-link">Documentation</li>
            <li>Getting Started</li>
            <li>Changelog</li>
            <li>Components</li>
            <li>
              <div className="hr"></div>
            </li>
          </ul>
          <button className="buyy-button">Buy now</button>
        </div>
      </header>
      <div className="space"></div>
      <div className="page1">
        <div className="page1-left">
          <h1 className="headline">
Go sustainable  <span className="red-text"> to water for us.</span>
          </h1>
          <p className="headline-intro">
            Enviroaqua ensures proper distribution of water available on earth for the usage by each and every person in present time as well as in future.
          </p>

          <div className="buttons">
            <div>
              <button className="purchase">Dashboard</button>
            </div>
            <div>
              <button className="learn-more">Learn more</button>
            </div>
          </div>
        </div>
        <div className="page1-right">
          <img src="https://pbs.twimg.com/media/ExFYMRSWYAkLhWS.jpg" alt="" className="focus" />
        </div>
      </div>

      <main className="page2">
        <div className="cards ">
          <div className="page2-item card1">
            <img src="https://static.pbslearningmedia.org/media/media_files/cedef81d-b17f-4d94-8fdf-a24517fca3c3/48e01d8a-6ba2-4e5e-a6c5-be65064f593a.jpg" alt="" className="svg1" />
            <h2 className="text-line1">Need of Enviroaqua</h2>
            <h3 className="text-line2">
            Responsible water use is essential in the current situation.As our core idea is about data, so let us look at data :).Fresh water withdrawals have increased six-fold since the beginning of the 20th century, raising the question of whether we are using the water that we have sustainably.
            </h3>
          </div>
          <div className="page2-item card2">
            <img src="https://cdn2.vectorstock.com/i/1000x1000/27/91/police-or-ambulance-red-flasher-siren-alarm-icon-vector-8102791.jpg" alt="" className="svg1" />
            <h2 className="text-line1">What is Enviroaqua</h2>
            <h3 className="text-line2">
             Enviroaqua is an initiative to implement what we are taught a thousands time theoritically i.e sustainable usage of water, water wastage , water conservation and what not.On analyzing data on water usage, we get to know where usage of water limit exceeds,automated warning is generated.
            </h3>
          </div>
          <div className="page2-item card3">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi8U8SNmOMPeO5kz3kHE42-4CZN75YHTL4TA&usqp=CAU" alt="" className="svg1" />
            <h2 className="text-line1">Show Support</h2>
            <h3 className="text-line2">
             We are obliged to join our hands for betterment of enviromental issues otherwise we can't predict the misrey on earth. 
            </h3>
          </div>
        </div>

        <div className="experience">
          <div className="absurd">
            {" "}
            <img src="https://images.newindianexpress.com/uploads/user/imagelibrary/2020/11/7/w900X450/TAP1.jpg?w=400&dpr=2.6" alt="" className="demo" />
          </div>
          <div className="exp-right">
            <h3 className="exp-head">
              Our Acheivements
            </h3>
            <h3 className="headline-intro demo-text1">
             We are appreciated by corporations and various communities for our work. Many state government has sponsored us for our contribution for betterment of our environment.
            </h3>
            <h3 className="headline-intro demo-text2">
              We have saved 100 gallons of water to be wasted till now.
            </h3>
          </div>
        </div>

        <div className="purchase-red">
          <div className="purchase-text">
            <h1 className="purchase-h1">Let us make our earth Blue again</h1>
            <h3 className="purchase-h3">
             Increasing scarcity of water have raised question on Earth being called "Blue"
            </h3>
          </div>
          <div className="purchase-buttt">
            <button className="final-purchase">Dashboard!</button>
          </div>
        </div>

        <div className="purchase-black">
          <h2 className="textt1">Water, Water Not Everywhere</h2>
          
        </div>

        <div className="purchase-box">
          <div className="space2"></div>
          {/* <h1 className="textt4">$5</h1> */}
          <h4 className="textt3">Wanna Save Water?</h4>
          <hr noshade />
          <h4 className="textt3">If not ,Why not</h4>
           <h4 class="textt3">Do not be selfish. Join us for good cause.</h4>
          <form >
            <label htmlFor="email" className="textt3"></label><br/>
            <input type="email" name="email" id="email" placeholder="Enter Your Email ID" />
          </form>
          <button className="final-purchase">Subscribe</button>
        </div>

        <div className="social">
          <div>
            <i className="fab fa-facebook fa-2x"></i>
          </div>
          <div>
            <i className="fab fa-instagram fa-2x"></i>
          </div>
          <div>
            <i className="fab fa-twitter fa-2x"></i>
          </div>
          <div>
            <i className="fab fa-github fa-2x"></i>
          </div>
          <div>
            <i className="fab fa-slack fa-2x"></i>
          </div>
        </div>
        <div className="foot">© 2022 Enviroaqua, Inc. All rights reserved.</div>
      </main>
    </div>
  );
};

export default LandingPage;
