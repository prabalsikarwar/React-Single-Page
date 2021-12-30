import React from "react"

const Card = ({Data}) => {
    return(
        <>
        <section className="main-card--cointainer">
        {Data.map((curElem) =>{
            const { id, thumbnail_image, event_name, event_date, views, likes, shares } = curElem;
            return(
                <>
                <div className="card-container" key={id}>
                <div className="card">
                  <div className="card-body">
                    <span className="card-number card-circle subtle"> {id} </span>
                    <span className="card-name subtle">{event_name}</span>
                    <h2 className="card-date">{event_date}</h2>
                    <span className="card-view subtle">Views:
                    {views}</span>
                      <div className="card-likes">Likes:{likes}</div>
                  </div>
                  <img src={thumbnail_image} alt="images" className="card-media"/>
                  <span className="card-share subtle">Shares:{shares}</span>
                  <span className="card-detail subtle">Detail</span>
                </div>
              </div>
              </>
            )
        })}
        </section>
        </>
    );
};
export default Card;