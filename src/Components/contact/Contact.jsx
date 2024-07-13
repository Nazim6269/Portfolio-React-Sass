import { Button } from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";
import "./contact.scss";

export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };

  return (
    <div className="contact" id="contact">
      <h1>Get Contact</h1>
      <div className="leftWrapper">
        <div className="left">
          <motion.img
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 8,
              ease: "linear",
            }}
            src="reactNoBackground.png"
            alt=""
          />
        </div>
        <div className="right">
          <h2>Contact</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Email" />
            <textarea placeholder="Message"></textarea>
            <div className="btn">
              <Button variant="contained" className="button">
                {" "}
                Send
              </Button>
            </div>
            {message && <span>Thanks, I&apos;ll reply ASAP :</span>}
          </form>
        </div>
      </div>
    </div>
  );
}
