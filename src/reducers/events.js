import _ from 'lodash';
import { READ_EVENTS } from '../actions/index';

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (events = {}, action) => {
  switch (action.type) {
    case READ_EVENTS:
      return _.mapKeys(action.response.data, 'id');
    default:
      return events;
  }
};
