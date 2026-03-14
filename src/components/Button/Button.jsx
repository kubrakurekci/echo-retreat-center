import "./Button.css";
function Button({ text, onClick }) {
  return (
    <button onClick={onClick} className="btn me-5">
      {text}
    </button>
  );
}
export default Button;
