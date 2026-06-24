import { useState } from "react";

export default function Model({ closeModel }) {
  const [inputValues, setInputValues] = useState({
    name: "",
    email: "",
    budget: "",
    message: "",
  });
  return (
    <div className="fixed inset-0 w-full h-screen bg-black/50 backdrop-blur-[6px] flex items-center justify-center z-[999]" onClick={closeModel}>
      <div className="w-1/2 max-w-full bg-card-bg text-light p-[25px] rounded-[16px] border border-border-color shadow-[0_10px_30px_rgba(0,0,0,0.3)] animate-pop max-[991px]:w-[90%]" onClick={(e) => e.stopPropagation()}>
        <h2 className="text-center mb-5 text-light font-bold text-[24px]">Hire Me</h2>

        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="mb-[15px]">
            <label className="block mb-1.5 text-[14px] text-paragraph" htmlFor="name">Name</label>
            <input
              className="w-full p-2.5 rounded-[10px] border border-border-color bg-bg text-light outline-none transition-all duration-[300ms] focus:border-primary focus:ring-[3px] focus:ring-primary-blur"
              value={inputValues.name}
              onChange={(e) => {
                setInputValues({ ...inputValues, name: e.target.value });
              }}
              type="text"
              id="name"
              placeholder="Enter your name"
              name="name"
            />
          </div>

          <div className="mb-[15px]">
            <label className="block mb-1.5 text-[14px] text-paragraph" htmlFor="email">Email</label>
            <input
              className="w-full p-2.5 rounded-[10px] border border-border-color bg-bg text-light outline-none transition-all duration-[300ms] focus:border-primary focus:ring-[3px] focus:ring-primary-blur"
              value={inputValues.email}
              onChange={(e) => {
                setInputValues({ ...inputValues, email: e.target.value });
              }}
              type="email"
              id="email"
              placeholder="Enter your email"
              name="email"
            />
          </div>
          <div className="mb-[15px]">
            <label className="block mb-1.5 text-[14px] text-paragraph" htmlFor="budget">Budget</label>
            <select
              className="w-full p-2.5 rounded-[10px] border border-border-color bg-bg text-light outline-none transition-all duration-[300ms] focus:border-primary focus:ring-[3px] focus:ring-primary-blur"
              id="budget"
              name="budget"
              value={inputValues.budget}
              onChange={(e) => {
                setInputValues({ ...inputValues, budget: e.target.value });
              }}
            >
              <option value="" disabled>
                Your Budget
              </option>
              <option>Less Than 300$</option>
              <option>Between 300$ - 500$</option>
              <option>Between 500$ - 1000$</option>
              <option>Greater Than 1000$</option>
            </select>
          </div>

          <div className="mb-[15px]">
            <label className="block mb-1.5 text-[14px] text-paragraph" htmlFor="message">Message</label>
            <textarea
              className="w-full p-2.5 rounded-[10px] border border-border-color bg-bg text-light outline-none transition-all duration-[300ms] focus:border-primary focus:ring-[3px] focus:ring-primary-blur resize-none"
              value={inputValues.message}
              onChange={(e) => {
                setInputValues({ ...inputValues, message: e.target.value });
              }}
              name="message"
              id="message"
              rows="4"
              placeholder="Describe your project, timeline, and budget..."
            ></textarea>
          </div>

          <div className="flex gap-2.5 mt-[15px]">
            <button type="submit" className="flex-1 p-3 rounded-[10px] border-none cursor-pointer font-bold transition-all duration-[300ms] bg-primary text-white hover:opacity-90">
              Send
            </button>
            <button type="button" className="flex-1 p-3 rounded-[10px] border border-border-color cursor-pointer font-bold transition-all duration-[300ms] bg-secondary-blur text-light hover:bg-secondary hover:text-white hover:border-transparent" onClick={closeModel}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
