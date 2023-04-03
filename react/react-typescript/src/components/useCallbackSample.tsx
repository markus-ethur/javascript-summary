// import PropTypes from 'prop-types'
import React, { Component, useCallback } from 'react'

export default class useCallbackSample extends Component {
  // static propTypes = {second: third}

  render() {

    const cb = useCallback(() => {

    }, []);

    return (
      <div>useCallbackSample</div>
    )
  }
}
