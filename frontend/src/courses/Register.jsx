import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    studentId: '',
    courseId: '',
    courseName: '',
    semester: 'Fall 2025',
    agreeToTerms: false
  });
  const navigate = useNavigate();

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.studentId.trim()) {
      newErrors.studentId = 'Student ID is required';
    } else if (!/^\d{8}$/.test(formData.studentId)) {
      newErrors.studentId = 'Student ID must be 8 digits';
    }
    
    if (!formData.courseId.trim()) newErrors.courseId = 'Course ID is required';
    if (!formData.courseName.trim()) newErrors.courseName = 'Course name is required';
    if (!formData.agreeToTerms) newErrors.agreeToTerms = 'You must agree to the terms';
    
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      onSubmit(formData);
    } else {
      setErrors(formErrors);
    }
    navigate("/conform", { state: { registrationData: formData } });
  };

  return (
    <div className="max-w-md mx-auto p-10 bg-white rounded-lg shadow-md mt-10 mb-10">
      <h2 className="text-xl font-bold text-center mb-6">Course Registration Form</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
            First Name
          </label>
          <input
            className={`w-full px-3 py-2 border rounded ${errors.firstName ? 'border-red-500' : 'border-gray-300'}`}
            id="firstName"
            name="firstName"
            type="text"
            value={formData.firstName}
            onChange={handleChange}
          />
          {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
            Last Name
          </label>
          <input
            className={`w-full px-3 py-2 border rounded ${errors.lastName ? 'border-red-500' : 'border-gray-300'}`}
            id="lastName"
            name="lastName"
            type="text"
            value={formData.lastName}
            onChange={handleChange}
          />
          {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className={`w-full px-3 py-2 border rounded ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="studentId">
            Student ID
          </label>
          <input
            className={`w-full px-3 py-2 border rounded ${errors.studentId ? 'border-red-500' : 'border-gray-300'}`}
            id="studentId"
            name="studentId"
            type="text"
            value={formData.studentId}
            onChange={handleChange}
          />
          {errors.studentId && <p className="text-red-500 text-xs mt-1">{errors.studentId}</p>}
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="courseId">
            Course ID
          </label>
          <input
            className={`w-full px-3 py-2 border rounded ${errors.courseId ? 'border-red-500' : 'border-gray-300'}`}
            id="courseId"
            name="courseId"
            type="text"
            value={formData.courseId}
            onChange={handleChange}
          />
          {errors.courseId && <p className="text-red-500 text-xs mt-1">{errors.courseId}</p>}
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="courseName">
            Course Name
          </label>
          <input
            className={`w-full px-3 py-2 border rounded ${errors.courseName ? 'border-red-500' : 'border-gray-300'}`}
            id="courseName"
            name="courseName"
            type="text"
            value={formData.courseName}
            onChange={handleChange}
          />
          {errors.courseName && <p className="text-red-500 text-xs mt-1">{errors.courseName}</p>}
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="semester">
            Semester
          </label>
          <select
            className="w-full px-3 py-2 border border-gray-300 rounded"
            id="semester"
            name="semester"
            value={formData.semester}
            onChange={handleChange}
          >
            <option value="Fall 2025">Fall 2025</option>
            <option value="Spring 2026">Spring 2026</option>
            <option value="Summer 2026">Summer 2026</option>
          </select>
        </div>
        
        <div className="mb-6">
          <label className="flex items-center">
            <input
              type="checkbox"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleChange}
              className="mr-2"
            />
            <span className={`text-sm ${errors.agreeToTerms ? 'text-red-500' : 'text-gray-700'}`}>
              I agree to the terms and conditions
            </span>
          </label>
          {errors.agreeToTerms && <p className="text-red-500 text-xs mt-1">{errors.agreeToTerms}</p>}
        </div>
        
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;