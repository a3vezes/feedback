import Card from "./shared/Card"
import PropTypes from 'prop-types'
import { FaTrash } from 'react-icons/fa'

function FeedbackItem({rating, text, id, deleteFeedback}) {

    return (
        <Card reverse={true}>
            <div className="num-display">{rating}</div>
            <FaTrash className="close" color='purple' onClick={()=>deleteFeedback(id)}/>
            <div className="text-display">{text}</div>
        </Card>
    )
}

FeedbackItem.propTypes = {
    rating: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
}

export default FeedbackItem
