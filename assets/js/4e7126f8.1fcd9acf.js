"use strict";(self.webpackChunklangflow_docs=self.webpackChunklangflow_docs||[]).push([[5772],{16322:(e,t,s)=>{s.r(t),s.d(t,{contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>d,toc:()=>o});var i=s(74848),n=s(28453);const r={},l="Get Messages",d={type:"api",id:"get-messages",title:"Get Messages",description:"",slug:"/get-messages",frontMatter:{},api:{tags:["Monitor"],operationId:"get_messages_api_v1_monitor_messages_get",parameters:[{name:"flow_id",in:"query",required:!1,schema:{anyOf:[{type:"string"},{type:"null"}],title:"Flow Id"}},{name:"session_id",in:"query",required:!1,schema:{anyOf:[{type:"string"},{type:"null"}],title:"Session Id"}},{name:"sender",in:"query",required:!1,schema:{anyOf:[{type:"string"},{type:"null"}],title:"Sender"}},{name:"sender_name",in:"query",required:!1,schema:{anyOf:[{type:"string"},{type:"null"}],title:"Sender Name"}},{name:"order_by",in:"query",required:!1,schema:{anyOf:[{type:"string"},{type:"null"}],default:"timestamp",title:"Order By"}}],responses:{200:{description:"Successful Response",content:{"application/json":{schema:{type:"array",items:{properties:{id:{anyOf:[{type:"string"},{type:"string",format:"uuid"},{type:"null"}],title:"Id"},flow_id:{anyOf:[{type:"string",format:"uuid"},{type:"null"}],title:"Flow Id"},timestamp:{type:"string",format:"date-time",title:"Timestamp"},sender:{type:"string",title:"Sender"},sender_name:{type:"string",title:"Sender Name"},session_id:{type:"string",title:"Session Id"},text:{type:"string",title:"Text"},files:{items:{type:"string"},type:"array",title:"Files",default:[]},edit:{type:"boolean",title:"Edit"},properties:{anyOf:[{properties:{text_color:{anyOf:[{type:"string"},{type:"null"}],title:"Text Color"},background_color:{anyOf:[{type:"string"},{type:"null"}],title:"Background Color"},edited:{type:"boolean",title:"Edited",default:!1},source:{properties:{id:{anyOf:[{type:"string"},{type:"null"}],title:"Id",description:"The id of the source component."},display_name:{anyOf:[{type:"string"},{type:"null"}],title:"Display Name",description:"The display name of the source component."},source:{anyOf:[{type:"string"},{type:"null"}],title:"Source",description:"The source of the message. Normally used to display the model name (e.g. 'gpt-4o')"}},type:"object",title:"Source"},icon:{anyOf:[{type:"string"},{type:"null"}],title:"Icon"},allow_markdown:{type:"boolean",title:"Allow Markdown",default:!1},state:{type:"string",enum:["partial","complete"],title:"State",default:"complete"},targets:{items:{},type:"array",title:"Targets",default:[]}},type:"object",title:"Properties"},{type:"null"}]},category:{anyOf:[{type:"string"},{type:"null"}],title:"Category"},content_blocks:{anyOf:[{items:{properties:{title:{type:"string",title:"Title"},contents:{items:{type:"object"},type:"array",title:"Contents"},allow_markdown:{type:"boolean",title:"Allow Markdown",default:!0},media_url:{anyOf:[{items:{type:"string"},type:"array"},{type:"null"}],title:"Media Url"}},type:"object",required:["title","contents"],title:"ContentBlock",description:"A block of content that can contain different types of content."},type:"array"},{type:"null"}],title:"Content Blocks"}},type:"object",required:["sender","sender_name","session_id","text","edit"],title:"MessageResponse"},title:"Response Get Messages Api V1 Monitor Messages Get"}}}},422:{description:"Validation Error",content:{"application/json":{schema:{properties:{detail:{items:{properties:{loc:{items:{anyOf:[{type:"string"},{type:"integer"}]},type:"array",title:"Location"},msg:{type:"string",title:"Message"},type:{type:"string",title:"Error Type"}},type:"object",required:["loc","msg","type"],title:"ValidationError"},type:"array",title:"Detail"}},type:"object",title:"HTTPValidationError"}}}}},description:"Get Messages",method:"get",path:"/api/v1/monitor/messages",securitySchemes:{OAuth2PasswordBearer:{type:"oauth2",flows:{password:{scopes:{},tokenUrl:"api/v1/login"}}},"API key query":{type:"apiKey",in:"query",name:"x-api-key"},"API key header":{type:"apiKey",in:"header",name:"x-api-key"}},info:{title:"Langflow",version:"1.1.0"},postman:{name:"Get Messages",description:{type:"text/plain"},url:{path:["api","v1","monitor","messages"],host:["{{baseUrl}}"],query:[{description:{content:"",type:"text/plain"},key:"flow_id",value:"<string>"},{description:{content:"",type:"text/plain"},key:"session_id",value:"<string>"},{description:{content:"",type:"text/plain"},key:"sender",value:"<string>"},{description:{content:"",type:"text/plain"},key:"sender_name",value:"<string>"},{description:{content:"",type:"text/plain"},key:"order_by",value:"<string>"}],variable:[]},method:"GET"}},source:"@site/openapi.json",sourceDirName:".",permalink:"/api/get-messages",previous:{title:"Delete Vertex Builds",permalink:"/api/delete-vertex-builds"},next:{title:"Delete Messages",permalink:"/api/delete-messages"}},o=[];function a(e){const t={h1:"h1",header:"header",p:"p",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"get-messages",children:"Get Messages"})}),"\n",(0,i.jsx)(t.p,{children:"Get Messages"}),"\n",(0,i.jsxs)("table",{style:{display:"table",width:"100%"},children:[(0,i.jsx)("thead",{children:(0,i.jsx)("tr",{children:(0,i.jsx)("th",{style:{textAlign:"left"},children:"Query Parameters"})})}),(0,i.jsxs)("tbody",{children:[(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"flow_id"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" Flow Id"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"session_id"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" Session Id"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"sender"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" Sender"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"sender_name"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" Sender Name"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"order_by"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" Order By"})]})})]})]}),"\n",(0,i.jsxs)("table",{style:{display:"table",width:"100%"},children:[(0,i.jsx)("thead",{children:(0,i.jsx)("tr",{children:(0,i.jsx)("th",{style:{textAlign:"left"},children:"Responses"})})}),(0,i.jsxs)("tbody",{children:[(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsxs)("div",{style:{display:"flex"},children:[(0,i.jsx)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"},children:(0,i.jsx)("code",{children:"200"})}),(0,i.jsx)("div",{children:(0,i.jsx)(t.p,{children:"Successful Response"})})]}),(0,i.jsx)("div",{children:(0,i.jsxs)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:[(0,i.jsx)("thead",{children:(0,i.jsx)("tr",{children:(0,i.jsxs)("th",{style:{textAlign:"left"},children:[(0,i.jsx)("span",{children:"Schema "}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,i.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,i.jsx)("div",{})]})})}),(0,i.jsx)("tbody",{children:(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("span",{style:{opacity:"0.6"},children:" object[]"}),(0,i.jsx)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:(0,i.jsxs)("tbody",{children:[(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"id"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" Id"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,i.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"flow_id"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" Flow Id"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,i.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"timestamp"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" date-time"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,i.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"sender"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" Sender"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"sender_name"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" Sender Name"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"session_id"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" Session Id"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"text"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" Text"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"files"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" string[]"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,i.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"edit"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" Edit"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"properties"}),(0,i.jsx)("span",{style:{opacity:"0.6"}}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,i.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"category"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" Category"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,i.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"content_blocks"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" Content Blocks"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,i.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})})]})})]})})})]})})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsxs)("div",{style:{display:"flex"},children:[(0,i.jsx)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"},children:(0,i.jsx)("code",{children:"422"})}),(0,i.jsx)("div",{children:(0,i.jsx)(t.p,{children:"Validation Error"})})]}),(0,i.jsx)("div",{children:(0,i.jsxs)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:[(0,i.jsx)("thead",{children:(0,i.jsx)("tr",{children:(0,i.jsxs)("th",{style:{textAlign:"left"},children:[(0,i.jsx)("span",{children:"Schema "}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,i.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,i.jsx)("div",{})]})})}),(0,i.jsx)("tbody",{children:(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"detail"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" object[]"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,i.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,i.jsx)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:(0,i.jsxs)("tbody",{children:[(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"loc"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" undefined[]"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"msg"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" Message"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"type"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" Error Type"})]})})]})})]})})})]})})]})})]})]})]})}function c(e){void 0===e&&(e={});const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>l,x:()=>d});var i=s(96540);const n={},r=i.createContext(n);function l(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);