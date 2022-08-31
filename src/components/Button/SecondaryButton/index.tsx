import { secondaryButtonStyles } from "./styles";

interface ButtonProps {
  buttonSize?: "small" | "regular" | "large";
  buttonColor?: "yellow" | "red" | "green" | "white";
  fullWidth?: boolean;
  title: string;
  onClick: string;
}

export const SecondaryButton = ({ title, onClick }: ButtonProps) => {
  return (
    <button onClick={eval(onClick)} style={secondaryButtonStyles}>
      {title}
    </button>
  );
};
