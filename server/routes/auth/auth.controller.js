const con = require('../../mysql/connection');
const config = require('../../config/config');
var mysql = require('mysql');



//login
exports.login = async (req, res) => {
  try {
    var email = req.body.email;
    var password = req.body.password;
    if (!email) {
      res.send({ success: false, message: "Please enter your email address." })
    } else if (!password) {
      res.send({ success: false, message: "Please enter your password." })
    }
    var getUser = mysql.format('Select * from user WHERE email="' + email+'"');
    var userData = await con.query(getUser)
    if(userData.data.length){
      res.send({ success: true, message: "Successfully login",user: userData.data[0] })
    }else{
      res.send({ success: false, message: "User not present"})
    }
  }
  catch (e) {
    return res.send({ success: false, message: "SOMETHING WENT WRONG" });
  }

}

// get filters
exports.getFilterData = async(req,res) =>{
try{
  var agencyId = req.query.agency_id?req.query.agency_id:1;
  var getFiltersQuery = mysql.format(`select category.category_id,category.category_title from category left join agency_feed on agency_feed.category_id=category.category_id where agency_feed.agency_id=${agencyId}`)
  var getFilterData = await con.query(getFiltersQuery)
  console.log('>>>>>>>>', getFilterData)
  if(getFilterData.success){
    res.send({ success: true, filters: getFilterData.data})
  }
}catch(e){
  return res.send({ success: false, message: "SOMETHING WENT WRONG" });
}

}

//get news
exports.getNewsData = async(req,res) =>{
try{
  console.log('&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&', req.query)
  var catgoryId = req.query.category_id;
  var agencyId = req.query.agency_id?req.query.agency_id:1;
  var search = req.query.search;
  var getNewsQuery;
  if(search){
    getNewsQuery = mysql.format(`Select * from news where news_title like "${search}%" or news_description like "${search}%" AND agency_id=${agencyId} ORDER BY news_publish_date_time DESC`)
  }else{
    if(catgoryId){
      getNewsQuery = mysql.format(`select * from news where category_id=${catgoryId} AND agency_id=${agencyId} ORDER BY news_publish_date_time DESC`)
    }else {
      getNewsQuery = mysql.format(`select * from news where agency_id=${agencyId} ORDER BY news_publish_date_time DESC`)
    }
  }
  var getNews = await con.query(getNewsQuery)
  if(getNews.success){
    res.send({ success: true, news: getNews.data})
  }
}catch(e){
  return res.send({ success: false, message: "SOMETHING WENT WRONG" });
}
}

// get Agency

exports.getAgencyData = async(req,res) =>{
try{
  console.log('&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&')
  console.log(">>>>>", req.query)
  console.log(">>>>>", req.params)
  console.log(">>>>>", req.body)
  var agencyId = req.body.agency_id?req.body.agency_id:1;
  var getAgencyQuery = mysql.format(`select * from agency where agency_id=${agencyId}`)
  var getAgency = await con.query(getAgencyQuery)
  if(getAgency.success){
    res.send({ success: true, agency: getAgency.data})
  }
}catch(e){
  // console.log('>>>e', e)
  return res.send({ success: false, message: "SOMETHING WENT WRONG" });
}
}

//count  for the news report
exports.getCountData = async(req, res) =>{
  try {
    var news_id = req.body.data.news_id;
    var getNewsQuery = mysql.format(`select * from news where news_id=${news_id}`)
    var getNews = await con.query(getNewsQuery)
    if(getNews.data.length){
      var updateDataQuery = mysql.format(`Update news set click_count=click_count+1 where news_id=${news_id}`);
      var updateAgency = await con.query(updateDataQuery)
      var getAgencyQuery = mysql.format(`select news_title,click_count,agency_name from news left join agency on news.agency_id = agency.agency_id where news.news_id=${news_id}`)
      var getAgency = await con.query(getAgencyQuery)
      if(getAgency.success){
        res.send({ success: true, count: getAgency.data})
      }
    }else{
      res.send({ success: false, message:"News id not present !!!!"})
    }

  }catch(e){
    console.log('>>>>f', e)
    return res.send({ success: false, message: "SOMETHING WENT WRONG" });
  }
}
