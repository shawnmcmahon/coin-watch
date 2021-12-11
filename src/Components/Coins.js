import React from 'react'

const Coins = ({ coins, loading}) => {
    if (loading) {
        console.log(coins, 'coins in coins')
        return <h2>Loading... </h2>
    }

    const mapCoins = () => coins.map(coin => {
        {console.log(coin)}
        return (
            <div key={coin.id}> 
           <p className="text-black"> {coin.title} "hi"</p>
        </div>
        )
    });
    
    return (
        <div>
            {mapCoins()}
        </div>
    )
}

export default Coins


