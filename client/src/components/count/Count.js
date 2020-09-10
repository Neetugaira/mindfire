import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import request from '../../utils/request';

function Count({}) {
  let [newsId, setNewsId] = useState(
      new URLSearchParams(window.location.search).get("newsId")
  );
  let [countData, setCountData] = useState({})
  useEffect(() => {
    request("post", `/getCountData`, {data:{news_id:newsId}}).then(
      (response) => {
        console.log('>>>response.data',response.data)
        if (response.data.success){
           setCountData(response.data.count[0])
        }
      }
    );
  }, []);
  return (
    <div className="flex-wrapper">
        <div className="db-network_deployed menu-network-deployed">
          <div className="cover">
            <div className="title-box">
              <h2>Reports</h2>
            </div>
          </div>
          <div className="table-section">
            <div className="cover">
              <table className="table table-bordered " cellSpacing={0}>
                <thead>
                  <tr role="row">
                    <th className="text-center">Agency</th>
                    <th className="text-center">Title</th>
                    <th className="text-center"># of click</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-center">{countData.agency_name}</td>
                    <td className="text-center">{countData.news_title}</td>
                    <td className="text-center">{countData.click_count}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
)
}

export default Count;
