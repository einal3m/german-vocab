import React from 'react';
import { postUser } from '../../api/user-api';

export default class NewUser extends React.Component {

  createUser = () => {
    postUser('Melanie');
  };

  render = () => {
    return(
      <div>
        <button onClick={this.createUser}>Create Me</button>
      </div>
    );
  };
}
