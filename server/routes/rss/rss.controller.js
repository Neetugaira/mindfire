const con = require('../../mysql/connection');
const config = require('../../config/config');
var mysql = require('mysql');
let Feed = require('rss-to-json');
let count = 0 ;
let category = {
  "Business":1,
  "Entertainment":2,
  "Sports":3,
  "Education":4,
  "Life":5
}
let agency = {
  "TimesofIndia":1,
  "Hindu":2,
}



// Get rss Feed
exports.getRssFeed = async(req, res) =>{
  try {
    // for times of india
    // entertainment
    Feed.load('https://www.hindustantimes.com/rss/entertainment/rssfeed.xml', async function (err, rss) {
      for (item of rss.items) {
            let insertFeedQuery = 'INSERT ignore INTO `news` ( `news_title`, `news_description`, `news_publish_date_time`, `news_link`, `click_count`, `category_id`, `agency_id`) '
            insertFeedQuery += ` VALUES ("${item.title}","${item.description}",${item.created},"${item.link}",${count},${category.Entertainment},${agency.TimesofIndia});`
            var insertFeedData = await con.query(insertFeedQuery)
      }
    })
   // sports
   Feed.load('https://www.hindustantimes.com/rss/sports/rssfeed.xml', async function (err, rss) {
      for (item of rss.items) {
           let insertFeedQuery = 'INSERT ignore INTO `news` ( `news_title`, `news_description`, `news_publish_date_time`, `news_link`, `click_count`, `category_id`, `agency_id`) '
           insertFeedQuery += ` VALUES ("${item.title}","${item.description}",${item.created},"${item.link}",${count},${category.Sports},${agency.TimesofIndia});`
           var insertFeedData = await con.query(insertFeedQuery)
      }
   })
   //Education
    Feed.load('https://www.hindustantimes.com/rss/education/rssfeed.xml', async function (err, rss) {
      for (item of rss.items) {
           let insertFeedQuery = 'INSERT ignore INTO `news` ( `news_title`, `news_description`, `news_publish_date_time`, `news_link`, `click_count`, `category_id`, `agency_id`) '
           insertFeedQuery += ` VALUES ("${item.title}","${item.description}",${item.created},"${item.link}",${count},${category.Education},${agency.TimesofIndia});`
           var insertFeedData = await con.query(insertFeedQuery)
      }
   })
   //bussiness
    Feed.load('https://www.hindustantimes.com/rss/business/rssfeed.xml', async function (err, rss) {
      for (item of rss.items) {
           let insertFeedQuery = 'INSERT ignore INTO `news` ( `news_title`, `news_description`, `news_publish_date_time`, `news_link`, `click_count`, `category_id`, `agency_id`) '
           insertFeedQuery += ` VALUES ("${item.title}","${item.description}",${item.created},"${item.link}",${count},${category.Business},${agency.TimesofIndia});`
           var insertFeedData = await con.query(insertFeedQuery)
      }
   })


   // for Hindu times

   Feed.load('https://www.thehindu.com/entertainment/feeder/default.rss', async function (err, rss) {
      for (item of rss.items) {
           let insertFeedQuery = 'INSERT ignore INTO `news` ( `news_title`, `news_description`, `news_publish_date_time`, `news_link`, `click_count`, `category_id`, `agency_id`) '
           insertFeedQuery += ` VALUES ("${item.title}","${item.description}",${item.created},"${item.link}",${count},${category.Entertainment},${agency.Hindu});`
           var insertFeedData = await con.query(insertFeedQuery)
      }
   })
  // sports
  Feed.load('https://www.thehindu.com/sport/feeder/default.rss', async function (err, rss) {
      for (item of rss.items) {
          let insertFeedQuery = 'INSERT ignore INTO `news` ( `news_title`, `news_description`, `news_publish_date_time`, `news_link`, `click_count`, `category_id`, `agency_id`) '
          insertFeedQuery += ` VALUES ("${item.title}","${item.description}",${item.created},"${item.link}",${count},${category.Sports},${agency.Hindu});`
          var insertFeedData = await con.query(insertFeedQuery)
      }
  })
  //life and style
   Feed.load('https://www.thehindu.com/life-and-style/luxury/feeder/default.rss', async function (err, rss) {
      for (item of rss.items) {
          let insertFeedQuery = 'INSERT ignore INTO `news` ( `news_title`, `news_description`, `news_publish_date_time`, `news_link`, `click_count`, `category_id`, `agency_id`) '
          insertFeedQuery += ` VALUES ("${item.title}","${item.description}",${item.created},"${item.link}",${count},${category.Life},${agency.Hindu});`
          var insertFeedData = await con.query(insertFeedQuery)
      }
  })
  //bussiness
   Feed.load('https://www.thehindu.com/business/feeder/default.rss', async function (err, rss) {
      for (item of rss.items) {
          let insertFeedQuery = 'INSERT ignore INTO `news` ( `news_title`, `news_description`, `news_publish_date_time`, `news_link`, `click_count`, `category_id`, `agency_id`) '
          insertFeedQuery += ` VALUES ("${item.title}","${item.description}",${item.created},"${item.link}",${count},${category.Business},${agency.Hindu});`
          var insertFeedData = await con.query(insertFeedQuery)
      }
  })
  }catch(e){
   console.log('>>>e', e)
   return res.send({ success: false, message: "SOMETHING WENT WRONG" });
  }
}
