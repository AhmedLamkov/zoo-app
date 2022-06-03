import "./Button.css";

interface Props {
  text: string;
  color: string;
  onClick?: () => void; 
}

const Button = ({ text, color, onClick }: Props) => {
  return (
    <button style={{ backgroundColor: color }} className="button" onClick={onClick}>{text}</button>
  )
}

export default Button;
