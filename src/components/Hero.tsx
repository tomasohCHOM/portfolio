import React from "react";
import { FaDiscord, FaGithub, FaLinkedin, FaPaperPlane } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="flex flex-col gap-4 max-w-lg">
      <h1 className="font-bold text-5xl place-self-start">
        Tomas <span className="text-contrast">Oh</span>
      </h1>
      <p>
        Currently pursuing a bachelor's in Computer Science with a minor in
        Mathematics. I find joy in exploring new technologies and building
        applications.
      </p>
      <p>
        In my free time, I like rock climbing, playing soccer, drawing, and
        hanging out with friends.
      </p>
      <p>
        Reach out to me if you would like to talk! Thanks for looking at my
        portfolio :)
      </p>

      <div className="flex gap-3">
        <a href="https://github.com/tomasohCHOM">
          <FaGithub size={32} />
        </a>
        <a href="https://github.com/tomasohCHOM">
          <FaLinkedin size={32} />
        </a>
        <a href="https://github.com/tomasohCHOM">
          <FaDiscord size={32} />
        </a>
        <a href="https://github.com/tomasohCHOM">
          <FaPaperPlane size={32} />
        </a>
      </div>
    </section>
  );
}
