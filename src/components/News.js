import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page:1
      
  }  
}

async componentDidMount() {
    let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=0670e6d3adf8410db649cd9ef5f85440&page=1&pageSize=20";
    let response = await fetch(url);
    let data = await response.json();
    this.setState({ articles: data.articles, loading: false });
}

handlePrevClick = async () => {
  console.log("Previous");
  let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=0670e6d3adf8410db649cd9ef5f85440&page=${this.state.page - 1}`;
  let response = await fetch(url);
  let data = await response.json();
  this.setState({
    page: this.state.page - 1,
    articles: data.articles,
  });
}

handleNextClick = async () => {
  console.log("Next");
  let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=0670e6d3adf8410db649cd9ef5f85440&page=${this.state.page + 1}`;
  let response = await fetch(url);
  let data = await response.json();
  this.setState({
    page: this.state.page + 1,
    articles: data.articles,
  });
}
  render() {
    return (
      <div className="container my-3">
        <h2>Latest News Monkey Headlines</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return <div className="col-md-4" key={element.url}>
              <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageurl={element.urlToImage} newsUrl={element.url} />
            </div>
          })}
        </div>
        <div className="container my-3 justify-content-between d-flex">

  <button className="btn btn-dark" disabled={this.state.page <= 1} onClick={this.handlePrevClick}>Previous</button>

  <button className="btn btn-dark" onClick={this.handleNextClick}>Next
  </button>

</div>
      </div>
    )
  }
}

export default News
