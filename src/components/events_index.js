import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { readEvents } from '../actions/index';
import { Link } from 'react-router-dom';

class EventsIndex extends Component {
  constructor(props) {
    super(props);

    this.renderEvents = this.renderEvents.bind(this);
  }

  componentDidMount() {
    this.props.readEvents();
  }

  renderEvents() {
    return _.map(this.props.events, (event) => {
      return (
        <tr key={event.id}>
          <td>{event.id}</td>
          <td>{event.title}</td>
          <td>{event.body}</td>
        </tr>
      );
    });
  }

  render() {
    return (
      <Fragment>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>{this.renderEvents()}</tbody>
        </table>

        <Link to="/events_new">New Event</Link>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({ events: state.events });

const mapDispatchToProps = {
  readEvents,
};

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex);
