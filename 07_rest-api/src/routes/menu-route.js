const express = require("express");
const router = express.Router();
const MenuController = require("../controller/menu-controller");

router.get("/", MenuController.findAllMenus);
router.get("/:menuCode");
router.post("/", MenuController.registMenu);
router.put("/");
router.delete("/");

module.exports = router;
