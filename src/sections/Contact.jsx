import SectionTitle from "../components/SectionTitle";
import SmileFace from "../components/SmileFace";
import Button from "../components/Button";
import { RiLinkedinFill } from "react-icons/ri";
import { TbBrandGithubFilled } from "react-icons/tb";

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
          <p className="mt-8 mb-6 text-justify">
            Send me a message trough the form and I'll get back to you as soon
            as possible! Or find me on GitHub and LinkedIn.
          </p>
          <div className="flex gap-3">
            <Button
              variant="default"
              pill
              href="https://github.com/saracsilva"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TbBrandGithubFilled />
            </Button>

            <Button
              variant="default"
              pill
              href="https://linkedin.com/in/sara-carolina-silva/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiLinkedinFill />
            </Button>
          </div>
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
              required
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
              required
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
              required
              placeholder="Your message"
            ></textarea>
          </label>
          <Button className="my-6 mx-8">Send message</Button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
