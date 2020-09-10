// @ts-check
'use strict'

const CronJob = require('cron').CronJob;
const fetchStats = require('../fetchDailyFeedStats');

// Run this job every day at 11:50 PM

new CronJob("* * * * * * ", function() {
    console.log("Started Job");
    new fetchStats().startCron(function(e, d) {
     console.log("Ended Job", e, d);
        // process.exit(0);
    });
}, null, true);
