import React, { FC } from "react";
import { LucideIcon } from "lucide-react";

interface IconProps {
  icon: LucideIcon;
  size?: number;
  strokeWidth?: number;
  className?: string;
}

export const Icon: FC<IconProps> = ({
  icon: IconComponent,
  size = 20,
  strokeWidth = 1.5,
  className = "",
}) => {
  return (
    <IconComponent
      size={size}
      strokeWidth={strokeWidth}
      className={className}
    />
  );
};
