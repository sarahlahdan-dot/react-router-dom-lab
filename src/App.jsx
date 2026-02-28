import {Routes, Route} from 'react-router'
import NavBar from './components/NavBar/NavBar'
import MailboxDetails from './pages/MailboxDetails/MailboxDetails'
import MailboxForm from './pages/MailboxForm/MailboxForm'
import MailboxList from './pages/MailboxList/MailboxList'



// src/App.jsx

const App = () => {
  return(
    <div>
      <NavBar/>
      <Routes>
        <Route path="/" element={<main><h1>Post Office</h1></main>}></Route>
        <Route path="/mailboxes" element={<MailboxList />}></Route>
        <Route path="/mailboxes/new-mailbox" element={<MailboxForm />}></Route>
        <Route path="/mailboxes/:mailboxId" element={<MailboxDetails />}></Route>
      </Routes>
    </div>
  )
};

export default App;