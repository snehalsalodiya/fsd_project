/* eslint-disable no-unused-vars */
import React from "react"
import Header from "../Headers/header";
import Footer  from "../Footers/footer";
import { useAuth } from "../storage/auth";
import MatrixRainCode from "../MatrixRainCode/MatrixRainCode";
export default function About() {
    const {user} = useAuth();

    return (
       <><Header />
       <MatrixRainCode/>
       <div className="mt-2 py-16 bg-transparent backdrop-blur-lg">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://www.pngarts.com/files/13/Internet-Cyber-Security-PNG-Image.png"
                            alt="image" />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-4xl text-gray-200 font-bold md:text-5xl">
                        Hello , 
                        <label className="text-4xl text-blue-600 font-bold md:text-5xl"> {user.username} </label>
                        <br></br> 
                        About CyberLearn
                        </h2>
                        <br></br>
                        <h2 className="text-2xl text-gray-200 font-bold md:text-4xl">
                        Empowering Minds, Defending Futures</h2>
                        <p className="mt-6 text-gray-200">
                        your go-to destination for learning and raising awareness about cybersecurity. In an age where digital threats loom large, knowledge is your best defense. 
                        At CyberLearn, we are on a mission to equip individuals with the skills and awareness needed to navigate the digital landscape securely.  </p>
                        <p className="mt-4 text-gray-200">
                            
                        </p>
                    </div>
                </div>
            </div>
        </div><Footer/></>
    );
}