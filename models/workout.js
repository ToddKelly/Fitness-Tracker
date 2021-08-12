//requires mongoose
const mongoose = require("mongoose");
//creates the schema 
const Schema = mongoose.Schema;

//creates the workout schema 
const workoutSchema = new Schema({
  

    day: {
      type: Date,
      default: () => new Date(),
    },
    exercises: [
      {
        type: {
          type: String,
          required: 'Exercise type',
        },
        name:{
          type:String,
          require: 'Exercise name',
        }, 
        duration: {
          type: Number,
          required: 'Enter duration ',
        },
        weight: {
          type: Number,
        },
        reps: {
          type: Number,
        },
        sets: {
          type: Number,
        },
        distance: {
          type: Number,
        },
      },
    ],
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;