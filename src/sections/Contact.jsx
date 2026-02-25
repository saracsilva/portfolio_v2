import { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import SmileFace from "../components/SmileFace";
import Button from "../components/Button";
import { RiLinkedinFill } from "react-icons/ri";
import { TbBrandGithubFilled } from "react-icons/tb";
import { LuCircleCheck, LuCircleAlert } from "react-icons/lu";
import emailjs from "@emailjs/browser";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    type: null,
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          "EmailJS configuration is missing. Please check your environment variables.",
        );
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        publicKey,
      );

      setSubmitStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      setSubmitStatus({
        type: "error",
        message:
          error.text || "Failed to send message. Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

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
            Send me a message through the form, and I'll get back to you as soon
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
          className="border flex flex-col lg:col-span-3 mx-16 w-full max-w-lg justify-self-center"
          onSubmit={handleSubmit}
        >
          {submitStatus.type && (
            <div
              className={`flex items-center pl-8 gap-3
                     p-4 ${
                       submitStatus.type === "success"
                         ? "bg-success/10 text-success border-b-2 text-center"
                         : "bg-danger/10 text-danger border-b-2 text-center"
                     }`}
            >
              {submitStatus.type === "success" ? (
                <LuCircleCheck className="w-5 h-5 shrink-0" />
              ) : (
                <LuCircleAlert className="w-5 h-5 shrink-0" />
              )}
              <p className="text-sm">{submitStatus.message}</p>
            </div>
          )}
          <h3 className="text-2xl p-8 font-mono border-b-2">
            Say Hello<span className=" text-primary ">()</span>
          </h3>
          <label className="field" htmlFor="name">
            Name
            <input
              type="text"
              className="py-2 px-2 focus:outline-none"
              id="name"
              required
              placeholder="Your name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </label>
          <label className="field" htmlFor="email">
            Email
            <input
              type="email"
              className="py-2 px-2 focus:outline-none"
              id="email"
              required
              placeholder="Your email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
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
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            ></textarea>
          </label>
          <Button type="submit" className="my-6 mx-8" disabled={isLoading}>
            {isLoading ? <>Sending...</> : <>Send Message</>}
          </Button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
