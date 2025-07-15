import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import useAuth from "../hooks/useAuth";
import JobDetails from "./../pages/Common/JobDetails";
import {useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import usePrivateAxios from "../hooks/usePrivateAxios";

export default function JobActions({ jobDetails }) {
   const queryClient = useQueryClient();
  const { user } = useAuth();
    const { data } = useQuery({
    queryKey: ["job-applicant"],
    queryFn: async () => {
      const response = await usePrivateAxios.get("/application/applied");
      return response.data;
    },
  });
  const hasApplied = data?.some(
    (applicant) =>
      applicant.applicantId === user?.user?.id &&
      applicant.jobId === jobDetails._id
  );
  const { mutate, isPending } = useMutation({
    mutationFn: (jobId) => {
      return usePrivateAxios.post("/application/apply", { jobId });
    },

    onSuccess: () => {
      toast.success("Successfully applied this job");
      queryClient.invalidateQueries({ queryKey: ["job-applicant"] });
    },
    onError: (error) => {
      // console.log(error?.response.data.message);
      toast.error(error?.response.data.message);
    },
  });
  const handleApply = () => {
    mutate(jobDetails._id);
  };


  return (
    <div className="flex gap-3 mt-6 md:flex-col md:w-30">
      {/* Apply Button */}
      {jobDetails?.postedBy !== user?.user?.id &&
        (hasApplied ? (
          <Button
            disabbled="true"
            className="bg-pink-700  text-white transition"
          >
            Applied
          </Button>
        ) : (
          <Button
            onClick={handleApply}
            className="bg-green-600 hover:bg-green-700 text-white transition"
          >
            {isPending ? "Applying...." : "Apply"}
          </Button>
        ))}

      {/* Edit Button */}
      {jobDetails?.postedBy === user?.user?.id && (
        <Button className="bg-blue-600 hover:bg-blue-700 text-white transition">
          Edit
        </Button>
      )}

      {/* Delete Button */}
      {jobDetails?.postedBy === user?.user?.id && (
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
