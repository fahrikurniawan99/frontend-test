import Link from "next/link";
import * as React from "react";

type Props = {
  title: string;
  description: React.ReactNode | string;
  children: React.ReactNode;
};

export default function AuthCard({ description, title, children }: Props) {
  return (
    <div className="min-h-screen flex max-w-md w-[90%] mx-auto py-10">
      <div className="m-auto w-full">
        <Link href={"/"} className="font-bold text-xl text-blue-600">
          Bahawan<span className="text-gray-500">Carrer</span>
        </Link>
        <h1 className="font-bold text-gray-700 text-2xl mt-10">{title}</h1>
        <p className="text-gray-500">{description}</p>
        {children}
      </div>
    </div>
  );
}
