import textAreaDefaultValue from "../textAreaDefaultValue";
import "./styles/textArea.css"
const TextArea = () => {
  return (
    <div className="editor" id="editor">
      <div className="editor-header">Editor</div>
        <textarea className="editor-content" value={textAreaDefaultValue}>  </textarea>
    </div>
  );
};
export default TextArea;
