import React from 'react';

const renderField = ({ value, input, label, type, meta: { touched, error } }) => (
  <div className="form-group container-fluid">
    <label htmlFor={input}>{label}</label>
    <div className="form-group">
      <input className="form-control" {...input} placeholder={label} type={type} value={value} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);

export default renderField;
