import React from "react";

const Footer = () => {
    return (
        <footer className=" text-white py-6">
            <div className="container mx-auto px-4">
                <div className="flex flex-col h-screen md:flex-row justify-between items-center">
                    {/* Logo or Brand Name */}
                    <div className="text-xl font-bold mb-4 md:mb-0">
                        <a href="/" className="hover:text-gray-400">
                            YourBrand
                        </a>
                    </div>

                    {/* Navigation Links */}
                    <ul className="flex space-x-6 mb-4 md:mb-0">
                        <li>
                            <a
                                href="/about"
                                className="hover:text-gray-400 transition-colors"
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="/services"
                                className="hover:text-gray-400 transition-colors"
                            >
                                Services
                            </a>
                        </li>
                        <li>
                            <a
                                href="/contact"
                                className="hover:text-gray-400 transition-colors"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>

                    {/* Social Media Links */}
                    <div className="flex space-x-4">
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-gray-400 transition-colors"
                        >
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-gray-400 transition-colors"
                        >
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-gray-400 transition-colors"
                        >
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="text-center text-gray-500 text-sm mt-6">
                    © {new Date().getFullYear()} YourBrand. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
