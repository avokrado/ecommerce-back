const express = require("express");
const router = express.Router();
const {
  create,
  read,
  update,
  remove,
  list,
  categoryById,
} = require("../controllers/category");
const { userById } = require("../controllers/user");
const { requireSignIn, isAuth, isAdmin } = require("../controllers/auth");



router.get("/category/:categoryId", read);
router.get("/categories", list);

router.post("/category/create/:userId", requireSignIn, isAuth, isAdmin, create);
router.put(
  "/category/:categoryId/:userId",
  requireSignIn,
  isAuth,
  isAdmin,
  update
);

router.delete(
  "/category/:categoryId/:userId",
  requireSignIn,
  isAuth,
  isAdmin,
  remove
);

router.param("userId", userById);
router.param("categoryId", categoryById);
module.exports = router;
