(globalThis.webpackChunk_hiroyoshi_mori_react_components_bulma=globalThis.webpackChunk_hiroyoshi_mori_react_components_bulma||[]).push([[179],{"./node_modules/@storybook/addon-interactions/dist sync recursive":module=>{function webpackEmptyContext(req){var e=Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/addon-interactions/dist sync recursive",module.exports=webpackEmptyContext},"./storybook-config-entry.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";var external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),external_STORYBOOK_MODULE_CHANNELS_=__webpack_require__("@storybook/channels");let pipeline=x=>x(),importers=[async path=>{if(!/^\.[\\/](?:src(?:[\\/](?!\.)(?:(?:(?!(?:^|[\\/])\.).)*?)[\\/]|[\\/]|$)(?!\.)(?=.)[^\\/]*?\.mdx)$/.exec(path))return;let pathRemainder=path.substring(6);return __webpack_require__("./src lazy recursive ^\\.\\/.*$ include: (?:[\\\\/]src(?:[\\\\/](?%21\\.)(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/]%7C[\\\\/]%7C$)(?%21\\.)(?=.)[^\\\\/]*?\\.mdx)$")("./"+pathRemainder)},async path=>{if(!/^\.[\\/](?:src(?:[\\/](?!\.)(?:(?:(?!(?:^|[\\/])\.).)*?)[\\/]|[\\/]|$)(?!\.)(?=.)[^\\/]*?\.stories\.(js|jsx|mjs|ts|tsx))$/.exec(path))return;let pathRemainder=path.substring(6);return __webpack_require__("./src lazy recursive ^\\.\\/.*$ include: (?:[\\\\/]src(?:[\\\\/](?%21\\.)(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/]%7C[\\\\/]%7C$)(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.(js%7Cjsx%7Cmjs%7Cts%7Ctsx))$")("./"+pathRemainder)}];async function importFn(path){for(let i=0;i<importers.length;i++){let moduleExports=await pipeline(()=>importers[i](path));if(moduleExports)return moduleExports}}let channel=(0,external_STORYBOOK_MODULE_CHANNELS_.createBrowserChannel)({page:"preview"});external_STORYBOOK_MODULE_PREVIEW_API_.addons.setChannel(channel),"DEVELOPMENT"===external_STORYBOOK_MODULE_GLOBAL_.global.CONFIG_TYPE&&(window.__STORYBOOK_SERVER_CHANNEL__=channel);let preview=new external_STORYBOOK_MODULE_PREVIEW_API_.PreviewWeb;window.__STORYBOOK_PREVIEW__=preview,window.__STORYBOOK_STORY_STORE__=preview.storyStore,window.__STORYBOOK_ADDONS_CHANNEL__=channel,window.__STORYBOOK_CLIENT_API__=new external_STORYBOOK_MODULE_PREVIEW_API_.ClientApi({storyStore:preview.storyStore}),preview.initialize({importFn:importFn,getProjectAnnotations:()=>(0,external_STORYBOOK_MODULE_PREVIEW_API_.composeConfigs)([__webpack_require__("./node_modules/@storybook/react/dist/entry-preview.mjs"),__webpack_require__("./node_modules/@storybook/react/dist/entry-preview-docs.mjs"),__webpack_require__("./node_modules/@storybook/addon-links/dist/preview.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/docs/preview.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/actions/preview.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/backgrounds/preview.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/measure/preview.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/outline/preview.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/highlight/preview.js"),__webpack_require__("./node_modules/@storybook/addon-interactions/dist/preview.js"),__webpack_require__("./.storybook/preview.tsx")])})},"./.storybook/preview.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>_storybook_preview}),__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");function _createMdxContent(props){let _components=Object.assign({h2:"h2",p:"p",hr:"hr"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{isTemplate:!0}),"\n",(0,jsx_runtime.jsx)(dist.Dx,{}),"\n",(0,jsx_runtime.jsx)(dist.QE,{}),"\n",(0,jsx_runtime.jsx)(dist.dk,{}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"default-implementation",children:"Default Implementation"}),"\n",(0,jsx_runtime.jsx)(dist.sq,{}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"inputs",children:"Inputs"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"The component accepts the following inputs (props):"}),"\n",(0,jsx_runtime.jsx)(dist.ZX,{}),"\n",(0,jsx_runtime.jsx)(_components.hr,{}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"additional-variations",children:"Additional variations"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Listed below are additional variations of the component."}),"\n",(0,jsx_runtime.jsx)(dist.fQ,{})]})}function MDXContent(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}__webpack_require__("./node_modules/bulma/css/bulma.css");let _storybook_preview={parameters:{actions:{argTypesRegex:"^on[A-Z].*"},controls:{hideNoControlsWarning:!0,expanded:!0},docs:{page:MDXContent,toc:!0}}}},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./src lazy recursive ^\\.\\/.*$ include: (?:[\\\\/]src(?:[\\\\/](?%21\\.)(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/]%7C[\\\\/]%7C$)(?%21\\.)(?=.)[^\\\\/]*?\\.mdx)$":(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./stories/Configure.mdx":["./src/stories/Configure.mdx",769]};function webpackAsyncContext(req){if(!__webpack_require__.o(map,req))return Promise.resolve().then(()=>{var e=Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e});var ids=map[req],id=ids[0];return __webpack_require__.e(ids[1]).then(()=>__webpack_require__(id))}webpackAsyncContext.keys=()=>Object.keys(map),webpackAsyncContext.id="./src lazy recursive ^\\.\\/.*$ include: (?:[\\\\/]src(?:[\\\\/](?%21\\.)(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/]%7C[\\\\/]%7C$)(?%21\\.)(?=.)[^\\\\/]*?\\.mdx)$",module.exports=webpackAsyncContext},"./src lazy recursive ^\\.\\/.*$ include: (?:[\\\\/]src(?:[\\\\/](?%21\\.)(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/]%7C[\\\\/]%7C$)(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.(js%7Cjsx%7Cmjs%7Cts%7Ctsx))$":(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./stories/components/element/button/button.stories":["./src/stories/components/element/button/button.stories.tsx",796,361,490,633],"./stories/components/element/button/button.stories.tsx":["./src/stories/components/element/button/button.stories.tsx",796,361,490,633],"./stories/components/element/image/image.stories":["./src/stories/components/element/image/image.stories.tsx",796,361,490,950],"./stories/components/element/image/image.stories.tsx":["./src/stories/components/element/image/image.stories.tsx",796,361,490,950],"./stories/components/element/input/checkbox.stories":["./src/stories/components/element/input/checkbox.stories.tsx",796,361,490,760],"./stories/components/element/input/checkbox.stories.tsx":["./src/stories/components/element/input/checkbox.stories.tsx",796,361,490,760],"./stories/components/element/input/file.stories":["./src/stories/components/element/input/file.stories.tsx",796,361,490,167],"./stories/components/element/input/file.stories.tsx":["./src/stories/components/element/input/file.stories.tsx",796,361,490,167],"./stories/components/element/input/radio.stories":["./src/stories/components/element/input/radio.stories.tsx",796,361,490,136],"./stories/components/element/input/radio.stories.tsx":["./src/stories/components/element/input/radio.stories.tsx",796,361,490,136],"./stories/components/element/input/select.stories":["./src/stories/components/element/input/select.stories.tsx",796,361,490,880],"./stories/components/element/input/select.stories.tsx":["./src/stories/components/element/input/select.stories.tsx",796,361,490,880],"./stories/components/element/input/text_box.stories":["./src/stories/components/element/input/text_box.stories.tsx",796,361,490,529],"./stories/components/element/input/text_box.stories.tsx":["./src/stories/components/element/input/text_box.stories.tsx",796,361,490,529],"./stories/components/element/input/textarea.stories":["./src/stories/components/element/input/textarea.stories.tsx",796,361,490,250],"./stories/components/element/input/textarea.stories.tsx":["./src/stories/components/element/input/textarea.stories.tsx",796,361,490,250],"./stories/components/element/label/heading.stories":["./src/stories/components/element/label/heading.stories.tsx",796,361,490,297],"./stories/components/element/label/heading.stories.tsx":["./src/stories/components/element/label/heading.stories.tsx",796,361,490,297],"./stories/components/element/label/icon.stories":["./src/stories/components/element/label/icon.stories.tsx",796,361,490,63],"./stories/components/element/label/icon.stories.tsx":["./src/stories/components/element/label/icon.stories.tsx",796,361,490,63],"./stories/components/element/label/icon_text.stories":["./src/stories/components/element/label/icon_text.stories.tsx",796,361,490,786],"./stories/components/element/label/icon_text.stories.tsx":["./src/stories/components/element/label/icon_text.stories.tsx",796,361,490,786],"./stories/components/element/label/label.stories":["./src/stories/components/element/label/label.stories.tsx",796,361,490,602],"./stories/components/element/label/label.stories.tsx":["./src/stories/components/element/label/label.stories.tsx",796,361,490,602],"./stories/components/element/label/tag.stories":["./src/stories/components/element/label/tag.stories.tsx",796,361,490,861],"./stories/components/element/label/tag.stories.tsx":["./src/stories/components/element/label/tag.stories.tsx",796,361,490,861],"./stories/components/element/label/tags.stories":["./src/stories/components/element/label/tags.stories.tsx",796,361,490,900],"./stories/components/element/label/tags.stories.tsx":["./src/stories/components/element/label/tags.stories.tsx",796,361,490,900],"./stories/components/form/checkbox_group.stories":["./src/stories/components/form/checkbox_group.stories.tsx",796,361,490,698],"./stories/components/form/checkbox_group.stories.tsx":["./src/stories/components/form/checkbox_group.stories.tsx",796,361,490,698],"./stories/components/form/input.stories":["./src/stories/components/form/input.stories.tsx",796,361,490,291],"./stories/components/form/input.stories.tsx":["./src/stories/components/form/input.stories.tsx",796,361,490,291],"./stories/components/form/radio_group.stories":["./src/stories/components/form/radio_group.stories.tsx",796,361,490,152],"./stories/components/form/radio_group.stories.tsx":["./src/stories/components/form/radio_group.stories.tsx",796,361,490,152],"./stories/components/form/select.stories":["./src/stories/components/form/select.stories.tsx",796,361,490,383],"./stories/components/form/select.stories.tsx":["./src/stories/components/form/select.stories.tsx",796,361,490,383],"./stories/components/form/textarea.stories":["./src/stories/components/form/textarea.stories.tsx",796,361,490,613],"./stories/components/form/textarea.stories.tsx":["./src/stories/components/form/textarea.stories.tsx",796,361,490,613],"./stories/components/layout/box/block.stories":["./src/stories/components/layout/box/block.stories.tsx",796,361,490,639],"./stories/components/layout/box/block.stories.tsx":["./src/stories/components/layout/box/block.stories.tsx",796,361,490,639],"./stories/components/layout/box/box.stories":["./src/stories/components/layout/box/box.stories.tsx",796,361,490,829],"./stories/components/layout/box/box.stories.tsx":["./src/stories/components/layout/box/box.stories.tsx",796,361,490,829],"./stories/components/layout/box/notifications.stories":["./src/stories/components/layout/box/notifications.stories.tsx",796,361,490,868],"./stories/components/layout/box/notifications.stories.tsx":["./src/stories/components/layout/box/notifications.stories.tsx",796,361,490,868],"./stories/components/layout/box/panel.stories":["./src/stories/components/layout/box/panel.stories.tsx",796,361,490,171],"./stories/components/layout/box/panel.stories.tsx":["./src/stories/components/layout/box/panel.stories.tsx",796,361,490,171],"./stories/components/layout/breadcrumb/breadcrumbs.stories":["./src/stories/components/layout/breadcrumb/breadcrumbs.stories.tsx",796,361,490,283],"./stories/components/layout/breadcrumb/breadcrumbs.stories.tsx":["./src/stories/components/layout/breadcrumb/breadcrumbs.stories.tsx",796,361,490,283],"./stories/components/layout/card/card.stories":["./src/stories/components/layout/card/card.stories.tsx",796,361,458],"./stories/components/layout/card/card.stories.tsx":["./src/stories/components/layout/card/card.stories.tsx",796,361,458],"./stories/components/layout/dialog/dialog_box.stories":["./src/stories/components/layout/dialog/dialog_box.stories.tsx",796,361,490,430],"./stories/components/layout/dialog/dialog_box.stories.tsx":["./src/stories/components/layout/dialog/dialog_box.stories.tsx",796,361,490,430],"./stories/components/layout/dialog/progress_bar.stories":["./src/stories/components/layout/dialog/progress_bar.stories.tsx",796,361,490,479],"./stories/components/layout/dialog/progress_bar.stories.tsx":["./src/stories/components/layout/dialog/progress_bar.stories.tsx",796,361,490,479],"./stories/components/layout/list/list.stories":["./src/stories/components/layout/list/list.stories.tsx",796,361,490,258],"./stories/components/layout/list/list.stories.tsx":["./src/stories/components/layout/list/list.stories.tsx",796,361,490,258],"./stories/components/layout/navigation/dropdown.stories":["./src/stories/components/layout/navigation/dropdown.stories.tsx",796,361,490,113],"./stories/components/layout/navigation/dropdown.stories.tsx":["./src/stories/components/layout/navigation/dropdown.stories.tsx",796,361,490,113],"./stories/components/layout/navigation/menu.stories":["./src/stories/components/layout/navigation/menu.stories.tsx",796,361,490,783],"./stories/components/layout/navigation/menu.stories.tsx":["./src/stories/components/layout/navigation/menu.stories.tsx",796,361,490,783],"./stories/components/layout/navigation/navbar.stories":["./src/stories/components/layout/navigation/navbar.stories.tsx",796,361,490,115],"./stories/components/layout/navigation/navbar.stories.tsx":["./src/stories/components/layout/navigation/navbar.stories.tsx",796,361,490,115],"./stories/components/layout/pagination/pagination.stories":["./src/stories/components/layout/pagination/pagination.stories.tsx",796,361,490,912],"./stories/components/layout/pagination/pagination.stories.tsx":["./src/stories/components/layout/pagination/pagination.stories.tsx",796,361,490,912],"./stories/components/layout/tab/tab.stories":["./src/stories/components/layout/tab/tab.stories.tsx",796,361,490,977],"./stories/components/layout/tab/tab.stories.tsx":["./src/stories/components/layout/tab/tab.stories.tsx",796,361,490,977],"./stories/components/layout/table/table.stories":["./src/stories/components/layout/table/table.stories.tsx",796,361,490,147],"./stories/components/layout/table/table.stories.tsx":["./src/stories/components/layout/table/table.stories.tsx",796,361,490,147]};function webpackAsyncContext(req){if(!__webpack_require__.o(map,req))return Promise.resolve().then(()=>{var e=Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e});var ids=map[req],id=ids[0];return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(()=>__webpack_require__(id))}webpackAsyncContext.keys=()=>Object.keys(map),webpackAsyncContext.id="./src lazy recursive ^\\.\\/.*$ include: (?:[\\\\/]src(?:[\\\\/](?%21\\.)(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/]%7C[\\\\/]%7C$)(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.(js%7Cjsx%7Cmjs%7Cts%7Ctsx))$",module.exports=webpackAsyncContext},"@storybook/channels":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CHANNELS__},"@storybook/client-logger":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CLIENT_LOGGER__},"@storybook/core-events":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CORE_EVENTS__},"@storybook/global":module=>{"use strict";module.exports=__STORYBOOK_MODULE_GLOBAL__},"@storybook/preview-api":module=>{"use strict";module.exports=__STORYBOOK_MODULE_PREVIEW_API__}},__webpack_require__=>{var __webpack_exec__=moduleId=>__webpack_require__(__webpack_require__.s=moduleId);__webpack_require__.O(0,[196],()=>__webpack_exec__("./storybook-config-entry.js")),__webpack_require__.O()}]);