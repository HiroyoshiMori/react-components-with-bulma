import{j as r,a as p}from"./jsx-runtime-29545a09.js";import{r as l}from"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";const o=({menus:i,classes:a={}})=>{var m;["wrap","label","list","item"].forEach(e=>{var c,t;if(a[e]===void 0&&(a[e]=[]),a[e]){let n;switch(e){case"wrap":n="menu";break;case"label":n="menu-label";break;case"list":n="menu-list";break}n&&!((c=a[e])!=null&&c.includes(n))&&((t=a[e])==null||t.push(n))}});const d=(e,c=0)=>{var t;return p(l.Fragment,{children:[r("li",{className:(t=a.item)==null?void 0:t.join(" "),children:e.content}),e.children&&e.children.length>0&&r(l.Fragment,{children:r("ul",{children:e.children.map((n,u)=>r(l.Fragment,{children:d(n,c+1)},"menu-"+u))})})]})};return r(l.Fragment,{children:r("aside",{className:(m=a.wrap)==null?void 0:m.join(" "),children:i&&i.length>0&&i.map((e,c)=>{var t,n;return p(l.Fragment,{children:[r("p",{className:(t=a.label)==null?void 0:t.join(" "),children:e.label}),e.list&&e.list.length>0&&r(l.Fragment,{children:r("ul",{className:(n=a.list)==null?void 0:n.join(" "),children:e.list.map((u,M)=>r(l.Fragment,{children:d(u)},"menu-item-"+M))})})]},"menu-"+c)})})})};try{o.displayName="Menu",o.__docgenInfo={description:"",displayName:"Menu",props:{menus:{defaultValue:null,description:"",name:"menus",required:!0,type:{name:"MenuFields[]"}},classes:{defaultValue:{value:"{}"},description:"",name:"classes",required:!1,type:{name:"MenuClasses"}}}}}catch{}const F={component:o,tags:["autodocs"]},s={render:i=>r(o,{menus:[{label:"Menu 1",list:[{content:"Menu1-1",children:[{content:"Menu1-1-1"}]}]}],...i})};var h,g,f;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: (args: any) => <Menu menus={[{
    label: 'Menu 1',
    list: [{
      content: 'Menu1-1',
      children: [{
        content: 'Menu1-1-1'
      }]
    }]
  }]} {...args} />
}`,...(f=(g=s.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const j=["Default"];export{s as Default,j as __namedExportsOrder,F as default};
