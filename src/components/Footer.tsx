import React from "react";
import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter, Instagram, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-brand-950 text-white py-12 transition-colors duration-300">
      <div className="container mx-auto max-w-5xl px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* ─── Branding ─── */}
          <div
            className="mb-6 md:mb-0 animate-fade-in opacity-0"
            style={{ animationDelay: "0.2s" }}
          >
            <h2 className="text-xl font-bold mb-1">
              Portfolio<span className="text-brand-500">.</span>
            </h2>
            <p className="text-brand-400">Building exceptional digital experiences.</p>
          </div>

          {/* ─── Social Icons ─── */}
          <div
            className="flex gap-4 mb-6 md:mb-0 animate-fade-in opacity-0"
            style={{ animationDelay: "0.4s" }}
          >
            <a
              href="https://github.com/GunisettyKrishnaSaiJyoteesh"
              target="_blank"
              rel="noopener noreferrer"
              className="
                h-10 w-10 rounded-full 
                bg-white/10 flex items-center justify-center 
                hover:bg-brand-500 transition-colors hover:scale-110
              "
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/gunisetty-krishna-sai-jyoteesh/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                h-10 w-10 rounded-full 
                bg-white/10 flex items-center justify-center 
                hover:bg-brand-500 transition-colors hover:scale-110
              "
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://www.instagram.com/sai_jyoteesh/"
              className="
                h-10 w-10 rounded-full 
                bg-white/10 flex items-center justify-center 
                hover:bg-brand-500 transition-colors hover:scale-110
              "
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
          </div>

          {/* ─── Scroll to Top Button ─── */}
          <button
            onClick={scrollToTop}
            className="
              h-10 w-10 rounded-full 
              bg-brand-500 flex items-center justify-center 
              hover:bg-brand-600 transition-colors 
              animate-fade-in opacity-0 glow
            "
            style={{ animationDelay: "0.6s" }}
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>

        {/* ─── Divider & Copyright/Links ─── */}
        <div
          className="
            border-t border-white/10 mt-8 pt-8 
            flex flex-col md:flex-row justify-between 
            items-center animate-fade-in opacity-0
          "
          style={{ animationDelay: "0.8s" }}
        >
          <p className="text-sm text-brand-400">
            © {new Date().getFullYear()} Gunisetty Krishna Sai Jyoteesh. All rights reserved.
          </p>

          <div className="flex gap-4 mt-4 md:mt-0">
            <Link
              to="/privacy-policy"
              className="text-sm text-brand-400 hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-brand-400">|</span>
            <Link
              to="/terms-of-use"
              className="text-sm text-brand-400 hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
