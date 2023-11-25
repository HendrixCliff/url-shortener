 import React from "react"


  export default function Hero() {
    return (
 <div>
    <div className="base-level">
        <h1>
        Optimize Your Online Experience with our <br />
        Advanced <span>URL Shortening</span> Solution
        </h1>
        <img className="vector3" src="./src/assets/Vector 3.png" />
    </div>
    <div className="paragh">
        <p>
        Personalize your shortened URLs to align with our brand identity. Utilize
        custom slugs,
        <br /> branded links, and domain customization option to reinforce your
        brand presence and <br /> enhance user engagement.
        </p>
    </div>
    <ul className="container">
        <li>
        <a className="a-hero" href="#">
            Sign up
        </a>
        </li>
        <li>
        <a className="x-contain" href="#">
            Learn more
        </a>
        </li>
    </ul>
    <div className="container-2">
        <div className="link-icon">
            <img src="./src/assets/link-2.png" alt="link frame" />
            <img src="./src/assets/link-2.png" alt="link frame" />
            <img src="./src/assets/link-2.png" alt="link frame" />
            <div className="operator">
                <img src="./src/assets/Line 7.png" alt="Arrow head" />
                <img src="./src/assets/link-2.png" alt="link frame" />
            </div>
        </div>
        <p>Seamlessly transform your long URLs into concise and shareable links with just few clicks. </p>
    </div>
  <img className="oval-vect" src="./src/assets/Vector 2 (1).png" alt="oval shape" />
  <div className="ellipse" />
  <div className="container-3">
    <div className="commit">
      <h2>
        One Stop. <br /> Four <span> Possibilties.</span>
      </h2>
    </div>
    <div className="sub-container-3">
      <div className="possible">
        <h3>3M</h3>
        <p>
          <small>Active users</small>
        </p>
      </div>
      <div className="possible">
        <h3>60M</h3>
        <p>
          <small>
            Links &amp; QR <br /> codes created
          </small>
        </p>
      </div>
      <div className="possible">
        <h3>1B</h3>
        <p>
          <small>
            Clicked &amp; Scanned <br /> connections
          </small>
        </p>
      </div>
      <div className="possible">
        <h3>300K</h3>
        <p>
          <small>App integrations</small>
        </p>
      </div>
    </div>
  </div>
</div>
    )
  }