const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./introduction-BlZUzOuI.js","./jsx-runtime-DEdD30eg.js","./index-RYns6xqu.js","./index-CcnH5Kt0.js","./index-Ir6VfjOs.js","./index-D16Yfzz8.js","./index-D-8MO0q_.js","./index-B23dhaOI.js","./index-DrFu-skq.js","./MajAutocomplete.stories-IVva0eMl.js","./MajAvatar.stories-D87syUJZ.js","./MajAvatar-CGpDvdp4.css","./MajButton.stories-DbuhUjK1.js","./MajButton-CLT6sexB.css","./MajButtonGroup.stories-DWqhAxOJ.js","./MajCheckbox.stories-Cnp4_cqs.js","./MajIconButton.stories-DDURSZ6I.js","./MajRadioGroup.stories-ckfg3YxP.js","./MajRadioGroup-DPFpGeH_.css","./MajSelect.stories-CbHb0pql.js","./MajTextField.stories-Of2TlUBU.js","./MajToggle.stories-PNumtvtq.js","./MajToggle-BB8q6rDX.css","./entry-preview-BGwTW3Wf.js","./react-18-DBL1hgnh.js","./entry-preview-docs-D__W0D6w.js","./preview-BJPLiuSt.js","./preview-9hFJSo5S.js","./preview-DB9FwMii.js"])))=>i.map(i=>d[i]);
import"../sb-preview/runtime.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const _ of o.addedNodes)_.tagName==="LINK"&&_.rel==="modulepreload"&&a(_)}).observe(document,{childList:!0,subtree:!0});function c(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=c(e);fetch(e.href,o)}})();const R="modulepreload",f=function(r,s){return new URL(r,s).href},O={},t=function(s,c,a){let e=Promise.resolve();if(c&&c.length>0){const o=document.getElementsByTagName("link"),_=document.querySelector("meta[property=csp-nonce]"),p=(_==null?void 0:_.nonce)||(_==null?void 0:_.getAttribute("nonce"));e=Promise.all(c.map(i=>{if(i=f(i,a),i in O)return;O[i]=!0;const u=i.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(!!a)for(let m=o.length-1;m>=0;m--){const l=o[m];if(l.href===i&&(!u||l.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${d}`))return;const n=document.createElement("link");if(n.rel=u?"stylesheet":R,u||(n.as="script",n.crossOrigin=""),n.href=i,p&&n.setAttribute("nonce",p),document.head.appendChild(n),u)return new Promise((m,l)=>{n.addEventListener("load",m),n.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${i}`)))})}))}return e.then(()=>s()).catch(o=>{const _=new Event("vite:preloadError",{cancelable:!0});if(_.payload=o,window.dispatchEvent(_),!_.defaultPrevented)throw o})},{createBrowserChannel:y}=__STORYBOOK_MODULE_CHANNELS__,{addons:T}=__STORYBOOK_MODULE_PREVIEW_API__,E=y({page:"preview"});T.setChannel(E);window.__STORYBOOK_ADDONS_CHANNEL__=E;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=E);const L={"./src/storybook/introduction.mdx":async()=>t(()=>import("./introduction-BlZUzOuI.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8]),import.meta.url),"./src/storybook/stories/MajAutocomplete.stories.tsx":async()=>t(()=>import("./MajAutocomplete.stories-IVva0eMl.js"),__vite__mapDeps([9,1,2]),import.meta.url),"./src/storybook/stories/MajAvatar.stories.tsx":async()=>t(()=>import("./MajAvatar.stories-D87syUJZ.js"),__vite__mapDeps([10,1,2,11]),import.meta.url),"./src/storybook/stories/MajButton.stories.tsx":async()=>t(()=>import("./MajButton.stories-DbuhUjK1.js"),__vite__mapDeps([12,1,2,13]),import.meta.url),"./src/storybook/stories/MajButtonGroup.stories.tsx":async()=>t(()=>import("./MajButtonGroup.stories-DWqhAxOJ.js"),__vite__mapDeps([14,1,2]),import.meta.url),"./src/storybook/stories/MajCheckbox.stories.tsx":async()=>t(()=>import("./MajCheckbox.stories-Cnp4_cqs.js"),__vite__mapDeps([15,1,2]),import.meta.url),"./src/storybook/stories/MajIconButton.stories.tsx":async()=>t(()=>import("./MajIconButton.stories-DDURSZ6I.js"),__vite__mapDeps([16,1,2]),import.meta.url),"./src/storybook/stories/MajRadioGroup.stories.tsx":async()=>t(()=>import("./MajRadioGroup.stories-ckfg3YxP.js"),__vite__mapDeps([17,1,2,18]),import.meta.url),"./src/storybook/stories/MajSelect.stories.tsx":async()=>t(()=>import("./MajSelect.stories-CbHb0pql.js"),__vite__mapDeps([19,1,2]),import.meta.url),"./src/storybook/stories/MajTextField.stories.tsx":async()=>t(()=>import("./MajTextField.stories-Of2TlUBU.js"),__vite__mapDeps([20,1,2]),import.meta.url),"./src/storybook/stories/MajToggle.stories.tsx":async()=>t(()=>import("./MajToggle.stories-PNumtvtq.js"),__vite__mapDeps([21,1,2,22]),import.meta.url)};async function I(r){return L[r]()}const{composeConfigs:P,PreviewWeb:V,ClientApi:S}=__STORYBOOK_MODULE_PREVIEW_API__,D=async(r=[])=>{const s=await Promise.all([r.at(0)??t(()=>import("./entry-preview-BGwTW3Wf.js"),__vite__mapDeps([23,2,24,5]),import.meta.url),r.at(1)??t(()=>import("./entry-preview-docs-D__W0D6w.js"),__vite__mapDeps([25,7,2,8]),import.meta.url),r.at(2)??t(()=>import("./preview-BJPLiuSt.js"),__vite__mapDeps([26,6]),import.meta.url),r.at(3)??t(()=>import("./preview-DlPMigWa.js"),[],import.meta.url),r.at(4)??t(()=>import("./preview-Ct5NkTJf.js"),[],import.meta.url),r.at(5)??t(()=>import("./preview-9hFJSo5S.js"),__vite__mapDeps([27,8]),import.meta.url),r.at(6)??t(()=>import("./preview-BnWGZYux.js"),[],import.meta.url),r.at(7)??t(()=>import("./preview-Cdum89jS.js"),[],import.meta.url),r.at(8)??t(()=>import("./preview-DB9FwMii.js"),__vite__mapDeps([28,8]),import.meta.url),r.at(9)??t(()=>import("./preview-BpcF_O6y.js"),[],import.meta.url),r.at(10)??t(()=>import("./preview-gLmJTRpJ.js"),[],import.meta.url),r.at(11)??t(()=>import("./preview-C7IQ5mDU.js"),[],import.meta.url)]);return P(s)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new V(I,D);window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;export{t as _};
