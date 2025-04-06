import React, { useRef, useState, useCallback } from "react";

const ContactForm = () => {
  const formRef = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(null); // 'success' or 'error'

  const handleName = useCallback((e) => setName(e.target.value), []);
  const handleEmail = useCallback((e) => setEmail(e.target.value), []);
  const handleMessage = useCallback((e) => setMessage(e.target.value), []);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("message", message);

      try {
        const response = await fetch("https://formspree.io/f/mblgpjyj", {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
          body: formData,
        });

        if (response.ok) {
          setName("");
          setEmail("");
          setMessage("");
          setStatus("success");
        } else {
          throw new Error("Form submission failed.");
        }
      } catch (err) {
        console.error("Form error:", err);
        setStatus("error");
      }

      setTimeout(() => setStatus(null), 3000);
    },
    [name, email, message]
  );

  return (
    <div className="w-full max-w-xl mx-auto px-4">
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="flex flex-col gap-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="h-12 rounded-lg bg-lightBrown px-4 text-base placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan"
          value={name}
          onChange={handleName}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="h-12 rounded-lg bg-lightBrown px-4 text-base placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan"
          value={email}
          onChange={handleEmail}
        />
        <textarea
          name="message"
          rows="6"
          placeholder="Message"
          required
          className="rounded-lg bg-lightBrown px-4 py-3 text-base placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan resize-none"
          value={message}
          onChange={handleMessage}
        />
        <button
          type="submit"
          className="w-full rounded-lg border border-cyan text-white h-12 font-semibold text-lg hover:bg-darkCyan bg-cyan transition-all duration-300"
        >
          Send
        </button>

        {/* Message below button */}
        {status === "success" && (
          <p className="text-green-600 font-medium text-center">
            ✅ Message sent successfully!
          </p>
        )}
        {status === "error" && (
          <p className="text-red-600 font-medium text-center">
            ❌ Failed to send message. Please try again.
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
