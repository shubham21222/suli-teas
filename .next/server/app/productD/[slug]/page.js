(()=>{var e={};e.id=669,e.ids=[669],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},6201:(e,s,t)=>{"use strict";t.r(s),t.d(s,{GlobalError:()=>i.a,__next_app__:()=>m,originalPathname:()=>o,pages:()=>c,routeModule:()=>p,tree:()=>d});var a=t(7096),r=t(6132),l=t(7284),i=t.n(l),n=t(2564),x={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(x[e]=()=>n[e]);t.d(s,x);let d=["",{children:["productD",{children:["[slug]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,9464)),"/home/admin1/new foldr2/suli-teas-nextjs-main/app/productD/[slug]/page.js"]}]},{}]},{metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(t.bind(t,6174)),"/home/admin1/new foldr2/suli-teas-nextjs-main/app/layout.js"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,9291,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["/home/admin1/new foldr2/suli-teas-nextjs-main/app/productD/[slug]/page.js"],o="/productD/[slug]/page",m={require:t,loadChunk:()=>Promise.resolve()},p=new a.AppPageRouteModule({definition:{kind:r.x.APP_PAGE,page:"/productD/[slug]/page",pathname:"/productD/[slug]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},8669:(e,s,t)=>{Promise.resolve().then(t.bind(t,8025))},8025:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>m});var a=t(3854),r=t(1893),l=t(4218),i=t(8384),n=t(1018),x=t(1956),d=t.n(x),c=t(4716),o=t(2894);let m=({params:e})=>{let[s,t]=(0,l.useState)(0),{addToCart:x,cart:m}=(0,o.useCart)();(0,n.useRouter)();let p=e?.slug||"",h=i.products.filter(e=>e?.id==p);console.log(h);let u=()=>{t(s+1)},j=()=>{s>0&&t(s-1)};return(0,a.jsxs)(a.Fragment,{children:[a.jsx(r.default,{}),a.jsx("div",{className:"2xl:mt-[150px] xl:mt-20 lg:mt-28 2xl:w-[1600px] xl:w-[1200px]  lg:w-[800px] md:w-[620px] sm:w-[600px] w-[420px] flex justify-between m-auto nav",children:a.jsx("div",{className:"mt-10  w-full p-3",children:h.map(e=>(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:"flex gap-5",children:[a.jsx("div",{className:"w-1/2",children:a.jsx("div",{className:"border p-5 ",children:a.jsx(d(),{src:e.image,className:"lg:w-48 xl:w-[80%]  mx-auto"})})}),a.jsx("div",{className:"flex w-1/2",children:(0,a.jsxs)("div",{className:"",children:[a.jsx("h1",{className:"lg:text-[16px] xl:text-[25px] 2xl:text-[35px] my-2 font-medium",children:e.name}),a.jsx("h2",{className:"my-2 2xl:my-4 lg:text-[14px] xl:text-[22px] 2xl:text-[25px] font-medium",children:e.price}),(0,a.jsxs)("div",{className:"flex gap-7 my-5 2xl:my-10",children:[a.jsx("div",{className:"flex items-center",children:(0,a.jsxs)("h1",{className:"text-gray-500 productD-text ",children:["Quantity"," "]})})," ",(0,a.jsxs)("div",{className:"flex gap-5 productD-text",children:[a.jsx("button",{className:"border-2 py-2 px-4 hover:border-[#315031] hover:text-[#315031]",children:"500g Pouch"}),a.jsx("button",{className:"border-2 py-2 px-4 hover:border-[#315031] hover:text-[#315031]",children:"1 kg Pouch"})]})]}),(0,a.jsxs)("div",{className:"my-5 flex gap-7 productD-text 2xl:my-10",children:[a.jsx("div",{className:"w-2/12 flex items-center",children:a.jsx("h1",{className:"text-gray-500 ",children:"Highlights"})}),(0,a.jsxs)("div",{children:[a.jsx("p",{children:"- Granules Form"}),a.jsx("p",{children:"- Pouch Container"})]})]}),(0,a.jsxs)("div",{className:"my-5 flex gap-7 productD-text 2xl:my-10",children:[a.jsx("div",{className:"w-2/12",children:a.jsx("h1",{className:"text-gray-500 ",children:"Services"})}),a.jsx("div",{children:"Cash on Delivery available"})]}),(0,a.jsxs)("div",{className:" my-6 gap-10 ",children:[(0,a.jsxs)("div",{className:"flex ",children:[" ",a.jsx("button",{className:"w-[40px] 2xl:w-[50px]  py-2 2xl:py-3  bg-gray-500 text-white rounded-l",onClick:j,children:"-"}),a.jsx("p",{className:" px-4  2xl:px-5 text-[15px] 2xl:text-[18px] items-center flex",children:s}),a.jsx("button",{className:" w-[40px] 2xl:w-[50px] py-2 2xl:py-3  bg-gray-500 text-white rounded-r",onClick:u,children:"+"})]}),a.jsx("div",{children:a.jsx("button",{onClick:()=>{x(h[0]),alert("product Added")},className:"bg-[#315031] hover:bg-transparent hover:text-[#315031] hover:border border hover:border-[#315031] text-white  py-2 px-4 2xl:py-3 2xl:px-8 rounded text-[16px] 2xl:text-[18px] w-full my-8 2xl:my-14",children:"Add to Cart"})})]}),a.jsx("h1",{className:"lg:text-[14px] xl:text-[20px] 2xl:text-[25px] font-semibold",children:"Product Description"}),a.jsx("h2",{className:"my-2 text-gray-500 productD-text 2xl:my-5",children:e.description})]})})]}),(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:"my-4",children:[a.jsx("div",{className:"border py-4 px-2",children:a.jsx("h1",{className:"font-semibold text-[20px]  2xl:text-[25px]",children:"Specifications"})}),(0,a.jsxs)("div",{className:"border py-4 px-2 productD-text",children:[a.jsx("h1",{className:"font-semibold ",children:"General"}),(0,a.jsxs)("div",{className:"flex gap-20 my-4 ",children:[a.jsx("h1",{className:"text-gray-500 w-2/6",children:"Brand"}),a.jsx("h1",{children:"Suli Tea"})]}),(0,a.jsxs)("div",{className:"flex gap-20 my-4 ",children:[a.jsx("h1",{className:"text-gray-500 w-2/6",children:"Type"}),a.jsx("h1",{children:"Black Tea"})]}),(0,a.jsxs)("div",{className:"flex gap-20 my-4 ",children:[a.jsx("h1",{className:"text-gray-500 w-2/6",children:"Model Name"}),a.jsx("h1",{children:"Strong Leaf"})]}),(0,a.jsxs)("div",{className:"flex gap-20 my-4 ",children:[a.jsx("h1",{className:"text-gray-500 w-2/6",children:"Quantity"}),a.jsx("h1",{children:"1kg"})]}),(0,a.jsxs)("div",{className:"flex gap-20 my-4 ",children:[a.jsx("h1",{className:"text-gray-500 w-2/6",children:"Pack Of"}),a.jsx("h1",{children:"1"})]}),(0,a.jsxs)("div",{className:"flex gap-20 my-4 ",children:[a.jsx("h1",{className:"text-gray-500 w-2/6",children:"Tea Form"}),a.jsx("h1",{children:"Granules"})]}),(0,a.jsxs)("div",{className:"flex gap-20 my-4 ",children:[a.jsx("h1",{className:"text-gray-500 w-2/6",children:"Container Type"}),a.jsx("h1",{children:"Pouch"})]}),(0,a.jsxs)("div",{className:"flex gap-20 my-4 ",children:[a.jsx("h1",{className:"text-gray-500 w-2/6",children:"Maximum Shelf Life"}),a.jsx("h1",{children:"12 Months"})]})]})]}),(0,a.jsxs)("div",{className:"border py-4 px-2",children:[a.jsx("h1",{className:"font-semibold text-[20px] 2xl:text-[25px]",children:"Legal Disclaimer"}),a.jsx("p",{className:"my-4 productD-text 2xl:my-10",children:"Suli Teas endeavours to ensure that the sellers provide accurate information on the platform. It is pertinent to note that, actual product packaging and materials may contain more and different information, which may include nutritional information/allergen declaration/special instruction for intended use/warning/directions, health & nutritional claims, etc. We recommend that consumers always read the label carefully before using or consuming any products. Please do not solely rely on the information provided on this website. For additional information, please get in touch with the manufacturer."})]})]})]}))})}),a.jsx(c.default,{})]})}},9464:(e,s,t)=>{"use strict";t.r(s),t.d(s,{$$typeof:()=>i,__esModule:()=>l,default:()=>x});var a=t(5153);let r=(0,a.createProxy)(String.raw`/home/admin1/new foldr2/suli-teas-nextjs-main/app/productD/[slug]/page.js`),{__esModule:l,$$typeof:i}=r,n=r.default,x=n}};var s=require("../../../webpack-runtime.js");s.C(e);var t=e=>s(s.s=e),a=s.X(0,[271,284,323,956,473,125,519,716,384],()=>t(6201));module.exports=a})();