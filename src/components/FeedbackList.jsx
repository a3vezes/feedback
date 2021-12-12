import FeedbackItem from "./FeedbackItem"

function FeedbackList({data}) {
    if(!data || data.length === 0){
        return <p>No Feedback Yet</p>
    }

    return (
        <div className="feedback-list">
            {data.map((data) => (
                <FeedbackItem key={data.id} text={data.text} rating={data.rating} />
            ))}
        </div>
    )
}

export default FeedbackList
