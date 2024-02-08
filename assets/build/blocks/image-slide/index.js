(()=>{"use strict";var e,t={955:(e,t,i)=>{const l=window.wp.blocks,r=window.React,a=window.wp.blockEditor,n=window.wp.components,s=window.wp.apiFetch;var o=i.n(s);const c=JSON.parse('{"u2":"hotel-theme/image-slide"}');(0,l.registerBlockType)(c.u2,{attributes:{imgID:{type:"string",default:""},imgURL:{type:"string",default:""}},edit:function(e){const t=(0,a.useBlockProps)({className:"swiper-slide"});return(0,r.createElement)(r.Fragment,null,(0,r.createElement)(a.InspectorControls,null,(0,r.createElement)(n.PanelBody,{title:"Image",initialOpen:!0},(0,r.createElement)(n.PanelRow,null,(0,r.createElement)(a.MediaUploadCheck,null,(0,r.createElement)(a.MediaUpload,{onSelect:function(t){e.setAttributes({imgID:t.id}),async function(){const i=await o()({path:`/wp/v2/media/${t.id}`,method:"GET"});e.setAttributes({imgURL:i.media_details.sizes.large.source_url})}()},value:e.attributes.imgID,render:({open:e})=>(0,r.createElement)(n.Button,{onClick:e},"Select Image")}))))),(0,r.createElement)("div",{...t},e.attributes.imgURL?(0,r.createElement)("img",{src:e.attributes.imgURL}):(0,r.createElement)("div",null,(0,r.createElement)("p",null,"IMAGE SLIDE BLOCK"),(0,r.createElement)("p",{class:"wp-block-hotel-theme-image-slide__caption"},"Select image in settings on the right"))))},save:function(e){const t=a.useBlockProps.save({className:"swiper-slide htl-image-slide"});return(0,r.createElement)("div",{...t},e.attributes.imgURL?(0,r.createElement)("div",{className:"htl-image-slide__container"},(0,r.createElement)("img",{src:e.attributes.imgURL,className:"htl-image-slide__image"})):(0,r.createElement)("p",null,"No image selected"))}})}},i={};function l(e){var r=i[e];if(void 0!==r)return r.exports;var a=i[e]={exports:{}};return t[e](a,a.exports,l),a.exports}l.m=t,e=[],l.O=(t,i,r,a)=>{if(!i){var n=1/0;for(m=0;m<e.length;m++){for(var[i,r,a]=e[m],s=!0,o=0;o<i.length;o++)(!1&a||n>=a)&&Object.keys(l.O).every((e=>l.O[e](i[o])))?i.splice(o--,1):(s=!1,a<n&&(n=a));if(s){e.splice(m--,1);var c=r();void 0!==c&&(t=c)}}return t}a=a||0;for(var m=e.length;m>0&&e[m-1][2]>a;m--)e[m]=e[m-1];e[m]=[i,r,a]},l.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return l.d(t,{a:t}),t},l.d=(e,t)=>{for(var i in t)l.o(t,i)&&!l.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={707:0,205:0};l.O.j=t=>0===e[t];var t=(t,i)=>{var r,a,[n,s,o]=i,c=0;if(n.some((t=>0!==e[t]))){for(r in s)l.o(s,r)&&(l.m[r]=s[r]);if(o)var m=o(l)}for(t&&t(i);c<n.length;c++)a=n[c],l.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return l.O(m)},i=globalThis.webpackChunkhotel_list=globalThis.webpackChunkhotel_list||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))})();var r=l.O(void 0,[205],(()=>l(955)));r=l.O(r)})();