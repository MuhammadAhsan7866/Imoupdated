import Layout from "../components/layout/Layout";
import { useRouter } from "next/router";
import React, { useState } from "react";
import axios from "axios";
import { base_url } from "../config";
import { toast } from "react-toastify";
import Head from "next/head";


function Contact() {
    const router = useRouter();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [specification, setSpecification] = useState('');
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');

    const validateForm = () => {
        let errors = {};
        let isValid = true;

        if (!name) {
            isValid = false;
            errors.name = 'Name is required';
        }

        if (!email) {
            isValid = false;
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            isValid = false;
            errors.email = 'Please enter a valid email';
        }

        setErrors(errors);

        return isValid;
    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validateForm()) {

            const res = await axios.post(`${base_url}/contact-us`, {
                name, email, phone, specification
            });

            if (res.data.status === '200') {
                toast.success(res.data.message, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
                setName("");
                setEmail('');
                setPhone('');
                setSpecification('');
                setErrors({});
                router.push('/thank-you')
            } else {
                setSuccessMessage('');
            }
        } else {
            setSuccessMessage('');
        }
    };

    return (
        <>
            <Layout parent="Home" sub="Contact">
                <Head>
                    <title>Contact Us</title>
                </Head>
                <div className="page-content pt-50">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-10 col-lg-12 m-auto">
                                <section className="mb-50">
                                    <div className="row">
                                        <div className="col-xl-8">
                                            <div className="contact-from-area padding-20-row-col">
                                                <h5 className="text-brand mb-10">Contact form</h5>
                                                <h2 className="mb-10">Drop Us a Line</h2>
                                                <p className="text-muted mb-30 font-sm">Your email address will not be published. Required fields are marked *</p>
                                                <form className="contact-form-style mt-30" id="contact-form" onSubmit={handleSubmit}>
                                                    <div className="row">
                                                        <div className="col-lg-12 col-md-12">
                                                            <div className="input-style mb-20">
                                                                <input type="text"
                                                                    className="form-control"
                                                                    name="name"
                                                                    placeholder="Name"
                                                                    value={name}
                                                                    onChange={(e) => setName(e.target.value)}
                                                                />
                                                                {errors.name && <span className="text-danger" style={{ fontSize: '12px' }}>{errors.name}</span>}
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6">
                                                            <div className="input-style mb-20">
                                                                <input type="email"
                                                                    className="form-control"
                                                                    name="email"
                                                                    placeholder="Email"
                                                                    value={email}
                                                                    onChange={(e) => setEmail(e.target.value)}
                                                                />
                                                                {errors.email && <span className="text-danger" style={{ fontSize: '12px' }}>{errors.email}</span>}
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6">
                                                            <div className="input-style mb-20">
                                                                <input type="tel"
                                                                    className="form-control"
                                                                    name="phone"
                                                                    placeholder="Phone"
                                                                    value={phone}
                                                                    onChange={(e) => setPhone(e.target.value)}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 col-md-12">
                                                            <div className="textarea-style mb-30">
                                                                <textarea

                                                                    name="specification"
                                                                    placeholder="Specification"
                                                                    value={specification}
                                                                    onChange={(e) => setSpecification(e.target.value)}>

                                                                </textarea>
                                                            </div>
                                                            <button className="submit submit-auto-width" type="submit">Send message</button>
                                                        </div>
                                                    </div>
                                                </form>
                                                <p className="form-messege"></p>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 mt-100 pl-50 d-lg-block d-none">
                                            <img className="border-radius-15 mt-50" src="/assets/imgs/xp/icons/sidebar-ad.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="row mt-60 mb-60">
                                        <div className="col-md-4 mb-4 mb-md-0">
                                            <h4 className="mb-15 text-brand">XPERTS PACKAGING, LLC</h4>
                                            8 The Green Ste R Dover, DE 19901, USA <br />
                                            <abbr title="Phone">Phone:</abbr> <a href="tel:(888)-716-1078">(888)-716-1078</a><br />
                                            <abbr title="Email">Email:</abbr> <a href="mailto:inquiry@xpertspackaging.com"> inquiry@xpertspackaging.com</a> <br />
                                        </div>
                                        <div className="col-md-4 mb-4 mb-md-0">
                                            <h4 className="mb-15 text-brand">XPERTS PACKAGING, LTD</h4>
                                            Flat 89d 4 Mann Island, Liverpool, Merseyside, <br />
                                            United Kingdom, L3 1BP<br />
                                            <abbr title="Phone">Phone:</abbr> <a href="tel:+447857914457">+447857914457</a><br />
                                            <abbr title="Email">Email:</abbr> <a href="mailto:inquiry@xpertspackaging.com"> inquiry@xpertspackaging.com</a> <br />
                                        </div>
                                        <div className="col-md-4 mb-4 mb-md-0">
                                            <h4 className="mb-15 text-brand">XPERTS PACKAGING</h4>
                                            712-210 Woodridge Crescent, Ottawa, <br />
                                            ON Canada K2B 8E9<br />
                                            <abbr title="Phone">Phone:</abbr> <a href="tel:(888)-716-1078">(888)-716-1078</a><br />
                                            <abbr title="Email">Email:</abbr> <a href="mailto:inquiry@xpertspackaging.com"> inquiry@xpertspackaging.com</a> <br />
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}

export default Contact;
