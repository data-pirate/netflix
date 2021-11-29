const verify = require("../middlewares/verifyTokens");
const router = require("express").Router();
const List = require("../models/List");

/**
 * get list
 */

router.get("/", verify, async (req, res) => {
  const typeQuery = req.query.type;
  const genreQuery = req.query.type;
  let lists = [];
  try {
    if (typeQuery) {
		if(genreQuery){
			lists = await List.aggregate([
				{$sample: {$size: 10}},
				{$match: {type: typeQuery, genre: genreQuery}}
			])
		}
		else{
			lists = await List.aggregate([
				{$sample: {$size: 10}},
				{$match: {type: typeQuery}}
			])
		}
    }else{
		lists = await List.aggregate([{$sample: {$size: 10}}]);
	}
	res.status(200).json(lists);
  } catch (err) {
    res
      .status(500)
      .json({ message: `get list error on server rotue / \n ${err}` });
  }
});

/**
 * create a new list
 */

router.post("/new", verify, async (req, res) => {
  if (req.data.isAdmin) {
    try {
      const newList = new List(req.body);
      res.status(200).json(newList);
    } catch (err) {
      res
        .status(500)
        .json({ message: `get list error on server rotue /new \n ${err}` });
    }
  } else {
    res.status(403).json({ message: "forbidden Not authenticated" });
  }
});

/**
 * delete a list
 */

router.delete("/delete/:id", verify, async (req, res) => {
  if (req.data.isAdmin) {
    await List.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "List deleted successfully" });
  } else {
    res.status(403).json({ message: "forbidden Not authenticated" });
  }
});

/**
 * update a list
 */

router.put("/update/:id", verify, async (req, res) => {
  if (req.data.isAdmin) {
    const updated = await List.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updated);
  } else {
    res.status(403).json({ message: "forbidden Not authenticated" });
  }
});

module.exports = router;
