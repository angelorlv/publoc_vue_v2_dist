import{s as i}from"./basecomponent.esm.MS1ObfXz.js";import{ac as s,o,c as a,ak as l}from"./entry.sPeV4ugY.js";var p={root:{position:"relative"}},d={root:function(r){var t=r.props;return["p-skeleton p-component",{"p-skeleton-circle":t.shape==="circle","p-skeleton-none":t.animation==="none"}]}},c=s.extend({name:"skeleton",classes:d,inlineStyles:p}),u={name:"BaseSkeleton",extends:i,props:{shape:{type:String,default:"rectangle"},size:{type:String,default:null},width:{type:String,default:"100%"},height:{type:String,default:"1rem"},borderRadius:{type:String,default:null},animation:{type:String,default:"wave"}},style:c,provide:function(){return{$parentInstance:this}}},h={name:"Skeleton",extends:u,computed:{containerStyle:function(){return this.size?{width:this.size,height:this.size,borderRadius:this.borderRadius}:{width:this.width,height:this.height,borderRadius:this.borderRadius}}}};function S(e,r,t,m,y,n){return o(),a("div",l({class:e.cx("root"),style:[e.sx("root"),n.containerStyle],"aria-hidden":"true"},e.ptm("root")),null,16)}h.render=S;export{h as default};
