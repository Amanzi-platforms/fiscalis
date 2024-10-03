import { GlobalSearch } from "@/components/layouts/global-search";
import { Icon } from "@/components/layouts/icon";
import { FileTree } from "@/components/navigations/file-tree";
import { UserDropdown } from "@/components/navigations/user-dropdown";
import { Bell, CalendarDays, ChartSpline, CircleHelp, LayoutGrid } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

const AppLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <div className="flex flex-col w-screen h-screen overflow-auto justify-between">
      <div className="h-[40px] w-full border-b backdrop-blur-sm bg-white py-1.5 px-4 flex justify-between items-center">
        <div className="h-full relative flex">
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
        </div>
        <div className="flex items-center space-x-4">
          <GlobalSearch />
          <button type="button" className="">
            <Icon icon={CalendarDays} />
          </button>
          <button type="button" className="">
            <Icon icon={Bell} />
          </button>
          <button type="button" className="">
            <Icon icon={ChartSpline} />
          </button>
          <div className="flex items-center space-x-1 relative">
            <span>Bonjour, Guylain Béni</span>
            <UserDropdown />
          </div>
          <Link href="/help" className="">
            <Icon icon={CircleHelp} />
          </Link>
          <button type="button" className="">
            <Icon icon={LayoutGrid} />
          </button>
        </div>
      </div>
      <div className="flex h-full w-full overflow-auto">
        <div className="w-[22rem] p-4 h-full overflow-y-auto">
          <FileTree />
        </div>
        <div className="w-full bg-gray-100 border-l p-4">{children}</div>
      </div>
    </div>
  );
};

export default AppLayout;
