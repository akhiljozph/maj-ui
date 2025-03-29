import{j as e}from"./jsx-runtime-DEdD30eg.js";import{l as A}from"./circle-user-Ivu25-oO.js";import"./index-RYns6xqu.js";const u=a=>{const T=e.jsx("span",{className:"maj-avatar-initial",children:a==null?void 0:a.initial}),j=e.jsx("img",{className:"maj-avatar-icon",src:A,alt:"svg"}),y=e.jsx("img",{src:a==null?void 0:a.avatarURL,alt:a==null?void 0:a.avatarALT});return e.jsx(e.Fragment,{children:e.jsx("div",{className:"maj-avatar-container",children:e.jsx("div",{className:"maj-avatar",children:a.avatarType==="initial"?T:a.avatarType==="image"?y:j})})})};u.__docgenInfo={description:"",methods:[],displayName:"MajAvatar",props:{avatarURL:{required:!1,tsType:{name:"string"},description:""},avatarALT:{required:!1,tsType:{name:"string"},description:""},avatarType:{required:!0,tsType:{name:"union",raw:'"image" | "initial" | "icon"',elements:[{name:"literal",value:'"image"'},{name:"literal",value:'"initial"'},{name:"literal",value:'"icon"'}]},description:""},initial:{required:!1,tsType:{name:"string"},description:""}}};const h={title:"MajUi/MajAvatar",component:u},t={args:{avatarType:"icon"}},i={args:{avatarType:"image",avatarALT:"img"}},r={args:{avatarType:"initial",initial:"AJ"}};var n,s,m;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    avatarType: "icon"
  }
}`,...(m=(s=t.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};var c,o,l;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    avatarType: "image",
    avatarALT: "img"
  }
}`,...(l=(o=i.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};var v,d,g;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    avatarType: "initial",
    initial: "AJ"
  }
}`,...(g=(d=r.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};const f=["Icon","Image","Initial"];export{t as Icon,i as Image,r as Initial,f as __namedExportsOrder,h as default};
