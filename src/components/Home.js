import React from "react";
import HeroImage from "./hero-section.png"; // Update the path as neede
import CountUp from "react-countup";
function Home() {
  const counters = [
    { value: 500, label: "Projects Delivered Expertise in Industrial Solutions" },
    { value: 1000, label: "Happy ClientsExpertise in Industrial Solutions " },
    { value: 20, label: "Years of Expertise in Industrial Solutions" },
    { value: 100, label: "Skilled Professionals Driving Innovation." },
  ];
  return (
    <>
      {/* Navbar */}
      <nav
        className="navbar navbar-expand-lg"
        style={{ background: "linear-gradient(to right, #3A7BD5, #3A6073)" }}
      >
        <div className="container">
          <a
            className="navbar-brand"
            href="#"
            style={{
              fontWeight: "bold",
              fontSize: "24px",
              color: "#848282",
              backgroundColor: "white",
              padding: "5px 25px",
              borderRadius: "5px",
            }}
          >
            LOGO
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link text-white" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">Products</a>
              </li>
              <li className="nav-item">
                <a
                  className="btn btn-primary text-white"
                  href="#"
                  style={{ borderRadius: "10px", fontWeight: "bold", padding: "6px 15px" }}
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div style={{
  position: "relative",
  width: "100%",
  height: "100vh",
  display: "flex",
  alignItems: "center",
}}>
  {/* Background Image with Overlay */}
  <div style={{
    position: "absolute",
    inset: 0,
    backgroundImage: "url('./images/153.png')", /* Replace with actual image path */
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}>
  </div>

  <div style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    padding: "20px 50px", /* Add padding for better spacing on smaller screens */
    maxWidth: "700px", /* Set a maximum width for the content area */
    margin: "0 auto", /* Center the content horizontally */
  }}>
    <span style={{ fontSize: "calc(2rem + 2vw)", fontWeight: "bolder", color: "#000000", marginBottom: "-47px" }}>Powering</span>
    <span style={{ fontSize: "calc(2rem + 2vw)", fontWeight: "bolder", color: "#000000", marginBottom: "-47px" }}>Industries</span>
    <span style={{ fontSize: "calc(2rem + 2vw)", fontWeight: "bolder", color: "#000000", marginBottom: "-47px" }}>With</span>
    <span style={{ fontSize: "calc(2rem + 2vw)", fontWeight: "bolder", color: "#000000", marginBottom: "-47px" }}>Precision</span>
    <span style={{ fontSize: "calc(2rem + 2vw)", fontWeight: "bolder", color: "#000000" }}>Reliability</span>
    <div style={{ width: "100%" }}>
      <p>Delivering cutting-edge electrical solutions designed to enhance efficiency and ensure unwavering reliability in demanding industrial environments.</p>
    </div>
  </div>

  {/* Right Side Images */}
  <div style={{
    display: "flex",
    flexWrap: "wrap", /* Allow images to wrap on smaller screens */
    width: "calc(33.333% - 1px)", /* Adjust width as needed */
    justifyContent: "flex-end", /* Align images to the right */
  }}>
    <div style={{ position: "relative" }}> <div style={{ position: "absolute", left: "100px", top: "70px" }}> <img src="./images/15.png" height="570px" width="570px" alt="Image 1" /> </div> <div style={{ marginLeft: "220px", top: "150px" }}> <img src="./images/16.png" height="600px" width="450px" alt="Image 2" /> </div> </div>
  </div>
</div>


{/* Counter Section */}
<div class="container text-center my-5">
  <div class="row">
    {counters.map((counter, index) => (
      <div key={index} class="col-md-3">
        <div class="card p-4 shadow-sm bg-primary text-white rounded">
          <h2>
            <CountUp end={counter.value} duration={3} />+
          </h2>
          <p>{counter.label}</p>
        </div>
      </div>
    ))}
  </div>
</div>

      {/* About Section */}
      <section
        style={{
          background: "url('/images/11.png') no-repeat center center/cover",
          padding: "60px 0",
          color: "black",
          textAlign: "left",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            {/* Left Image Section */}
            <div className="col-md-6">
              <img
                src="/images/130.png"
                alt="Engineer working"
                style={{
                  width: "100%",
                  borderRadius: "10px",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
                }}
              />
            </div>

            {/* Right Text Section */}
            <div className="col-md-6">
              <h2 style={{ fontWeight: "bold", fontSize: "32px" }}>About Jash Corporation</h2>
              <p style={{ fontSize: "16px", lineHeight: "1.6", marginTop: "10px" }}>
                Jash Corporation is your trusted partner for premium industrial electrical solutions.
                Our top products are engineered for reliability, precision, and efficiency, meeting
                the toughest industrial challenges.
                <br />
                With a legacy of expertise, we deliver advanced electrical systems that empower
                businesses worldwide. From innovative circuitry to robust power solutions, we cater to
                the evolving needs of modern industries.
              </p>

              {/* Text and Image Side by Side */}
              <div style={{ display: "flex", alignItems: "center", marginTop: "80px" }}>
                <img
                  src="/images/electronics-engineer.png"
                  alt="Worker in industry"
                  style={{
                    width: "180px",
                    height: "auto",
                    borderRadius: "10px",
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
                    marginLeft: "50px",
                  }}
                />
                <p style={{ marginLeft: "25px" }}>
                  At Jash Corporation, quality and innovation are our benchmarks. Join us in building<br />
                  solutions that drive industrial excellence and shape a brighter, electrified future.
                </p>
              </div>

              {/* More Button */}
              <div style={{ textAlign: "left", marginTop: "20px" }}>
                <button
                  style={{
                    backgroundColor: "#007bff",
                    color: "white",
                    padding: "12px 24px",
                    fontSize: "18px",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    marginLeft: "50%"
                  }}
                >
                  More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div>
        {/* Banner */}
        <div
          style={{
            background: "linear-gradient(to right, #3A7BD5, #3A6073)",
            color: "white",
            textAlign: "center",
            padding: "10px",
            fontSize: "16px",
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span style={{ margin: "0 8px" }}>⭐</span>
          <span>
            Our Happy Customers Would Love to Buy Again! | 98% Customer
            Satisfaction Rate | Trusted by Industry Leaders
          </span>
          <span style={{ margin: "0 8px" }}>⭐</span>
        </div>

      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "40px" }}>
        <h2 style={{ fontSize: "2.5em", marginBottom: "20px" }}>We Care About Our Customers Experience</h2>
        <div style={{ display: "flex", justifyContent: "space-between", width: "80%", gap: "20px" }}>

          {/* Testimonial 1 */}
          <div
            style={{
              backgroundColor: "#f9f9f9",
              padding: "20px",
              width: "300px",
              borderRadius: "8px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              textAlign: "center",
            }}
          >
            <img
              src="./images/1.png"
              alt="Karia Lynn"
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                marginBottom: "10px",
              }}
            />
            <h3 style={{ fontSize: "1.2em", marginBottom: "10px" }}>Karia Lynn</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div style={{ margin: "10px 0" }}>★★☆☆☆</div>
          </div>

          {/* Testimonial 2 */}
          <div
            style={{
              backgroundColor: "#f9f9f9",
              padding: "20px",
              width: "300px",
              borderRadius: "8px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              textAlign: "center",
            }}
          >
            <img
              src="./images/2.png"
              alt="John Doe"
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                marginBottom: "10px",
              }}
            />
            <h3 style={{ fontSize: "1.2em", marginBottom: "10px" }}>John Doe</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div style={{ margin: "10px 0" }}>★★★☆☆</div>
          </div>

          {/* Testimonial 3 */}
          <div
            style={{
              backgroundColor: "#f9f9f9",
              padding: "20px",
              width: "300px",
              borderRadius: "8px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              textAlign: "center",
            }}
          >
            <img
              src="./images/3.png"
              alt="Jane Smith"
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                marginBottom: "10px",
              }}
            />
            <h3 style={{ fontSize: "1.2em", marginBottom: "10px" }}>Jane Smith</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div style={{ margin: "10px 0" }}>★☆☆☆☆</div>
          </div>

        </div>
      </div>


      {/* Banner */}
      <div
        style={{
          background: "linear-gradient(to right, #3A7BD5, #3A6073)",
          color: "white",
          textAlign: "center",
          padding: "10px",
          fontSize: "16px",
          fontWeight: "bold",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "25px"
        }}
      >
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "60px 20px",
          maxWidth: "1500px",
          margin: "auto",
          gap: "40px",
          flexWrap: "wrap",
        }}
      >
        {/* Left Side - Image */}
        <div
          style={{
            flex: "1",
            position: "relative",
            clipPath: "polygon(0 0, 85% 0, 100% 100%, 0% 100%)",

            minWidth: "350px",
          }}
        >
          <img
            src="./images/4.png"
            alt="Worker"
            style={{
              width: "532.48px",
              height: "628px",
              objectFit: "cover",

            }}
          />
        </div>

        {/* Right Side - Content */}
        <div
          style={{
            flex: "2",
            textAlign: "left",
            minWidth: "350px",
          }}
        >
          {/* Heading */}
          <h2
            style={{
              fontSize: "3.7em",
              fontWeight: "bold",
              position: "relative",
              display: "inline-block",
              marginBottom: "30px",
              padding: "10px 0",
            }}
          >
            <span
              style={{
                backgroundColor: "#DDE5FF",
                position: "absolute",
                left: "-10px",
                top: "10px",
                width: "110%",
                height: "50%",
                zIndex: "-1",
              }}
            ></span>
            Our Products
          </h2>

          {/* Products Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "20px",
              marginTop: "170px"
            }}
          >
            {/* Product List */}
            {[
              {
                id: 1,
                text: "High-performance industrial machinery for manufacturing needs",
                img: "./images/5.png",
              },
              {
                id: 2,
                text: "Premium manufacturing equipment for industrial manufacturing needs",
                img: "./images/6.png",
              },
              {
                id: 3,
                text: "Durable heavy-duty tools for industrial operations manufacturing needs",
                img: "./images/7.png",
              },
              {
                id: 4,
                text: "High-precision instruments for accurate measurements manufacturing needs",
                img: "./images/8.png",
              },
            ].map((product) => (
              <div key={product.id} style={{ textAlign: "center", padding: "15px" }}>
                <p style={{ marginBottom: "10px", fontSize: "1rem" }}>{product.text}</p>
                <img
                  src={product.img}
                  alt={`Product ${product.id}`}
                  style={{
                    width: "100%",
                    borderRadius: "8px",
                    marginBottom: "10px",
                  }}
                />
                <button
                  style={{
                    backgroundColor: "#0066FF",
                    color: "white",
                    border: "none",
                    padding: "10px 20px",
                    borderRadius: "5px",
                    cursor: "pointer",
                    fontWeight: "bold",
                  }}
                >
                  Get Quote
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Banner */}
      <div
        style={{
          background: "linear-gradient(to right, #3A7BD5, #3A6073)",
          color: "white",
          textAlign: "center",
          padding: "10px",
          fontSize: "16px",
          fontWeight: "bold",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
      </div>
      <div className="container my-5">
        {/* Contact Us Header */}
        <div className="row my-5 align-items-center">
          {/* Left Section - Contact Details */}
          <div className="col-md-6 order-md-1">
            <div className="text-center contactus">
              <h1 className="display-5 fw-bold">Contact Us</h1>
              <p className="text-muted">
                Get in touch with Jash Corporation to explore how we can support your goals with precision-engineered solutions.
              </p>
            </div>

            {/* Address and Questions Sections */}
            <div className="row g-4 align-items-center mt-4">
              {/* Address Section */}
              <div className="col-md-6 d-flex justify-content-start">
                <div className="d-flex align-items-start" style={{ maxWidth: "400px" }}>
                  <img src="./images/10.png" alt="Visit Us" className="me-3" style={{ width: "50px" }} />
                  <div>
                    <h5 className="fw-bold">Visit Us</h5>
                    <p className="mb-1">Sumer Nagar, Building</p>
                    <p className="mb-1">NO.1, S.V.Road, Borivali West</p>
                    <p>Mumbai 400092</p>
                  </div>
                </div>
              </div>

              {/* Questions Section */}
              <div className="col-md-6 d-flex justify-content-start">
                <div className="d-flex flex-column" style={{ maxWidth: "400px" }}>
                  <div className="d-flex align-items-start mb-3">
                    <img src="./images/12.png" alt="Call Us" className="me-3" style={{ width: "50px" }} />
                    <div>
                      <h5 className="fw-bold">Have Any Questions?</h5>
                      <p>+91 98201 27073</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-start">
                    <img src="./images/9.png" alt="Mail Us" className="me-3" style={{ width: "50px" }} />
                    <div>
                      <h5 className="fw-bold">Mail Us</h5>
                      <p>jashcorporation@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className="col-md-6 order-md-2">
            <div className="p-4 shadow rounded bg-light">
              <h4 className="text-center mb-4">Send Us a Message</h4>
              <form>
                <div className="row mb-3">
                  <div className="col">
                    <input type="text" className="form-control" placeholder="Name" required />
                  </div>
                  <div className="col">
                    <input type="text" className="form-control" placeholder="Phone" required />
                  </div>
                </div>
                <div className="mb-3">
                  <input type="email" className="form-control" placeholder="Email" required />
                </div>
                <div className="mb-3">
                  <input type="text" className="form-control" placeholder="Subject" required />
                </div>
                <div className="mb-3">
                  <textarea className="form-control" rows="3" placeholder="Message" required></textarea>
                </div>
                <button className="btn btn-primary w-100">Send Message</button>
              </form>
            </div>
          </div>

        </div>


      </div>
      <div className="container my-5">
        <h1 className="text-center fw-bold mb-3">Find Us on Google Map</h1>
        <div className="d-flex justify-content-center">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509192!2d-122.4194156846812!3d37.774929279759286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c2c1bcd4b%3A0x54d8a4d2cba7b8f6!2sGoogle!5e0!3m2!1sen!2sin!4v1675864958771!5m2!1sen!2sin"
            width="100%"
            height="350"
            style={{ border: "1px solid #ddd", borderRadius: "10px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <footer style={{ backgroundColor: "#1E3A8A" }} className="text-white text-center py-4">
        <div className="container">
          <div className="row">
            {/* Logo and Subscription */}
            <div className="col-md-4 mb-4">
              <div
                className="bg-light text-dark mx-auto mb-3 d-flex align-items-center justify-content-center"
                style={{ width: "100px", height: "50px", borderRadius: "5px" }}
              >
                <span className="fw-bold">LOGO</span>
              </div>
              <p>Subscribe Now</p>
              <div className="d-flex justify-content-center">
                <input
                  type="email"
                  className="form-control w-75"
                  placeholder="Enter your email"
                  style={{ borderRadius: "5px 0 0 5px" }}
                />
                <button
                  className="btn btn-light text-primary fw-bold"
                  style={{ borderRadius: "0 5px 5px 0" }}
                >
                  Subscribe
                </button>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-md-4 mb-4">
              <h5 className="fw-bold">Quick Links</h5>
              <ul className="list-unstyled">
                <li className="my-2">
                  <span className="me-2">🏠</span> Home
                </li>
                <li className="my-2">
                  <span className="me-2">🛡️</span> About Us
                </li>
                <li className="my-2">
                  <span className="me-2">💼</span> Products
                </li>
              </ul>
            </div>

            {/* Contact Us */}
            <div className="col-md-4 mb-4">
              <h5 className="fw-bold">Contact Us</h5>
              <p className="mb-2">
                <span className="me-2">📞</span> +91 98201 27073
              </p>
              <p className="mb-2">
                <span className="me-2">✉️</span> jashcorporation@yahoo.co.in
              </p>
              <p>
                <span className="me-2">✉️</span> jashcorporation@gmail.com
              </p>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-3 border-top pt-3" style={{ fontSize: "14px" }}>
            Copyright © 2024 JashCorporation. All Rights Reserved | Powered by
            CodeStudios
          </div>
        </div>
      </footer>

    </>
  );
}

export default Home;
