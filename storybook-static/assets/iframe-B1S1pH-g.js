const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./introduction-DwL00hLn.js","./jsx-runtime-DEdD30eg.js","./index-RYns6xqu.js","./index-CcnH5Kt0.js","./index-DtubjvYI.js","./index-D16Yfzz8.js","./index-D-8MO0q_.js","./index-B23dhaOI.js","./index-DrFu-skq.js","./MajAutocomplete.stories-IVva0eMl.js","./MajAvatar.stories-D87syUJZ.js","./MajAvatar-CGpDvdp4.css","./MajButton.stories-zWQAc2M2.js","./MajButton-CLT6sexB.css","./MajButtonGroup.stories-DWqhAxOJ.js","./MajIconButton.stories-VvkpZjHo.js","./entry-preview-BGwTW3Wf.js","./react-18-DBL1hgnh.js","./entry-preview-docs-D__W0D6w.js","./preview-BJPLiuSt.js","./preview-9hFJSo5S.js","./preview-DB9FwMii.js"])))=>i.map(i=>d[i]);
import"../sb-preview/runtime.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const _ of o.addedNodes)_.tagName==="LINK"&&_.rel==="modulepreload"&&a(_)}).observe(document,{childList:!0,subtree:!0});function c(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=c(e);fetch(e.href,o)}})();const f="modulepreload",R=function(t,i){return new URL(t,i).href},p={},r=function(i,c,a){let e=Promise.resolve();if(c&&c.length>0){const o=document.getElementsByTagName("link"),_=document.querySelector("meta[property=csp-nonce]"),O=(_==null?void 0:_.nonce)||(_==null?void 0:_.getAttribute("nonce"));e=Promise.all(c.map(s=>{if(s=R(s,a),s in p)return;p[s]=!0;const u=s.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(!!a)for(let l=o.length-1;l>=0;l--){const m=o[l];if(m.href===s&&(!u||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${d}`))return;const n=document.createElement("link");if(n.rel=u?"stylesheet":f,u||(n.as="script",n.crossOrigin=""),n.href=s,O&&n.setAttribute("nonce",O),document.head.appendChild(n),u)return new Promise((l,m)=>{n.addEventListener("load",l),n.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${s}`)))})}))}return e.then(()=>i()).catch(o=>{const _=new Event("vite:preloadError",{cancelable:!0});if(_.payload=o,window.dispatchEvent(_),!_.defaultPrevented)throw o})},{createBrowserChannel:T}=__STORYBOOK_MODULE_CHANNELS__,{addons:L}=__STORYBOOK_MODULE_PREVIEW_API__,E=T({page:"preview"});L.setChannel(E);window.__STORYBOOK_ADDONS_CHANNEL__=E;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=E);const y={"./src/storybook/introduction.mdx":async()=>r(()=>import("./introduction-DwL00hLn.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8]),import.meta.url),"./src/storybook/stories/MajAutocomplete.stories.tsx":async()=>r(()=>import("./MajAutocomplete.stories-IVva0eMl.js"),__vite__mapDeps([9,1,2]),import.meta.url),"./src/storybook/stories/MajAvatar.stories.tsx":async()=>r(()=>import("./MajAvatar.stories-D87syUJZ.js"),__vite__mapDeps([10,1,2,11]),import.meta.url),"./src/storybook/stories/MajButton.stories.tsx":async()=>r(()=>import("./MajButton.stories-zWQAc2M2.js"),__vite__mapDeps([12,1,2,13]),import.meta.url),"./src/storybook/stories/MajButtonGroup.stories.tsx":async()=>r(()=>import("./MajButtonGroup.stories-DWqhAxOJ.js"),__vite__mapDeps([14,1,2]),import.meta.url),"./src/storybook/stories/MajIconButton.stories.tsx":async()=>r(()=>import("./MajIconButton.stories-VvkpZjHo.js"),__vite__mapDeps([15,1,2]),import.meta.url)};async function I(t){return y[t]()}const{composeConfigs:P,PreviewWeb:V,ClientApi:A}=__STORYBOOK_MODULE_PREVIEW_API__,D=async(t=[])=>{const i=await Promise.all([t.at(0)??r(()=>import("./entry-preview-BGwTW3Wf.js"),__vite__mapDeps([16,2,17,5]),import.meta.url),t.at(1)??r(()=>import("./entry-preview-docs-D__W0D6w.js"),__vite__mapDeps([18,7,2,8]),import.meta.url),t.at(2)??r(()=>import("./preview-BJPLiuSt.js"),__vite__mapDeps([19,6]),import.meta.url),t.at(3)??r(()=>import("./preview-D8FCPWU6.js"),[],import.meta.url),t.at(4)??r(()=>import("./preview-Ct5NkTJf.js"),[],import.meta.url),t.at(5)??r(()=>import("./preview-9hFJSo5S.js"),__vite__mapDeps([20,8]),import.meta.url),t.at(6)??r(()=>import("./preview-BnWGZYux.js"),[],import.meta.url),t.at(7)??r(()=>import("./preview-Cdum89jS.js"),[],import.meta.url),t.at(8)??r(()=>import("./preview-DB9FwMii.js"),__vite__mapDeps([21,8]),import.meta.url),t.at(9)??r(()=>import("./preview-BpcF_O6y.js"),[],import.meta.url),t.at(10)??r(()=>import("./preview-gLmJTRpJ.js"),[],import.meta.url),t.at(11)??r(()=>import("./preview-C7IQ5mDU.js"),[],import.meta.url)]);return P(i)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new V(I,D);window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;export{r as _};