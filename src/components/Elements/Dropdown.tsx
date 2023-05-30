import { cn } from "@/utils/cn";
import * as ReactDropdown from "@radix-ui/react-dropdown-menu";
import React, * as react from "react";

export const Dropdown: React.FC<ReactDropdown.DropdownMenuProps> = (props) => {
  return <ReactDropdown.Root {...props} />;
};

export const DropdownTrigger: React.FC<
  ReactDropdown.DropdownMenuTriggerProps
> = (props) => {
  return <ReactDropdown.Trigger {...props} />;
};

export const DropdownContent: React.FC<ReactDropdown.MenuContentProps> = (
  props
) => {
  return (
    <ReactDropdown.Portal>
      <ReactDropdown.Content
        className={cn(
          "bg-white border rounded-lg p-2 shadow min-w-[200px] w-auto space-y-2",
          props.className
        )}
        {...props}
      />
    </ReactDropdown.Portal>
  );
};

export const DropdownItem: React.FC<ReactDropdown.MenuItemProps> = (props) => {
  return (
    <ReactDropdown.Item
      className={cn(
        "py-1 cursor-default px-2 w-full rounded-md hover:bg-blue-50 text-gray-500 flex items-center gap-3 font-medium",
        props.className
      )}
      {...props}
    />
  );
};
