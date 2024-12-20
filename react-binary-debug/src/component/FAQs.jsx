const FaqSection = () => {
  // Toggle function to show/hide FAQ content
  const toggleFaq = (index) => {
    const content = document.getElementById(`faq-content-${index}`);
    const icon = document.getElementById(`faq-icon-${index}`);

    // Toggle the visibility of the content
    content.classList.toggle("hidden");

    // Switch between plus and minus icons
    icon.classList.toggle("fa-plus");
    icon.classList.toggle("fa-minus");
  };

  const faqs = [
    {
      question: "How long does it take to complete a web development project?",
      answer:
        "The timeline varies depending on the project's complexity and requirements. Our team strives to deliver projects on time while maintaining the highest quality standards.",
    },
    {
      question: "Can you handle large-scale mobile app development projects?",
      answer:
        "Yes, we have experience with handling large-scale, complex mobile app development projects tailored to meet business requirements.",
    },
    {
      question: "Do you offer maintenance services for websites and apps?",
      answer:
        "Yes, we provide ongoing maintenance services for websites and applications to ensure optimal performance.",
    },
    {
      question:
        "How do you ensure the security of user data in your applications?",
      answer:
        "We implement best practices for security, including data encryption, secure APIs, and regular security audits.",
    },
    {
      question: "Can you create a responsive website design for all devices?",
      answer:
        "Yes, we specialize in creating responsive designs that provide a seamless user experience across all devices.",
    },
    {
      question:
        "What digital marketing strategies do you employ to drive traffic?",
      answer:
        "We use SEO, social media marketing, and targeted ad campaigns to effectively drive traffic to your website.",
    },
    {
      question: "Can you integrate third-party APIs into our applications?",
      answer:
        "Yes, we have extensive experience integrating third-party APIs to enhance functionality.",
    },
    {
      question:
        "How do you ensure cross-platform compatibility for mobile apps?",
      answer:
        "We use cross-platform frameworks like Flutter and React Native to ensure compatibility across different platforms.",
    },
  ];

  return (
    <section className="bg-black">
      <div className="py-32">
        <h3 className="text-6xl font-bold text-center mb-5 text-white">
          Frequently Asked Questions
        </h3>
        <p className="text-center mb-5 text-gray-500">
          Got questions? We have got answers. Check out our frequently asked
          questions section to <br /> find valuable insights into our processes,
          pricing, and more. Transparency is at the core of <br /> our client
          interactions.
        </p>
      </div>

      {/* Search Section */}
      <div className="-mt-20 items-center flex justify-center">
        <div className="relative w-96">
          {/* Search Icon */}
          <i className="fa-solid fa-magnifying-glass absolute left-4 top-1/2 transform -translate-y-1/2 text-white"></i>

          {/* Input Field */}
          <input
            type="text"
            placeholder="Search"
            className="input rounded-full w-full text-gray-400 bg-zinc-900 placeholder-gray-500 pl-10"
          />
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-black min-h-screen flex flex-col items-center justify-center -mt-48">
        <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 gap-8">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item border-b border-cyan-700 py-4">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFaq(index)}
              >
                <h3 className="text-white text-lg font-medium">
                  {faq.question}
                </h3>
                <i
                  id={`faq-icon-${index}`}
                  className="fa-solid fa-plus text-gray-400"
                ></i>
              </div>
              <div
                id={`faq-content-${index}`}
                className="faq-content hidden mt-3 text-gray-400"
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
