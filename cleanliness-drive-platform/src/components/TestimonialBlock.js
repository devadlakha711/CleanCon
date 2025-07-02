import React from 'react';

const TestimonialBlock = ({ testimonials }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {testimonials.map((testimonial) => (
        <div key={testimonial.id} className="bg-white rounded-lg shadow-md p-6 relative">
          {/* Quote Icon */}
          <div className="absolute top-4 right-4">
            <div className="text-6xl text-primary-200 font-serif leading-none">"</div>
          </div>

          {/* Content */}
          <div className="mb-6">
            <p className="text-gray-700 italic leading-relaxed">
              "{testimonial.content}"
            </p>
          </div>

          {/* Author */}
          <div className="flex items-center">
            <img
              src={testimonial.avatar}
              alt={testimonial.name}
              className="h-12 w-12 rounded-full object-cover mr-4"
            />
            <div>
              <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
              <p className="text-sm text-gray-600">{testimonial.role}</p>
            </div>
          </div>

          {/* Rating Stars */}
          <div className="flex mt-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                className="h-4 w-4 text-yellow-400 fill-current"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TestimonialBlock; 
