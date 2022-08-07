const { Router } = require("express");
 const controller = require('./controller');


const router = Router();

router.get("/", controller.getBudget);
router.get("/:id", controller.getPeopleById);
router.post("/", controller.addPeople);
router.put("/:id", controller.updatePeople);
router.delete("/:id", controller.removePeople);


module.exports = router;