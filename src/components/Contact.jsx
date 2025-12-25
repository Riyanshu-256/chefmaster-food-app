const Contact = () => {
  return (
    <div className="min-h-screen bg-[#ffffff] py-[40px]">
      {/* WIDTH CONTROLLER */}
      <div className="max-w-[1100px] mx-auto px-6">
        {/* HEADER */}
        <div className="text-center mb-12">
          <h1 className="text-[38px] text-[#222] font-semibold">Contact Us</h1>
          <p className="text-[#666] mt-2">
            We’d love to hear from you. Get in touch with us!
          </p>
        </div>

        {/* CONTENT CARD */}
        <div
          className="flex gap-14 bg-[#e6e5e5] rounded-[24px] p-12 
                        shadow-[0_30px_70px_rgba(0,0,0,0.12)]
                        max-[900px]:flex-col"
        >
          {/* LEFT SIDE */}
          <div className="flex-1">
            <h2 className="mb-6 text-xl font-semibold">Get in Touch</h2>

            {/* LOCATION */}
            <div className="flex items-center gap-3 mb-5 text-[16px]">
              <span className="text-[20px]">📍</span>
              <p>Bokaro Steel City, Jharkhand, India</p>
            </div>

            {/* INFO TEXT */}
            <div className="mt-3 text-sm text-gray-700 space-y-1">
              <p>⏰ Mon – Sat: 9:00 AM – 8:00 PM</p>
              <p>⚡ Response within 24 hours</p>
            </div>

            {/* EMAIL */}
            <div className="flex items-center gap-3 mt-4 text-[16px]">
              <span className="text-[20px]">📧</span>
              <p>support@chefmaster.com</p>
            </div>

            {/* MAP */}
            <iframe
              title="map"
              src="https://www.google.com/maps?q=Bokaro%20Steel%20City,%20Jharkhand&output=embed"
              loading="lazy"
              className="mt-6 w-full h-[180px] rounded-[14px] shadow-sm border-0"
            />
          </div>

          {/* RIGHT SIDE */}
          <div className="flex-1">
            <h2 className="mb-6 text-xl font-semibold">Send Message</h2>

            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Your Name"
                required
                className="px-[16px] py-[13px] rounded-[12px] border border-[#ddd] text-[15px] outline-none focus:border-black"
              />

              <input
                type="email"
                placeholder="Your Email"
                required
                className="px-[16px] py-[13px] rounded-[12px] border border-[#ddd] text-[15px] outline-none focus:border-black"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                required
                className="px-[16px] py-[13px] rounded-[12px] border border-[#ddd] text-[15px] outline-none focus:border-black resize-none"
              />

              <button
                type="submit"
                className="mt-2 bg-linear-to-r from-[#ffffff] to-[#d5d4d4] text-white py-3 rounded-[14px] text-[16px] font-medium transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
