import React from 'react';

const Nav = () => {
    return (
        <nav role="navigation" style={{padding:0,margin:0}} class="navbar navbar-inverse navbar-static-top">
            <div class="container-fluid">
              <div>
                <button class="navbar-toggle collapsed" type="button" data-toggle="collapse" data-target="#bs-navbar-collapse" aria-expanded="false">
                  <span class="sr-only">Toggle navigation</span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </button>
              </div>
              <div class="collapse navbar-collapse" id="bs-navbar-collapse">
                <ul style={{padding:0,margin:0}} class="nav navbar-nav navbar-right top-nav">
                  <li class="choice">
                    <a href="http://tripsit.me/about">About</a>
                  </li>
                  <li class="choice">
                    <a href="http://tripsit.me/contact-us">Contact Us</a>
                  </li>
                  <li class="choice">
                    <a href="http://drugs.tripsit.me/">Factsheets</a>
                  </li>
                  <li class="choice">
                    <a href="http://wiki.tripsit.me/">Wiki</a>
                  </li>
                  <li class="choice">
                    <a href="https://play.google.com/store/apps/details?id=me.tripsit.tripmobile">Mobile App</a>
                  </li>
                  <li class="choice">
                    <a href="http://chat.tripsit.me/">Chat</a>
                  </li>
                  <li class="choice dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Tools
                      <span class="caret"></span>
                    </a>
                    <ul class="dropdown-menu">
                      <li class="choice">
                        <a href="http://benzos.tripsit.me/">Benzodiazepine Converter</a>
                      </li>
                      <li class="choice">
                        <a href="http://dxm.tripsit.me/">DXM Calculator</a>
                      </li>
                      <li class="choice">
                        <a href="http://volume.tripsit.me/">Volumetric Dosing</a>
                      </li>
                    </ul>
                  </li>
                  <li class="choice dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Social Media
                      <span class="caret"></span>
                    </a>
                    <ul class="dropdown-menu">
                      <li class="choice">
                        <a href="https://www.facebook.com/tripsitme/">Facebook</a>
                      </li>
                      <li class="choice">
                        <a href="http://reddit.com/r/tripsit/">Reddit</a>
                      </li>
                      <li class="choice">
                        <a href="https://twitter.com/teamtripsit">Twitter</a>
                      </li>
                    </ul>
                  </li>
                  <li class="choice">
                    <a href="http://tripsit.me/donate/">Donate</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
    );
}

export default Nav;