(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[344],{4386:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/auth/login",function(){return n(3708)}])},8671:function(e,r,n){"use strict";n.d(r,{Al:function(){return i},m3:function(){return o},oP:function(){return c},tq:function(){return l}});var t=n(195),a=t.z.string().email().transform((function(e){return e.toLowerCase().trim()})),s=t.z.string().min(10).max(100).transform((function(e){return e.trim()})),i=t.z.object({email:a,password:s}),o=t.z.object({email:a,password:t.z.string()}),c=t.z.object({email:a}),l=t.z.object({password:s,passwordConfirmation:s,token:t.z.string()}).refine((function(e){return e.password===e.passwordConfirmation}),{message:"Passwords don't match",path:["passwordConfirmation"]});t.z.object({currentPassword:t.z.string(),newPassword:s})},1479:function(e,r,n){"use strict";n.d(r,{Ck:function(){return p},l0:function(){return b}});var t=n(8788),a=n(865),s=n(6670),i=n(6297),o=n(4776),c=n.n(o),l=n(2322),u=n(1144),d=n.n(u),m=n(2784),f=n(3397),x=n(3990),p="FORM_ERROR";function b(e){var r=e.children,n=e.submitText,o=e.schema,u=e.initialValues,p=e.onSubmit,b=(0,i.Z)(e,["children","submitText","schema","initialValues","onSubmit"]),h=(0,m.useState)(null),j=h[0],w=h[1];return(0,l.jsx)(f.J9,{initialValues:u||{},validate:(0,x.h2)(o),onSubmit:function(){var e=(0,t.Z)(c().mark((function e(r,n){var t,a,s,o;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.setErrors,e.next=3,p(r);case 3:if(e.t0=e.sent,e.t0){e.next=6;break}e.t0={};case 6:a=e.t0,s=a.FORM_ERROR,o=(0,i.Z)(a,["FORM_ERROR"]),s&&w(s),Object.keys(o).length>0&&t(o);case 11:case"end":return e.stop()}}),e)})));return function(r,n){return e.apply(this,arguments)}}(),children:function(e){var t=e.handleSubmit,i=e.isSubmitting;return(0,l.jsxs)("form",(0,s.Z)((0,a.Z)({onSubmit:t},b),{className:"jsx-c6cb5874064892f7 "+(b&&null!=b.className&&b.className||"form"),children:[r,j&&(0,l.jsx)("div",{role:"alert",style:{color:"red"},className:"jsx-c6cb5874064892f7",children:j}),n&&(0,l.jsx)("button",{type:"submit",disabled:i,className:"jsx-c6cb5874064892f7",children:n}),(0,l.jsx)(d(),{id:"c6cb5874064892f7",children:".form>*+*{margin-top:1rem}"})]}))}})}},3367:function(e,r,n){"use strict";n.d(r,{I:function(){return m}});var t=n(865),a=n(6670),s=n(6297),i=n(8530),o=n(2322),c=n(1144),l=n.n(c),u=n(2784),d=n(3397),m=(0,u.forwardRef)((function(e,r){var n=e.name,c=e.label,u=e.outerProps,m=(0,s.Z)(e,["name","label","outerProps"]),f=(0,i.Z)((0,d.U$)(n),1)[0],x=(0,d.u6)().isSubmitting;return(0,o.jsxs)("div",(0,a.Z)((0,t.Z)({},u),{className:"jsx-c0f6ad2acae3d953 "+(u&&null!=u.className&&u.className||""),children:[(0,o.jsxs)("label",{className:"jsx-c0f6ad2acae3d953",children:[c,(0,o.jsx)("input",(0,a.Z)((0,t.Z)((0,a.Z)((0,t.Z)({},f),{disabled:x}),m),{ref:r,className:"jsx-c0f6ad2acae3d953 "+(m&&null!=m.className&&m.className||f&&null!=f.className&&f.className||"")}))]}),(0,o.jsx)(d.Bc,{name:n,children:function(e){return(0,o.jsx)("div",{role:"alert",style:{color:"red"},className:"jsx-c0f6ad2acae3d953",children:e})}}),(0,o.jsx)(l(),{id:"c0f6ad2acae3d953",children:"label.jsx-c0f6ad2acae3d953{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:start;-webkit-align-items:start;-moz-box-align:start;-ms-flex-align:start;align-items:start;font-size:1rem}input.jsx-c0f6ad2acae3d953{font-size:1rem;padding:.25rem .5rem;-webkit-border-radius:3px;-moz-border-radius:3px;border-radius:3px;border:1px solid purple;-webkit-appearance:none;-moz-appearance:none;-ms-appearance:none;appearance:none;margin-top:.5rem}"})]}))}))},5364:function(e,r,n){"use strict";var t=n(2322),a=n(7729),s=n.n(a),i=(n(2784),n(9649));r.Z=function(e){var r=e.title,n=e.children;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s(),{children:[(0,t.jsx)("title",{children:r||"game-of-blocks"}),(0,t.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,t.jsx)(i.xu,{bg:"#06122e",children:n})]})}},3708:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return k}});var t=n(2322),a=n(5364),s=n(8788),i=n(7842),o=n(2838),c=n(8530),l=n(4776),u=n.n(l),d=n(3990),m=n(9097),f=n.n(m),x=n(3367),p=n(1479),b=(0,n(2721)._)({resolverName:"login",resolverType:"mutation",routePath:"/login"}),h=n(8671),j=n(5984),w=n(5293),v=function(e){var r=(0,c.Z)((0,j.Db)(b),1)[0];return(0,t.jsxs)("div",{children:[(0,t.jsx)("h1",{children:"Login"}),(0,t.jsxs)(p.l0,{submitText:"Login",schema:h.m3,initialValues:{email:"",password:""},onSubmit:function(){var n=(0,s.Z)(u().mark((function n(t){var a,s;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=4,r(t);case 4:s=n.sent,null===(a=e.onSuccess)||void 0===a||a.call(e,s),n.next=15;break;case 8:if(n.prev=8,n.t0=n.catch(0),!(0,o.Z)(n.t0,d._7)){n.next=14;break}return n.abrupt("return",(0,i.Z)({},p.Ck,"Sorry, those credentials are invalid"));case 14:return n.abrupt("return",(0,i.Z)({},p.Ck,"Sorry, we had an unexpected error. Please try again. - "+n.t0.toString()));case 15:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}(),children:[(0,t.jsx)(x.I,{name:"email",label:"Email",placeholder:"Email"}),(0,t.jsx)(x.I,{name:"password",label:"Password",placeholder:"Password",type:"password"}),(0,t.jsx)("div",{children:(0,t.jsx)(f(),{href:w.Z.ForgotPasswordPage(),children:(0,t.jsx)("a",{children:"Forgot your password?"})})})]}),(0,t.jsxs)("div",{style:{marginTop:"1rem"},children:["Or"," ",(0,t.jsx)(f(),{href:w.Z.SignupPage(),children:(0,t.jsx)("a",{children:"Sign Up"})})]})]})},g=n(5632),k=function(){var e=(0,g.useRouter)();return(0,t.jsx)(a.Z,{title:"Log In",children:(0,t.jsx)(v,{onSuccess:function(r){var n=e.query.next?decodeURIComponent(e.query.next):"/";return e.push(n)}})})}}},function(e){e.O(0,[649,132,97,774,888,179],(function(){return r=4386,e(e.s=r);var r}));var r=e.O();_N_E=r}]);