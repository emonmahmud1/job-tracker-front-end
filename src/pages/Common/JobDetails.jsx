import { useQuery } from "@tanstack/react-query";
import React from "react";
import usePublicAxios from "../../hooks/usePublicAxios";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CalendarIcon, MapPinIcon, DollarSignIcon, Trash } from "lucide-react";
import { useParams } from "react-router";
import { Button } from "@/components/ui/button";
import JobActions from "../../components/JobActions";

const JobDetails = () => {
  const { id } = useParams();


  const { data, isLoading, isError } = useQuery({
    queryKey: ["jobDetails", id],
    queryFn: async () => {
      const response = await usePublicAxios.get(`/jobs/${id}`);
      return response.data.job;
    },
  });
  // console.log(data?.postedBy);
  // if(data?.postedBy ==user?.user.id){
  //   console.log('matched');
  // }
  // else{
  //   console.log('not matched');
  // }

  const formatDate = (date) =>
    new Date(date).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-xl text-gray-600">Loading job details...</h1>
      </div>
    );
  }

  if (isError || !data) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500 text-lg">Failed to load job details.</p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-2 py-10 md:px-6 border">
      {/* Header Section */}
      <Card className="mb-8 shadow-lg border-none ">
        <CardHeader className="text-center pb-2">
          <CardTitle className="text-3xl font-bold text-green-700">
            {data.title}
          </CardTitle>
          <CardDescription className="text-xl mt-2">
            {data.company}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600 border ">
            <div className="grid gap-4 grid-cols-1">
              <div className="flex items-center space-x-2">
                <MapPinIcon className="w-4 h-4 text-gray-500" />
                <span>{data.location}</span>
              </div>
              <div>
                <Badge variant="destructive">{data.category}</Badge>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <CalendarIcon className="w-4 h-4" />
                <span>Posted on: {formatDate(data.createdAt)}</span>
              </div>
            </div>

            <div className=" grid grid-cols-1 gap-4">
              <div className="flex items-center space-x-2">
                <span className="text-2xl">৳</span>
                <span>{data.salary}</span>
              </div>
              <div>
                <Badge variant="secondary">{data.industryType}</Badge>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <CalendarIcon className="w-4 h-4" />
                <span>Deadline: {formatDate(data.deadline)}</span>
              </div>
            </div>

            <div className="flex md:justify-end">
              <JobActions postedBy={data?.postedBy}/>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Description Section */}
      <Card className="shadow-md border-none font-lora">
        <CardContent className="pt-6 space-y-6">
          <div>
            <h3 className="font-semibold text-xl mb-2 text-gray-800">
              About the Job
            </h3>
            <p className="text-gray-700 leading-relaxed">{data.description}</p>
          </div>
          <Separator />
          Additional Info
          <div>
            <h3 className="font-semibold text-xl mb-2 text-gray-800">
              Key Responsibilities
            </h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              {data?.responsibilities?.map((resp, idx) => (
                <li key={idx}>{resp}</li>
              ))}
            </ul>
          </div>
          <Separator />
          <div>
            <h3 className="font-semibold text-xl mb-2 text-gray-800">
              Who You Are
            </h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              {data.requirements?.map((req, idx) => (
                <li key={idx}>{req}</li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
      <div className="border border-red-400 fixed bottom-4 right-30 z-50 ">
        <Button className="">Apply</Button>
      </div>
    </div>
  );
};

export default JobDetails;
