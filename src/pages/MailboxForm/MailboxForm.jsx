
import axios from 'axios'
import { useState } from "react"
import { useNavigate } from "react-router"

function MailboxForm() {

    const [mailboxForm,setMailboxForm] = useState({
        owner:"",
        size:"",
    })

    const navigate = useNavigate()

    async function handleSubmit(event){

        event.preventDefault()

         await axios.post('https://mailbox-lab.onrender.com/mailboxes',mailboxForm)

        navigate('/mailboxes')
    }

        function handleChange(event){
            setMailboxForm({...mailboxForm, [event.target.name]: event.target.value});
        }

  return (
    <div>
       <h1>New Mailbox</h1>

       <form onSubmit={handleSubmit}>

            <label htmlFor="owner">Boxholder Name:</label>

            <input value={mailboxForm.name} onChange={handleChange} name='owner' type="text" />

            <label htmlFor="size">Box Size:</label>

            <input value={mailboxForm.size} onChange={handleChange} name='size' type="text" />

            <button>Enter</button>

       </form>     


    </div>
  )
}
export default MailboxForm
