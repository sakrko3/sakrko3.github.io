import Image from "next/image";
import Link from "next/link";


const StickyFooter = () => {
  return (
    <Link href="#hero">
      <footer className="sticky bottom-2 w-full cursor-pointer z-30">
        <div className="flex items-center justify-center">
          <Image
            src="/logo.png"
            alt="Profile pic"
            width={50}
            height={50}
            className="h-8 w-8 rounded-full filter grayscale hover:grayscale-0"
            priority
          />
        </div>
      </footer>
    </Link>
  );
};

export default StickyFooter;
