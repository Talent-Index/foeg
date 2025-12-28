const testimonials = [
  {
    quote: "Placeholder — awaiting verified quote from FOEG Labs community member.",
    name: "Community Member",
    role: "Builder",
    placeholder: true,
  },
  {
    quote: "Placeholder — awaiting verified quote from FOEG Labs founder.",
    name: "Founder",
    role: "Startup",
    placeholder: true,
  },
  {
    quote: "Placeholder — awaiting verified quote from FOEG Labs partner.",
    name: "Partner",
    role: "Ecosystem",
    placeholder: true,
  },
];

const TestimonialsShefiStyle = () => {
  return (
    <section id="testimonials" className="py-24 md:py-32">
      {/* Gradient band like SheFi */}
      <div className="testimonial-gradient py-20 md:py-28">
        <div className="container mx-auto px-4">
          {/* Large serif italic title like SheFi */}
          <h2 className="text-5xl md:text-6xl lg:text-8xl font-display italic text-center mb-20">
            Testimonials
          </h2>

          {/* Testimonial cards */}
          <div className="space-y-12 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="relative bg-card/80 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center"
              >
                {/* Quote marks */}
                <div className="absolute -top-4 left-8 text-6xl text-primary font-display">
                  "
                </div>

                {/* Quote content */}
                <div className="flex-1 pt-4">
                  <p className={`text-lg md:text-xl leading-relaxed mb-6 ${testimonial.placeholder ? 'italic text-muted-foreground' : ''}`}>
                    {testimonial.quote}
                  </p>
                  <div className={testimonial.placeholder ? 'text-muted-foreground' : 'text-primary'}>
                    <span className="font-semibold text-lg">{testimonial.name}</span>
                    {testimonial.role && (
                      <span className="text-muted-foreground ml-2">— {testimonial.role}</span>
                    )}
                  </div>
                </div>

                {/* Portrait placeholder */}
                <div className="w-32 h-40 md:w-40 md:h-52 bg-gradient-to-b from-foreground/10 to-foreground/5 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <div className="w-20 h-20 rounded-full bg-foreground/10" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsShefiStyle;