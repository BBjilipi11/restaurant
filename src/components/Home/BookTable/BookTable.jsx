import { useState } from "react";

const BookTable = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    people: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      alert("Please enter your name");
      return;
    }

    if (!formData.email.trim()) {
      alert("Please enter your email");
      return;
    }

    if (!formData.date) {
      alert("Please select a reservation date");
      return;
    }

    if (!formData.people.trim()) {
      alert("Please enter number of people");
      return;
    }

    console.log("Form submitted:", formData);
    alert("Table reservation request submitted successfully!");

    setFormData({
      name: "",
      email: "",
      date: "",
      people: "",
      message: "",
    });
  };

  return (
    <section id="book-table">
      <div className="w-full h-fit md:py-24 py-8 bgBookTable">
        <div className="max-w-[700px] flex flex-col items-start justify-center gap-4 md:px-32 px-8">
          <div className="flex flex-col items-start justify-center">
            <div className="flex items-center justify-center gap-2">
              <div className="w-[10px] h-[10px] bg-blue-600"></div>
              <p className="font-roboto md:text-xl text-base font-bold leading-[32px] text-blue-600">
                Book Now
              </p>
            </div>
            <h5 className="font-bebas md:text-[62px] text-[40px] font-bold md:leading-[62px] leading-[48px] text-white uppercase">
              Book Your Table
            </h5>
          </div>
          <p className="font-roboto text-base font-normal leading-[24px] text-white">
            Reserve your spot at our restaurant and enjoy an unforgettable dining experience in the heart of Kolkata. Book your table now and let us make your meal truly special.
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-start justify-center gap-8 mt-8 md:px-32 px-8"
        >
          <div className="max-w-[635px] md:flex hidden flex-col items-start justify-center gap-6">
            <div className="w-full h-[46px] flex items-center justify-center gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name*"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full h-full py-2 px-4 text-white bg-transparent outline-none border-[1px] border-[#E5E7EB] focus:border-blue-600 transition-colors duration-300"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email*"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full h-full py-2 px-4 text-white bg-transparent outline-none border-[1px] border-[#E5E7EB] focus:border-red transition-colors duration-300"
              />
            </div>
            <div className="w-full h-[46px] flex items-center justify-center gap-4">
              <input
                type="date"
                name="date"
                placeholder="Reservation Date*"
                value={formData.date}
                onChange={handleInputChange}
                required
                className="w-full h-full py-2 px-4 text-white bg-transparent outline-none border-[1px] border-[#E5E7EB] focus:border-red transition-colors duration-300"
              />
              <input
                type="number"
                name="people"
                placeholder="Total People*"
                value={formData.people}
                onChange={handleInputChange}
                min="1"
                required
                className="w-full h-full py-2 px-4 text-white bg-transparent outline-none border-[1px] border-[#E5E7EB] focus:border-red transition-colors duration-300"
              />
            </div>
            <textarea
              name="message"
              placeholder="Message (Optional)"
              value={formData.message}
              onChange={handleInputChange}
              rows={4}
              className="w-full h-full py-2 px-4 text-white bg-transparent outline-none border-[1px] border-[#E5E7EB] focus:border-red transition-colors duration-300 resize-none"
            />
          </div>
          <div className="w-full md:hidden flex flex-col items-start justify-center gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name*"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full h-full py-2 px-4 text-white bg-transparent outline-none border-[1px] border-[#E5E7EB] focus:border-red transition-colors duration-300"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email*"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full h-full py-2 px-4 text-white bg-transparent outline-none border-[1px] border-[#E5E7EB] focus:border-red transition-colors duration-300"
            />
            <input
              type="date"
              name="date"
              placeholder="Reservation Date*"
              value={formData.date}
              onChange={handleInputChange}
              required
              className="w-full h-full py-2 px-4 text-white bg-transparent outline-none border-[1px] border-[#E5E7EB] focus:border-red transition-colors duration-300"
            />
            <input
              type="number"
              name="people"
              placeholder="Total People*"
              value={formData.people}
              onChange={handleInputChange}
              min="1"
              required
              className="w-full h-full py-2 px-4 text-white bg-transparent outline-none border-[1px] border-[#E5E7EB] focus:border-red transition-colors duration-300"
            />
            <textarea
              name="message"
              placeholder="Message (Optional)"
              value={formData.message}
              onChange={handleInputChange}
              rows={4}
              className="w-full h-full py-2 px-4 text-white bg-transparent outline-none border-[1px] border-[#E5E7EB] focus:border-red transition-colors duration-300 resize-none"
            />
          </div>
          <button type="submit" className="common-btn">
            Book Now
          </button>
        </form>
      </div>
    </section>
  );
};

export default BookTable;
