import React from "react";

const Footer = () => {
  const footerLinks = [
    [
      "FAQ",
      "Investor Relations",
      "Ways to Watch",
      "Corporate Information",
      "Legal Notices",
    ],
    [
      "Help Centre",
      "Jobs",
      "Terms of Use",
      "Contact Us",
      "Only on Netflix",
    ],
    [
      "Account",
      "Redeem gift cards",
      "Privacy",
      "Speed Test",
      "Advert choices",
    ],
    [
      "Media Centre",
      "Buy gift cards",
      "Cookie Preferences",
      "Legal Guarantee",
    ],
  ];

  return (
    <footer className="bg-black text-gray-400 py-10 px-4 w-screen">
      <div className="max-w-6xl mx-auto">
        <p className="mb-8 underline text-sm cursor-pointer">
          Questions? Contact us.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-sm">
          {footerLinks.map((column, colIdx) => (
            <div key={colIdx} className="space-y-3">
              {column.map((link, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="block hover:underline transition duration-200"
                >
                  {link}                      
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;