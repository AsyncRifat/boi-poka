import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../Utility/AddToDB';
import Book from '../Book/Book';

const ReadList = () => {
  // worst case
  const [readList, setReadList] = useState([]);
  const [sort, setSort] = useState('');
  const data = useLoaderData();
  useEffect(() => {
    const bookStoredData = getStoredBook();
    const convertedBooksStored = bookStoredData.map(id => parseInt(id));
    const myReadList = data.filter(book =>
      convertedBooksStored.includes(book.bookId)
    );
    setReadList(myReadList);
  }, [data]);

  const handleSort = type => {
    setSort(type);
    if (type === 'pages') {
      const sortedByPage = [...readList].sort(
        (a, b) => a.totalPages - b.totalPages
      );
      setReadList(sortedByPage);
    }
    if (type === 'ratings') {
      const sortedByRating = [...ReadList].sort(
        (a, b) => a.ratings - b.ratings
      );
      setReadList(sortedByRating);
    }
  };
  return (
    <div>
      <h1 className="font-bold text-3xl text-center py-3 bg-gray-300">Books</h1>

      <details className="dropdown">
        <summary className="btn m-1 bg-[#50B1C9]">
          Short By: {sort ? sort : ''}
        </summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
          <li>
            <a onClick={() => handleSort('pages')}>pages</a>
          </li>
          <li>
            <a onClick={() => handleSort('ratings')}>ratings</a>
          </li>
        </ul>
      </details>

      <Tabs>
        <TabList>
          <Tab>Read Book List</Tab>
          <Tab>My Wish List</Tab>
        </TabList>

        <TabPanel>
          <h2>Read Book: {readList.length}</h2>
          {readList.map(b => (
            <Book key={b.bookId} singleBook={b}></Book>
          ))}
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;
