const Footer = () => {
  return (
    <footer className="relative mt-20 bg-gray-900 px-4 pt-20 ">
      <div className="absolute -top-10 left-1/2 h-16 w-16 -translate-x-1/2 rounded-xl border-4 border-sky-500 bg-white p-2">
        <img className="h-full object-contain" src="./logo.webp" alt="" />
      </div>
      <nav
        aria-label="Footer Navigation"
        className="mx-auto mb-10 flex max-w-lg flex-col gap-10 text-center sm:flex-row sm:text-left"
      >
        <a href="/about" className="font-medium text-white">
          About
        </a>
        <a href="/services" className="font-medium text-white">
          Services
        </a>
        <a href="/contact" className="font-medium text-white">
          Contact Us
        </a>
        <a href="/tandc" className="font-medium text-white">
          Terms & Conditions
        </a>
      </nav>
      <p className="py-10 text-center text-gray-300">
        © 2024 Tip-Top | All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
