"use strict";(globalThis.webpackChunk_hiroyoshi_mori_react_components_bulma=globalThis.webpackChunk_hiroyoshi_mori_react_components_bulma||[]).push([[880],{"./node_modules/@storybook/addon-actions/dist/chunk-WFFRPTHA.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Nw:()=>actions,Sz:()=>PARAM_KEY,aD:()=>action});var uuid__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/uuid/dist/esm-browser/v4.js"),_storybook_preview_api__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("@storybook/preview-api"),_storybook_global__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("@storybook/global"),_storybook_core_events_preview_errors__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/core-events/dist/errors/preview-errors.mjs"),PARAM_KEY="actions",config={depth:10,clearOnStoryChange:!0,limit:50},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},isReactSyntheticEvent=e=>!!("object"==typeof e&&e&&findProto(e,proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name))&&"function"==typeof e.persist),serializeArg=a=>{if(isReactSyntheticEvent(a)){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return"object"==typeof view&&view?.constructor.name==="Window"&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}return a},generateId=()=>"object"==typeof crypto&&"function"==typeof crypto.getRandomValues?(0,uuid__WEBPACK_IMPORTED_MODULE_2__.Z)():Date.now().toString(36)+Math.random().toString(36).substring(2);function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){if(options.implicit){let storyRenderer=("__STORYBOOK_PREVIEW__"in _storybook_global__WEBPACK_IMPORTED_MODULE_1__.global?_storybook_global__WEBPACK_IMPORTED_MODULE_1__.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find(render=>"playing"===render.phase||"rendering"===render.phase);if(storyRenderer){let deprecated=!window?.FEATURES?.disallowImplicitActionsInRenderV8,error=new _storybook_core_events_preview_errors__WEBPACK_IMPORTED_MODULE_3__.is({phase:storyRenderer.phase,name,deprecated});if(deprecated)console.warn(error);else throw error}}let channel=_storybook_preview_api__WEBPACK_IMPORTED_MODULE_0__.addons.getChannel(),id=generateId(),serializedArgs=args.map(serializeArg),actionDisplayToEmit={id,count:0,data:{name,args:args.length>1?serializedArgs:serializedArgs[0]},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit("storybook/actions/action-event",actionDisplayToEmit)};return handler.isAction=!0,handler}var actions=(...args)=>{let options=config,names=args;1===names.length&&Array.isArray(names[0])&&([names]=names),1!==names.length&&"string"!=typeof names[names.length-1]&&(options={...config,...names.pop()});let namesObject=names[0];(1!==names.length||"string"==typeof namesObject)&&(namesObject={},names.forEach(name=>{namesObject[name]=name}));let actionsObject={};return Object.keys(namesObject).forEach(name=>{actionsObject[name]=action(namesObject[name],options)}),actionsObject}},"./node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{aD:()=>_chunk_WFFRPTHA_mjs__WEBPACK_IMPORTED_MODULE_0__.aD});var _chunk_WFFRPTHA_mjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-actions/dist/chunk-WFFRPTHA.mjs")},"./src/stories/components/element/input/select.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ColorType:()=>ColorType,Default:()=>Default,FontSize:()=>FontSize,Multiple:()=>Multiple,SizeWithMultiple:()=>SizeWithMultiple,SizeWithoutMultiple:()=>SizeWithoutMultiple,State:()=>State,WithAttributes:()=>WithAttributes,WithClasses:()=>WithClasses,WithDatasets:()=>WithDatasets,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/index.ts"),_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/utils/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");let __WEBPACK_DEFAULT_EXPORT__={title:"React Component/Element/Select",component:_components__WEBPACK_IMPORTED_MODULE_1__.Ph,tags:["autodocs"],parameters:{componentSubtitle:"Select Element",docs:{description:{component:"This component shows select for form.<br>In Bulma doc: https://bulma.io/documentation/form/select/"}}},argTypes:{name:{control:"text",description:"Field name",table:{type:{summary:"string"}}},id:{control:"text",description:"Field ID",table:{type:{summary:"string"},defaultValue:{summary:"undefined"}}},options:{control:"object",description:"Options to show",table:{type:{summary:"(OptionProps|OptGroupProps)[]",detail:(0,_utils__WEBPACK_IMPORTED_MODULE_2__.e6)(`
                            ({
                                value: string,
                                disabled?: boolean,
                                label?: string,
                                selected?: boolean,
                                classes?: string[],
                                attributes?: OptionHTMLAttributes<HTMLOptionElement>,
                                datasets?: Map<string, string>,
                            } as OptionProps | {
                                isOptGroup: true,
                                label: string,
                                options: OptionProps[],
                                currentValues?: string[],
                                disabled?: boolean,
                                classes?: {
                                    optgroup?: string[],
                                    option?: string[],
                                },
                                attributes?: OptgroupHTMLAttributes<HTMLOptGroupElement>,
                                datasets?: Map<string, string?,
                            } as OptGroupProps)[]
                        `)}}},currentValues:{control:"object",description:"Values currently chosen",table:{type:{summary:"string[]"},defaultValue:{summary:"[]"}}},multiple:{control:"boolean",description:"Enable to choose multiple options in the list",table:{defaultValue:{summary:"false"}}},size:{control:"number",description:"The number of rows in the list that should be visible at one time",table:{type:{summary:"number"},defaultValue:{summary:"undefined"}}},colorType:{control:"select",options:["default"].concat(_components__WEBPACK_IMPORTED_MODULE_1__.oT),mapping:{Default:""},description:"Colors",table:{type:{summary:_components__WEBPACK_IMPORTED_MODULE_1__.oT.join("|")},defaultValue:{summary:"undefined"}}},state:{control:"select",options:["default"].concat(_components__WEBPACK_IMPORTED_MODULE_1__.PO),mapping:{Default:""},description:"",table:{type:{summary:_components__WEBPACK_IMPORTED_MODULE_1__.PO.join("|")},defaultValue:{summary:"undefined"}}},fontSize:{control:"select",options:["default"].concat(_components__WEBPACK_IMPORTED_MODULE_1__.zf),mapping:{Default:""},description:"Font size",table:{type:{summary:_components__WEBPACK_IMPORTED_MODULE_1__.zf.join("|")},defaultValue:{summary:"undefined"}}},onChange:{action:"function",description:"Function called when value changed",table:{type:{summary:"(e: React.ChangeEvent<HTMLElement>) => void"},defaultValue:{summary:"undefined"}}},classes:{control:"object",description:"Style classes",table:{type:{summary:"SelectClasses",detail:(0,_utils__WEBPACK_IMPORTED_MODULE_2__.e6)(`
                            {
                                div?: string[],
                                select?: string[],
                                optgroup?: string[],
                                option?: string[], 
                            }
                        `)},defaultValue:{summary:"{}"}}},attributes:{control:"object",description:"Additional attributes",table:{type:{summary:"SelectAttributes",detail:(0,_utils__WEBPACK_IMPORTED_MODULE_2__.e6)(`
                            {
                                div?: HTMLAttributes<HTMLDivElement>,
                                select?: SelectHTMLAttributes<HTMLSelectElement>,
                            }
                        `)},defaultValue:{summary:"{}"}}},datasets:{control:"object",description:"Datasets",table:{type:{summary:"SelectDatasets",detail:(0,_utils__WEBPACK_IMPORTED_MODULE_2__.e6)(`
                            {
                                div?: Map<string, string>,
                                select?: Map<string, string>,
                            }
                        `)},defaultValue:{summary:"{}"}}}}},Default={render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components__WEBPACK_IMPORTED_MODULE_1__.Ph,{name:"Select",options:[{isOptGroup:!0,label:"OptGroup 1",options:[{value:"Option1"},{value:"Option2",label:"Option 2"},{value:"Option3",disabled:!0}]},{value:"Option4",label:"Option 4"},{value:"Option5"}],currentValues:["option1","option4"],onChange:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.aD)("onChange"),...args})},Multiple={...Default,args:{multiple:!0}},SizeWithoutMultiple={...Default,args:{size:3}},SizeWithMultiple={...Default,args:{multiple:!0,size:3}},ColorType={...Default,args:{colorType:"primary"}},State={...Default,args:{state:"hoverable"}},FontSize={...Default,args:{fontSize:"small"}},WithClasses={...Default,args:{classes:{div:["test-div-class"],select:["test-select-class"],optgroup:["test-optgroup-class"],option:["test-option-class"]},options:[{isOptGroup:!0,label:"OptGroup 1",options:[{value:"Option1",classes:["test-option1"]},{value:"Option2",label:"Option 2",classes:["test-option2"]},{value:"Option3",disabled:!0}],classes:{optgroup:["test-optgroup1"],option:["test-optgroup1-option"]}},{value:"Option4",label:"Option 4",classes:["test-option4"]},{value:"Option5"}]}},WithAttributes={...Default,args:{attributes:{div:{"aria-label":"Div Label"},select:{"aria-label":"Select Label"}},options:[{isOptGroup:!0,label:"OptGroup 1",options:[{value:"Option1",attributes:{"aria-label":"Option1 Label"}},{value:"Option2",label:"Option 2",attributes:{"aria-label":"Option2 Label"}},{value:"Option3",disabled:!0}],attributes:{"aria-label":"OptGroup1 Label"}},{value:"Option4",label:"Option 4",attributes:{"aria-label":"Option4 Label"}},{value:"Option5"}]}},WithDatasets={...Default,args:{datasets:{div:new Map([["id","select-div"]]),select:new Map([["id","select-select"]])},options:[{isOptGroup:!0,label:"OptGroup 1",options:[{value:"Option1",datasets:new Map([["id","select-option1"]])},{value:"Option2",label:"Option 2",datasets:new Map([["id","select-option2"]])},{value:"Option3",disabled:!0}],datasets:new Map([["id","select-optgroup1"]])},{value:"Option4",label:"Option 4",datasets:new Map([["id","select-option4"]])},{value:"Option5"}]}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  render: (args: any) => <Select name={'Select'} options={[{\n    isOptGroup: true,\n    label: 'OptGroup 1',\n    options: [{\n      value: 'Option1'\n    }, {\n      value: 'Option2',\n      label: 'Option 2'\n    }, {\n      value: 'Option3',\n      disabled: true\n    }]\n  }, {\n    value: 'Option4',\n    label: 'Option 4'\n  }, {\n    value: 'Option5'\n  }]} currentValues={['option1', 'option4']} onChange={action('onChange')} {...args} />\n}",...Default.parameters?.docs?.source}}},Multiple.parameters={...Multiple.parameters,docs:{...Multiple.parameters?.docs,source:{originalSource:"{\n  ...Default,\n  args: {\n    multiple: true\n  }\n}",...Multiple.parameters?.docs?.source}}},SizeWithoutMultiple.parameters={...SizeWithoutMultiple.parameters,docs:{...SizeWithoutMultiple.parameters?.docs,source:{originalSource:"{\n  ...Default,\n  args: {\n    size: 3\n  }\n}",...SizeWithoutMultiple.parameters?.docs?.source}}},SizeWithMultiple.parameters={...SizeWithMultiple.parameters,docs:{...SizeWithMultiple.parameters?.docs,source:{originalSource:"{\n  ...Default,\n  args: {\n    multiple: true,\n    size: 3\n  }\n}",...SizeWithMultiple.parameters?.docs?.source}}},ColorType.parameters={...ColorType.parameters,docs:{...ColorType.parameters?.docs,source:{originalSource:"{\n  ...Default,\n  args: {\n    colorType: 'primary'\n  }\n}",...ColorType.parameters?.docs?.source}}},State.parameters={...State.parameters,docs:{...State.parameters?.docs,source:{originalSource:"{\n  ...Default,\n  args: {\n    state: 'hoverable'\n  }\n}",...State.parameters?.docs?.source}}},FontSize.parameters={...FontSize.parameters,docs:{...FontSize.parameters?.docs,source:{originalSource:"{\n  ...Default,\n  args: {\n    fontSize: 'small'\n  }\n}",...FontSize.parameters?.docs?.source}}},WithClasses.parameters={...WithClasses.parameters,docs:{...WithClasses.parameters?.docs,source:{originalSource:"{\n  ...Default,\n  args: {\n    classes: {\n      div: ['test-div-class'],\n      select: ['test-select-class'],\n      optgroup: ['test-optgroup-class'],\n      option: ['test-option-class']\n    },\n    options: [{\n      isOptGroup: true,\n      label: 'OptGroup 1',\n      options: [{\n        value: 'Option1',\n        classes: ['test-option1']\n      }, {\n        value: 'Option2',\n        label: 'Option 2',\n        classes: ['test-option2']\n      }, {\n        value: 'Option3',\n        disabled: true\n      }],\n      classes: {\n        optgroup: ['test-optgroup1'],\n        option: ['test-optgroup1-option']\n      }\n    }, {\n      value: 'Option4',\n      label: 'Option 4',\n      classes: ['test-option4']\n    }, {\n      value: 'Option5'\n    }]\n  }\n}",...WithClasses.parameters?.docs?.source}}},WithAttributes.parameters={...WithAttributes.parameters,docs:{...WithAttributes.parameters?.docs,source:{originalSource:"{\n  ...Default,\n  args: {\n    attributes: {\n      div: {\n        'aria-label': 'Div Label'\n      },\n      select: {\n        'aria-label': 'Select Label'\n      }\n    },\n    options: [{\n      isOptGroup: true,\n      label: 'OptGroup 1',\n      options: [{\n        value: 'Option1',\n        attributes: {\n          'aria-label': 'Option1 Label'\n        }\n      }, {\n        value: 'Option2',\n        label: 'Option 2',\n        attributes: {\n          'aria-label': 'Option2 Label'\n        }\n      }, {\n        value: 'Option3',\n        disabled: true\n      }],\n      attributes: {\n        'aria-label': 'OptGroup1 Label'\n      }\n    }, {\n      value: 'Option4',\n      label: 'Option 4',\n      attributes: {\n        'aria-label': 'Option4 Label'\n      }\n    }, {\n      value: 'Option5'\n    }]\n  }\n}",...WithAttributes.parameters?.docs?.source}}},WithDatasets.parameters={...WithDatasets.parameters,docs:{...WithDatasets.parameters?.docs,source:{originalSource:"{\n  ...Default,\n  args: {\n    datasets: {\n      div: new Map([['id', 'select-div']]),\n      select: new Map([['id', 'select-select']])\n    },\n    options: [{\n      isOptGroup: true,\n      label: 'OptGroup 1',\n      options: [{\n        value: 'Option1',\n        datasets: new Map([['id', 'select-option1']])\n      }, {\n        value: 'Option2',\n        label: 'Option 2',\n        datasets: new Map([['id', 'select-option2']])\n      }, {\n        value: 'Option3',\n        disabled: true\n      }],\n      datasets: new Map([['id', 'select-optgroup1']])\n    }, {\n      value: 'Option4',\n      label: 'Option 4',\n      datasets: new Map([['id', 'select-option4']])\n    }, {\n      value: 'Option5'\n    }]\n  }\n}",...WithDatasets.parameters?.docs?.source}}};let __namedExportsOrder=["Default","Multiple","SizeWithoutMultiple","SizeWithMultiple","ColorType","State","FontSize","WithClasses","WithAttributes","WithDatasets"]}}]);
//# sourceMappingURL=stories-components-element-input-select-stories.216d887e.iframe.bundle.js.map