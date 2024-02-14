/* eslint-disable no-unused-vars */
import React from 'react';
import Footer from "../Footers/footer";
import Header from "../Headers/header";
export const Intro = () => {
  return (
    <>
      <Header />
      <div className="mt-2  text-left container mx-auto  group relative block rounded-2xl overflow-hidden dark:focus:outline-none dark:focus:ring-3 dark:focus:ring-gray-200 border-4   border-gray-500">
        <img className='h-20 -z-40 w-full' src="photos/intro_bg.jpg "/>
        <h1 className="text-3xl text-left py-0 font-bold mb-8">Introduction to Cybersecurity</h1>
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">1. Definition:</h2>
          <p className="text-gray-700">
            Cybersecurity, also known as information security or computer
            security, involves the practice of protecting systems, networks, and
            programs from digital attacks, damage, or unauthorized access.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">2. Key Concepts:</h2>
          <ul className="list-disc ml-8">
            <li>Confidentiality: Ensuring that only authorized individuals or systems have access to sensitive information.</li>
            <li>Integrity: Maintaining the accuracy and trustworthiness of data and systems.</li>
          
          </ul>
        </section>
        <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">3. Common Threats:</h2>
            <ul className="list-disc ml-8 text-gray-700">
              <li>Malware: Software designed to harm or exploit computer systems, including viruses, worms, trojans, and ransomware.</li>
              <li>Phishing: Deceptive attempts to obtain sensitive information by pretending to be a trustworthy entity.</li>
              {/* Add the rest of the common threats here */}
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">4. Cybersecurity Measures:</h2>
            <ul className="list-disc ml-8 text-gray-700">
              <li>Firewalls: Network security devices that monitor and control incoming and outgoing traffic based on predetermined security rules.</li>
              <li>Antivirus Software: Programs designed to detect, prevent, and remove malicious software.</li>
              {/* Add the rest of the cybersecurity measures here */}
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">5. Cybersecurity Frameworks:</h2>
            <ul className="list-disc ml-8 text-gray-700">
              <li>NIST Cybersecurity Framework: Developed by the National Institute of Standards and Technology, providing a framework for organizations to manage and improve their cybersecurity risk management.</li>
              <li>ISO/IEC 27001: An international standard for information security management systems (ISMS) that provides a systematic approach to managing sensitive company information.</li>
              {/* Add the rest of the cybersecurity frameworks here */}
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">6. Career Paths:</h2>
            <ul className="list-disc ml-8 text-gray-700">
              <li>Cybersecurity Analyst: Monitors and protects an organization systems and networks from cyber threats.</li>
              <li>Ethical Hacker/Penetration Tester: Identifies and fixes vulnerabilities in systems through authorized simulated attacks.</li>
              {/* Add the rest of the career paths here */}
            </ul>
          </section>
          



        {/* Repeat similar sections for Common Threats, Cybersecurity Measures, Cybersecurity Frameworks, and Career Paths */}

      </div>
      <Footer />
    </>
  );
};

