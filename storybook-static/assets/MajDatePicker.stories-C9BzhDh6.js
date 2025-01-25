import{j as t}from"./jsx-runtime-DEdD30eg.js";import"./index-RYns6xqu.js";const g=s=>t.jsx("section",{children:t.jsx("input",{type:"date",name:"maj-date-picker",id:"maj-date-picker",min:s.minimumValue,max:s.maximumValue})});g.__docgenInfo={description:"",methods:[],displayName:"MajDatePicker",props:{minimumValue:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:""},maximumValue:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:""}}};const S={title:"MajUi/MajDatePicker",component:g},e={args:{}},a={args:{minimumValue:new Date().toISOString().slice(0,16)}},r={args:{maximumValue:new Date().toISOString().slice(0,16)}};var n,i,m;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {}
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var o,u,c;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    minimumValue: new Date().toISOString().slice(0, 16)
  }
}`,...(c=(u=a.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var d,l,p;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    maximumValue: new Date().toISOString().slice(0, 16)
  }
}`,...(p=(l=r.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const j=["Default","PreviousDatesDisabled","FutureDatesDisabled"];export{e as Default,r as FutureDatesDisabled,a as PreviousDatesDisabled,j as __namedExportsOrder,S as default};
