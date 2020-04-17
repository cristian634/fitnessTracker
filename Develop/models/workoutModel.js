const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
    {
        day: {
            type: Date,
            default: () => new Date()
        },
        exercise: [
            {
                type: {
                    type: String,
                    required: "Workout type is required!",
                    trim: true
                },
                name: {
                    type: String,
                    required: "Workout name is required!",
                    trim: true
                },
                duration: {
                    type: Number
                },
                weight: {
                    type: Number
                },
                reps: {
                    type: Number
                },
                sets: {
                    type: Number
                }
            }

        ]
    }
);


const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;