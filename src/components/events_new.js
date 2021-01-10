import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
// import { postEvent } from '../actions/index';
import { Link } from 'react-router-dom';

class EventsNew extends Component {
  render() {
    return (
      <Fragment>
        <div>foo</div>
      </Fragment>
    );
  }
}

// const mapStateToProps = { postEvent };

// const mapDispatchToProps = {
//   readEvents,
// };

export default connect(null, null)(EventsNew);
