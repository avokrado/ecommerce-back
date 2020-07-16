const express = require("express");
const router = express.Router();
const {
  create,
  productById,
  read,
  remove,
  update,
  list,
  listRelated,
  listCategories,
  listBySearch,
  photo,
  listSearch,
} = require("../controllers/product");
const { userById } = require("../controllers/user");
const { requireSignIn, isAuth, isAdmin } = require("../controllers/auth");

router.post("/product/create/:userId", requireSignIn, isAuth, isAdmin, create);
router.post("/products/by/search", listBySearch);

router.get("/product/:productId", read);
router.get("/products", list);
router.get("/products/search", listSearch);
router.get("/products/related/:productId", listRelated);
router.get("/products/categories", listCategories);
router.get("/product/photo/:productId", photo);

router.delete(
  "/product/:productId/:userId",
  requireSignIn,
  isAuth,
  isAdmin,
  remove
);
router.put(
  "/product/:productId/:userId",
  requireSignIn,
  isAuth,
  isAdmin,
  update
);

router.param("userId", userById);
router.param("productId", productById);
module.exports = router;
