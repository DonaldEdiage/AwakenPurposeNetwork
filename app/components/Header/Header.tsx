import SocialMediaBar from "../SocialMediaBar/SocialMediaBar";
import MenuBar from "./MenuBar";
import Link from "next/link";
{
  /** Enabled git lfs */
}

export default function Header() {
  return (
    <header
      className="w-full"
      style={{
        backgroundColor: "white",
      }}
    >
      <SocialMediaBar />

      {/* Mobile Layout - Logo and Hamburger on same row */}
      <div className="lg:hidden px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Logo - Left side - Clickable */}
          <Link href="/" className="flex-shrink-0">
            <div
              className="logo-container"
              style={{
                backgroundImage: 'url("/images/logo-apn-cn.png")',
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                width: "130px",
                height: "90px",
              }}
            ></div>
          </Link>

          {/* MenuBar - Right side (hamburger) */}
          <div className="flex-shrink-0">
            <MenuBar />
          </div>
        </div>
      </div>

      {/* Desktop Layout - Flex-based for better control */}
      <div className="hidden lg:block max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-8">
          {/* Left Column - Logo with clickable link */}
          <Link href="/" className="flex-shrink-0">
            <div
              className="logo-container"
              style={{
                backgroundImage: 'url("/images/logo-apn-cn.png")',
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                width: "280px",
                height: "160px",
              }}
            ></div>
          </Link>

          {/* Right Column - Menu Bar */}
          <div className="flex-1 flex justify-end min-w-0">
            <MenuBar />
          </div>
        </div>
      </div>
    </header>
  );
}
