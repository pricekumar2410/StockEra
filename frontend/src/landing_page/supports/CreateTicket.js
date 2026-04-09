// import React, { useState } from 'react';
// import axios from 'axios';
// import { useForm } from "react-hook-form";
// import toast, { Toaster } from 'react-hot-toast';

// function CreateTicket() {
//     const [showModal, setShowModal] = useState(false);
//     const [selectedTopic, setSelectedTopic] = useState("");

//     // React Hook Form setup
//     const {
//         register,
//         handleSubmit,
//         setValue,
//         reset,
//         formState: { errors },
//     } = useForm();

//     const ticketCategories = [
//         {
//             title: "Account Opening",
//             icon: "fa-plus-circle",
//             links: ["Online Account Opening", "Offline Account Opening", "Charges & Fees", "KYC Status"]
//         },
//         {
//             title: "Your Account",
//             icon: "fa-user",
//             links: ["Login Credentials", "Bank Details Update", "Profile Modification", "Nominee Addition"]
//         },
//         {
//             title: "Trading (Kite)",
//             icon: "fa-bar-chart",
//             links: ["How to Buy/Sell", "Order Types", "Margin & Leverage", "Kite Mobile App"]
//         },
//         {
//             title: "Funds & Payments",
//             icon: "fa-credit-card",
//             links: ["Adding Funds (UPI/Net)", "Withdrawal Process", "Failed Transactions", "Bank Account Issues"]
//         },
//         {
//             title: "Portfolio (Console)",
//             icon: "fa-dashboard",
//             links: ["Holdings & P&L", "Tax Reports", "IPO Application", "Corporate Actions"]
//         },
//         {
//             title: "Mutual Funds (Coin)",
//             icon: "fa-btc",
//             links: ["Starting an SIP", "Buying Mutual Funds", "Managing Portfolio", "Coin App Support"]
//         }
//     ];

//     // Modal Open Handler
//     const handleLinkClick = (topic) => {
//         setSelectedTopic(topic);
//         setValue("topic", topic); // Hidden ya Readonly field me value set karne ke liye
//         setShowModal(true);
//     };

//     // Form Submission Logic (from your code)
//     const onSubmit = async (data) => {
//         const userInfo = {
//             topic: data.topic,
//             name: data.name,
//             email: data.email,
//             message: data.message
//         };
//         try {
//             await axios.post("https://getform.io/f/broggjqa", userInfo);
//             toast.success("Ticket created successfully!");
//             setShowModal(false);
//             reset(); // Form clear karne ke liye
//         } catch (error) {
//             console.log(error);
//             toast.error("Failed to create ticket. Try again.");
//         }
//     };

//     return (
//         <>
//             <Toaster />
//             <style>
//                 {`
//                 .ticket-section { background: #fff; padding: 60px 0; font-family: 'Inter', sans-serif; }
//                 .category-title { font-size: 1.25rem; font-weight: 600; margin-bottom: 1rem; color: #333; display: flex; align-items: center; }
//                 .category-title i { margin-right: 10px; color: #666; }
//                 .link-list { list-style: none; padding: 0; }
//                 .link-list li { margin-bottom: 8px; }
//                 .link-list a { text-decoration: none; color: #387ed1; font-size: 0.95rem; cursor: pointer; transition: 0.2s; }
//                 .link-list a:hover { color: #d32f2f; text-decoration: underline; }

//                 /* Popup / Modal Styling */
//                 .modal-overlay {
//                     position: fixed;
//                     top: 0; left: 0; width: 100%; height: 100%;
//                     background: rgba(0,0,0,0.5);
//                     display: flex; justify-content: center; align-items: center;
//                     z-index: 10000;
//                     backdrop-filter: blur(4px);
//                 }
//                 .ticket-modal {
//                     background: white;
//                     width: 100%;
//                     max-width: 450px;
//                     padding: 25px;
//                     border-radius: 15px;
//                     box-shadow: 0 10px 25px rgba(0,0,0,0.2);
//                     position: relative;
//                 }
//                 .close-btn {
//                     position: absolute;
//                     top: 15px; right: 20px;
//                     font-size: 1.5rem; cursor: pointer; color: #999;
//                 }
//                 .form-group { margin-bottom: 15px; }
//                 .form-group label { display: block; font-weight: 500; margin-bottom: 5px; color: #555; font-size: 0.9rem;}
//                 .input-field {
//                     width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 8px; outline: none;
//                 }
//                 .input-field:focus { border-color: #387ed1; }
//                 .error-msg { color: #d32f2f; font-size: 0.75rem; margin-top: 3px; }
//                 .submit-btn {
//                     width: 100%; background: #222; color: white; border: none;
//                     padding: 12px; border-radius: 8px; font-weight: 600; cursor: pointer;
//                     transition: 0.3s; margin-top: 10px;
//                 }
//                 .submit-btn:hover { background: #444; }
//                 `}
//             </style>

//             <div className='container ticket-section'>
//                 <h2 className='text-center mb-5 text-muted'>To create a ticket, select a relevant topic</h2>
//                 <div className='row'>
//                     {ticketCategories.map((category, index) => (
//                         <div key={index} className='col-lg-4 col-md-6 mb-4'>
//                             <div className='p-3'>
//                                 <p className='category-title'>
//                                     <i className={`fa ${category.icon}`}></i> {category.title}
//                                 </p>
//                                 <ul className='link-list'>
//                                     {category.links.map((link, i) => (
//                                         <li key={i}>
//                                             <a onClick={() => handleLinkClick(link)}>{link}</a>
//                                         </li>
//                                     ))}
//                                 </ul>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             {/* Popup Modal Form */}
//             {showModal && (
//                 <div className='modal-overlay'>
//                     <div className='ticket-modal'>
//                         <span className='close-btn' onClick={() => setShowModal(false)}>&times;</span>
//                         <h4 className='mb-4 font-bold'>Create Support Ticket</h4>

//                         <form onSubmit={handleSubmit(onSubmit)}>
//                             {/* Extra Input: Selected Topic */}
//                             <div className='form-group'>
//                                 <label>Selected Topic</label>
//                                 <input
//                                     {...register("topic")}
//                                     className='input-field'
//                                     style={{ background: '#f4f4f4', cursor: 'not-allowed' }}
//                                     readOnly
//                                 />
//                             </div>

//                             <div className='form-group'>
//                                 <label>Full Name</label>
//                                 <input
//                                     {...register("name", { required: "Name is required" })}
//                                     className='input-field'
//                                     placeholder='Your Name'
//                                 />
//                                 {errors.name && <p className='error-msg'>{errors.name.message}</p>}
//                             </div>

//                             <div className='form-group'>
//                                 <label>Email Address</label>
//                                 <input
//                                     {...register("email", {
//                                         required: "Email is required",
//                                         pattern: { value: /^\S+@\S+$/i, message: "Invalid email" }
//                                     })}
//                                     className='input-field'
//                                     placeholder='example@mail.com'
//                                 />
//                                 {errors.email && <p className='error-msg'>{errors.email.message}</p>}
//                             </div>

//                             <div className='form-group'>
//                                 <label>Describe Issue</label>
//                                 <textarea
//                                     {...register("message", { required: "Please describe your problem" })}
//                                     className='input-field'
//                                     rows="4"
//                                     placeholder='How can we help?'
//                                 ></textarea>
//                                 {errors.message && <p className='error-msg'>{errors.message.message}</p>}
//                             </div>

//                             <button type='submit' className='submit-btn'>
//                                 Send Message
//                             </button>
//                         </form>
//                     </div>
//                 </div>
//             )}
//         </>
//     );
// }

// export default CreateTicket;