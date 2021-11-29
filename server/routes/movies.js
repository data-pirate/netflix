const router = require("express").Router();
const verify = require("../middlewares/verifyTokens");
const Movie = require("../models/Movie");

router.post("/add", verify, async (req, res) => {
  if (req.data.isAdmin) {
    const newMovie = new Movie(req.body);
    try {
      await newMovie.save();
      res.status(200).json({ message: "movieUploded successfully" });
    } catch (err) {
      res.status(500).json({ message: err });
    }
  } else {
    res.status(403).json({ message: "forbidden You are not authenticated" });
  }
});

/**
 * update movie
 */

router.put("/update/:id", verify, async (req, res) => {
  if (req.data.isAdmin) {
    const movie = await Movie.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(movie);
  } else {
    res.status(403).json({ message: "forbidden You are not authenticated" });
  }
});

/**
 * Delete a movie
 */

router.put("/delete/:id", verify, async (req, res) => {
  if (req.data.isAdmin) {
    await Movie.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Movie deleted Successfully" });
  } else {
    res.status(403).json({ message: "forbidden You are not authenticated" });
  }
});

/**
 * get movie
 * for admin and all the other user
 */

router.get("/:id", verify, async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    res.status(200).json(movie);
  } catch (err) {
    res
      .status(500)
      .json({
        message: `server error for movie ${req.params.id}  error: \n ${err}`,
      });
  }
});

/**
 * get featured movie
 */

router.get("/featured", verify, async (req, res) => {
  try {
    const movie = await Movie.aggregate({ $sample: { $size: 1 } });
    res.status(200).json(movie);
  } catch (err) {
    res
      .status(500)
      .json({ message: `server error for featured movie error: \n ${err}` });
  }
});


/**
 * get all movies
 */

router.get("/all", verify, async (req, res)=>{
	try{
		const movies = await Movie.find();
		res.status(200).json(movies);
	}catch(err){
		res.status(500).json({message: `error gettin all movies: route /all: \n ${err}`})
	}
})

module.exports = router;
