import{j as r,a as s}from"./jsx-runtime-29545a09.js";import{r as l}from"./index-76fb7be0.js";import{A as X}from"./index-d7d424f4.js";import"./_commonjsHelpers-de833af9.js";const g=({ariaLabel:c="",menuId:M,menus:t={start:[],end:[]},brand:o,fixed:N,classes:e={}})=>{var F,x,w,j,k,D,y,C;["wrap","brand","burger","menu","menuStart","menuEnd","link","item","dropdown","divider"].forEach(n=>{var i,u;if(e[n]===void 0&&(e[n]=[]),e[n]){let a;switch(n){case"wrap":a="navbar";break;case"brand":a="navbar-brand";break;case"burger":a="navbar-burger";break;case"menu":a="navbar-menu";break;case"menuStart":a="navbar-start";break;case"menuEnd":a="navbar-end";break;case"link":a="navbar-link";break;case"item":a="navbar-item";break;case"dropdown":a="navbar-dropdown";break;case"divider":a="navbar-divider";break}a&&!((i=e[n])!=null&&i.includes(a))&&((u=e[n])==null||u.push(a))}}),N&&e.wrap&&!X(e.wrap,/^is-fixed-(top|bottom)$/)&&((F=e.wrap)==null||F.push("is-fixed-"+N));const v=(n,i=0)=>{var a,S,_;const u=e.item?e.item.concat(n.classes??[]):n.classes??[];return n.isDivider?r("hr",{className:(a=e.divider)==null?void 0:a.join(" ")}):i<1&&n.children&&n.children.length>0?r(l.Fragment,{children:s("div",{className:u.concat(["has-dropdown","is-hoverable"]).join(" "),children:[r("a",{className:(S=e.link)==null?void 0:S.join(" "),href:n.href,onClick:n.onClick,children:n.label}),r("div",{className:(_=e==null?void 0:e.dropdown)==null?void 0:_.join(" "),children:n.children&&n.children.map((U,W)=>r(l.Fragment,{children:v(U,i+1)},"navbar-item-"+W))})]})}):r(l.Fragment,{children:r("a",{className:u.join(" "),href:n.href,onClick:n.onClick,children:n.label})})};return r(l.Fragment,{children:s("nav",{className:(x=e.wrap)==null?void 0:x.join(" "),role:"navigation","aria-label":c,children:[o&&r(l.Fragment,{children:s("div",{className:(w=e.brand)==null?void 0:w.join(" "),children:[r("a",{className:(j=e.item)==null?void 0:j.join(" "),href:o==null?void 0:o.href,children:o.item}),(t.start&&t.start.length>0||t.end&&t.end.length>0)&&r(l.Fragment,{children:s("a",{role:"button",className:(k=e.burger)==null?void 0:k.join(" "),"aria-label":"menu","aria-expanded":"false","data-target":M,children:[r("span",{"aria-hidden":"true"}),r("span",{"aria-hidden":"true"}),r("span",{"aria-hidden":"true"})]})})]})}),s("div",{id:M,className:(D=e.menu)==null?void 0:D.join(" "),children:[t.start&&t.start.length>0&&r(l.Fragment,{children:r("div",{className:(y=e==null?void 0:e.menuStart)==null?void 0:y.join(" "),children:t.start.map((n,i)=>r(l.Fragment,{children:v(n)},"navbar-item-"+i))})}),t.end&&t.end.length>0&&r(l.Fragment,{children:r("div",{className:(C=e.menuEnd)==null?void 0:C.join(" "),children:t.end.map((n,i)=>r(l.Fragment,{children:v(n)},"menu-item-"+i))})})]})]})})};try{g.displayName="Navbar",g.__docgenInfo={description:"",displayName:"Navbar",props:{ariaLabel:{defaultValue:{value:""},description:"",name:"ariaLabel",required:!1,type:{name:"string"}},menuId:{defaultValue:null,description:"",name:"menuId",required:!0,type:{name:"string"}},menus:{defaultValue:{value:`{\r
            start: [],\r
            end: [],\r
        }`},description:"",name:"menus",required:!1,type:{name:"{ start?: NavbarItemFields[]; end?: NavbarItemFields[]; }"}},brand:{defaultValue:null,description:"",name:"brand",required:!1,type:{name:"{ item: ReactNode; href?: string; }"}},fixed:{defaultValue:null,description:"",name:"fixed",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'}]}},classes:{defaultValue:{value:"{}"},description:"",name:"classes",required:!1,type:{name:"NavbarClasses"}}}}}catch{}const re={component:g,tags:["autodocs"]},d={render:c=>r(g,{ariaLabel:"Navigation",menuId:"navId",menus:{start:[{label:"Menu 1",href:"#1"},{label:"Menu 2",href:"#2"},{label:"Menu 3",href:"#3"},{label:"Menu 4",href:"#4"}],end:[{label:"Menu End 5",href:"#5"},{label:"Menu End 6",href:"#6"}]},...c})},h={...d,args:{brand:{item:r(l.Fragment,{children:"Brand"}),href:"./"}}},m={...d,args:{menus:{start:[{label:"Menu 1",href:"#1"},{label:"Menu 2",href:"#1"},{label:"Menu 3",href:"#3",children:[{label:"Menu 3-1",href:"#3-1"},{label:"Menu 3-2",href:"#3-2"},{isDivider:!0},{label:"Menu 3-3",href:"#3-3"}]},{label:"Menu 4",href:"#4"}]}}},b={...d,args:{menus:{start:[{label:"Menu 1",href:"#1"},{label:"Menu 2",href:"#1"},{label:"Menu 3",href:"#3",children:[{label:"Menu 3-1",href:"#3-1"},{label:"Menu 3-2",href:"#3-2"},{isDivider:!0},{label:"Menu 3-3",href:"#3-3",children:[{label:"Not shown",href:"#NotShown"}]}]},{label:"Menu 4",href:"#4"}]}}},f={...d,args:{fixed:"top"}},p={...d,args:{fixed:"bottom"}};var E,I,q;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: (args: any) => <Navbar ariaLabel='Navigation' menuId='navId' menus={{
    start: [{
      label: 'Menu 1',
      href: "#1"
    }, {
      label: 'Menu 2',
      href: "#2"
    }, {
      label: 'Menu 3',
      href: "#3"
    }, {
      label: 'Menu 4',
      href: "#4"
    }],
    end: [{
      label: 'Menu End 5',
      href: "#5"
    }, {
      label: 'Menu End 6',
      href: "#6"
    }]
  }} {...args} />
}`,...(q=(I=d.parameters)==null?void 0:I.docs)==null?void 0:q.source}}};var B,V,H;h.parameters={...h.parameters,docs:{...(B=h.parameters)==null?void 0:B.docs,source:{originalSource:`{
  ...Default,
  args: {
    brand: {
      item: <Fragment>Brand</Fragment>,
      href: './'
    }
  }
}`,...(H=(V=h.parameters)==null?void 0:V.docs)==null?void 0:H.source}}};var L,A,G;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  ...Default,
  args: {
    menus: {
      start: [{
        label: 'Menu 1',
        href: '#1'
      }, {
        label: 'Menu 2',
        href: '#1'
      }, {
        label: 'Menu 3',
        href: '#3',
        children: [{
          label: 'Menu 3-1',
          href: '#3-1'
        }, {
          label: 'Menu 3-2',
          href: '#3-2'
        }, {
          isDivider: true
        }, {
          label: 'Menu 3-3',
          href: '#3-3'
        }]
      }, {
        label: 'Menu 4',
        href: '#4'
      }]
    }
  }
}`,...(G=(A=m.parameters)==null?void 0:A.docs)==null?void 0:G.source}}};var R,T,O;b.parameters={...b.parameters,docs:{...(R=b.parameters)==null?void 0:R.docs,source:{originalSource:`{
  ...Default,
  args: {
    menus: {
      start: [{
        label: 'Menu 1',
        href: '#1'
      }, {
        label: 'Menu 2',
        href: '#1'
      }, {
        label: 'Menu 3',
        href: '#3',
        children: [{
          label: 'Menu 3-1',
          href: '#3-1'
        }, {
          label: 'Menu 3-2',
          href: '#3-2'
        }, {
          isDivider: true
        }, {
          label: 'Menu 3-3',
          href: '#3-3',
          children: [{
            label: 'Not shown',
            href: '#NotShown'
          }]
        }]
      }, {
        label: 'Menu 4',
        href: '#4'
      }]
    }
  }
}`,...(O=(T=b.parameters)==null?void 0:T.docs)==null?void 0:O.source}}};var $,z,J;f.parameters={...f.parameters,docs:{...($=f.parameters)==null?void 0:$.docs,source:{originalSource:`{
  ...Default,
  args: {
    fixed: "top"
  }
}`,...(J=(z=f.parameters)==null?void 0:z.docs)==null?void 0:J.source}}};var K,P,Q;p.parameters={...p.parameters,docs:{...(K=p.parameters)==null?void 0:K.docs,source:{originalSource:`{
  ...Default,
  args: {
    fixed: "bottom"
  }
}`,...(Q=(P=p.parameters)==null?void 0:P.docs)==null?void 0:Q.source}}};const ae=["Default","Brand","HasChildren","HasGrandChildren","FixedTop","FixedBottom"];export{h as Brand,d as Default,p as FixedBottom,f as FixedTop,m as HasChildren,b as HasGrandChildren,ae as __namedExportsOrder,re as default};
