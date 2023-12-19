import{j as a,a as d}from"./jsx-runtime-29545a09.js";import{r as p}from"./index-76fb7be0.js";import{A as s}from"./index-d7d424f4.js";import{B as b}from"./index-9fec80cd.js";import{s as g}from"./sprintf-65311fc1.js";const c=({title:r,onClose:n,classes:t={wrap:[],title:[]},...i})=>{var o,e,u;return["wrap","title"].forEach(l=>{t[l]===void 0&&(t[l]=[])}),t.wrap&&!t.wrap.includes("modal-card-head")&&((o=t.wrap)==null||o.push("modal-card-head")),t.title&&!t.title.includes("modal-card-title")&&t.title.push("modal-card-title"),a(p.Fragment,{children:d("header",{className:(e=t.wrap)==null?void 0:e.join(" "),children:[a("div",{className:(u=t.title)==null?void 0:u.join(" "),children:r}),a("button",{className:"delete","aria-label":"close",onClick:n})]})})};try{c.displayName="Header",c.__docgenInfo={description:"",displayName:"Header",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"ReactNode"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"((e: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}},classes:{defaultValue:{value:`{\r
            wrap: [],\r
            title: [],\r
        }`},description:"",name:"classes",required:!1,type:{name:"DialogHeaderClasses"}}}}}catch{}const m=({buttonLabel:r,onClose:n,classes:t={wrap:[],button:[]},...i})=>{var o;return["wrap","button"].forEach(e=>{t[e]===void 0&&(t[e]=[])}),t.wrap&&!t.wrap.includes("modal-card-foot")&&t.wrap.push("modal-card-foot"),t.button&&!t.button.includes("button")&&t.button.push("button"),a(p.Fragment,{children:a("footer",{className:(o=t.wrap)==null?void 0:o.join(" "),children:a(b,{label:r,classes:t.button,onClick:n})})})};try{m.displayName="Footer",m.__docgenInfo={description:"",displayName:"Footer",props:{buttonLabel:{defaultValue:null,description:"",name:"buttonLabel",required:!0,type:{name:"ReactNode"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"((e: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}},classes:{defaultValue:{value:`{\r
            wrap: [],\r
            button: [],\r
        }`},description:"",name:"classes",required:!1,type:{name:"DialogFooterClasses"}}}}}catch{}const f=({isActive:r,title:n,onClose:t,noFooter:i=!1,buttonLabel:o,classes:e={},children:u})=>{var l,y;return["wrap","content"].forEach(_=>{e[_]===void 0&&(e[_]=[])}),e.header===void 0&&(e.header={wrap:[],title:[]}),(e==null?void 0:e.footer)===void 0&&(e.footer={wrap:[],button:[]}),e.wrap&&(e.wrap.includes("modal")||e.wrap.push("modal"),r&&e.wrap.push("is-active")),e.content&&!e.content.includes("modal-card-body")&&e.content.push("modal-card-body"),e.header.wrap&&(s(e.header.wrap,/^p[trbl]?-([0-6]|auto)$/)||e.header.wrap.push("p-3")),e.footer.wrap&&(s(e.footer.wrap,/^p[trbl]?-([0-6]|auto)$/)||e.footer.wrap.push("p-3"),s(e.footer.wrap,/^is-justify-content-(flex-start|flex-end|center|space-between|space-around|space-evenly|start|end|left|right)$/)||e.footer.wrap.push("is-justify-content-flex-end")),a(p.Fragment,{children:d("div",{className:(l=e.wrap)==null?void 0:l.join(" "),children:[a("div",{className:"modal-background"}),d("div",{className:"modal-card",children:[a(c,{title:n,onClose:t,classes:e.header}),a("section",{className:(y=e==null?void 0:e.content)==null?void 0:y.join(" "),children:u}),a(m,{buttonLabel:o??"OK",onClose:t,classes:e.footer})]})]})})};try{f.displayName="Dialog",f.__docgenInfo={description:"",displayName:"Dialog",props:{isActive:{defaultValue:null,description:"",name:"isActive",required:!0,type:{name:"boolean"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"ReactNode"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"((e: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}},noFooter:{defaultValue:{value:"false"},description:"",name:"noFooter",required:!1,type:{name:"boolean"}},buttonLabel:{defaultValue:null,description:"",name:"buttonLabel",required:!1,type:{name:"ReactNode"}},classes:{defaultValue:{value:"{}"},description:"",name:"classes",required:!1,type:{name:"DialogClasses"}}}}}catch{}const v=({isActive:r,title:n,value:t,max:i,onClose:o})=>a(p.Fragment,{children:d(f,{isActive:r,title:n,noFooter:!0,onClose:o,buttonLabel:"Close",classes:{header:{wrap:["p-3"],title:["is-size-6"]},content:["pt-3","pr-5","pb-3","pl-5"],footer:{wrap:["is-justify-content-flex-end","p-3"]}},children:[a("progress",{className:"progress is-info",value:t,max:i}),d("span",{children:[g.sprintf("%d",i>0?t/i*100:0),"% (",t,"/",i,")"]})]})});try{v.displayName="ProgressBar",v.__docgenInfo={description:"",displayName:"ProgressBar",props:{isActive:{defaultValue:null,description:"",name:"isActive",required:!0,type:{name:"boolean"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"number"}},max:{defaultValue:null,description:"",name:"max",required:!0,type:{name:"number"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"(e: MouseEvent<HTMLButtonElement, MouseEvent>) => void"}}}}}catch{}try{Dialog.displayName="Dialog",Dialog.__docgenInfo={description:"",displayName:"Dialog",props:{isActive:{defaultValue:null,description:"",name:"isActive",required:!0,type:{name:"boolean"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"ReactNode"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"((e: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}},noFooter:{defaultValue:{value:"false"},description:"",name:"noFooter",required:!1,type:{name:"boolean"}},buttonLabel:{defaultValue:null,description:"",name:"buttonLabel",required:!1,type:{name:"ReactNode"}},classes:{defaultValue:{value:"{}"},description:"",name:"classes",required:!1,type:{name:"DialogClasses"}}}}}catch{}try{Header.displayName="Header",Header.__docgenInfo={description:"",displayName:"Header",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"ReactNode"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"((e: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}},classes:{defaultValue:{value:`{\r
            wrap: [],\r
            title: [],\r
        }`},description:"",name:"classes",required:!1,type:{name:"DialogHeaderClasses"}}}}}catch{}try{Footer.displayName="Footer",Footer.__docgenInfo={description:"",displayName:"Footer",props:{buttonLabel:{defaultValue:null,description:"",name:"buttonLabel",required:!0,type:{name:"ReactNode"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"((e: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}},classes:{defaultValue:{value:`{\r
            wrap: [],\r
            button: [],\r
        }`},description:"",name:"classes",required:!1,type:{name:"DialogFooterClasses"}}}}}catch{}try{ProgressBar.displayName="ProgressBar",ProgressBar.__docgenInfo={description:"",displayName:"ProgressBar",props:{isActive:{defaultValue:null,description:"",name:"isActive",required:!0,type:{name:"boolean"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"number"}},max:{defaultValue:null,description:"",name:"max",required:!0,type:{name:"number"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"(e: MouseEvent<HTMLButtonElement, MouseEvent>) => void"}}}}}catch{}export{f as D,v as P};