export function ContactForm() {
  return (
    <div className="w-full">
      <form className="flex flex-col gap-6">
        <div className="items-start flex-col sm:flex sm:items-center gap-6">
          <input
            className="form-styling sm:mb-0 mb-6"
            type="text"
            name="firstname"
            placeholder="First Name"
          />
          <input
            className="form-styling"
            type="text"
            name="lastname"
            placeholder="Last Name"
          />
        </div>
        <input
          className="form-styling"
          type="email"
          name="email"
          placeholder="Email"
        />
        <textarea
          className="form-styling"
          type="text"
          name="message"
          placeholder="Message"
          rows={3}
        />
        <button className="text-[0.9rem] p-[0.7rem] rounded-[0.3rem] sm:text-[1rem] font-medium text-white border-[1.5px] border-solid border-[#a892fe] sm:rounded-[0.6rem] bg-gradient-to-r from-[#a892fe] to-[#8064e8] transition-all duration-300 ease-in-out cursor-pointer hover:text-[#a892fe] transparent">
          SEND
        </button>
      </form>
    </div>
  );
}
