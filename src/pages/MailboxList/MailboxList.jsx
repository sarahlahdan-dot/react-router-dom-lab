import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {Link} from 'react-router'

function MailboxList() {
    const [list,setList] = useState([])

    async function getList(){

     const mailboxLists = await axios.get(' https://mailbox-lab.onrender.com/mailboxes')

     setList(mailboxLists.data)   
    }
    useEffect(()=>{
        getList()
    },[])

  return (
    <div>
        {list.map((aMail)=>
        <div key={list._id}>
            <h2>Boxholder Name: {list.name}</h2>
            <p>Box size:{list.size}</p>
            <Link to={'/mailboxes/' + list._id}>Mailbox Details</Link>
        </div>
        )}
      
    </div>
  )
}

export default MailboxList
