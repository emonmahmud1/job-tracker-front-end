import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Banknote, CalendarClock, MapPin, University } from "lucide-react";
import { useNavigate } from "react-router";

const JobCard = ({ job }) => {
  const navigate = useNavigate();
  const handleJob = () => {
    navigate(`/job/${job._id}`);
  };
  return (
    <Card
      onClick={handleJob}
      className="hover:cursor-pointer hover:shadow-xl transition duration-200 bg-[#F0F5FC]"
    >
      <CardHeader>
        <CardTitle className="text-[#348334]">{job.title}</CardTitle>
        <CardDescription>{job.company}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-1 border flex justify-between font-lora secondary-font-color">
        <div className="border border-yellow-400">
          <p className="flex items-center gap-1">
            <MapPin className="w-4" />
            {job.location}
          </p>
          <p className="flex items-center gap-1">
            <University className="w-4" />
            {job.category}
          </p>
          {/* <p className="flex items-center gap-1">{job.industryType}</p> */}
          <p className="flex items-center gap-1">
            <Banknote className="w-4" />
            {job.salary}
          </p>
        </div>
        <div className="border border-red-400">
          {" "}
          <p className="flex flex-col">
            <span className="flex items-center gap-1 font-semibold">
              <CalendarClock className="w-4" /> Deadline:
            </span>{" "}
            <span>
              {" "}
              {new Date(job.deadline).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </span>
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default JobCard;
