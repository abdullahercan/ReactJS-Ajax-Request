import React from 'react';

import './Style.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: []
    }
  }

  componentDidMount() {
    fetch("https://randomuser.me/api/")
      .then(res => res.json())
      .then(
        (e) => {
          this.setState({
            loading: false,
            data: e.results[0]
          })
        }
      )
  }
  render() {
    const { loading, data } = this.state;

    if (loading)
      return (<div className="wrap loading">
        <div className="user">
          <div className="picture"></div>
          <div className="user_data">
            <div className="username"></div>
            <div className="email"></div>
          </div>
        </div>
      </div>);

    return (<div className="wrap">
      <div className="user">
        <div className="picture">
          <img src={data.picture.large} alt={data.name.first} />
        </div>
        <div className="user_data">
          <div className="username">
            {data.name.first} {data.name.last}
          </div>
          <div className="email">{data.email}</div>
        </div>
      </div>
    </div>)

  }
}

export default App;
