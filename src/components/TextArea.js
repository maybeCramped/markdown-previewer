import setText from "../helpers/reducers/actions";
import textAreaDefaultValue from "../textAreaDefaultValue";
import { connect } from "react-redux";
import "./styles/textArea.css";

const TextArea = ({ setNewText }) => {
  const handleChange = (event) => {
    setNewText(event.target.value);
  };
  return (
    <div className="editor-container">
      <div className="editor-header">Editor</div>
      <textarea
        className="editor-content"
        defaultValue={textAreaDefaultValue}
        onChange={handleChange}
        id="editor"
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setNewText: (text) => {
      dispatch(setText(text));
    },
  };
};
const mapStateToProps = (state) => {
  return { text: state };
};

export default connect(mapStateToProps, mapDispatchToProps)(TextArea);
