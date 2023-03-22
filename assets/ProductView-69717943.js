import{g as H,i as U,e as F,N as q,P as R,S as z,a as G}from"./thumbs.min-4507cac5.js";import{_ as J,f as A,m as V,r as E,o as c,c as b,a as t,b as k,w,d as x,t as p,B as L,E as K,G as Q,F as P,C as T,D as W,H as C,I as X,p as Y,j as Z}from"./index-fc53acef.js";import{c as O}from"./cart-c07dfcd8.js";import{p as j}from"./productStore-2c6f5e56.js";import"./sweetalert2.all-67e5945f.js";import"./statusStore-d1ac195f.js";function $({swiper:e,extendParams:u,on:m}){u({thumbs:{swiper:null,multipleActiveThumbs:!0,autoScrollOffset:0,slideThumbActiveClass:"swiper-slide-thumb-active",thumbsContainerClass:"swiper-thumbs"}});let g=!1,o=!1;e.thumbs={swiper:null};function S(){const s=e.thumbs.swiper;if(!s||s.destroyed)return;const i=s.clickedIndex,l=s.clickedSlide;if(l&&l.classList.contains(e.params.thumbs.slideThumbActiveClass)||typeof i>"u"||i===null)return;let r;s.params.loop?r=parseInt(s.clickedSlide.getAttribute("data-swiper-slide-index"),10):r=i,e.params.loop?e.slideToLoop(r):e.slideTo(r)}function f(){const{thumbs:s}=e.params;if(g)return!1;g=!0;const i=e.constructor;if(s.swiper instanceof i)e.thumbs.swiper=s.swiper,Object.assign(e.thumbs.swiper.originalParams,{watchSlidesProgress:!0,slideToClickedSlide:!1}),Object.assign(e.thumbs.swiper.params,{watchSlidesProgress:!0,slideToClickedSlide:!1}),e.thumbs.swiper.update();else if(U(s.swiper)){const l=Object.assign({},s.swiper);Object.assign(l,{watchSlidesProgress:!0,slideToClickedSlide:!1}),e.thumbs.swiper=new i(l),o=!0}return e.thumbs.swiper.el.classList.add(e.params.thumbs.thumbsContainerClass),e.thumbs.swiper.on("tap",S),!0}function h(s){const i=e.thumbs.swiper;if(!i||i.destroyed)return;const l=i.params.slidesPerView==="auto"?i.slidesPerViewDynamic():i.params.slidesPerView;let r=1;const d=e.params.thumbs.slideThumbActiveClass;if(e.params.slidesPerView>1&&!e.params.centeredSlides&&(r=e.params.slidesPerView),e.params.thumbs.multipleActiveThumbs||(r=1),r=Math.floor(r),i.slides.forEach(a=>a.classList.remove(d)),i.params.loop||i.params.virtual&&i.params.virtual.enabled)for(let a=0;a<r;a+=1)F(i.slidesEl,`[data-swiper-slide-index="${e.realIndex+a}"]`).forEach(n=>{n.classList.add(d)});else for(let a=0;a<r;a+=1)i.slides[e.realIndex+a]&&i.slides[e.realIndex+a].classList.add(d);const v=e.params.thumbs.autoScrollOffset,y=v&&!i.params.loop;if(e.realIndex!==i.realIndex||y){const a=i.activeIndex;let n,I;if(i.params.loop){const N=i.slides.filter(D=>D.getAttribute("data-swiper-slide-index")===`${e.realIndex}`)[0];n=i.slides.indexOf(N),I=e.activeIndex>e.previousIndex?"next":"prev"}else n=e.realIndex,I=n>e.previousIndex?"next":"prev";y&&(n+=I==="next"?v:-1*v),i.visibleSlidesIndexes&&i.visibleSlidesIndexes.indexOf(n)<0&&(i.params.centeredSlides?n>a?n=n-Math.floor(l/2)+1:n=n+Math.floor(l/2)-1:n>a&&i.params.slidesPerGroup,i.slideTo(n,s?0:void 0))}}m("beforeInit",()=>{const{thumbs:s}=e.params;if(!(!s||!s.swiper))if(typeof s.swiper=="string"||s.swiper instanceof HTMLElement){const i=H(),l=()=>{const d=typeof s.swiper=="string"?i.querySelector(s.swiper):s.swiper;if(d&&d.swiper)s.swiper=d.swiper,f(),h(!0);else if(d){const v=y=>{s.swiper=y.detail[0],d.removeEventListener("init",v),f(),h(!0),s.swiper.update(),e.update()};d.addEventListener("init",v)}return d},r=()=>{if(e.destroyed)return;l()||requestAnimationFrame(r)};requestAnimationFrame(r)}else f(),h(!0)}),m("slideChange update resize observerUpdate",()=>{h()}),m("setTransition",(s,i)=>{const l=e.thumbs.swiper;!l||l.destroyed||l.setTransition(i)}),m("beforeDestroy",()=>{const s=e.thumbs.swiper;!s||s.destroyed||o&&s.destroy()}),Object.assign(e.thumbs,{init:f,update:h})}const{VITE_APP_URL:B,VITE_APP_PATH:M}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"leo533",BASE_URL:"/Vue3-week6/",MODE:"production",DEV:!1,PROD:!0},ee={data(){return{product:[],products:[],tempProducts:[],thumbsSwiper:null,modules:[q,$,R],itemNum:1,id:"",fillter:[],productsAll:[]}},components:{Swiper:z,SwiperSlide:G},methods:{getProductSingle(){const{id:e}=this.$route.params,u=this.$loading.show();this.$http.get(`${B}v2/api/${M}/product/${e}`).then(m=>{const{product:g}=m.data;this.product=g,this.products=this.product,console.log(this.product),console.log(this.products),u.hide()}).catch(m=>{alert(m)})},getCategory(){this.$http.get(`${B}v2/api/${M}/products/all`).then(e=>{this.productsAll=e.data.products,console.log(this.productsAll)}).catch(e=>{console.log(e),alert(e.response)})},setThumbsSwiper(e){this.thumbsSwiper=e},...A(O,["addToCart"]),...A(j,["tempProductsa11","getProductAll","addtoFollow","getid"]),test(e){this.$router.push(`/product/${e}`),this.id=e,this.getProductSingle()}},computed:{...V(j,["followList"]),...V(O,["loadingItem"])},mounted(){this.getProductSingle(),this.getProductAll()}},_=e=>(Y("data-v-ca695e2e"),e=e(),Z(),e),se={class:"container py-8"},te={class:"row d-flex justify-content-center mb-4"},ie={class:"col-md-9"},oe={class:"row mb-4"},le=_(()=>t("h2",{class:"text-center text-primary fw-bold mb-7"},"鮮品味茶品",-1)),re={class:"col-md-7"},ne=["src"],ae=["src"],de={class:"col-md-5"},ce={class:"d-flex flex-column justify-content-center h-100"},ue={class:"d-flex align-items-center"},pe={class:"h3 text-nowrap me-2 fw-bold"},me={key:0,class:"material-icons fs-1"},he={key:1,class:"material-icons fs-1 text-primary",style:{cursor:"pointer"}},fe={class:"badge rounded-pill bg-primary"},be=["innerHTML"],_e={class:"d-flex flex-column h-100"},ve={class:"align-self-end"},we={class:"text-decoration-line-through fs-4"},ge=_(()=>t("span",null,"原價",-1)),Se={class:"fs-2 mb-2 fw-bold text-danger"},ye=_(()=>t("span",{class:""},"特價",-1)),xe={class:"d-flex justify-content-end"},Pe=["value"],Te={key:0,class:"fas fa-spinner fa-pulse"},Ie={class:"row d-flex justify-content-center mb-4"},ke={class:"col-md-9"},Ce=_(()=>t("ul",{class:"nav nav-tabs",id:"myTab",role:"tablist"},[t("li",{class:"nav-item",role:"presentation"},[t("button",{class:"nav-link active",id:"home-tab","data-bs-toggle":"tab","data-bs-target":"#home",type:"button",role:"tab","aria-controls":"home","aria-selected":"true"}," 商品介紹 ")])],-1)),Ae={class:"tab-content",id:"myTabContent"},Ve=["innerHTML"],Ee=_(()=>t("div",{class:"tab-pane fade",id:"profile",role:"tabpanel","aria-labelledby":"profile-tab"}," ... ",-1)),Le=_(()=>t("div",{class:"tab-pane fade",id:"contact",role:"tabpanel","aria-labelledby":"contact-tab"}," ... ",-1)),Oe={class:"row d-flex justify-content-center"},je=_(()=>t("h2",{class:"text-center text-primary mb-7 fw-bold"},"相關商品",-1)),Be={class:"col-md-9"},Me={class:"card d-flex h-100 shadow-sm"},Ne=["onClick"],De={class:"card-body p-0"},He={class:"card-title fs-4 lh-29 fw-bold"},Ue={class:"fs-5 lh-30 fw-bold mb-5"};function Fe(e,u,m,g,o,S){const f=E("swiper-slide"),h=E("swiper");return c(),b("section",se,[t("div",te,[t("div",ie,[t("div",oe,[le,t("div",re,[k(h,{style:{"--swiper-navigation-color":"#fff","--swiper-pagination-color":"#fff"},spaceBetween:10,navigation:!0,thumbs:{swiper:o.thumbsSwiper},modules:o.modules,class:"mySwiper2"},{default:w(()=>[(c(!0),b(P,null,T(o.product.imagesUrl,(s,i)=>(c(),C(f,{key:i},{default:w(()=>[t("img",{src:s},null,8,ne)]),_:2},1024))),128))]),_:1},8,["thumbs","modules"]),k(h,{onSwiper:S.setThumbsSwiper,spaceBetween:10,slidesPerView:4,freeMode:!0,watchSlidesProgress:!0,modules:o.modules,class:"mySwiper align-items-center"},{default:w(()=>[(c(!0),b(P,null,T(o.product.imagesUrl,(s,i)=>(c(),C(f,{key:i},{default:w(()=>[t("img",{src:s},null,8,ae)]),_:2},1024))),128))]),_:1},8,["onSwiper","modules"]),x(" "+p(o.product.success),1)]),t("div",de,[t("div",ce,[t("div",null,[t("div",ue,[t("h3",pe,p(o.product.title),1),t("a",{href:"#",class:"d-flex mb-md-0 align-items-center text-decoration-none",onClick:u[0]||(u[0]=L(()=>e.addtoFollow(o.product.id),["prevent"])),style:{cursor:"pointer"}},[e.followList.id.indexOf(o.product.id)===-1?(c(),b("span",me," favorite_border ")):(c(),b("span",he," favorite "))])]),t("span",fe,p(o.product.category),1),t("p",{innerHTML:o.product.description},null,8,be),t("div",_e,[t("div",ve,[t("div",we,[ge,t("span",null,p(o.product.origin_price),1)]),t("div",Se,[ye,t("span",null,p(o.product.price),1)])]),t("div",xe,[K(t("select",{class:"form-select",name:"qty","onUpdate:modelValue":u[1]||(u[1]=s=>o.itemNum=s)},[(c(),b(P,null,T(5,s=>t("option",{value:s,key:s+"0"},p(s),9,Pe)),64))],512),[[Q,o.itemNum,void 0,{number:!0}]]),t("button",{type:"button",class:"btn btn-primary me-3 me-md-0 text-nowrap",onClick:u[2]||(u[2]=()=>e.addToCart(o.product.id,o.itemNum))},[x(" 加入購物車 "),e.loadingItem===o.product.id+"1"?(c(),b("i",Te)):W("",!0)])])])])])])])])]),t("div",Ie,[t("div",ke,[Ce,t("div",Ae,[t("div",{class:"tab-pane fade show active p-5",id:"home",role:"tabpanel","aria-labelledby":"home-tab",innerHTML:o.product.content},null,8,Ve),Ee,Le])])]),t("div",Oe,[x(p(o.tempProducts)+" ",1),je,t("div",Be,[k(h,{class:"Swiper3",navigation:!0,slidesPerView:3,spaceBetween:24,pagination:{clickable:!0},breakpoints:{320:{slidesPerView:1,spaceBetween:24},768:{slidesPerView:3,spaceBetween:24},992:{slidesPerView:3,spaceBetween:24}},modules:o.modules},{default:w(()=>[(c(!0),b(P,null,T(o.tempProducts,s=>(c(),C(f,{key:s.id},{default:w(()=>[x(p(s.id)+" ",1),t("div",Me,[t("div",{class:"bg-cover",style:X([{"min-height":"200px",cursor:"pointer","background-position":"center"},{backgroundImage:`url(${s.imageUrl})`}]),onClick:L(()=>S.test(s.id),["prevent"])},null,12,Ne),t("div",De,[t("h5",He,p(s.title),1),t("div",Ue,[t("span",null,p(e.$filters.currency(s.price)),1)])])])]),_:2},1024))),128))]),_:1},8,["modules"])])])])}const Qe=J(ee,[["render",Fe],["__scopeId","data-v-ca695e2e"]]);export{Qe as default};
