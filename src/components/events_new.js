import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { postEvent } from '../actions';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class EventsNew extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  renderField(field) {
    const {
      input,
      label,
      type,
      meta: { touched, error },
    } = field;

    return (
      <TextField
        type={type}
        hintText={label}
        floatingLabelText={label}
        errorText={touched && error}
        {...input}
        fullWidth={true}
      />
    );
  }

  async onSubmit(values) {
    await this.props.postEvent(values);
    this.props.history.push('/');
  }

  render() {
    const { handleSubmit, pristine, submitting, invalid } = this.props;
    const style = {
      margin: 12,
    };

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <div>
          <Field
            type="text"
            label="Title"
            name="title"
            component={this.renderField}
          />
        </div>
        <div>
          <Field
            type="text"
            label="Body"
            name="body"
            component={this.renderField}
          />
        </div>
        <RaisedButton
          type="submit"
          label="Submit"
          style={style}
          disabled={pristine || submitting || invalid}
        />
        <RaisedButton
          label="Cancel"
          style={style}
          containerElement={<Link to="/" />}
        />
      </form>
    );
  }
}

const validate = (values) => {
  const errors = {};

  if (!values.title) {
    errors.title = 'Enter a title please.';
  }

  if (!values.body) {
    errors.body = 'Enter a body please.';
  }

  return errors;
};

const mapDispatchToProps = { postEvent };

export default connect(
  null,
  mapDispatchToProps
)(reduxForm({ validate, form: 'eventNewForm' })(EventsNew));
