import{j as r}from"./jsx-runtime-DEdD30eg.js";import"./index-RYns6xqu.js";const c=e=>r.jsx("section",{className:"radio-group-wrapper "+((e==null?void 0:e.alignment)==="horizontal"?"horizontal-group":(e==null?void 0:e.alignment)==="vertical"?"vertical-group":"horizontal-group"),children:e.radioLists.map(d=>r.jsxs("div",{children:[r.jsx("input",{type:"radio",name:e==null?void 0:e.name}),r.jsx("label",{children:d})]}))});c.__docgenInfo={description:"",methods:[],displayName:"MajRadioGroup",props:{name:{required:!1,tsType:{name:"string"},description:""},radioLists:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},alignment:{required:!0,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:""}}};const g={title:"MajUi/MajRadioGroup",component:c},a={args:{name:"primary",radioLists:["2 Wheeler","4 Wheeler","6 Wheeler"],alignment:"horizontal"}},i={args:{name:"primary",radioLists:["2 Wheeler","4 Wheeler","6 Wheeler"],alignment:"vertical"}};var n,t,o;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    name: "primary",
    radioLists: ["2 Wheeler", "4 Wheeler", "6 Wheeler"],
    alignment: "horizontal"
  }
}`,...(o=(t=a.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};var l,s,m;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    name: "primary",
    radioLists: ["2 Wheeler", "4 Wheeler", "6 Wheeler"],
    alignment: "vertical"
  }
}`,...(m=(s=i.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};const W=["Horizontal","Vertical"];export{a as Horizontal,i as Vertical,W as __namedExportsOrder,g as default};
