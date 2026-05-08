import { Accordion } from "@/components/ui/accordion";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { faqItems } from "@/data/faq";

export function FAQSection() {
  return (
    <section className="py-24 sm:py-32">
      <SectionHeading
        eyebrow="Suallar"
        title="Əməkdaşlıqdan əvvəl ən vacib sualları əvvəlcədən aydınlaşdırırıq."
        description="Müddət, texniki baza, sonrakı dəyişikliklər və idarəetmə kimi mövzularda şəffaflıq qərarı asanlaşdırır."
      />
      <Container className="max-w-[960px]">
        <Accordion items={faqItems} />
      </Container>
    </section>
  );
}
