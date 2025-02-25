const Footer = () => {
  return (
    <footer className="relative mt-20 bg-gray-900 px-4 pt-20 ">
      {/* Logo Positioned Above Footer */}
      <div className="absolute -top-8 left-1/2 h-16 w-16 -translate-x-1/2 rounded-xl border-4 border-sky-500 bg-white p-2">
        <img className="h-full object-contain" src="./logo.webp" alt="Logo" />
      </div>

      {/* Navigation Links */}
      <nav className="mx-auto mb-5 flex max-w-lg flex-wrap justify-center gap-8 text-base text-white">
        <a href="/about" className="hover:text-sky-400 transition">
          About
        </a>
        <a href="/services" className="hover:text-sky-400 transition">
          Services
        </a>
        <a href="/contact" className="hover:text-sky-400 transition">
          Contact
        </a>
        <a href="/tandc" className="hover:text-sky-400 transition">
          T&C
        </a>
      </nav>

      {/* Copyright */}
      <p className="text-center text-sm text-gray-400">
        © 2024 Tip-Top | All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
