import React, { useState, useEffect } from 'react'
import request from '../../utils/request';

function Filters({filterData, parameters, setParameters}) {
  let [letSeeParameters , setLetSeeParameters] = useState('')
  return(<>
    <div className="col-md-2 market-left-inner">
       <h2><a href="/dashboard/myProducts">Category</a></h2>
       <div className="accordionWrapper p-0">
          <div className="accordionItem open">
             <div className="accordionItemContent">
                {letSeeParameters?(<span className="tag">{letSeeParameters}<a onClick={() => {setParameters('');setLetSeeParameters('')}}>×</a></span>):(<span className="tag"></span>)}
                <ul>
                {
                   filterData.map((filter,index) =>{
                     return(<><li key={index} onClick={() => {setParameters(filter.category_id);setLetSeeParameters(filter.category_title)}}>{filter.category_title}</li></>)
                   })
                 }
                </ul>
             </div>
          </div>
       </div>
    </div>
    </>)
}

export default Filters
