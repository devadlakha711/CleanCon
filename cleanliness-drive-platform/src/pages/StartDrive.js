import React, { useState } from 'react';
import { CloudArrowUpIcon, MapPinIcon, CalendarIcon, ClockIcon } from '@heroicons/react/24/outline';
import DriveForm from '../components/DriveForm';

const StartDrive = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    location: '',
    date: '',
    time: '',
    volunteers: '',
    poster: null,
    safetyInstructions: '',
    contactInfo: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Drive Form Submitted:', formData);
    
    // Show success message
    alert('Drive created successfully! You will be redirected to the drive status page.');
    
    // Reset form
    setFormData({
      title: '',
      description: '',
      category: '',
      location: '',
      date: '',
      time: '',
      volunteers: '',
      poster: null,
      safetyInstructions: '',
      contactInfo: ''
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({
      ...prev,
      poster: e.target.files[0]
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Start a Cleanup Drive</h1>
          <p className="text-lg text-gray-600">
            Organize a community cleanup drive and make a positive impact on the environment
          </p>
        </div>

        {/* Form */}
        <div className="bg-white shadow-lg rounded-lg p-6 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Title */}
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                Drive Title *
              </label>
              <input
                type="text"
                id="title"
                name="title"
                required
                value={formData.title}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="e.g., Marina Beach Cleanup Drive"
              />
            </div>

            {/* Description */}
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                Description *
              </label>
              <textarea
                id="description"
                name="description"
                required
                rows={4}
                value={formData.description}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="Describe the cleanup drive, its purpose, and what volunteers can expect..."
              />
            </div>

            {/* Category */}
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                Drive Category *
              </label>
              <select
                id="category"
                name="category"
                required
                value={formData.category}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="">Select a category</option>
                <option value="Beach">Beach</option>
                <option value="Park">Park</option>
                <option value="Roadside">Roadside</option>
                <option value="River">River/Waterfront</option>
                <option value="Urban">Urban Area</option>
                <option value="Forest">Forest</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Location */}
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                Location *
              </label>
              <div className="relative">
                <MapPinIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  id="location"
                  name="location"
                  required
                  value={formData.location}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Enter the cleanup location"
                />
              </div>
            </div>

            {/* Date and Time */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                  Date *
                </label>
                <div className="relative">
                  <CalendarIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="date"
                    id="date"
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-2">
                  Time *
                </label>
                <div className="relative">
                  <ClockIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="time"
                    id="time"
                    name="time"
                    required
                    value={formData.time}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Volunteers */}
            <div>
              <label htmlFor="volunteers" className="block text-sm font-medium text-gray-700 mb-2">
                Expected Volunteers (Optional)
              </label>
              <input
                type="text"
                id="volunteers"
                name="volunteers"
                value={formData.volunteers}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="e.g., 20-30 volunteers or specific volunteer names"
              />
            </div>

            {/* Poster Upload */}
            <div>
              <label htmlFor="poster" className="block text-sm font-medium text-gray-700 mb-2">
                Drive Poster/Image (Optional)
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md hover:border-primary-400 transition-colors duration-200">
                <div className="space-y-1 text-center">
                  <CloudArrowUpIcon className="mx-auto h-12 w-12 text-gray-400" />
                  <div className="flex text-sm text-gray-600">
                    <label
                      htmlFor="poster"
                      className="relative cursor-pointer bg-white rounded-md font-medium text-primary-600 hover:text-primary-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500"
                    >
                      <span>Upload a file</span>
                      <input
                        id="poster"
                        name="poster"
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="sr-only"
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
              {formData.poster && (
                <p className="mt-2 text-sm text-gray-600">
                  Selected: {formData.poster.name}
                </p>
              )}
            </div>

            {/* Safety Instructions */}
            <div>
              <label htmlFor="safetyInstructions" className="block text-sm font-medium text-gray-700 mb-2">
                Safety Instructions *
              </label>
              <textarea
                id="safetyInstructions"
                name="safetyInstructions"
                required
                rows={3}
                value={formData.safetyInstructions}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="e.g., Bring gloves, wear closed shoes, carry water bottle, use sunscreen..."
              />
            </div>

            {/* Contact Info */}
            <div>
              <label htmlFor="contactInfo" className="block text-sm font-medium text-gray-700 mb-2">
                Contact Information *
              </label>
              <textarea
                id="contactInfo"
                name="contactInfo"
                required
                rows={2}
                value={formData.contactInfo}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="Email and phone number for volunteers to contact"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-primary-600 text-white py-3 px-4 rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-colors duration-200 font-medium"
              >
                Create Cleanup Drive
              </button>
            </div>
          </form>
        </div>

        {/* Additional Info */}
        <div className="mt-8 bg-primary-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-primary-800 mb-2">Tips for Organizing a Successful Drive</h3>
          <ul className="text-primary-700 space-y-1">
            <li>• Plan for adequate supplies (gloves, bags, water)</li>
            <li>• Coordinate with local authorities if needed</li>
            <li>• Share the drive on social media for better reach</li>
            <li>• Arrange for proper disposal of collected waste</li>
            <li>• Document the impact with before/after photos</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StartDrive; 
