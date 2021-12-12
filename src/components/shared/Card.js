import PropTypes from 'prop-types'

function Card({children, reverse}) {
    return (
        <article className={`card ${reverse && 'reverse'}`}>
            {children}
        </article>
    )
}

Card.defaultProps = {
    reverse: false,
  }
  
Card.propTypes = {
children: PropTypes.node.isRequired,
reverse: PropTypes.bool,
}

export default Card
