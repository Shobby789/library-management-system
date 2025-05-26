import React from "react";

const BookSummary = () => {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-5 mt-7">
      <div className="col-span-1 lg:col-span-2">
        <h3 className="font-semibold mb-5">Summary</h3>
        <p>
          People in Glass Houses by Jayne Castle (a pseudonym for Jayne Ann
          Krentz) is a science fiction romance set in a future world where
          people with psychic abilities live in harmony with advanced
          technology. The story follows the main characters, Harriet and Sam,
          who are drawn together under unusual circumstances.
          <br />
          <br />
          Harriet, a talented psychic, works for a company that offers psychic
          services in a futuristic society. When she finds herself tangled in a
          dangerous situation involving a mysterious conspiracy, she enlists the
          help of Sam, a former investigator with a dark past. As they uncover
          the secrets surrounding a glass house—a mysterious structure tied to
          their investigation—they must navigate their growing attraction while
          facing hidden dangers.
          <br />
          <br />
          The novel combines elements of mystery, suspense, and romance, with a
          focus on psychic abilities, futuristic technology, and the
          complexities of relationships. The title, "People in Glass Houses,"
          symbolizes the fragile nature of the world the characters inhabit and
          the vulnerabilities they face in their personal and professional
          lives.
        </p>
      </div>
      <div className="col-span-1 lg:col-span-1">
        <iframe
          width="390"
          height="215"
          className="rounded-3xl"
          src="https://www.youtube.com/embed/tgbNymZ7vqY"
        ></iframe>
      </div>
    </div>
  );
};

export default BookSummary;
