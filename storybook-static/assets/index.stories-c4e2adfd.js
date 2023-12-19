import{j as l,a as D}from"./jsx-runtime-29545a09.js";import{r as t}from"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";const s=({items:a,classes:n={}})=>(["wrap","column"].forEach(e=>{n[e]===void 0&&(n[e]=[])}),n.wrap&&!n.wrap.includes("columns")&&n.wrap.push("columns"),n.column&&!n.column.includes("column")&&n.column.push("column"),l(t.Fragment,{children:l("div",{className:n.wrap?n.wrap.join(" "):"",children:a&&a.map((e,u)=>{e.classes=e.classes??[];const r=n.column?n.column.concat(e.classes):e.classes;return l(t.Fragment,{children:l("div",{className:r.join(" "),children:e.value})},u)})})}));try{s.displayName="ListHeader",s.__docgenInfo={description:"",displayName:"ListHeader",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"ListColumnFields[]"}},classes:{defaultValue:{value:"{}"},description:"",name:"classes",required:!1,type:{name:"ListRowClasses"}}}}}catch{}const c=({item:a,classes:n=[],...e})=>(n.includes("column")||n.push("column"),l(t.Fragment,{children:a.length>0&&a.map((u,r)=>{const o=u.classes?n.concat(u.classes):n;return l(t.Fragment,{children:l("div",{className:o.join(" "),children:u.value})},"list-detail-"+r)})}));try{c.displayName="ListDetail",c.__docgenInfo={description:"",displayName:"ListDetail",props:{item:{defaultValue:null,description:"",name:"item",required:!0,type:{name:"ListColumnFields[]"}},classes:{defaultValue:{value:"[]"},description:"",name:"classes",required:!1,type:{name:"string[]"}}}}}catch{}const d=({items:a,headers:n=[],classes:e={},...u})=>{var r;return["wrap"].forEach(o=>{e[o]===void 0&&(e[o]=[])}),e.headers===void 0&&(e.headers={}),e.detail===void 0&&(e.detail={wrap:[],column:[]}),e.detail.wrap&&!e.detail.wrap.includes("columns")&&e.detail.wrap.push("columns"),l(t.Fragment,{children:D("div",{className:(r=e.wrap)==null?void 0:r.join(" "),children:[l(s,{items:n,classes:e.headers}),a.data.length>0&&(a.type===void 0||a.type===""||a.type==="default")&&a.data.map((o,F)=>{var p,v,C;return l(t.Fragment,{children:l("div",{className:(v=(p=e.detail)==null?void 0:p.wrap)==null?void 0:v.join(" "),children:l(c,{item:o.columns,classes:(C=e==null?void 0:e.detail)==null?void 0:C.column})})},F)})]})})};try{d.displayName="List",d.__docgenInfo={description:"",displayName:"List",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"{ data: { columns: ListColumnFields[]; }[]; type?: string | undefined; }"}},headers:{defaultValue:{value:"[]"},description:"",name:"headers",required:!1,type:{name:"ListColumnFields[]"}},classes:{defaultValue:{value:"{}"},description:"",name:"classes",required:!1,type:{name:"ListClasses"}}}}}catch{}try{List.displayName="List",List.__docgenInfo={description:"",displayName:"List",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"{ data: { columns: ListColumnFields[]; }[]; type?: string | undefined; }"}},headers:{defaultValue:{value:"[]"},description:"",name:"headers",required:!1,type:{name:"ListColumnFields[]"}},classes:{defaultValue:{value:"{}"},description:"",name:"classes",required:!1,type:{name:"ListClasses"}}}}}catch{}const N={component:d,tags:["autodocs"]},i={render:a=>l(d,{items:{data:[{columns:[{value:"Column A"},{value:"Column B"},{value:"Column C"},{value:"Column D"},{value:"Column E"},{value:"Column F"}]},{columns:[{value:"Column 2A"},{value:"Column 2B"},{value:"Column 2C"},{value:"Column 2D"},{value:"Column 2E"},{value:"Column 2F"}]}],type:"default"},headers:[{value:"Header A"},{value:"Header B"},{value:"Header C"},{value:"Header D"},{value:"Header E"},{value:"Header F"}],...a})},m={...i,args:{items:{data:[{columns:[{value:"Column A"},{value:"Column B"},{value:"Column C"},{value:"Column D"},{value:"Column E"},{value:"Column F"},{value:"Column G"}]},{columns:[{value:"Column 2A"},{value:"Column 2B"},{value:"Column 2C"},{value:"Column 2D"},{value:"Column 2E"}]}]}}};var f,_,y;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: (args: any) => <List items={{
    data: [{
      columns: [{
        value: "Column A"
      }, {
        value: "Column B"
      }, {
        value: "Column C"
      }, {
        value: "Column D"
      }, {
        value: "Column E"
      }, {
        value: "Column F"
      }]
    }, {
      columns: [{
        value: "Column 2A"
      }, {
        value: "Column 2B"
      }, {
        value: "Column 2C"
      }, {
        value: "Column 2D"
      }, {
        value: "Column 2E"
      }, {
        value: "Column 2F"
      }]
    }],
    type: 'default'
  }} headers={[{
    value: 'Header A'
  }, {
    value: 'Header B'
  }, {
    value: 'Header C'
  }, {
    value: 'Header D'
  }, {
    value: 'Header E'
  }, {
    value: 'Header F'
  }]} {...args} />
}`,...(y=(_=i.parameters)==null?void 0:_.docs)==null?void 0:y.source}}};var h,g,L;m.parameters={...m.parameters,docs:{...(h=m.parameters)==null?void 0:h.docs,source:{originalSource:`{
  ...Default,
  args: {
    items: {
      data: [{
        columns: [{
          value: "Column A"
        }, {
          value: "Column B"
        }, {
          value: "Column C"
        }, {
          value: "Column D"
        }, {
          value: "Column E"
        }, {
          value: "Column F"
        }, {
          value: "Column G"
        }]
      }, {
        columns: [{
          value: "Column 2A"
        }, {
          value: "Column 2B"
        }, {
          value: "Column 2C"
        }, {
          value: "Column 2D"
        }, {
          value: "Column 2E"
        }]
      }]
    }
  }
}`,...(L=(g=m.parameters)==null?void 0:g.docs)==null?void 0:L.source}}};const q=["Default","InConsistent"];export{i as Default,m as InConsistent,q as __namedExportsOrder,N as default};
