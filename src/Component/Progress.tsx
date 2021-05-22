import React from 'react'
import PropTypes from 'prop-types'
type Props = {
    percentage: number;
}
const Progress = ({percentage}:Props) => {
    return (
        <div className="progress">
            <div className="progress-bar progress-bar-striped progress-bar-animated"
                role="progressbar"
                style={{ width: `${percentage}%` }}
               >
                {percentage}%
                
                </div>
</div>
    )
}

Progress.propTypes = {
    percentage: PropTypes.number.isRequired

}

export default Progress
