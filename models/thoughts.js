const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ReactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },

        reactionBody: {
            type: String,
            require: true,
            maxlength: 300,
        },

        username: {
            type: String,
            required: true,
        },

        createdAt: {
            type: Date,
            default: Date.now,
            get: (timestamp) => dateFormat(timestamp),
        },
    },
    {
        toJSON: {
            getters: true,
        },
        id: false,
    },
);

const thought = model('thought', ThoughtSchema);

const ThoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            require: 'Thought is required',
            minlength: 1,
            maxlength: 300,
        },

        createdAt: {
            type: Date,
            default: Date.now,
            get: (timestamp) => dateFormat(timestamp),
        },

        username: {
            type: String,
            required: true,
        },

        reactions: [ReactionSchema],
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
        id: false,
    }
);

ThoughtSchema.virtual('rectionCount').get(function () {
    return this.reaction.length;
});

module.exports = thought;