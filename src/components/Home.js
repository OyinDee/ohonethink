import React from 'react'
import Nav from '../components/Nav'
import AfterNav from '../components/AfterNav'
import WhatWedo from '../components/WhatWedo'
import Signup from '../components/Signup'
import All from '../components/All'
import Footer from '../components/Footer'
import Feedback from '../components/Feedback'
import {useSelector,useDispatch} from "react-redux"
import {useEffect, useState} from "react"
import {Link, useNavigate} from "react-router-dom"
import {changename} from '../actions/change'
import axios from 'axios'

export default function Home() {
    const navigate= useNavigate()
    const token=localStorage.token
    const username=localStorage.username
    useEffect(() => {
        axios.get('https://o1think.herokuapp.com/dashcheck', {
            headers:{
                'Authorization':`Bearer ${token}`,
                'Content-Type':'application/json',
                'Accept':'application/json'
            }
        }
    ).then((response)=>{
        if(localStorage.token&&response.data.message=='verification successful'){
        navigate('/thinkers/home')
            localStorage.username=response.data.username
        }
        else{
        }
    }).catch((err)=>{
        console.log(err)
    })
    }, [username])
    return (
        <>

        <Nav/>
        <AfterNav/>
        <WhatWedo/>
        <Signup/>  
        <All/>      
        <Feedback/>
        <Footer/>
        </>
    )
}
