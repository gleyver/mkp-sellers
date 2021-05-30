import React from 'react';
import Header from '../components/Header'
import ListCard from '../components/ListCard';

function Home() {
    return (
        <div className="App">
            <Header/>
            <main id="main">
                <h1>Análises de preços dos produtos</h1>
                <ListCard />
            </main>
        </div>
    )
}

export default Home;