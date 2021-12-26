// rcc 
import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export default class News extends Component {
    static defaultProps = {
        country: 'in',
        pagesize: 8,
        category: 'general'
    }

    static propTypes = {
        country: PropTypes.string,
        pagesize: PropTypes.number,
        category: PropTypes.string
    }
    // articles = [
    //     {
    //         "source": {
    //             "id": "bbc-sport",
    //             "name": "BBC Sport"
    //         },
    //         "author": "BBC Sport",
    //         "title": "Labuschagne replaces Root in Test rankings",
    //         "description": "Australian Marnus Labuschagne replaces Joe Root at the top of the International Cricket Council's men's Test batting rankings.",
    //         "url": "http://www.bbc.co.uk/sport/cricket/59753054",
    //         "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/161E3/production/_122359509_marnus.jpg",
    //         "publishedAt": "2021-12-22T10:22:26.2031115Z",
    //         "content": "<table><tr><th>The Ashes: Australia v England - third Test</th></tr>\r\n<tr><td>Venue: Melbourne Cricket Ground Date: 26-30 December Time: 23:00 GMT (25-29 December)</td></tr><tr><td>Coverage: Test Mat… [+892 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "espn-cric-info",
    //             "name": "ESPN Cric Info"
    //         },
    //         "author": null,
    //         "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
    //         "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
    //         "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
    //         "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
    //         "publishedAt": "2020-04-27T11:41:47Z",
    //         "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "espn-cric-info",
    //             "name": "ESPN Cric Info"
    //         },
    //         "author": null,
    //         "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
    //         "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
    //         "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
    //         "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
    //         "publishedAt": "2020-03-30T15:26:05Z",
    //         "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
    //     }
    // ]

    capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    constructor(props) {
        super(props);
        console.log("Hello I am a constructor from news components");
        this.state = {
            // articles: this.articles,
            articles: [],
            loading: false,
            page: 1
        }

        document.title = `NewsMonkey ${this.capitalize(this.props.category)} Special News`
    }

    // async updateNews() {
    //     console.log('c', this.state.page);
    //     const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b3486bfb8b77431986f688ac65bb8787&page=${this.state.page + 1}&pagesize=${this.props.pagesize}`;
    //     this.setState({ loading: true });
    //     let data = await fetch(url);
    //     let parsedData = await data.json();
    //     console.log(parsedData);
    //     this.setState({
    //         articles: parsedData.articles,
    //         totalResults: parsedData.totalResults,
    //         loading: false
    //     })
    //     console.log('d', this.state.page);
    // }

    async componentDidMount() {
        console.log("cdm");
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b3486bfb8b77431986f688ac65bb8787&page=1&pagesize=${this.props.pagesize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })

    }

    handlePrevClick = async () => {
        if (Math.ceil(this.state.totalResults / this.props.pagesize) !== Math.ceil(this.props.pagesize * (this.state.page + 1) / this.props.pagesize)) {
            let ne1 = document.getElementById('ne1');
            ne1.removeAttribute('disabled');
        }
        console.log("prev");

        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b3486bfb8b77431986f688ac65bb8787&page=${this.state.page - 1}&pagesize=${this.props.pagesize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);

        this.setState({
            articles: parsedData.articles,
            page: this.state.page - 1,
            loading: false
        })
    }
    handleNextClick = async () => {
        if (Math.ceil(this.state.totalResults / this.props.pagesize) === Math.ceil(this.props.pagesize * (this.state.page + 1) / this.props.pagesize)) {
            let ne1 = document.getElementById('ne1');
            ne1.setAttribute('disabled', 'disabled');
        }

        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b3486bfb8b77431986f688ac65bb8787&page=${this.state.page + 1}&pagesize=${this.props.pagesize}`;
        this.setState({ loading: true })

        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);

        this.setState({
            articles: parsedData.articles,
            page: this.state.page + 1,
            loading: false
        })
    }
    render() {
        console.log("render");
        return (
            <>
                <div className='container '>
                    <h2 className='text-center ' style={{ marginTop: '60px' }}>{this.state.page}. NewsMonkey - Top {this.capitalize(this.props.category)} Headlines</h2>
                    {this.state.loading && <Spinner />}
                    <div className="row">

                        {!this.state.loading && this.state.articles.map((element) => {
                            console.log(element);
                            return <div className="col-md-3 my-3" key={element.url}>


                                <NewsItem title={element.title !== null ? element.title.slice(0, 20) : ""} description={element.description !== null ? element.description.slice(0, 80) : "No Description available for this particular news"} imageUrl={element.urlToImage !== null ? element.urlToImage : 'https://media.istockphoto.com/photos/breaking-news-world-news-with-map-backgorund-picture-id1182477852?k=20&m=1182477852&s=612x612&w=0&h=I3wdSzT_5h1y9dHq_YpZ9AqdIKg8epthr8Guva8FkPA='} newsUrl={element.url} author={element.author !== null ? element.author : 'UnKnown'} date={element.publishedAt} source={element.source.name} />
                            </div>


                        })}
                        {/* <div className="col-md-4">
                        <NewsItem title='myTitle' description='mydesc' imageUrl='https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg' newsUrl='TODO' />
                    </div> */}

                    </div>

                    {/* This is a news component */}
                    {/* <NewsItem />
                <NewsItem /> */}
                </div>
                <div className=" fixed-bottom d-flex justify-content-between">
                    <button className="btn btn-dark" disabled={this.state.page <= 1} onClick={this.handlePrevClick}><span className="text-danger ">&larr; </span> Previous</button>
                    <button className="btn btn-dark " onClick={this.handleNextClick} id='ne1'>Next <span className="text-success">&rarr;</span> </button>
                </div>
            </>
        )
    }
}
