(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[983],{5154:(e,t,r)=>{Promise.resolve().then(r.bind(r,4870))},4870:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>b});var a=r(5155),l=r(2115),s=r(6658),o=r(4565);let n=()=>{let[e,t]=(0,l.useState)(!1);return{login:async(e,r)=>{t(!0);try{let t=(0,o.xI)();return await (0,o.x9)(t,e,r),(0,o.xI)().currentUser}catch(e){throw e}finally{t(!1)}},isLoading:e}};var i=r(7058),c=r(6698);let d=()=>{let[e,t]=(0,l.useState)(!1);return{googleSignIn:async()=>{t(!0);try{let e=new o.HF,t=(await (0,o.df)((0,o.xI)(),e)).user,r=(0,i.H9)(c.db,"users",t.uid);return(await (0,i.x7)(r)).exists()||await (0,i.BN)(r,{email:t.email,displayName:t.displayName,photoURL:t.photoURL,provider:"google",createdAt:new Date,role:"user"},{merge:!0}),t}catch(e){throw e}finally{t(!1)}},isLoading:e}};r(9904);let g=e=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e),u=l.forwardRef(function(e,t){let{title:r,titleId:a,...s}=e;return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":a},s),r?l.createElement("title",{id:a},r):null,l.createElement("path",{d:"M3.53 2.47a.75.75 0 0 0-1.06 1.06l18 18a.75.75 0 1 0 1.06-1.06l-18-18ZM22.676 12.553a11.249 11.249 0 0 1-2.631 4.31l-3.099-3.099a5.25 5.25 0 0 0-6.71-6.71L7.759 4.577a11.217 11.217 0 0 1 4.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113Z"}),l.createElement("path",{d:"M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0 1 15.75 12ZM12.53 15.713l-4.243-4.244a3.75 3.75 0 0 0 4.244 4.243Z"}),l.createElement("path",{d:"M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 0 0-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 0 1 6.75 12Z"}))}),x=l.forwardRef(function(e,t){let{title:r,titleId:a,...s}=e;return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":a},s),r?l.createElement("title",{id:a},r):null,l.createElement("path",{d:"M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"}),l.createElement("path",{fillRule:"evenodd",d:"M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z",clipRule:"evenodd"}))});var h=r(6816);let b=()=>{let[e,t]=(0,l.useState)(""),[r,o]=(0,l.useState)(""),[i,c]=(0,l.useState)(!1),b=(0,s.useRouter)(),{login:y,isLoading:m}=n(),{googleSignIn:p,isLoading:f}=d(),[v,w]=(0,l.useState)(null),[j,N]=(0,l.useState)(null),k=m||f,C=async t=>{t.preventDefault(),w(null),N(null);let a=!1;if(e?g(e)||(w("Invalid email format"),a=!0):(w("Email is required"),a=!0),r||(N("Password is required"),a=!0),!a)try{await y(e,r),b.push("/color-process")}catch(e){console.error("Login error:",e)}},E=async()=>{try{await p(),b.push("/color-process")}catch(e){console.error("Google Login error:",e)}},I="appearance-none bg-[#202020] border-b border-primary py-2 px-3 leading-tight focus:outline-none";return(0,a.jsx)("div",{className:"relative max-w-md min-h-[100vh] top-16 px-6",children:(0,a.jsxs)("div",{className:"p-6 border border-primary",children:[(0,a.jsx)("h2",{className:"text-2xl font-black mb-12 text-center",children:"Access an Color Process"}),(0,a.jsxs)("form",{onSubmit:C,className:"space-y-6 ",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"block  text-sm font-bold mb-2",htmlFor:"email",children:"Email"}),(0,a.jsx)("input",{className:"".concat(I,"  appearance-none  py-2 px-3  leading-tight focus:outline-none w-full "),id:"email",type:"email",placeholder:"Email",value:e,onChange:e=>t(e.target.value),required:!0}),v&&(0,a.jsx)("p",{className:"text-red-500 text-xs italic",children:v})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"block  text-sm font-bold mb-2",htmlFor:"password",children:"Password"}),(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsx)("input",{className:"".concat(I," appearance-none py-2 px-3  leading-tight focus:outline-none w-full"),id:"password",type:i?"text":"password",placeholder:"Password",value:r,onChange:e=>o(e.target.value),required:!0,autoComplete:"current-password"}),(0,a.jsx)("button",{type:"button",className:"absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800 focus:outline-none",onClick:()=>{c(!i)},children:i?(0,a.jsx)(u,{className:"h-5 w-5"}):(0,a.jsx)(x,{className:"h-5 w-5"})})]}),j&&(0,a.jsx)("p",{className:"text-red-500 text-xs italic",children:j})]}),(0,a.jsxs)("div",{className:"flex gap-6 mt-8",children:[(0,a.jsx)(h.A,{type:"submit",disabled:k,children:k?"Logging In...":"Login"}),(0,a.jsx)(h.A,{variant:"secondary",onClick:E,disabled:k,children:k?"Logging in with Google...":"Login with Google"})]}),(0,a.jsx)("div",{className:"border-t border-[#202020] my-6",children:(0,a.jsx)(h.A,{className:"mt-6",variant:"primary",onClick:()=>{b.push("/color-process")},disabled:k,children:"Continue as Guest"})})]}),(0,a.jsxs)("p",{className:"text-left text-sm mt-4",children:["Don't have an account?"," ",(0,a.jsx)("span",{children:(0,a.jsx)("a",{href:"/auth/signup",className:"text-blue-500 hover:underline",children:"Sign up"})})]})]})})}},6816:(e,t,r)=>{"use strict";r.d(t,{A:()=>o});var a=r(5155);r(2115);var l=r(8173),s=r.n(l);let o=e=>{let{children:t,size:r="medium",variant:l="primary",styleType:o="filled",href:n,className:i="",onClick:c,disabled:d,target:g,rel:u,category:x="next",hasIcon:h=!0,...b}=e,y=!!n,m="".concat("\n    inline-flex\n    items-center\n    text-left\n    focus:outline-none\n    transition-colors\n    disabled:opacity-50\n    disabled:cursor-not-allowed\n    ".concat(i,"\n  ")," ").concat({small:"px-2 py-1  text-sm",medium:"px-4 py-2 text-base",large:"px-8 py-3 text-lg"}[r]," ").concat({primary:{filled:"bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500",outlined:"text-blue-500 border border-blue-500 hover:bg-blue-50 focus:ring-blue-500",text:"text-blue-500 hover:text-blue-600 focus:ring-blue-500"},secondary:{filled:"bg-gray-500 text-white hover:bg-gray-600 focus:ring-gray-500",outlined:"text-gray-500 border border-gray-500 hover:bg-gray-50 focus:ring-gray-500",text:"text-gray-500 hover:text-gray-600 focus:ring-gray-500"},success:{filled:"bg-green-500 text-white hover:bg-green-600 focus:ring-green-500",outlined:"text-green-500 border border-green-500 hover:bg-green-50 focus:ring-green-500",text:"text-green-500 hover:text-green-600 focus:ring-green-500"},warning:{filled:"bg-yellow-500 text-gray-900 hover:bg-yellow-600 focus:ring-yellow-500",outlined:"text-yellow-500 border border-yellow-500 hover:bg-yellow-50 focus:ring-yellow-500",text:"text-yellow-500 hover:text-yellow-600 focus:ring-yellow-500"},danger:{filled:"bg-red-500 text-white hover:bg-red-600 focus:ring-red-500",outlined:"text-red-500 border border-red-500 hover:bg-red-50 focus:ring-red-500",text:"text-red-500 hover:text-red-600 focus:ring-red-500"},info:{filled:"bg-sky-500 text-white hover:bg-sky-600 focus:ring-sky-500",outlined:"text-sky-500 border border-sky-500 hover:bg-sky-50 focus:ring-sky-500",text:"text-sky-500 hover:text-sky-600 focus:ring-sky-500"},light:{filled:"bg-gray-100 text-gray-700 hover:bg-gray-200 focus:ring-gray-500",outlined:"text-gray-100 border border-gray-100 hover:bg-gray-200 focus:ring-gray-500",text:"text-gray-100 hover:text-gray-200 focus:ring-gray-500"},dark:{filled:"bg-gray-700 text-white hover:bg-gray-800 focus:ring-gray-500",outlined:"text-gray-700 border border-gray-700 hover:bg-gray-800 focus:ring-gray-500",text:"text-gray-700 hover:text-gray-800 focus:ring-gray-500"}}[l][o]);return y?(0,a.jsx)(s(),{href:n,className:m,target:g,rel:u,children:(0,a.jsx)("button",{type:"button",onClick:c,disabled:d,...b,className:"w-full h-full p-0 flex items-center text-left ".concat(h?"gap-2":""),children:t})}):(0,a.jsx)("button",{className:m,onClick:()=>{"previous"===x&&window.history.back(),c&&c()},disabled:d,...b,children:t})}},6698:(e,t,r)=>{"use strict";r.d(t,{db:()=>c,j2:()=>i});var a=r(9904),l=r(6553),s=r(4565),o=r(7058);let n=(0,a.Wp)({apiKey:"AIzaSyBOP3UhZ2B-7naisuTn1JDfqHGbZ8HmzM8",authDomain:"simulasi.studio",projectId:"studios-9c34c",storageBucket:"studios-9c34c.firebasestorage.app",messagingSenderId:"228696722817",appId:"1:228696722817:web:72d572a227fd49fb40ec80",measurementId:"G-5D5QGRPLJV"}),i=(0,s.xI)(n),c=(0,o.aU)(n);(0,l.P5)(n)}},e=>{var t=t=>e(e.s=t);e.O(0,[992,895,173,31,441,517,358],()=>t(5154)),_N_E=e.O()}]);