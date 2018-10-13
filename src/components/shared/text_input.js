import React, {PropTypes} from 'react';

const TextInput = ({name, label, onChange, placeholder, value, error}) => {
  let wrapperClass = "row";
  if (error && error.length > 0) {
    wrapperClass += " " + "red red-text";
  }

  return (
    <div className={wrapperClass}>
      <label htmlFor={name}>{label}</label>
      <div className="input-field col s6 offset-s3">
        <input
          type="text"
          name={name}
          className=""
          placeholder={placeholder}
          value={value}
          onChange={onChange} />
        {error && <div className="red red-text">{error}</div>}
      </div>
    </div>
  );
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string
};

export default TextInput;
