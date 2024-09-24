
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { fetchData } from './api';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import ContentGrid from './components/ContentGrid';
import './App.css';

const Main = () => {
  const [data, setData] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [showSearch, setShowSearch] = useState(false);
  const [title,setTitle] = useState('')
  const [hasMoreData, setHasMoreData] = useState(true);
console.log(data,'dddd')
  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      try {
        const data = await fetchData(pageNum);
        
        console.log(data,'ddat')
       if(data?.length>0){
        const [newData,title] = data
        setTitle(title)
          setData((prevData) => [...prevData, ...newData]);
       }else{
        setHasMoreData(false);
       }
          
        
      } catch (error) {
        console.error("Error loading data", error);
      } finally {
        setIsLoading(false);
      }
    };
    loadData();
  }, [pageNum]);

  const handleScroll = useCallback((e) => {
    const { scrollHeight, scrollTop, clientHeight } = e.target;
    if (scrollHeight - scrollTop <= clientHeight + 100 && !isLoading&& hasMoreData) {
      setPageNum((prev) => prev + 1);
    }
  }, [isLoading,hasMoreData]);

  const handleBackClick = () => {
    setSearchTerm('');
    setShowSearch(false);
  };

  const handleSearchToggle = () => {
    setShowSearch((prev) => !prev);
  };

  const clearSearch = () => {
    setSearchTerm('');
    setShowSearch(false);
  };

  const filteredData = useMemo(() => {
    return data?.filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }, [data, searchTerm]);

  return (
    <div className="app" onScroll={handleScroll}>
      <Header onBackClick={handleBackClick} onSearchToggle={handleSearchToggle} title={title}/>
      {showSearch && (
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} onClear={clearSearch} />
      )}
      <ContentGrid items={filteredData} />
      {isLoading && <p>Loading more items...</p>}
      {!hasMoreData && <p>End of List</p>}
    </div>
  );
};

export default Main;
