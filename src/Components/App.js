import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Coins from './Coins';
import Pagination from './Pagination';
import '../styles/styles.css';
import store from '../store';
import { bugAdded, bugResolved } from '../actions';

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

    const dataToStore = () => {
      coins.map(coin => {
        store.dispatch(bugAdded(`bug${coin.id}`))
      })
    }
    //store.dispatch(bugAdded("Bug1"))

    fetchCoins()
    dataToStore()
  }, [])

  console.log(store.getState(), "hi")

  // Get Current Posts 
  const indexOfLastPost = currentPage * postsPerPage; 
  const indexOfFirstPost = indexOfLastPost - postsPerPage; 
  const currentCoins = store.getState().slice(indexOfFirstPost, indexOfLastPost)

  // Change Page 

  const paginate = (pageNumber) => setCurrentPage(pageNumber)
  const data = store.getState()
  console.log('the data', data)

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
