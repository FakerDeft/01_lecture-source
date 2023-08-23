const HttpStatus = require("http-status");
const MenuService = require("../service/menu-service");
const MenuDTO = require("../dto/menu-dto");

exports.findAllMenus = (req, res, next) => {
  const menus = MenuService.findAllMenus();

  res.status(HttpStatus.OK).send({
    status: HttpStatus.OK,
    message: "OK",
    results: menus,
  });
};

exports.findMenuByMenuCode = (req, res, next) => {
  //   console.log(req.params.menuCode);
  const menu = MenuService.findMenuByMenuCode(req.params.menuCode);

  if (menu && menu.length > 0) {
    res.status(HttpStatus.OK).send({
      status: HttpStatus.OK,
      message: "OK",
      results: menu,
    });
  }

  if (menu && menu.length === 0) {
    res.status(HttpStatus.NOT_FOUND).send({
      status: HttpStatus.NOT_FOUND, // 404
      message: "NOT FOUND",
      code: -999999,
      results: [],
      links: [
        {
          rel: "menuRegist",
          method: "POST",
          href: "https://api.ohgiraffers.com/api/v1/menus",
        },
      ],
    });
  }
};

exports.registMenu = (res, req, next) => {
  const result = MenuService.registMenu(new MenuDTO(req.body));

  if (result) {
    res.status(HttpStatus.CREATED).send({
      status: HttpStatus.CREATED, // 201
      message: "CREATED",
      results: {
        menuCode: result.menuCode,
        menuName: result.menuName,
      },
      contentLocation: `/menus/${result.menuCode}`,
    });
  } else {
    // 실패 시 응답 내용
    res.status(HttpStatus.BAD_REQUEST).send({
      status: HttpStatus.BAD_REQUEST, // 400
      message: "BAD REQUEST",
      code: -888888,
      results: [],
      links: [
        {
          rel: "menuRegist",
          method: "POST",
          href: "https://api.ohgiraffers.com/api/v1/menus",
        },
      ],
    });
  }
};
