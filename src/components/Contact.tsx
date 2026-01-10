import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Send } from "lucide-react";
import emailjs from "emailjs-com";

const Contact = () => {
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_96w9y0h",   // ⚡ replace with your EmailJS Service ID
        "template_o2qw90e",  // ⚡ replace with your EmailJS Template ID
        e.currentTarget,
        "VhrSvleTTBjhmF0Vv"    // ⚡ replace with your EmailJS Public Key
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          e.currentTarget.reset(); // clear the form after submit
        },
        (error) => {
          alert("❌ Failed to send message: " + error.text);
        }
      );
  };

  return (
    <section
      id="contact"
      className="
        bg-brand-50 dark:bg-brand-900/30 
        transition-colors duration-300 
        section-padding
      "
    >
      <div className="container mx-auto max-w-5xl">
        {/* ─────── Heading ───────── */}
        <h2 className="section-title text-brand-950 dark:text-white">
          Contact Me
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-6">
          {/* ─── Left: Contact Info ─── */}
          <div>
            <p className="text-brand-800/70 dark:text-brand-300/70 mb-6">
              I’m interested in freelance opportunities – especially ambitious
              or large projects. However, if you have other requests or
              questions, don’t hesitate to use the form.
            </p>

            <div className="space-y-4 mb-6">
              {/* Email Row */}
              <div className="flex items-center gap-4">
                <div
                  className="
                    h-10 w-10 rounded-full 
                    bg-brand-100 dark:bg-brand-800 
                    flex items-center justify-center 
                    text-brand-600 dark:text-brand-400
                  "
                >
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-sm text-brand-700 dark:text-brand-300">
                    Email
                  </p>
                  <a
                    href="mailto:gunisettykrishnasaijyoteesh@gmail.com"
                    className="text-brand-900 dark:text-white font-medium"
                  >
                    gunisettykrishnasaijyoteesh@gmail.com
                  </a>
                </div>
              </div>

              {/* Location Row */}
              <div className="flex items-center gap-4">
                <div
                  className="
                    h-10 w-10 rounded-full 
                    bg-brand-100 dark:bg-brand-800 
                    flex items-center justify-center 
                    text-brand-600 dark:text-brand-400
                  "
                >
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-sm text-brand-700 dark:text-brand-300">
                    Location
                  </p>
                  <p className="text-brand-900 dark:text-white font-medium">
                    Visakhapatnam, India
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ─── Right: Contact Form ─── */}
          <div>
            <form onSubmit={sendEmail} className="space-y-6">
              {/* Name & Email Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-1 text-sm font-medium text-brand-700 dark:text-brand-300"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    required
                    className="
                      mt-1 
                      bg-brand-950/30 dark:bg-brand-800/50 
                      text-white placeholder-brand-400 
                      border border-brand-800 dark:border-brand-700 
                      focus:ring-2 focus:ring-brand-500 
                      transition-colors duration-200
                    "
                  />
                </div>
                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-1 text-sm font-medium text-brand-700 dark:text-brand-300"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your email"
                    required
                    className="
                      mt-1 
                      bg-brand-950/30 dark:bg-brand-800/50 
                      text-white placeholder-brand-400 
                      border border-brand-800 dark:border-brand-700 
                      focus:ring-2 focus:ring-brand-500 
                      transition-colors duration-200
                    "
                  />
                </div>
              </div>

              {/* Subject Field */}
              <div>
                <label
                  htmlFor="subject"
                  className="block mb-1 text-sm font-medium text-brand-700 dark:text-brand-300"
                >
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Subject"
                  required
                  className="
                    mt-1 
                    bg-brand-950/30 dark:bg-brand-800/50 
                    text-white placeholder-brand-400 
                    border border-brand-800 dark:border-brand-700 
                    focus:ring-2 focus:ring-brand-500 
                    transition-colors duration-200
                  "
                />
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block mb-1 text-sm font-medium text-brand-700 dark:text-brand-300"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your message"
                  required
                  className="
                    mt-1 min-h-[150px]
                    bg-brand-950/30 dark:bg-brand-800/50 
                    text-white placeholder-brand-400 
                    border border-brand-800 dark:border-brand-700 
                    focus:ring-2 focus:ring-brand-500 
                    transition-colors duration-200
                  "
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="
                  w-full 
                  bg-brand-500 hover:bg-brand-600 
                  text-white font-semibold 
                  rounded-lg 
                  py-3 flex justify-center items-center gap-2 
                  transition-colors duration-200
                "
              >
                <Send size={16} />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
