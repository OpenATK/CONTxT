(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{110:function(e,t,n){e.exports=n(264)},115:function(e,t,n){},124:function(e,t,n){},264:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"geolocation",function(){return se}),n.d(r,"survey",function(){return le});var a={};n.r(a),n.d(a,"init",function(){return Qe}),n.d(a,"showDroneQRScanner",function(){return Ae}),n.d(a,"hideDroneQRScanner",function(){return De}),n.d(a,"showSensorQRScanner",function(){return Ee}),n.d(a,"hideSensorQRScanner",function(){return Ce}),n.d(a,"setSurveyData",function(){return qe}),n.d(a,"setAnswer",function(){return ke}),n.d(a,"setCurrentLocation",function(){return xe});var o=n(1),c=n.n(o),i=n(21),u=n.n(i);n(115),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=n(25),l=n(27),b=(n(265),n(6)),d=n(47),f=n(95),p=n(49),m=n(48),v=n(50),O=n(4),j=n(106),S=n.n(j),h=(n(124),n(97)),g=n.n(h),w=n(99),y=n.n(w),R=n(100),Q=n.n(R),A=n(101),D=n.n(A),E=n(103),C=n.n(E),q=n(102),k=n.n(q),x=n(96),L=n.n(x);var T=Object(l.connect)({},function(e){return c.a.createElement(g.a,{fullScreen:!0,open:e.open},c.a.createElement(y.a,null,c.a.createElement(Q.a,null,c.a.createElement(D.a,{color:"inherit",onClick:e.onClose,"aria-label":"Close"},c.a.createElement(k.a,null)),c.a.createElement(C.a,{variant:"h6",color:"inherit"},"Scan QR code"))),c.a.createElement(L.a,{style:{width:"100%"},onScan:function(t){t&&(e.onData(t),e.onClose())}}))}),V=n(109),P=n(63),H=n(104),U=n.n(H),I=n(105),J=n.n(I),G=n(40),M=(n(253),{model:null});function N(){var e=Object(b.a)(["initSurvey"]);return N=function(){return e},e}function W(){var e=Object(b.a)(["questions"]);return W=function(){return e},e}function B(){var e=Object(b.a)(["",""]);return B=function(){return e},e}G.JsonObject.metaData.addProperty("question",{name:"cerebralbutton"});var $=Object(l.connect)({questions:Object(O.state)(W()),init:Object(O.signal)(N())},function(e,t,n){var r=e.questions,a=Object(P.a)(e,["questions"]),o=new G.Model(r);return M.model=o,Object(V.a)({},t,a,{get:n,model:o})},function(e){var t=e.get,n=Object(P.a)(e,["get"]);return c.a.createElement(G.Survey,Object.assign({},n,{completedHtml:U.a.renderToString(n.completedHtml),onAfterRenderQuestion:function(e,n){var r=n.question,a=n.htmlElement;r.cerebralbutton&&u.a.render(c.a.createElement(J.a,{onClick:t(Object(O.signal)(B(),r.cerebralbutton))},r.title),a)}}))});function F(){var e=Object(b.a)(["init"]);return F=function(){return e},e}function Z(){var e=Object(b.a)(["setSurveyData"]);return Z=function(){return e},e}function z(){var e=Object(b.a)(["hideSensorQRScanner"]);return z=function(){return e},e}function K(){var e=Object(b.a)(["hideDroneQRScanner"]);return K=function(){return e},e}function X(){var e=Object(b.a)(["showSensorQRScanner"]);return X=function(){return e},e}function Y(){var e=Object(b.a)(["showDroneQRScanner"]);return Y=function(){return e},e}function _(){var e=Object(b.a)(["sensorQRScannerActive"]);return _=function(){return e},e}function ee(){var e=Object(b.a)(["droneQRScannerActive"]);return ee=function(){return e},e}function te(){var e=Object(b.a)(["questions"]);return te=function(){return e},e}var ne=function(e){function t(){return Object(d.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(f.a)(t,[{key:"componentWillMount",value:function(){this.props.init()}},{key:"render",value:function(){var e=this.props;return c.a.createElement(c.a.Fragment,null,c.a.createElement(S.a,null),c.a.createElement("div",{className:"App"},c.a.createElement(T,{open:e.droneQRScannerActive,onClose:e.hideDroneQRScanner}),c.a.createElement(T,{open:e.sensorQRScannerActive,onClose:e.hideSensorQRScanner}),c.a.createElement($,{isSinglePage:!1,completedHtml:c.a.createElement("div",null," woo done!"),onValueChanged:function(t){var n=t.data;return e.setSurveyData({data:n})}})))}}]),t}(o.Component),re=Object(l.connect)({questions:Object(O.state)(te()),droneQRScannerActive:Object(O.state)(ee()),sensorQRScannerActive:Object(O.state)(_()),showDroneQRScanner:Object(O.signal)(Y()),showSensorQRScanner:Object(O.signal)(X()),hideDroneQRScanner:Object(O.signal)(K()),hideSensorQRScanner:Object(O.signal)(z()),setSurveyData:Object(O.signal)(Z()),init:Object(O.signal)(F())},ne),ae=n(108),oe=n(62),ce=n.n(oe),ie=n(107),ue=function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(p.a)(this,Object(m.a)(t).call(this,e))).name="GetLocationError",n}return Object(v.a)(t,e),t}(s.CerebralError),se={getCurrentLoc:function(){var e=Object(ie.a)(ce.a.mark(function e(){var t;return ce.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.abrupt("return",new Promise(function(e,t){return navigator.geolocation.getCurrentPosition(e,t)}).then(function(e){return e.coords}));case 4:e.prev=4,e.t0=e.catch(0),e.t1=e.t0.code,e.next=1===e.t1?9:2===e.t1?11:3===e.t1?13:15;break;case 9:return t="Permission denied",e.abrupt("break",16);case 11:return t="Position unavailable",e.abrupt("break",16);case 13:return t="Timeout obtaining position",e.abrupt("break",16);case 15:t="Unknown error";case 16:throw new ue(t);case 17:case"end":return e.stop()}},e,this,[[0,4]])}));return function(){return e.apply(this,arguments)}}()},le={setAnswer:function(e,t){M.model.setValue(e,t)},setData:function(e){M.model.data=e}},be=n(23);function de(e){var t=e.survey,n=e.props;return t.setAnswer(n.question,n.answer)}function fe(){var e=Object(b.a)(["currentLoc.longitude"]);return fe=function(){return e},e}function pe(){var e=Object(b.a)(["answer"]);return pe=function(){return e},e}function me(){var e=Object(b.a)(["question"]);return me=function(){return e},e}function ve(){var e=Object(b.a)(["currentLoc.latitude"]);return ve=function(){return e},e}function Oe(){var e=Object(b.a)(["answer"]);return Oe=function(){return e},e}function je(){var e=Object(b.a)(["question"]);return je=function(){return e},e}function Se(){var e=Object(b.a)(["data"]);return Se=function(){return e},e}function he(){var e=Object(b.a)(["surveyData"]);return he=function(){return e},e}function ge(){var e=Object(b.a)(["sensorQRScannerActive"]);return ge=function(){return e},e}function we(){var e=Object(b.a)(["sensorQRScannerActive"]);return we=function(){return e},e}function ye(){var e=Object(b.a)(["droneQRScannerActive"]);return ye=function(){return e},e}function Re(){var e=Object(b.a)(["droneQRScannerActive"]);return Re=function(){return e},e}var Qe=[],Ae=[Object(be.a)(Object(O.state)(Re()),!0)],De=[Object(be.a)(Object(O.state)(ye()),!1)],Ee=[Object(be.a)(Object(O.state)(we()),!0)],Ce=[Object(be.a)(Object(O.state)(ge()),!1)],qe=[Object(be.a)(Object(O.state)(he()),Object(O.props)(Se()))],ke=[de],xe=[function(e){return e.geolocation.getCurrentLoc().then(function(e){return{currentLoc:{latitude:e.latitude,longitude:e.longitude}}})},Object(be.a)(Object(O.props)(je()),"latitude"),Object(be.a)(Object(O.props)(Oe()),Object(O.props)(ve())),de,Object(be.a)(Object(O.props)(me()),"longitude"),Object(be.a)(Object(O.props)(pe()),Object(O.props)(fe())),de],Le=new Date((new Date).toLocaleString()+" UTC").toISOString().split(/[TZ]/),Te=Object(ae.a)(Le,2),Ve=Te[0],Pe=Te[1],He=Object(s.Module)({signals:a,state:{droneQRScannerActive:!1,sensorQRScannerActive:!1,surveyData:null,questions:{pages:[{name:"general",title:"General",elements:[{name:"purpose",title:"Purpose",type:"dropdown",choices:["UAV","Planting","Spraying","Tilling","Harvest"],defaultValue:"UAV"},{name:"datetime",title:"Date/Time of data",type:"multipletext",defaultValue:{date:Ve,time:Pe},items:[{name:"date",title:"Date",inputType:"date"},{name:"time",title:"Time",inputType:"time"}]},{name:"location",title:"Collection location",type:"panel",state:"collapsed",elements:[{name:"location-button",title:"Get current location",type:"html",cerebralbutton:"setCurrentLocation"},{name:"latitude",title:"Latitude",type:"text"},{name:"longitude",title:"Longitude",type:"text"}]},{name:"notes",title:"Notes or comments",type:"comment"}]},{name:"uav",title:"UAV Info",visibleIf:'{purpose} == "UAV"',elements:[{name:"license",title:"Operator License",type:"text",isRequired:!0,placeHolder:"1234567",validators:[{type:"regex",regex:/^[0-9]{7}$/,text:"Invalid license number"}]},{name:"operator",title:"Operator",type:"text",isRequired:!0,placeHolder:"Rusty Shackleford"},{name:"observer",title:"Observer",type:"text",isRequired:!0,placeHolder:"John Doe"},{name:"drone-qr",title:"Scan drone QR code",type:"html",cerebralbutton:"showDroneQRScanner"},{name:"sensor-qr",type:"html",cerebralbutton:"showSensorQRScanner"}]},{name:"planting",visibleIf:'!({purpose} == "UAV")',elements:[{name:"nyi",type:"html",html:"Not yet implemented"}]}]}},providers:r}),Ue=Object(s.Controller)(He,{devtools:null});u.a.render(c.a.createElement(l.Container,{controller:Ue},c.a.createElement(re,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[110,2,1]]]);
//# sourceMappingURL=main.f6febb1c.chunk.js.map