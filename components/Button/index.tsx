import styled from "@emotion/styled";

interface ButtonProps {
  innerText: string;
  backgroundColor?: "tomato" | "grey" | "yellow";
  size?: "large" | "medium" | "small";
  onClick?: () => void;
}

export default function Button({
  innerText,
  backgroundColor = "tomato",
  size = "medium",
  onClick,
  ...props
}: ButtonProps) {
  const Button = styled.button<{ size: string }>`
    background-color: ${backgroundColor};
    width: ${({ size }) => {
      if (size === "large") return "20rem";
      else if (size === "medium") return "15rem";
      else return "10rem";
    }};
    height: 2rem;
  `;

  return (
    <Button onClick={onClick} size={size} {...props}>
      {innerText}
    </Button>
  );
}
