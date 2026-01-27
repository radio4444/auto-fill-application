import Button from "@/components/Button";
import { Trash2, Pencil } from "lucide-react";
import { cn } from "@/libs/utils";

interface ProfileItemProps {
  profile: string;
  onEdit?: () => void;
  onDelete?: () => void;
  className?: string;
}

function ProfileItem({
  profile,
  onEdit = () => console.log("Edit", profile),
  onDelete = () => console.log("Delete", profile),
}: ProfileItemProps) {
  return (
    <div
      className={cn(
        "sqaure flex w-full items-center ps-7.5 pr-5 pt-2.5 pb-4 bg-[#5F5E59] border-[#262626] border border-solid",
      )}
    >
      <div className="subheading3">{profile}</div>

      <div className={cn("ml-auto flex gap-2.5")}>
        <Button variant="primary" onClick={onEdit}>
          <Pencil />
        </Button>
        <Button variant="primary" onClick={onDelete}>
          <Trash2 className="active:stroke-current" />
        </Button>
      </div>
    </div>
  );
}

export default ProfileItem;
