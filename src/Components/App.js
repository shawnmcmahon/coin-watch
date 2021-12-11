import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Coins from './Coins';
import '../styles/styles.css';

const App = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1); 
  const [postPerPage, setPostsPerPage] = useState(10); 


  useEffect(() => {
    const fetchCoins = async () => {
      setLoading(true); 
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts') 
      setCoins(res.data)
      setLoading(false);
    }

    fetchCoins()
  }, [])

  console.log(coins, 'hello')

  return (
    <div className="App">
      <header className="text-xl">
        CoinWatch
       <Coins coins={coins} loading={loading} />
      </header>
    </div>
  );
}

export default App;
