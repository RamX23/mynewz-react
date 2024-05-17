import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'

export default class News extends Component {
  static defaultProps = {
    country:'in',
  category:'general',
   pagesize:8,
  }
  static propTypes={
    country:PropTypes.string,
    category:PropTypes.string,
    pagesize:PropTypes.number,
  }

  articles = [];
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=0d1a56b2d6eb4e558db235451907ce54&category=${this.props.category}&apiKey=0d1a56b2d6eb4e558db235451907ce54&pagesize=${this.props.pagesize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseddata = await data.json();
    this.setState({ articles: parseddata.articles, loading: false });
  }

async update (){
  let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=0d1a56b2d6eb4e558db235451907ce54&category=${this.props.category}&apiKey=0d1a56b2d6eb4e558db235451907ce54&pagesize=${
    this.props.pagesize
  }&page=${this.state.page + 1}`;
  let data = await fetch(url);
  this.setState({ loading: true });
  let parseddata = await data.json();
  this.setState({
    page: this.state.page + 1,
    articles: parseddata.articles,
    loading: false,
  });
}

  handlenext = async () => {
    if (
      !(
        this.state.page + 1 >  Math.ceil(this.state.totalResults / this.props.pagesize)
      )
    ) {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=0d1a56b2d6eb4e558db235451907ce54&category=${this.props.category}&apiKey=0d1a56b2d6eb4e558db235451907ce54&pagesize=${
        this.props.pagesize
      }&page=${this.state.page + 1}`;
      let data = await fetch(url);
      this.setState({ loading: true });
      let parseddata = await data.json();
      this.setState({
        page: this.state.page + 1,
        articles: parseddata.articles,
        loading: false,
      });
      // this.setState({page:this.state.page + 1});
      // this.update();
    }
  };
  handleprev = async () => {
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=0d1a56b2d6eb4e558db235451907ce54&category=${this.props.category}&apiKey=0d1a56b2d6eb4e558db235451907ce54&pagesize=${
    //   this.props.pagesize
    // }&page=${this.state.page - 1}`;
    // let data = await fetch(url);
    // this.setState({ loading: true });
    // let parseddata = await data.json();
    // this.setState({
    //   page: this.state.page - 1,
    //   articles: parseddata.articles,
    //   loading: false,
    // });
    this.setState({page:this.state.page - 1});
    this.update();
  };
  render() {
    return (
      <>
        {this.state.loading && <Spinner />}
        <h1 className="my-3 mx-5 text-center">Top Headlines</h1>
        <div className="row my-5 mx-3">
          {this.state.articles &&
            this.state.articles.map((element) => {
              return (
                <div className="conaitner col-md-3">
                  <Newsitem
                    title={element.title}
                    imageurl={element.urlToImage}
                    description={element.description}
                    newsurl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                  />
                </div>
              );
            })}
        </div>
        <div className="d-flex justify-content-between mx-3 my-3">
          <button
            disabled={this.state.page <= 1}
            type="button"
            class="btn btn-secondary"
            onClick={this.handleprev}
          >
            {" "}
            &larr; Previous
          </button>
          <button
            type="button"
            class="btn btn-success"
            onClick={this.handlenext}
          >
            Next &rarr;
          </button>
        </div>
      </>
    );
  }
}
