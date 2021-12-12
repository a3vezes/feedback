function FeedbackItem({rating, text}) {

    return (
        <article className='card'>
            <div className="num-display">{rating}</div>
            <div className="text-display">{text}</div>
        </article>
    )
}

export default FeedbackItem
