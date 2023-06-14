const { Schema, model } = require('mongoose');
const user = model('user', userSchema);


const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            trim: true,
            required: 'Username is required',
        },

        email: {
            type: String,
            unique: true,
            required: 'Username is required',
            // match: [/.+@.+/..+/],
        },

        thought: [
            {
                type: Schema.Types.ObjectId,
                ref: 'thought',
            },
        ],

        friends: [
            {
                type: Schema.Type.ObjectId,
                ref: 'user',
            },
        ],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

userSchema.virtuals('friendCount').get(function () {
    return this.friends.length;
});

module.exports = user; 