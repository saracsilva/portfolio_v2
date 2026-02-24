import SectionTitle from "../components/SectionTitle";
import SmileFace from "../components/SmileFace";
import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="scroll-mt-24">
      <SectionTitle title="Contact" />
      <div className="container my-28 px-8 md:px-16 xl:px-32 grid grid-cols-1 lg:grid-cols-5 gap-12 justify-around">
        <div className="lg:col-span-2">
          <h2 className="font-serif font-bold text-5xl italic flex items-center gap-2">
            Hey, <SmileFace />
          </h2>
          <h3 className="text-xl mt-2 font-serif">Love to hear from you!</h3>
          <p className="mt-8 text-justify">
            Send me a message trough the form and I'll get back to you as soon
            as possible! Or find me on GitHub and LinkedIn.
          </p>
        </div>
        <form
          action=""
          className="border flex flex-col lg:col-span-3 pt-8 mx-16 w-full max-w-lg justify-self-center"
        >
          <h3 className="text-2xl pb-8 px-8 font-mono border-b-2">
            Say Hello<span className=" text-primary ">()</span>
          </h3>
          <label className="field" htmlFor="name">
            Name
            <input
              type="text"
              className="py-2 px-2 focus:outline-none"
              id="name"
              name="name"
              placeholder="Your name"
            />
          </label>
          <label className="field" htmlFor="email">
            Email
            <input
              type="email"
              className="py-2 px-2 focus:outline-none"
              id="email"
              name="email"
              placeholder="Your email"
            />
          </label>
          <label className="field" htmlFor="message">
            Message
            <textarea
              name="message"
              rows="5"
              className="px-2 resize-none focus:outline-none"
              id="message"
              placeholder="Your message"
            ></textarea>
          </label>
          <button
            type="submit"
            className="font-mono my-6 mx-8 py-2 border-2 border-primary text-primary hover:bg-primary hover:text-white transition"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
