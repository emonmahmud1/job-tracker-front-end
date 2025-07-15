import { useQuery } from "@tanstack/react-query";
import React from "react";
import usePrivateAxios from "../hooks/usePrivateAxios";
import Loading from "./Loading";
import JobCard from "./JobCard";

const ManagePostedJobs = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["myPostedJobs"],
    queryFn: async () => {
      const response = await usePrivateAxios.get("/jobs/my-posted-jobs");
    //   console.log(response);
      return response.data;
    },
  });
  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {data?.jobs.map((job) => (
            <JobCard key={job._id} job={job} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ManagePostedJobs;
