const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./introduction-wDNEup4s.js","./jsx-runtime-DEdD30eg.js","./index-RYns6xqu.js","./index-CcnH5Kt0.js","./index-B8NRkvfk.js","./index-D16Yfzz8.js","./index-D-8MO0q_.js","./index-B23dhaOI.js","./index-DrFu-skq.js","./MajAutocomplete.stories-IVva0eMl.js","./MajAvatar.stories-D87syUJZ.js","./MajAvatar-CGpDvdp4.css","./MajButton.stories-DbuhUjK1.js","./MajButton-CLT6sexB.css","./MajButtonGroup.stories-DWqhAxOJ.js","./MajCheckbox.stories-Cnp4_cqs.js","./MajDatePicker.stories-C9BzhDh6.js","./MajDateTimePicker.stories-CkFcH68Z.js","./MajIconButton.stories-VvkpZjHo.js","./MajRadioGroup.stories-ckfg3YxP.js","./MajRadioGroup-DPFpGeH_.css","./MajRating.stories-BAXA8Kx1.js","./MajSelect.stories-CbHb0pql.js","./MajSlider.stories-BlogLpnD.js","./MajSwitch.stories-9t2BMBp2.js","./MajTextField.stories-BGvOPtY9.js","./MajTimePicker.stories-Ce1erwgk.js","./MajToggle.stories-BE3C1_XN.js","./MajToggle-BB8q6rDX.css","./MajTypography.stories-BRKFdXpy.js","./entry-preview-BGwTW3Wf.js","./react-18-DBL1hgnh.js","./entry-preview-docs-D__W0D6w.js","./preview-BJPLiuSt.js","./preview-9hFJSo5S.js","./preview-DB9FwMii.js"])))=>i.map(i=>d[i]);
import"../sb-preview/runtime.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const e of o)if(e.type==="childList")for(const s of e.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function c(o){const e={};return o.integrity&&(e.integrity=o.integrity),o.referrerPolicy&&(e.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?e.credentials="include":o.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function n(o){if(o.ep)return;o.ep=!0;const e=c(o);fetch(o.href,e)}})();const y="modulepreload",R=function(r,i){return new URL(r,i).href},O={},t=function(i,c,n){let o=Promise.resolve();if(c&&c.length>0){const e=document.getElementsByTagName("link"),s=document.querySelector("meta[property=csp-nonce]"),p=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));o=Promise.all(c.map(_=>{if(_=R(_,n),_ in O)return;O[_]=!0;const m=_.endsWith(".css"),d=m?'[rel="stylesheet"]':"";if(!!n)for(let u=e.length-1;u>=0;u--){const l=e[u];if(l.href===_&&(!m||l.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${_}"]${d}`))return;const a=document.createElement("link");if(a.rel=m?"stylesheet":y,m||(a.as="script",a.crossOrigin=""),a.href=_,p&&a.setAttribute("nonce",p),document.head.appendChild(a),m)return new Promise((u,l)=>{a.addEventListener("load",u),a.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${_}`)))})}))}return o.then(()=>i()).catch(e=>{const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=e,window.dispatchEvent(s),!s.defaultPrevented)throw e})},{createBrowserChannel:T}=__STORYBOOK_MODULE_CHANNELS__,{addons:f}=__STORYBOOK_MODULE_PREVIEW_API__,E=T({page:"preview"});f.setChannel(E);window.__STORYBOOK_ADDONS_CHANNEL__=E;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=E);const L={"./src/storybook/introduction.mdx":async()=>t(()=>import("./introduction-wDNEup4s.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8]),import.meta.url),"./src/storybook/stories/MajAutocomplete.stories.tsx":async()=>t(()=>import("./MajAutocomplete.stories-IVva0eMl.js"),__vite__mapDeps([9,1,2]),import.meta.url),"./src/storybook/stories/MajAvatar.stories.tsx":async()=>t(()=>import("./MajAvatar.stories-D87syUJZ.js"),__vite__mapDeps([10,1,2,11]),import.meta.url),"./src/storybook/stories/MajButton.stories.tsx":async()=>t(()=>import("./MajButton.stories-DbuhUjK1.js"),__vite__mapDeps([12,1,2,13]),import.meta.url),"./src/storybook/stories/MajButtonGroup.stories.tsx":async()=>t(()=>import("./MajButtonGroup.stories-DWqhAxOJ.js"),__vite__mapDeps([14,1,2]),import.meta.url),"./src/storybook/stories/MajCheckbox.stories.tsx":async()=>t(()=>import("./MajCheckbox.stories-Cnp4_cqs.js"),__vite__mapDeps([15,1,2]),import.meta.url),"./src/storybook/stories/MajDatePicker.stories.tsx":async()=>t(()=>import("./MajDatePicker.stories-C9BzhDh6.js"),__vite__mapDeps([16,1,2]),import.meta.url),"./src/storybook/stories/MajDateTimePicker.stories.tsx":async()=>t(()=>import("./MajDateTimePicker.stories-CkFcH68Z.js"),__vite__mapDeps([17,1,2]),import.meta.url),"./src/storybook/stories/MajIconButton.stories.tsx":async()=>t(()=>import("./MajIconButton.stories-VvkpZjHo.js"),__vite__mapDeps([18,1,2]),import.meta.url),"./src/storybook/stories/MajRadioGroup.stories.tsx":async()=>t(()=>import("./MajRadioGroup.stories-ckfg3YxP.js"),__vite__mapDeps([19,1,2,20]),import.meta.url),"./src/storybook/stories/MajRating.stories.tsx":async()=>t(()=>import("./MajRating.stories-BAXA8Kx1.js"),__vite__mapDeps([21,1,2]),import.meta.url),"./src/storybook/stories/MajSelect.stories.tsx":async()=>t(()=>import("./MajSelect.stories-CbHb0pql.js"),__vite__mapDeps([22,1,2]),import.meta.url),"./src/storybook/stories/MajSlider.stories.tsx":async()=>t(()=>import("./MajSlider.stories-BlogLpnD.js"),__vite__mapDeps([23,1,2]),import.meta.url),"./src/storybook/stories/MajSwitch.stories.tsx":async()=>t(()=>import("./MajSwitch.stories-9t2BMBp2.js"),__vite__mapDeps([24,1,2]),import.meta.url),"./src/storybook/stories/MajTextField.stories.tsx":async()=>t(()=>import("./MajTextField.stories-BGvOPtY9.js"),__vite__mapDeps([25,1,2]),import.meta.url),"./src/storybook/stories/MajTimePicker.stories.tsx":async()=>t(()=>import("./MajTimePicker.stories-Ce1erwgk.js"),__vite__mapDeps([26,1,2]),import.meta.url),"./src/storybook/stories/MajToggle.stories.tsx":async()=>t(()=>import("./MajToggle.stories-BE3C1_XN.js"),__vite__mapDeps([27,1,2,28]),import.meta.url),"./src/storybook/stories/MajTypography.stories.tsx":async()=>t(()=>import("./MajTypography.stories-BRKFdXpy.js"),__vite__mapDeps([29,1,2]),import.meta.url)};async function P(r){return L[r]()}const{composeConfigs:I,PreviewWeb:D,ClientApi:b}=__STORYBOOK_MODULE_PREVIEW_API__,V=async(r=[])=>{const i=await Promise.all([r.at(0)??t(()=>import("./entry-preview-BGwTW3Wf.js"),__vite__mapDeps([30,2,31,5]),import.meta.url),r.at(1)??t(()=>import("./entry-preview-docs-D__W0D6w.js"),__vite__mapDeps([32,7,2,8]),import.meta.url),r.at(2)??t(()=>import("./preview-BJPLiuSt.js"),__vite__mapDeps([33,6]),import.meta.url),r.at(3)??t(()=>import("./preview-BzNbq9Kh.js"),[],import.meta.url),r.at(4)??t(()=>import("./preview-Ct5NkTJf.js"),[],import.meta.url),r.at(5)??t(()=>import("./preview-9hFJSo5S.js"),__vite__mapDeps([34,8]),import.meta.url),r.at(6)??t(()=>import("./preview-BnWGZYux.js"),[],import.meta.url),r.at(7)??t(()=>import("./preview-Cdum89jS.js"),[],import.meta.url),r.at(8)??t(()=>import("./preview-DB9FwMii.js"),__vite__mapDeps([35,8]),import.meta.url),r.at(9)??t(()=>import("./preview-BpcF_O6y.js"),[],import.meta.url),r.at(10)??t(()=>import("./preview-gLmJTRpJ.js"),[],import.meta.url),r.at(11)??t(()=>import("./preview-C7IQ5mDU.js"),[],import.meta.url)]);return I(i)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new D(P,V);window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;export{t as _};
