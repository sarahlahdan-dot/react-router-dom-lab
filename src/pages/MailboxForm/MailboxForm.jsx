
import axios from 'axios'
import { useState } from "react"
import { useNavigate } from "react-router"

function MailboxForm() {

    const [mailboxForm,setMailboxForm] = useState({
        name:"",
        size:"",
    })

    const navigate = useNavigate()

    async function handleSubmit(event){

        event.preventDefault()

        const mailboxForm = await axios.post(' https://mailbox-lab.onrender.com/mailboxes',mailboxForm)
        navigate('/mailboxes')
    }

        function handleChange(event){
            setMailboxForm({...MailboxForm, [event.target.name]: event.target.value});
        }
  return (
    <div>
       <h1>New Mailbox</h1>

       <form onSubmit={handleSubmit}>

            <label htmlFor="name">Boxholder Name:</label>

            <input value={formData.name} onChange={handleChange} name='name' type="text" />

            <label htmlFor="size">Box Size:</label>

            <input value={formData.size} onChange={handleChange} name='size' type="text" />

            <button>Enter</button>

       </form>     


    </div>
  )
}
export default MailboxForm
