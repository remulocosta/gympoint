import React from 'react';
import { Field } from 'formik';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Input({ label, id, ...props }) {
  return (
    <Container>
      <label htmlFor={id}>{label}</label>
      <Field id={id} {...props} />
    </Container>
  );
}

Input.propTypes = {
  label: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};

Input.defaultProps = {
  label: '',
};