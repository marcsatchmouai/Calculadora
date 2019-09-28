const mongoose = require('mongoose')

const resultSchema = new mongoose.Schema(
    {
        value: Number,
    },
    {
        timesstamps: {
            createdAt: "created_at",
            updatedAt: "updated_at"
        }
    }
)

module.exports = mongoose.model("Results", resultSchema)