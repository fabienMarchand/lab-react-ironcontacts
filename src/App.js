import React from 'react';
import logo from './logo.svg';
import './App.css';
import contactJson from './contacts.json';

class App extends React.Component {
  state =  {
    contacts: contactJson.filter((list, i) => i < 5),
  }

  addContact = () => {
    const addRandContact = contactJson[Math.floor(Math.random() * (contactJson.length - 5)) + 5];
    const contactArrTmp = [...this.state.contacts, addRandContact];
    this.setState({
      contacts:  [...new Set(contactArrTmp)],
    })
  };


  deleteContact = (indexContact) => {
    let newArrContact =  [...this.state.contacts].filter((contact, index) => index!== indexContact)
    console.log(newArrContact);
        this.setState({
          contacts : newArrContact,
        })
    };

  renderContact = () => {
    return(
      this.state.contacts.map((contact, i) => (
      <tr key={i} >
      <td><img  src={contact.pictureUrl} alt={contact.name} /></td> 
      <td>{contact.name}</td>
      <td>{contact.popularity}</td>
      <td> <button onClick={() => this.deleteContact(i)}>Delete</button></td>
      </tr>
       ))
    )
  };

  sortByName = () => {
      this.setState({  contacts: [...this.state.contacts].sort((a, b) => a.name < b.name ? -1 : 1)})
  };

  sortByPopularity = () => {
    this.setState({  contacts: [...this.state.contacts].sort((a, b) => a.popularity < b.popularity ? 1 : -1)})
  };


  render() {
   
    return ( 
      <div className="App">
    <h1>IronContacts</h1>
    <button onClick={this.addContact}>Add Random Contact</button>
    <button onClick={this.sortByName}>Sort By Name</button>
    <button onClick={this.sortByPopularity}>Sort By Popularity</button>
      <table>
        <thead>
          <tr className="table-info">
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Action</th>  
          </tr>
        </thead>
        <tbody>

        {this.renderContact()}
        
        </tbody>
      </table>
    </div>
    );
  }

};




export default App;
