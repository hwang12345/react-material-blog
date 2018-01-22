import React from 'react'
import PropTypes from 'prop-types'
import {Typography} from 'material-ui'
import {CircularProgress} from 'material-ui/Progress'

class LoadingContainer extends React.Component {
  render() {
    const {status, children} = this.props
    switch (status) {
      case 'loading':
        return (
          <CircularProgress className="mb-center" />
        )
      case 'failure':
        return (
          <div className="mb-center">
            <Typography type="subheading">
              An error occurred.
            </Typography>
            <Typography type="subheading">
              Please try again later.
            </Typography>
          </div>
        )
      case 'success':
        return children()
      default:
        throw new Error('unexpected status ' + status)
    }
  }
}

LoadingContainer.propTypes = {
  status: PropTypes.string.isRequired,
  children: PropTypes.func.isRequired,
}

export default LoadingContainer
