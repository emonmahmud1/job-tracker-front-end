import React from "react";
import PostJobForm from "./PostJobForm";
import ManagePostedJobs from "../../components/ManagePostedJobs";

const PostedJobs = () => {
  return (
    <div>
      posted jobs
      <div>
        <ManagePostedJobs/>
        <PostJobForm />
      </div>
    </div>
  );
};

export default PostedJobs;
