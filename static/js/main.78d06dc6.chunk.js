(this.webpackJsonpphoto=this.webpackJsonpphoto||[]).push([[0],{207:function(e,t,a){},214:function(e,t){},216:function(e,t){},227:function(e,t){},229:function(e,t){},256:function(e,t){},258:function(e,t){},259:function(e,t){},264:function(e,t){},266:function(e,t){},272:function(e,t){},274:function(e,t){},293:function(e,t){},305:function(e,t){},308:function(e,t){},349:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(16),r=a.n(c),i=(a(207),a(62)),l=a.n(i),s=a(111),d=a(43),p=a(5),u=a(391),b=a(392),m=a(393),g=a(389),j=a(394),f=a(395),h=a(398),x=a(390),O=a(388),C=a(396),w=a(397),v=a(399),k=a(197),N=a(400),S=a(401),y=a(402),I=a(403),L=a(404),R=a(405),F=a(178),W=a.p+"static/media/bg.fa273077.jpg",B=a(195),z=a(68),T=a(194),E=a.n(T),D=a(193),G=a.n(D),J=a(9),P=(a(328),new F.Dropbox({accessToken:"sl.BSLZrdfOv5cITLeOo-TS6n82ZiL5ZggKsFH56yPwgJbARLx6-2JIdmJsyfITUHJWGJaAOmYH3jS3MAfbqRP4uC5SmhtZhPBvmoprwKJbu9ougIi6wZIVcLH87xhovWaK62iEszE4MRZp"})),H=Object(p.a)((function(e){return{root:{color:e.palette.getContrastText(z.a.white),backgroundColor:z.a.white,"&:hover":{backgroundColor:"#ffffff7a"}}}}))(x.a),Z=a(329).default,U=Object(u.a)((function(e){return{grow:{flexGrow:1},clearButton:{width:"-webkit-fill-available",borderRadius:"15px",padding:"15px 22px",color:"#000000a6",fontSize:"20px",fontWeight:900},root:{maxWidth:345,flexGrow:1},media:{height:400},paper:{padding:e.spacing(2),margin:"auto",maxWidth:500},gridContainer:{justifycontent:"center",padding:"4em 1em 0 1em"},mainContainer:{backgroundImage:"url(".concat(W,")"),backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover",height:"93vh",marginTop:"8px"},imageCard:{margin:"auto",maxWidth:400,height:500,backgroundColor:"transparent",boxShadow:"0px 9px 70px 0px rgb(0 0 0 / 30%) !important",borderRadius:"15px"},imageCardEmpty:{height:"auto"},noImage:{margin:"auto",width:400,height:"400 !important"},input:{display:"none"},uploadIcon:{background:"white"},tableContainer:{backgroundColor:"transparent !important",boxShadow:"none !important"},table:{backgroundColor:"transparent !important"},tableHead:{backgroundColor:"transparent !important"},tableRow:{backgroundColor:"transparent !important"},tableCell:{fontSize:"22px",backgroundColor:"transparent !important",borderColor:"transparent !important",color:"#000000a6 !important",fontWeight:"bolder",padding:"1px 24px 1px 16px"},tableCell1:{fontSize:"14px",backgroundColor:"transparent !important",borderColor:"transparent !important",color:"#000000a6 !important",fontWeight:"bolder",padding:"1px 24px 1px 16px"},tableBody:{backgroundColor:"transparent !important"},text:{color:"white !important",textAlign:"center"},buttonGrid:{maxWidth:"416px",width:"100%"},detail:{backgroundColor:"white",display:"flex",justifycontent:"center",flexDirection:"column",alignItems:"center"},appbar:{background:"#e900ff",boxShadow:"none",color:"white"},loader:{color:"#be6a77 !important"}}})),A=function(){var e=U(),t=Object(n.useState)(),a=Object(d.a)(t,2),c=a[0],r=a[1],i=Object(n.useState)(),p=Object(d.a)(i,2),u=p[0],x=p[1],F=Object(n.useState)(),W=Object(d.a)(F,2),z=W[0],T=W[1],D=Object(n.useState)(!1),A=Object(d.a)(D,2),K=A[0],M=A[1],q=Object(n.useState)(!1),V=Object(d.a)(q,2),Y=V[0],_=V[1],Q=Object(n.useState)(),X=Object(d.a)(Q,2),$=X[0],ee=X[1],te=0,ae=function(){var e=Object(s.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!K){e.next=11;break}return t=new FormData,console.log("Sending link",c),console.log("Sending file",$),t.append("file",$),e.next=7,Z({method:"post",url:"https://pdc-server.herokuapp.com/predict",data:t}).catch((function(e){console.log(e)}));case 7:null!=(a=e.sent)&&200===a.status?(T(a.data),console.log(a.data),_(!1)):(alert("Check your Internet connection!!"),_(!0)),e.next=12;break;case 11:console.log("Couldn't send1!!");case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ne=function(){var e=Object(s.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.filesListFolder({path:""}).then((function(e){P.filesGetThumbnail({path:e.result.entries[1].path_display,format:"jpeg",size:"w64h64"}).then((function(e){console.log(e.result,"getiing image");var t=document.createElement("img"),a=e.result.fileBlob;a.name="image.jpeg",a.lastModified=new Date;var n=new File([a],"image.jpeg",{type:"image/jpg"});console.log(n instanceof File,n),t.src=window.URL.createObjectURL(e.result.fileBlob);var o=window.URL.createObjectURL(e.result.fileBlob);document.body.appendChild(t),ee(n),console.log(o)}))}));case 2:t=e.sent,console.log(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){ae()}),[$]),Object(n.useEffect)((function(){c?(x(c),console.log("file selected`!!")):x(void 0)}),[c]),Object(n.useEffect)((function(){u&&(console.log("preview set"),_(!0),ne())}),[u]);var oe=function(e){if(!e||0===e.length)return r(void 0),M(!1),void T(void 0);console.log(e,"Done"),M(!0),r(e[0].thumbnailLink),T(void 0)};return z&&(te=(100*parseFloat(z.confidence)).toFixed(2)),Object(J.jsxs)(o.a.Fragment,{children:[Object(J.jsx)(b.a,{position:"static",className:e.appbar,children:Object(J.jsxs)(m.a,{children:[Object(J.jsx)(g.a,{className:e.title,variant:"h6",noWrap:!0,children:"Leaf DiseaseClassification"}),Object(J.jsx)("div",{className:e.grow})]})}),Object(J.jsx)(j.a,{maxWidth:!1,className:e.mainContainer,disableGutters:!0,children:Object(J.jsxs)(O.a,{className:e.gridContainer,container:!0,direction:"row",justifycontent:"center",alignItems:"center",spacing:2,children:[Object(J.jsx)(O.a,{item:!0,xs:12,children:Object(J.jsxs)(f.a,{className:"".concat(e.imageCard," ").concat(K?"":e.imageCardEmpty),children:[K&&Object(J.jsx)(C.a,{children:Object(J.jsx)(w.a,{className:e.media,image:u,component:"img",title:"Contemplative Reptile"})}),!K&&Object(J.jsxs)(h.a,{className:e.content,children:[Object(J.jsx)(B.a,{acceptedFiles:["image/*"],dropzoneText:"Drag and drop an image of a potato plant leaf to process",onChange:oe}),Object(J.jsx)(G.a,{appKey:"pcwevk0ugf0wpes",success:function(e){return oe(e)},cancel:function(){return alert("Service canclled")},multiselect:!0,extensions:[".jpg"],children:Object(J.jsx)("div",{className:"dropbox-button",children:"Click me!"})}),Object(J.jsx)("input",{type:"button",value:"GetImage",onClick:ne})]}),z&&Object(J.jsx)(h.a,{className:e.detail,children:Object(J.jsx)(v.a,{component:k.a,className:e.tableContainer,children:Object(J.jsxs)(N.a,{className:e.table,size:"small","aria-label":"simple table",children:[Object(J.jsx)(S.a,{className:e.tableHead,children:Object(J.jsxs)(y.a,{className:e.tableRow,children:[Object(J.jsx)(I.a,{className:e.tableCell1,children:"Label:"}),Object(J.jsx)(I.a,{align:"right",className:e.tableCell1,children:"Confidence:"})]})}),Object(J.jsx)(L.a,{className:e.tableBody,children:Object(J.jsxs)(y.a,{className:e.tableRow,children:[Object(J.jsx)(I.a,{component:"th",scope:"row",className:e.tableCell,children:z.class}),Object(J.jsxs)(I.a,{align:"right",className:e.tableCell,children:[te,"%"]})]})})]})})}),Y&&Object(J.jsxs)(h.a,{className:e.detail,children:[Object(J.jsx)(R.a,{color:"secondary",className:e.loader}),Object(J.jsx)(g.a,{className:e.title,variant:"h6",noWrap:!0,children:"Processing"})]})]})}),z&&Object(J.jsx)(O.a,{item:!0,className:e.buttonGrid,children:Object(J.jsx)(H,{variant:"contained",className:e.clearButton,color:"primary",component:"span",size:"large",onClick:function(){T(null),M(!1),r(null),x(null)},startIcon:Object(J.jsx)(E.a,{fontSize:"large"}),children:"Clear"})})]})})]})};var K=function(){return Object(J.jsx)(A,{})},M=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,407)).then((function(t){var a=t.getCLS,n=t.getFID,o=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),n(e),o(e),c(e),r(e)}))};r.a.render(Object(J.jsx)(o.a.StrictMode,{children:Object(J.jsx)(K,{})}),document.getElementById("root")),M()}},[[349,1,2]]]);
//# sourceMappingURL=main.78d06dc6.chunk.js.map