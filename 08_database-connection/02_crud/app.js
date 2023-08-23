const MenuController = require("./src/controllers/menu-controller.js");

// MenuController.findAllMenus();

// MenuController.findMenuByMenuCode(2);

MenuController.registNewMenu({
  menuName: "test메뉴",
  menuPrice: 115000,
  categoryCode: 4,
  orderableStatus: "Y",
});
