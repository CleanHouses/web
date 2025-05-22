import { type ButtonProps, Button as MantineButton } from "@mantine/core";
import cn from "classnames";
import type { FC } from "react";
import styles from "./button.module.scss";

/**
 * Button component that wraps the Mantine Button and applies custom styles based on the `type` prop.
 *
 * @param {Object} props - The props for the button.
 * @param {React.ReactNode} props.children - The content inside the button.
 * @param {'primary' | 'secondary' | 'animate' | 'outline'} [props.type='primary'] - The type of the button, affecting its style.
 * @param {ButtonProps} props.rest - Additional props passed to the Mantine Button component.
 *
 * @returns {JSX.Element} The Button component with the appropriate styles and functionality.
 */

interface IButtonProps extends ButtonProps {
  buttonType?: "primary" | "secondary" | "animate" | "outline";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button: FC<IButtonProps> = ({
                                           buttonType = "primary",
                                           children,
                                           ...props
                                         }) => {
  const customClass = cn(styles.wrapper, {
    [styles.primary]: buttonType === "primary",
    [styles.secondary]: buttonType === "secondary",
    [styles.animate]: buttonType === "animate",
    [styles.outline]: buttonType === "outline",
  });

  return (
    <MantineButton className={customClass} radius="lg" {...props}>
      {children}
    </MantineButton>
  );
};
