import React from "react";

type QuestionItemProps = {
  question: string;
  answer: string;
  index?: number;
};

const QuestionItem: React.FC<QuestionItemProps> = ({ question, answer, index }) => {
  return (
    <details className="group border-b border-slate-300 bg-white py-5 sm:py-6 md:py-8 transition-all duration-300 hover:bg-white/90">
      <summary className="flex cursor-pointer items-start justify-between text-left list-none px-3 sm:px-4 gap-3 sm:gap-4">
        <div className="flex gap-3 sm:gap-5 md:gap-8 min-w-0">
          {/* Numbering */}
          {index !== undefined && (
            <span className="text-xs font-semibold tracking-widest text-[#B89450] mt-1 sm:mt-1.5 shrink-0">
              {index < 10 ? `0${index}` : index}
            </span>
          )}

          <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-stone-600 tracking-tight leading-snug">
            {question}
          </span>
        </div>

        {/* Custom Toggle */}
        <div className="relative flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 mt-0.5 sm:mt-1 shrink-0">
          <div className="absolute h-[2px] w-5 sm:w-6 bg-[#1A1A1A] transition-transform duration-300 group-open:rotate-180" />
          <div className="absolute w-[2px] h-5 sm:h-6 bg-[#1A1A1A] transition-transform duration-300 group-open:rotate-90 group-open:opacity-0" />
        </div>
      </summary>

      {/* Answer Area */}
      <div className="mt-4 sm:mt-5 md:mt-6 px-3 sm:px-4 bg-white lg:pl-[5.5rem] max-w-4xl">
        <div className="border-l-4 border-emerald-600 pl-4 sm:pl-6 md:pl-8 py-2">
          <p className="text-sm sm:text-base md:text-lg text-slate-700 font-semibold leading-relaxed">
            {answer}
          </p>
        </div>
      </div>
    </details>
  );
};

export default QuestionItem;