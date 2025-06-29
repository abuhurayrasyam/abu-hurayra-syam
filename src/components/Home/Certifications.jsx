import React from 'react';

const certificationsData = [
  {
    id: 1,
    title: "Graphic Design",
    provider: "Coderstrust",
    providerUrl: "https://www.coderstrust.net/public/course-details/graphic-design-for-beginners",
    description:
      "This foundational course introduces core graphic design principles and tools. It helped me understand visual design, typography, color theory, and basic software to create appealing digital graphics.",
    certificateUrl: "/certificates/graphics-design.jpg",
  },
  {
    id: 2,
    title: " Cyber Security & Ethical Hacking",
    provider: "Arena Web Security",
    providerUrl: "https://arenawebsecurity.net/cyber-security-ethical-hacking",
    description:
      "An intensive course focused on penetration testing, vulnerability assessment, and ethical hacking techniques to safeguard digital environments.",
    certificateUrl: "/certificates/cyber-security.jpg",
  },
  {
    id: 3,
    title: "Full Stack Web Development (MERN)",
    provider: "Programming Hero",
    providerUrl: "https://web.programming-hero.com/course-details",
    description:
      "A comprehensive full stack web development course, covering JavaScript, React, Node.js, and MongoDB, strengthening my MERN stack expertise.",
    certificateUrl: "/certificates/mern-stack.jpg",
  },
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