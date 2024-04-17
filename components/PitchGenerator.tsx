import React, { useState } from 'react';


const PitchGenerator = ({ brand }) => {
    const [generatedText, setGeneratedText] = useState('');

    const handleGenerate = async () => {
        if (!brand || !brand["URL"]) {
            setGeneratedText("Brand URL is required for generating the pitch.");
            return;
        }

        // Prepare the request body with brand data
        const requestBody = {
            brand: {
                URL: brand["URL"]
            }
        };

        try {
            const response = await fetch('/api/generatePitch', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(requestBody)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();

            if (data.error) {
                setGeneratedText(data.error);
            } else {
                setGeneratedText(data.pitch);
            }
        } catch (error) {
            console.error('Failed to generate pitch:', error);
            setGeneratedText("Failed to communicate with the API.");
        }
    };

    return (
        <div className="flex flex-col max-w-screen-xl mx-auto px-2 lg:px-5 py-10 lg:flex-row lg:flex-wrap items-center">
            <div className="flex flex-col items-start flex-grow card bg-base-100 rounded-box p-4 w-full">
                <div className="flex justify-between items-center w-full mb-2">
                    <div className="flex items-center">
                        <label htmlFor="inputText" className="font-medium">
                            Write your pitch with AI
                        </label>
                        <div className="badge bg-gray-100 text-gray-800 text-md shadow-xl font-medium ml-2 px-2.5 py-0.5 rounded-xl">Premium</div>
                    </div>
                    <div className="flex items-center">
                            <a href={brand["Instagram page URL"]} target="_blank" className="mx-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                            </a>
                            <a href={brand["LinkedIn page URL"]} target="_blank" className="mx-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>                            
                            </a>
                            <a href={`mailto:${brand["Emails from website"]}`} className="mx-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>                            
                            </a>
                    </div>
                </div>
                <textarea
                    id="inputText"
                    className="textarea shadow-lg textarea-bordered h-24 w-full"
                    placeholder="Generated pitch will appear here..."
                    readOnly
                    value={generatedText}
                >

                </textarea>
            </div>

            <div className="w-full px-2 my-2 lg:w-auto lg:order-last lg:flex-grow-0 lg:px-4">
                <button className="btn bg-gradient-to-br from-blue-400 to-purple-600 text-white hover:shadow-xl w-full lg:w-auto" onClick={handleGenerate}>
                    Generate 🤖
                </button>
            </div>
        </div>
    );
};

export default PitchGenerator;
