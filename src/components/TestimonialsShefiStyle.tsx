import sharonPhoto from "@/assets/testimonial-sharon.jpeg";
import ianoPhoto from "@/assets/testimonial-iano.jpeg";
import joramPhoto from "@/assets/testimonial-joram.webp";

const testimonials = [
  {
    quote: "Being part of FOEG Labs as a contributor was deeply fulfilling. Leading the Knowledge Sharing Sessions reminded me how powerful community-driven learning can be. The space was intentional, supportive, and genuinely focused on growth. FOEG Labs doesn't just talk about supporting builders — it creates the conditions for people to learn and thrive together.",
    name: "Sharon",
    role: "Contributor, FOEG Labs",
    image: sharonPhoto,
  },
  {
    quote: "FOEG Labs has given me a platform to do what I love most: support builders throughout their development journey. From ideation to shipping real projects, the community is hands-on and highly collaborative. Winning a bounty at the Mini Hack was exciting, but what stands out more is the culture of experimentation and encouragement that FOEG Labs consistently fosters.",
    name: "Iano",
    role: "DevRel, FOEG Labs",
    image: ianoPhoto,
  },
  {
    quote: "Being inducted into the Startup Founders Spotlight by Avalanche Team1 and FOEG Labs was incredibly affirming. Building Cpesa has been a challenging journey, and having my work recognized within the ecosystem motivated me to keep pushing forward. FOEG Labs creates real visibility for builders and helps turn effort into opportunity.",
    name: "Joram",
    role: "Builder, Startup Founders Spotlight",
    image: joramPhoto,
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
                  <p className="text-lg md:text-xl leading-relaxed mb-6">
                    {testimonial.quote}
                  </p>
                  <div className="text-primary">
                    <span className="font-semibold text-lg">{testimonial.name}</span>
                    <span className="text-muted-foreground ml-2">— {testimonial.role}</span>
                  </div>
                </div>

                {/* Portrait image */}
                <div className="w-32 h-40 md:w-40 md:h-52 rounded-2xl overflow-hidden flex-shrink-0">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover grayscale"
                  />
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
