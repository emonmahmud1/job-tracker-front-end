import React from "react";
import PostJobForm from "./PostJobForm";
import ManagePostedJobs from "./ManagePostedJobs";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const PostedJobs = () => {
  return (
    <div>
      <div>
        <Tabs defaultValue="posted-jobs" className="">
          <TabsList>
            <TabsTrigger value="posted-jobs">My Posted Jobs</TabsTrigger>
            <TabsTrigger value="add-new-job">Add New Job Post</TabsTrigger>
          </TabsList>
          <TabsContent value="posted-jobs">
            <ManagePostedJobs />
          </TabsContent>
          <TabsContent value="add-new-job">
            <PostJobForm />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default PostedJobs;
