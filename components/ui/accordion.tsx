"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";

import type { FaqItem } from "@/lib/types";

type AccordionProps = {
  items: FaqItem[];
};

export function Accordion({ items }: AccordionProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="divide-y divide-white/10 border-y border-white/10">
      {items.map((item, index) => {
        const isOpen = activeIndex === index;

        return (
          <div key={item.question} className="py-5 sm:py-6">
            <button
              type="button"
              className="flex w-full items-start justify-between gap-4 text-left"
              onClick={() => setActiveIndex(isOpen ? -1 : index)}
            >
              <span className="max-w-3xl text-base font-medium text-[var(--color-text)] sm:text-lg">
                {item.question}
              </span>
              <span className="rounded-full border border-white/10 bg-white/[0.03] p-2 text-[var(--color-text)] transition-colors duration-300">
                {isOpen ? <Minus className="size-4" /> : <Plus className="size-4" />}
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.32 }}
                  className="overflow-hidden"
                >
                  <p className="max-w-3xl pt-4 text-sm leading-7 text-[var(--color-muted)] sm:text-base">
                    {item.answer}
                  </p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
