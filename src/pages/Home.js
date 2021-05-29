import React from 'react';
import Header from '../components/Header'
import WorkingList from '../components/WorkingList'
import ListCard from '../components/ListCard';

function Home() {
    return (
        <div className="App">
            <Header/>
            <WorkingList/>
            <main id="main">
                <h1>Trabalhos remotos</h1>
                <ListCard />
            </main>
        </div>
    )
}

export default Home;