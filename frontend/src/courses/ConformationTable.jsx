import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { CheckCircle, Printer, ArrowLeft } from "lucide-react";

const ConfirmationTable = () => {
  const location = useLocation();
  const { registrationData } = location.state || null;

  return (
    <div className="max-w-lg mx-auto p-8 bg-white rounded-xl shadow-lg mt-10">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Registration Confirmation</h2>
      
      <div className="bg-green-100 p-5 rounded-lg mb-8 flex items-center justify-center space-x-3">
        <CheckCircle className="text-green-600" size={24} />
        <p className="text-green-800 font-semibold">
          Registration Successful!
        </p>
      </div>

      <div className="mb-8 overflow-hidden rounded-lg border border-gray-200">
        {registrationData && (
          <table className="w-full border-collapse bg-white text-left text-sm text-gray-700">
            <thead className="bg-gray-300">
              <tr>
                <th className="px-6 py-4 font-semibold text-gray-900">Field</th>
                <th className="px-6 py-4 font-semibold text-gray-900">Value</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-xl">First Name</td>
                <td className="px-6 py-4 text-lg">{registrationData.firstName}</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-xl">Last Name</td>
                <td className="px-6 py-4 text-lg">{registrationData.lastName}</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-xl">Email</td>
                <td className="px-6 py-4 text-lg">{registrationData.email}</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-xl">Student ID</td>
                <td className="px-6 py-4 text-lg">{registrationData.studentId}</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-xl">Course ID</td>
                <td className="px-6 py-4 text-lg">{registrationData.courseId}</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-xl">Course Name</td>
                <td className="px-6 py-4 text-lg">{registrationData.courseName}</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-xl">Semester</td>
                <td className="px-6 py-4 text-lg">{registrationData.semester}</td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
      
      <div className="flex justify-between mt-6">
        <Link to="/Router">
          <button className="px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 shadow-sm">
            <ArrowLeft size={18} />
            <span>Register Another</span>
          </button>
        </Link>
        <button
          onClick={() => window.print()}
          className="px-5 py-2.5 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition-colors flex items-center gap-2 shadow-sm"
        >
          <Printer size={18} />
          <span>Print</span>
        </button>
      </div>
    </div>
  );
};

export default ConfirmationTable;