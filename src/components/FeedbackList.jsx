import FeedbackItem from "./FeedbackItem"

function FeedbackList({data, deleteFeedback}) {
    if(!data || data.length === 0){
        return <p>No Feedback Yet</p>
    }

    return (
        <div className="feedback-list">
            {data.map((data) => (
                <FeedbackItem key={data.id} text={data.text} rating={data.rating} deleteFeedback={deleteFeedback} id={data.id} />
            ))}
        </div>
    )
}

export default FeedbackList
