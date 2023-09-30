import Icon from "@/components/atoms/Icon";
import Link from "next/link";
import { IconLinkProps } from "./types";

const IconLink: React.FC<IconLinkProps> = ({ icon, size, href }) => {
  return (
    <Link href={href}>
      <Icon icon={icon} size={size} />
    </Link>
  );
};

export default IconLink;
