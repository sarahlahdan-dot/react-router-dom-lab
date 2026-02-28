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
        <div key={aMail._id}>
            <h2>Boxholder Name: {aMail.owner}</h2>
            <p>Box size:{aMail.size}</p>
            <Link to={'/mailboxes/' + aMail._id}>Mailbox Details</Link>
        </div>
        )}
      
    </div>
  )
}

export default MailboxList
