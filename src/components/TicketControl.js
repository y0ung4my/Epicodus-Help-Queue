// class-based component to handle state

import React from 'react';
import NewTicketForm from './NewTicketForm';
import TicketList from './TicketList';

class TicketControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainTicketList: []
    };
  }

  handleClick = () => {
    this.setState(prevState => ({ formVisibleOnPage: !prevState.formVisibleOnPage }));
  }

  handleAddingNewTicketToList = (newTicket) => {
    const newMainTicketList = this.state.mainTicketList.concat(newTicket);
    this.setState({ mainTicketList: newMainTicketList, formVisibleOnPage: false });
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewTicketForm onNewTicketCreation={this.handleAddingNewTicketToList} />;
      buttonText = "Return to TicketList";
    } else {
      currentlyVisibleState = <TicketList ticketList={this.state.mainTicketList}/>
      buttonText = "Add Ticket";
    }
    console.log(currentlyVisibleState);
    console.log(buttonText);
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }

}

export default TicketControl;