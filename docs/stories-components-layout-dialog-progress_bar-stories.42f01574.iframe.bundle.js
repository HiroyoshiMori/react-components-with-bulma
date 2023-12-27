"use strict";(globalThis.webpackChunk_hiroyoshi_mori_react_components_bulma=globalThis.webpackChunk_hiroyoshi_mori_react_components_bulma||[]).push([[479],{"./src/stories/components/layout/dialog/progress_bar.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,WithAttributes:()=>WithAttributes,WithDatasets:()=>WithDatasets,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__}),__webpack_require__("./node_modules/react/index.js");var _components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/index.ts"),_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/utils/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");let __WEBPACK_DEFAULT_EXPORT__={title:"React Component/Layout/Progress bar",component:_components__WEBPACK_IMPORTED_MODULE_1__.ko,tags:["autodocs"],parameters:{componentSubtitle:"Progress bar using Dialog Box",docs:{description:{component:"This component shows progress bar.<br>In Bulma doc: https://bulma.io/documentation/elements/progress/"}}},argTypes:{isActive:{control:"boolean",description:"true when dialog is active"},title:{control:"text",description:"Dialog title",table:{type:{summary:"ReactNode"}}},value:{control:"number",description:"Value of progress bar"},max:{control:"number",description:"Max value of progress bar"},onClose:{action:"function",description:"Function to close dialog"},classes:{control:"object",description:"Style classes",table:{type:{summary:"ProgressBarClasses",detail:(0,_utils__WEBPACK_IMPORTED_MODULE_2__.e6)(`
                            {
                                dialog?: {
                                    wrap?: string[],
                                    header?: string[],
                                    content?: string[],
                                    footer?: string[],
                                },
                                progressbar?: string[],
                            }
                        `)},defaultValue:{summary:"[]"}}},attributes:{control:"object",description:"Additional attributes",table:{type:{summary:"DialogAttributes",detail:(0,_utils__WEBPACK_IMPORTED_MODULE_2__.e6)(`
                            {
                                dialog?: {
                                    wrap?: HTMLAttributes<HTMLDivElement>,
                                    card?: HTMLAttributes<HTMLDivElement>,
                                    header?: {
                                        wrap?: HTMLAttributes<HTMLDivElement>,
                                        title?: HTMLAttributes<HTMLDivElement>,
                                        button?: HTMLAttributes<HTMLButtonElement>,
                                    },
                                    content?: HTMLAttributes<HTMLElement>,
                                    footer?: {,
                                        wrap?: HTMLAttributes<HTMLElement>,
                                        button?: HTMLAttributes<HTMLButtonElement>,
                                    },
                                },
                                progressbar?: HTMLAttributes<HTMLElement>,
                            }
                        `)},defaultValue:{summary:"{}"}}},datasets:{control:"object",description:"Datasets",table:{type:{summary:"DialogDatasets",detail:(0,_utils__WEBPACK_IMPORTED_MODULE_2__.e6)(`
                            {
                                dialog?: {
                                    wrap?: Map<string, string>,
                                    card?: Map<string, string>,
                                    header?: {
                                        wrap?: Map<string, string>,
                                        title?: Map<string, string>,
                                        button?: Map<string, string>,
                                    },
                                    content?: Map<string, string>,
                                    footer?: {,
                                        wrap?: Map<string, string>,
                                        button?: Map<string, string>,
                                    },
                                },
                                progressbar?: Map<string, string>,
                            }
                        `)},defaultValue:{summary:"new Map()"}}}}},Default={render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components__WEBPACK_IMPORTED_MODULE_1__.ko,{isActive:!0,title:"Progress Bar",value:1,max:100,onClose:()=>{},...args})},WithAttributes={...Default,args:{attributes:{progressbar:{"aria-label":"Progress Bar"},dialog:{wrap:{"aria-label":"Dialog Box"},card:{"aria-label":"Dialog Box Card"},header:{wrap:{"aria-label":"Dialog Box Header"},title:{"aria-label":"Dialog Box Header Title"},button:{"aria-label":"Dialog Box Header Button"}},content:{"aria-label":"Dialog Box Content"},footer:{wrap:{"aria-label":"Dialog Box Footer"},button:{"aria-label":"Dialog Box Footer Button"}}}}}},WithDatasets={...Default,args:{datasets:{progressbar:new Map([["id","progressbar"],["name","dialog-progressbar"]]),dialog:{wrap:new Map([["id","wrap"],["name","dialog-wrap"]]),card:new Map([["id","card"],["name","dialog-card"]]),header:{wrap:new Map([["id","header-wrap"],["name","dialog-header-wrap"]]),title:new Map([["id","header-title"],["name","dialog-header-title"]]),button:new Map([["id","header-button"],["name","dialog-header-button"]])},content:new Map([["id","content"],["name","dialog-content"]]),footer:{wrap:new Map([["id","footer-wrap"],["name","dialog-footer-wrap"]]),button:new Map([["id","footer-button"],["name","dialog-footer-button"]])}}}}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: (args: any) => <ProgressBar isActive={true} title="Progress Bar" value={1} max={100} onClose={() => {\n    return;\n  }} {...args} />\n}',...Default.parameters?.docs?.source}}},WithAttributes.parameters={...WithAttributes.parameters,docs:{...WithAttributes.parameters?.docs,source:{originalSource:"{\n  ...Default,\n  args: {\n    attributes: {\n      progressbar: {\n        'aria-label': 'Progress Bar'\n      },\n      dialog: {\n        wrap: {\n          'aria-label': 'Dialog Box'\n        },\n        card: {\n          'aria-label': 'Dialog Box Card'\n        },\n        header: {\n          wrap: {\n            'aria-label': 'Dialog Box Header'\n          },\n          title: {\n            'aria-label': 'Dialog Box Header Title'\n          },\n          button: {\n            'aria-label': 'Dialog Box Header Button'\n          }\n        },\n        content: {\n          'aria-label': 'Dialog Box Content'\n        },\n        footer: {\n          wrap: {\n            'aria-label': 'Dialog Box Footer'\n          },\n          button: {\n            'aria-label': 'Dialog Box Footer Button'\n          }\n        }\n      }\n    }\n  }\n}",...WithAttributes.parameters?.docs?.source}}},WithDatasets.parameters={...WithDatasets.parameters,docs:{...WithDatasets.parameters?.docs,source:{originalSource:"{\n  ...Default,\n  args: {\n    datasets: {\n      progressbar: new Map([['id', 'progressbar'], ['name', 'dialog-progressbar']]),\n      dialog: {\n        wrap: new Map([['id', 'wrap'], ['name', 'dialog-wrap']]),\n        card: new Map([['id', 'card'], ['name', 'dialog-card']]),\n        header: {\n          wrap: new Map([['id', 'header-wrap'], ['name', 'dialog-header-wrap']]),\n          title: new Map([['id', 'header-title'], ['name', 'dialog-header-title']]),\n          button: new Map([['id', 'header-button'], ['name', 'dialog-header-button']])\n        },\n        content: new Map([['id', 'content'], ['name', 'dialog-content']]),\n        footer: {\n          wrap: new Map([['id', 'footer-wrap'], ['name', 'dialog-footer-wrap']]),\n          button: new Map([['id', 'footer-button'], ['name', 'dialog-footer-button']])\n        }\n      }\n    }\n  }\n}",...WithDatasets.parameters?.docs?.source}}};let __namedExportsOrder=["Default","WithAttributes","WithDatasets"]}}]);
//# sourceMappingURL=stories-components-layout-dialog-progress_bar-stories.42f01574.iframe.bundle.js.map