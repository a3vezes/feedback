import React from 'react'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackData from './data/FeedbackData'

function App() {
    return (
        <>
            <Header />
            <main className='container'>
                <FeedbackList data={FeedbackData}/>
            </main>
        </>
    )
}

export default App