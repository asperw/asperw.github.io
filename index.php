<!doctype html>

<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="description" content="Looking for full time software/hardware positions.">
  <title>Hello | William Asper</title>
  <link rel="stylesheet" href="styles.css" type="text/css" />
</head>

<body id="body">
  <?php echo "test";?>
  <header>
    <h1 id="home">William Asper</h1>
    <div>
      <a href="https://github.com/asperw" target="_blank">
        <img src="images/github.png" width="32px" height="32px" alt="Link to GitHub profile">
      </a>
      <a href="https://linkedin.com/in/asperw" target="_blank">
        <img src="images/In-White-128px-R.png" width="32px" height="32px" alt="Link to LinkedIn profile">
      </a>
    </div>
    <!--brought to you by raspberry pi :)-->
  </header>

  <div class="info">
    <div id="tabContainer">
      <div id="tabs">
        <ul>
          <li id="homeTab"><a href="#tabPane1">Hi</a></li>
          <li id="educationTab"><a href="#tabPane2">Education</a></li>
          <li id="projectsTab"><a href="#tabPane3">Projects</a></li>
          <li id="workTab"><a href="#tabPane4">Resume</a></li>
          <!--<li id="tldrTab"><a href="#tabPane5">tl;dr</a></li>-->
        </ul>
      </div>
      <div id="containers">
        <div id="tabPane1">
          <span class="two">
            <span class="pfp">
              <img src="images/pfp.jpg" alt="Profile.">
            </span>
            <span class="bio">
              <h3>Hello World</h3>
              <p>I am a graduating computer engineering major with a concentration in robotics and control at the
                University of California, Santa Cruz. I am currently searching for full-time positions.
              </p>
            </span>
          </span>
        </div>
        <div id="tabPane2">
          <h3>Education</h3>
          <!--<p>Current student at the University of California, Santa Cruz. (UCSC)</p>-->
          <h4>Relevant courses completed at UCSC:</h4>
          <article class="coursework">
            <ul class="courses">
              <li>CMPS 101 Algorithms and Abstract Data Types</li>
              <li>CMPS 12B/L Intro to Data Structures</li>
              <li>CMPE 12/L Computer Systems and Assembly Language</li>
              <li>CMPE 13/L Computer Systems and C Programming</li>
              <li>CMPE 121/L Microprocessor System Design</li>
              <li>CMPS 182 Introduction to Database Management Systems</li>
              <li>CMPS 12A/L Intro to Programming (Accelerated)</li>
              <li>CMPS 5P Intro to Programming</li>
              <li>CMPE 8/L Robot Automation: Intelligence through Feedback Control</li>
              <li>CMPE 100/L Logic Design</li>
              <li>EE 103/L Signals and Systems</li>
              <li>CSE 138 Distributed Systems: File Sharing</li>
              <li>CMPE 107 Probability and Statistics for Engineers</li>
              <li>EE 101/L Introduciton to Electronic Circuits</li>
              <li>CMPE 110 Computer Architecture</li>
              <li>CMPE 16 Applied Discrete Mathematics</li>
              <li>CMPE 216 Bio-inspired Locomotion</li>
              <li>CMPE 167 Sensing and Sensor Technologies</li>
              <li>ECE 141 Feedback Control Systems</li>
              <li>ECE 9 Statics and Mechanics of Materials</li>
              <li>CSE 195 Senior Thesis Research</li>
            </ul>
            <ul class="languages">
              <li>C, Java</li>
              <li>C, Java</li>
              <li>C</li>
              <li>C</li>
              <li>C</li>
              <li>C, SQL</li>
              <li>Java</li>
              <li>Python</li>
              <li>Matlab, Spin</li>
              <li>Verilog</li>
              <li>Matlab</li>
              <li>Go</li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </article>
          <hr>
          <h4>Relevant courses in progress at UCSC:</h4>
          <article class="coursework">
            <ul class="courses">
              <li>Just graduated!</li>
            </ul>
            <ul class="languages">
              <li>:)</li>
            </ul>
          </article>
          <hr>
          <h4>Extra Curriculars:</h4>
          <article class="coursework">
            <ul class="extras">
              <li>
                <a href="https://embedded.fm/" target="_blank">
                  <img src="images/embedded-logo.png" height="50px" alt="Embedded FM">
                </a>
              </li>
            </ul>
          </article>
        </div>
        <div id="tabPane4">
          <h3>Projects</h3>
          <h4>Stuff I'm working on.</h4>
          <article class="projects">
            <!--project entry start-->
            <span>
              <a href="projects/webserver/webserver.html"><img src="projects/webserver/images/pi.jpg" width="250"
                  height="250" alt="Web server."></a>
              <img id="icon" src="projects/processing/images/rpi.jpg" width="50" height="50" alt="Raspberry pi.">
              <p>Setting up a web server on Raspberry Pi with Caddy 2, port forwarded to the internet</p>
            </span>
            <!--project entry end-->
            <span><a href="projects/headless/headless.html"><img src="projects/headless/images/wip.JPG" width="250"
                  height="250" alt="Headless raspberry pi."></a>
              <img id="icon" src="projects/processing/images/rpi.jpg" width="50" height="50" alt="Raspberry pi.">
              <p>Setting up a headless Raspberry Pi without connecting a keyboard, mouse, or display to the Pi</p>
            </span>
            <span><a href="projects/processing/earth.html"><img src="projects/processing/images/earth.JPG" width="250"
                  height="250" alt="Earth and the moon."></a>
              <img id="icon" src="projects/processing/images/p5js.png" width="50" height="50" alt="P 5 dot j s.">
              <p>A view of the Earth and the moon to scale</p>
            </span>
            <span><a href="projects/processing/jupiter.html"><img src="projects/processing/images/jupiter.JPG"
                  width="250" height="250" alt="Jupiter and its first four moons."></a>
              <img id="icon" src="projects/processing/images/p5js.png" width="50" height="50" alt="P 5 dot j s.">
              <p>Jupiter and the four Galilean moons (Scaled for visibility). Earth to scale</p>
            </span>
            <span><a href="projects/processing/moon.html"><img src="projects/processing/images/moon.JPG" width="250"
                  height="250" alt="Earth from the moon's perspective."></a>
              <img id="icon" src="projects/processing/images/p5js.png" width="50" height="50" alt="P five dot j s.">
              <p>A sketch showing what the Earth might look like from just past the dark side of the moon
              </p>
            </span>
            <span><img src="projects/processing/images/website.JPG" width="250" height="250" alt="This website.">
              <img id="icon" src="projects/processing/images/code.jpg" width="50" height="50" alt="Code.">
              <p>This built-from-scratch website</p>
            </span>
            <span><img src="projects/processing/images/terrain.JPG" width="250" height="250"
                alt="Terrain from perlin noise.">
              <img id="icon" src="projects/processing/images/processing3.png" width="50" height="50"
                alt="Processing three.">
              <p>Using perlin noise to generate a random "terrain"</p>
            </span>
            <span><img src="projects/processing/images/hexagons.JPG" width="250" height="250"
                alt="Drawing a pattern of hexagons.">
              <img id="icon" src="projects/processing/images/processing3.png" width="50" height="50"
                alt="Processing three.">
              <p>Simple sketch to draw a pattern of hexagons. Modified for the background of this website
              </p>
            </span>
            <span><img src="projects/processing/images/wave.JPG" width="250" height="250"
                alt="Creating a standing wave.">
              <img id="icon" src="projects/processing/images/processing3.png" width="50" height="50"
                alt="Processing three.">
              <p>Simple sketch to create a standing wave from two transverse sine waves in opposite
                directions</p>
            </span>
          </article>
        </div>
        <div id="tabPane3">
          <iframe
            src="https://docs.google.com/viewer?srcid=1FS1YJyMRbbHh4D3jCmclYxLoQ2yDyKOE&pid=explorer&efh=false&a=v&chrome=false&embedded=true"
            width="100%" height="1100px" border:none></iframe>
        </div>
        <!--
                <div id="tabPane5">
                    <h3>tl;dr</h3>
                    <p>
                        I am a computer engineering major with a concentration in robotics
                        and control at the University of California, Santa Cruz.
                    </p>
                </div>
                -->
      </div>
    </div>
  </div>

  <footer>
    <script language="javascript" type="text/javascript" src="tabs.js"></script>
  </footer>

</body>

</html>
