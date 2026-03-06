import React, { useState } from "react";

type QuestionItemProps = {
  question: string;
  answer: string;
  index?: number;
};

const QuestionItem: React.FC<QuestionItemProps> = ({ question, answer, index }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,300&display=swap');

        .qi-root { font-family: 'DM Sans', sans-serif; }

        .qi-row::before {
          content: '';
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 0;
          background: #059669;
          opacity: 0.06;
          transition: width 0.5s cubic-bezier(0.16,1,0.3,1);
        }
        .qi-row:hover::before { width: 100%; }

        .qi-answer {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows 0.4s cubic-bezier(0.16,1,0.3,1);
        }
        .qi-answer.open {
          grid-template-rows: 1fr;
        }
        .qi-answer-inner {
          overflow: hidden;
        }
      `}</style>

      <div
        className="qi-root qi-row relative border-b border-slate-200 bg-white cursor-pointer"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onClick={() => setOpen((prev) => !prev)}
      >
        {/* Header Row */}
        <div className="flex items-start justify-between gap-4 px-4 sm:px-6 py-5 sm:py-8 md:py-10">
          <div className="flex gap-5 sm:gap-8 md:gap-10 min-w-0 items-start">

            {/* Index */}
            {index !== undefined && (
              <span
                className="font-mono text-[11px] shrink-0 tabular-nums pt-1.5 transition-colors duration-300"
                style={{ color: open ? "#059669" : "#cbd5e1" }}
              >
                {String(index).padStart(2, "0")}
              </span>
            )}

            <span
              className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold tracking-tight leading-snug transition-all duration-500"
              style={{
                color: "#0f172a",
                transform: open ? "translateX(4px)" : "translateX(0)",
              }}
            >
              {question}
            </span>
          </div>

          {/* Toggle Icon */}
          <div
            className="relative flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 mt-0.5 sm:mt-1 shrink-0 border transition-colors duration-300"
            style={{ borderColor: open ? "#059669" : "#e2e8f0" }}
          >
            <div
              className="absolute h-[1.5px] w-4 transition-all duration-300"
              style={{
                background: open ? "#059669" : "#0f172a",
                transform: open ? "rotate(180deg)" : "rotate(0deg)",
              }}
            />
            <div
              className="absolute w-[1.5px] h-4 transition-all duration-300"
              style={{
                background: open ? "#059669" : "#0f172a",
                transform: open ? "rotate(90deg)" : "rotate(0deg)",
                opacity: open ? 0 : 1,
              }}
            />
          </div>
        </div>

        {/* Animated Answer */}
        <div className={`qi-answer${open ? " open" : ""}`}>
          <div className="qi-answer-inner">
            <div className="px-4 sm:px-6 lg:pl-[5.5rem] pb-6 sm:pb-8 max-w-4xl">
              <div className="border-l-2 border-emerald-600 pl-5 sm:pl-7 py-2">
                <p className="text-sm sm:text-base md:text-lg text-slate-500 font-light leading-relaxed">
                  {answer}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuestionItem;