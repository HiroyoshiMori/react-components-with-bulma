import{j as r,a as zr}from"./jsx-runtime-29545a09.js";import{r as i}from"./index-76fb7be0.js";import{H as kr,S as Rr}from"./index-091ab165.js";import{s as p}from"./sprintf-65311fc1.js";import{A as ue}from"./index-d7d424f4.js";import"./_commonjsHelpers-de833af9.js";const R=({itemTotal:l,current:t=1,labels:s={},link:u,position:A="centered",style:br,size:H,classes:e={},onClick:c})=>{var $,Z,B,G,J,K,Q,U,X,Y,ee;if(["previous","next","ellipsis"].forEach(n=>{let o;switch(n){case"previous":o=r(i.Fragment,{children:"Previous"});break;case"next":o=r(i.Fragment,{children:"Next"});break;case"ellipsis":o=r(i.Fragment,{children:"…"});break}s[n]===void 0&&(s[n]=o)}),["wrap","previous","next","list","link","ellipsis"].forEach(n=>{e[n]===void 0&&(e[n]=[])}),e.wrap){if(e.wrap.includes("pagination")||e.wrap.push("pagination"),A){const n=kr.join("|");if(n){const o=`^is-(${n})$`;ue(e.wrap,new RegExp(o))||($=e.wrap)==null||$.push("is-"+A)}}if(br&&(e.wrap.includes("rounded")||(Z=e.wrap)==null||Z.push("is-rounded")),H){const n=Rr.join("|");if(n){const o=`^is-(${n})$`;ue(e.wrap,new RegExp(o))||(B=e.wrap)==null||B.push("is-"+H)}}}e.previous&&!e.previous.includes("pagination-previous")&&e.previous.push("pagination-previous"),e.next&&!e.next.includes("pagination-next")&&e.next.push("pagination-next"),e.list&&!e.list.includes("pagination-list")&&e.list.push("pagination-list"),e.link&&!e.link.includes("pagination-link")&&e.link.push("pagination-link"),e.ellipsis&&!e.ellipsis.includes("pagination-ellipsis")&&e.ellipsis.push("pagination-ellipsis");const I=t<=1,O=t>=l;return I&&((G=e.previous)==null||G.push("is-disabled")),O&&((J=e.next)==null||J.push("is-disabled")),r(i.Fragment,{children:zr("nav",{className:(K=e.wrap)==null?void 0:K.join(" "),role:"navigation","aria-label":"pagination",children:[r(i.Fragment,{children:I?r("span",{className:(Q=e.previous)==null?void 0:Q.join(" "),children:s.previous}):r("a",{className:(U=e.previous)==null?void 0:U.join(" "),href:u?p.sprintf(u,t-1):void 0,onClick:c?n=>c(n,t-1):void 0,children:s.previous})}),r(i.Fragment,{children:O?r("span",{className:(X=e==null?void 0:e.next)==null?void 0:X.join(" "),children:s.next}):r("a",{className:(Y=e==null?void 0:e.next)==null?void 0:Y.join(" "),href:u?p.sprintf(u,t+1):void 0,onClick:c?n=>c(n,t+1):void 0,children:s.next})}),r("ul",{className:(ee=e.list)==null?void 0:ee.join(" "),children:function(){var re,ae,ne,te,ie,oe,se;const n=[];let o=0;return t-2>=1&&(n.push(r(i.Fragment,{children:r("li",{children:r("a",{className:(re=e.link)==null?void 0:re.join(" "),href:u?p.sprintf(u,1):void 0,onClick:c?m=>c(m,1):void 0,children:"1"})})},"pagination-"+ ++o)),t-3>=1&&n.push(r(i.Fragment,{children:r("li",{children:r("span",{className:(ae=e.ellipsis)==null?void 0:ae.join(" "),children:s==null?void 0:s.ellipsis})})},"pagination-"+ ++o))),t-1>=1&&n.push(r(i.Fragment,{children:r("li",{children:r("a",{className:(ne=e.link)==null?void 0:ne.join(" "),href:u?p.sprintf(u,t-1):void 0,onClick:c?m=>c(m,t-1):void 0,children:t-1})})},"pagination-"+ ++o)),n.push(r(i.Fragment,{children:r("li",{children:r("span",{className:(te=e.link)==null?void 0:te.concat(["is-current"]).join(" "),children:t})})},"pagination-"+ ++o)),t+1<=l&&n.push(r(i.Fragment,{children:r("li",{children:r("a",{className:(ie=e.link)==null?void 0:ie.join(" "),href:u?p.sprintf(u,t+1):void 0,onClick:c?m=>c(m,t+1):void 0,children:t+1})})},"pagination-"+ ++o)),t+2<=l&&(t+3<=l&&n.push(r(i.Fragment,{children:r("li",{children:r("span",{className:(oe=e.ellipsis)==null?void 0:oe.join(" "),children:s==null?void 0:s.ellipsis})})},"pagination-"+ ++o)),n.push(r(i.Fragment,{children:r("li",{children:r("a",{className:(se=e.link)==null?void 0:se.join(" "),href:u?p.sprintf(u,l):void 0,onClick:c?m=>c(m,l):void 0,children:l})})},"pagination-"+ ++o))),r(i.Fragment,{children:n})}()})]})})};try{R.displayName="Pagination",R.__docgenInfo={description:"",displayName:"Pagination",props:{itemTotal:{defaultValue:null,description:"",name:"itemTotal",required:!0,type:{name:"number"}},current:{defaultValue:{value:"1"},description:"",name:"current",required:!1,type:{name:"number"}},labels:{defaultValue:{value:"{}"},description:"",name:"labels",required:!1,type:{name:"PaginationLabels"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"enum",value:[{value:'"rounded"'}]}},position:{defaultValue:{value:"centered"},description:"",name:"position",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"string"}},classes:{defaultValue:{value:"{}"},description:"",name:"classes",required:!1,type:{name:"PaginationClasses"}},link:{defaultValue:null,description:"",name:"link",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((e: MouseEvent<HTMLAnchorElement, MouseEvent>, page: number) => void) | ((e: MouseEvent<HTMLAnchorElement, MouseEvent>, page: number) => void)"}}}}}catch{}try{Pagination.displayName="Pagination",Pagination.__docgenInfo={description:"",displayName:"Pagination",props:{itemTotal:{defaultValue:null,description:"",name:"itemTotal",required:!0,type:{name:"number"}},current:{defaultValue:{value:"1"},description:"",name:"current",required:!1,type:{name:"number"}},labels:{defaultValue:{value:"{}"},description:"",name:"labels",required:!1,type:{name:"PaginationLabels"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"enum",value:[{value:'"rounded"'}]}},position:{defaultValue:{value:"centered"},description:"",name:"position",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"string"}},classes:{defaultValue:{value:"{}"},description:"",name:"classes",required:!1,type:{name:"PaginationClasses"}},link:{defaultValue:null,description:"",name:"link",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((e: MouseEvent<HTMLAnchorElement, MouseEvent>, page: number) => void) | ((e: MouseEvent<HTMLAnchorElement, MouseEvent>, page: number) => void)"}}}}}catch{}const Br={component:R,tags:["autodocs"]},a={render:l=>r(R,{itemTotal:1,current:1,link:"#link%d",onClick:t=>{},...l})},d={...a,args:{itemTotal:2}},g={...a,args:{itemTotal:2,current:2}},f={...a,args:{itemTotal:3}},h={...a,args:{itemTotal:3,current:2}},T={...a,args:{itemTotal:3,current:3}},v={...a,args:{itemTotal:4}},P={...a,args:{itemTotal:4,current:2}},y={...a,args:{itemTotal:4,current:3}},S={...a,args:{itemTotal:4,current:4}},F={...a,args:{itemTotal:10}},D={...a,args:{itemTotal:10,current:2}},W={...a,args:{itemTotal:10,current:3}},x={...a,args:{itemTotal:10,current:4}},C={...a,args:{itemTotal:10,current:5}},N={...a,args:{itemTotal:10,current:7}},E={...a,args:{itemTotal:10,current:8}},_={...a,args:{itemTotal:10,current:9}},V={...a,args:{itemTotal:10,current:10}},j={...a,args:{itemTotal:10,current:5,position:"left"}},q={...a,args:{itemTotal:10,current:5,position:"right"}},w={...a,args:{itemTotal:10,current:5,style:"rounded"}},M={...a,args:{itemTotal:10,current:5,size:"small"}},L={...a,args:{itemTotal:10,current:5,size:"normal"}},b={...a,args:{itemTotal:10,current:5,size:"medium"}},z={...a,args:{itemTotal:10,current:5,size:"large"}},k={...a,args:{itemTotal:10,current:5,labels:{previous:r(i.Fragment,{children:"«"}),next:r(i.Fragment,{children:"»"}),ellipsis:r(i.Fragment,{children:"∼"})}}};var ce,le,me;a.parameters={...a.parameters,docs:{...(ce=a.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: (args: any) => <Pagination itemTotal={1} current={1} link={'#link%d'} onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {}} {...args} />
}`,...(me=(le=a.parameters)==null?void 0:le.docs)==null?void 0:me.source}}};var pe,de,ge;d.parameters={...d.parameters,docs:{...(pe=d.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  ...Default,
  args: {
    itemTotal: 2
  }
}`,...(ge=(de=d.parameters)==null?void 0:de.docs)==null?void 0:ge.source}}};var fe,he,Te;g.parameters={...g.parameters,docs:{...(fe=g.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  ...Default,
  args: {
    itemTotal: 2,
    current: 2
  }
}`,...(Te=(he=g.parameters)==null?void 0:he.docs)==null?void 0:Te.source}}};var ve,Pe,ye;f.parameters={...f.parameters,docs:{...(ve=f.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  ...Default,
  args: {
    itemTotal: 3
  }
}`,...(ye=(Pe=f.parameters)==null?void 0:Pe.docs)==null?void 0:ye.source}}};var Se,Fe,De;h.parameters={...h.parameters,docs:{...(Se=h.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  ...Default,
  args: {
    itemTotal: 3,
    current: 2
  }
}`,...(De=(Fe=h.parameters)==null?void 0:Fe.docs)==null?void 0:De.source}}};var We,xe,Ce;T.parameters={...T.parameters,docs:{...(We=T.parameters)==null?void 0:We.docs,source:{originalSource:`{
  ...Default,
  args: {
    itemTotal: 3,
    current: 3
  }
}`,...(Ce=(xe=T.parameters)==null?void 0:xe.docs)==null?void 0:Ce.source}}};var Ne,Ee,_e;v.parameters={...v.parameters,docs:{...(Ne=v.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  ...Default,
  args: {
    itemTotal: 4
  }
}`,...(_e=(Ee=v.parameters)==null?void 0:Ee.docs)==null?void 0:_e.source}}};var Ve,je,qe;P.parameters={...P.parameters,docs:{...(Ve=P.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  ...Default,
  args: {
    itemTotal: 4,
    current: 2
  }
}`,...(qe=(je=P.parameters)==null?void 0:je.docs)==null?void 0:qe.source}}};var we,Me,Le;y.parameters={...y.parameters,docs:{...(we=y.parameters)==null?void 0:we.docs,source:{originalSource:`{
  ...Default,
  args: {
    itemTotal: 4,
    current: 3
  }
}`,...(Le=(Me=y.parameters)==null?void 0:Me.docs)==null?void 0:Le.source}}};var be,ze,ke;S.parameters={...S.parameters,docs:{...(be=S.parameters)==null?void 0:be.docs,source:{originalSource:`{
  ...Default,
  args: {
    itemTotal: 4,
    current: 4
  }
}`,...(ke=(ze=S.parameters)==null?void 0:ze.docs)==null?void 0:ke.source}}};var Re,Ae,He;F.parameters={...F.parameters,docs:{...(Re=F.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  ...Default,
  args: {
    itemTotal: 10
  }
}`,...(He=(Ae=F.parameters)==null?void 0:Ae.docs)==null?void 0:He.source}}};var Ie,Oe,$e;D.parameters={...D.parameters,docs:{...(Ie=D.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  ...Default,
  args: {
    itemTotal: 10,
    current: 2
  }
}`,...($e=(Oe=D.parameters)==null?void 0:Oe.docs)==null?void 0:$e.source}}};var Ze,Be,Ge;W.parameters={...W.parameters,docs:{...(Ze=W.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
  ...Default,
  args: {
    itemTotal: 10,
    current: 3
  }
}`,...(Ge=(Be=W.parameters)==null?void 0:Be.docs)==null?void 0:Ge.source}}};var Je,Ke,Qe;x.parameters={...x.parameters,docs:{...(Je=x.parameters)==null?void 0:Je.docs,source:{originalSource:`{
  ...Default,
  args: {
    itemTotal: 10,
    current: 4
  }
}`,...(Qe=(Ke=x.parameters)==null?void 0:Ke.docs)==null?void 0:Qe.source}}};var Ue,Xe,Ye;C.parameters={...C.parameters,docs:{...(Ue=C.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
  ...Default,
  args: {
    itemTotal: 10,
    current: 5
  }
}`,...(Ye=(Xe=C.parameters)==null?void 0:Xe.docs)==null?void 0:Ye.source}}};var er,rr,ar;N.parameters={...N.parameters,docs:{...(er=N.parameters)==null?void 0:er.docs,source:{originalSource:`{
  ...Default,
  args: {
    itemTotal: 10,
    current: 7
  }
}`,...(ar=(rr=N.parameters)==null?void 0:rr.docs)==null?void 0:ar.source}}};var nr,tr,ir;E.parameters={...E.parameters,docs:{...(nr=E.parameters)==null?void 0:nr.docs,source:{originalSource:`{
  ...Default,
  args: {
    itemTotal: 10,
    current: 8
  }
}`,...(ir=(tr=E.parameters)==null?void 0:tr.docs)==null?void 0:ir.source}}};var or,sr,ur;_.parameters={..._.parameters,docs:{...(or=_.parameters)==null?void 0:or.docs,source:{originalSource:`{
  ...Default,
  args: {
    itemTotal: 10,
    current: 9
  }
}`,...(ur=(sr=_.parameters)==null?void 0:sr.docs)==null?void 0:ur.source}}};var cr,lr,mr;V.parameters={...V.parameters,docs:{...(cr=V.parameters)==null?void 0:cr.docs,source:{originalSource:`{
  ...Default,
  args: {
    itemTotal: 10,
    current: 10
  }
}`,...(mr=(lr=V.parameters)==null?void 0:lr.docs)==null?void 0:mr.source}}};var pr,dr,gr;j.parameters={...j.parameters,docs:{...(pr=j.parameters)==null?void 0:pr.docs,source:{originalSource:`{
  ...Default,
  args: {
    itemTotal: 10,
    current: 5,
    position: 'left'
  }
}`,...(gr=(dr=j.parameters)==null?void 0:dr.docs)==null?void 0:gr.source}}};var fr,hr,Tr;q.parameters={...q.parameters,docs:{...(fr=q.parameters)==null?void 0:fr.docs,source:{originalSource:`{
  ...Default,
  args: {
    itemTotal: 10,
    current: 5,
    position: 'right'
  }
}`,...(Tr=(hr=q.parameters)==null?void 0:hr.docs)==null?void 0:Tr.source}}};var vr,Pr,yr;w.parameters={...w.parameters,docs:{...(vr=w.parameters)==null?void 0:vr.docs,source:{originalSource:`{
  ...Default,
  args: {
    itemTotal: 10,
    current: 5,
    style: 'rounded'
  }
}`,...(yr=(Pr=w.parameters)==null?void 0:Pr.docs)==null?void 0:yr.source}}};var Sr,Fr,Dr;M.parameters={...M.parameters,docs:{...(Sr=M.parameters)==null?void 0:Sr.docs,source:{originalSource:`{
  ...Default,
  args: {
    itemTotal: 10,
    current: 5,
    size: 'small'
  }
}`,...(Dr=(Fr=M.parameters)==null?void 0:Fr.docs)==null?void 0:Dr.source}}};var Wr,xr,Cr;L.parameters={...L.parameters,docs:{...(Wr=L.parameters)==null?void 0:Wr.docs,source:{originalSource:`{
  ...Default,
  args: {
    itemTotal: 10,
    current: 5,
    size: 'normal'
  }
}`,...(Cr=(xr=L.parameters)==null?void 0:xr.docs)==null?void 0:Cr.source}}};var Nr,Er,_r;b.parameters={...b.parameters,docs:{...(Nr=b.parameters)==null?void 0:Nr.docs,source:{originalSource:`{
  ...Default,
  args: {
    itemTotal: 10,
    current: 5,
    size: 'medium'
  }
}`,...(_r=(Er=b.parameters)==null?void 0:Er.docs)==null?void 0:_r.source}}};var Vr,jr,qr;z.parameters={...z.parameters,docs:{...(Vr=z.parameters)==null?void 0:Vr.docs,source:{originalSource:`{
  ...Default,
  args: {
    itemTotal: 10,
    current: 5,
    size: 'large'
  }
}`,...(qr=(jr=z.parameters)==null?void 0:jr.docs)==null?void 0:qr.source}}};var wr,Mr,Lr;k.parameters={...k.parameters,docs:{...(wr=k.parameters)==null?void 0:wr.docs,source:{originalSource:`{
  ...Default,
  args: {
    itemTotal: 10,
    current: 5,
    labels: {
      previous: <Fragment>&#171;</Fragment>,
      next: <Fragment>&#187;</Fragment>,
      ellipsis: <Fragment>&sim;</Fragment>
    }
  }
}`,...(Lr=(Mr=k.parameters)==null?void 0:Mr.docs)==null?void 0:Lr.source}}};const Gr=["Default","TwoPage","TwoPageWithCurrent2","ThreePage","ThreePageWithCurrent2","ThreePageWithCurrent3","FourPage","FourPageWith2","FourPageWith3","FourPageWith4","TenPage","TenPageWithCurrent2","TenPageWithCurrent3","TenPageWithCurrent4","TenPageWithCurrent5","TenPageWithCurrent7","TenPageWithCurrent8","TenPageWithCurrent9","TenPageWithCurrent10","Left","Right","Rounded","Small","Normal","Medium","Large","Labels"];export{a as Default,v as FourPage,P as FourPageWith2,y as FourPageWith3,S as FourPageWith4,k as Labels,z as Large,j as Left,b as Medium,L as Normal,q as Right,w as Rounded,M as Small,F as TenPage,V as TenPageWithCurrent10,D as TenPageWithCurrent2,W as TenPageWithCurrent3,x as TenPageWithCurrent4,C as TenPageWithCurrent5,N as TenPageWithCurrent7,E as TenPageWithCurrent8,_ as TenPageWithCurrent9,f as ThreePage,h as ThreePageWithCurrent2,T as ThreePageWithCurrent3,d as TwoPage,g as TwoPageWithCurrent2,Gr as __namedExportsOrder,Br as default};
