import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Icon } from "@/components/layouts/icon";
import { Search } from "lucide-react";
import { GlobalSearchResults } from "./global-search-results";

export const GlobalSearch = () => {

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Icon icon={Search} />
      </DialogTrigger>
      <DialogContent className="h-5/6">
        <DialogHeader>
          <DialogTitle>Recherche Globale</DialogTitle>
        </DialogHeader>
        <GlobalSearchResults />
      </DialogContent>
    </Dialog>
  );
};
