import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Coins from './Coins';
import Pagination from './Pagination';
import '../styles/styles.css';

const App = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1); 
  const [postsPerPage, setPostsPerPage] = useState(10); 


  useEffect(() => {
    const fetchCoins = async () => {
      setLoading(true); 
      const res = await axios.get('https://api.coincap.io/v2/assets') 
      setCoins(res.data.data)
      setLoading(false);
    }

    fetchCoins()
  }, [])

  console.log(coins, 'hello')

  // Get Current Posts 
  const indexOfLastPost = currentPage * postsPerPage; 
  const indexOfFirstPost = indexOfLastPost - postsPerPage; 
  const currentCoins = coins.slice(indexOfFirstPost, indexOfLastPost)

  // Change Page 

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div className="App">
      <header className="text-xl">
        CoinWatch
       <Coins coins={currentCoins} loading={loading} />
       <Pagination postsPerPage={postsPerPage} totalPosts={coins.length} paginate={paginate}/>
      </header>
    </div>
  );
}

export default App;
