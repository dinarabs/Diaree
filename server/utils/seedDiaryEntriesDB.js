"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var db_1 = require("../models/db");
var fs = require("fs");
var diaryEntry_1 = require("../models/diaryEntry");
var tag_1 = require("../models/tag"); // Assuming you have a Tag model
(0, db_1.default)();
fs.readFile('./sampleEntries.json', 'utf8', function (err, data) {
    if (err) {
        console.error('Error reading DiaryEntries file:', err);
        return;
    }
    var diaryData = JSON.parse(data);
    diaryEntry_1.default.insertMany(diaryData)
        .then(function () {
        console.log('DiaryEntries seeded successfully✨');
    })
        .catch(function (error) {
        console.error('Error seeding DiaryEntries:', error);
    });
});
fs.readFile('./sampleTags.json', 'utf8', function (err, data) {
    if (err) {
        console.error('Error reading Tags file:', err);
        return;
    }
    var tagData = JSON.parse(data);
    tag_1.default.insertMany(tagData)
        .then(function () {
        console.log('Tags seeded successfully✨');
        mongoose_1.default.connection.close();
    })
        .catch(function (error) {
        console.error('Error seeding Tags:', error);
        mongoose_1.default.connection.close();
    });
});
