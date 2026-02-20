import "./style.css";

export const ErrorMessage = ({ message }: { message: string }) => (
  <div className="error-container">
    <span className="error-icon">⚠️</span>
    <p className="error-message">{message}</p>
  </div>
);