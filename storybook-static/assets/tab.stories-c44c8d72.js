import{j as s,a as d}from"./jsx-runtime-29545a09.js";import{f as z}from"./faCheck-4805a0dd.js";import{r as m}from"./index-76fb7be0.js";import{F as f}from"./index.es-69517595.js";import{H as k}from"./index-091ab165.js";import{A as L}from"./index-d7d424f4.js";import"./_commonjsHelpers-de833af9.js";import"./index-8d47fad6.js";var A={},C={};(function(a){Object.defineProperty(a,"__esModule",{value:!0});var e="fas",i="magnifying-glass",c=512,t=512,r=[128269,"search"],l="f002",n="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z";a.definition={prefix:e,iconName:i,icon:[c,t,r,l,n]},a.faMagnifyingGlass=a.definition,a.prefix=e,a.iconName=i,a.width=c,a.height=t,a.ligatures=r,a.unicode=l,a.svgPathData=n,a.aliases=r})(C);(function(a){Object.defineProperty(a,"__esModule",{value:!0});var e=C;a.definition={prefix:e.prefix,iconName:e.iconName,icon:[e.width,e.height,e.aliases,e.unicode,e.svgPathData]},a.faSearch=a.definition,a.prefix=e.prefix,a.iconName=e.iconName,a.width=e.width,a.height=e.height,a.ligatures=e.aliases,a.unicode=e.unicode,a.svgPathData=e.svgPathData,a.aliases=e.aliases})(A);var V={},O={};(function(a){Object.defineProperty(a,"__esModule",{value:!0});var e="fas",i="floppy-disk",c=448,t=512,r=[128190,128426,"save"],l="f0c7",n="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V173.3c0-17-6.7-33.3-18.7-45.3L352 50.7C340 38.7 323.7 32 306.7 32H64zm0 96c0-17.7 14.3-32 32-32H288c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V128zM224 288a64 64 0 1 1 0 128 64 64 0 1 1 0-128z";a.definition={prefix:e,iconName:i,icon:[c,t,r,l,n]},a.faFloppyDisk=a.definition,a.prefix=e,a.iconName=i,a.width=c,a.height=t,a.ligatures=r,a.unicode=l,a.svgPathData=n,a.aliases=r})(O);(function(a){Object.defineProperty(a,"__esModule",{value:!0});var e=O;a.definition={prefix:e.prefix,iconName:e.iconName,icon:[e.width,e.height,e.aliases,e.unicode,e.svgPathData]},a.faSave=a.definition,a.prefix=e.prefix,a.iconName=e.iconName,a.width=e.width,a.height=e.height,a.ligatures=e.aliases,a.unicode=e.unicode,a.svgPathData=e.svgPathData,a.aliases=e.aliases})(V);var H={};(function(a){Object.defineProperty(a,"__esModule",{value:!0});var e="fas",i="image",c=512,t=512,r=[],l="f03e",n="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6h96 32H424c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z";a.definition={prefix:e,iconName:i,icon:[c,t,r,l,n]},a.faImage=a.definition,a.prefix=e,a.iconName=i,a.width=c,a.height=t,a.ligatures=r,a.unicode=l,a.svgPathData=n,a.aliases=r})(H);const p=({items:a,position:e="centered",classes:i={}})=>{var c,t,r,l;if(["wrap","item"].forEach(n=>{i[n]===void 0&&(i[n]=[])}),i.wrap&&((c=i.wrap)!=null&&c.includes("tabs")||(t=i.wrap)==null||t.push("tabs"),e)){const n=k.join("|");if(n){const v=`^is-(${n})$`;L(i.wrap,new RegExp(v))||(r=i.wrap)==null||r.push("is-"+e)}}return s(m.Fragment,{children:s("div",{className:(l=i.wrap)==null?void 0:l.join(" "),children:s("ul",{children:a&&a.map((n,v)=>{const b=i!=null&&i.item?i.item.concat(n.classes??[]):n.classes??[];return n.isActive&&b.push("is-active"),s(m.Fragment,{children:s("li",{className:b.join(" "),children:s("a",{href:n.href,children:n.label})})},"tab-item-"+v)})})})})};try{p.displayName="Tab",p.__docgenInfo={description:"",displayName:"Tab",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"TabsItemFields[]"}},position:{defaultValue:{value:"centered"},description:"",name:"position",required:!1,type:{name:"string"}},classes:{defaultValue:{value:"{}"},description:"",name:"classes",required:!1,type:{name:"TabsClasses"}}}}}catch{}try{Tab.displayName="Tab",Tab.__docgenInfo={description:"",displayName:"Tab",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"TabsItemFields[]"}},position:{defaultValue:{value:"centered"},description:"",name:"position",required:!1,type:{name:"string"}},classes:{defaultValue:{value:"{}"},description:"",name:"classes",required:!1,type:{name:"TabsClasses"}}}}}catch{}const K={component:p,tags:["autodocs"]},o={render:a=>s(p,{items:[{label:"Tab1"},{label:"Tab2",isActive:!0},{label:"Tab3"},{label:"Tab4"},{label:"Tab5"}],...a})},u={...o,args:{position:"left"}},h={...o,args:{position:"right"}},g={...o,args:{items:[{label:d(m.Fragment,{children:[s("span",{className:"icon is-small",children:s(f,{icon:H.faImage})}),s("span",{children:"Image"})]})},{label:d(m.Fragment,{children:[s("span",{className:"icon is-small",children:s(f,{icon:z.faCheck})}),s("span",{children:"Check"})]})},{label:d(m.Fragment,{children:[s("span",{className:"icon is-small",children:s(f,{icon:V.faSave})}),s("span",{children:"Save"})]})},{label:d(m.Fragment,{children:[s("span",{className:"icon is-small",children:s(f,{icon:A.faSearch})}),s("span",{children:"Search"})]})}]}};var F,N,T;o.parameters={...o.parameters,docs:{...(F=o.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: (args: any) => <Tab items={[({
    label: "Tab1"
  } as TabsItemFields), ({
    label: "Tab2",
    isActive: true
  } as TabsItemFields), ({
    label: "Tab3"
  } as TabsItemFields), ({
    label: "Tab4"
  } as TabsItemFields), ({
    label: "Tab5"
  } as TabsItemFields)]} {...args} />
}`,...(T=(N=o.parameters)==null?void 0:N.docs)==null?void 0:T.source}}};var _,I,y;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
  ...Default,
  args: {
    position: 'left'
  }
}`,...(y=(I=u.parameters)==null?void 0:I.docs)==null?void 0:y.source}}};var w,D,P;h.parameters={...h.parameters,docs:{...(w=h.parameters)==null?void 0:w.docs,source:{originalSource:`{
  ...Default,
  args: {
    position: 'right'
  }
}`,...(P=(D=h.parameters)==null?void 0:D.docs)==null?void 0:P.source}}};var S,M,j;g.parameters={...g.parameters,docs:{...(S=g.parameters)==null?void 0:S.docs,source:{originalSource:`{
  ...Default,
  args: {
    items: [({
      label: <Fragment>\r
                        <span className="icon is-small"><FontAwesomeIcon icon={icon({
            name: 'image'
          })} /></span>\r
                        <span>Image</span>\r
                    </Fragment>
    } as TabsItemFields), ({
      label: <Fragment>\r
                        <span className="icon is-small"><FontAwesomeIcon icon={icon({
            name: 'check'
          })} /></span>\r
                        <span>Check</span>\r
                    </Fragment>
    } as TabsItemFields), ({
      label: <Fragment>\r
                        <span className="icon is-small"><FontAwesomeIcon icon={icon({
            name: 'save'
          })} /></span>\r
                        <span>Save</span>\r
                    </Fragment>
    } as TabsItemFields), ({
      label: <Fragment>\r
                        <span className="icon is-small"><FontAwesomeIcon icon={icon({
            name: 'search'
          })} /></span>\r
                        <span>Search</span>\r
                    </Fragment>
    } as TabsItemFields)]
  }
}`,...(j=(M=g.parameters)==null?void 0:M.docs)==null?void 0:j.source}}};const Q=["Default","Left","Right","Icons"];export{o as Default,g as Icons,u as Left,h as Right,Q as __namedExportsOrder,K as default};
