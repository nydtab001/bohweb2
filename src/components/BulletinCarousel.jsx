import { useState } from 'react';
// import DropdownButton from './assets/dropdownButton';
import NextButton from './assets/NextButton';
import PrevButton from './assets/PrevButton';
import { useMediaQuery } from "react-responsive";
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';

export default function MultiPageBulletinCarousel({bulletins}) {
  const isMobileScreen = useMediaQuery({ maxWidth: 601 });
  const [visible, setVisible] = useState(true);

  const prevButtonText = isMobileScreen ? "Prev" : "Previous Bulletin";
  const nextButtonText = isMobileScreen ? "Next" : "Next Bulletin";
//   const bulletins = [/* your structured data here */];
  const [bulletinIndex, setBulletinIndex] = useState(0);
  const [pageIndex, setPageIndex] = useState(0);

  const currentBulletin = bulletins[bulletinIndex];
  const currentPage = currentBulletin.pages[pageIndex];
  const currentPages = currentBulletin.pages;

    useEffect(() => {
  setVisible(false); // fade out
  const timeout = setTimeout(() => setVisible(true), 100); // fade in after 100ms
  return () => clearTimeout(timeout);
}, [pageIndex, bulletinIndex]);

  const nextPage = () =>
    setPageIndex((pageIndex + 1) % currentBulletin.pages.length);
  const prevPage = () =>
    setPageIndex((pageIndex - 1 + currentBulletin.pages.length) % currentBulletin.pages.length);

  const nextBulletin = () => {
    setBulletinIndex((bulletinIndex + 1) % bulletins.length);
    setPageIndex(0);
  };
  const prevBulletin = () => {
    setBulletinIndex((bulletinIndex - 1 + bulletins.length) % bulletins.length);
    setPageIndex(0);
  };

  return (
    <section className="md:py-12 md:px-6 bg-white text-center">
      <Helmet>
  <link rel="preload" as="image" href={bulletins[0].pages[0]} />
</Helmet>
      <h2 className="md:text-5xl text-3xl font-semibold mb-2">Sabbath Bulletins</h2>
      <p className="text-lg text-gray-600 mb-12">{currentBulletin.date} – Page {pageIndex + 1}</p>

      <div className="relative w-full aspect-[210/297] mx-auto">
        {/* <img
          src={currentPage}
          alt={`Bulletin ${currentBulletin.date} Page ${pageIndex + 1}`}
          className="w-full h-auto object-contain rounded-lg shadow-md"
        /> */}
        <div className="overflow-hidden w-full h-auto shadow-md">
            <div className="w-full h-full flex items-center justify-center">
  <img
    key={`${bulletinIndex}-${pageIndex}`}
    src={currentPage}
    alt={`Bulletin ${currentBulletin.date} Page ${pageIndex + 1}`}
    className={`w-full object-contain shadow-md transition-opacity duration-1000 ease-in-out ${visible ? 'opacity-100' : 'opacity-0' }`}
    loading="lazy"
  />
</div>

        </div>

        {/* Page navigation */}
        <button
          onClick={prevPage}
          className="absolute top-1/2 -translate-y-1/2 bg-blue-950/50 text-white ml-0 py-2 border-none rounded-l w-8 h-10 md:w-12 md:h-14 left-0 hover:bg-gray-700"
        >
          <PrevButton height='5em' width='5em'/>
        </button>
        <button
          onClick={nextPage}
          className="absolute top-1/2 -translate-y-1/2 bg-blue-950/50 text-white mr-0 py-2 border-none rounded-r w-8 h-10 md:w-12 md:h-14 right-0 hover:bg-gray-700"
        >
          <NextButton height='5em' width='5em'/>
        </button>
      </div>

      {/* Bulletin navigation */}
      <div className="mt-6 flex justify-center gap-4">
        <button
          onClick={prevBulletin}
          className="text-blue-900 px-4 py-2 max-sm:text-sm max-sm:py-2 border-blue-900 border-2 rounded-full hover:bg-blue-900"
        >
          ‹ {prevButtonText}
        </button>
        <button
          onClick={nextBulletin}
          className="text-blue-900 px-4 py-2 max-sm:text-sm max-sm:py-2 border-blue-900 border-2 rounded-full hover:bg-blue-900"
        >
          {nextButtonText} ›
        </button>
      </div>
    </section>
  );
}