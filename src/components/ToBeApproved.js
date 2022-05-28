import {useState,useEffect} from 'react'
import axios from 'axios'
import IdeaComponent from './IdeaComponent'
import AdminNav from './AdminNav'
import AdminPost from './AdminPost'
import Footer from '../components/Footer'
export default function ToBeApproved() {
    const [ideas, setIdeas]= useState([])
    useEffect(() => {
        axios.get('https://o1think.herokuapp.com/admincheck').then((response)=>{
            setIdeas(response.data)
        })
    }, [])

    const approve=(val)=>{
        console.log(val._id)
        const id=val._id
        const postconfirm=window.confirm("This idea will be approved for the public to view. Okay?")
        if (postconfirm) {
            axios.post('https://o1think.herokuapp.com/approvepost', {id:id})
        } else {
            alert("Oh.. Oh!")
        }
    }
    
    const remove=(val)=>{
        console.log(val._id) 
        const id=val._id
        const delconfirm=window.confirm("This post will be deleted permanently and the owner concerned will be alerted!")
        if (delconfirm) {
            axios.post('https://o1think.herokuapp.com/deletepost', {id:id})
        } else {
            alert("Okay! Thanks for giving our users another chance.")
        }
    }
    const feedback=(val)=>{
        console.log(val._id)
    }
    return (
        <>
        <AdminNav/>
        <br/>
        <div className="AdminPagePosts"/>
        {ideas.map((val, i) => (
            <div key={i}>
              <AdminPost date={val.date} time={val.time} username={val.username} ideaDetails={val.postContent} actions={<div className="cardbox-approval">
              <button className="btn btn-outline-success" onClick={()=>approve(val)}>Approve</button>
              <button className="btn btn-outline-warning" onClick={()=>feedback(val)}>Send Feedback</button>        
              <button className="btn btn-outline-danger" onClick={()=>remove(val)}>Decline</button>
              </div>}/>
            </div>
          ))}
          <Footer/>
        </>
    )
}
