import "./App.css";

import MainLogoBlue from "./assets/images/svg/logo-blue.svg";
import GoogleRating from "./assets/images/png/google-rating.png";
import WhatsAppIcon from "./assets/images/svg/WhatsApp.svg";
// import TelegramIcon from "./assets/images/svg/Telegram.svg";
import GmailIcon from "./assets/images/svg/Gmail.svg";

import ImageData1 from "./assets/images/png/Apartament.png";
import ImageData2 from "./assets/images/png/Teren.png";
import ImageData3 from "./assets/images/png/house.png";
import ImageData4 from "./assets/images/png/Birou.png";
import ImageData5 from "./assets/images/png/Birou.png";
import ImageData6 from "./assets/images/png/Spatiucomercial.png";
import ImageData7 from "./assets/images/png/SpatiuIindustrial.png";

import TrustIcon1 from "./assets/images/svg/trust-icon-1.svg";
import TrustIcon2 from "./assets/images/svg/trust-icon-2.svg";
import TrustIcon3 from "./assets/images/svg/trust-icon-3.svg";
import TrustIcon4 from "./assets/images/svg/trust-icon-4.svg";
import TrustIcon5 from "./assets/images/svg/trust-icon-5.svg";
import TrustIcon6 from "./assets/images/svg/trust-icon-6.svg";

import Background from "./assets/images/png/evaluation.png";

import PieChartYellow from "./assets/images/svg/pie-chart-yellow.svg";
import PieChartBarYellow from "./assets/images/png/chart-yellow.png";

import PieChartBlue from "./assets/images/svg/pie-chart-blue.svg";
import PieChartBarBlue from "./assets/images/png/chart-blue.png";

import PieChartBlueBig from "./assets/images/svg/pie-chart-blue2.svg";
import InfoFilled from "./assets/images/svg/info-filled.svg";
import GreenChartBar from "./assets/images/png/chart-green.png";

import FooterLogoMain from "./assets/images/png/footer-logo.png";
import FooterSocial from "./assets/images/png/facebook.png";
import FooterSocial2 from "./assets/images/png/instagram2.png";
import FooterSocial3 from "./assets/images/png/youtube3.png";
import FooterSocial4 from "./assets/images/png/bluefb.png";
// Mobile

import MenuHamBurger from "./assets/images/svg/menuBurger.svg";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
import emailjs from "@emailjs/browser"
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import React, { useRef, useState } from "react";
import Swal from "sweetalert2";
import SecondForm from "./components/secondForm";


