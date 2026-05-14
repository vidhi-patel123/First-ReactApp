import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  articles= [
    {
      "source": {
        "id": "the-washington-post",
        "name": "The Washington Post"
      },
      "author": "Rick Maese",
      "title": "Jason Collins, a gay trailblazer in the NBA, dies of brain cancer at 47 - The Washington Post",
      "description": "He was the first active, openly gay player in the league’s history. In December, he announced that he had a deadly form of brain cancer.",
      "url": "https://www.washingtonpost.com/obituaries/2026/05/12/jason-collins-first-openly-gay-nba-player-dies-brain-cancer-47/",
      "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://cloudfront-us-east-1.images.arcpublishing.com/wapo/BIU6VVCGF4VLYHURFJ7CE6D62I.jpg&w=1440",
      "publishedAt": "2026-05-13T02:01:29Z",
      "content": "For most of his 13 seasons in the National Basketball Association, Jason Collins was known as the sort of player contenders always seemed to need and casual fans often overlooked a broad-shouldered, … [+218 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Abcnews.com"
      },
      "author": "The Associated Press",
      "title": "From Dani Rojas to the USL: Cristo Fernandez earns an El Paso Locomotive deal - ABC News - Breaking News, Latest News and Videos",
      "description": "Forward Cristo Fernandez, the actor known who portrayed Dani Rojas on the Apple TV series “Ted Lasso,” has signed with El Paso Locomotive FC of the USL to play soccer professionally",
      "url": "https://abcnews.com/Entertainment/wireStory/dani-rojas-usl-cristo-fernandez-earns-el-paso-132889386",
      "urlToImage": "https://i.abcnewsfe.com/a/13ed2d75-a226-4e3b-8c96-f2515e7f3e69/wirestory_66cf925389011fd6deb8565fcd2c12c0_16x9.jpg?w=1600",
      "publishedAt": "2026-05-12T19:12:19Z",
      "content": "EL PASO, Texas -- Forward Cristo Fernandez, the actor who portrayed Dani Rojas on the Apple TV series Ted Lasso has signed with El Paso Locomotive FC of the USL to play soccer professionally.\r\nTerms … [+849 chars]"
    }
  ]
  constructor() {
    super();
    console.log("Hello, I am constructor from news")
    this.state = {
      articles: this.articles,
      loading: false
      
  }  
}

  render() {
    return (
      <div className="container my-3">
        <h2>Latest News Monkey Headlines</h2>
        <div className="row">
          <div className="col-md-4">
            <NewsItem title="News about Play " description="This is a Play description." imageurl="https://www.washingtonpost.com/wp-apps/imrs.php?src=https://cloudfront-us-east-1.images.arcpublishing.com/wapo/BIU6VVCGF4VLYHURFJ7CE6D62I.jpg&w=1440" newsUrl="https://www.washingtonpost.com/obituaries/2026/05/12/jason-collins-first-openly-gay-nba-player-dies-brain-cancer-47/" />
          </div>
          <div className="col-md-4">
            <NewsItem title="Another News Title" description="This is another news description." imageurl="https://www.washingtonpost.com/wp-apps/imrs.php?src=https://cloudfront-us-east-1.images.arcpublishing.com/wapo/BIU6VVCGF4VLYHURFJ7CE6D62I.jpg&w=1440" newsUrl="https://abcnews.com/Entertainment/wireStory/dani-rojas-usl-cristo-fernandez-earns-el-paso-132889386"  />
          </div>
          <div className="col-md-4">
            <NewsItem title="Another News Title" description="This is another news description." imageurl="https://www.washingtonpost.com/wp-apps/imrs.php?src=https://cloudfront-us-east-1.images.arcpublishing.com/wapo/BIU6VVCGF4VLYHURFJ7CE6D62I.jpg&w=1440" newsUrl="https://www.washingtonpost.com/obituaries/2026/05/12/jason-collins-first-openly-gay-nba-player-dies-brain-cancer-47/" />
          </div>
        </div>
      </div>
    )
  }
}

export default News
