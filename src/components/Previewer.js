import { connect } from "react-redux";
import "./styles/previewer.css";

const Previewer = ({ text = { text: "" } }) => {
  return (
    <div>
      <div className="Previewer-container">
        <div className="Previewer-header">Previewer</div>
        <div className="Previewer-content">
          <p>{text.text}</p>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return { text: state };
};

export default connect(mapStateToProps)(Previewer);