function App() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  var settings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    cssEase: "linear",
    arrows: false,
  };
  const [propertyType, setPropertyType] = useState("");

  const [phone, setPhone] = useState("");
  const [phone3, setPhone3] = useState("");
  const [location, setLocation] = useState("");
  const [aproxPrice, setaproxPrice] = useState("");
  const [terms, setTerms] = useState("");
  const [inchiriez, setInchiriez] = useState("");
  const [cumpar, setCumpar] = useState("");
  const [errors, setErrors] = useState({});
  const [, setSuccessMessage] = useState("");



  // for WhatsApp
  const sendWhatsApp = (e) => {
    if (validateForm()) {
      e.preventDefault();
      const message =
        `Tip proprietate: ${propertyType}\n` +
        `Locatie: ${location}\n` +
        `Pret Orientativ: ${aproxPrice}\n` +
        `Nr. de Telefon: ${phone}`;

      // Replace `YOUR_PHONE_NUMBER` with your  phone number
      const phoneNumber = "whatsapp:+40371232787";

      const encodedMessage = encodeURIComponent(message);
      const encodedPhoneNumber = encodeURIComponent(phoneNumber);

      const whatsappURL = `https://api.whatsapp.com/send?phone=${encodedPhoneNumber}&text=${encodedMessage}`;

      window.open(whatsappURL, "_blank");
    }
  };



  // for Telegram

  const sendTelegram = () => {
    if (validateForm()) {
      const message =
        `Tip proprietate: ${propertyType}\n` +
        `Locatie: ${location}\n` +
        `Pret Orientativ: ${aproxPrice}\n` +
        `Nr. de Telefon: ${phone}`;

      // Replace `YOUR_TELEGRAM_BOT_TOKEN` with your Telegram bot token
      const telegramBotToken = "YOUR_TELEGRAM_BOT_TOKEN";

      // Replace `YOUR_TELEGRAM_CHAT_ID` with your Telegram chat ID
      const telegramChatId = "YOUR_TELEGRAM_CHAT_ID";

      const telegramURL = `https://api.telegram.org/bot${telegramBotToken}/sendMessage?chat_id=${telegramChatId}&text=${encodeURIComponent(
        message
      )}`;


      // Send the message to Telegram
      fetch(telegramURL)
        .then((response) => response.json())
        .then((data) => {
          // Handle the response from Telegram if needed
          console.log(data);
        })
        .catch((error) => {
          // Handle any errors that occurred during the request
          console.error(error);
        });
    }
  };

  // for Gmail
  const validateForm = () => {
    let isValid = true;
    let errors = {};

    if (!propertyType) {
      isValid = false;
      errors.propertyType = "Property Type is required";
    }

    if (!phone) {
      isValid = false;
      errors.phone = "Phone is required";
    }
    // if (!terms) {
    //   isValid = false;
    //   errors.terms = "Accept Termeni si Conditii";
    // }

    setErrors(errors);

    return isValid;
  };


  const validateForm3 = () => {
    let isValid = true;
    let errors = {};

    if (!phone3) {
      isValid = false;
      errors.phone3 = "Phone is required";
    }

    setErrors(errors);

    return isValid;
  };

  const handleSubmit =  (e) => {
    e.preventDefault();

    if (validateForm()) {


      let formData = {
        selection: 'cumpar',
        property_type: propertyType,
        location: location,
        approximate_price: aproxPrice,
        phone: phone,
      }
        emailjs.send('service_f1te14u', 'template_k2hqo0k', formData, '67b-OO6NkbSWJChEx')
          .then((result) => {
            if (result.status === 200)
            {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Email Sent Successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            }

          }, (error) => {
            Swal.fire({
              position: "center",
              icon: "danger",
              title: error.text,
              showConfirmButton: false,
              timer: 3000,
            });
              console.log(error.text);
          });

          setPhone("");
          setLocation("");
          setaproxPrice("");
          setPropertyType("");
          setErrors({});
    }
  };

  const handleSubmit3 = async (e) => {
    e.preventDefault();

    if (validateForm3()) {
      let formData = {
        selection: '',
        property_type: '',
        location: '',
        approximate_price: '',
        phone: phone3,
      }
      emailjs.send('service_f1te14u', 'template_k2hqo0k', formData, '67b-OO6NkbSWJChEx')
          .then((result) => {
            if (result.status === 200)
            {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Email Sent Successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            }

          }, (error) => {
            Swal.fire({
              position: "center",
              icon: "danger",
              title: error.text,
              showConfirmButton: false,
              timer: 3000,
            });
            console.log(error.text);
          });

      setPhone3("");
      setErrors({});
    }
  };


  return (
    <>
      <div className="MainSlider">
        <div className="container">
          <div className="sho-icons">
            <div className="footer-bottom-social2">
              <a href="https://www.facebook.com/Imocentral">
                <img src={FooterSocial} alt="footer" />
              </a>
              <a href="https://instagram.com/imocentral.ro?igshid=MzRlODBiNWFlZA==">
              <img src={FooterSocial2} alt="footerlogo" />
              </a>
              <a href="https://youtube.com/@Imocentral">
              <img src={FooterSocial3} alt="footerlogo" />
              </a>
              
            </div>
          </div>
          <header>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
              <div className="container">
                <div className="desktopMenu w-100">
                  <div className="d-flex justify-content-between align-items-center">
                    <a className="navbar-brand" href="#">
                      <img src={MainLogoBlue} alt="logo" />
                    </a>
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          aria-current="page"
                          href="https://imocentral.ro/"
                        >
                          Oferte Actuale
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#Trusts">
                          De ce Imocentral
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#Contact">
                          Contact
                        </a>
                      </li>
                    </ul>
                    <a href="#Contact"><button className="HeaderBlueButton">
                      Vreau sa Cumpar
                    </button></a>
                    
                  </div>
                </div>
                <div className="mobileMenu w-100">
                  <div className="d-flex justify-content-between align-items-center w-100">
                    <a className="navbar-brand" href="#">
                      <img src={MainLogoBlue} alt="logo" />
                    </a>
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#navbarSupportedContent"
                      aria-controls="navbarSupportedContent"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <img src={MenuHamBurger} alt="" />
                    </button>
                  </div>
                  <div>
                    <div
                      className="collapse navbar-collapse menu2"
                      id="navbarSupportedContent"
                    >
                      <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-ali">
                        <li className="nav-item">
                          <a
                            className="nav-link active"
                            aria-current="page"
                            href="https://imocentral.ro/"
                          >
                            Oferte Actuale
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#Trusts">
                            De ce Imocentral
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#Contact">
                            Contact
                          </a>
                        </li>
                      </ul>
                      <a href="#Contact">
                      <button className="HeaderBlueButton">
                        Vreau sa Cumpar
                      </button>
                      </a>
                      
                      <div className="footer-bottom-burger">
                        <a href="https://www.facebook.com/Imocentral">
                          <img src={FooterSocial4} alt="footer" />
                        </a>
                        <a href="https://www.instagram.com/imocentral.ro/ https://www.youtube.com/@Imocentral">
                        <img src={FooterSocial2} alt="footerlogo" />
                        </a>
                        <a href="https://www.youtube.com/@Imocentral">
                        <img src={FooterSocial3} alt="footerlogo" />
                        </a>
                       
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </header>
          <div className="MainSliderBottomSection">
            <div className="row align-items-center">
              <div className="col-xl-6 col-md-12 MainSliderBottomSectionLeft">
                <div className="timeBadge">
                  <div className="timeBadgeIcon">⏱️</div>
                  <p className="mb-0">
                    Ofertele sunt trimise in cel mai scurt timp!
                  </p>
                </div>
                <div className="sliderText">
                  <p>
                    <span>Nu pierde timpul!</span>
                    <br /> Spune-ne ce cauți și îți oferim cele mai bune oferte!
                  </p>
                </div>
                <div className="googleRating">
                  <img src={GoogleRating} alt="google rating" />
                </div>
              </div>
              <div className="col-xl-6 col-md-12 MainSliderBottomSectionRight">
                <div className="BannerForm w-75 ms-auto">
                  <h3>Vreau sa</h3>
                  <ul
                    className="nav nav-pills nav-fill gap-2 p-1 small bg-primary rounded-5 shadow-sm  m-auto custom-tbss"
                    id="pillNav2"
                    role="tablist"
                    style={{}}
                  >
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link active rounded-5"
                        id="home-tab2"
                        data-bs-toggle="tab"
                        type="button"
                        role="tab"
                        aria-selected="true"
                      >
                        Cumpar
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link rounded-5"
                        id="profile-tab2"
                        data-bs-toggle="tab"
                        type="button"
                        role="tab"
                        aria-selected="false"
                      >
                        Inchiriez
                      </button>
                    </li>
                  </ul>
                  <p className="BannerFormDesc">
                    Te rugam sa ne dai informatiile cat mai concrete, ne vor
                    ajuta in a-ti trimite oferta potrivita!
                  </p>
                  <form >
                    <fieldset>
                      <div className="mb-2">
                        <label for="disabledSelect" className="form-label">
                          Tip proprietate
                        </label>
                        <div className="customSelect">
                          <select
                            id="disabledSelect"
                            className="form-select"
                            name="property_type"
                            value={propertyType}
                            onChange={(e) => setPropertyType(e.target.value)}
                          >
                            <option>Selecteaza tipul proprietatii</option>
                            <option value="Appartment">Apartament</option>
                            <option value="Casa">Casa</option>
                            <option value="Birou">Birou</option>
                            <option value="Teren">Teren</option>
                            <option value="Spatiu Comercial">Spatiu Comercial</option>
                            <option value="Spatiu Industrial">Spatiu Industrial</option>
                          </select>
                        </div>
                        {errors.propertyType && (
                          <span
                            className="text-danger"
                            style={{ fontSize: "12px" }}
                          >
                            {errors.propertyType}
                          </span>
                        )}
                      </div>
                      <div className="mb-2">
                        <label for="disabledTextInput" className="form-label">
                          Locatie
                        </label>
                        <input
                          type="text"
                          id="disabledTextInput"
                          className="form-control"
                          name="location"
                          placeholder="Selecteaza Locatie"
                          value={location}
                          onChange={(e) => setLocation(e.target.value)}
                        />
                        {errors.location && (
                          <span
                            className="text-danger"
                            style={{ fontSize: "12px" }}
                          >
                            {errors.location}
                          </span>
                        )}
                      </div>
                      <div className="mb-2">
                        <label for="disabledTextInput2" className="form-label">
                          Pret Orientativ
                        </label>
                        <input
                          type="text"
                          id="disabledTextInput2"
                          className="form-control"
                          placeholder="Adauga pret"
                          name="approximate_price"
                          value={aproxPrice}
                          onChange={(e) => setaproxPrice(e.target.value)}
                        />
                        {errors.aproxPrice && (
                          <span
                            className="text-danger"
                            style={{ fontSize: "12px" }}
                          >
                            {errors.aproxPrice}
                          </span>
                        )}
                      </div>
                      <div className="mb-2">
                        <label for="disabledTextInput3" className="form-label">
                          Nr. de Telefon
                        </label>
                        <input
                          type="text"
                          id="disabledTextInput3"
                          className="form-control"
                          placeholder="0740 000 000"
                          name="phone"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                        />
                        {errors.phone && (
                          <span
                            className="text-danger"
                            style={{ fontSize: "12px" }}
                          >
                            {errors.phone}
                          </span>
                        )}
                      </div>
                      <div className="mb-2">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="disabledFieldsetCheck"
                            name="terms"
                            value={terms}
                            onChange={(e) => setTerms(e.target.value)}
                          />

                          <label
                            className="form-check-label"
                            for="disabledFieldsetCheck"
                          >
                            Accept <a href="#">Termeni si Conditii</a>
                          </label>
                        </div>
                        {errors.terms && (
                            <span
                                className="text-danger"
                                style={{ fontSize: "12px" }}
                            >
                            {errors.terms}
                          </span>
                        )}
                      </div>
                    </fieldset>
                  </form>

                  <div className="socialSignup">
                    <legend>Trimite solicitarea prin:</legend>
                    <ul>
                      <li>
                        <img
                          src={WhatsAppIcon}
                          onClick={sendWhatsApp}
                          alt="WhatsAppIcon"
                          className='custom-cur'
                        />
                      </li>
                      {/* <li>
                        <img src={TelegramIcon} onClick={sendTelegram} alt="" />
                      </li> */}
                      <li>
                        <img
                          src={GmailIcon}
                          onClick={handleSubmit}
                          alt="GmailIcon"
                          className='custom-cur'
                        />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="googleRating-mobile">
        <img src={GoogleRating} alt="google rating" />
      </div>

      <div className="services">
        <div className="container">
          <div className="desktop">
            <div className="row">
              <div className="col-xl-6 col-md-12 services-left-side">
                <div className="row">
                  <div className="col-xl-6 col-md-12">
                    <div className="card">
                      <div className="card-body">
                        <figure>
                          <img
                            src={ImageData1}
                            alt="serviceimage"
                            className="w-100"
                          />
                        </figure>
                        <h4>Apartament</h4>
                        <div className="btn-group-service">
                          <a
                            className="btn btn-primary"
                            href="https://imocentral.ro/cauta/vanzari/Apartamente"
                          >
                            Vanzare
                          </a>
                          <a
                            className="btn btn-secondary"
                            href="https://imocentral.ro/cauta/inchirieri/Apartamente"
                          >
                            Inchiriere
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="card mt-lg-3">
                      <div className="card-body">
                        <figure>
                          <img
                            src={ImageData5}
                            alt="serviceimage"
                            className="w-100"
                          />
                        </figure>
                        <h4>Birou</h4>
                        <div className="btn-group-service">
                          <a
                            className="btn btn-primary"
                            href="https://imocentral.ro/cauta/vanzari/Apartamente"
                          >
                            Vanzare
                          </a>
                          <a
                            className="btn btn-secondary"
                            href="https://imocentral.ro/cauta/inchirieri/Apartamente"
                          >
                            Inchiriere
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="card mt-3">
                      <div className="card-body">
                        <figure>
                          <img
                            src={ImageData2}
                            alt="serviceimage"
                            className="w-100"
                          />
                        </figure>
                        <h4>Teren</h4>
                        <div className="btn-group-service">
                          <a
                            className="btn btn-primary"
                            href="https://imocentral.ro/cauta/vanzari/Case-Vile"
                          >
                            Vanzare
                          </a>
                          <a
                            className="btn btn-secondary"
                            href="https://imocentral.ro/cauta/inchirieri/Case-Vile"
                          >
                            Inchiriere
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-md-12 mt-lg-5 mt-sm-3">
                    <div className="card mt-lg-5 mt-sm-0 mb-3">
                      <div className="card-body">
                        <figure>
                          <img
                            src={ImageData3}
                            alt="serviceimage"
                            className="w-100"
                          />
                        </figure>
                        <h4>Casa</h4>
                        <div className="btn-group-service">
                          <a
                            className="btn btn-primary"
                            href="https://imocentral.ro/cauta/vanzari/Terenuri"
                          >
                            Vanzare
                          </a>
                          <a
                            className="btn btn-secondary"
                            href="https://imocentral.ro/cauta/inchirieri/Terenuri"
                          >
                            Inchiriere
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="card mt-lg-3 mt-sm-0 mb-3">
                      <div className="card-body">
                        <figure>
                          <img
                            src={ImageData6}
                            alt="serviceimage"
                            className="w-100"
                          />
                        </figure>
                        <h4>Spatiu Comercial</h4>
                        <div className="btn-group-service">
                          <a
                            className="btn btn-primary"
                            href="https://imocentral.ro/cauta/vanzari/Terenuri"
                          >
                            Vanzare
                          </a>
                          <a
                            className="btn btn-secondary"
                            href="https://imocentral.ro/cauta/inchirieri/Terenuri"
                          >
                            Inchiriere
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="card mt-2 mb-3">
                      <div className="card-body">
                        <figure>
                          <img
                            src={ImageData7}
                            alt="serviceimage"
                            className="w-100"
                          />
                        </figure>
                        <h4>Spatiu Industrial</h4>
                        <div className="btn-group-service">
                          <a
                            className="btn btn-primary"
                            href="https://imocentral.ro/cauta/vanzari/Spatii-comerciale"
                          >
                            Vanzare
                          </a>
                          <a
                            className="btn btn-secondary"
                            href="https://imocentral.ro/cauta/inchirieri/Spatii-comerciale"
                          >
                            Inchiriere
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-md-12 services-right-side">
                <div className="d-flex align-items-start flex-column justify-content-center h-100 ps-5">
                  <legend className="heading-left-bordered">
                    Oferte Actuale
                  </legend>
                  <h3>Descopera cele mai actuale oferte!</h3>
                  <p>
                    Explorează ofertele noastre și descoperă proprietăți cu
                    design atrăgător, amenajări elegante și facilități moderne.
                    O nouă locuință așteaptă să devină căminul tău, așa că nu
                    rata oportunitatea de a găsi oferta perfectă pentru tine!
                  </p>

                  <a
                    className="servicesButton"
                    href="https://imocentral.ro/cluj-napoca"
                  >
                    Vezi Oferte
                    <span>
                      <img src="/rightarr.png" alt="arrow" class="w-100" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mobile">
            <div className="row ">
              <div className="col-xl-12 col-md-12 services-right-side">
                <div className="d-flex align-items-start flex-column justify-content-center h-100">
                  <legend className="heading-left-bordered">
                    Oferte Actuale
                  </legend>
                  <h3>Descopera cele mai actuale oferte!</h3>
                  <p>
                    Explorează ofertele noastre și descoperă proprietăți cu
                    design atrăgător, amenajări elegante și facilități moderne.
                    O nouă locuință așteaptă să devină căminul tău, așa că nu
                    rata oportunitatea de a găsi oferta perfectă pentru tine!
                  </p>
                  <div className="services-left-side w-100">
                    {/* <Carousel infiniteLoop={true} showIndicators={false} > */}
                    <Slider {...settings}>
                      <div className="card">
                        <div className="card-body">
                          <figure>
                            <img
                              src={ImageData1}
                              alt="serviceimage"
                              className="w-100"
                            />
                          </figure>

                          <h4>Apartament</h4>
                          <div className="btn-group-service">
                            <a
                              className="btn btn-primary"
                              href="https://imocentral.ro/cauta/vanzari/Apartamente"
                            >
                              Vanzare
                            </a>
                            <a
                              className="btn btn-secondary"
                              href="https://imocentral.ro/cauta/inchirieri/Apartamente"
                            >
                              Inchiriere
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-body">
                          <figure>
                            <img
                              src={ImageData2}
                              alt="serviceimage"
                              className="w-100"
                            />
                          </figure>
                          <h4>Casa</h4>
                          <div className="btn-group-service">
                            <a
                              className="btn btn-primary"
                              href="https://imocentral.ro/cauta/vanzari/Case-Vile"
                            >
                              Vanzare
                            </a>
                            <a
                              className="btn btn-secondary"
                              href="https://imocentral.ro/cauta/inchirieri/Case-Vile"
                            >
                              Inchiriere
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-body">
                          <figure>
                            <img
                              src={ImageData3}
                              alt="serviceimage"
                              className="w-100"
                            />
                          </figure>
                          <h4>Teren</h4>
                          <div className="btn-group-service">
                            <a
                              className="btn btn-primary"
                              href="https://imocentral.ro/cauta/vanzari/Terenuri"
                            >
                              Vanzare
                            </a>
                            <a
                              className="btn btn-secondary"
                              href="https://imocentral.ro/cauta/inchirieri/Terenuri"
                            >
                              Inchiriere
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-body">
                          <figure>
                            <img
                              src={ImageData4}
                              alt="serviceimage"
                              className="w-100"
                            />
                          </figure>
                          <h4>Spatiu Comercial</h4>
                          <div className="btn-group-service">
                            <a
                              className="btn btn-primary"
                              href="https://imocentral.ro/cauta/vanzari/Spatii-comerciale"
                            >
                              Vanzare
                            </a>
                            <a
                              className="btn btn-secondary"
                              href="https://imocentral.ro/cauta/inchirieri/Spatii-comerciale"
                            >
                              Inchiriere
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-body">
                          <figure>
                            <img
                              src={ImageData6}
                              alt="serviceimage"
                              className="w-100"
                            />
                          </figure>
                          <h4>Birou</h4>
                          <div className="btn-group-service">
                            <a
                              className="btn btn-primary"
                              href="https://imocentral.ro/cauta/vanzari/Spatii-comerciale"
                            >
                              Vanzare
                            </a>
                            <a
                              className="btn btn-secondary"
                              href="https://imocentral.ro/cauta/inchirieri/Spatii-comerciale"
                            >
                              Inchiriere
                            </a>
                          </div>
                        </div>
                        
                      </div>
                      <div className="card">
                        <div className="card-body">
                          <figure>
                            <img
                              src={ImageData7}
                              alt="serviceimage"
                              className="w-100"
                            />
                          </figure>
                          <h4>Spatiu Industrial</h4>
                          <div className="btn-group-service">
                            <a
                              className="btn btn-primary"
                              href="https://imocentral.ro/cauta/vanzari/Spatii-comerciale"
                            >
                              Vanzare
                            </a>
                            <a
                              className="btn btn-secondary"
                              href="https://imocentral.ro/cauta/inchirieri/Spatii-comerciale"
                            >
                              Inchiriere
                            </a>
                          </div>
                        </div>
                        
                      </div>
                    </Slider>
                    {/* </Carousel> */}
                  </div>
                  <a
                    class="servicesButton"
                    href="https://imocentral.ro/cluj-napoca"
                  >
                    Vezi Oferte
                    <span>
                      <img src="/rightarr.png" alt="arrow" class="w-100" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sell-property">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-sm-12">
              <div className="h-100 d-flex justify-content-center flex-column">
                <legend className="heading-left-bordered">
                  Cumparare si Inchiriere
                </legend>
                <h3>Doresti sa vinzi o proprietate?</h3>
                <p>
                  Pentru a putea trimite o ofertă potrivită, te rugăm să ne{" "}
                  <br />
                  furnizezi informații cât mai concrete. Completează formularul
                  <br />
                  din dreapta și vom răspunde cât mai rapid posibil.
                </p>
              </div>
            </div>
            <SecondForm/>
          </div>
        </div>
      </div>

      <div className="trustSection" id="Trusts">
        <div className="container">
          <legend className="heading-left-bordered">Despre Imocentral</legend>
          <h3>
            De ce sa ai incredere in
            <br />
            <span>IMOCENTRAL?</span>
          </h3>
          <p className="text-center">
            O agentie de încredere posedă cunoștințe și expertiză extinse în
            piața imobiliară, inclusiv tendințele actuale, prețurile,
            <br />
            reglementările și legile relevante. Avem acces la resurse și rețele
            valoroase care pot facilita procesul de tranzacționare. Prin
            <br />
            abilitățile noastre de negociere, putem susține interesele tale și
            ne straduim să obținem cea mai bună ofertă. Acționăm în cel mai
            <br /> bun interes al tău și păstram confidențialitatea. Avem
            experiență în gestionarea documentelor și procedurilor necesare,
            <br /> economisindu-ți timp și efort.
          </p>

          <div className="row mt-4">
            <div className="col-lg-4 col-sm-12">
              <div className="iconCard mb-lg-0 mb-sm-3 mb-xs-3">
                <figure>
                  <img src={TrustIcon1} alt="trust icon 1" />
                </figure>
                <label for="">Expertiză în documente și proceduri</label>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12">
              <div className="iconCard mb-lg-0 mb-sm-3 mb-xs-3">
                <figure>
                  <img src={TrustIcon2} alt="trust icon 2" />
                </figure>
                <label for="">Protecția intereselor tale</label>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12">
              <div className="iconCard mb-lg-0 mb-sm-0">
                <figure>
                  <img src={TrustIcon3} alt="trust icon 3" />
                </figure>
                <label for="">Experiență în negociere</label>
              </div>
            </div>
          </div>
          <div className="row mt-lg-4 mt-sm-3">
            <div className="col-lg-4 col-sm-12">
              <div className="iconCard mb-lg-0 mb-sm-3 mb-xs-3">
                <figure>
                  <img src={TrustIcon4} alt="trust icon 4" />
                </figure>
                <label for="">Economie de timp și efortt</label>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12">
              <div className="iconCard mb-lg-0 mb-sm-3 mb-xs-3">
                <figure>
                  <img src={TrustIcon5} alt="trust icon 5" />
                </figure>
                <label for="">Acces la resurse și rețele extinse</label>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12">
              <div className="iconCard mb-lg-0 mb-sm-3 mb-xs-3">
                <figure>
                  <img src={TrustIcon6} alt="trust icon 6" />
                </figure>
                <label for="">Cunoștințe și expertiză</label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pricingBox">
        <div className="container p-0">
          <div className="row">
            <div className="col-lg-6 col-sm-12">
              <div className="blueBoxPrice">
                <h3>IMOcentral a intermediat peste 1800 de tranzactii.</h3>
                <p>
                  Echipa Imocentral a intermediat in cei 15 ani de activitate
                  peste 1800 de tranzactii de vanzare si inchiriere.
                </p>
                <div className="row align-items-center justify-content-center">
                  <div className="col-lg-6 col-sm-6">
                    <div className="card priceIconBox yellow">
                      <div className="card-body">
                        <h5 className="card-title text-align-left mt-2 mb-0">
                          <img src={PieChartYellow} alt="icon" />
                          Vanzari
                        </h5>
                        <div className="d-flex align-items-center justify-content-between graph">
                          <span className="card-text">700</span>
                          <img
                            src={PieChartBarYellow}

                            alt="chart bar"
                            className="mb-2"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6">
                    <div className="card priceIconBox blue">
                      <div className="card-body">
                        <h5 className="card-title text-align-left mt-2 mb-0">
                          <img src={PieChartBlue} alt="icon" />
                          Inchirieri
                        </h5>
                        <div className="d-flex align-items-center justify-content-between graph">
                          <span className="card-text">1100</span>
                          <img
                            src={PieChartBarBlue}
                            alt="chart bar"
                            className="mb-2"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12">
              <div className="blueBoxPrice">
                <h3>Peste 65 milioane de Euro intermediati.</h3>
                <p>
                  Valoarea contractelor intermediate de IMOCentral depaseste 5
                  milioane de euro.
                </p>
                <div className="card priceIconBox single">
                  <div className="card-body">
                    <img src={PieChartBlueBig} alt="icon" />
                    <h6 className="card-title text-align-left mt-2 mb-0">
                      Valoare Tranzactii Intermediate
                      <img src={InfoFilled} alt="info" className="mb-1 ms-2" />
                    </h6>
                    <div className="d-flex align-items-center justify-content-between graph">
                      <span className="card-text">+65.000.000€</span>
                      <img
                        src={GreenChartBar}
                        alt="chart bar"
                        className="mb-2"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="Evalutation">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-sm-12">
              <h3>Evaluarea proprietatii</h3>
              <p>
                ImoCentral înțelege acest aspect și pune la dispoziție
                cunoștințe solide și expertiză pentru a vă ajuta să obțineți cea
                mai bună evaluare posibilă. Evaluarea realizată de ImoCentral se
                bazează pe o analiză atentă a caracteristicilor proprietății, a
                pieței imobiliare actuale și a factorilor locali relevanți.
              </p>
              <a className="evalutationBtn" href="#Contact">
                Doresc sa fiu Contactat
              </a>

              {/* <div className="bullets d-flex justify-content-center align-items-center">
                <div className="active ball"></div>
                <div className="ball"></div>
              </div> */}
            </div>
            <div className="col-lg-4 col-sm-12">
              <Slider {...settings2}>
                <div>
                  <img src={Background} alt="serviceimage" />
                </div>
                <div>
                  <img src={Background} alt="serviceimage" />
                </div>
                <div>
                  <img src={Background} alt="serviceimage" />
                </div>
                <div>
                  <img src={Background} alt="serviceimage" />
                </div>
                <div>
                  <img src={Background} alt="serviceimage" />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>

      <div className="contactNow" id="Contact">
        <div className="container">
          <div className="h-100 d-flex justify-content-center flex-column">
            <legend className="heading-left-bordered justify-content-center mb-4">
              Contact
            </legend>
            <h3>
              Doresc
              <br />
              <span>Sa fiu contactat</span>
            </h3>
            <p className="text-center">
              Completează numarul de telefon și te vom contacta cât mai rapid
              posibil.
            </p>
            <form className="mb-4">
              <input type="text"
                     placeholder="0740 000 000"
                     name="phone"
                     value={phone3}
                     onChange={(e) => setPhone3(e.target.value)}
              />

              <button type="button" onClick={handleSubmit3}>Doresc sa fiu Contactat</button>

            </form>
            {errors.phone3 && (
                <span
                    className="text-danger"
                    style={{ fontSize: "12px" }}
                >
                            {errors.phone3}
                          </span>
            )}
            <div className="terms-text">
              <p>
                *Prin apasarea butonului ”Doresc sa fiu Contactat” sunteti de
                acord cu <a href="#">Termenii si Conditiile</a> Imocentral.
              </p>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div className="container">
          <div className="footer-top">
            <img src={FooterLogoMain} alt="footerlogo" />
            <ul>
              <li>
                <a href="#">Vanzare</a>
              </li>
              <li>
                <a href="#">Cumparare</a>
              </li>
              <li>
                <a href="#">Inchiriere</a>
              </li>
            </ul>
            <div className="footer-bottom-social">
            <a href="https://www.facebook.com/Imocentral">
                <img src={FooterSocial} alt="footer" />
              </a>
              <a href="https://instagram.com/imocentral.ro?igshid=MzRlODBiNWFlZA==">
              <img src={FooterSocial2} alt="footerlogo" />
              </a>
              <a href="https://youtube.com/@Imocentral">
              <img src={FooterSocial3} alt="footerlogo" />
              </a>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="row ps-3 pe-3 ">
              <div className="col-lg-6 col-sm-12">
                <p className="footer-bottom-left">IMOCENTRAL 2023</p>
              </div>
              <div className="col-lg-6 col-sm-12">
                <ul className="footer-bottom-right justify-content-end m-0">
                  <li>
                    <a href="#">Terms</a>
                  </li>
                  <li>
                    <a href="#">Privacy</a>
                  </li>
                  <li>
                    <a href="#">Cookies</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
