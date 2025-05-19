import type { LiHTMLAttributes } from "react";
import Link from "../../Link";

type MenuItem = {
  href?: string;
} & LiHTMLAttributes<HTMLLIElement>;

const MenuItem = ({ children, href = "#" }: MenuItem) => {
  return (
    <li>
      <Link href={href}>{children}</Link>
    </li>
  );
};

export default MenuItem;
