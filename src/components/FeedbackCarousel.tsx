"use client";

import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from "react-icons/fa";
import { homeFeedbacks } from "@/src/lib/content";

export function FeedbackCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeFeedback = homeFeedbacks[activeIndex];

  const goToPrevious = () => {
    setActiveIndex((index) => (index === 0 ? homeFeedbacks.length - 1 : index - 1));
  };

  const goToNext = () => {
    setActiveIndex((index) => (index === homeFeedbacks.length - 1 ? 0 : index + 1));
  };

  return (
    <div className="feedback-carousel mt-12">
      <button
        type="button"
        className="feedback-carousel-control feedback-carousel-control-left"
        aria-label="Show previous feedback"
        onClick={goToPrevious}
      >
        <FaChevronLeft aria-hidden="true" />
      </button>

      <article className="feedback-carousel-card" aria-live="polite">
        <FaQuoteLeft className="feedback-carousel-quote-icon" aria-hidden="true" />
        <p className="feedback-carousel-quote">&quot;{activeFeedback.quote}&quot;</p>
        <div className="feedback-carousel-author">
          <span>{activeFeedback.name}</span>
          <small>{activeFeedback.country}</small>
        </div>
      </article>

      <button
        type="button"
        className="feedback-carousel-control feedback-carousel-control-right"
        aria-label="Show next feedback"
        onClick={goToNext}
      >
        <FaChevronRight aria-hidden="true" />
      </button>

      <div className="feedback-carousel-dots" aria-label="Feedback carousel slides">
        {homeFeedbacks.map((feedback, index) => (
          <button
            type="button"
            className={index === activeIndex ? "is-active" : ""}
            aria-label={`Show feedback from ${feedback.name}`}
            aria-current={index === activeIndex ? "true" : undefined}
            key={feedback.name}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}
