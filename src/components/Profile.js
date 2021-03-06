import React from 'react';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', email: '' };
  }

  fetchUser = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          name: data.name,
          email: data.email,
        });
      })
      .catch((err) => console.log(err));
  }

  componentDidMount() {
    this.fetchUser(this.props.id);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.id !== this.props.id) {  
      this.fetchUser(this.props.id);
    }
  }

  componentWillUnmount() {
    console.log('Compounded has unmounted!')
  }

  render() {
    return (
      <div>
        <h2>{`Name: ${this.state.name || ''}`}</h2>
        <p>{`Email: ${this.state.email || ''}`}</p>
      </div>
    );
  }
}

export default Profile;