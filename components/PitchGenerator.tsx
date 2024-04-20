import React, { useState } from 'react';
import { useSession } from 'next-auth/react';
import ErrorModal from './ErrorModal'; // Assuming you have a component for the error modal

const PitchGenerator = ({ brand }) => {
  const { data: session } = useSession();
  const [showErrorModal, setShowErrorModal] = useState(false); // Error modal state
  const [generatedText, setGeneratedText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copyButtonText, setCopyButtonText] = useState("Copy");

  const handleGenerate = async () => {
    if (!session || session.user.hasAccess !== true) {
      setShowErrorModal(true); // Show error modal if user doesn't have access
      return;
    }

    setIsLoading(true);

    if (!brand || !brand["URL"]) {
      setGeneratedText("Brand URL is required for generating the pitch.");
      setIsLoading(false);
      return;
    }

    const requestBody = {
      brand: {
        URL: brand["URL"],
      },
    };

    try {
      const response = await fetch('/api/pitch', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      if (data.error) {
        setGeneratedText(data.error);
      } else {
        setGeneratedText(data.pitch);
      }
    } catch (error) {
      setGeneratedText("Failed to generate pitch: " + error.message);
    }

    setIsLoading(false);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => setCopyButtonText("Copied ✅"))
      .catch((err) => console.error('Could not copy text:', err));
  };

  const handleCloseErrorModal = () => {
    setShowErrorModal(false); // Ensure the modal can be closed
  };

  const loadingIndicator = (
    <div className="mx-auto justify-center">
      <svg
        aria-hidden="true"
        className="w-8 h-8 text-gray-200 animate-spin-slow fill-purple-500"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentFill"
        />
      </svg>
    </div>
  );

  return (
    <div className="flex flex-col max-w-screen-xl mx-auto px-2 lg:px-5 py-10 lg:flex-row lg:flex-wrap items-center">
      {/* Error modal displayed conditionally */}
      {showErrorModal && (
        <ErrorModal
          message="Start your free trial to Pitch with AI"
          onClose={handleCloseErrorModal}
        />
      )}
      {/* Main content */}
      <div className="flex flex-col items-start flex-grow card bg-base-100 rounded-box p-4 w-full">
        <div className="flex justify-between items-center w-full mb-2">
          <div className="flex items-center">
            <label htmlFor="inputText" className="font-medium">
              Write your pitch with AI
            </label>
            <div className="badge bg-gradient-to-br from-blue-400 to-purple-600 text-white text-md shadow-xl font-medium ml-2 px-2.5 py-0.5 rounded-xl">
              Premium
            </div>
          </div>
        </div>

        <textarea
          id="inputText"
          className="textarea shadow-lg textarea-bordered h-60 w-full"
          placeholder="Generated pitch will appear here..."
          read-only
          value={generatedText}
        />

        <div className="flex justify-between items-center w-full mb-2">
          <button
            className="btn mt-2 -mb-4 bg-green-200 hover:bg-green-600"
            onClick={() => copyToClipboard(generatedText)}
          >
            {copyButtonText}
          </button>
        </div>
      </div>

      <div className="w-full px-2 my-2 lg:w-auto lg:order-last lg:flex-grow-0 lg:px-4">
        <button
          className="btn bg-gradient-to-br from-blue-400 to-purple-600 text-white hover:shadow-xl w-full lg:w-auto"
          onClick={handleGenerate}
        >
          {isLoading ? loadingIndicator : "Generate 🤖"}
        </button>
      </div>
    </div>
  );
};

export default PitchGenerator;
