import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import usePrivateAxios from './../../hooks/usePrivateAxios';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
} from "@/components/ui/select";

const PostJobForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    company: "",
    location: "",
    salary: "",
    deadline: "",
    category: "IT",
    industryType: "Private",
    requirements: "",
    responsibilities: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const { mutate, isPending } = useMutation({
    mutationFn: async (data) => {
      const response = await usePrivateAxios.post("/jobs/postjob", data);
      return response.data;
    },
    onSuccess: () => {
      toast.success("Job posted successfully!");
      setFormData({
        title: "",
        description: "",
        company: "",
        location: "",
        salary: "",
        deadline: "",
        category: "",
        industryType: "",
        requirements: "",
        responsibilities: "",
      });
    },
    onError: (error) => {
      console.error(error);
      toast.error("Failed to post job.");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      ...formData,
      salary: Number(formData.salary),
      deadline: new Date(formData.deadline),
      requirements: formData.requirements.split("\n").map((r) => r.trim()),
      responsibilities: formData.responsibilities
        .split("\n")
        .map((r) => r.trim()),
    };
    console.log(data);
    mutate(data);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-green-700 mb-6">Post a New Job</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Title</label>
          <Input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="e.g. Senior Software Engineer"
            // required
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Description
          </label>
          <Textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            placeholder="Describe the job..."
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          ></Textarea>
        </div>

        {/* Company & Location */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Company
            </label>
            <Input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="e.g. Tech Innovators Ltd."
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Location
            </label>
            <Input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="e.g. Dhaka, Bangladesh"
              required
            />
          </div>
        </div>

        {/* Salary & Deadline */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Salary (BDT)
            </label>
            <Input
              type="number"
              name="salary"
              value={formData.salary}
              onChange={handleChange}
              placeholder="e.g. 80000"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Deadline
            </label>
            <Input
              type="date"
              name="deadline"
              value={formData.deadline}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Category & Industry Type */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Category
            </label>
            <Select
              onValueChange={(value) =>
                setFormData((prev) => ({ ...prev, category: value }))
              }
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="Finance">Finance</SelectItem>
                  <SelectItem value="IT">IT</SelectItem>
                  <SelectItem value="Marketing">Marketing</SelectItem>
                  <SelectItem value="Sales">Sales</SelectItem>
                  <SelectItem value="Human Resources">
                    Human Resources
                  </SelectItem>
                  <SelectItem value="Operations">Operations</SelectItem>
                  <SelectItem value="Customer Service">
                    Customer Service
                  </SelectItem>
                  <SelectItem value="Legal">Legal</SelectItem>
                  <SelectItem value="Healthcare">Healthcare</SelectItem>
                  <SelectItem value="Education">Education</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Industry Type
            </label>
            <Select
              onValueChange={(value) =>
                setFormData((prev) => ({ ...prev, industryType: value }))
              }
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Industry" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Govt">Govt</SelectItem>
                <SelectItem value="Semi-Govt">Semi-Govt</SelectItem>
                <SelectItem value="Private">Private</SelectItem>
                <SelectItem value="International">International</SelectItem>
                <SelectItem value="NGO">NGO</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Requirements */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Requirements (one per line)
          </label>
          <Textarea
            name="requirements"
            value={formData.requirements}
            onChange={handleChange}
            placeholder="Enter each requirement on a new line"
          />
        </div>

        {/* Responsibilities */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Responsibilities (one per line)
          </label>
          <Textarea
            name="responsibilities"
            value={formData.responsibilities}
            onChange={handleChange}
            placeholder="Enter each responsibility on a new line"
          />
        </div>

        {/* Submit Button */}
        <div>
          <Button
            type="submit"
            disabled={isPending}
            className={`w-full py-2 px-4 rounded-md text-white bg-green-600 hover:bg-green-700 transition ${
              isPending ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {isPending ? "Posting..." : "Post Job"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default PostJobForm;
