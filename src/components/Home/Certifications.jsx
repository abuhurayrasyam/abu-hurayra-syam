import React from 'react';

const certificationsData = [
  {
    id: 1,
    title: "Certificate of Completion in MERN Stack Web Development",
    provider: "Programming Hero",
    providerUrl: "https://web.programming-hero.com/course-details",
    description:
      "Successfully completed a comprehensive full stack web development program specializing in the MERN stack (MongoDB, Express.js, React, Node.js). Developed expertise in designing and implementing secure, scalable, and efficient web applications with modern best practices. Gained practical experience in RESTful API development, user authentication and authorization (including JWT and Firebase Authentication), state management, and responsive UI design using Tailwind CSS.",
    certificateUrl: "/certificates/mern-stack-certificate.jpg",
  },
  {
    id: 2,
    title: "Certificate of Appreciation in Cyber Security",
    provider: "Arena Web Security",
    providerUrl: "https://arenawebsecurity.net/cyber-security-ethical-hacking",
    description:
      "Successfully completed professional training in Cyber Security, with a focus on penetration testing, vulnerability assessment, and ethical hacking techniques. Gained hands-on experience with industry-standard tools like Burp Suite and Acunetix to identify and mitigate security risks — strengthening the security layer of full-stack web applications.",
    certificateUrl: "/certificates/cyber-security-certificate.jpg",
  },
  {
    id: 3,
    title: "Certificate of Achievement in Graphic Design",
    provider: "Coderstrust",
    providerUrl: "https://www.coderstrust.net/public/course-details/graphic-design-for-beginners",
    description:
      "Completed a foundational Graphic Design course focused on design principles, typography, color theory, and hands-on tools like Adobe Photoshop and Illustrator. These skills enhance my front-end development work by improving UI design and visual aesthetics in web applications.",
    certificateUrl: "/certificates/graphics-design-certificate.jpg",
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="mt-25 mb-10 w-11/12 mx-auto">
      <div className="mb-8">
          <p className="text-neutral text-lg text-center font-extrabold mb-2">CERTIFICATIONS</p>
          <p className="text-accent font-bold text-2xl md:text-3xl text-center">Certified skills through focused learning</p>
      </div>

      <div className="space-y-8">
        {certificationsData.map(({ id, title, provider, providerUrl, description, certificateUrl }) => (
          <div
            key={id}
            className="bg-secondary p-6 rounded-xl shadow-lg border border-neutral"
          >
            <h3 className="text-primary text-2xl font-semibold mb-1">{title}</h3>
            <p className="text-accent italic mb-3">
              Offered by{' '}
              <a
                href={providerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-primary transition"
              >
                {provider}
              </a>
            </p>
            <p className="text-neutral mb-4">{description}</p>
            <a
              href={certificateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-secondary text-primary border border-primary px-5 py-2 rounded-lg font-semibold hover:bg-primary hover:text-secondary transition"
            >
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;