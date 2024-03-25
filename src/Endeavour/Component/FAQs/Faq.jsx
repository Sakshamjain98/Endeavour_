import  { useState } from 'react';

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null); // State to track open index

  // Function to toggle the visibility of the answer for a specific index
  const toggleFAQ = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div id='faq' className="bg-white overflow-hidden font-serif mt-4 "
   
    >
      <div className="max-w-5xl mx-auto px-4  sm:px-6 lg:px-8">
        <h2 className=" md:text-4xl text-xl  font-extrabold text-gray-900 pb-4 md:pb-10">Frequently Asked <span className='text-blue-600
]'
style={{
  
}}
>Questions</span></h2>
        <div className="mt-4">
          <div className="border-t border-gray-200 pt-2">
            <dl className="divide-y divide-gray-200">
              {faqData.map((faq, index) => (
                <div key={index} className="py-2 ease-in">
                  <dt
                    className="text-lg leading-6 font-mono text-gray-900 flex justify-between cursor-pointer"
                    onClick={() => toggleFAQ(index)}
                  >
                    {faq.question}
                    <span className="ml-2">{openIndex === index ? '^' : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="15" height="15" color="#000000" fill="none">
    <path d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
</svg>}</span>
                  </dt>
                  {openIndex === index && (
                    <dd className="mt-2 text-base text-gray-500">{faq.answer}</dd>
                  )}
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}

// Example data for FAQ items
const faqData = [
  {
    question: 'What is E-Summit?',
    answer:
      'E-Summit is an annual entrepreneurship summit organized by KIET ECELL. It brings together entrepreneurs, investors, and industry experts to share knowledge and network.',
  },
  {
    question: 'How can I register for E-Summit?',
    answer:
      'Registration for E-Summit can be done through our website. Keep an eye on our social media channels for updates on registration dates and details.',
  },

  {
    question: 'How can I register for E-Summit?',
    answer:
      'Registration for E-Summit can be done through our website. Keep an eye on our social media channels for updates on registration dates and details.',
  },
  {
    question: 'How can I register for E-Summit?',
    answer:
      'Registration for E-Summit can be done through our website. Keep an eye on our social media channels for updates on registration dates and details.',
  },
  {
    question: 'How can I register for E-Summit?',
    answer:
      'Registration for E-Summit can be done through our website. Keep an eye on our social media channels for updates on registration dates and details.',
  },
  {
    question: 'How can I register for E-Summit?',
    answer:
      'Registration for E-Summit can be done through our website. Keep an eye on our social media channels for updates on registration dates and details.',
  },
  // Add more FAQ items here as needed
];

export default FAQSection;
