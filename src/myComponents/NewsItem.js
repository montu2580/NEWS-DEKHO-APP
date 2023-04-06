
export default function NewsItem(props) {
 
    // this.props object h tho ye enme se pull krke leaahega (yha se paas ho rhe h sab)
    let { title, description, imageUrl, newsUrl, source, date ,author } = props;

    return (
      <div className=" " >
        <div className="card  rounded-lg" style={{ width: "18rem" }}>
        <span className="text-xs  py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-red-600 text-white rounded-full absolute -translate-y-2">{source}</span>
          {/* wo label lgana h yha tailwind se  */}
          <img
            src={
              imageUrl
                ? imageUrl
                : "https://images.indianexpress.com/2022/01/fruits-berries-pexels-1.jpg"
            }
            className="card-img-top rounded-t-md h-48"
            alt="..."
          />

          <div className="card-body h-48 relative ">
            <h5 className="card-title font-bold px-2 ">{title} </h5>
            <p className="card-text pb-6 px-2 text-sm ">{description}</p> 
            <p className="card-text  m-2 w-40 h-12 overflow-hidden absolute bottom-0 left-28"><small className="text-black font-extrabold">By {author ? author : "Unknown"} on <span className=''>{new Date(date).toGMTString()}</span></small></p>

            <a
              // ref="noreferrer"
              href={newsUrl}
              target="_blank"
              className="bg-slate-900 hover:bg-slate-700 text-white font-bold p-2 ml-2 border border-black rounded-md text-xs absolute bottom-0 mb-2 "
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }



