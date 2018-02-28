import React, { Component } from 'react'
// import logo from './logo.svg';
import './App.css'
import Contact from './components/Contact'
import Splash from './components/Splash'

const fakeContacts = [
  { _id: '111', name: 'Основной', phone: '+7 (771) 111-11-11' },
  { _id: '222', name: 'Приёмная', phone: '+7 (772) 222-22-22' },
  { _id: '333', name: 'Отдел закупок', phone: '+7 (773) 333-33-33' }
]

class App extends Component {

  constructor(props) {
    super(props)
    this.state = { calling: false, name: '' }
    this.onCallback = this.onCallback.bind(this)
  }

  onCallback({ contactID, name }) {
    this.setState({ calling: true, name })
    console.log('Emitted from', contactID, name)
  }

  render() {
    const { calling, name } = this.state
    return (
      <div className="App">
        {calling && <Splash title={name} />}
        {fakeContacts.map(contact => <Contact
          key={Math.random()}
          name={contact.name}
          phone={contact.phone}
          contactID={contact._id}
          onCallback={this.onCallback}
          onRemove={this.onCallback} />)}
      </div>
    );
  }
}

export default App
