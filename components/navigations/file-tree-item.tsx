"use client";

import React, { FC, useEffect, useState } from "react";
import { Folder, FolderOpen, File, LucideIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
// import { useTheme } from "next-themes";

interface SubFileTreeItem {
  label: string;
  path?: string;
  icon?: LucideIcon;
  onClick?: () => void;
}

interface FileTreeItemProps {
  icon?: LucideIcon;
  label: string;
  path?: string;
  subFiles?: SubFileTreeItem[];
}

export const FileTreeItem: FC<FileTreeItemProps> = ({
  icon,
  label,
  path,
  subFiles = [],
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [subFileHeight, setSubFileHeight] = useState(0);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const Icon = isOpen ? FolderOpen : Folder;
  const IconLink = icon as LucideIcon;
  const pathname = usePathname();

  const isActivePath = (path: string): boolean => {
    const pathSegments = pathname.split("/").filter(Boolean);
    return pathSegments.includes(path);
  };

  useEffect(() => {
    if (subFiles.length) {
      const height = 30;
      const calculatedSubFileHeight = height * subFiles.length;
      setSubFileHeight(calculatedSubFileHeight);
    }
  }, [subFiles]);

  const filePath = path ? path.split("/").filter(Boolean).pop() : "/";

  return (
    <li className="w-full last:pb-8">
      {!path ? (
        <button
          type="button"
          onClick={toggleMenu}
          className={`transition-all duration-300 ease-in-out flex items-center w-full z-20 sticky bg-white ${
            isOpen ? "text-emerald-600 font-medium" : "text-gray-800"
          }`}
        >
          <Icon
            size={20}
            strokeWidth={isOpen ? 1.5 : 1.2}
            className={`mr-2 `}
          />
          {label}
        </button>
      ) : (
        <Link
          href={path}
          className={`transition-all duration-300 ease-in-out flex items-center w-full z-20 sticky bg-white p-0.5 rounded ${
            isActivePath(filePath as string)
              ? "bg-emerald-600 text-white"
              : "text-gray-800"
          }`}
        >
          <IconLink
            size={20}
            strokeWidth={isOpen ? 1.5 : 1.2}
            className={`mr-2 `}
          />
          {label}
        </Link>
      )}
      <ul
        className={`border-l ml-2.5 origin-top space-y-1 tree-child relative`}
        style={{
          maxHeight: isOpen ? `${subFileHeight}px` : "0",
          overflow: isOpen ? "visible" : "hidden",
          marginTop: isOpen ? "4px" : "0",
          opacity: isOpen ? 1 : 0,
          transition: "all 0.3s ease-in-out",
        }}
      >
        {subFiles.map((subFile, index) => {
          const translateY = (index + 1) * 20;
          const Icon = subFile.icon as LucideIcon;
          const path = subFile.path
            ? subFile.path.split("/").filter(Boolean).pop()
            : "/";

          return (
            <li
              key={index}
              className={`flex items-center ml-3 text-sm  first:pt-1 last:pb-1 w-full`}
              style={{
                transform: isOpen
                  ? `translateY(0)`
                  : `translateY(-${translateY}px)`,
                transition: "transform 0.3s ease-in-out",
              }}
            >
              {!subFile.path ? (
                <button
                  type="button"
                  onClick={subFile.onClick}
                  className={`
                    ${
                      isActivePath(path as string) &&
                      "bg-emerald-600 text-white"
                    }
                     transition-all duration-300 ease-in-out flex items-center w-full p-0.5 rounded`}
                >
                  {subFile.icon ? (
                    <Icon
                      size={16}
                      strokeWidth={isOpen ? 1.5 : 1.2}
                      className={`mr-2 `}
                    />
                  ) : (
                    <File
                      size={16}
                      strokeWidth={isOpen ? 1.5 : 1.2}
                      className="mr-1"
                    />
                  )}
                  <span>{subFile.label}</span>
                </button>
              ) : (
                <Link
                  href={subFile.path}
                  className={`
                   ${
                     isActivePath(path as string) && "bg-emerald-600 text-white"
                   }
                    transition-all duration-300 ease-in-out flex items-center w-full p-0.5 rounded`}
                >
                  {subFile.icon ? (
                    <Icon
                      size={16}
                      strokeWidth={isOpen ? 1.5 : 1.2}
                      className={`mr-2 `}
                    />
                  ) : (
                    <File
                      size={16}
                      strokeWidth={isOpen ? 1.5 : 1.2}
                      className="mr-1"
                    />
                  )}
                  <span>{subFile.label}</span>
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </li>
  );
};
