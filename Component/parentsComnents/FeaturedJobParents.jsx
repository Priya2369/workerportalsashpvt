import Head from 'next/head'
import { React, useState, useEffect } from "react";
import styles from '../../styles/featuredJob.module.css'
import FeaturedJob from '../propComponents/FeaturedJob'
import FeaturdJobData from '../array/FeaturedJobData'
import axios from "axios";

export default function FeaturedJobParents() {
const [items, setItems]=useState([])

useEffect(()=>{
async function getData(){
    try{
    const res = await axios.get(`http://localhost:8080/api/v1/business/project?page=0&limit=50&sort=createdAt&sortOrder=asc`);
    console.log(res.data.projects)
    setItems(res.data.projects)
    }catch(error){
        console.log(error)
    }
}
getData();
},[])
    return (
        <>
            {/* <div>
                {FeaturdJobData.slice(0, 4).map((val) => {
                    return (
                        
                        <FeaturedJob image={val.image} company={val.company}
                            skill={val.skill} location={val.location}
                            dutyTime={val.dutyTime} salary={val.salary} />
                            );
                         })}

            </div> */}
            <div>
                {items.slice(0, 5).map((item, id)=>{
                    return(
                        < div key={id}>
                           <FeaturedJob company={item.title} skill={item.description} location={item.location}
                            salary={item.requirements.map((requ, id)=>{
                                return(
                                    <div key={id}>
                                        <div>{requ.details.map((sal,id)=>{
                                            return(
                                                <div key={id}>
                                                    {sal.salaryPerMonth.minValue}-
                                                    {sal.salaryPerMonth.maxValue}
                                                </div>
                                            )
                                        })}</div>
                                    </div>
                                )
                             })}/>
                        </div>
                    )
                })}
            </div>
            
        </>
    )
}