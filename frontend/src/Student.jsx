import React, { useEffect, useState } from "react";

function Student() {
  const [inputAnswer, setInputAnswer] = useState("");
  const [savedAnswer, setSavedAnswer] = useState(""); 

  const autoSave = () => {
    setSavedAnswer(inputAnswer); 
  };

  useEffect(() => {
    const interval = setInterval(() => {
      autoSave();
    }, 1000);

    return () => clearInterval(interval); 
  }, [inputAnswer]); 

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
      <div className="border-2 border-black p-10 rounded-2xl shadow-xl shadow-black w-full max-w-4xl">
        <h1 className="text-2xl font-bold mb-4">Student Online Exam</h1>
        <h2 className="text-amber-50 bg-black mb-8 rounded p-3">
          What is React and how does it help build web applications?
        </h2>

        <div className="flex space-x-8 w-full">
            <textarea
              className="p-5 w-100 h-72 bg-white rounded-2xl border-black border-2 shadow-black resize-none overflow-auto"
              placeholder="Enter your answer here..."
              value={inputAnswer}
              onChange={(e) => setInputAnswer(e.target.value)}
            />
            <div className="h-72 w-100 p-5 rounded-2xl bg-white border-black border-2 shadow-black overflow-auto">
              <h1 className="font-bold mb-2">Last Saved Answer:</h1>
              <p className="break-words">{savedAnswer || "Not yet answered"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Student;