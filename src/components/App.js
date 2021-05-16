
import React from 'react';
import Login from './login';
import useLocalStorage from '../hooks/useLocalStorage';
import Dashboard from './Dashboard';
import { ContactsProvider } from './context/ContactsProvider'
import { ConversationsProvider } from './context/ConversationsProvider'
import { SocketProvider } from './context/SocketProvider'


function App() {
  const [id, setId] = useLocalStorage('id')
  const [lang, setLang] = useLocalStorage('lang', 'English')

  const dashboard = (
    <SocketProvider id={id}>
      <ContactsProvider>
        <ConversationsProvider id={id} lang={lang}>
          <Dashboard id={id} />
        </ConversationsProvider>
      </ContactsProvider>
    </SocketProvider>
  )

  return (
    id ? dashboard : <Login onIdSubmit={setId} onLangSubmit={setLang} />
  )
}

export default App;