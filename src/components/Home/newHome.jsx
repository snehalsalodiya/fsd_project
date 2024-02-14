/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../Headers/header";
import Footer from "../Footers/footer";
import MatrixRainCode from "../MatrixRainCode/MatrixRainCode";
import { motion } from "framer-motion";

export default function NewHome() {
    return (
        <div style={{ minHeight: "100vh" }}>
            <Header />
            <div className=" relative">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0 }}
                        className="flex items-center"
                    >
                        <h1 className="main-heading text-8xl font-bold text-center mt-60">
                            <span 
                            className="bg-gradient-to-r from-blue-600 to-green-400 text-transparent bg-clip-text">
                                Cyber Security 
                            </span>
                        </h1>
                    </motion.div>
                    <h6 className="text-3xl font-bold mt-8 text-justify">
                        <span className="bg-gradient-to-r from-white to-slate-600 text-transparent bg-clip-text">
                            Protecting Your Digital World Against Cyber Threats
                        </span>
                    </h6>
                </div>
                <MatrixRainCode />
            </div>
            <Footer />
        </div>
    );
}
