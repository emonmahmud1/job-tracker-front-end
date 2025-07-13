import { useQuery } from '@tanstack/react-query';
import React from 'react';
import usePublicAxios from '../../hooks/usePublicAxios';
import Loading from '../../components/Loading';
import JobCard from '../../components/JobCard';

const AllJobs = () => {

    const {data,isLoading} = useQuery({
        queryKey:['jobs'],
        queryFn: async()=>{
            const response = await usePublicAxios.get('jobs/alljobs');
            return response.data
        }
    })
    // console.log(data);
    return (
        <div className=' grid grid-cols-1 gap-5'>
            {isLoading? <Loading/>:data.map((job,idx)=>
            <JobCard key={idx} job={job}/>)}
            
        </div>
    );
};

export default AllJobs;