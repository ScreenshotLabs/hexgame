"use strict";
exports.id = 547;
exports.ids = [547];
exports.modules = {

/***/ 4501:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Al": () => (/* binding */ Signup),
/* harmony export */   "GR": () => (/* binding */ ChangePassword),
/* harmony export */   "m3": () => (/* binding */ Login),
/* harmony export */   "oP": () => (/* binding */ ForgotPassword),
/* harmony export */   "tq": () => (/* binding */ ResetPassword)
/* harmony export */ });
/* unused harmony exports email, password */
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9926);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([zod__WEBPACK_IMPORTED_MODULE_0__]);
zod__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const email = zod__WEBPACK_IMPORTED_MODULE_0__.z.string().email().transform((str)=>str.toLowerCase().trim());
const password = zod__WEBPACK_IMPORTED_MODULE_0__.z.string().min(10).max(100).transform((str)=>str.trim());
const Signup = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
    email,
    password
});
const Login = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
    email,
    password: zod__WEBPACK_IMPORTED_MODULE_0__.z.string()
});
const ForgotPassword = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
    email
});
const ResetPassword = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
    password: password,
    passwordConfirmation: password,
    token: zod__WEBPACK_IMPORTED_MODULE_0__.z.string()
}).refine((data)=>data.password === data.passwordConfirmation, {
    message: "Passwords don't match",
    path: [
        "passwordConfirmation"
    ]
});
const ChangePassword = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
    currentPassword: zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),
    newPassword: password
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2450:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ forgotPasswordMailer)
/* harmony export */ });
/* TODO - You need to add a mailer integration in `integrations/` and import here.
 *
 * The integration file can be very simple. Instantiate the email client
 * and then export it. That way you can import here and anywhere else
 * and use it straight away.
 */ function forgotPasswordMailer({ to , token  }) {
    // In production, set APP_ORIGIN to your production server origin
    const origin = process.env.APP_ORIGIN || process.env.BLITZ_DEV_SERVER_ORIGIN;
    const resetUrl = `${origin}/auth/reset-password?token=${token}`;
    const msg = {
        from: "TODO@example.com",
        to,
        subject: "Your Password Reset Instructions",
        html: `
      <h1>Reset Your Password</h1>
      <h3>NOTE: You must set up a production email integration in mailers/forgotPasswordMailer.ts</h3>

      <a href="${resetUrl}">
        Click here to set a new password
      </a>
    `
    };
    return {
        async send () {
            if (true) {
                // TODO - send the production email, like this:
                // await postmark.sendEmail(msg)
                throw new Error("No production email implementation in mailers/forgotPasswordMailer");
            } else {}
        }
    };
}


/***/ }),

/***/ 9820:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _blitzjs_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7897);
/* harmony import */ var _blitzjs_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_blitzjs_auth__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _blitzjs_rpc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5481);
/* harmony import */ var _blitzjs_rpc__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_blitzjs_rpc__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4609);
/* harmony import */ var mailers_forgotPasswordMailer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2450);
/* harmony import */ var _validations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4501);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_validations__WEBPACK_IMPORTED_MODULE_3__]);
_validations__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const RESET_PASSWORD_TOKEN_EXPIRATION_IN_HOURS = 4;
const __internal_rpcHandler = _blitzjs_rpc__WEBPACK_IMPORTED_MODULE_1__.resolver.pipe(_blitzjs_rpc__WEBPACK_IMPORTED_MODULE_1__.resolver.zod(_validations__WEBPACK_IMPORTED_MODULE_3__/* .ForgotPassword */ .oP), async ({ email  })=>{
    // 1. Get the user
    const user = await db__WEBPACK_IMPORTED_MODULE_2__["default"].user.findFirst({
        where: {
            email: email.toLowerCase()
        }
    });
    // 2. Generate the token and expiration date.
    const token = (0,_blitzjs_auth__WEBPACK_IMPORTED_MODULE_0__.generateToken)();
    const hashedToken = (0,_blitzjs_auth__WEBPACK_IMPORTED_MODULE_0__.hash256)(token);
    const expiresAt = new Date();
    expiresAt.setHours(expiresAt.getHours() + RESET_PASSWORD_TOKEN_EXPIRATION_IN_HOURS);
    // 3. If user with this email was found
    if (user) {
        // 4. Delete any existing password reset tokens
        await db__WEBPACK_IMPORTED_MODULE_2__["default"].token.deleteMany({
            where: {
                type: "RESET_PASSWORD",
                userId: user.id
            }
        });
        // 5. Save this new token in the database.
        await db__WEBPACK_IMPORTED_MODULE_2__["default"].token.create({
            data: {
                user: {
                    connect: {
                        id: user.id
                    }
                },
                type: "RESET_PASSWORD",
                expiresAt,
                hashedToken,
                sentTo: user.email
            }
        });
        // 6. Send the email
        await (0,mailers_forgotPasswordMailer__WEBPACK_IMPORTED_MODULE_4__/* .forgotPasswordMailer */ .f)({
            to: user.email,
            token
        }).send();
    } else {
        // 7. If no user found wait the same time so attackers can't tell the difference
        await new Promise((resolve)=>setTimeout(resolve, 750));
    }
    // 8. Return the same result whether a password reset email was sent or not
    return;
});
__internal_rpcHandler._resolverName = "forgotPassword";
__internal_rpcHandler._resolverType = "mutation";
__internal_rpcHandler._routePath = "/api/rpc/forgotPassword";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__internal_rpcHandler);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;