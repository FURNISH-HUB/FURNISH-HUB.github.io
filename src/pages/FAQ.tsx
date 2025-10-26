import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How long does shipping take?",
      answer: "Standard shipping takes 5-7 business days for most locations. Express shipping options are available for 2-3 day delivery. Free standard shipping is available on orders over $500."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy on most items. Items must be in original, unused condition with all tags and packaging intact. Custom or made-to-order items are non-returnable."
    },
    {
      question: "Do you offer assembly services?",
      answer: "Yes! We offer white glove delivery service which includes delivery to the room of your choice, unpacking, assembly, and removal of packaging materials. This service is available for an additional fee at checkout."
    },
    {
      question: "What materials are your furniture made from?",
      answer: "We use high-quality, sustainable materials including solid hardwoods, premium fabrics, and eco-friendly finishes. Each product page includes detailed material information specific to that item."
    },
    {
      question: "Can I customize furniture pieces?",
      answer: "Select pieces in our collection are available for customization. You can choose from different fabric options, finishes, and sizes. Contact our design team for more information about customization options."
    },
    {
      question: "Do you have showrooms where I can see the furniture in person?",
      answer: "Yes! We have showrooms in major cities. Visit our Contact page for locations and hours. We recommend scheduling an appointment to ensure you get personalized attention from our design team."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express, Discover), PayPal, and wire transfers. Financing options are also available for qualifying purchases over $1,000."
    },
    {
      question: "How do I care for my furniture?",
      answer: "Each piece comes with specific care instructions. Generally, we recommend regular dusting, avoiding direct sunlight, using coasters for drinks, and professional cleaning for upholstered items. Detailed care guides are included with your purchase."
    },
    {
      question: "What if my furniture arrives damaged?",
      answer: "Please inspect your furniture upon delivery. If there's any damage, note it on the delivery receipt and contact us immediately. We'll arrange for repair or replacement at no cost to you."
    },
    {
      question: "Do you offer trade or designer discounts?",
      answer: "Yes! We offer special pricing for interior designers, architects, and trade professionals. Please contact our trade department at trade@furnish.com to set up an account."
    },
    {
      question: "How can I track my order?",
      answer: "Once your order ships, you'll receive a tracking number via email. You can track your shipment in real-time through our website or directly through the carrier's website."
    },
    {
      question: "What is your price match policy?",
      answer: "We stand behind our pricing and quality. If you find an identical item at a lower price from an authorized retailer, we'll match it. Contact us with proof of the lower price within 14 days of your purchase."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-muted py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-muted-foreground">Find answers to common questions about our products and services</p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold hover:text-accent">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 bg-muted p-8 rounded-lg text-center">
            <h3 className="text-xl font-semibold mb-3">Still have questions?</h3>
            <p className="text-muted-foreground mb-6">
              Our customer service team is here to help
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center px-6 py-3 bg-accent text-white rounded-md hover:bg-accent/90 transition-colors"
              >
                Contact Us
              </a>
              <a 
                href="mailto:support@furnish.com" 
                className="inline-flex items-center justify-center px-6 py-3 border border-border rounded-md hover:bg-muted-foreground/10 transition-colors"
              >
                Email Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
