import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Components/Spinner";
import PropTypes from 'prop-types'

export default class News extends Component {
  static defaultProps = {
    country : "pak",
    pageSize : "5",
    category : "general"
  };
  static propTypes = {
    country : PropTypes.string,
    pageSize : PropTypes.number,
    category: PropTypes.string
  };
    article = [
        {
            "source": {
            "id": "the-washington-post",
            "name": "The Washington Post"
            },
            "author": "Salvador Rizzo, Rachel Weiner, Ellen Nakashima",
            "title": "Assange plea came after warning that U.S. would lose extradition fight - The Washington Post",
            "description": "After years of trying to bring the WikiLeaks founder back to the United States to stand trial, the near-collapse of the case in a British court sent the Justice Department hurtling toward a plea deal.",
            "url": "https://www.washingtonpost.com/national-security/2024/06/27/assange-wikileaks-deal-justice/",
            "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/3BNS7WRZL6LGDXOMHIOHCYIV7U.JPG&w=1440",
            "publishedAt": "2024-06-28T03:09:00Z",
            "content": "On April 4, a Justice Department attorney in Europe sent a dire message to colleagues back home: Their five-year battle to bring Julian Assange from Britain to the United States to stand trial for pu… [+10841 chars]"
            },
            {
            "source": {
            "id": "associated-press",
            "name": "Associated Press"
            },
            "author": "ZEKE MILLER, MICHELLE L. PRICE, WILL WEISSERT, BILL BARROW, DARLENE SUPERVILLE",
            "title": "Election 2024: How Biden-Trump debate could change the campaign - The Associated Press",
            "description": "A raspy President Joe Biden has repeatedly sought to confront Donald Trump in their first debate ahead of the November election, as his Republican rival countered Biden’s criticism by leaning into falsehoods about the economy, illegal immigration and his role…",
            "url": "https://apnews.com/article/bidentrumppresidentialdebate-0e7577e9a354a69f50675494fea54ca9",
            "urlToImage": "https://dims.apnews.com/dims4/default/8826a59/2147483647/strip/true/crop/2841x1598+0+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F49%2F0e%2F33bfe679c211b9b002708fb3b27b%2F3662b8c34233463b8b7099c0e3e7837b",
            "publishedAt": "2024-06-28T02:26:00Z",
            "content": "ATLANTA (AP) A raspy President Joe Biden repeatedly sought to confront Donald Trump in their first debate ahead of the November election, as his Republican rival countered Bidens criticism by leaning… [+8880 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Deadline"
            },
            "author": "Anthony D'Alessandro",
            "title": "‘A Quiet Place: Day One’ Heading To Franchise Record $5M+ Previews – Box Office - Deadline",
            "description": "'A Quiet Place: Day One' Heading to record franchise preview night of $5M-$6M.",
            "url": "http://deadline.com/2024/06/box-office-a-quiet-place-day-one-horizon-1235985586/",
            "urlToImage": "https://deadline.com/wp-content/uploads/2024/06/MCDAUPL_PA003-e1719538302498.jpg?w=1024",
            "publishedAt": "2024-06-28T02:23:00Z",
            "content": "Paramount‘s prequel A Quiet Place: Day Oneis heading to a franchise record preview night between $5M-$6M, several sources inform us. Showtimes began at 3 PM. \r\nTonight’s figure easily ranks ahead of … [+2494 chars]"
            },
            {
            "source": {
            "id": "fox-sports",
            "name": "Fox Sports"
            },
            "author": "Laken Litman",
            "title": "Tim Weah apologizes after early red card impacts USA in loss to Panama - FOX Sports",
            "description": "The United States men's national team won't have Tim Weah available for its Copa America group stage finale against Uruguay on Monday.",
            "url": "https://www.foxsports.com/stories/soccer/tim-weah-sent-off-red-card-18th-minute-usa-panama",
            "urlToImage": "https://a57.foxsports.com/statics.foxsports.com/www.foxsports.com/content/uploads/2024/06/1408/814/4752b042-usmnt1.jpg?ve=1&tl=1",
            "publishedAt": "2024-06-28T01:51:25Z",
            "content": "ATLANTA Tim Weah was issued a red card and sent off in the first half of the U.S. men's national team's second Copa América match against Panama\r\n after swinging his arm at defender Roderick Miller\r\n… [+2178 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "BBC News"
            },
            "author": null,
            "title": "PM's chief of staff helping election bet investigators - BBC.com",
            "description": "Sources tell the BBC Liam Booth-Smith is not a suspect in the investigation.",
            "url": "https://www.bbc.com/news/articles/cglky212n70o",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/bf75/live/3daae3b0-34d6-11ef-9657-2b6816735403.png",
            "publishedAt": "2024-06-28T01:50:00Z",
            "content": "Rishi Sunak's chief of staff has been interviewed as a witness by the Gambling Commission, about the saga over alleged bets on the timing of the general election.\r\nLiam Booth-Smith spoke to the betti… [+1445 chars]"
            },
            {
            "source": {
            "id": "the-washington-post",
            "name": "The Washington Post"
            },
            "author": "Ben Golliver",
            "title": "Lakers select Bronny James in NBA draft, teaming him up with LeBron James - The Washington Post",
            "description": "The selection means LeBron James and Bronny James could become the first father and son duo to play in the same NBA game.",
            "url": "https://www.washingtonpost.com/sports/2024/06/27/bronny-james-lakers-nba-draft/",
            "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/WCX562DSYVCILPR5QPCSWZTF3Y.jpg&w=1440",
            "publishedAt": "2024-06-28T01:27:20Z",
            "content": "NEW YORK The Los Angeles Lakersselected Bronny James with the 55th pick of the NBA draft Thursday, a major step in Lakers star LeBron Jamess long-held dream of teaming up with his eldest son in the N… [+5432 chars]"
            },
            {
            "source": {
            "id": "the-washington-post",
            "name": "The Washington Post"
            },
            "author": "Anumita Kaur",
            "title": "Oklahoma schools are required to teach the Bible, state superintendent says - The Washington Post",
            "description": "It was not immediately clear how the Bible would be taught or what instructional standards around it would require.",
            "url": "https://www.washingtonpost.com/nation/2024/06/27/oklahoma-bible-schools/",
            "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/6FC2S22BPC3HHI74FF4NU2GUIM.jpg&w=1440",
            "publishedAt": "2024-06-28T01:21:01Z",
            "content": "Oklahomas state superintendent on Thursday mandated that all public schools teach the Bible in a move that he said was meant to impart historical understanding, but that critics say blurs the constit… [+5109 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "9to5google.com"
            },
            "author": "Ben Schoon",
            "title": "Galaxy Z Fold 6 and Z Flip 6 leak in detailed renders [Gallery] - 9to5Google",
            "description": "A new set of leaks of the Galaxy Z Fold 6 and Flip 6 show off Samsung's new foldables in the most detail we've seen so far.",
            "url": "http://9to5google.com/2024/06/27/samsung-galaxy-z-fold-6-flip-6-render-leaks/",
            "urlToImage": "https://i0.wp.com/9to5google.com/wp-content/uploads/sites/4/2024/06/galaxy-z-fold-flip-6-ev.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
            "publishedAt": "2024-06-28T01:18:00Z",
            "content": "Ahead of its launch event on July 10, new leaks are showing off Samsung’s new foldables, the Galaxy Z Fold 6 and Flip 6, in the most detail we’ve seen to date.\r\nFresh off of leaked renders of the Gal… [+1605 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Deadline"
            },
            "author": "Dominic Patten, Patrick Hipes",
            "title": "No IATSE Strike This Summer As Union And Studios Reach Tentative Deal On Area Standards Agreement - Deadline",
            "description": "There will be no Hollywood strike by IATSE after it reached a tentative deal on an Area Standards Agreement, a companion to the Basic Agreement.",
            "url": "http://deadline.com/2024/06/iatse-area-standards-agreement-deal-studios-1235985568/",
            "urlToImage": "https://deadline.com/wp-content/uploads/2024/05/IATSE-AMPTP-2.jpg?w=1024",
            "publishedAt": "2024-06-28T01:09:00Z",
            "content": "IATSE and the Alliance of Motion Picture and Television Producers said Thursday that they have reached a a tentative agreement on all issues for the Area Standards Agreement, the companion contract t… [+1284 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "BBC News"
            },
            "author": null,
            "title": "Iran election: As young lose hope, a reformist runs for president - BBC.com",
            "description": "As Iran votes for a new president, a reformist critical of the morality police has been topping polls.",
            "url": "https://www.bbc.com/news/articles/c98qgw8qxq7o",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/5222/live/64c77130-34b2-11ef-8557-bbe6d78d7b76.jpg",
            "publishedAt": "2024-06-28T00:56:32Z",
            "content": "By Caroline Hawley, Diplomatic correspondent\r\nGrowing crowds have attended reformist Massoud Pezeshkian's rallies\r\nA snap election called after a deadly helicopter crash. A candidate promising a diff… [+5747 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "BBC News"
            },
            "author": null,
            "title": "Supreme Court rejects plan to shield Sacklers in Purdue opioid deal - BBC.com",
            "description": "The deal would have protected members of the Sackler family from lawsuits over their role in fuelling the opioid crisis.",
            "url": "https://www.bbc.com/news/articles/crggl32dz2lo",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/41e2/live/b8302950-24fb-11ef-80aa-699d54c46324.jpg",
            "publishedAt": "2024-06-28T00:56:30Z",
            "content": "By Natalie Sherman, BBC News\r\nCampaigners and family members of those who have died of opioids outside the US Supreme Court\r\nThe US Supreme Court hasstruck down a part of the bankruptcy dealfor Purdu… [+6125 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Hollywood Reporter"
            },
            "author": "Kevin Dolak",
            "title": "What Critics Are Saying About ‘The Bear’ Season 3 - Hollywood Reporter",
            "description": "The Emmy-winning show is back and critics are praising — for the most part — its third season, which  keeps its characters in limbo while having the occasional knockout moment.",
            "url": "http://www.hollywoodreporter.com/tv/tv-news/what-critics-are-saying-about-the-bear-season-3-1235934565/",
            "urlToImage": "https://www.hollywoodreporter.com/wp-content/uploads/2024/06/the-Bear-Season-3.jpg?w=800",
            "publishedAt": "2024-06-28T00:42:32Z",
            "content": "Attention fans of Peak TV: The Bear is back. The reigning champion for the Outstanding Comedy Series Emmy has returned for season 3 for more ennui and dark humor with Carmy Berzatto, the show’s prest… [+3947 chars]"
            },
            {
            "source": {
            "id": "cnn",
            "name": "CNN"
            },
            "author": "Chris Isidore",
            "title": "NFL hit with jury verdict in ‘Sunday Ticket’ antitrust trial that could reach $14.1 billion - CNN",
            "description": "A jury ordered the NFL on Thursday to pay more than $4.7 billion for anti-trust violations surrounding its “Sunday Ticket” package, which lets fans watch games outside of their home markets but required them to buy access to a bundle of games to do so.",
            "url": "https://www.cnn.com/2024/06/27/media/nfl-verdict-sunday-ticket-antitrust-trial/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2009163083.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2024-06-27T23:58:00Z",
            "content": "A jury ordered the NFL on Thursday to pay more than $4.7 billion for anti-trust violations surrounding its Sunday Ticket package, which lets fans watch games outside of their home markets but require… [+3453 chars]"
            },
            {
            "source": {
            "id": "reuters",
            "name": "Reuters"
            },
            "author": "Reuters",
            "title": "US Supreme Court allows emergency abortions in Idaho for now - Reuters",
            "description": null,
            "url": "https://www.reuters.com/legal/us-supreme-court-allows-emergency-abortions-idaho-now-2024-06-27/",
            "urlToImage": null,
            "publishedAt": "2024-06-27T23:45:35Z",
            "content": null
            },
            {
            "source": {
            "id": "abc-news",
            "name": "ABC News"
            },
            "author": "Luis Martinez",
            "title": "US sends USS Wasp assault ship and Marines to eastern Mediterranean - ABC News",
            "description": "The move will give the US options as tensions rise between Israel and Hezbollah.",
            "url": "https://abcnews.go.com/International/us-sends-uss-wasp-assault-ship-marines-eastern/story?id=111490896",
            "urlToImage": "https://i.abcnewsfe.com/a/86d80d7b-7587-4052-94d5-2da45f6982c7/uss-wasp-marines-ht-lv-240627-3_1719524659559_hpMain_16x9.jpg?w=1600",
            "publishedAt": "2024-06-27T23:04:27Z",
            "content": "The U.S. Navy amphibious assault ship USS Wasp and the Marines aboard are being sent to the eastern Mediterranean to serve as a deterrent and provide the U.S. military with options as tensions contin… [+2951 chars]"
            },
            {
            "source": {
            "id": "espn-cric-info",
            "name": "ESPN Cric Info"
            },
            "author": "Matt Roller",
            "title": "Stagnant England endure a pasting that had been in the post since Adelaide - ESPNcricinfo",
            "description": "Buttler insists England bow out with pride, but three losses to four major opponents begs to differ",
            "url": "https://www.espncricinfo.com/story/t20-world-cup-2024-eng-vs-ind-stagnant-england-endure-a-pasting-that-had-been-in-the-post-since-adelaide-1441276",
            "urlToImage": "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/383800/383886.6.jpg",
            "publishedAt": "2024-06-27T22:47:00Z",
            "content": "Eng vs Ind Highlights - Rohit, Axar and Kuldeep put India in the final"
            },
            {
            "source": {
            "id": null,
            "name": "San Antonio Express-News"
            },
            "author": "Marc Duvoisin, Cayla Harris, Greg Jefferson, Guillermo Contreras",
            "title": "Former Uvalde school police chief Pete Arredondo indicted - San Antonio Express-News",
            "description": "Pedro 'Pete' Arredondo and a former school police officer were charged with child endangerment by a Uvalde County grand jury.",
            "url": "https://www.expressnews.com/news/article/arredondo-indict-uvalde-robb-elementary-massacre-19543514.php",
            "urlToImage": "https://s.hdnux.com/photos/01/35/21/27/24450517/5/rawImage.jpg",
            "publishedAt": "2024-06-27T22:41:15Z",
            "content": "Bodycam video shows Pedro \"Pete\" Arredondo, then chief of the Uvalde school district police, directing the police response to the May 24, 2022, mass shooting at Robb Elementary School. A teenager use… [+8414 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Yahoo Entertainment"
            },
            "author": "Josh Schafer",
            "title": "Nike stock sinks after company projects larger sales decline than expected in 2025 - Yahoo Finance",
            "description": "Nike's earnings report comes as the stock has slumped over the past year amid slowing sales growth.",
            "url": "https://finance.yahoo.com/news/nike-stock-sinks-after-company-projects-larger-sales-decline-than-expected-in-2025-192129443.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/gviD9OKnqYUEXg2oJBeSAw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD03OTI-/https://s.yimg.com/os/creatr-uploaded-images/2024-06/ee9b90a0-33e3-11ef-a3e1-98108904e31f",
            "publishedAt": "2024-06-27T22:03:21Z",
            "content": "Nike (NKE) stock fell as much as 11% Thursday in after-hours trading after the retailer said it expects revenue to decline more than previously thought in the coming year.\r\nThe company said it expect… [+2941 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "WBUR"
            },
            "author": "Chris Lisinski, State House News Service",
            "title": "In AG's $175M Uber, Lyft settlement, companies to now pay drivers $32.50 hourly min. wage during rides - WBUR News",
            "description": "Most of the settlement money will become restitution payments to current and former drivers, Campbell's office said. The companies also agreed to provide drivers at least $32.50 per hour for the time they spend traveling to pick up passengers and transporting…",
            "url": "https://www.wbur.org/news/2024/06/27/massachusetts-attorney-general-uber-lyft-driver-wages",
            "urlToImage": "https://wordpress.wbur.org/wp-content/uploads/2024/05/California_Ride_Hailing_Lawsuit_20297062959295-1000x658.jpg",
            "publishedAt": "2024-06-27T21:56:15Z",
            "content": "State prosecutors agreed to a settlement with Uber and Lyft that will require the companies to pay Massachusetts $175 million, increase wages for drivers and offer a range of new benefits, officials … [+1472 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Slate Magazine"
            },
            "author": "Dahlia Lithwick, Mark Joseph Stern",
            "title": "Sonia Sotomayor warns of the Supreme Court's dirtiest open secret. - Slate",
            "description": "The case represents, as Justice Sonia Sotomayor warned in dissent, an unconstitutional “power grab” by the federal judiciary.",
            "url": "https://slate.com/news-and-politics/2024/06/sonia-sotomayor-warns-supreme-court-dirty-secret.html",
            "urlToImage": "https://compote.slate.com/images/5e45c3f1-2537-4784-9863-b80ba6956d48.png?crop=1558%2C1039%2Cx1%2Cy0&width=1560",
            "publishedAt": "2024-06-27T21:48:00Z",
            "content": "On Thursday morning, the Supreme Court handed down a case that poses an existential threat to federal regulatory agencies ability to do their work in an efficient and effective fashion. In SEC v. Jar… [+9661 chars]"
            }
            ]
            
    constructor(){
        super();
        console.log("This is a news constructor");
        this.state ={
            article : [],
            loading : true,
            page :1
        }
    }
    async componentDidMount(){
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=99b3794410ca4beab9dda8f714a32ad3&page=1&pageSize=${this.props.pageSize}`
      this.setState({loading:true});
      let data = await fetch(url)
      let pasedData=  await data.json();
      console.log(pasedData);
      this.setState({
        article : pasedData.articles, 
        totalResults: pasedData.totalResults,
        loading: false
      } )
    }
    handelNext = async ()=>{
      console.log("next");
      if (!(this.state.page + 1 >(Math.ceil( this.state.totalResults/this.props.pageSize))) ){
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=99b3794410ca4beab9dda8f714a32ad3&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
      let data = await fetch(url)
      let pasedData=  await data.json();
      console.log(pasedData);
      this.setState({loading:true});
      this.setState({article : pasedData.articles,
        page: this.state.page +1,
        loading: false} )
      }
    }
    handelPrev = async ()=>{
      console.log("previous");
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=99b3794410ca4beab9dda8f714a32ad3&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`
      this.setState({loading:true});
      let data = await fetch(url)
      let pasedData=  await data.json();
      console.log(pasedData);
      this.setState({article : pasedData.articles,
         page: this.state.page - 1,
        loading:false} )
    }
  render() {
    return (
      <div className="container my-3">
        <h2 className="text-center">News-Monkey - Top headlines</h2>
        {this.state.loading && <Spinner/>}
        <div className="row">
            {!this.state.loading && this.state.article?.map((element)=>{
          return <div className="col md-4" key={element.url}>
            <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url} />
          </div>
            })}
            <div className="container d-flex justify-content-between">
            <button type="button" disabled={this.state.page<=1}  onClick={this.handelPrev} className="btn btn-dark">&larr;  Previous</button>
            <button type="button" disabled={this.state.page + 1 >(Math.ceil( this.state.totalResults/this.props.pageSize))} onClick={this.handelNext} className="btn btn-dark">Next &rarr;</button>
            </div>
        </div>
      </div>
    );
  }
}
