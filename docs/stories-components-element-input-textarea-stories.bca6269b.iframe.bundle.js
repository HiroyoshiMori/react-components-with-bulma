"use strict";(globalThis.webpackChunk_hiroyoshi_mori_react_components_bulma=globalThis.webpackChunk_hiroyoshi_mori_react_components_bulma||[]).push([[250],{"./src/stories/components/element/input/textarea.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Attributes:()=>Attributes,Classes:()=>Classes,ColsRows:()=>ColsRows,Datasets:()=>Datasets,Default:()=>Default,Disabled:()=>Disabled,MinMax:()=>MinMax,Placeholder:()=>Placeholder,Readonly:()=>Readonly,Required:()=>Required,WrapWrap:()=>WrapWrap,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__}),__webpack_require__("./node_modules/react/index.js");var _components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/index.ts"),_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/utils/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");let __WEBPACK_DEFAULT_EXPORT__={title:"React Component/Element/Textarea",component:_components__WEBPACK_IMPORTED_MODULE_1__.gx,tags:["autodocs"],parameters:{componentSubtitle:"Textarea Element",docs:{description:{component:"This component renders textarea element.<br />In Bulma doc: https://bulma.io/documentation/form/textarea/"}}},argTypes:{name:{control:"text",description:"Element name",table:{type:{summary:"string"}}},id:{control:"text",description:"Element ID",table:{type:{summary:"string"},defaultValue:{summary:"undefined"}}},children:{control:"text",description:"Contents of textarea",table:{type:{summary:"string"},defaultValue:{summary:"undefined"}}},cols:{control:"number",description:"The number of Columns of textarea",table:{type:{summary:"number"},defaultValue:{summary:"undefined"}}},rows:{control:"number",description:"The number of rows of textarea",table:{type:{summary:"number"},defaultValue:{summary:"undefined"}}},placeholder:{control:"text",description:"Placeholder which is shown when empty",table:{type:{summary:"string"},defaultValue:{summary:"undefined"}}},maxLength:{control:"number",description:"Maximum length of textarea",table:{type:{summary:"number"},defaultValue:{summary:"undefined"}}},minLength:{control:"number",description:"Minimum length of textarea",table:{type:{summary:"number"},defaultValue:{summary:"undefined"}}},wordWrap:{control:"select",options:["default","hard","soft","off"],mapping:{Default:""},description:"Wordwrap",table:{type:{summary:"hard|soft|off"},defaultValue:{summary:"undefined"}}},required:{control:"boolean",description:"Set textarea required",table:{defaultValue:{summary:"undefined"}}},disabled:{control:"boolean",description:"Set textarea disabled",table:{defaultValue:{summary:"undefined"}}},readOnly:{control:"boolean",description:"Set textarea readonly",table:{defaultValue:{summary:"undefined"}}},colorType:{control:"select",options:["default"].concat(_components__WEBPACK_IMPORTED_MODULE_1__.oT),mapping:{Default:""},description:"Color type of element",table:{type:{summary:_components__WEBPACK_IMPORTED_MODULE_1__.oT.join("|")},defaultValue:{summary:"undefined"}}},size:{control:"select",options:["default"].concat(_components__WEBPACK_IMPORTED_MODULE_1__.zf),mapping:{Default:""},description:"Size of element",table:{type:{summary:_components__WEBPACK_IMPORTED_MODULE_1__.zf.join("|")},defaultValue:{summary:"undefined"}}},state:{control:"select",options:["default"].concat(_components__WEBPACK_IMPORTED_MODULE_1__.PO),mapping:{Default:""},description:"States as pseudo-classes of textarea",table:{type:{summary:_components__WEBPACK_IMPORTED_MODULE_1__.PO.join("|")},defaultValue:{summary:"undefined"}}},classes:{control:"object",description:"Style classes",table:{type:{summary:"string[]"},defaultValue:{summary:"[]"}}},attributes:{control:"object",description:"Additional attributes",table:{type:{summary:"TextareaHTMLAttributes<HTMLTextAreaElement>",detail:(0,_utils__WEBPACK_IMPORTED_MODULE_2__.e6)(`
                            e.g.,
                            {'aria-label': 'LABEL'}
                        `)},defaultValue:{summary:"{}"}}},datasets:{control:"object",description:'Datasets for textarea. "data-" will be added at the beginning of attributes.',table:{type:{summary:"Map<string, string>",detail:(0,_utils__WEBPACK_IMPORTED_MODULE_2__.e6)(`
                            e.g.,
                            new Map([
                                ['id', 'DATA_ID'],
                                ['name', 'DATA NAME'],
                            ])
                            → data-id="DATA_ID" data-name="DATA NAME"
                        `)},defaultValue:{summary:"new Map()"}}}}},Default={render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components__WEBPACK_IMPORTED_MODULE_1__.gx,{name:"textarea",...args,children:"Textarea contents"})},ColsRows={...Default,args:{cols:80,rows:10}},Placeholder={render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components__WEBPACK_IMPORTED_MODULE_1__.gx,{name:"textarea-with-placeholder",...args}),args:{placeholder:"Placeholder"}},MinMax={...Default,args:{minLength:10,maxLength:20}},WrapWrap={...Default,args:{wrap:"hard"}},Required={...Default,args:{required:!0}},Disabled={...Default,args:{disabled:!0}},Readonly={...Default,args:{readOnly:!0}},Classes={...Default,args:{classes:["test-class"]}},Attributes={...Default,args:{attributes:{"aria-label":"Textarea Label"}}},Datasets={...Default,args:{datasets:new Map([["id","textarea-id"],["name","Textarea Name"]])}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  render: (args: any) => <Textarea name={'textarea'} {...args}>\r\n        Textarea contents\r\n    </Textarea>\n}",...Default.parameters?.docs?.source},description:{story:"Default textarea",...Default.parameters?.docs?.description}}},ColsRows.parameters={...ColsRows.parameters,docs:{...ColsRows.parameters?.docs,source:{originalSource:"{\n  ...Default,\n  args: {\n    cols: 80,\n    rows: 10\n  }\n}",...ColsRows.parameters?.docs?.source},description:{story:"Textarea with cols/rows",...ColsRows.parameters?.docs?.description}}},Placeholder.parameters={...Placeholder.parameters,docs:{...Placeholder.parameters?.docs,source:{originalSource:"{\n  render: (args: any) => <Textarea name={'textarea-with-placeholder'} {...args}></Textarea>,\n  args: {\n    placeholder: 'Placeholder'\n  }\n}",...Placeholder.parameters?.docs?.source},description:{story:"Textarea with placeholder",...Placeholder.parameters?.docs?.description}}},MinMax.parameters={...MinMax.parameters,docs:{...MinMax.parameters?.docs,source:{originalSource:"{\n  ...Default,\n  args: {\n    minLength: 10,\n    maxLength: 20\n  }\n}",...MinMax.parameters?.docs?.source},description:{story:"Textarea with maxLength/minLength",...MinMax.parameters?.docs?.description}}},WrapWrap.parameters={...WrapWrap.parameters,docs:{...WrapWrap.parameters?.docs,source:{originalSource:"{\n  ...Default,\n  args: {\n    wrap: 'hard'\n  }\n}",...WrapWrap.parameters?.docs?.source},description:{story:"Textarea with word wrap",...WrapWrap.parameters?.docs?.description}}},Required.parameters={...Required.parameters,docs:{...Required.parameters?.docs,source:{originalSource:"{\n  ...Default,\n  args: {\n    required: true\n  }\n}",...Required.parameters?.docs?.source},description:{story:"Required textarea",...Required.parameters?.docs?.description}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"{\n  ...Default,\n  args: {\n    disabled: true\n  }\n}",...Disabled.parameters?.docs?.source},description:{story:"Disabled textarea",...Disabled.parameters?.docs?.description}}},Readonly.parameters={...Readonly.parameters,docs:{...Readonly.parameters?.docs,source:{originalSource:"{\n  ...Default,\n  args: {\n    readOnly: true\n  }\n}",...Readonly.parameters?.docs?.source},description:{story:"Readonly textarea",...Readonly.parameters?.docs?.description}}},Classes.parameters={...Classes.parameters,docs:{...Classes.parameters?.docs,source:{originalSource:"{\n  ...Default,\n  args: {\n    classes: ['test-class']\n  }\n}",...Classes.parameters?.docs?.source},description:{story:"Textarea with style classes",...Classes.parameters?.docs?.description}}},Attributes.parameters={...Attributes.parameters,docs:{...Attributes.parameters?.docs,source:{originalSource:"{\n  ...Default,\n  args: {\n    attributes: {\n      'aria-label': 'Textarea Label'\n    }\n  }\n}",...Attributes.parameters?.docs?.source},description:{story:"Textarea with additional attributes",...Attributes.parameters?.docs?.description}}},Datasets.parameters={...Datasets.parameters,docs:{...Datasets.parameters?.docs,source:{originalSource:"{\n  ...Default,\n  args: {\n    datasets: new Map([['id', 'textarea-id'], ['name', 'Textarea Name']])\n  }\n}",...Datasets.parameters?.docs?.source},description:{story:"Textarea with datasets",...Datasets.parameters?.docs?.description}}};let __namedExportsOrder=["Default","ColsRows","Placeholder","MinMax","WrapWrap","Required","Disabled","Readonly","Classes","Attributes","Datasets"]}}]);
//# sourceMappingURL=stories-components-element-input-textarea-stories.bca6269b.iframe.bundle.js.map