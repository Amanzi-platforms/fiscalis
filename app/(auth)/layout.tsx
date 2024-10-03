import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Authentification Amanzi",
};

const AuthLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return children;
};

export default AuthLayout;
