import { CircularProgress } from "@mui/material";

type SpinnerProps = {
  color?: "purple" | "white";
  className?: string;
  size?: number;
};

export function Spinner({
  color = "purple",
  className = "",
  size = 19,
}: SpinnerProps) {
  return (
    <CircularProgress style={{ color }} size={size} className={className} />
  );
}
