import React from 'react'

const Coins = ({ coins, loading}) => {
    if (loading) {
        console.log(coins, 'coins in coins')
        return <h2>Loading... </h2>
    }

    const mapCoins = () => coins.map(coin => {
        {console.log(coin)}
        return (
            <div key={coin.id} className="border m-1"> 
                <p className="text-black">{coin.rank} {coin.name} {coin.priceUsd}</p>
            </div>
        )
    });
    
    return (
        <div className="table-auto">
            {mapCoins()}
        </div>
    )
}

export default Coins


