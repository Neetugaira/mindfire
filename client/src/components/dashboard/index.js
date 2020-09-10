import React, { useState, useEffect } from 'react'
import request from '../../utils/request';
import Header from '../header/Header';
import Search from './search';
import ListFilter from './filter';
import List from './news';
function Dashboard() {
 let[filterData, setFilterData] = useState([])
 let [newsData, setNewsData] = useState([])
 let [parameters, setParameters] = useState('')
 let [agencyData, setAgencyData] = useState({})
 let [searchData , setSearchData] = useState('')
 let [agencyName , setAgencyName] = useState(1)
  useEffect(() =>{
    console.log("setParameters", parameters)
    var  user = JSON.parse(localStorage.getItem('currentUser'))
    user.agency = agencyName
    localStorage.setItem('currentUser', JSON.stringify(user));
    request('GET', `/getAgencyData?agency_id=${agencyName}`).then((respAgency)=>{
       if(respAgency.data.success){
          setAgencyData(respAgency.data.agency)
       }
    })
    request('GET', '/getFilterData').then((resp)=>{
       if(resp.data.success){
          setFilterData(resp.data.filters)
       }
    })
    // poll
    const interval = setInterval(() => {
       console.log('This will run every second!');
       request('GET', `/getNewsData?category_id=${parameters}&agency_id=${agencyName}&search=${searchData}`).then((respNews)=>{
          if(respNews.data.success){
             setNewsData(respNews.data.news)
          }
       })
  }, 1000);
return () => clearInterval(interval);
// poll
},[parameters, searchData, agencyName])

  console.log('>>>>>njmh', )
  return(
    <>
    <div className="d-flex border-bottom supply-bg p-0">
   <div className="container">
      <ul className="my-panel">

         <li onClick={()=>{setAgencyName(1)}} className={agencyName === 1?"active":''}><i className="fa fa-newspaper-o"/>Times of India</li>
         <li onClick={()=>{setAgencyName(2)}} className={agencyName === 2?"active":''}><i className="fa fa-newspaper-o"  />The Hindu</li>
      </ul>
   </div>
</div>
   <div className="container">
      <div className="col-md-12">
         <div className="row">
         <div className="section-filter">
     </div>
            <div className="col-md-6 market-left">
               <h2><b>{agencyName ===1?"THE TIMES OF INDIA":'THE HINDU'}</b></h2>
               <div className="market-form">
                  <Search  searchData={searchData} setSearchData={setSearchData}/>
                 </div>
            </div>
            <div className="col-md-6 text-right pt-4 market-left-deploy"><img src={agencyName === 1?"/static/images/times.jpg":"/static/images/the-hindu.jpeg"} /><img src="/static/images/market-place-dark.svg" /></div>
         </div>
         <div className="row mt-4">
            <ListFilter filterData={filterData} parameters={parameters} setParameters={setParameters}/>
            <List setNewsData={setNewsData} newsData={newsData}/>
         </div>
      </div>
   </div></>)
}

export default Dashboard
