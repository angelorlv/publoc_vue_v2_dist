import{s as i}from"./basecomponent.esm.MS1ObfXz.js";import{ac as o,o as s,c as t,ak as r,a}from"./entry.sPeV4ugY.js";var p={root:"p-progress-spinner",spinner:"p-progress-spinner-svg",circle:"p-progress-spinner-circle"},l=o.extend({name:"progressspinner",classes:p}),c={name:"BaseProgressSpinner",extends:i,props:{strokeWidth:{type:String,default:"2"},fill:{type:String,default:"none"},animationDuration:{type:String,default:"2s"}},style:l,provide:function(){return{$parentInstance:this}}},d={name:"ProgressSpinner",extends:c,computed:{svgStyle:function(){return{"animation-duration":this.animationDuration}}}},g=["fill","stroke-width"];function m(e,u,v,f,y,n){return s(),t("div",r({class:e.cx("root"),role:"progressbar"},e.ptm("root")),[(s(),t("svg",r({class:e.cx("spinner"),viewBox:"25 25 50 50",style:n.svgStyle},e.ptm("spinner")),[a("circle",r({class:e.cx("circle"),cx:"50",cy:"50",r:"20",fill:e.fill,"stroke-width":e.strokeWidth,strokeMiterlimit:"10"},e.ptm("circle")),null,16,g)],16))],16)}d.render=m;export{d as default};
