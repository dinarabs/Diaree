"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
// 2. Create a Schema corresponding to the document interface.
var tagSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
});
// 3. Create a Model.
var Tag = mongoose_1.default.model('Tag', tagSchema);
exports.default = Tag;
