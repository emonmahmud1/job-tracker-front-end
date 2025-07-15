import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import useAuth from "../hooks/useAuth";

export default function JobActions({ postedBy }) {
  const { user } = useAuth();
  console.log(postedBy);
  console.log(user?.user?.id);

  return (
    <div className="flex gap-3 mt-6 md:flex-col md:w-20  border">
      {/* Apply Button */}
      {postedBy !== user?.user?.id && (
        <Button className="bg-green-600 hover:bg-green-700 text-white transition">
          Apply
        </Button>
      )}

      {/* Edit Button */}
      {postedBy === user?.user?.id && (
        <Button className="bg-blue-600 hover:bg-blue-700 text-white transition">
          Edit
        </Button>
      )}

      {/* Delete Button */}
      {postedBy === user?.user?.id && (
        <Button
          variant="outline"
          className="text-red-600 border-red-300 hover:bg-red-100 transition flex items-center gap-1"
        >
          <Trash size={16} />
          <span>Delete</span>
        </Button>
      )}
    </div>
  );
}
