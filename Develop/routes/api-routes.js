const router = require("express").Router();
const db = require("../models");

router.get("/api/workouts", (req, res) => {
    db.Workout.find({}).then(data => {
        res.json(data);
    }).catch(err => {
        res.status(400).json(err);
    });
});

router.post("/api/workouts", ({body}, res) => {
    db.Workout.create({body}).then(data => {
        res.json(data);
    }).catch(err => {
        res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", (req, res) => {
    workoutId = req.params.id; 
    db.update(workoutId, {$push: {exercise: req.body}}).then(data => {
        res.json(data);
    }).catch( err => {
        res.status(400),json(err);
    }); 
}); 

router.get("/api/workouts/range", ({body}, res) =>{ 
    db.find({}).then(range => {
        res.json(data => {
            res.json(data);
        }).catch(err => {
            res.status(400).json(err);
        });
    });
});

module.exports = router; 