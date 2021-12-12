import React from 'react'
import store from '../store';
import { bugAdded, bugResolved } from '../actions';


const Coins = ({ coins, loading}) => {
    if (loading) {
        console.log(store.getState(), 'state in coins')
        return <h2>Loading... </h2>
    }

const add = (name) => {
    console.log(store.getState())
    store.dispatch(bugAdded(name))
}

    const mapCoins = () => coins.map(coin => {
        return (
            <div key={coin.id} className="border m-1"> 
                <p className="text-black">{coin.rank} {coin.name} {coin.priceUsd}</p>
            </div>
        )
    });
    
    return (
        <div className="table-auto">
            {/* {mapCoins} */}
            {coins.map(coin => {
        return (
            <div key={coin.id} className="border m-1"> 
                <p className="text-black">{coin.id} {coin.description} {coin.resolve}</p>
                <button>Add</button>
            </div>
        )
    })}
        </div>
    )
}

export default Coins


