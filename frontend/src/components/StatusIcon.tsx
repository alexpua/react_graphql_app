import { StatusOptions } from "../constants/StatusOptions.ts";

interface StatusIconProps {
  status: string;
}

const StatusIcon = ({ status }: StatusIconProps) => {
  const iconColor = StatusOptions.filter((option) => option.title == status)[0]
    .iconColor;

  return (
    <svg height="12" width="12" xmlns="http://www.w3.org/2000/svg">
      <circle
        r="4"
        cx="6"
        cy="6"
        fill="white"
        stroke={iconColor}
        strokeWidth="2"
      />
    </svg>
  );
};

export default StatusIcon;
