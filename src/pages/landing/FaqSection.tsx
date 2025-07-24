
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";

const faqData = [
  {
    id: "item-1",
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
  },
  {
    id: "item-2",
    question:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
  },
  {
    id: "item-3",
    question:
      "Lorem ipsum dolor sit amet, conselit? Nunc vulputate libero et velit interdum, ac aliquet odio mattis Class aptent taciti sociosgu?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
  },
  {
    id: "item-4",
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
  },
  {
    id: "item-5",
    question:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
  },
];

const FaqSection = () => {
  return (
    <div className="w-full max-w-7xl mx-auto py-8 px-4 xl:py-16">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-12 text-foreground">
        Frequently Asked Questions
      </h2>
      <div className="relative container mx-auto px-8 xl:px-10 py-4 xl:py-16 flex flex-col lg:flex-row items-center">
        <div className="space-y-4">
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="bg-card border-none mb-4 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <AccordionTrigger
                  hideChevron
                  className="px-6 py-5 text-left hover:no-underline transition-colors duration-200"
                >
                  <div className="flex items-center justify-between w-full">
                    <span className="text-base font-medium text-foreground pr-4 leading-relaxed hover:font-bold hover:no-underline">
                      {faq.question}
                    </span>
                    <div
                      className="accordion-icon flex-shrink-0 w-6 h-6 rounded-full bg-background flex items-center justify-center transition-transform duration-200"
                      style={{
                        transition: "transform 0.2s ease",
                        cursor: "pointer",
                      }}
                    >
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        className="text-white transition-transform duration-200"
                      >
                        <path
                          d="M6 1V11M1 6H11"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 pt-2">
                  <p className="text-heading leading-relaxed">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
