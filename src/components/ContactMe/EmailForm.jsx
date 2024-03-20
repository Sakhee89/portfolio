import { useState } from "react";
import emailjs from "@emailjs/browser";

export function EmailForm() {
  const [formFields, setFormFields] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const value = event.target.value;
    setFormFields({
      ...formFields,
      [event.target.name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    emailjs
      .send(
        import.meta.env.VITE_YOUR_SERVICE_ID,
        import.meta.env.VITE_YOUR_TEMPLATE_ID,
        formFields,
        {
          publicKey: import.meta.env.VITE_YOUR_PUBLIC_KEY,
        }
      )
      .then(() => {
        alert("Success, Email Sent!");
        setFormFields({
          firstName: "",
          lastName: "",
          email: "",
          message: "",
        });
      })
      .catch(() => {
        alert("oh no, the message wasn't sent!");
      });
  };

  return (
    <div className="w-full border rounded-[0.3rem] p-8 bg-[#1a103d] border-[#a892fe] sm:rounded-[0.6rem]">
      <h2 className="flex justify-center pb-[1.2rem]">GET IN TOUCH</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div className="items-start flex-col sm:flex sm:items-center gap-6">
          <input
            className="form-styling sm:mb-0 mb-6"
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formFields.firstName}
            required
            onChange={handleChange}
          />
          <input
            className="form-styling"
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formFields.lastName}
            required
            onChange={handleChange}
          />
        </div>
        <input
          className="form-styling"
          type="email"
          name="email"
          placeholder="Email"
          value={formFields.email}
          required
          onChange={handleChange}
        />
        <textarea
          className="form-styling"
          type="text"
          name="message"
          placeholder="Message"
          value={formFields.message}
          required
          rows={3}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="text-[0.9rem] p-[0.7rem] rounded-[0.3rem] sm:text-[1rem] font-medium text-white border-[1.5px] border-solid border-[#a892fe] sm:rounded-[0.6rem] bg-gradient-to-r from-[#a892fe] to-[#8064e8] transition-all duration-300 ease-in-out cursor-pointer hover:text-[#a892fe] hover:bg-gradient-to-r hover:from-transparent"
        >
          SEND
        </button>
      </form>
    </div>
  );
}
