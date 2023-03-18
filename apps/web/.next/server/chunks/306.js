"use strict";
exports.id = 306;
exports.ids = [306];
exports.modules = {

/***/ 8671:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Al": () => (/* binding */ Signup),
/* harmony export */   "m3": () => (/* binding */ Login),
/* harmony export */   "oP": () => (/* binding */ ForgotPassword),
/* harmony export */   "tq": () => (/* binding */ ResetPassword)
/* harmony export */ });
/* unused harmony exports email, password, ChangePassword */
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

/***/ 1479:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ck": () => (/* binding */ FORM_ERROR),
/* harmony export */   "l0": () => (/* binding */ Form)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1144);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var blitz__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4405);
/* harmony import */ var blitz__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(blitz__WEBPACK_IMPORTED_MODULE_4__);





const FORM_ERROR = "FORM_ERROR";
function Form({ children , submitText , schema , initialValues , onSubmit , ...props }) {
    const { 0: formError , 1: setFormError  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(formik__WEBPACK_IMPORTED_MODULE_3__.Formik, {
        initialValues: initialValues || {},
        validate: (0,blitz__WEBPACK_IMPORTED_MODULE_4__.validateZodSchema)(schema),
        onSubmit: async (values, { setErrors  })=>{
            const { FORM_ERROR , ...otherErrors } = await onSubmit(values) || {};
            if (FORM_ERROR) {
                setFormError(FORM_ERROR);
            }
            if (Object.keys(otherErrors).length > 0) {
                setErrors(otherErrors);
            }
        },
        children: ({ handleSubmit , isSubmitting  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                onSubmit: handleSubmit,
                ...props,
                className: "jsx-c6cb5874064892f7" + " " + (props && props.className != null && props.className || "form"),
                children: [
                    children,
                    formError && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        role: "alert",
                        style: {
                            color: "red"
                        },
                        className: "jsx-c6cb5874064892f7",
                        children: formError
                    }),
                    submitText && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        type: "submit",
                        disabled: isSubmitting,
                        className: "jsx-c6cb5874064892f7",
                        children: submitText
                    }),
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                        id: "c6cb5874064892f7",
                        children: ".form>*+*{margin-top:1rem}"
                    })
                ]
            })
    });
}
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Form)));


/***/ }),

/***/ 3367:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ LabeledTextField)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1144);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_3__);




const LabeledTextField = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(({ name , label , outerProps , ...props }, ref)=>{
    const [input] = (0,formik__WEBPACK_IMPORTED_MODULE_3__.useField)(name);
    const { isSubmitting  } = (0,formik__WEBPACK_IMPORTED_MODULE_3__.useFormikContext)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        ...outerProps,
        className: "jsx-c0f6ad2acae3d953" + " " + (outerProps && outerProps.className != null && outerProps.className || ""),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                className: "jsx-c0f6ad2acae3d953",
                children: [
                    label,
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        ...input,
                        disabled: isSubmitting,
                        ...props,
                        ref: ref,
                        className: "jsx-c0f6ad2acae3d953" + " " + (props && props.className != null && props.className || input && input.className != null && input.className || "")
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(formik__WEBPACK_IMPORTED_MODULE_3__.ErrorMessage, {
                name: name,
                children: (msg)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        role: "alert",
                        style: {
                            color: "red"
                        },
                        className: "jsx-c0f6ad2acae3d953",
                        children: msg
                    })
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "c0f6ad2acae3d953",
                children: "label.jsx-c0f6ad2acae3d953{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:start;-webkit-align-items:start;-moz-box-align:start;-ms-flex-align:start;align-items:start;font-size:1rem}input.jsx-c0f6ad2acae3d953{font-size:1rem;padding:.25rem .5rem;-webkit-border-radius:3px;-moz-border-radius:3px;border-radius:3px;border:1px solid purple;-webkit-appearance:none;-moz-appearance:none;-ms-appearance:none;appearance:none;margin-top:.5rem}"
            })
        ]
    });
});
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (LabeledTextField)));


/***/ }),

/***/ 5364:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__);




const Layout = ({ title , children ,  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: title || "game-of-blocks"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {
                bg: "#06122e",
                children: children
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);


/***/ }),

/***/ 4578:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var blitz__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4405);
/* harmony import */ var blitz__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(blitz__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3524);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_1__);


const EnhancedPrisma = (0,blitz__WEBPACK_IMPORTED_MODULE_0__.enhancePrisma)(_prisma_client__WEBPACK_IMPORTED_MODULE_1__.PrismaClient);

const db = new EnhancedPrisma();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (db);


/***/ })

};
;