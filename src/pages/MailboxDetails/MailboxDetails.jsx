import { useParams } from "react-router"
import axios from 'axios'
import { useState, useEffect } from "react"

function MailboxDetails() {
    const [dets,setDets] = useState(null)
    const {id} = useParams()

    async function getDetails(){
        const mail = await axios.get(`${import.meta.env.VITE_BASE_URL}/mailboxes/${id}`)
        setDets(mail.data)
    }

    useEffect(()=>{
        getDetails()
    },[])       


  return (
    <div>
      <h1>Mailbox details</h1>
      {dets && (
  <>
    <h2>Boxholder name: {dets.name}</h2>
    <p>Box Size: {dets.size}</p>
  </>
)}

    </div>
  )
}

export default MailboxDetails
