import React, { useState, useEffect } from 'react'
import request from '../../utils/request';
import Moment from 'moment'

function News({setNewsData, newsData}) {
let [currentUserLocal, setCurrentUserLocal] = useState({})
  useEffect(() => {
    setCurrentUserLocal(JSON.parse(localStorage.getItem('currentUser')))
  }, [])

  let user = currentUserLocal;


  return(<>
    <div className="col-md-9 market-place-right">
       <div className="row">
          <div className="col-md-12">
             <h2><b>TOP NEWS STORIES</b></h2>
          </div>
          {
           newsData.map((news,index) =>{
             return(<div className="col-md-4" key={index}>
             <div className="thumbnail">
             <a  onClick={()=>{window.open(`${news.news_link}`, "_blank")}}>
             <h3>{news.news_title}</h3>
             <span><span><b>{Moment(news.news_publish_date_time).format('MMMM Do YYYY, h:mm:ss a')}</b></span> </span>
             <p>{news.news_description && news.news_description.slice(0, 100)+'.........'}</p>
             <div className="sawtooth-bg"><span> <img src="/static/images/top.jpg" /></span></div>
             </a>
             <a  onClick={()=>{window.open(`/countReport?newsId=${news.news_id}`, "_blank")}}>Report</a>
             </div>
             </div>)
           })
          }
       </div>
    </div>
</>)
}

export default News
