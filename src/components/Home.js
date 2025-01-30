import React from "react";
import CountUp from "react-countup";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesome
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'; // Import Icons
function Home() {
  const counters = [
    { value: 500, label: "Projects Delivered Expertise in Industrial Solutions" },
    { value: 1000, label: "Happy ClientsExpertise in Industrial Solutions " },
    { value: 20, label: "Years of Expertise in Industrial Solutions" },
    { value: 100, label: "Skilled Professionals Driving Innovation." },
  ];
 
  const iconSize = '3rem'; // Increased icon size (using rem for scalability)
  return (
    <>
      {/* Responsive Adjustments */}

      {/* Navbar */}

      <nav
        className="navbar navbar-expand-lg"
        style={{ background: "linear-gradient(to right, #3A7BD5, #3A6073)" }}
      >
        <div className="container">
          <a
            className="navbar-brand"
            href="/"
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
  <li className="nav-item mx-4"> {/* Increased to mx-3 */}
    <a className="nav-link text-white" href="#">Home</a>
  </li>
  <li className="nav-item mx-4"> {/* Increased to mx-3 */}
    <a className="nav-link text-white" href="#">About Us</a>
  </li>
  <li className="nav-item mx-4"> {/* Increased to mx-3 */}
    <a className="nav-link text-white" href="#">Products</a>
  </li>
  <li className="nav-item mx-4"> {/* No margin on the last item */}
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
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        overflow: "hidden",
      }}>
        {/* Background Image */}
        <div style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('./images/153.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: -1,
        }} />

        {/* Content Container */}
        <div style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          padding: "2rem",
          maxWidth: "1200px",
          margin: "0 auto",
          width: "100%",
          flexWrap: "wrap",
        }}>
          {/* Text Content - Left Side */}
          <div style={{
            flex: "1 1 50%",
            minWidth: "300px",
            paddingRight: "2rem",
          }}>
            <h1 style={{
              fontSize: "clamp(2rem, 6vw, 4rem)",
              fontWeight: 900,
              lineHeight: 1.2,
              marginBottom: "1.5rem",
              color: "#000",
              textAlign: "left",
            }}>
              Powering<br />
              Industries<br />
              With<br />
              Precision And<br />
              Reliability.
            </h1>

            <p style={{
              fontSize: "clamp(1rem, 1.5vw, 1.2rem)",
              maxWidth: "500px",
              lineHeight: 1.5,
              color: "#333",
              textAlign: "left",
            }}>
              Delivering cutting-edge electrical solutions designed to enhance efficiency and
              ensure unwavering reliability in demanding industrial environments.
            </p>
          </div>

          {/* Image Container - Right Side */}
          <div style={{
            flex: "1 1 45%",
            minWidth: "300px",
            position: "relative",
            display: "flex",
            justifyContent: "flex-end",
          }}>
            <img
              src="./images/poroo.png"
              alt="Technology"
              style={{
                maxWidth: "100%",
                height: "auto",
                width: "400px",
                objectFit: "contain",
              }}
            />
          </div>
        </div>

        {/* Responsive Adjustments */}
        <style jsx>{`
    @media (max-width: 1024px) {
      .content-container {
        flex-direction: column;
        padding: 2rem 1rem;
      }
      
      .image-container {
        justify-content: center;
        margin-top: 2rem;
        width: 100%;
      }
    }

    @media (max-width: 768px) {
      h1 {
        font-size: 2.5rem !important;
      }
      
      p {
        font-size: 1rem !important;
        max-width: 100% !important;
      }
      
      img {
        width: 100% !important;
        max-width: 500px !important;
      }
    }

    @media (max-width: 480px) {
      .text-content {
        padding-right: 0 !important;
      }
      
      h1 {
        font-size: 2rem !important;
      }
    }
  `}</style>
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
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: "40px",
                  gap: "20px", // Adds spacing between the text and image
                }}
              >
                <img
                  src="/images/electronics-engineer.png"
                  alt="Worker in industry"
                  style={{
                    width: "180px",
                    height: "auto",
                    borderRadius: "10px",
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
                    flexShrink: 0, // Prevents the image from shrinking
                  }}
                />
                <p
                  style={{
                    marginLeft: "10px",
                    textAlign: "justify",
                    flex: "1", // Ensures the text takes up remaining space
                    minWidth: "200px", // Prevents the text from being too narrow
                  }}
                >
                  At Jash Corporation, quality and innovation are our benchmarks. Join us in building
                  solutions that drive industrial excellence and shape a brighter, electrified future.
                </p>
              </div>

              {/* More Button */}
              <div
                style={{
                  textAlign: "left",
                  marginTop: "20px",
                  display: "flex",
                  justifyContent: "center", // Centers the button on smaller screens
                }}
              >
                <button
                  style={{
                    backgroundColor: "#007bff",
                    color: "white",
                    padding: "12px 24px",
                    fontSize: "18px",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    transition: "background-color 0.3s ease",
                  }}
                  onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
                  onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
                >
                  More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
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

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "40px",
        }}
      >
        <h2 style={{ fontSize: "2.5em", marginBottom: "20px" }}>
          We Care About Our Customers Experience
        </h2>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            gap: "20px",
            flexWrap: "wrap", // Added to make it wrap on small screens
            justifyContent: "center", // Center items on smaller screens
          }}
        >
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
                width: "80%",  // Set width as a percentage of the parent container
                maxWidth: "80px",  // Max width to maintain the size
                height: "auto",  // Maintain the aspect ratio
                borderRadius: "50%",
                marginBottom: "10px",
              }}
            />
            <h3 style={{ fontSize: "1.2em", marginBottom: "10px" }}>Karia Lynn</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
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
                width: "80%",  // Set width as a percentage of the parent container
                maxWidth: "80px",  // Max width to maintain the size
                height: "auto",  // Maintain the aspect ratio
                borderRadius: "50%",
                marginBottom: "10px",
              }}
            />
            <h3 style={{ fontSize: "1.2em", marginBottom: "10px" }}>John Doe</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
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
                width: "80%",  // Set width as a percentage of the parent container
                maxWidth: "80px",  // Max width to maintain the size
                height: "auto",  // Maintain the aspect ratio
                borderRadius: "50%",
                marginBottom: "10px",
              }}
            />
            <h3 style={{ fontSize: "1.2em", marginBottom: "10px" }}>Jane Smith</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div style={{ margin: "10px 0" }}>★☆☆☆☆</div>
          </div>
        </div>
      </div>

      {/* Responsive Adjustments */}
      <style jsx>{`
  @media (max-width: 768px) {
    div {
      padding: 20px;
    }
    h2 {
      font-size: 1.8em;
    }
    .testimonial {
      width: 90%;
    }
    img {
      width: 60%; /* Adjust the image size on smaller screens */
      max-width: 70px; /* Ensure the image doesn't grow too large */
    }
  }
`}</style>


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
          height: "25px",
        }}
      >

      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
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
            marginBottom: "30px",
          }}
        >
          <img
            src="./images/4.png"
            alt="Worker"
            style={{
              width: "100%",
              height: "auto",
              objectFit: "cover",
              borderRadius: "8px",
            }}
          />
        </div>

        {/* Right Side - Products */}
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
              marginTop: "40px",
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
              <div
                key={product.id}
                style={{
                  textAlign: "center",
                  padding: "15px",
                  background: "#f7f7f7",
                  borderRadius: "8px",
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                }}
              >
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
                    transition: "background-color 0.3s ease",
                  }}
                  onMouseOver={(e) => e.target.style.backgroundColor = "#0051cc"}
                  onMouseOut={(e) => e.target.style.backgroundColor = "#0066FF"}
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
      <div className="row my-5 align-items-center">
        <div className="col-md-6 order-md-1 text-center text-md-start">
          {/* Contact Details */}
          <div className="contactus">
            <h1 className="display-5 fw-bold mb-3">Contact Us</h1>
            <p className="text-muted mb-4">
              Get in touch with Jash Corporation to explore how we can support your goals with precision-engineered solutions.
            </p>
          </div>
    


          <div className="container my-5">
      <div className="row">
        {/* Left side: Address */}
        <div className="col-md-6 order-md-1"> {/* Correct order for address */}
          <div className="d-flex flex-column justify-content-center h-100">
            <div className="d-flex align-items-center">
              <FontAwesomeIcon 
                icon={faMapMarkerAlt} 
                className="me-3" 
                style={{ fontSize: iconSize, color: '#0056b3' }} 
              />
              <div>
                <h5 className="fw-bold">Visit Us</h5>
                <p className="mb-0">Sumer Nagar, Building<br />
                  NO.1,<br />
                  S.V.Road, Borivali West<br />
                  Mumbai 400092</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right side: Phone and Email */}
        <div className="col-md-6 order-md-2"> {/* Correct order for phone/email */}
          <div className="d-flex flex-column gap-4 justify-content-center h-100">
            <div className="d-flex align-items-center">
              <FontAwesomeIcon 
                icon={faPhone} 
                className="me-3" 
                style={{ fontSize: iconSize, color: '#0056b3' }} 
              />
              <div>
                <h5 className="fw-bold">Have Any Questions?</h5>
                <a href="tel:+919820127073" className="text-decoration-none text-dark">+91 98201 27073</a>
              </div>
            </div>

            <div className="d-flex align-items-center">
              <FontAwesomeIcon 
                icon={faEnvelope} 
                className="me-3" 
                style={{ fontSize: iconSize, color: '#0056b3' }} 
              />
              <div>
                <h5 className="fw-bold">Mail Us</h5>
                <a href="mailto:jashcorporation@gmail.com" className="text-decoration-none text-dark">jashcorporation@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>









        </div>

        {/* Contact Form */}
        <div className="col-md-6 order-md-2">
          <div className="p-4 shadow-lg rounded bg-light">
            <h4 className="text-center mb-4">Send Us a Message</h4>
            <form>
              <div className="row mb-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    required
                    style={{ borderRadius: "0.5rem", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}
                  />
                </div>
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Phone"
                    required
                    style={{ borderRadius: "0.5rem", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}
                  />
                </div>
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  required
                  style={{ borderRadius: "0.5rem", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                  required
                  style={{ borderRadius: "0.5rem", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}
                />
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control"
                  rows="3"
                  placeholder="Message"
                  required
                  style={{ borderRadius: "0.5rem", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}
                ></textarea>
              </div>
              <button
                className="btn btn-primary w-100 py-2 rounded-3 shadow"
                style={{ fontWeight: "bold", transition: "all 0.3s ease" }}
                onMouseOver={(e) => (e.target.style.backgroundColor = "#0051cc")}
                onMouseOut={(e) => (e.target.style.backgroundColor = "#0066FF")}
              >
                Send Message
              </button>
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
                  <span className="me-2" >🏠</span>< a href="/" style={{ color: "white", textDecoration: "none" }}> Home</a>
                </li>
                <li className="my-2">
                  <span className="me-2">🛡️</span>< a href="/" style={{ color: "white", textDecoration: "none" }}> About Us</a>
                </li>
                <li className="my-2">
                  <span className="me-2">💼</span> < a href="/" style={{ color: "white", textDecoration: "none" }}>Products</a>
                </li>
              </ul>
            </div>

            {/* Contact Us */}
            <div className="col-md-4 mb-4">
              <h5 className="fw-bold">Contact Us</h5>
              <p className="mb-2">
                <span className="me-2">📞</span><a href="tel:+919820127073" style={{color:"white", textDecoration: "none"}}>+91 98201 27073</a>
              </p>
              <p className="mb-2">
                <span className="me-2">✉️</span><a href="mailto:jashcorporation@yahoo.co.in" style={{ color: "white", textDecoration: "none" }}> jashcorporation@yahoo.co.in </a>
              </p>
              <p>
                <span className="me-2">✉️</span><a href="mailto:jashcorporation@gmail.com" style={{ color: "white", textDecoration: "none" }}>  jashcorporation@gmail.com</a>
              </p>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-3 border-top pt-3" style={{ fontSize: "14px" }}>
            Copyright © 2024 <a href="/" style={{ color: "white", textDecoration: "none" }}>JashCorporation</a>. All Rights Reserved | Powered by
            <a href="https://codestudios.in/" style={{ color: "white", textDecoration: "none" }}> CodeStudios</a>
          </div>
        </div>
      </footer>

    </>
  );
}

export default Home;
