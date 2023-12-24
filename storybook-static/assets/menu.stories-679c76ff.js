import{j as b}from"./jsx-runtime-29545a09.js";import{M as d}from"./index-e8c9c02b.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./index.es-e4625b06.js";import"./index-8d47fad6.js";const I={component:d,tags:["autodocs"]},e={render:M=>b(d,{menus:[{label:"Menu 1",list:[{content:"Menu1-1",children:[{content:"Menu1-1-1"}]}]}],...M})},n={...e,args:{menus:[{label:"Menu 1",attributes:{list:{"aria-label":"Menu List"},label:{"aria-label":"Menu Label"}},list:[{content:"Menu1-1",attributes:{"aria-label":"Menu Item"},children:[{content:"Menu1-1-1",attributes:{"aria-label":"Menu Item Child"}}]}]}],attributes:{"aria-label":"Menu"}}},t={...e,args:{menus:[{label:"Menu 1",datasets:{list:new Map([["id","menu-list"],["name","menu list"]]),label:new Map([["id","menu-label"],["name","menu label"]])},list:[{content:"Menu1-1",datasets:new Map([["id","menu-item"],["name","menu item"]]),children:[{content:"Menu1-1-1",datasets:new Map([["id","menu-item-child"],["name","menu item child"]])}]}]}],datasets:new Map([["id","menu"],["name","menu"]])}};var a,s,r;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: (args: any) => <Menu menus={[{
    label: 'Menu 1',
    list: [{
      content: 'Menu1-1',
      children: [{
        content: 'Menu1-1-1'
      }]
    }]
  }]} {...args} />
}`,...(r=(s=e.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};var l,i,u;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  ...Default,
  args: {
    menus: [{
      label: 'Menu 1',
      attributes: {
        list: {
          'aria-label': 'Menu List'
        },
        label: {
          'aria-label': 'Menu Label'
        }
      },
      list: [{
        content: 'Menu1-1',
        attributes: {
          'aria-label': 'Menu Item'
        },
        children: [{
          content: 'Menu1-1-1',
          attributes: {
            'aria-label': 'Menu Item Child'
          }
        }]
      }]
    }],
    attributes: {
      'aria-label': 'Menu'
    }
  }
}`,...(u=(i=n.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};var m,o,c;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  ...Default,
  args: {
    menus: [{
      label: 'Menu 1',
      datasets: {
        list: new Map([['id', 'menu-list'], ['name', 'menu list']]),
        label: new Map([['id', 'menu-label'], ['name', 'menu label']])
      },
      list: [{
        content: 'Menu1-1',
        datasets: new Map([['id', 'menu-item'], ['name', 'menu item']]),
        children: [{
          content: 'Menu1-1-1',
          datasets: new Map([['id', 'menu-item-child'], ['name', 'menu item child']])
        }]
      }]
    }],
    datasets: new Map([['id', 'menu'], ['name', 'menu']])
  }
}`,...(c=(o=t.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};const L=["Default","WithAttributes","WithDatasets"];export{e as Default,n as WithAttributes,t as WithDatasets,L as __namedExportsOrder,I as default};
