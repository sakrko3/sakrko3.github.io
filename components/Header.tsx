import Link from "next/link";
import { SocialIcon } from "react-social-icons";

type Props = {};

const Header = (props: Props) => {
  return (
    <header
      id="nav"
      className="max-w-7xl mx-auto sticky z-20 p-2 top-0 flex items-center justify-between"
    >
      <div className="flex items-center">
        <SocialIcon
          url="https://linkedin.com/in/sakrko3"
          fgColor="#94a3b8"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://github.com/sakrko3"
          fgColor="#94a3b8"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://twitter.com/sakrko3"
          fgColor="#94a3b8"
          bgColor="transparent"
        />
      </div>
      <div className="flex items-center">
        <SocialIcon
          network="email"
          fgColor="#94a3b8"
          bgColor="transparent"
          url="mailto:saikrishnak930@gmail.com"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-slate-400 font-medium">
          Lets Connect
        </p>
      </div>
    </header>
  );
};

export default Header;
