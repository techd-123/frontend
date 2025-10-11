import React, { useState } from "react";

const ConfusedSection = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Select your vendor");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [errors, setErrors] = useState({});

  const vendors = ["Photographers", "Caterers", "Planners", "Venues"];

  const validateForm = () => {
    let formErrors = {};
    if (!name.trim()) formErrors.name = "Name is required";
    if (!mobile.trim()) {
      formErrors.mobile = "Mobile number is required";
    } else if (!/^[0-9]{10}$/.test(mobile)) {
      formErrors.mobile = "Enter a valid 10-digit number";
    }
    if (selected === "Select your vendor")
      formErrors.vendor = "Please select a vendor";
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      setErrors({});
      // ✅ Submit form data here (API call or console.log)
      console.log({ name, mobile, vendor: selected });
      alert("Form submitted successfully!");
    }
  };

  return (
    <section className="bg-[#f9efe9] py-12 px-4 flex justify-center items-center">
      <div className="max-w-5xl w-full text-center border border-purple-400 rounded-lg p-8 flex flex-col gap-5">
        <h2 className="text-2xl md:text-3xl font-bold text-[#3b0b3e] mb-2">
          Still Confused On Your Decision ?
        </h2>
        <p className="text-gray-600 mb-6">
          One of our team members will give you a quick call to understand what
          you’re looking for and connect you with trusted vendors who fit your
          needs.
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row items-center gap-4 relative"
        >
          {/* Name Input */}
          <div className="w-full md:w-1/4">
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`w-full px-4 py-2 rounded-md border ${
                errors.name ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-purple-400`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          {/* Mobile Input */}
          <div className="w-full md:w-1/4">
            <input
              type="text"
              placeholder="Enter your mobile number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className={`w-full px-4 py-2 rounded-md border ${
                errors.mobile ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-purple-400`}
            />
            {errors.mobile && (
              <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>
            )}
          </div>

          {/* Custom Dropdown */}
          <div className="relative w-full md:w-1/4">
            <div
              className={`px-4 py-2 border rounded-md bg-white cursor-pointer text-left ${
                errors.vendor ? "border-red-500" : "border-gray-300"
              }`}
              onClick={() => setOpen(!open)}
            >
              {selected}
            </div>

            {open && (
              <ul className="absolute bottom-full mb-2 w-full bg-white border rounded-md shadow-md z-10">
                {vendors.map((vendor, idx) => (
                  <li
                    key={idx}
                    onClick={() => {
                      setSelected(vendor);
                      setOpen(false);
                    }}
                    className="px-4 py-2 hover:bg-purple-100 cursor-pointer"
                  >
                    {vendor}
                  </li>
                ))}
              </ul>
            )}
            {errors.vendor && (
              <p className="text-red-500 text-sm mt-1">{errors.vendor}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full md:w-auto bg-purple-600 hover:bg-purple-700 text-white font-medium px-8 py-2 rounded-md"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ConfusedSection;
