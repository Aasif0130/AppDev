import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiHome } from 'react-icons/fi';
import './FaqPage.css';

const FaqPage = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const handleQuestionClick = (questionIndex) => {
    if (activeQuestion === questionIndex) {
      setActiveQuestion(null);
    } else {
      setActiveQuestion(questionIndex);
    }
  };

  const faqData = [
    {
      question: 'How long does it take to deliver the gifts?',
      answer: 'Our estimated delivery time is typically 3-5 business days within the country. However, international deliveries may take longer depending on the destination.',
    },
    {
      question: 'Can I track the status of my order?',
      answer: 'Yes, you can track the status of your order by logging into your account and accessing the order tracking page. You will receive regular updates on the progress of your delivery.',
    },
    {
      question: 'Do you offer gift wrapping services?',
      answer: 'Yes, we offer gift wrapping services for most of our products. You can select the gift wrapping option during the checkout process.',
    },
  ];

  return (
    <div className="faq-container">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      {faqData.map((faq, index) => (
        <div
          className={`faq-content ${activeQuestion === index ? 'active' : ''}`}
          key={index}
          onClick={() => handleQuestionClick(index)}
        >
          <h5 className="faq-question">{faq.question}</h5>
          {activeQuestion === index && <h6 className="faq-answer">{faq.answer}</h6>}
        </div>
      ))}
      <div className="homepage-link">
        <Link to="/home" className="nav-link">
          <FiHome className="nav-icon" />
          Back to Homepage
        </Link>
      </div>
    </div>
  );
};

export default FaqPage;
