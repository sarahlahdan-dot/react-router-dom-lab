import { Link } from 'react-router'



function NavBar() {
  return (
    <div>
        <Link className='nono' to='/'>Home</Link>
        <Link className='nono' to='/mailboxes'>Mailboxes</Link>
        <Link className='nono' to='/new-mailbox'>New Mailbox</Link>
      
    </div>
  )
}

export default NavBar
