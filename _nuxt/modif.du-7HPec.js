import M from"./inputtext.esm.WOKXVyy7.js";import P from"./dropdown.esm.PA4Yd-8v.js";import E from"./togglebutton.esm.bayCMj70.js";import F from"./button.esm.yOU7mbBk.js";import"./progressspinner.esm.-2pCrWRU.js";import{_ as j}from"./addByMap.LU4KUwtP.js";import{u as z}from"./useNotifToast.tXbUjrmB.js";import{s as A,r as u,G,H,h as O,q as Q,c as C,a as l,e as J,b as K,u as o,d as i,v as W,x as h,y as X,z as Y,o as g,p as Z,f as ee}from"./entry.sPeV4ugY.js";import{u as le}from"./global.JfHO2k1E.js";import{_ as se}from"./_plugin-vue_export-helper.x3n3nnut.js";import"./basecomponent.esm.MS1ObfXz.js";import"./baseicon.esm.7QbvKBS0.js";import"./index.esm.y5vHEM8V.js";import"./index.esm.ahttnF-b.js";import"./index.esm.zJBjtqpA.js";import"./index.esm.8qzpe_dP.js";import"./index.esm.Rcv_evjR.js";import"./overlayeventbus.esm.r3x2PMkt.js";import"./portal.esm.HI47vqaC.js";import"./virtualscroller.esm.JbfppkDt.js";import"./badge.esm.4D_NwcJ1.js";import"./geosearch.JHL0My60.js";const n=p=>(Z("data-v-8f4e24ee"),p=p(),ee(),p),oe={class:"mx-5 my-10"},te={class:"mb-10 border p-2 text-center bg-green-200/10"},ae={class:"uppercase"},ne={class:"flex flex-col border mb-5"},ie=n(()=>l("div",{class:"border-b border-dashed p-2"},[l("span",{class:"font-bold text-sm uppercase"}," Panneau ")],-1)),de={class:"flex flex-wrap p-2 border-b"},ue={class:"flex flex-col mr-5"},re=n(()=>l("span",{class:"text-sm"}," Référence ",-1)),pe={class:"flex flex-col mr-5"},ce=n(()=>l("span",{class:"text-sm"}," Surface ",-1)),me={class:"flex flex-col"},_e=n(()=>l("span",{class:"text-sm"}," Visuel Actuel ",-1)),fe={class:"flex flex-wrap p-2 items-end"},xe={class:"flex flex-col mr-5"},ve=n(()=>l("span",{class:"text-sm"}," Catégorie ",-1)),be={class:"flex flex-col mr-5"},Ve=n(()=>l("span",{class:"text-sm"}," Format ",-1)),he={class:"flex flex-col mr-5"},ge=n(()=>l("span",{class:"text-sm"}," Type de support ",-1)),we={class:"flex flex-col"},ye=n(()=>l("span",{class:"text-sm"}," Illuminé ",-1)),Ue={class:"flex flex-col border mb-5"},$e={class:"border-b border-dashed p-2 flex items-center"},Ce=n(()=>l("span",{class:"font-bold text-sm uppercase"}," Emplacement ",-1)),Ne=n(()=>l("span",{class:"flex-grow"},null,-1)),ke={class:"flex p-2 flex-wrap border-b"},Ie={class:"flex flex-col mr-5"},Re=n(()=>l("span",{class:"text-sm"}," Longitute ",-1)),Se={class:"flex flex-col mr-5"},qe=n(()=>l("span",{class:"text-sm"}," Latitude ",-1)),De={class:"flex flex-wrap p-2 border-b"},Be={class:"flex flex-col mr-5"},Te=n(()=>l("span",{class:"text-sm"}," Ville ",-1)),Le={class:"flex flex-col mr-5"},Me=n(()=>l("span",{class:"text-sm"}," Région ",-1)),Pe={class:"flex flex-col"},Ee=n(()=>l("span",{class:"text-sm"}," Quartier ",-1)),Fe={class:"flex p-2 flex-wrap border-b"},je={class:"flex flex-col mr-5"},ze=n(()=>l("span",{class:"text-sm"}," Lieu dit ",-1)),Ae={class:"flex flex-col mr-5"},Ge=n(()=>l("span",{class:"text-sm"}," Vue vers ",-1)),He={class:"flex flex-col border mb-5"},Oe=n(()=>l("div",{class:"border-b border-dashed p-2"},[l("span",{class:"font-bold text-sm uppercase"}," société ")],-1)),Qe={class:"flex p-2 flex-wrap border-b"},Je={class:"flex flex-col mr-5"},Ke=n(()=>l("span",{class:"text-sm"}," Régisseur ",-1)),We={class:"flex flex-col border mb-5"},Xe=n(()=>l("div",{class:"border-b border-dashed p-2"},[l("span",{class:"font-bold text-sm uppercase"}," Commune Urbaine ")],-1)),Ye={class:"flex p-2 flex-wrap border-b"},Ze={class:"flex flex-col mr-5"},el=n(()=>l("span",{class:"text-sm"}," Nom de la commune ",-1)),ll={key:0,class:"flex flex-wrap"},sl={class:"flex flex-col mr-5"},ol=n(()=>l("span",{class:"text-sm"}," Numéro d'autorisation ",-1)),tl={class:"flex flex-col mr-5"},al=n(()=>l("span",{class:"text-sm"}," Date de l'autorisation ",-1)),nl={class:"flex justify-end w-full"},il={__name:"modif",props:["heightHeader","prefix_api","heightContainer"],setup(p){const N=le(),{panel_impression_type:k}=A(N),c=p,{setErrorServer:f,setNotifToast:m}=z(),w=u([]),x=u([]),y=u([]),U=u([]),r=u(-1),s=u({pan_support:"aucun",pan_format:-1,lieu:{}}),b=u({});G();const I=H(),V=u(!1),v=u(!1);u(!1);async function R(){try{const a=await $fetch(`${c.prefix_api}/a/ad/panel/add/data-utils`);a.status?(w.value=a.categories,x.value=a.formats,y.value=a.regs,U.value=[{cu_id:-1,cu_label:"Sans Commune"},...a.cu]):m({detail:a.message,summary:"Données utiles pour ajout de panneau",severity:"error"})}catch{f()}}async function S(){try{V.value=!0;const a=await $fetch(`${c.prefix_api}/a/ad/panel`,{method:"put",body:s.value});a.status?(console.log(a),m({detail:"Panneau bien modifié",summary:"Modification de panneau",severity:"info"})):m({detail:a.message,summary:"Modification de panneau",severity:"error"})}catch{f()}V.value=!1}function q(a){v.value=!1,s.value.lieu.lat=a.lat,s.value.lieu.lng=a.lng,s.value.lieu.ville=a.ville,s.value.lieu.region=a.region,s.value.lieu.quartier=a.quartier}O(r,()=>{D()});async function D(){try{const a=await $fetch(`${c.prefix_api}/a/cat/formats/${r.value}`);a.status?(x.value=a.formats,r.value!=b.value.cat_id?s.value.pan_format=x.value[0].cat_id:s.value.pan_format=b.value.format_id):m({detail:a.message,summary:"Récupération des formats de panneau",severity:"error"})}catch{f()}}async function B(){try{const a=await $fetch(`${c.prefix_api}/a/ad/panel/${I.query.id}`);if(a.status){b.value=a.pan_infos.pan;let e=a.pan_infos.pan;s.value={pan_support:e.pan_support?e.pan_support:"aucun",pan_lumineux:e.pan_lumineux,publoc_ref:e.pan_publoc_ref,lieu:{id:e.lieu_id,ville:e.lieu_ville,region:e.lieu_region,quartier:e.lieu_quartier,label:e.lieu_label,pays:e.lieu_pays,view_vers:e.pan_view_vers,lng:e.lieu_lng,lat:e.lieu_lat},reg_id:e.reg_id,cu_id:e.cu_id,ref:e.pan_ref,surface:e.pan_surface,cu_id:e.pan_cu_id?-1:e.pan_cu_id,num_auth:e.pan_num_auth_cu,date_auth:e.pan_date_auth_cu,pan_format:e.format_id,pan_id:e.pan_id},r.value=e.cat_id}else m({detail:a.message,summary:"Récupération des données du panneau",severity:"error"})}catch(a){console.error(a),f()}}return Q(()=>{B(),R()}),(a,e)=>{const d=M,_=P,T=E,$=F,L=j;return g(),C("div",{class:"flex flex-col h-full overflow-auto",style:Y({height:`${c.heightContainer}px`})},[l("div",oe,[l("div",te,[l("span",ae,[J(" Modification du panneau "),l("strong",null,K(o(s).publoc_ref),1)])]),l("div",ne,[ie,l("div",de,[l("div",ue,[re,i(d,{modelValue:o(s).ref,"onUpdate:modelValue":e[0]||(e[0]=t=>o(s).ref=t),class:"p-2 text-sm w-[200px]"},null,8,["modelValue"])]),l("div",pe,[ce,i(d,{modelValue:o(s).surface,"onUpdate:modelValue":e[1]||(e[1]=t=>o(s).surface=t),class:"p-2 text-sm w-[200px]"},null,8,["modelValue"])]),l("div",me,[_e,i(d,{modelValue:o(s).visuel_actuel,"onUpdate:modelValue":e[2]||(e[2]=t=>o(s).visuel_actuel=t),class:"p-2 text-sm w-[300px]"},null,8,["modelValue"])])]),l("div",fe,[l("div",xe,[ve,i(_,{modelValue:o(r),"onUpdate:modelValue":e[3]||(e[3]=t=>W(r)?r.value=t:null),options:o(w),class:"dropdown-md","option-label":"cat_label","option-value":"cat_id"},null,8,["modelValue","options"])]),l("div",be,[Ve,i(_,{modelValue:o(s).pan_format,"onUpdate:modelValue":e[4]||(e[4]=t=>o(s).pan_format=t),options:o(x),class:"dropdown-md","option-label":"cat_label","option-value":"cat_id"},null,8,["modelValue","options"])]),l("div",he,[ge,i(_,{modelValue:o(s).pan_support,"onUpdate:modelValue":e[5]||(e[5]=t=>o(s).pan_support=t),options:o(k),class:"dropdown-md","option-label":"label","option-value":"code"},null,8,["modelValue","options"])]),l("div",we,[ye,i(T,{modelValue:o(s).pan_lumineux,"onUpdate:modelValue":e[6]||(e[6]=t=>o(s).pan_lumineux=t),onLabel:"Oui",offLabel:"Non",onIcon:"pi pi-check",offIcon:"pi pi-times",class:""},null,8,["modelValue"])])])]),l("div",Ue,[l("div",$e,[Ce,Ne,i($,{label:"Par carte",class:"p-button-sm p-1",icon:"pi pi-map-marker",text:"",onClick:e[7]||(e[7]=t=>v.value=!0)})]),l("div",ke,[l("div",Ie,[Re,i(d,{modelValue:o(s).lieu.lng,"onUpdate:modelValue":e[8]||(e[8]=t=>o(s).lieu.lng=t),class:"p-2 text-sm w-[300px]"},null,8,["modelValue"])]),l("div",Se,[qe,i(d,{modelValue:o(s).lieu.lat,"onUpdate:modelValue":e[9]||(e[9]=t=>o(s).lieu.lat=t),class:"p-2 text-sm w-[300px]"},null,8,["modelValue"])])]),l("div",De,[l("div",Be,[Te,i(d,{modelValue:o(s).lieu.ville,"onUpdate:modelValue":e[10]||(e[10]=t=>o(s).lieu.ville=t),class:"p-2 text-sm w-[200px]"},null,8,["modelValue"])]),l("div",Le,[Me,i(d,{modelValue:o(s).lieu.region,"onUpdate:modelValue":e[11]||(e[11]=t=>o(s).lieu.region=t),class:"p-2 text-sm w-[300px]"},null,8,["modelValue"])]),l("div",Pe,[Ee,i(d,{modelValue:o(s).lieu.quartier,"onUpdate:modelValue":e[12]||(e[12]=t=>o(s).lieu.quartier=t),class:"p-2 text-sm w-[300px]"},null,8,["modelValue"])])]),l("div",Fe,[l("div",je,[ze,i(d,{modelValue:o(s).lieu.label,"onUpdate:modelValue":e[13]||(e[13]=t=>o(s).lieu.label=t),class:"p-2 text-sm w-[300px]"},null,8,["modelValue"])]),l("div",Ae,[Ge,i(d,{modelValue:o(s).lieu.view_vers,"onUpdate:modelValue":e[14]||(e[14]=t=>o(s).lieu.view_vers=t),class:"p-2 text-sm w-[350px]"},null,8,["modelValue"])])])]),l("div",He,[Oe,l("div",Qe,[l("div",Je,[Ke,i(_,{filter:"",modelValue:o(s).reg_id,"onUpdate:modelValue":e[15]||(e[15]=t=>o(s).reg_id=t),options:o(y),class:"dropdown-md","option-label":"reg_label","option-value":"reg_id"},null,8,["modelValue","options"])])])]),l("div",We,[Xe,l("div",Ye,[l("div",Ze,[el,i(_,{modelValue:o(s).cu_id,"onUpdate:modelValue":e[16]||(e[16]=t=>o(s).cu_id=t),options:o(U),class:"dropdown-md","option-label":"cu_label","option-value":"cu_id"},null,8,["modelValue","options"])]),parseInt(o(s).cu_id)!=-1?(g(),C("div",ll,[l("div",sl,[ol,i(d,{modelValue:o(s).num_auth,"onUpdate:modelValue":e[17]||(e[17]=t=>o(s).num_auth=t),class:"p-2 text-sm w-[350px]",placeholder:"Numéro d'autorisation"},null,8,["modelValue"])]),l("div",tl,[al,i(d,{modelValue:o(s).date_auth,"onUpdate:modelValue":e[18]||(e[18]=t=>o(s).date_auth=t),type:"date",class:"p-2 text-sm w-[350px]",placeholder:"Date de l'autorisation"},null,8,["modelValue"])])])):h("",!0)])]),h("",!0),l("div",nl,[i($,{label:"Modifier Le panneau",class:"p-button-help",outlined:"",icon:"pi pi-pencil",onClick:S,loading:o(V)},null,8,["loading"])])]),o(v)?(g(),X(L,{key:0,old_lieu:o(s).lieu,onClose:e[20]||(e[20]=t=>v.value=!1),onValidate:q},null,8,["old_lieu","onValidate"])):h("",!0)],4)}}},Rl=se(il,[["__scopeId","data-v-8f4e24ee"]]);export{Rl as default};
