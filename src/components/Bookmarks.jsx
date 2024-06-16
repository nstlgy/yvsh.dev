import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { ArrowDown } from 'react-feather'; // Using react-feather instead of lucide-react
import '../styles/bookmarks.css';

const fetchBookmarks = async (pageIndex) => {
  const url = `https://onur.dev/bookmarks.xml?page=${pageIndex}`;
  const response = await fetch(url);
  const text = await response.text();
  const parser = new DOMParser();
  const xml = parser.parseFromString(text, 'application/xml');
  const items = xml.querySelectorAll('item');
  const bookmarks = [];

  items.forEach((item) => {
    const title = item.querySelector('title')?.textContent;
    const link = item.querySelector('link')?.textContent;
    const description = item.querySelector('description')?.textContent;

    bookmarks.push({ title, link, description });
  });

  return { items: bookmarks, count: bookmarks.length };
};

const BookmarkCard = ({ bookmark, order }) => {
  return (
    <div className="bookmark-card">
      <a href={bookmark.link} target="_blank" rel="noopener noreferrer">
        <h3>{bookmark.title}</h3>
      </a>
      <p>{bookmark.description}</p>
    </div>
  );
};

const Bookmarks = () => {
  const [data, setData] = useState([]);
  const [pageIndex, setPageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [initialData, setInitialData] = useState({ items: [], count: 0 });

  useEffect(() => {
    const loadInitialData = async () => {
      const initial = await fetchBookmarks(0);
      setData(initial.items);
      setInitialData(initial);
    };

    loadInitialData();
  }, []);

  const loadMore = () => {
    if (!isReachingEnd && !isLoading)
      setPageIndex((prevPageIndex) => prevPageIndex + 1);
  };

  const fetchInfiniteData = useCallback(async () => {
    setIsLoading(true);
    const newData = await fetchBookmarks(pageIndex);
    setData((prevData) => [...prevData, ...newData.items]);
    setIsLoading(false);
  }, [pageIndex]);

  useEffect(() => {
    if (pageIndex > 0) fetchInfiniteData();
  }, [pageIndex, fetchInfiniteData]);

  const getChunks = useCallback(() => {
    const firstChunk = [];
    const lastChunk = [];
    data.forEach((element, index) => {
      if (index % 2 === 0) {
        firstChunk.push(element);
      } else {
        lastChunk.push(element);
      }
    });
    return [[...firstChunk], [...lastChunk]];
  }, [data]);

  const chunks = useMemo(() => getChunks(), [getChunks]);
  const isReachingEnd = data.length >= initialData.count;

  return (
    <div>
      <div className="flex flex-col gap-4 lg:hidden">
        {data.map((bookmark, bookmarkIndex) => (
          <div
            key={`bookmark_${bookmarkIndex}`}
            className="grid gap-4 place-content-start"
          >
            <BookmarkCard bookmark={bookmark} order={bookmarkIndex} />
          </div>
        ))}
      </div>
      <div className="hidden lg:grid lg:grid-cols-2 lg:gap-4">
        {chunks.map((chunk, chunkIndex) => (
          <div
            key={`chunk_${chunkIndex}`}
            className="grid gap-4 place-content-start"
          >
            {chunk.map((bookmark, bookmarkIndex) => (
              <BookmarkCard
                key={bookmarkIndex}
                bookmark={bookmark}
                order={bookmarkIndex}
              />
            ))}
          </div>
        ))}
      </div>
      {data.length > 0 ? (
        <div className="mt-8 flex min-h-16 items-center justify-center text-sm lg:mt-12">
          {!isReachingEnd ? (
            <>
              {isLoading ? (
                <div
                  className="inline-block size-4 animate-spin rounded-full border-2 border-current border-t-transparent text-black"
                  role="status"
                  aria-label="loading"
                >
                  <span className="sr-only">Loading...</span>
                </div>
              ) : (
                <button
                  onClick={loadMore}
                  disabled={isLoading}
                  className="w-full justify-center bg-white"
                >
                  Load more
                  <ArrowDown size={16} />
                </button>
              )}
            </>
          ) : (
            <span>That's all for now. Come back later for more.</span>
          )}
        </div>
      ) : (
        <div className="mt-8 flex min-h-16 flex-col items-center justify-center lg:mt-12">
          <span>No bookmarks found.</span>
        </div>
      )}
    </div>
  );
};

export default Bookmarks;
