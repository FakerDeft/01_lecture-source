const express = require("express");
const router = express.Router();
const MenuController = require("../controllers/menu-controller");

// /menu
router.get("/", MenuController.getMenus);
// /menu/1
router.get("/:menuCode", MenuController.getMenu);

router.post("/", MenuController.registMenu);

router.put("/", MenuController.modifyMenu);

router.delete("/", MenuController.removeMenu);

module.exports = router;
