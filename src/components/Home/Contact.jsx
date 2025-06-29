import React, { useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import emailjs from 'emailjs-com';
import myImg from '../../assets/abu-hurayra-syam.jpg';

const Contact = () => {
  const formRef = useRef(null);
  const recaptchaRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage('');

    const recaptchaValue = recaptchaRef?.current?.getValue();
    if (!recaptchaValue) {
      alert('Please verify that you are not a robot.');
      setLoading(false);
      return;
    };

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatusMessage('Message sent successfully!');
        e.target.reset();
        recaptchaRef?.current?.reset();
      })
      .catch(() => {
        setStatusMessage('Failed to send the message. Please try again!');
        setLoading(false);
      });
  };

  const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

  return (
    <div id="contact">
      <div className="mt-25 mb-10">
        <div className="mb-8">
          <p className="text-neutral text-lg text-center font-extrabold mb-2">CONTACT</p>
          <p className="text-accent font-bold text-2xl md:text-3xl text-center">Get in Touch</p>
        </div>
        <div className="container mx-auto flex flex-col md:flex-row">
          <section className="flex w-full md:w-1/2 justify-center">
            <img className="rounded-xl w-[250px] md:w-[500px]" src={myImg} alt="Abu Hurayra Syam" />
          </section>
          <section className="w-full md:w-1/2">
            <p className="text-primary font-extrabold text-lg flex justify-center md:justify-start mt-5 md:mt-0 mb-3">Message</p>
            <p className="text-accent text-[17px] flex justify-center md:justify-start mb-1">
              Write Something about How can I Assist You
            </p>
            <p className="text-neutral flex justify-center md:justify-start mb-1">
              Call Me:&nbsp;
              <a className="text-primary font-bold" href="tel:+8801327062338">+880 1531-759029</a>
            </p>
            <p className="text-neutral flex justify-center md:justify-start mb-5">
              E-Mail:&nbsp;
              <a className="text-primary font-bold" href="mailto:abuhurayrasyamofficial@gmail.com">
                abuhurayrasyamofficial@gmail.com
              </a>
            </p>

            <form ref={formRef} onSubmit={sendEmail} className="p-5 md:pl-0">
              <div className="container mx-auto flex flex-col md:flex-row md:gap-5">
                <div className="w-full md:w-1/2">
                  <input
                    className="bg-secondary text-neutral p-3 rounded-sm focus:outline-none w-full mb-5"
                    type="text"
                    placeholder="Name"
                    name="name"
                    required
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <input
                    className="bg-secondary text-neutral p-3 rounded-sm focus:outline-none w-full mb-5"
                    type="email"
                    placeholder="Email"
                    name="email"
                    required
                  />
                </div>
              </div>
              <input
                className="bg-secondary text-neutral p-3 rounded-sm focus:outline-none w-full mb-5"
                type="text"
                placeholder="Subject"
                name="title"
                required
              />
              <textarea
                className="bg-secondary text-neutral p-3 rounded-sm focus:outline-none w-full h-44 mb-5 resize-none"
                placeholder="Message"
                name="message"
                required
              />
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={siteKey}
                className="mb-5"
              />
              <button
                type="submit"
                disabled={loading}
                className={`bg-primary text-secondary hover:bg-secondary hover:text-primary box-border border-[1px] hover:border-primary rounded-xl p-3 w-full mb-5 md:mb-0 ${
                  loading ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>

            {statusMessage && (
              <p
                className={`mt-3 text-center ${
                  statusMessage.includes('success') ? 'text-green-400' : 'text-red-400'
                }`}
              >
                {statusMessage}
              </p>
            )}
          </section>
        </div>
      </div>
    </div>
  );
};

export default Contact;