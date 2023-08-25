const express = require("express");

const ctrl = require("../../controllers/auth");

const { validateBody, authenticate } = require("../../middlewares");

const {
	registerLoginSchema,
	updateSubscriptionSchema,
} = require("../../models/user");

const router = express.Router();

router.post("/register", validateBody(registerLoginSchema), ctrl.register);

router.post("/login", validateBody(registerLoginSchema), ctrl.login);

router.get("/current", authenticate, ctrl.getCurrent);

router.post("/logout", authenticate, ctrl.logout);

router.patch(
	"/:id/subscription",
	authenticate,
	validateBody(updateSubscriptionSchema),
	ctrl.updateSubscription
);

module.exports = router;
