import{j as a}from"./jsx-runtime-DEdD30eg.js";import{r}from"./index-RYns6xqu.js";const L=e=>{const[o,s]=r.useState(1),[n,x]=r.useState(!1);return a.jsx("section",{className:"maj-toggle",children:e!=null&&e.toggleOneLabel&&(e!=null&&e.toggleTwoLabel)?a.jsxs(a.Fragment,{children:[a.jsx("button",{className:"maj-toggle-btn maj-toggle-one "+(o===1?"maj-toggle-active":""),onClick:()=>s(1),children:a.jsx("label",{className:"maj-toggle-label",children:e==null?void 0:e.toggleOneLabel})}),a.jsx("button",{className:"maj-toggle-btn maj-toggle-two "+(o===2?"maj-toggle-active":""),onClick:()=>s(2),children:a.jsx("label",{className:"maj-toggle-label",children:e==null?void 0:e.toggleTwoLabel})})]}):a.jsx("button",{className:"maj-default-toggle "+(n?"toggle-end-align":"toggle-start-align"),onClick:()=>{x(!n)},children:a.jsx("span",{className:"maj-toggle-action"})})})};L.__docgenInfo={description:"",methods:[],displayName:"MajToggle",props:{toggleOneLabel:{required:!1,tsType:{name:"string"},description:""},toggleTwoLabel:{required:!1,tsType:{name:"string"},description:""}}};const y={title:"MajUi/MajToggle",component:L},t={args:{toggleOneLabel:"Yearly",toggleTwoLabel:"Monthly"}},l={args:{}},g={args:{}};var c,i,m;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    toggleOneLabel: "Yearly",
    toggleTwoLabel: "Monthly"
  }
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var d,j,b;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {}
}`,...(b=(j=l.parameters)==null?void 0:j.docs)==null?void 0:b.source}}};var u,T,h;g.parameters={...g.parameters,docs:{...(u=g.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {}
}`,...(h=(T=g.parameters)==null?void 0:T.docs)==null?void 0:h.source}}};const w=["ToggleWithLabel","ToggleWithoutLabel","ToggleWithIcon"];export{g as ToggleWithIcon,t as ToggleWithLabel,l as ToggleWithoutLabel,w as __namedExportsOrder,y as default};