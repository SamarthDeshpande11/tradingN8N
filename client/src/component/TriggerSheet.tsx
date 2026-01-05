import type { NodeKind, NodeMetadata } from "./types";
import { Button } from "./button";
import { Label } from "./label";
import { Input } from "./input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./select";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
  SheetTitle,
} from "./sheet";
import { Description, Title } from "@radix-ui/react-dialog";
import { useState } from "react";


const SUPPORTED_TRIGGERS = [{
  id: "timer-trigger",
  title: "Timer",
  description: "Run this trigger every x seconds/minutes",
}, {
  id: "price-trigger",
  title: "Price-trigger",
  description: "Runs whenever the price goess above or below a certain number for an asset"
}]

export const TriggerSheet = ({
  onSelect,
}: {
  onSelect: (kind: NodeKind, metadata: NodeMetadata) => void;
}) => {
  const [metadata, setMetadata] = useState({});

  return (
    <Sheet open={true} >

      <SheetContent>
        <SheetHeader>
          <SheetTitle>Select Trigger</SheetTitle>
          <SheetDescription>
            Select the type of trigger that you need
          </SheetDescription>
        </SheetHeader>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>

              {SUPPORTED_TRIGGERS.map(({ id, title, description }) => <>

                <SelectItem onSelect={() => onSelect(
                  id,
                  metadata
                )} value={id}>{title}</SelectItem>
                <SelectLabel>{description}</SelectLabel>
              </>)}
            </SelectGroup>
          </SelectContent>
        </Select>
        <SheetFooter>
          <Button type="submit">Create Trigger</Button>

        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
