import React from 'react'
import PropTypes from 'prop-types'
type Props = {
    msg: string;
}
const Message = ({msg}:Props) => {
    return (
        <div>
            <div className="alert alert-info alert-dismissible fade show" role="alert">
  {msg}
  <button type="button" className="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
            
        </div>
    )
}

Message.propTypes = {
    msg: PropTypes.string.isRequired

}

export default Message
