module.exports = {
  baseUrl: "http://127.0.0.1:3210",
  version: 'alpha_dev_0.1',
  env:"Development",
  webport: 3250,
  jwtToken: {
  secret : 'fe1a1915a379f3be5394b64d14794932-1506868106675',
  expire : '1d'
},
mysql: {
  host: "localhost",
  user: "root",
  password: "root",
  database: "NewsFeed",
  port: 3306
},
agency:[
  "Hindustan Times" ,"The Hindu"
],
category:["Entertainment", "Sports", "Education", "Business"]
}
