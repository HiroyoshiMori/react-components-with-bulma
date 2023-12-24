import{j as o,a as O}from"./jsx-runtime-29545a09.js";import{r as C,R as $}from"./index-76fb7be0.js";import{c as b,F as z}from"./index.es-e4625b06.js";import"./_commonjsHelpers-de833af9.js";import"./index-8d47fad6.js";var _={};(function(a){Object.defineProperty(a,"__esModule",{value:!0});var c="fas",u="angle-down",t=448,s=512,i=[8964],d="f107",r="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z";a.definition={prefix:c,iconName:u,icon:[t,s,i,d,r]},a.faAngleDown=a.definition,a.prefix=c,a.iconName=u,a.width=t,a.height=s,a.ligatures=i,a.unicode=d,a.svgPathData=r,a.aliases=i})(_);const F=a=>{var r,e,p,n,m;const{title:c,buttonIcon:u,classes:t={},attributes:s={},datasets:i={}}={...a};["wrap","title","button","span","icon"].forEach(l=>{s[l]===void 0&&(s[l]={})}),["wrap","title","button","span","icon"].forEach(l=>{i[l]===void 0&&(i[l]=new Map)}),["wrap","title","button","span","icon"].forEach(l=>{t[l]===void 0&&(t[l]=[])}),["wrap","title","button","span"].forEach(l=>{var M,q;let f;switch(l){case"wrap":f="card-header";break;case"title":f="card-header-title";break;case"button":f="card-header-icon";break;case"span":f="icon";break}f&&!((M=t[l])!=null&&M.includes(f))&&((q=t[l])==null||q.push(f))});let d={};return["wrap","title","button","span","icon"].forEach(l=>{d[l]===void 0&&(d[l]={}),d[l]=b(i[l])}),o(C.Fragment,{children:O("header",{className:(r=t.wrap)==null?void 0:r.join(" "),...s.wrap,...d.wrap,children:[c&&o("p",{className:(e=t.title)==null?void 0:e.join(" "),...s.title,...d.title,children:c}),u&&o("button",{className:(p=t.button)==null?void 0:p.join(" "),...s.button,...d.button,children:o("span",{className:(n=t.span)==null?void 0:n.join(" "),...s.span,...d.span,children:o(z,{icon:u,className:(m=t.icon)==null?void 0:m.join(" "),...s.icon,...d.icon})})})]})})};try{F.displayName="CardHeader",F.__docgenInfo={description:"",displayName:"CardHeader",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"ReactNode"}},buttonIcon:{defaultValue:null,description:"",name:"buttonIcon",required:!1,type:{name:"IconDefinition"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((e: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}},classes:{defaultValue:null,description:"",name:"classes",required:!1,type:{name:"CardHeaderClasses"}},attributes:{defaultValue:null,description:"",name:"attributes",required:!1,type:{name:"CardHeaderAttributes"}},datasets:{defaultValue:null,description:"",name:"datasets",required:!1,type:{name:"CardHeaderDatasets"}}}}}catch{}const v=a=>{var r,e,p;const{src:c,alt:u,classes:t={},attributes:s={},datasets:i={}}={...a};["wrap","figure","image"].forEach(n=>{s[n]===void 0&&(s[n]={})}),["wrap","figure","image"].forEach(n=>{i[n]===void 0&&(i[n]=new Map)}),["wrap","figure","image"].forEach(n=>{var l,f;t[n]===void 0&&(t[n]=[]);let m;switch(n){case"wrap":m="card-image";break;case"figure":m="image";break}m&&!((l=t[n])!=null&&l.includes(m))&&((f=t[n])==null||f.push(m))});let d={};return["wrap","figure","image"].forEach(n=>{d[n]===void 0&&(d[n]={}),d[n]=b(i[n])}),o(C.Fragment,{children:o("div",{className:(r=t.wrap)==null?void 0:r.join(" "),...s.wrap,...d.wrap,children:o("figure",{className:(e=t.figure)==null?void 0:e.join(""),...s.figure,...d.figure,children:o("img",{src:c,alt:u,className:(p=t.image)==null?void 0:p.join(" "),...s.image,...d.image})})})})};try{v.displayName="CardImage",v.__docgenInfo={description:"",displayName:"CardImage",props:{src:{defaultValue:null,description:"",name:"src",required:!0,type:{name:"string"}},alt:{defaultValue:null,description:"",name:"alt",required:!1,type:{name:"string"}},classes:{defaultValue:null,description:"",name:"classes",required:!1,type:{name:"CardImageClasses"}},attributes:{defaultValue:null,description:"",name:"attributes",required:!1,type:{name:"CardImageAttributes"}},datasets:{defaultValue:null,description:"",name:"datasets",required:!1,type:{name:"CardImageDatasets"}}}}}catch{}const N=a=>{var d,r;const{classes:c={},attributes:u={},datasets:t={},children:s}={...a};["wrap","content"].forEach(e=>{u[e]===void 0&&(u[e]={})}),["wrap","content"].forEach(e=>{t[e]===void 0&&(t[e]=new Map)}),["wrap","content"].forEach(e=>{var n,m;c[e]===void 0&&(c[e]=[]);let p;switch(e){case"wrap":p="card-content";break;case"content":p="content";break}p&&!((n=c[e])!=null&&n.includes(p))&&((m=c[e])==null||m.push(p))});let i={};return["wrap","content"].forEach(e=>{i[e]===void 0&&(i[e]={}),i[e]=b(t[e])}),o(C.Fragment,{children:o("div",{className:(d=c.wrap)==null?void 0:d.join(" "),...u.wrap,...i.wrap,children:o("div",{className:(r=c.content)==null?void 0:r.join(" "),...u.content,...i.content,children:s})})})};try{N.displayName="CardContent",N.__docgenInfo={description:"",displayName:"CardContent",props:{classes:{defaultValue:null,description:"",name:"classes",required:!1,type:{name:"CardContentClasses"}},attributes:{defaultValue:null,description:"",name:"attributes",required:!1,type:{name:"CardContentAttributes"}},datasets:{defaultValue:null,description:"",name:"datasets",required:!1,type:{name:"CardContentDatasets"}}}}}catch{}const V=a=>{const{items:c=[],classes:u=[],attributes:t={},datasets:s=new Map}={...a};u.includes("card-footer")||u.push("card-footer");const i=b(s),d=(r,e)=>{var p;if(r===null)return console.debug("node satisfies null | undefined"),r;if(typeof r!="object")return console.debug("node satisfies string | number | boolean"),o(C.Fragment,{children:o("span",{className:e.join(" "),children:r})});if("props"in r){console.debug("node satisfies ReactElement | ReactPortal");const n=(p=r==null?void 0:r.props)==null?void 0:p.className,m=n&&typeof n=="string"?`${n} ${e.join(" ")}`:e.join(" ");return $.cloneElement(r,{className:m})}return"then"in r?(console.debug("node satisfies PromiseLikeOfReactNode"),r.then(n=>d(n,e))):(console.debug("node satisfies ReactFragment"),o("div",{className:e.join(" "),children:r}))};return o(C.Fragment,{children:o("div",{className:u.join(" "),...t,...i,children:c&&c.length>0&&c.map((r,e)=>{const p=d(r,["card-footer-item"]);return o(C.Fragment,{children:p},"card-footer-item_"+e)})})})};try{V.displayName="CardFooter",V.__docgenInfo={description:"",displayName:"CardFooter",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"ReactNode[]"}},attributes:{defaultValue:null,description:"",name:"attributes",required:!1,type:{name:"HTMLAttributes<HTMLDivElement>"}},datasets:{defaultValue:null,description:"",name:"datasets",required:!1,type:{name:"CommonDataSet"}},classes:{defaultValue:null,description:"",name:"classes",required:!1,type:{name:"string[]"}}}}}catch{}const I=a=>{const{header:c,image:u,content:t,footer:s,classes:i=[],attributes:d={},datasets:r=new Map}={...a};i.includes("card")||i.push("card");const e=b(r);return o(C.Fragment,{children:O("div",{className:i.join(" "),...d,...e,children:[c&&o(F,{...c}),u&&o(v,{...u}),t&&o(N,{...t}),s&&o(V,{...s})]})})};try{I.displayName="Card",I.__docgenInfo={description:"",displayName:"Card",props:{header:{defaultValue:null,description:"",name:"header",required:!1,type:{name:"CardHeaderProps"}},image:{defaultValue:null,description:"",name:"image",required:!1,type:{name:"CardImageProps"}},content:{defaultValue:null,description:"",name:"content",required:!1,type:{name:"CardContentProps"}},footer:{defaultValue:null,description:"",name:"footer",required:!1,type:{name:"CardFooterProps"}},attributes:{defaultValue:null,description:"",name:"attributes",required:!1,type:{name:"HTMLAttributes<HTMLDivElement>"}},datasets:{defaultValue:null,description:"",name:"datasets",required:!1,type:{name:"CommonDataSet"}},classes:{defaultValue:null,description:"",name:"classes",required:!1,type:{name:"string[]"}}}}}catch{}try{Card.displayName="Card",Card.__docgenInfo={description:"",displayName:"Card",props:{header:{defaultValue:null,description:"",name:"header",required:!1,type:{name:"CardHeaderProps"}},image:{defaultValue:null,description:"",name:"image",required:!1,type:{name:"CardImageProps"}},content:{defaultValue:null,description:"",name:"content",required:!1,type:{name:"CardContentProps"}},footer:{defaultValue:null,description:"",name:"footer",required:!1,type:{name:"CardFooterProps"}},attributes:{defaultValue:null,description:"",name:"attributes",required:!1,type:{name:"HTMLAttributes<HTMLDivElement>"}},datasets:{defaultValue:null,description:"",name:"datasets",required:!1,type:{name:"CommonDataSet"}},classes:{defaultValue:null,description:"",name:"classes",required:!1,type:{name:"string[]"}}}}}catch{}const X={component:I,tags:["autodocs"]},h={render:a=>o(I,{header:{title:"Card Header",buttonIcon:_.faAngleDown},content:{children:"Card Content"},footer:{items:["Card Footer Item 1",o("a",{href:"#",children:"Card Footer Item 2"}),"Card Footer Item 3","Card Footer Item 4"]},...a})},w={...h,args:{footer:{items:["Card Footer Item 1",o("a",{href:"#",className:"is-active",children:"Card Footer Item 2 w/class"}),"Card Footer Item 3","Card Footer Item 4"]}}},g={...h,args:{header:{title:"Card Header",buttonIcon:_.faAngleDown,classes:{wrap:["card-header-wrap"],title:["card-header-title"],button:["card-header-button"],span:["card-header-span"],icon:["card-header-icon"]},attributes:{wrap:{"aria-label":"card-header-wrap"},title:{"aria-label":"card-header-title"},button:{"aria-label":"card-header-button"},span:{"aria-label":"card-header-span"},icon:{"aria-label":"card-header-icon"}}},content:{children:"Card Content",classes:{wrap:["card-content-wrap"],content:["card-content-content"]},attributes:{wrap:{"aria-label":"card-content-wrap"},content:{"aria-label":"card-content-content"}}},footer:{items:["Card Footer Item 1",o("a",{href:"#",children:"Card Footer Item 2"}),"Card Footer Item 3","Card Footer Item 4"],classes:["card-footer1"],attributes:{"aria-label":"card-footer"}}}},y={...h,args:{datasets:new Map([["id","card"],["name","Card"]]),header:{title:"Card Header",buttonIcon:_.faAngleDown,datasets:{wrap:new Map([["id","card-header-wrap"],["name","Card Header Wrap"]]),title:new Map([["id","card-header-title"],["name","Card Header Title"]]),button:new Map([["id","card-header-button"],["name","Card Header Button"]]),span:new Map([["id","card-header-span"],["name","Card Header Span"]]),icon:new Map([["id","card-header-icon"],["name","Card Header Icon"]])}},content:{children:"Card Content",datasets:{wrap:new Map([["id","card-content-wrap"],["name","Card Content Wrap"]]),content:new Map([["id","card-content-content"],["name","Card Content Content"]])}},footer:{items:["Card Footer Item 1",o("a",{href:"#",children:"Card Footer Item 2"}),"Card Footer Item 3","Card Footer Item 4"],datasets:new Map([["id","card-footer"],["name","Card Footer"]])}}};var H,D,E;h.parameters={...h.parameters,docs:{...(H=h.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: (args: any) => <Card header={{
    title: "Card Header",
    buttonIcon: icon({
      name: 'angle-down',
      style: 'solid'
    })
  }} content={{
    children: "Card Content"
  }} footer={{
    items: ["Card Footer Item 1", <a href="#">Card Footer Item 2</a>, "Card Footer Item 3", "Card Footer Item 4"]
  }} {...args} />
}`,...(E=(D=h.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var j,S,A;w.parameters={...w.parameters,docs:{...(j=w.parameters)==null?void 0:j.docs,source:{originalSource:`{
  ...Default,
  args: {
    footer: {
      items: ["Card Footer Item 1", <a href="#" className="is-active">Card Footer Item 2 w/class</a>, "Card Footer Item 3", "Card Footer Item 4"]
    }
  }
}`,...(A=(S=w.parameters)==null?void 0:S.docs)==null?void 0:A.source}}};var P,T,L;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`{
  ...Default,
  args: {
    header: {
      title: "Card Header",
      buttonIcon: icon({
        name: 'angle-down',
        style: 'solid'
      }),
      classes: {
        wrap: ['card-header-wrap'],
        title: ['card-header-title'],
        button: ['card-header-button'],
        span: ['card-header-span'],
        icon: ['card-header-icon']
      },
      attributes: {
        wrap: {
          'aria-label': 'card-header-wrap'
        },
        title: {
          'aria-label': 'card-header-title'
        },
        button: {
          'aria-label': 'card-header-button'
        },
        span: {
          'aria-label': 'card-header-span'
        },
        icon: {
          'aria-label': 'card-header-icon'
        }
      }
    },
    content: {
      children: "Card Content",
      classes: {
        wrap: ['card-content-wrap'],
        content: ['card-content-content']
      },
      attributes: {
        wrap: {
          'aria-label': 'card-content-wrap'
        },
        content: {
          'aria-label': 'card-content-content'
        }
      }
    },
    footer: {
      items: ["Card Footer Item 1", <a href="#">Card Footer Item 2</a>, "Card Footer Item 3", "Card Footer Item 4"],
      classes: ['card-footer1'],
      attributes: {
        'aria-label': 'card-footer'
      }
    }
  }
}`,...(L=(T=g.parameters)==null?void 0:T.docs)==null?void 0:L.source}}};var R,W,B;y.parameters={...y.parameters,docs:{...(R=y.parameters)==null?void 0:R.docs,source:{originalSource:`{
  ...Default,
  args: {
    datasets: new Map([['id', 'card'], ['name', 'Card']]),
    header: {
      title: "Card Header",
      buttonIcon: icon({
        name: 'angle-down',
        style: 'solid'
      }),
      datasets: {
        wrap: new Map([['id', 'card-header-wrap'], ['name', 'Card Header Wrap']]),
        title: new Map([['id', 'card-header-title'], ['name', 'Card Header Title']]),
        button: new Map([['id', 'card-header-button'], ['name', 'Card Header Button']]),
        span: new Map([['id', 'card-header-span'], ['name', 'Card Header Span']]),
        icon: new Map([['id', 'card-header-icon'], ['name', 'Card Header Icon']])
      }
    },
    content: {
      children: "Card Content",
      datasets: {
        wrap: new Map([['id', 'card-content-wrap'], ['name', 'Card Content Wrap']]),
        content: new Map([['id', 'card-content-content'], ['name', 'Card Content Content']])
      }
    },
    footer: {
      items: ["Card Footer Item 1", <a href="#">Card Footer Item 2</a>, "Card Footer Item 3", "Card Footer Item 4"],
      datasets: new Map([['id', 'card-footer'], ['name', 'Card Footer']])
    }
  }
}`,...(B=(W=y.parameters)==null?void 0:W.docs)==null?void 0:B.source}}};const Y=["Default","ClassesInFooter","WithAttributes","WithDatasets"];export{w as ClassesInFooter,h as Default,g as WithAttributes,y as WithDatasets,Y as __namedExportsOrder,X as default};
