(self["webpackChunk_1kx_sourceCode"]=self["webpackChunk_1kx_sourceCode"]||[]).push([[438],{4495:function(e){e.exports={chart:"chart___i4B1N"}},88940:function(e){e.exports={card:"card___eYFHE",label:"label___3uRpP",value:"value___prMx_",amount:"amount___1wQ15",info:"info___2SEw3",item:"item___eCWYG",arr:"arr___Pu7D4",green:"green___2Ymnf",red:"red___17Kjm",result_icon:"result_icon___3NYni",container:"container___NnR-4",left:"left___28n4G",icon_wrap:"icon_wrap___3lvBI",icon:"icon___Po8B9",icon_osd:"icon_osd___3nyu6",symbol:"symbol___KIt9H",title:"title___207cm",valueLine:"valueLine___uvZ_z",params:"params___h3Pvv",row:"row___G6_Dz",manage:"manage___2uKnl",right:"right___3SYD8",chart_wrap:"chart_wrap___3Qh22",aprs:"aprs___3DHMz",btns_wrap:"btns_wrap___3TCj5",btn:"btn___v8RIA"}},55836:function(e){e.exports={container:"container___1mQMQ"}},78618:function(e){e.exports={card:"card___2kas4",label:"label___4nI_e",value:"value___1i7pO",amount:"amount___3P-QU",info:"info___3TRNx",item:"item___1PZBX",arr:"arr___3wtx6",green:"green___3qBGA",red:"red___1Pkmu",result_icon:"result_icon___1fX7f",title:"title___3cp6t",dollar:"dollar___1GYTa",input_number:"input_number___znxar",primary:"primary___2XacG",desc:"desc___4Fnfy"}},94287:function(e){e.exports={search_wrap:"search_wrap___1CViK",btn:"btn___1M_4n",icon:"icon___8ZfGQ",table:"table___3fxv4",alignRight:"alignRight___2PSUN",alignLeft:"alignLeft___3sCa2",td1:"td1___1rpes",td2:"td2___1lXuC",td3:"td3___4IJuR",green:"green___1q3Eq",red:"red___1ydNd",desc:"desc___sZW3v",icon_wrap:"icon_wrap___2XFV2",icon_osd:"icon_osd___3DW17",symbol:"symbol___2GO2Z",no:"no___3mw35",full_name:"full_name___2uFMu",action:"action___3AI0c",lprate:"lprate___2fTJ7",token:"token___2pAjj",info:"info___W8-mw",title:"title___1ehgP",container:"container___XMgMm"}},75171:function(e,s,a){"use strict";a.r(s),a.d(s,{default:function(){return ce}});var n=a(3786),t=a(8870),i=(a(55250),a(52060)),r=a(39428),l=a(3182),o=a(2824),c=a(94287),d=a.n(c),u=a(86914),_=a(67294),m=(a(22385),a(59381)),x=a(32636),p=a.n(x),h=a(39423),v=a(48521),j=e=>{var s=e.setShowPanelIndex;return(0,v.jsx)(m.Z,{title:(0,u.Z)("deposit"),color:"#03CDC1",overlayClassName:p().tooltip,getPopupContainer:()=>document.getElementById("J_Page")||document.body,children:(0,v.jsx)("span",{className:p().deposit,onClick:e=>{e.stopPropagation(),s(0)},children:(0,v.jsx)(h.Z,{type:"icon-plus"})})})},Z=e=>{var s=e.setShowPanelIndex;return(0,v.jsx)(m.Z,{title:(0,u.Z)("remove"),color:"#03CDC1",overlayClassName:p().tooltip,getPopupContainer:()=>document.getElementById("J_Page")||document.body,children:(0,v.jsx)("span",{className:p().remove,onClick:e=>{e.stopPropagation(),s(1)},children:(0,v.jsx)(h.Z,{type:"icon-minus"})})})},w=a(94530),b=a(73167),f=a(78129),g=(a(71194),a(37079)),N=a(88940),y=a.n(N),k=a(21512),I=a(1879),S=a(4495),C=a.n(S),F=a(905),P="#20BBBB",B=0,D=100;function T(e){var s=e.utilRate,a=e.assets,n=a.base,t=a.optimal,i=a.slope1,r=a.slope2,l=()=>{for(var e=n,s=t,a=i,l=r,o=new F.Z(a).minus(e).div(new F.Z(s).minus(B)),c=new F.Z(l).minus(a).div(new F.Z(D).minus(s)),d=[],u=B;u<D+1;u++)u<s?d.push(o.multipliedBy(new F.Z(u).minus(B)).plus(e).toFixed(2)):d.push(c.multipliedBy(new F.Z(u).minus(s)).plus(a).toFixed(2));return d};return(0,_.useEffect)((()=>{var e=document.getElementById("J_Chart");if(e){var a=I.S1(e),n={xAxis:{type:"category",show:!1,data:Object.keys(Array.from({length:D+1})),axisTick:{alignWithLabel:!0},axisLine:{onZero:!0},axisPointer:{value:null}},yAxis:{type:"value",show:!1},series:[{data:l(),type:"line",showSymbol:!1,lineStyle:{color:P},itemStyle:{color:P},markLine:{symbol:["none","none"],label:{formatter:function(e){return console.log(e),"".concat((0,u.Z)("utilization_rate"),":\n ").concat(e.value,"%")}},data:[{xAxis:s.multipliedBy(100).toNumber()}]}}],tooltip:{trigger:"axis",valueFormatter:function(e){return"Utilization Rate: "+e+"%"},formatter:function(e){return"Utilization Rate: ".concat(e[0].axisValue,"% Borrow APR: ").concat(e[0].value,"%")}}};a.setOption(n)}}),[]),(0,v.jsx)("div",{id:"J_Chart",className:C().chart})}var A=T,L=a(19159),q=a(3987),R=a(89544);function E(e){var s=e.visible,a=e.setVisible,n=e.setShowLiuidityPanelIndex,t=e.setShowBorrowPanelIndex,i=e.token,r=e.osdTokenData,l=i.userOsd,o=i.userReserve,c=i.symbol,d=i.userLpSupply,_=i.icon,m=i.tokenId,x=i.userTokenDebt,p=i.apr,h=_?(0,v.jsx)("img",{src:_,className:y().icon}):(0,v.jsx)(L.Z,{tokenId:m}),j="0",Z=new F.Z(0),w=new F.Z(o).plus(x);return Z=w.gt(0)?new F.Z(x).div(new F.Z(o).plus(x)):Z,j=Z.multipliedBy(p).toFixed(2),(0,v.jsx)(g.Z,{width:890,footer:null,open:s,getContainer:()=>document.getElementById("J_Page")||document.body,onCancel:()=>a(!1),closable:!1,wrapClassName:y().modal,children:(0,v.jsxs)("div",{className:y().container,children:[(0,v.jsxs)("div",{className:y().left,children:[(0,v.jsxs)("div",{className:y().item,children:[(0,v.jsxs)("div",{className:y().label,children:[(0,v.jsxs)("div",{className:y().icon_wrap,children:[h,(0,v.jsx)("img",{src:R.qQ,className:y().icon_osd})]}),(0,u.Z)("pool_size")]}),(0,v.jsxs)("div",{className:y().value,children:[(0,v.jsx)(q.Z,{value:o}),c," + ",(0,v.jsx)(q.Z,{value:l})," ",r.symbol]})]}),(0,v.jsxs)("div",{className:y().item,children:[(0,v.jsxs)("div",{className:y().label,children:[c," ",(0,u.Z)("lp_supply")]}),(0,v.jsx)("div",{className:y().value,children:(0,v.jsx)(q.Z,{value:d})})]}),(0,v.jsxs)("div",{className:y().item,children:[(0,v.jsxs)("div",{className:y().label,children:[(0,u.Z)("borrowed")," | ",(0,u.Z)("utilization_rate")]}),(0,v.jsx)("div",{className:y().value})]}),(0,v.jsxs)("div",{className:y().item,children:[(0,v.jsx)("div",{className:y().label,children:(0,u.Z)("reward_apr")}),(0,v.jsx)("div",{className:y().value})]}),(0,v.jsxs)("div",{className:y().item,children:[(0,v.jsx)("div",{className:y().label,children:(0,u.Z)("spot_volume")}),(0,v.jsx)("div",{className:y().value})]}),(0,v.jsxs)("div",{className:y().item,children:[(0,v.jsx)("div",{className:y().label,children:(0,u.Z)("swap_fee")}),(0,v.jsx)("div",{className:y().value})]}),(0,v.jsxs)("div",{className:y().item,children:[(0,v.jsx)("div",{className:y().label,children:(0,u.Z)("swap_fee_apr")}),(0,v.jsx)("div",{className:y().value})]}),(0,v.jsxs)("div",{className:y().item,children:[(0,v.jsx)("div",{className:y().label,children:(0,u.Z)("total_supply_apr")}),(0,v.jsx)("div",{className:y().value})]}),(0,v.jsxs)("div",{className:y().item,children:[(0,v.jsx)("div",{className:y().label,children:(0,u.Z)("insurance_pool")}),(0,v.jsx)("div",{className:y().value})]}),(0,v.jsxs)("div",{className:y().item,children:[(0,v.jsx)("div",{className:y().label,children:(0,u.Z)("protocol_treasury")}),(0,v.jsx)("div",{className:y().value})]}),(0,v.jsxs)("div",{className:y().item,children:[(0,v.jsx)("div",{className:y().label,children:(0,u.Z)("revenue_pool")}),(0,v.jsx)("div",{className:y().value})]}),(0,v.jsxs)("div",{className:y().item,children:[(0,v.jsx)("div",{className:y().label,children:(0,u.Z)("next_revenue_dist")}),(0,v.jsx)("div",{className:y().value})]})]}),(0,v.jsxs)("div",{className:y().right,children:[(0,v.jsxs)("div",{className:y().chart_wrap,children:[(0,v.jsxs)("div",{className:y().title,children:[h," ",c]}),(0,v.jsx)(A,{assets:i.assets,utilRate:Z}),(0,v.jsxs)("div",{className:y().aprs,children:[(0,v.jsxs)("div",{children:[(0,u.Z)("borrow_apr"),": ",(0,v.jsxs)("span",{className:y().red,children:[p,"%"]})]}),(0,v.jsxs)("div",{children:[(0,u.Z)("lending_apr"),": ",(0,v.jsxs)("span",{className:y().green,children:[j,"%"]})]})]})]}),(0,v.jsxs)("div",{className:y().btns_wrap,children:[(0,v.jsx)(k.Z,{onClick:()=>n(0),className:y().btn,height:"48",children:(0,u.Z)("deposit")}),(0,v.jsx)(k.Z,{onClick:()=>t(0),className:y().btn,height:"48",children:(0,u.Z)("borrow")})]})]})]})})}var z=a(49101),$=(a(77883),a(49747)),M=a(78618),H=a.n(M),Q=a(19186),G=a(75899),J=a(55902),V=a(68052),O=a(6011);function W(e){var s=(0,J.I0)(),a=e.visible,n=e.setVisible,i=e.walletChainId,c=e.tokenDatas,d=e.callback,m=e.currentWallet,x=e.osdTokenData,p=(0,_.useState)(""),h=(0,o.Z)(p,2),j=h[0],Z=h[1],w=(0,_.useState)(null),b=(0,o.Z)(w,2),f=b[0],N=b[1],y=(0,_.useState)({}),I=(0,o.Z)(y,2),S=I[0],C=I[1],F=(0,_.useState)(!1),P=(0,o.Z)(F,2),B=P[0],D=P[1],T=(0,_.useState)(!1),A=(0,o.Z)(T,2),L=A[0],q=A[1],R=(0,_.useState)(!1),E=(0,o.Z)(R,2),z=E[0],M=E[1],W=(0,_.useState)(""),U=(0,o.Z)(W,2),X=U[0],Y=U[1],K=m||{},ee=K.newPool;function se(e){Z((e||"0").toString())}function ae(){return ne.apply(this,arguments)}function ne(){return ne=(0,l.Z)((0,r.Z)().mark((function e(){var s;return(0,r.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(console.log("newpool handleSubmit"),m&&S.tokenId){e.next=3;break}return e.abrupt("return");case 3:return q(!0),e.next=6,ee({chainId:i,amount:j,price:f,currentToken:S,osdTokenDecimal:x.tokenDecimal});case 6:s=e.sent,s.error?(0,Q.y)(s.error):s.hash&&(Y(s.hash),M(!0)),q(!1);case 9:case"end":return e.stop()}}),e)}))),ne.apply(this,arguments)}function te(e){return ie.apply(this,arguments)}function ie(){return ie=(0,l.Z)((0,r.Z)().mark((function e(s){var a,n;return(0,r.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a=c.find((e=>e.tokenId===s.tokenId)),!a){e.next=5;break}d(s),e.next=15;break;case 5:if(D(!0),!m.getTokenBalanceData){e.next=13;break}return e.next=9,m.getTokenBalanceData(s.tokenId,i,s.liquidity);case 9:n=e.sent,C((0,t.Z)((0,t.Z)({},s),n)),e.next=14;break;case 13:C(s);case 14:D(!1);case 15:case"end":return e.stop()}}),e)}))),ie.apply(this,arguments)}var re=()=>{M(!1),n(!1),s({type:"tokens/getData"})};return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(g.Z,{width:420,footer:null,visible:a,getContainer:()=>document.getElementById("J_Page")||document.body,onCancel:()=>n(!1),closable:!1,wrapClassName:H().modal,children:(0,v.jsxs)(O.g,{spinning:B||L,children:[(0,v.jsx)("div",{className:H().title,children:(0,u.Z)("create_new_pool")}),(0,v.jsx)(G.Z,{left:(0,v.jsx)("div",{children:(0,u.Z)("add_amount")}),amount:j,token:S,onAmountChange:e=>se(e),onChangeToken:e=>te(e),type:"newpool"}),(0,v.jsxs)("div",{className:H().card,children:[(0,v.jsxs)("div",{className:H().label,children:[(0,u.Z)("set_price"),"(USD)"]}),(0,v.jsxs)("div",{className:H().value,children:[(0,v.jsx)("span",{className:H().dollar,children:"$"}),(0,v.jsx)($.Z,{min:0,value:f,onChange:N,className:H().input_number})]})]}),(0,v.jsxs)("div",{className:H().desc,children:[(0,u.Z)("new_pool_desc")," ",(0,v.jsx)("a",{href:"https://1kx.gitbook.io/1kx/single-side-liquidity",target:"_blank",rel:"noreferrer",children:(0,u.Z)("liquidity")})]}),(0,v.jsx)(k.Z,{height:50,align:"center",onClick:ae,conditions:[{handle:!S.tokenId,txt:(0,u.Z)("select_asset")},{handle:parseFloat(j||"0")<=0||f<=0,txt:(0,u.Z)("input_amount")},{handle:f<=0,txt:(0,u.Z)("input_price")},{handle:parseFloat(j||"0")>parseFloat(S.userTokenBalance||"0"),txt:(0,u.Z)("lack_balance")}],children:(0,u.Z)("add_liquidity")})]})}),z&&(0,v.jsx)(V.Z,{title:(0,u.Z)("newpool_created"),amountTitle:(0,u.Z)("deposited_amount"),txid:X,chainId:i,visible:z,close:re,tokenIn:(0,t.Z)((0,t.Z)({},S),{},{amount:j}),tokenOuts:[{icon:null===S||void 0===S?void 0:S.icon,symbol:(null===S||void 0===S?void 0:S.symbol)||" LP",tokenId:null===S||void 0===S?void 0:S.liquidity,amount:j}]})]})}var U=e=>{var s=e.common,a=e.tokens,n=e.wallet;return(0,t.Z)((0,t.Z)((0,t.Z)({},s),a),n)},X=(0,J.$j)(U)(W),Y=a(3150),K=a(5977),ee=a(96427),se=a(55130),ae=(0,Y.l$)(),ne="iPhone"===ae||"Android"===ae;function te(e){var s=(0,K.TH)(),a=s.query,n=(0,J.I0)(),t=e.tokenDatas,c=e.walletChainId,m=e.account,x=e.osdTokenData,p=e.dataSourceChainId,h=(e.isLogin,e.tokenDatasSorted),g=(0,_.useState)([]),N=(0,o.Z)(g,2),y=N[0],I=N[1],S=(0,_.useState)(!1),C=(0,o.Z)(S,2),P=C[0],B=C[1],D=(0,_.useState)({}),T=(0,o.Z)(D,2),A=T[0],$=T[1],M=(0,_.useState)("undefined"===typeof a.showLiq?-1:parseInt(a.showLiq)),H=(0,o.Z)(M,2),Q=H[0],G=H[1],V=(0,_.useState)("undefined"===typeof a.showBorrow?-1:parseInt(a.showBorrow)),W=(0,o.Z)(V,2),U=W[0],ae=W[1],te=(0,_.useState)(!1),ie=(0,o.Z)(te,2),re=ie[0],le=ie[1];(0,_.useEffect)((()=>{I(h||t)}),[h]);var oe=function(){var e=(0,l.Z)((0,r.Z)().mark((function e(){var s;return(0,r.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n({type:"tokens/getData"});case 2:s=e.sent,n({type:"tokens/fetchPoolInfo",payload:{datas:s}});case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,_.useEffect)((()=>{oe()}),[p,m]),(0,_.useEffect)((()=>{n({type:"tokens/fetchPoolInfo"})}),[t.length>0]),(0,_.useEffect)((()=>{"undefined"!==typeof a.showLiq&&G(parseInt(a.showLiq)),"undefined"!==typeof a.showBorrow&&ae(parseInt(a.showBorrow))}),[a]);var ce=function(){var e=(0,l.Z)((0,r.Z)().mark((function e(s,a){return(0,r.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:$(a),G(s);case 2:case"end":return e.stop()}}),e)})));return function(s,a){return e.apply(this,arguments)}}(),de=function(){var e=(0,l.Z)((0,r.Z)().mark((function e(s,a){return(0,r.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:$(a),ae(s);case 2:case"end":return e.stop()}}),e)})));return function(s,a){return e.apply(this,arguments)}}(),ue=e=>{le(!1),ce(0,e)},_e=[{title:"".concat((0,u.Z)("pools"),"/").concat((0,u.Z)("price"),"(24H)"),dataIndex:"pools_price",key:"pools_price",align:"center",render:(e,s)=>{var a=s.icon,n=s.symbol,t=s.fullName,i=s.tokenId,r=(0,Y.B2)([{token:s,amount:1}]);return(0,v.jsxs)("div",{className:d().token,children:[(0,v.jsxs)("div",{className:d().info,children:[(0,v.jsxs)("div",{className:d().icon_wrap,children:[a?(0,v.jsx)("img",{src:a,className:d().icon}):(0,v.jsx)(L.Z,{tokenId:i}),(0,v.jsx)("img",{src:R.qQ,className:d().icon_osd})]}),(0,v.jsxs)("div",{className:d().title,children:[(0,v.jsx)("div",{className:d().symbol,children:n}),(0,v.jsx)("div",{className:d().full_name,children:t})]})]}),(0,v.jsxs)("div",{className:d().amount,children:[(0,v.jsx)(q.Z,{value:r,useAbbr:!0,prefix:"$"}),(0,v.jsx)("br",{}),(0,v.jsx)("span",{className:d().green,children:" "})]})]})}},{title:(0,v.jsxs)(v.Fragment,{children:["24H ",(0,u.Z)("fee"),(0,v.jsx)("br",{}),(0,u.Z)("lp_apr"),": ",(0,u.Z)("fees"),"|",(0,u.Z)("lend")]}),dataIndex:"fee",key:"fee",align:"right",render:(e,s)=>{var a,n,t=s.dayData,i=s.usd;return t?(0==t.swapFee||null==i||"0"==i?(a=0,n=0):(a=(0,F.Z)(t.swapFee).div((0,F.Z)(Math.pow(10,18))),n=a.div((0,F.Z)(i)).multipliedBy((0,F.Z)(100)).multipliedBy((0,F.Z)(365)).toFixed(2)),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("div",{children:(0,v.jsx)(q.Z,{value:a,prefix:"$",useAbbr:!0})}),(0,v.jsxs)("div",{className:d().desc,children:[n.toString(),"%|--"]})]})):null}},{title:(0,u.Z)("pool_size"),dataIndex:"size",key:"poolInfo",align:"right",render:(e,s)=>{var a=s.userOsd,n=s.userReserve,t=s.usd;return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("div",{children:(0,v.jsx)(q.Z,{value:t,prefix:"$",useAbbr:!0})}),(0,v.jsxs)("div",{className:d().desc,children:[(0,v.jsx)(q.Z,{value:(0,Y.FH)(n,2),useAbbr:!0})," ",s.symbol," |"," ",(0,v.jsx)(q.Z,{value:(0,Y.FH)(a,2),useAbbr:!0})," ",x.symbol]})]})}},{title:(0,v.jsxs)(v.Fragment,{children:[(0,u.Z)("borrowed"),(0,v.jsx)("br",{}),(0,u.Z)("borrowed")," ",(0,u.Z)("apr"),(0,v.jsx)("br",{}),(0,u.Z)("yield_apr")]}),dataIndex:"borrowed",key:"borrowed",align:"right",width:125,render:(e,s)=>{var a=s.userTokenDebt,n=s.apr;return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("div",{children:(0,v.jsx)(q.Z,{value:a,useAbbr:!0})}),(0,v.jsxs)("div",{className:d().desc,children:[n,"%"]})]})}},{title:(0,u.Z)("spot_vol"),dataIndex:"spot",key:"spot",align:"right",render:(e,s)=>{var a=s.dayData,n=s.symbol,t=s.tokenDecimal;if(!a)return null;var i=(0,F.Z)(a.revenue).div((0,F.Z)(Math.pow(10,t))).toFixed(2).toString(),r=(0,Y.B2)([{amount:i,token:s}]);return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)("div",{className:d().desc,children:[i," ",n]}),(0,v.jsxs)("div",{className:d().desc,children:["$",r]})]})}},{title:(0,u.Z)("perp_vol"),dataIndex:"perp",key:"perp",align:"right",render:(e,s)=>{var a=s.dayData,n=s.symbol,t=s.tokenDecimal;if(!a)return null;var i=(0,F.Z)(a.perpVol).div((0,F.Z)(Math.pow(10,t))).toString(),r=(0,Y.B2)([{amount:i,token:s}]);return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)("div",{className:d().desc,children:[i," ",n]}),(0,v.jsxs)("div",{className:d().desc,children:["$",r]})]})}},{title:(0,u.Z)("borrow"),dataIndex:"borrow",key:"borrow",align:"center",render:(e,s)=>(0,v.jsxs)("div",{className:d().action,children:[parseFloat(s.userUpdatedAt)>0&&(0,v.jsx)(b.A,{setShowPanelIndex:e=>de(e,s)}),(parseFloat(s.userDebt)>0||parseFloat(s.userTotalCol)>0)&&(0,v.jsx)(b.b,{setShowPanelIndex:e=>de(e,s)})]})},{title:(0,v.jsxs)(v.Fragment,{children:[(0,u.Z)("liquidity"),(0,v.jsx)("br",{}),(0,u.Z)("your_lp_share")]}),dataIndex:"tokenId",key:"liquidity",align:"right",width:125,render:(e,s)=>{var a=s.userLpBalance,n=s.userLpSupply,t=parseFloat(n)>0?new F.Z(a).div(n).multipliedBy(100).toString():"";return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)("div",{className:d().action,children:[(0,v.jsx)(j,{setShowPanelIndex:e=>ce(e,s)}),parseFloat(a)>0&&(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(Z,{setShowPanelIndex:e=>ce(e,s)})})]}),parseFloat(a)>0&&(0,v.jsxs)("div",{className:d().lprate,children:[(0,Y.FH)(t,5),"%"]})]})}}],me=[{title:(0,u.Z)("pools"),dataIndex:"pools",render:(e,s)=>{var a=s.icon,n=s.symbol,t=s.tokenId;return(0,v.jsx)("div",{className:d().token,children:(0,v.jsxs)("div",{className:d().info,children:[(0,v.jsxs)("div",{className:d().icon_wrap,children:[a?(0,v.jsx)("img",{src:a,className:d().icon}):(0,v.jsx)(L.Z,{tokenId:t}),(0,v.jsx)("img",{src:R.qQ,className:d().icon_osd})]}),(0,v.jsx)("div",{className:d().title,children:(0,v.jsx)("div",{className:d().symbol,children:n})})]})})}},{title:"".concat((0,u.Z)("apr"),"/").concat((0,u.Z)("tvl")),dataIndex:"apr",key:"apr",align:"right",render:(e,s)=>{var a=s.usd;return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("div",{}),(0,v.jsx)("div",{children:(0,v.jsx)(q.Z,{value:a,prefix:"$",useAbbr:!0})})]})}},{title:"".concat((0,u.Z)("price"),"/").concat((0,u.Z)("day_diff")),dataIndex:"price",key:"price",align:"right",render:(e,s)=>(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("div",{children:(0,v.jsx)(se.Z,{data:{amount:1,token:s}})}),(0,v.jsx)("div",{className:d().desc})]})}],xe=t&&t.length<1||(h||[]).length<1;return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("div",{className:d().container,children:(0,v.jsxs)(O.g,{spinning:xe,children:[(0,v.jsxs)("div",{className:d().search_wrap,children:[(0,v.jsx)(ee.Z,{changeShowList:e=>I(e),className:"search_input",placeholder:(0,u.Z)("search_tips")}),(0,v.jsxs)(k.$,{className:d().btn,onClick:()=>le(!0),children:[(0,v.jsx)("span",{className:d().icon,children:(0,v.jsx)(z.Z,{})}),(0,u.Z)("new_pool")]}),(0,v.jsx)(k.$,{className:d().btn,style:{fontSize:14,fontWeight:"400"},onClick:()=>G(0),children:(0,u.Z)("deposit")})]}),(0,v.jsx)(i.Z,{columns:ne?me:_e,dataSource:y,className:d().table,rowKey:"tokenId",onRow:e=>({onClick:()=>{$(e),B(!0)}})})]})}),P&&(0,v.jsx)(E,{token:A,visible:P,setVisible:B,setShowLiuidityPanelIndex:e=>{B(!1),G(e)},setShowBorrowPanelIndex:e=>{B(!1),ae(e)},osdTokenData:x}),Q>-1&&(0,v.jsx)(w.Z,{showPanelIndex:Q,setShowPanelIndex:G,currentToken:A}),U>-1&&(0,v.jsx)(f.Z,{showPanelIndex:U,setShowPanelIndex:ae,currentToken:A}),re&&(0,v.jsx)(X,{visible:re,setVisible:le,currentChainId:c,account:m,callback:ue})]})}var ie=e=>{var s=e.tokens,a=e.wallet,n=e.loading,i=n.effects;return(0,t.Z)((0,t.Z)((0,t.Z)({},s),a),{},{loadingData:i["tokens/getData"]||!1})},re=(0,J.$j)(ie)(te),le=a(55836),oe=a.n(le);function ce(){return(0,v.jsx)(n.Z,{children:(0,v.jsx)("div",{className:oe().container,children:(0,v.jsx)(re,{})})})}}}]);