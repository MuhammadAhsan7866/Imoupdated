import WhatsAppIcon from "../assets/images/svg/WhatsApp.svg";
import GmailIcon from "../assets/images/svg/Gmail.svg";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

function SecondForm() {
    const [propertyType2, setPropertyType2] = useState("");
    const [phone2, setPhone2] = useState("");
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState(""); // Define successMessage state
    const validateForm2 = () => {
        let isValid = true;
        let errors = {};

        if (!propertyType2) {
            isValid = false;
            errors.propertyType2 = "Property Type is required";
        }

        if (!phone2) {
            isValid = false;
            errors.phone2 = "Phone is required";
        }

        setErrors(errors);

        return isValid;
    };
    const sendWhatsApp2 = (e) => {
        if (validateForm2()) {
            e.preventDefault();
            const message =
                `Tip proprietate: ${propertyType2}\n` +
                `Nr. de Telefon: ${phone2}`;

            // Replace `YOUR_PHONE_NUMBER` with your  phone number
            const phoneNumber = "whatsapp:+40371232787";

            const encodedMessage = encodeURIComponent(message);
            const encodedPhoneNumber = encodeURIComponent(phoneNumber);

            const whatsappURL = `https://api.whatsapp.com/send?phone=${encodedPhoneNumber}&text=${encodedMessage}`;

            window.open(whatsappURL, "_blank");
        }
    };
    const handleSubmit2 = async (e) => {
        e.preventDefault();

        if (validateForm2()) {
            let formData = {
                selection: 'vand',
                property_type: propertyType2,
                location: '',
                approximate_price: '',
                phone: phone2,
            }
            emailjs.send('service_f1te14u', 'template_k2hqo0k', formData, '67b-OO6NkbSWJChEx')
                .then((result) => {
                    console.log(result.status)
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

            setPhone2("");
            setPropertyType2("");
            setErrors({});
        }

    };


    return (
        <>
            <div className="col-lg-5 col-sm-12">
                <div className="BannerForm">
                    <h3>Doresc sa</h3>
                    <ul
                        className="nav nav-pills nav-fill gap-2 p-1 small bg-primary rounded-5 shadow-sm  m-auto custom-tbss"
                        id="pillNav2"
                        role="tablist"
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
                                Vand
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
                                tabIndex="-1"
                            >
                                Inchiriez
                            </button>
                        </li>
                    </ul>
                    <p className="BannerFormDesc">
                        Te rugam sa ne dai informatiile cat mai concrete,un consultant
                        Imocentral te va contacta in curand.
                    </p>
                    <form>
                        <fieldset>
                            <div className="mb-2">
                                <label htmlFor="disabledSelect" className="form-label">
                                    Tip proprietate
                                </label>
                                <div className="customSelect">
                                    <select
                                        id="disabledSelect"
                                        className="form-select"
                                        name="property_type"
                                        value={propertyType2}
                                        onChange={(e) => setPropertyType2(e.target.value)}
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
                                {errors.propertyType2 && (
                                    <span
                                        className="text-danger"
                                        style={{fontSize: "12px"}}
                                    >
                          {errors.propertyType2}
                        </span>
                                )}
                            </div>
                            <div className="mb-2">
                                <label
                                    htmlFor="disabledTextInput3"
                                    className="form-label"
                                >
                                    Nr. de Telefon
                                </label>
                                <input
                                    type="text"
                                    id="disabledTextInput3"
                                    className="form-control"
                                    placeholder="0740 000 000"
                                    name="phone"
                                    value={phone2}
                                    onChange={(e) => setPhone2(e.target.value)}
                                />
                                {errors.phone2 && (
                                    <span
                                        className="text-danger"
                                        style={{fontSize: "12px"}}
                                    >
                          {errors.phone2}
                        </span>
                                )}
                            </div>
                            <div className="mb-2">
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="disabledFieldsetCheck"
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="disabledFieldsetCheck"
                                    >
                                        Accept <a href="#">Termeni si Conditii</a>
                                    </label>
                                </div>
                            </div>
                        </fieldset>
                    </form>
                    <div className="socialSignup">
                        <legend>Trimite solicitarea prin:</legend>
                        <ul>
                            <li>
                                <img src={WhatsAppIcon} onClick={sendWhatsApp2} alt=""/>
                            </li>
                            {/* <li>
                      <img src={TelegramIcon} onClick={sendTelegram} alt="" />
                    </li> */}
                            <li>
                                <img src={GmailIcon} onClick={handleSubmit2} alt=""/>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
            );

}
export default SecondForm;