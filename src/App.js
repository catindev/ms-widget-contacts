import React, { Component } from 'react'
// import logo from './logo.svg';
import './App.css'
import Contact from './components/Contact'
import Splash from './components/Splash'

import { fetchContacts, callbackToContact } from './api'

class App extends Component {

  constructor(props) {
    super(props)
    console.info('⚒ Contacts list for', this.props.customer)
    this.state = { calling: false, name: '', contacts: [] }

    this.onCallback = this.onCallback.bind(this)
    this.onRemove = this.onRemove.bind(this)
  }

  componentDidMount() {
    const customerID = this.props.customer
    const token = this.props.msid
    fetchContacts({ customerID, token })
      .then(contacts => this.setState({ contacts }))
      .catch(error => console.error('💩', error.message))
  }

  onCallback({ contactID, name }) {
    const token = this.props.msid
    this.setState({ calling: true, name })
    callbackToContact({ contactID, token })
      .then(callback => {
        this.setState({ calling: false, name: '' })
        console.info('⚒ Callback response', callback.response)
      })
      .catch(error => {
        console.error('💩', error.message)
        this.setState({ calling: false, name: '' }, () => alert(error.message))
      })
  }

  onRemove({ contactID }) {
    console.log('remove emitted for', contactID)
  }

  render() {
    const { calling, name, contacts } = this.state
    return (
      <div className="App">
        {calling && <Splash title={name} />}
        {contacts.length === 0 && <div className="bContactsPreloader"></div>}
        {contacts.map(contact => <Contact
          key={Math.random()}
          name={contact.name}
          phone={contact.phone}
          contactID={contact._id}
          onCallback={this.onCallback}
          onRemove={this.onRemove} />)}
      </div>
    );
  }
}

export default App
