import Icon from "@/components/atoms/Icon";
import Link from "next/link";
import { IconLinkProps } from "./types";

const IconLink: React.FC<IconLinkProps> = ({ name: icon, size, href }) => {
  return (
    <Link href={href}>
      <Icon name={icon} size={size} />
    </Link>
  );
};

export default IconLink;
