import{j as l}from"./jsx-runtime-DEdD30eg.js";import{r as n}from"./index-RYns6xqu.js";const m=e=>{const[a,g]=n.useState(1),[o,r]=n.useState(!1);return l.jsx("section",{className:"maj-toggle",children:e!=null&&e.toggleOneLabel&&(e!=null&&e.toggleTwoLabel)?l.jsxs(l.Fragment,{children:[l.jsx("button",{className:"maj-toggle-btn maj-toggle-one "+(a===1?"maj-toggle-active":""),onClick:()=>g(1),children:l.jsx("label",{className:"maj-toggle-label",children:e==null?void 0:e.toggleOneLabel})}),l.jsx("button",{className:"maj-toggle-btn maj-toggle-two "+(a===2?"maj-toggle-active":""),onClick:()=>g(2),children:l.jsx("label",{className:"maj-toggle-label",children:e==null?void 0:e.toggleTwoLabel})})]}):l.jsx("button",{className:"maj-default-toggle "+(o?"toggle-end-align":"toggle-start-align"),onClick:()=>{r(!o)},children:l.jsx("span",{className:"maj-toggle-action"})})})};m.__docgenInfo={description:"",methods:[],displayName:"MajToggle",props:{toggleOneLabel:{required:!1,tsType:{name:"string"},description:""},toggleTwoLabel:{required:!1,tsType:{name:"string"},description:""}}};const b={title:"MajUi/MajToggle",component:m},t={args:{toggleOneLabel:"Yearly",toggleTwoLabel:"Monthly"}};var s,c,i;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    toggleOneLabel: "Yearly",
    toggleTwoLabel: "Monthly"
  }
}`,...(i=(c=t.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};const T=["ToggleWithLabel"];export{t as ToggleWithLabel,T as __namedExportsOrder,b as default};
