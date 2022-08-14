import React, { useEffect, useState } from "react";
import "../components/showDetails.css";
import { useParams } from "react-router-dom";

function ShowDetails() {
  const { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((res) => res.json())
      .then((respo) => {
        console.log(respo.summary);
        setData(respo);
      });
  }, [id]);

  return (
    <>
      {data ? (
        <>
          <h2 className="show_details_title">{data.name}</h2>

          <div className="show_details">
            {data.image && data.image.medium && <img
              src={data.image.medium}
              alt="show_img"
              className="show_details_img"
            />}
            <article className="show_details_description" dangerouslySetInnerHTML =  {{__html: data.summary}} />
            <div className="show_info">
              <h3>Show Info</h3>
              <p>Network</p>
              <p>Schedule</p>
              <p>status</p>
              <p>Language</p>
              <p>Show Type</p>
            </div>
          </div>
        </>
      ) : (
        <h1>Data not found</h1>
      )}
    </>
  );
}

export default ShowDetails;
