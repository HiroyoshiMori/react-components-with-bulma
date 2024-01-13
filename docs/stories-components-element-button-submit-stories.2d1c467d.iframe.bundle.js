"use strict";(globalThis.webpackChunk_hiroyoshi_mori_react_components_bulma=globalThis.webpackChunk_hiroyoshi_mori_react_components_bulma||[]).push([[0],{"./node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{aD:()=>action});var v4=__webpack_require__("./node_modules/uuid/dist/esm-browser/v4.js"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),preview_errors=__webpack_require__("./node_modules/@storybook/core-events/dist/errors/preview-errors.mjs"),config={depth:10,clearOnStoryChange:!0,limit:50},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},isReactSyntheticEvent=e=>!!("object"==typeof e&&e&&findProto(e,proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name))&&"function"==typeof e.persist),serializeArg=a=>{if(isReactSyntheticEvent(a)){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return"object"==typeof view&&view?.constructor.name==="Window"&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}return a},generateId=()=>"object"==typeof crypto&&"function"==typeof crypto.getRandomValues?(0,v4.Z)():Date.now().toString(36)+Math.random().toString(36).substring(2);function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){if(options.implicit){let storyRenderer=("__STORYBOOK_PREVIEW__"in external_STORYBOOK_MODULE_GLOBAL_.global?external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find(render=>"playing"===render.phase||"rendering"===render.phase);if(storyRenderer){let deprecated=!window?.FEATURES?.disallowImplicitActionsInRenderV8,error=new preview_errors.is({phase:storyRenderer.phase,name,deprecated});if(deprecated)console.warn(error);else throw error}}let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id=generateId(),serializedArgs=args.map(serializeArg),actionDisplayToEmit={id,count:0,data:{name,args:args.length>1?serializedArgs:serializedArgs[0]},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit("storybook/actions/action-event",actionDisplayToEmit)};return handler.isAction=!0,handler}},"./src/stories/components/element/button/submit.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ColorType:()=>ColorType,Default:()=>Default,DisableButton:()=>DisableButton,ElementSize:()=>ElementSize,InputButton:()=>InputButton,InputImage:()=>InputImage,WithAttributes:()=>WithAttributes,WithClasses:()=>WithClasses,WithDatasets:()=>WithDatasets,WithoutDefaultClasses:()=>WithoutDefaultClasses,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/index.ts"),_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/utils/index.ts"),_assets_sample_image_jpg__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/stories/assets/sample_image.jpg"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");let __WEBPACK_DEFAULT_EXPORT__={title:"React Component/Element/Submit",component:_components__WEBPACK_IMPORTED_MODULE_1__.k4,tags:["autodocs"],parameters:{componentSubtitle:"Input[type=submit,button] Element",docs:{description:{component:"This component renders input[type=submit,button] element."}}},argTypes:{name:{control:"text",description:"Element name",table:{type:{summary:"string"}}},id:{control:"text",description:"Element ID",table:{type:{summary:"string"},defaultValue:{summary:"undefined"}}},onClick:{action:"function",description:"Function called when clicked",table:{type:{summary:"(e: React.MouseEvent<HTMLElement>) => void"}}},additionalProps:{control:"object",description:"Additional properties",table:{type:{summary:"SubmitButtonFields | SubmitImageFields",detail:(0,_utils__WEBPACK_IMPORTED_MODULE_2__.e6)(`
                            {
                                type: 'submit' | 'button',
                                value?: string | number,
                                colorType?: ColorTypes,
                                colorLight?: boolean,
                                size?: SizeTypes,
                                noDefaultClasses?: boolean,
                            } as SubmitButtonFields | {
                                type: 'image',
                                src: string,
                                alt?: string,
                            } as SubmitImageFields
                        `)}}},prefix:{control:"text",description:"Prefix of element name",table:{defaultValue:{summary:"false"}}},disabled:{control:"boolean",description:"Make submit button disabled",table:{defaultValue:{summary:"false"}}},classes:{control:"object",description:"Style classes for submit",table:{type:{summary:"string[]"},defaultValue:{summary:"[]"}}},attributes:{control:"object",description:"Additional attributes for submit",table:{type:{summary:"InputHTMLAttributes<HTMLInputElement>",detail:(0,_utils__WEBPACK_IMPORTED_MODULE_2__.e6)(`
                            e.g., {'aria-label': 'LABEL'}
                        `)},defaultValue:{summary:"{}"}}},datasets:{control:"object",description:'Datasets for submit button. "data-" will be added at the beginning of attributes.',table:{type:{summary:"Map<string, string>",detail:(0,_utils__WEBPACK_IMPORTED_MODULE_2__.e6)(`
                            e.g.,
                            new Map([
                                ['id', 'DATA_ID'],
                                ['name', 'DATA NAME'],
                            ])
                            → data-id="DATA_ID" data-name="DATA NAME"
                        `)},defaultValue:{summary:"new Map()"}}}}},defaultSubmitArgs={name:"InputSubmit",onClick:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.aD)("onClick"),prefix:"pre-",additionalProps:{type:"submit",value:"Submit Value"}},defaultImageArgs={name:"InputImage",onClick:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.aD)("onClick"),prefix:"pre-",additionalProps:{type:"image",src:_assets_sample_image_jpg__WEBPACK_IMPORTED_MODULE_3__,alt:"Alternative Text"}},Default={render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components__WEBPACK_IMPORTED_MODULE_1__.k4,{...defaultSubmitArgs,...args})},InputButton={...Default,args:{additionalProps:{...defaultSubmitArgs.additionalProps,type:"button"}}},InputImage={...Default,args:{...defaultImageArgs,classes:["image","is-128x128"]}},ColorType={...Default,args:{additionalProps:{...defaultSubmitArgs.additionalProps,colorType:"primary"}}},ElementSize={...Default,args:{additionalProps:{...defaultSubmitArgs.additionalProps,size:"small"}}},WithoutDefaultClasses={...Default,args:{additionalProps:{...defaultSubmitArgs.additionalProps,noDefaultClasses:!0}}},DisableButton={...Default,args:{disabled:!0}},WithClasses={...Default,args:{classes:["test-class"]}},WithAttributes={...Default,args:{attributes:{"aria-label":"Button Label"}}},WithDatasets={...Default,args:{datasets:new Map([["id","button-id"],["name","Button Name"]])}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  render: (args: any) => <Submit {...defaultSubmitArgs} {...args} />\n}",...Default.parameters?.docs?.source},description:{story:"Default submit button (input[type=submit])",...Default.parameters?.docs?.description}}},InputButton.parameters={...InputButton.parameters,docs:{...InputButton.parameters?.docs,source:{originalSource:"{\n  ...Default,\n  args: {\n    additionalProps: {\n      ...defaultSubmitArgs.additionalProps,\n      type: 'button'\n    }\n  }\n}",...InputButton.parameters?.docs?.source},description:{story:"Butt (input[type=button])",...InputButton.parameters?.docs?.description}}},InputImage.parameters={...InputImage.parameters,docs:{...InputImage.parameters?.docs,source:{originalSource:"{\n  ...Default,\n  args: {\n    ...defaultImageArgs,\n    classes: ['image', 'is-128x128']\n  }\n}",...InputImage.parameters?.docs?.source},description:{story:"Image button (input[type=image])<br />\r\nWith additional classes: image, is-128x128",...InputImage.parameters?.docs?.description}}},ColorType.parameters={...ColorType.parameters,docs:{...ColorType.parameters?.docs,source:{originalSource:"{\n  ...Default,\n  args: {\n    additionalProps: {\n      ...defaultSubmitArgs.additionalProps,\n      colorType: 'primary'\n    }\n  }\n}",...ColorType.parameters?.docs?.source},description:{story:"Submit button with color type",...ColorType.parameters?.docs?.description}}},ElementSize.parameters={...ElementSize.parameters,docs:{...ElementSize.parameters?.docs,source:{originalSource:"{\n  ...Default,\n  args: {\n    additionalProps: {\n      ...defaultSubmitArgs.additionalProps,\n      size: 'small'\n    }\n  }\n}",...ElementSize.parameters?.docs?.source},description:{story:"Submit button with element size",...ElementSize.parameters?.docs?.description}}},WithoutDefaultClasses.parameters={...WithoutDefaultClasses.parameters,docs:{...WithoutDefaultClasses.parameters?.docs,source:{originalSource:"{\n  ...Default,\n  args: {\n    additionalProps: {\n      ...defaultSubmitArgs.additionalProps,\n      noDefaultClasses: true\n    }\n  }\n}",...WithoutDefaultClasses.parameters?.docs?.source},description:{story:"Submit button without default classes",...WithoutDefaultClasses.parameters?.docs?.description}}},DisableButton.parameters={...DisableButton.parameters,docs:{...DisableButton.parameters?.docs,source:{originalSource:"{\n  ...Default,\n  args: {\n    disabled: true\n  }\n}",...DisableButton.parameters?.docs?.source},description:{story:"Disable button",...DisableButton.parameters?.docs?.description}}},WithClasses.parameters={...WithClasses.parameters,docs:{...WithClasses.parameters?.docs,source:{originalSource:"{\n  ...Default,\n  args: {\n    classes: ['test-class']\n  }\n}",...WithClasses.parameters?.docs?.source},description:{story:"Button with classes",...WithClasses.parameters?.docs?.description}}},WithAttributes.parameters={...WithAttributes.parameters,docs:{...WithAttributes.parameters?.docs,source:{originalSource:"{\n  ...Default,\n  args: {\n    attributes: {\n      'aria-label': 'Button Label'\n    }\n  }\n}",...WithAttributes.parameters?.docs?.source},description:{story:"Button with attributes",...WithAttributes.parameters?.docs?.description}}},WithDatasets.parameters={...WithDatasets.parameters,docs:{...WithDatasets.parameters?.docs,source:{originalSource:"{\n  ...Default,\n  args: {\n    datasets: new Map([['id', 'button-id'], ['name', 'Button Name']])\n  }\n}",...WithDatasets.parameters?.docs?.source},description:{story:"Button with datasets",...WithDatasets.parameters?.docs?.description}}};let __namedExportsOrder=["Default","InputButton","InputImage","ColorType","ElementSize","WithoutDefaultClasses","DisableButton","WithClasses","WithAttributes","WithDatasets"]},"./src/stories/assets/sample_image.jpg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"cbd98790833662265677.jpg"}}]);
//# sourceMappingURL=stories-components-element-button-submit-stories.2d1c467d.iframe.bundle.js.map