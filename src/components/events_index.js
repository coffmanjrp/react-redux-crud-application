import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { readEvents } from '../actions/index';
import { Link } from 'react-router-dom';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

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
        <TableRow key={event.id}>
          <TableRowColumn>{event.id}</TableRowColumn>
          <TableRowColumn>
            <Link to={`/events/${event.id}`}>{event.title}</Link>
          </TableRowColumn>
          <TableRowColumn>{event.body}</TableRowColumn>
        </TableRow>
      );
    });
  }

  render() {
    const style = {
      position: 'fixed',
      right: 12,
      bottom: 12,
    };

    return (
      <Fragment>
        <FloatingActionButton
          containerElement={<Link to="/events/new" />}
          style={style}
        >
          <ContentAdd />
        </FloatingActionButton>
        <Table>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn>ID</TableHeaderColumn>
              <TableHeaderColumn>Title</TableHeaderColumn>
              <TableHeaderColumn>Body</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            {this.renderEvents()}
          </TableBody>
        </Table>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({ events: state.events });

const mapDispatchToProps = {
  readEvents,
};

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex);
