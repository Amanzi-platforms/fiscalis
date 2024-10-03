import { Icon } from "@/components/layouts/icon";
import { ArrowLeft, Book, CircleHelp, Phone } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: {
    template: "%s | Aide",
    default: "Aide",
  },
};

const HelpLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return ( 
    <div className="flex flex-col w-screen h-screen overflow-auto justify-between ">
      <div className="h-[40px] fixed w-full border-b backdrop-blur-md bg-white/40 py-1.5 px-4 flex justify-between items-center z-20">
        <Link href="/help" className="h-full relative flex">
          <Image
            src="/svg/logo.svg"
            width={580}
            height={580}
            alt="logo"
            className="h-full w-max"
          />
          <div className="brand flex items-center ml-2">
            <h2 className="font-bold text-lg text-emerald-600">Amanzi</h2>
            <span className="font-light text-lg">Fiscalis</span>
          </div>
        </Link>
        <div className="flex items-center space-x-4">
          <Link
            href="/help/faq"
            className="flex items-center space-x-1 hover:text-emerald-600 transition-all duration-300 ease-in-out"
          >
            <Icon icon={CircleHelp} />
            <span>FAQ</span>
          </Link>
          <Link
            href="#"
            className="flex items-center space-x-1 hover:text-emerald-600 transition-all duration-300 ease-in-out"
          >
            <Icon icon={Phone} />
            <span>Contacter le support</span>
          </Link>
          <Link
            href="/help/documentation"
            className="flex items-center space-x-1 hover:text-emerald-600 transition-all duration-300 ease-in-out"
          >
            <Icon icon={Book} />
            <span>Documentation</span>
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link
            href="/"
            className="flex items-center space-x-1 hover:text-emerald-600 transition-all duration-300 ease-in-out"
          >
            <Icon icon={ArrowLeft} />
            <span>Retourner à l'écran d'accueil</span>
          </Link>
        </div>
      </div>
      <div className="h-full w-full overflow-auto pt-12">{children}</div>
    </div>
  );
};

export default HelpLayout;
