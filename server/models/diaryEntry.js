"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var diaryEntrySchema = new mongoose_1.Schema({
    id: {
        type: String,
        required: false,
    },
    title: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: false,
    },
    imageUrl: {
        type: String,
        required: false,
    },
    tags: {
        type: [String],
        validate: {
            validator: function (v) { return v.every(function (tag) { return typeof tag === 'string'; }); },
            message: 'Tags must be strings.',
        },
    },
}, {
    timestamps: {
        currentTime: function () { return new Date(Date.now() + 60 * 60 * 1000); },
    },
});
var DiaryEntry = (0, mongoose_1.model)('Diary', diaryEntrySchema);
exports.default = DiaryEntry;
