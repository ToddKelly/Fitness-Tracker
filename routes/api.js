const router = require('express').Router();
const Workout = require('../models/workout.js')

router.get("/api/workouts", (req, res) => {
    Workout.aggregate([
        {
            $addFields: {
                totalDuration:{
                    $sum:'$exercises.duration'
                }
            }
        }
    ])
    .then( (Workoutdb) => {
        res.json(Workoutdb)
    })
    .catch((err) => {
        res.json(err)
    })

});

//find by id and update exercises 
router.put("/api/workouts/:id", (req, res) =>{
    Workout.findByIdAndUpdate(
        req.params.id,
        {$push:{exercises: req.body}},
        {new: true, runValidators: true}
    )
    .then((Workoutdb) => {
    
        res.json(Workoutdb)
    })
    .catch((err) => {
        res.json(err)
    })

});

//create and post workout 
router.post("/api/workouts", (req, res) => {
    Workout.create ({})
    .then((Workoutdb) => {
        res.json(Workoutdb)
    })
    .catch((err) => {
        res.json(err)
    })
}
)

//Workout stats and adds all the feilds to the chart.js and gives the totals over 9 days 
router.get("/api/workouts/range", (req, res) => {
    Workout.aggregate([
        {
            $addFields: {
                totalDuration:{
                    $sum:'$exercises.duration'
                }
            }
        }
    ])
    .then( (Workoutdb) => {
        res.json(Workoutdb)
    })
    .catch((err) => {
        res.json(err)
    })

});

module.exports = router;