import React, { Component } from 'react';
class Newsarticles extends Component {
  
    constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };
  }

  componentDidMount() {
    fetch(
      "http://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=2e8b21f1cfb44804a099cd862e142a27"
    )
      .then( (response) => {
        return response.json();
      })
      .then( (myJson) => {
        this.setState({
          articles: myJson.articles,
        });
      });
  }
  render() {
    console.log(this.state);
      return (<div className="startnews">
          {this.state.articles.map((item, index) => { 
              return (
                <div className="news">
                  <a className="titlenews" href={item.url}>
                    <h2> {item.title}</h2>
                  </a>
                  
                  <img
                    className="imagenews"
                    src={item.urlToImage}
                    alt="description"
                  />

                  <p className="contentnews">{item.content}</p>

                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  
                </div>
              );
          })}
    </div>);
  }
}

export default Newsarticles;