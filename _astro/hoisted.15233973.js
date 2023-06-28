import{h as T}from"./http.20668c64.js";import{i as y}from"./jwt.f0e0aa9c.js";import{b,u as $,r as C,a as L}from"./resource-progress.e020b4b4.js";import{p as I}from"./page.e7291a86.js";import{s as S}from"./popup.a359f713.js";import"./hoisted.f20c5626.js";function E(c){let t=c>>16&255,e=c>>8&255,r=c&255;return`rgb(${t},${e},${r})`}function d(c,t={},e){let r=document.createElementNS("http://www.w3.org/2000/svg",c);for(let s in t)t.hasOwnProperty(s)&&r.setAttribute(s,t[s]);return e&&e.appendChild(r),r}const f=2.7,R=4,P=2,v={black:["#000"],gray:["#000","#333","#666","#999","#ccc","#ddd","#eee"],white:["#fff"],red:["#cf2a27","#ea9999","#eo6666","#cc0000","#990000","#660000"],orange:["#ff9900","#f9cb9c","#f6b26b","#e69138","#b45f06","#783f04"],yellow:["#ffff00","#ffe599","#ffd966","#f1c232","#bf9000","#7f6000"],green:["#009e0f","#b6d7a8","#93c47d","#6aa84f","#38761d","#274e13"],cyan:["#00ffff","#a2c4c9","#76a5af","#45818e","#134f5c","#0c343d"],blue:["#2b78e4","#9fc5f8","#6fa8dc","#597eaa","#085394","#073763"],purple:["#9900ff","#b4a7d6","#8e7cc3","#674ea7","#351c75","#20124d"],pink:["#ff00ff","#d5a6bd","#c27ba0","#a64d79","#741b47","#4c1130"]};class j{constructor(t,e){this.svgRoot=t,this.fontFamily=e,this.canvasRenderingContext2D=document.createElement("canvas").getContext("2d")}render(t,e){let r=t.typeID;r in this?this[r](t,e):console.log(`'${r}' control type not implemented`)}parseColor(t,e){return t===void 0?`rgb(${e})`:E(t)}parseFontProperties(t){var e,r,s;return{style:(e=t.properties)!=null&&e.italic?"italic":"normal",weight:(r=t.properties)!=null&&r.bold?"bold":"normal",size:(s=t.properties)!=null&&s.size?t.properties.size+"px":"13px",family:this.fontFamily}}measureText(t,e){return this.canvasRenderingContext2D.font=e,this.canvasRenderingContext2D.measureText(t)}drawRectangle(t,e){var r,s,n;d("rect",{x:parseInt(t.x)+f/2,y:parseInt(t.y)+f/2,width:parseInt(t.w??t.measuredW)-f,height:parseInt(t.h??t.measuredH)-f,rx:P,fill:this.parseColor((r=t.properties)==null?void 0:r.color,"255,255,255"),"fill-opacity":((s=t.properties)==null?void 0:s.backgroundAlpha)??1,stroke:this.parseColor((n=t.properties)==null?void 0:n.borderColor,"0,0,0"),"stroke-width":f},e)}addText(t,e,r,s){let n=t.properties.text??"",o=parseInt(t.x),i=parseInt(t.y),a=this.parseFontProperties(t),l=this.measureText(n,`${a.style} ${a.weight} ${a.size} ${a.family}`),p=s==="center"?o+(t.w??t.measuredW)/2-l.width/2:o,g=i+t.measuredH/2+l.actualBoundingBoxAscent/2,h=d("text",{x:p,y:g,fill:r,"font-style":a.style,"font-weight":a.weight,"font-size":a.size},e);if(!n.includes("{color:")){let m=d("tspan",{},h);m.textContent=n;return}n.split(/{color:|{color}/).forEach(m=>{if(m.includes("}")){let[u,x]=m.split("}");if(!u.startsWith("#")){let w=parseInt(u.slice(-1));u=isNaN(w)?v[u][0]:v[u][w]}let k=d("tspan",{fill:u},h);k.textContent=x}else{let u=d("tspan",{},h);u.textContent=m}})}TextArea(t,e){this.drawRectangle(t,e)}Canvas(t,e){this.drawRectangle(t,e)}Label(t,e){var r;this.addText(t,e,this.parseColor((r=t.properties)==null?void 0:r.color,"0,0,0"),"left")}TextInput(t,e){var r;this.drawRectangle(t,e),this.addText(t,e,this.parseColor((r=t.properties)==null?void 0:r.textColor,"0,0,0"),"center")}Arrow(t,e){var r,s,n;let o=parseInt(t.x),i=parseInt(t.y),{p0:a,p1:l,p2:p}=t.properties,g;((r=t.properties)==null?void 0:r.stroke)==="dotted"?g="0.8 12":((s=t.properties)==null?void 0:s.stroke)==="dashed"&&(g="28 46");let h={x:(p.x-a.x)*l.x,y:(p.y-a.y)*l.x};d("path",{d:`M${o+a.x} ${i+a.y}Q${o+a.x+h.x+h.y*l.y*3.6} ${i+a.y+h.y+-h.x*l.y*3.6} ${o+p.x} ${i+p.y}`,fill:"none",stroke:this.parseColor((n=t.properties)==null?void 0:n.color,"0,0,0"),"stroke-width":R,"stroke-linecap":"round","stroke-linejoin":"round","stroke-dasharray":g},e)}Icon(t,e){var r;let s=parseInt(t.x),n=parseInt(t.y),o=10;d("circle",{cx:s+o,cy:n+o,r:o,fill:this.parseColor((r=t.properties)==null?void 0:r.color,"0,0,0")},e),t.properties.icon.ID==="check-circle"&&d("path",{d:`M${s+4.5} ${n+o}L${s+8.5} ${n+o+4} ${s+15} ${n+o-2.5}`,fill:"none",stroke:"#fff","stroke-width":3.5,"stroke-linecap":"round","stroke-linejoin":"round"},e)}HRule(t,e){var r,s,n;let o=parseInt(t.x),i=parseInt(t.y),a;((r=t.properties)==null?void 0:r.stroke)==="dotted"?a="0.8, 8":((s=t.properties)==null?void 0:s.stroke)==="dashed"&&(a="18, 30"),d("path",{d:`M${o} ${i}L${o+parseInt(t.w??t.measuredW)} ${i}`,fill:"none",stroke:this.parseColor((n=t.properties)==null?void 0:n.color,"0,0,0"),"stroke-width":f,"stroke-linecap":"round","stroke-linejoin":"round","stroke-dasharray":a},e)}__group__(t,e){var r;const s=((r=t?.properties)==null?void 0:r.controlName)||"";let n=d("g",{...s?{class:"clickable-group","data-group-id":s}:{}},e);t.children.controls.control.sort((o,i)=>o.zOrder-i.zOrder).forEach(o=>{o.x=parseInt(o.x,10)+parseInt(t.x,10),o.y=parseInt(o.y,10)+parseInt(t.y,10),this.render(o,n)})}}async function M(c,t={}){if(t={padding:5,fontFamily:"balsamiq",fontURL:"https://fonts.gstatic.com/s/balsamiqsans/v3/P5sEzZiAbNrN8SB3lQQX7Pncwd4XIA.woff2",...t},t.fontURL){let l=new FontFace(t.fontFamily,`url(${t.fontURL})`);await l.load(),document.fonts.add&&document.fonts.add(l)}let e=c.mockup,r=e.measuredW-e.mockupW-t.padding,s=e.measuredH-e.mockupH-t.padding,n=parseInt(e.mockupW)+t.padding*2,o=parseInt(e.mockupH)+t.padding*2,i=d("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:`${r} ${s} ${n} ${o}`,style:"font-family: balsamiq"}),a=new j(i,t.fontFamily);return e.controls.control.sort((l,p)=>l.zOrder-p.zOrder).forEach(l=>{a.render(l,i)}),i}class D{resourceId;resourceType;jsonUrl;loaderHTML;containerId;loaderId;constructor(){this.resourceId="",this.resourceType="",this.jsonUrl="",this.loaderHTML=null,this.containerId="resource-svg-wrap",this.loaderId="resource-loader",this.init=this.init.bind(this),this.onDOMLoaded=this.onDOMLoaded.bind(this),this.jsonToSvg=this.jsonToSvg.bind(this),this.handleSvgClick=this.handleSvgClick.bind(this),this.handleSvgRightClick=this.handleSvgRightClick.bind(this),this.prepareConfig=this.prepareConfig.bind(this),this.switchRoadmap=this.switchRoadmap.bind(this),this.updateTopicStatus=this.updateTopicStatus.bind(this)}get loaderEl(){return document.getElementById(this.loaderId)}get containerEl(){return document.getElementById(this.containerId)}prepareConfig(){if(!this.containerEl)return!1;this.loaderHTML=this.loaderEl.innerHTML;const t=this.containerEl.dataset;return this.resourceType=t.resourceType,this.resourceId=t.resourceId,!0}jsonToSvg(t){return t?this.containerEl?(this.containerEl.innerHTML=this.loaderHTML,fetch(t).then(e=>e.json()).then(e=>M(e,{fontURL:"/fonts/balsamiq.woff2"})).then(e=>{this.containerEl?.replaceChildren(e)}).then(()=>b(this.resourceType,this.resourceId)).catch(e=>{if(!this.containerEl)return;const r=`
          <strong>There was an error.</strong><br>
          
          Try loading the page again. or submit an issue on GitHub with following:<br><br>

          ${e.message} <br /> ${e.stack}
        `;this.containerEl.innerHTML=`<div class="error py-5 text-center text-red-600 mx-auto">${r}</div>`})):null:(console.error("jsonUrl not defined in frontmatter"),null)}trackVisit(){y()&&window.setTimeout(()=>{T("https://api.roadmap.sh/v1-visit",{resourceId:this.resourceId,resourceType:this.resourceType}).then(()=>null)},0)}onDOMLoaded(){if(!this.prepareConfig())return;const e=new URLSearchParams(window.location.search).get("r");this.trackVisit(),e?this.switchRoadmap(`/${e}.json`):this.jsonToSvg(this.resourceType==="roadmap"?`/${this.resourceId}.json`:`/best-practices/${this.resourceId}.json`)}switchRoadmap(t){this.containerEl?.setAttribute("style","");const e=t.split("/").pop()?.replace(".json","");if(window?.history?.pushState){const r=new URL(window.location.href),s=this.resourceType[0];r.searchParams.delete(s),e!==this.resourceId&&r.searchParams.set(s,e),window.history.pushState(null,"",r.toString())}this.jsonToSvg(t)?.then(()=>{})}updateTopicStatus(t,e){if(!y()){S();return}I.set("Updating progress"),$({resourceId:this.resourceId,resourceType:this.resourceType,topicId:t},e).then(()=>{C(t,e),L()}).catch(r=>{alert("Something went wrong, please try again."),console.error(r)}).finally(()=>{I.set("")})}handleSvgRightClick(t){const e=t.target?.closest("g")||{},r=e.dataset?e.dataset.groupId:"";if(!r)return;t.preventDefault();const s=e.classList.contains("done"),n=r.replace(/^\d+-/,"");this.updateTopicStatus(n,s?"pending":"done")}handleSvgClick(t){const e=t.target?.closest("g")||{},r=e.dataset?e.dataset.groupId:"";if(!r)return;if(t.stopImmediatePropagation(),/^ext_link/.test(r)){const i=r.replace("ext_link:","");i.startsWith("roadmap.sh")||window.fireEvent({category:"RoadmapExternalLink",action:`${this.resourceType} / ${this.resourceId}`,label:i}),window.open(`https://${i}`);return}if(/^json:/.test(r)){const i=r.replace("json:","");this.switchRoadmap(i);return}if(/^check:/.test(r)){window.dispatchEvent(new CustomEvent(`${this.resourceType}.topic.toggle`,{detail:{topicId:r.replace("check:",""),resourceType:this.resourceType,resourceId:this.resourceId}}));return}const s=r.replace(/^\d+-/,""),n=e.classList.contains("learning"),o=e.classList.contains("skipped");if(t.shiftKey){t.preventDefault(),this.updateTopicStatus(s,n?"pending":"learning");return}if(t.altKey){t.preventDefault(),this.updateTopicStatus(s,o?"pending":"skipped");return}window.dispatchEvent(new CustomEvent(`${this.resourceType}.topic.click`,{detail:{topicId:s,resourceId:this.resourceId,resourceType:this.resourceType}}))}init(){window.addEventListener("DOMContentLoaded",this.onDOMLoaded),window.addEventListener("click",this.handleSvgClick),window.addEventListener("contextmenu",this.handleSvgRightClick)}}const H=new D;H.init();class z{constructor(){this.init=this.init.bind(this),this.onScroll=this.onScroll.bind(this),this.shareIconsId="page-share-icons"}get shareIconsEl(){return document.getElementById(this.shareIconsId)}onScroll(){if(window.scrollY<100||window.innerWidth<1050)return this.shareIconsEl.classList.add("hidden"),null;this.shareIconsEl.classList.remove("hidden")}init(){this.shareIconsEl&&window.addEventListener("scroll",this.onScroll,{passive:!0})}}const F=new z;F.init();
