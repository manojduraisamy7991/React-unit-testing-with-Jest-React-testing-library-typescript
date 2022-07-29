import './button.css';

interface FormatDateProps {
  label: String;
}

function Button({ label }: FormatDateProps): JSX.Element {
  return (
    <div data-testid="button" className="button-style">
      hi{label.toLocaleString()}
    </div>
  );
}

export default Button;
