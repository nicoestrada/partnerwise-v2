"use client";
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useCallback, useState } from 'react';
import { useSession } from 'next-auth/react';
import ErrorModal from './ErrorModal';

const SearchBar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { data: session } = useSession();

  const [avgProductPrice, setAvgProductPrice] = useState('');
  const [showErrorModal, setShowErrorModal] = useState(false);

  const createQueryString = (name, value) => {
    const params = new URLSearchParams(searchParams);
    params.set(name, value);
    return params.toString();
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!session) {
      setShowErrorModal(true); // Trigger the error modal if not logged in
      return;
    }

    router.push('/' + '?' + createQueryString('avgProductPrice', avgProductPrice));
  };

  const handleCloseErrorModal = () => {
    setShowErrorModal(false); // Ensure modal can be closed
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="shadow-lg rounded-full border mx-auto p-2 flex flex-row items-center gap-1 w-96"
      >
        <select
          value={avgProductPrice}
          onChange={(e) => setAvgProductPrice(e.target.value)}
          className="flex-1 p-2 rounded-full focus:outline-none"
        >
          <option value="">Random Shuffle</option>
          <option value="25">Random Shuffle 1</option>
          <option value="50">Random Shuffle 2</option>
          <option value="100">Random Shuffle 3</option>
          <option value="200">Random Shuffle 4</option>
        </select>
        <button
          type="submit"
          className="px-4 py-2 bg-gradient-to-br from-blue-400 to-purple-600 text-white rounded-full hover:shadow-xl"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shuffle"><path d="M2 18h1.4c1.3 0 2.5-.6 3.3-1.7l6.1-8.6c.7-1.1 2-1.7 3.3-1.7H22"/><path d="m18 2 4 4-4 4"/><path d="M2 6h1.9c1.5 0 2.9.9 3.6 2.2"/><path d="M22 18h-5.9c-1.3 0-2.6-.7-3.3-1.8l-.5-.8"/><path d="m18 14 4 4-4 4"/></svg>
        </button>
      </form>

      {showErrorModal && (
        <ErrorModal
          message="You must be logged in to use random search."
          onClose={handleCloseErrorModal}
        />
      )}
    </div>
  );
};

export default SearchBar;