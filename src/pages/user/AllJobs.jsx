import { useQuery } from '@tanstack/react-query';
import React from 'react';
import usePublicAxios from '../../hooks/usePublicAxios';
import Loading from '../../components/Loading';

const AllJobs = () => {

    const {data,isLoading} = useQuery({
        queryKey:['jobs'],
        queryFn: async()=>{
            const response = await usePublicAxios.get('jobs/alljobs');
            return response.data
        }
    })
    console.log(data);
    return (
        <div>
            {isLoading? <Loading/>:'jobs'}
            
        </div>
    );
};

export default AllJobs;