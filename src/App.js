import React, { useState } from 'react'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackData from './data/FeedbackData'

function App() {
    const [feedbacks, setFeedbacks] = useState(FeedbackData)
    const deleteFeedback = (id) => {
        if(!window.confirm('Are You Sure?')) return
        setFeedbacks(feedbacks.filter((item) => item.id !== id))
    }
    return (
        <>
            <Header />
            <main className='container'>
                <FeedbackList data={feedbacks} deleteFeedback={deleteFeedback}/>
            </main>
        </>
    )
}

export default App