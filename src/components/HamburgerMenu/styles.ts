import { colors } from "src/theme/colors";

type Props = {
  isOpen: boolean;
};

export const styles = ({ isOpen }: Props): string =>
  `
    .bar1-open {
    transform: ${isOpen && `translate(0, 10px) rotate(-45deg)`};
    width: 35px;
    height: 2px;
    margin: 6px 0;
    background-color: ${colors.getPrimary(6)};
    border: 1px solid ${colors.getPrimary(6)};
    border-radius: 16px;

    transition: 0.4s;
  }

  .bar2-open {
    transform: ${isOpen ? `translateX(100%)` : `translateX(0)`};
    opacity: ${isOpen ? 0 : 1};
    width: 35px;
    height: 2px;
    margin: 6px 0;
    background-color: ${colors.getPrimary(6)};
    border: 1px solid ${colors.getPrimary(6)};

    border-radius: 16px;

    transition: 0.4s;
  }

  .bar3-open {
    transform: ${isOpen ? `translate(0, -10px) rotate(45deg)` : 0};
    width: 35px;
    height: 2px;
    margin: 6px 0;
    background-color: ${colors.getPrimary(6)};
    border: 1px solid ${colors.getPrimary(6)};

    border-radius: 16px;

    transition: 0.4s;
  }`;
