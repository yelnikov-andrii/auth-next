(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[459],{3236:function(n,e,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return i(4375)}])},8139:function(n,e,i){"use strict";var o=i(5893),r=i(7294),l=i(1664),t=i.n(l),s=i(2293),c=i(155),a=i(5861),h=i(2630),x=i(1939),u=i(1163);e.Z=()=>{let{isAuthenticated:n,name:e,setIsAuthenticated:i}=(0,r.useContext)(x.V),l=(0,u.useRouter)();return(0,o.jsx)(s.Z,{position:"static",children:(0,o.jsxs)(c.Z,{children:[(0,o.jsx)(a.Z,{variant:"h6",component:"div",sx:{flexGrow:1},children:"My App"}),(0,o.jsx)("nav",{children:(0,o.jsxs)("ul",{children:[(0,o.jsx)("li",{children:(0,o.jsx)(t(),{href:"/",legacyBehavior:!0,children:(0,o.jsx)(h.Z,{component:"a",color:"inherit",children:"Home"})})}),(0,o.jsx)("li",{children:(0,o.jsx)(t(),{href:"/login",legacyBehavior:!0,children:(0,o.jsx)(h.Z,{component:"a",color:"inherit",children:n?"Welcome, ".concat(e,"!"):"Login"})})}),n&&(0,o.jsx)("li",{children:(0,o.jsx)(h.Z,{color:"inherit",onClick:()=>{i(!1),l.push("/login")},children:"Logout"})})]})})]})})}},4375:function(n,e,i){"use strict";i.r(e);var o=i(5893),r=i(7294),l=i(1163),t=i.n(l),s=i(7357),c=i(5861),a=i(2554),h=i(2630),x=i(1939),u=i(8139);e.default=()=>{let{setName:n,setIsAuthenticated:e,name:i,isAuthenticated:l}=(0,r.useContext)(x.V);return console.log(i,l),(0,r.useEffect)(()=>{l&&t().push("/posts")},[l]),(0,o.jsxs)("div",{children:[(0,o.jsx)(u.Z,{}),(0,o.jsxs)(s.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"center",padding:"20px"},children:[(0,o.jsx)(c.Z,{variant:"h4",sx:{marginBottom:"20px"},children:"Login"}),(0,o.jsx)(a.Z,{label:"Name",value:i,onChange:e=>n(e.target.value),sx:{marginBottom:"20px"}}),(0,o.jsx)(h.Z,{variant:"contained",color:"primary",onClick:n=>{n.preventDefault(),e(!0)},sx:{width:"120px"},children:"Login"})]})]})}}},function(n){n.O(0,[877,470,774,888,179],function(){return n(n.s=3236)}),_N_E=n.O()}]);