import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r as d}from"./index-Y0gaZlcC.js";const Y="_button_x7c9d_1",ee="_sm_x7c9d_28",ae="_md_x7c9d_37",re="_lg_x7c9d_46",te="_primary_x7c9d_56",ne="_disabled_x7c9d_61",se="_secondary_x7c9d_69",oe="_ghost_x7c9d_84",ie="_danger_x7c9d_97",le="_fullWidth_x7c9d_111",de="_loading_x7c9d_121",ce="_content_x7c9d_126",ue="_iconContainer_x7c9d_132",pe="_spinnerContainer_x7c9d_145",me="_spinner_x7c9d_145",ge="_spin_x7c9d_145",fe="_spinnerTrack_x7c9d_158",he="_spinnerHead_x7c9d_162",r={button:Y,sm:ee,md:ae,lg:re,primary:te,disabled:ne,secondary:se,ghost:oe,danger:ie,fullWidth:le,loading:de,content:ce,iconContainer:ue,spinnerContainer:pe,spinner:me,spin:ge,spinnerTrack:fe,spinnerHead:he},s=d.forwardRef(({children:e,variant:n="primary",size:o="md",isLoading:t=!1,isDisabled:c=!1,leftIcon:l,rightIcon:u,fullWidth:_=!1,className:b="",type:v="button",disabled:w,...J},Q)=>{const B=c||w||t,X=[r.button,r[n],r[o],t&&r.loading,B&&r.disabled,_&&r.fullWidth,b].filter(Boolean).join(" ");return a.jsxs("button",{ref:Q,type:v,className:X,disabled:B,"aria-disabled":B?"true":"false","aria-busy":t?"true":"false",...J,children:[t&&a.jsx("span",{className:r.spinnerContainer,"data-testid":"button-spinner",children:a.jsxs("svg",{className:r.spinner,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[a.jsx("circle",{className:r.spinnerTrack,cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),a.jsx("path",{className:r.spinnerHead,fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]})}),!t&&l&&a.jsx("span",{className:r.iconContainer,"data-testid":"left-icon-container",children:l}),a.jsx("span",{className:r.content,children:e}),!t&&u&&a.jsx("span",{className:r.iconContainer,"data-testid":"right-icon-container",children:u})]})});s.displayName="Button";s.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'ghost' | 'danger'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'ghost'"},{name:"literal",value:"'danger'"}]},description:`The visual style variant of the button.
@default 'primary'`,defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:`The size of the button controlling padding and font-size.
@default 'md'`,defaultValue:{value:"'md'",computed:!1}},isLoading:{required:!1,tsType:{name:"boolean"},description:`If true, shows a spinner loading indicator and disables user interaction.
@default false`,defaultValue:{value:"false",computed:!1}},isDisabled:{required:!1,tsType:{name:"boolean"},description:`If true, disables user interaction.
@default false`,defaultValue:{value:"false",computed:!1}},leftIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"An optional icon to display to the left of the button text."},rightIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"An optional icon to display to the right of the button text."},fullWidth:{required:!1,tsType:{name:"boolean"},description:`If true, the button will stretch to fill the width of its container.
@default false`,defaultValue:{value:"false",computed:!1}},className:{defaultValue:{value:"''",computed:!1},required:!1},type:{defaultValue:{value:"'button'",computed:!1},required:!1}}};/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xe=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),K=(...e)=>e.filter((n,o,t)=>!!n&&n.trim()!==""&&t.indexOf(n)===o).join(" ").trim();/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var ye={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _e=d.forwardRef(({color:e="currentColor",size:n=24,strokeWidth:o=2,absoluteStrokeWidth:t,className:c="",children:l,iconNode:u,..._},b)=>d.createElement("svg",{ref:b,...ye,width:n,height:n,stroke:e,strokeWidth:t?Number(o)*24/Number(n):o,className:K("lucide",c),..._},[...u.map(([v,w])=>d.createElement(v,w)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z=(e,n)=>{const o=d.forwardRef(({className:t,...c},l)=>d.createElement(_e,{ref:l,iconNode:n,className:K(`lucide-${xe(e)}`,t),...c}));return o.displayName=`${e}`,o};/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const be=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],ve=Z("ArrowRight",be);/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const we=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],Be=Z("Mail",we),ze={title:"Components/Button",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary","ghost","danger"]},size:{control:"select",options:["sm","md","lg"]},isLoading:{control:"boolean"},isDisabled:{control:"boolean"},fullWidth:{control:"boolean"}}},i={args:{children:"Button Text",variant:"primary",size:"md",isLoading:!1,isDisabled:!1,fullWidth:!1}},p={render:e=>a.jsxs("div",{style:{display:"flex",gap:"1rem",flexWrap:"wrap"},children:[a.jsx(s,{...e,variant:"primary",children:"Primary"}),a.jsx(s,{...e,variant:"secondary",children:"Secondary"}),a.jsx(s,{...e,variant:"ghost",children:"Ghost"}),a.jsx(s,{...e,variant:"danger",children:"Danger"})]})},m={render:e=>a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem",flexWrap:"wrap"},children:[a.jsx(s,{...e,size:"sm",children:"Small"}),a.jsx(s,{...e,size:"md",children:"Medium"}),a.jsx(s,{...e,size:"lg",children:"Large"})]})},g={args:{...i.args,isLoading:!0,children:"Loading Button"}},f={args:{...i.args,isDisabled:!0,children:"Disabled Button"}},h={args:{...i.args,leftIcon:a.jsx(Be,{size:16}),children:"Email Us"}},x={args:{...i.args,rightIcon:a.jsx(ve,{size:16}),children:"Get Started"}},y={args:{...i.args,fullWidth:!0,children:"Full Width Button"},decorators:[e=>a.jsx("div",{style:{width:"400px",padding:"1rem",border:"1px dashed #ccc"},children:a.jsx(e,{})})]};var j,W,z;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    children: 'Button Text',
    variant: 'primary',
    size: 'md',
    isLoading: false,
    isDisabled: false,
    fullWidth: false
  }
}`,...(z=(W=i.parameters)==null?void 0:W.docs)==null?void 0:z.source}}};var D,C,N;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap'
  }}>\r
      <Button {...args} variant="primary">Primary</Button>\r
      <Button {...args} variant="secondary">Secondary</Button>\r
      <Button {...args} variant="ghost">Ghost</Button>\r
      <Button {...args} variant="danger">Danger</Button>\r
    </div>
}`,...(N=(C=p.parameters)==null?void 0:C.docs)==null?void 0:N.source}}};var S,R,k;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    flexWrap: 'wrap'
  }}>\r
      <Button {...args} size="sm">Small</Button>\r
      <Button {...args} size="md">Medium</Button>\r
      <Button {...args} size="lg">Large</Button>\r
    </div>
}`,...(k=(R=m.parameters)==null?void 0:R.docs)==null?void 0:k.source}}};var I,T,L;g.parameters={...g.parameters,docs:{...(I=g.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    isLoading: true,
    children: 'Loading Button'
  }
}`,...(L=(T=g.parameters)==null?void 0:T.docs)==null?void 0:L.source}}};var q,A,V;f.parameters={...f.parameters,docs:{...(q=f.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    isDisabled: true,
    children: 'Disabled Button'
  }
}`,...(V=(A=f.parameters)==null?void 0:A.docs)==null?void 0:V.source}}};var E,M,H;h.parameters={...h.parameters,docs:{...(E=h.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    leftIcon: <Mail size={16} />,
    children: 'Email Us'
  }
}`,...(H=(M=h.parameters)==null?void 0:M.docs)==null?void 0:H.source}}};var $,F,G;x.parameters={...x.parameters,docs:{...($=x.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    rightIcon: <ArrowRight size={16} />,
    children: 'Get Started'
  }
}`,...(G=(F=x.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var O,P,U;y.parameters={...y.parameters,docs:{...(O=y.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    fullWidth: true,
    children: 'Full Width Button'
  },
  decorators: [Story => <div style={{
    width: '400px',
    padding: '1rem',
    border: '1px dashed #ccc'
  }}>\r
        <Story />\r
      </div>]
}`,...(U=(P=y.parameters)==null?void 0:P.docs)==null?void 0:U.source}}};const De=["Default","Variants","Sizes","Loading","Disabled","WithLeftIcon","WithRightIcon","FullWidth"];export{i as Default,f as Disabled,y as FullWidth,g as Loading,m as Sizes,p as Variants,h as WithLeftIcon,x as WithRightIcon,De as __namedExportsOrder,ze as default};
