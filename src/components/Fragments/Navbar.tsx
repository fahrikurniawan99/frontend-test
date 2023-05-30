import {
  Bars3BottomRightIcon,
  ChevronDownIcon,
  DocumentTextIcon,
  HomeIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import Button, { ButtonStyle } from "../Elements/Button";
import {
  Dropdown,
  DropdownContent,
  DropdownItem,
  DropdownTrigger,
} from "../Elements/Dropdown";
import { useRouter } from "next/router";
import * as ReactDropdown from "@radix-ui/react-dropdown-menu";
import { cn } from "@/utils/cn";

type Props = {};

const Navbar = (props: Props) => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const isApply = router.query.apply ?? false;

  return (
    <nav className="flex h-[70px] shadow items-center px-[3%] md:px-[10%] justify-between">
      <Link href={"/"} className="font-bold text-xl text-blue-600">
        Bahawan<span className="text-gray-500">Carrer</span>
      </Link>
      <Dropdown>
        <DropdownTrigger
          asChild
          className={cn("md:hidden", isApply && "hidden")}
        >
          <div
            className={
              "bg-blue-600 w-10 aspect-square rounded-full flex text-white"
            }
          >
            <Bars3BottomRightIcon className="w-6 aspect-square stroke-[2px] m-auto" />
          </div>
        </DropdownTrigger>
        <DropdownItems />
      </Dropdown>

      {status !== "loading" ? (
        session ? (
          <Dropdown>
            <DropdownTrigger
              asChild
              className={cn("md:flex hidden ml-auto", isApply && "md:hidden")}
            >
              <button className="text-gray-500 outline-none inline-flex items-center hover:opacity-50">
                {session.user?.name}
                <ChevronDownIcon className="w-4 aspect-square ml-1 stroke-[3px]" />
              </button>
            </DropdownTrigger>
            <DropdownItems />
          </Dropdown>
        ) : (
          <ul className="hidden md:flex gap-2 items-center font-medium text-gray-400">
            <li>
              <Button
                variant={"secondary"}
                onClick={() => {
                  signIn();
                }}
              >
                Masuk
              </Button>
            </li>
            <li>
              <Link className={ButtonStyle()} href="/register">
                Daftar
              </Link>
            </li>
          </ul>
        )
      ) : null}
    </nav>
  );
};

const DropdownItems: React.FC<ReactDropdown.DropdownMenuContentProps> = (
  props
) => {
  const router = useRouter();

  return (
    <DropdownContent {...props}>
      <DropdownItem
        onClick={() => router.push("/")}
        className="py-1 cursor-default px-2 w-full rounded-md hover:bg-blue-50 text-gray-500 flex items-center gap-3 outline-none"
      >
        <HomeIcon className="w-5 text-gray-600 stroke-[1.8px] aspect-square" />{" "}
        Beranda
      </DropdownItem>
      <DropdownItem
        onClick={() => router.push("/profile")}
        className="py-1 cursor-default px-2 w-full rounded-md hover:bg-blue-50 text-gray-500 flex items-center gap-3 outline-none"
      >
        <UserCircleIcon className="w-5 text-gray-600 stroke-[1.8px] aspect-square" />{" "}
        Profil saya
      </DropdownItem>
      <DropdownItem
        onClick={() => router.push("/lamaran")}
        className="py-1 cursor-default px-2 w-full rounded-md hover:bg-blue-50 text-gray-500 flex items-center gap-3 outline-none"
      >
        <DocumentTextIcon className="w-5 text-gray-600 stroke-[1.8px] aspect-square" />{" "}
        Lamaran saya
      </DropdownItem>
    </DropdownContent>
  );
};

export default Navbar;
