"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var db_1 = require("../models/db");
var fs = require("fs");
var diaryEntry_1 = require("../models/diaryEntry");
(0, db_1.default)();
fs.readFile('./sampleEntries.json', 'utf8', function (err, data) {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    var jsonData = JSON.parse(data);
    diaryEntry_1.default.insertMany(jsonData)
        .then(function () {
        console.log('DiaryEntries seeded successfully✨');
        mongoose_1.default.connection.close();
    })
        .catch(function (error) {
        console.error('Error seeding DiaryEntries:', error);
        mongoose_1.default.connection.close();
    });
});
