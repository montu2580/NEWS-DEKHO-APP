import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export default function News(props) {
  // ek articles naam se variable bnaya or artical ko usme daal diya or ab article ko acces kr skte h (articles) krke
  // articles = [
  //     {
  //         "source": { "id": "news24", "name": "News24" },
  //         "author": "Sibusiso Mjikeliso",
  //         "title": "Cricket SA wants to 'get to the bottom' of Nkwe resignation concerns, says CEO | Sport",
  //         "description": "Acting Cricket South Africa CEO Pholetsi Moseki says the board is concerned about the issues former Proteas assistant coach Enoch Nkwe raised in his resignation.",
  //         "url": "https://www.news24.com/sport/Cricket/Proteas/cricket-sa-wants-to-get-to-the-bottom-of-nkwe-resignation-concerns-says-ceo-20210826",
  //         "urlToImage": "https://cdn.24.co.za/files/Cms/General/d/10743/97d776dc91734e98906c0e1b7f3b1afa.jpg",
  //         "publishedAt": "2021-08-26T11:40:16+00:00",
  //         "content": "<ul><li>Cricket South Africa has committed to \"getting to the bottom\" of Enoch Nkwe's sudden resignation as Proteas assistant coach. </li><li>Nkwe voiced concerns with the current culture and working… [+3497 chars]"
  //     },
  //     {
  //         "source": { "id": "abc-news-au", "name": "ABC News (AU)" },
  //         "author": "ABC News",
  //         "title": "England cricket great Ted Dexter dies aged 86",
  //         "description": "The former England captain, nicknamed \"Lord Ted\", is fondly remembered as a giant of the game and one of his country's greatest players.",
  //         "url": "http://www.abc.net.au/news/2021-08-26/england-cricket-great-ted-dexter-dies-aged-86/100411276",
  //         "urlToImage": "https://live-production.wcms.abc-cdn.net.au/1006c7ecf34ec0935eef2aade5017711?impolicy=wcms_crop_resize&cropH=2815&cropW=5004&xPos=0&yPos=223&width=862&height=485",
  //         "publishedAt": "2021-08-26T09:07:52Z",
  //         "content": "Former England captain Ted Dexter has died aged 86 following a recent illness.\r\n<ul><li>Dexter played 62 Tests for England and was captain on 30 occasions</li><li>He was inducted into the ICC Hall of… [+1746 chars]"
  //     },
  //     {
  //         "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
  //         "author": null,
  //         "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
  //         "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
  //         "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
  //         "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
  //         "publishedAt": "2020-04-27T11:41:47Z",
  //         "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
  //     },
  //     {
  //         "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
  //         "author": null,
  //         "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
  //         "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
  //         "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
  //         "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
  //         "publishedAt": "2020-03-30T15:26:05Z",
  //         "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
  //     }
  // ]

  // FOR CAPITALIZEFIRSTLETTER

  const [articles, setarticles] = useState([]);
  const [loading, setLoding] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=e8d0a0678987496491042f283cfe63f2&page=${page}&pageSize=${props.pageSize}`;
    setLoding(true);
    props.setProgress(50);

    let data = await fetch(url); //promise
    let parsedData = await data.json();
    // console.log(parsedData);
    props.setProgress(75);
    setarticles(parsedData?.articles);
    setTotalResults(parsedData?.totalResults);
    setLoding(false);

    props.setProgress(100);
  };

  useEffect(() => {
    updateNews();
    document.title = `${capitalizeFirstLetter(props.category)}-News-Dekhoo`;
    // eslint-disable-next-line
  }, []);

  // const handlePrevClick = async () => {
  //   // console.log("Privious");
  //   setPage(page - 1);
  //   updateNews();
  // };

  // const handleNextClick = async () => {
  //   // console.log("Next");
  //   setPage(page + 1);
  //   updateNews();
  // };

  const fetchMoreData = async () => {
    // yha url m menualy {page+1} kiya fir setPage{page+1} kkya bcz scroll krne per fetch data aate smy consloe m error aa rha tha ..
    let url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=e8d0a0678987496491042f283cfe63f2&page=${
      page + 1
    }&pageSize=${props.pageSize}`;
    setPage(page + 1);
    let data = await fetch(url); //promise
    let parsedData = await data.json();
    // console.log(parsedData);
    setarticles(articles?.concat(parsedData?.articles));
    setTotalResults(parsedData.totalResults);
  };

  return (
    <div className="flex justify-center bg-white">
      <div className="container ">
        <h1
          className="heading px-4 pt-40 pb-6 text-3xl font-bold md:hover:animate-bounce drop-shadow-lg text-center md:pt-[150px] lg:pt-28 "
          style={{ textShadow: "1px 2px 4px red" }}
        >
          {" "}
          News-Dekhoo🗞️📰→Top {capitalizeFirstLetter(
            props.category
          )} Headlines{" "}
        </h1>
        <hr className="pb-4  flex justify-center" />
        {/* loading && <Spinner/>->its mean ager loading true hoga tb aap is spinner ko dikahe wrna na dikahe  */}
        {/* -->hta rhe h ise bcz hum infiniteScroll bar lga rhe h */}
        <div className="flex justify-center">{loading && <Spinner />}</div>

        <InfiniteScroll
          dataLength={articles?.length}
          next={fetchMoreData}
          hasMore={articles?.length !== totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row flex flex-wrap justify-center  ">
              {/* smj nhi aaya */}
              {/* jb aap .map use krte ho or element ko ittrate krte ho tb hr ek element ko ek uniqe key deni padthi h   */}

              {/* {articles.map((element) => { console.log(element);})} */}
              {articles.map((element) => {
                // key yha di bcz hum ek div return kr rhe h
                return (
                  <div
                    className="m-8 bg-gray-200 rounded-lg border-2 border-b-gray-600 mx-8 shadow-lg shadow-black hover:scale-105 duration-300 relative"
                    key={element.url}
                  >
                    <NewsItem
                      title={element.title ? element.title.slice(0, 45) : ""}
                      description={
                        element.description
                          ? element.description.slice(0, 88)
                          : ""
                      }
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </div>
    </div>
  );
}

News.defaultProps = {
  country: "in",
  pageSize: 9,
  category: "general",
};

News.propTypos = {
  // static PropTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};
