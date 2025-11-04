"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Share } from "@/components/share";
import { url } from "@/lib/metadata";

const questions = [
  {
    question: "What is your favorite color?",
    options: [
      { text: "Red", princess: "Belle" },
      { text: "Blue", princess: "Ariel" },
      { text: "Pink", princess: "Cinderella" },
      { text: "Purple", princess: "Rapunzel" },
    ],
  },
  {
    question: "Which setting do you prefer?",
    options: [
      { text: "Forest", princess: "Belle" },
      { text: "Underwater", princess: "Ariel" },
      { text: "Castle", princess: "Cinderella" },
      { text: "Tower", princess: "Rapunzel" },
    ],
  },
  {
    question: "What is your favorite activity?",
    options: [
      { text: "Reading", princess: "Belle" },
      { text: "Swimming", princess: "Ariel" },
      { text: "Dancing", princess: "Cinderella" },
      { text: "Exploring", princess: "Rapunzel" },
    ],
  },
  {
    question: "Which accessory would you choose?",
    options: [
      { text: "Book", princess: "Belle" },
      { text: "Seashell", princess: "Ariel" },
      { text: "Glass slipper", princess: "Cinderella" },
      { text: "Lantern", princess: "Rapunzel" },
    ],
  },
  {
    question: "What is your dream?",
    options: [
      { text: "Discover love", princess: "Belle" },
      { text: "Explore the sea", princess: "Ariel" },
      { text: "Live happily ever after", princess: "Cinderella" },
      { text: "Find freedom", princess: "Rapunzel" },
    ],
  },
];

const princessImages: Record<string, string> = {
  Belle: "/Belle.png",
  Ariel: "/Ariel.png",
  Cinderella: "/Cinderella.png",
  Rapunzel: "/Rapunzel.png",
  Aurora: "/Aurora.png",
};

export default function Quiz() {
  const [answers, setAnswers] = useState<string[]>(Array(questions.length).fill(""));
  const [result, setResult] = useState<string | null>(null);

  const handleSelect = (qIndex: number, princess: string) => {
    const newAnswers = [...answers];
    newAnswers[qIndex] = princess;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    const counts: Record<string, number> = {};
    answers.forEach((p) => {
      if (p) counts[p] = (counts[p] || 0) + 1;
    });
    const best = Object.entries(counts).reduce(
      (a, b) => (b[1] > a[1] ? b : a),
      ["", 0] as [string, number]
    )[0];
    setResult(best || null);
  };

  return (
    <div className="w-full max-w-md mx-auto p-4 space-y-4">
      {questions.map((q, idx) => (
        <div key={idx} className="space-y-2">
          <p className="font-medium">{q.question}</p>
          <div className="flex flex-wrap gap-2">
            {q.options.map((opt) => (
              <Button
                key={opt.text}
                variant={answers[idx] === opt.princess ? "secondary" : "outline"}
                size="sm"
                onClick={() => handleSelect(idx, opt.princess)}
              >
                {opt.text}
              </Button>
            ))}
          </div>
        </div>
      ))}
      <Button onClick={handleSubmit} className="w-full">
        Find My Princess
      </Button>
      {result && (
        <div className="mt-6 text-center">
          <h2 className="text-xl font-semibold">
            You are most similar to {result}!
          </h2>
          <img
            src={princessImages[result]}
            alt={result}
            className="mx-auto mt-4 size-48 rounded-full"
          />
          <Share
            text={`I just found out I'm most similar to ${result}! Check it out: ${url}`}
            url={url}
            className="mt-4"
          />
        </div>
      )}
    </div>
  );
}
