import { styles } from "./styles";

interface ButtonProps {
  buttonSize?: "small" | "regular" | "large";
  buttonColor?: "yellow" | "red" | "green" | "white";
  fullWidth?: boolean;
  title: string;
  onClick: string;
}

export const PrimaryButton = ({ title, onClick }: ButtonProps) => {
  return (
    <button onClick={eval(onClick)} style={styles.primaryButton}>
      {title}
    </button>
  );
};
