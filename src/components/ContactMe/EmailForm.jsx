import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

export function EmailForm() {
  const [formFields, setFormFields] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const value = event.target.value;
    setFormFields({
      ...formFields,
      [event.target.name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

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
        setLoading(false);
        alert("Thank you. I will get back to you as soon as possible.");
        setFormFields({
          firstName: "",
          lastName: "",
          email: "",
          message: "",
        });
      })
      .catch(() => {
        setLoading(false);
        alert("Ahh, something went wrong. Please try again.");
      });
  };

  return (
    <div className="w-full border rounded-[0.5rem] p-9 bg-[#1a103d] border-[#6751b9] sm:rounded-[0.6rem] overflow-hidden">
      <h2 className="flex justify-center pb-[2rem] text-[20px] text-[#e4dbdb] font-bold">
        Contact Me
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div className="items-start flex-col sm:flex sm:items-center gap-6">
          <div className="flex gap-7">
            <label className="text-[0.9rem] text-[#d1c2c2]">
              First Name
              <input
                className="form-input-styling"
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formFields.firstName}
                required
                onChange={handleChange}
              />
            </label>
            <label className="text-[0.9rem] text-[#d1c2c2]">
              Last Name
              <input
                className="form-input-styling"
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formFields.lastName}
                required
                onChange={handleChange}
              />
            </label>
          </div>
        </div>
        <label className="text-[0.9rem] text-[#d1c2c2]">
          Email
          <input
            className="form-input-styling"
            type="email"
            name="email"
            placeholder="Email"
            value={formFields.email}
            required
            onChange={handleChange}
          />
        </label>
        <label className="text-[0.9rem] text-[#d1c2c2]">
          Message
          <textarea
            className="form-input-styling"
            type="text"
            name="message"
            placeholder="Message"
            value={formFields.message}
            required
            rows={4}
            onChange={handleChange}
          />
        </label>
        <motion.button
          whileHover={{ scale: 1.05 }}
          type="submit"
          className="text-[0.9rem] p-[0.7rem] rounded-[0.3rem] sm:text-[1rem] font-bold text-white border-[1.5px] border-solid border-[#a892fe] sm:rounded-[0.6rem] bg-gradient-to-r from-[#7d60ef] to-[#532ed8] transition-all duration-300 ease-in-out cursor-pointer hover:text-[#a892fe] hover:bg-gradient-to-r hover:from-transparent flex justify-center shadow-md shadow-primary"
        >
          {loading ? (
            "Sending..."
          ) : (
            <>
              SEND&nbsp;<span className="md:block hidden">MESSAGE</span>
            </>
          )}
        </motion.button>
      </form>
    </div>
  );
}
