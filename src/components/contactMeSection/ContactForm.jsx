import React, { useRef, useState, useCallback } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const formRef = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  // Handlers optimized with useCallback
  const handleName = useCallback((e) => setName(e.target.value), []);
  const handleEmail = useCallback((e) => setEmail(e.target.value), []);
  const handleMessage = useCallback((e) => setMessage(e.target.value), []);

  const sendEmail = useCallback(
    (e) => {
      e.preventDefault();

      const templateParams = {
        to_email: email, // The user's email (alex@gmail.com)
        from_name: name, // The user's name (Alex)
        from_email: email, // The user's email again (Alex@gmail.com)
        message: message, // The message from the user
      };

      emailjs
        .send("service_4x2mroe", "template_vtody4b", templateParams, {
          publicKey: "slNs-UZVP4KmdOWbt",
        })
        .then(() => {
          setName("");
          setEmail("");
          setMessage("");
          setShowPopup(true);

          // Hide popup after 3 seconds
          setTimeout(() => setShowPopup(false), 3000);
        })
        .catch((error) => console.error("FAILED...", error.text));
    },
    [name, email, message]
  );

  return (
    <div>
      {/* Success Popup */}
      {showPopup && (
        <div className="fixed top-5 right-5 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg animate-fadeIn">
          ✅ Message Sent Successfully!
        </div>
      )}

      <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-4">
        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          required
          className="h-12 rounded-lg bg-lightBrown px-2"
          value={name}
          onChange={handleName}
        />
        <input
          type="email"
          name="from_email"
          placeholder="Your Email"
          required
          className="h-12 rounded-lg bg-lightBrown px-2"
          value={email}
          onChange={handleEmail}
        />
        <textarea
          name="message"
          rows="9"
          placeholder="Message"
          required
          className="rounded-lg bg-lightBrown p-2"
          value={message}
          onChange={handleMessage}
        />
        <button
          type="submit"
          className="w-full rounded-lg border border-cyan text-white h-12 font-bold text-xl hover:bg-darkCyan bg-cyan transition-all duration-500"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
