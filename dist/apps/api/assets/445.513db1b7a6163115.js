"use strict";(self.webpackChunkcomiccommander=self.webpackChunkcomiccommander||[]).push([[445],{7445:(K,v,r)=>{r.r(v),r.d(v,{CcSingleViewModule:()=>J});var d=r(6895),_=r(9841),u=r(2529),V=r(8372),x=r(9587),m=r(4004),U=r(555),e=r(4650),a=r(3060),P=r(529),w=r(4859),C=r(7392),g=r(9583),f=r(6451),l=r(4968),S=r(8505),T=r(5698);let I=(()=>{class n{constructor(t){this.elementRef=t,this.origin={x:0,y:0},this.style=null,this.rect={x:0,y:0},this.incrX=0,this.incrY=0,this.isTouched=!1,this.onDrag=!1,this.direction=null,this.touchMove=new e.vpe}get _(){return this.style}get __(){return this.onDrag}ngOnInit(){this.downSubscription=(0,f.T)((0,l.R)(this.elementRef.nativeElement,"mousedown").pipe((0,S.b)(t=>this.isTouched=!1)),(0,l.R)(this.elementRef.nativeElement,"touchstart").pipe((0,S.b)(t=>this.isTouched=!0),(0,m.U)(t=>({target:t.target,screenX:t.touches[0].screenX,screenY:t.touches[0].screenY})))).subscribe(t=>{this.onDrag=!0,this.origin={x:t.screenX,y:t.screenY},(0,f.T)((0,l.R)(document,"mouseup"),(0,l.R)(document,"touchend")).pipe((0,T.q)(1)).subscribe(()=>{this.moveSubscription&&(this.moveSubscription.unsubscribe(),this.moveSubscription=void 0),this.rect={y:this.incrY,x:this.incrX},this.onDrag=!0,this.touchMove.emit({element:this,incrX:this.incrX,incrY:this.incrY})}),this.moveSubscription||(this.moveSubscription=(0,f.T)((0,l.R)(document,"mousemove"),(0,l.R)(document,"touchmove").pipe((0,m.U)(i=>({target:i.target,screenX:i.touches[0].screenX,screenY:i.touches[0].screenY})))).subscribe(i=>{this.incrX=this.rect.x+i.screenX-this.origin.x,this.incrY=this.rect.y+i.screenY-this.origin.y}))})}ngOnDestroy(){this.downSubscription.unsubscribe()}reset(){this.style=null,this.rect={x:0,y:0}}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(e.SBq))},n.\u0275dir=e.lG2({type:n,selectors:[["","touch",""]],hostVars:4,hostBindings:function(t,i){2&t&&(e.Akn(i._),e.ekj("no-select",i.__))},inputs:{direction:["touch","direction"]},outputs:{touchMove:"touchMove"},exportAs:["touch"]}),n})();const k=["viewportdiv"],O=["img"],b=["cdkVirtualScrollViewport"];function M(n,c){1&n&&(e.TgZ(0,"div"),e._uU(1," Loading... "),e.qZA())}function Y(n,c){1&n&&e._UZ(0,"div",7)}const H=function(n,c){return{"cc-fade-in-1":n,"cc-fade-in-2":c}};function Z(n,c){if(1&n){const t=e.EpF();e.TgZ(0,"img",8,9),e.NdJ("click",function(o){e.CHM(t);const s=e.oxw();return e.KtG(s.onClick(o))}),e.qZA()}if(2&n){const t=e.oxw();e.Q6J("ngClass",e.WLB(3,H,t.imageUrlIndex%2==0,t.imageUrlIndex%2==1)),e.uIk("alt",1+t.imageUrlIndex+"/"+t.imageUrls.length)("src",t.imageUrls[t.imageUrlIndex],e.LSH)}}function A(n,c){if(1&n&&(e.TgZ(0,"p"),e._uU(1),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.lnq(" ",t.imageUrlIndex+1,"/",t.imageUrls.length,") ",t.imageUrls[t.imageUrlIndex]," ")}}function N(n,c){if(1&n){const t=e.EpF();e.TgZ(0,"img",13),e.NdJ("click",function(o){e.CHM(t);const s=e.oxw(2);return e.KtG(s.onClick(o))}),e.qZA()}if(2&n){const t=c.$implicit,i=e.oxw(2);e.uIk("alt",1+i.imageUrlIndex+"/"+i.imageUrls.length)("src",t,e.LSH)}}function B(n,c){if(1&n&&(e.TgZ(0,"cdk-virtual-scroll-viewport",10,11),e._UZ(2,"div",7),e.YNc(3,N,1,2,"img",12),e.qZA()),2&n){const t=e.oxw();e.xp6(3),e.Q6J("cdkVirtualForOf",t.imageUrls)}}function R(n,c){1&n&&(e.TgZ(0,"mat-icon"),e._uU(1,"portrait"),e.qZA())}function D(n,c){1&n&&(e.TgZ(0,"mat-icon"),e._uU(1,"theaters"),e.qZA())}let y=(()=>{class n{constructor(t,i,o,s,h,p){this.route=t,this.router=i,this.http=o,this.configService=s,this.cdr=h,this.ngZone=p,this.imageUrls=["assets/empty.gif"],this.imageUrlIndex=0,this.scrollOffset=0,this.innerService=new U.z("singlePage",!1),this.singlePage=this.innerService.getValue(),this.width=0,this.alive=!0}get virtualScrollViewport(){return this._virtualScrollViewport}set virtualScrollViewport(t){this._virtualScrollViewport=t,t?this.addScrollListener():this.subsElementScrolled&&this.subsElementScrolled.unsubscribe()}ngOnInit(){(0,_.a)([this.route.params,this.configService.config$]).pipe((0,u.o)(()=>this.alive)).subscribe(this.onParamsAndConfigReady.bind(this)),this.calcWidth()}ngOnDestroy(){this.alive=!1}onParamsAndConfigReady([t,i]){this.config=i,this.comicId=t.id;const o=new URLSearchParams(window.location.search);if(this.singlePage){const s=o.get("page");this.imageUrlIndex=s?parseInt(s):0,this.scrollOffset=0}else{const s=o.get("scroll");this.scrollOffset=s?parseInt(s):0}this.loadImageUrls()}loadImageUrls(){const t=this.config?.port??3333,i=location.protocol,o=location.hostname;this.http.get(`${i}//${o}:${t}/api/view/read/${this.comicId}`).pipe((0,u.o)(()=>this.alive)).subscribe(h=>{h.length<4?setTimeout(this.loadImageUrls.bind(this),888):(this.imageUrls=h.map(p=>`${i}//${o}:${t}/`+p),this.cdr.detectChanges(),this._virtualScrollViewport?.scrollToOffset(this.scrollOffset,"auto"))})}onClick(t){if(!this.width)return;const i=t.clientX,o=this.width/3;i>0&&i<o?this.onPrevClicked(t.metaKey):i>this.width-o&&this.onNextClicked(t.metaKey)}calcWidth(){this.width=this.parentDiv?.nativeElement?.offsetWidth}toggleSinglePage(){this.singlePage=!this.singlePage,this.innerService.update(this.singlePage)}addScrollListener(){this.subsElementScrolled=this._virtualScrollViewport?.elementScrolled().pipe((0,u.o)(()=>this.alive),(0,V.b)(500),(0,m.U)(t=>this._virtualScrollViewport?this._virtualScrollViewport.measureScrollOffset("top"):0)).subscribe(this.onScrolled.bind(this))}onPrevKey(t){t.preventDefault(),this.onPrevClicked(t.metaKey)}onPrevClicked(t){if(this.singlePage)this.imageUrlIndex>0&&(this.imageUrlIndex--,t&&(this.imageUrlIndex=0),this.afterImageUrlChanged());else if(this._virtualScrollViewport){let i=0;if(!t){const o=this._virtualScrollViewport.measureScrollOffset("top"),s=this._virtualScrollViewport.getViewportSize();i=Math.max(0,o-s)}this._virtualScrollViewport.scrollToOffset(i,"smooth")}}onNextKey(t){this.onNextClicked(t.metaKey)}onNextClicked(t){if(this.singlePage)this.imageUrlIndex<this.imageUrls.length-2&&(this.imageUrlIndex++,t&&(this.imageUrlIndex=this.imageUrls.length-1),this.afterImageUrlChanged());else if(this._virtualScrollViewport){let i=999999;t||(i=this._virtualScrollViewport.measureScrollOffset("top")+this._virtualScrollViewport.getViewportSize()),this._virtualScrollViewport.scrollToOffset(i,"smooth")}}onScrolled(t){this.scrollOffset=t,this.ngZone.run(()=>this.router.navigate(["view",this.comicId],{queryParams:{scroll:this.scrollOffset},replaceUrl:!0}))}afterImageUrlChanged(){this.scroll2Top(),this.cdr.detectChanges(),this.router.navigate(["view",this.comicId],{queryParams:{page:this.imageUrlIndex},replaceUrl:!0})}scroll2Top(){this.parentDiv?.nativeElement.scroll(0,0)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(a.gz),e.Y36(a.F0),e.Y36(P.eN),e.Y36(x.Z),e.Y36(e.sBO),e.Y36(e.R0b))},n.\u0275cmp=e.Xpm({type:n,selectors:[["cc-single-view"]],viewQuery:function(t,i){if(1&t&&(e.Gf(k,7),e.Gf(O,7),e.Gf(b,5)),2&t){let o;e.iGM(o=e.CRH())&&(i.parentDiv=o.first),e.iGM(o=e.CRH())&&(i.img=o.first),e.iGM(o=e.CRH())&&(i.virtualScrollViewport=o.first)}},hostBindings:function(t,i){1&t&&e.NdJ("resize",function(){return i.calcWidth()},!1,e.Jf7)("keydown.ArrowUp",function(s){return i.onPrevKey(s)},!1,e.evT)("keydown.ArrowLeft",function(s){return i.onPrevKey(s)},!1,e.evT)("keydown.b",function(s){return i.onPrevKey(s)},!1,e.evT)("keydown.ArrowDown",function(s){return i.onNextKey(s)},!1,e.evT)("keydown.ArrowRight",function(s){return i.onNextKey(s)},!1,e.evT)("keydown.n",function(s){return i.onNextKey(s)},!1,e.evT)},decls:10,vars:7,consts:[[1,"cc-center","full-with-and-height"],["viewportdiv",""],[4,"ngIf"],["class","height-60-px",4,"ngIf"],["class","width-100-per","touch","horizontal",3,"ngClass","click",4,"ngIf"],["appendOnly","","class","full-with-and-height","itemSize","50",4,"ngIf"],["aria-label","Toggle fullscreen mode","mat-icon-button","","type","button",1,"toggle-single-page-btn",3,"click"],[1,"height-60-px"],["touch","horizontal",1,"width-100-per",3,"ngClass","click"],["img",""],["appendOnly","","itemSize","50",1,"full-with-and-height"],["cdkVirtualScrollViewport",""],["style","width:100%;",3,"click",4,"cdkVirtualFor","cdkVirtualForOf"],[2,"width","100%",3,"click"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0,1),e.YNc(2,M,2,0,"div",2),e.YNc(3,Y,1,0,"div",3),e.YNc(4,Z,2,6,"img",4),e.YNc(5,A,2,3,"p",2),e.YNc(6,B,4,1,"cdk-virtual-scroll-viewport",5),e.TgZ(7,"button",6),e.NdJ("click",function(){return i.toggleSinglePage()}),e.YNc(8,R,2,0,"mat-icon",2),e.YNc(9,D,2,0,"mat-icon",2),e.qZA()()),2&t&&(e.xp6(2),e.Q6J("ngIf",!(null!=i.imageUrls&&i.imageUrls.length)),e.xp6(1),e.Q6J("ngIf",i.singlePage),e.xp6(1),e.Q6J("ngIf",i.singlePage),e.xp6(1),e.Q6J("ngIf",i.singlePage),e.xp6(1),e.Q6J("ngIf",!i.singlePage),e.xp6(2),e.Q6J("ngIf",!i.singlePage),e.xp6(1),e.Q6J("ngIf",i.singlePage))},dependencies:[d.mk,d.O5,w.lW,C.Hw,g.xd,g.x0,g.N7,I],styles:[".cc-center[_ngcontent-%COMP%]{overflow:auto}.cc-center[_ngcontent-%COMP%]   .full-with-and-height[_ngcontent-%COMP%]{width:100vw;height:100vh}.cc-center[_ngcontent-%COMP%]   .width-100-per[_ngcontent-%COMP%]{width:100%}.cc-center[_ngcontent-%COMP%]   .height-60-px[_ngcontent-%COMP%]{height:60px}.cc-center[_ngcontent-%COMP%]   .toggle-single-page-btn[_ngcontent-%COMP%]{background-color:#7a7a7a1a;position:fixed;top:12px;right:65px}.cc-center[_ngcontent-%COMP%]   .toggle-single-page-btn[_ngcontent-%COMP%]:hover{color:#e00034}.cc-center[_ngcontent-%COMP%]   .cc-fade-in-1[_ngcontent-%COMP%]{animation:fadein1 2s}@keyframes fadein1{0%{opacity:0}to{opacity:1}}.cc-center[_ngcontent-%COMP%]   .cc-fade-in-2[_ngcontent-%COMP%]{animation:fadein2 2s}@keyframes fadein2{0%{opacity:0}to{opacity:1}}"],changeDetection:0}),n})();const z=[{path:"view/:id",component:y}];let J=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({providers:[y],imports:[a.Bz.forChild(z),d.ez,w.ot,C.Ps,a.Bz,g.Cl,a.Bz]}),n})()}}]);