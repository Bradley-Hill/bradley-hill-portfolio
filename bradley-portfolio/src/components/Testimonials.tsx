import "../app/styles/Testimonials.css";

export default function Testimonials() {
  return (
    <div
      id="testimonials"
      className="bg-gray-100 testimonials-container grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
    >
      <div className="testimonial bg-gray-800 text-white">
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua."
        </p>
        <p className="quote-author">- John Doe, CEO</p>
      </div>
      <div className="testimonial testimonial bg-gray-800 text-white">
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua."
        </p>
        <p className="quote-author">- Jane Smith, Manager</p>
      </div>
      <div className="testimonial testimonial bg-gray-800 text-white">
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua."
        </p>
        <p className="quote-author">- Bob Johnson, Developer</p>
      </div>
      <div className="testimonial testimonial bg-gray-800 text-white">
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua."
        </p>
        <p className="quote-author">- Sarah Lee, Designer</p>
      </div>
    </div>
  );
}
