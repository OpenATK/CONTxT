(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{110:function(e,t,n){e.exports=n(264)},115:function(e,t,n){},124:function(e,t,n){},264:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"geolocation",function(){return se}),n.d(r,"survey",function(){return le});var a={};n.r(a),n.d(a,"init",function(){return Ae}),n.d(a,"showDroneQRScanner",function(){return Qe}),n.d(a,"hideDroneQRScanner",function(){return Ce}),n.d(a,"showSensorQRScanner",function(){return Ee}),n.d(a,"hideSensorQRScanner",function(){return De}),n.d(a,"setSurveyData",function(){return ke}),n.d(a,"setAnswer",function(){return qe}),n.d(a,"setCurrentLocation",function(){return xe});var o=n(1),c=n.n(o),i=n(21),u=n.n(i);n(115),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=n(25),l=n(27),p=(n(265),n(6)),d=n(47),m=n(95),b=n(49),f=n(48),v=n(50),O=n(4),y=n(106),j=n.n(y),h=(n(124),n(97)),S=n.n(h),g=n(99),R=n.n(g),w=n(100),A=n.n(w),Q=n(101),C=n.n(Q),E=n(103),D=n.n(E),k=n(102),q=n.n(k),x=n(96),T=n.n(x);var I=Object(l.connect)({},function(e){return c.a.createElement(S.a,{fullScreen:!0,open:e.open},c.a.createElement(R.a,null,c.a.createElement(A.a,null,c.a.createElement(C.a,{color:"inherit",onClick:e.onClose,"aria-label":"Close"},c.a.createElement(q.a,null)),c.a.createElement(D.a,{variant:"h6",color:"inherit"},"Scan QR code"))),c.a.createElement(T.a,{style:{width:"100%"},onScan:function(t){t&&(e.onData(t),e.onClose())}}))}),L=n(109),V=n(61),P=n(104),B=n.n(P),U=n(105),H=n.n(U),M=n(40),N=(n(253),{model:null});function G(){var e=Object(p.a)(["initSurvey"]);return G=function(){return e},e}function J(){var e=Object(p.a)(["questions"]);return J=function(){return e},e}function W(){var e=Object(p.a)(["",""]);return W=function(){return e},e}M.JsonObject.metaData.addProperty("question",{name:"cerebralbutton"});var z=Object(l.connect)({questions:Object(O.state)(J()),init:Object(O.signal)(G())},function(e,t,n){var r=e.questions,a=Object(V.a)(e,["questions"]),o=new M.Model(r);return N.model=o,Object(L.a)({},t,a,{get:n,model:o})},function(e){var t=e.get,n=Object(V.a)(e,["get"]);return c.a.createElement(M.Survey,Object.assign({},n,{completedHtml:B.a.renderToString(n.completedHtml),onAfterRenderQuestion:function(e,n){var r=n.question,a=n.htmlElement;r.cerebralbutton&&u.a.render(c.a.createElement(H.a,{onClick:t(Object(O.signal)(W(),r.cerebralbutton))},r.title),a)}}))});function F(){var e=Object(p.a)(["init"]);return F=function(){return e},e}function $(){var e=Object(p.a)(["setSurveyData"]);return $=function(){return e},e}function Y(){var e=Object(p.a)(["hideSensorQRScanner"]);return Y=function(){return e},e}function Z(){var e=Object(p.a)(["hideDroneQRScanner"]);return Z=function(){return e},e}function K(){var e=Object(p.a)(["showSensorQRScanner"]);return K=function(){return e},e}function X(){var e=Object(p.a)(["showDroneQRScanner"]);return X=function(){return e},e}function _(){var e=Object(p.a)(["sensorQRScannerActive"]);return _=function(){return e},e}function ee(){var e=Object(p.a)(["droneQRScannerActive"]);return ee=function(){return e},e}function te(){var e=Object(p.a)(["questions"]);return te=function(){return e},e}var ne=function(e){function t(){return Object(d.a)(this,t),Object(b.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(m.a)(t,[{key:"componentWillMount",value:function(){this.props.init()}},{key:"render",value:function(){var e=this.props;return c.a.createElement(c.a.Fragment,null,c.a.createElement(j.a,null),c.a.createElement("div",{className:"App"},c.a.createElement(I,{open:e.droneQRScannerActive,onClose:e.hideDroneQRScanner}),c.a.createElement(I,{open:e.sensorQRScannerActive,onClose:e.hideSensorQRScanner}),c.a.createElement(z,{isSinglePage:!1,completedHtml:c.a.createElement("div",null," woo done!"),onValueChanged:function(t){var n=t.data;return e.setSurveyData({data:n})},onComplete:function(e){var t=e.data;return console.log(JSON.stringify(t))}})))}}]),t}(o.Component),re=Object(l.connect)({questions:Object(O.state)(te()),droneQRScannerActive:Object(O.state)(ee()),sensorQRScannerActive:Object(O.state)(_()),showDroneQRScanner:Object(O.signal)(X()),showSensorQRScanner:Object(O.signal)(K()),hideDroneQRScanner:Object(O.signal)(Z()),hideSensorQRScanner:Object(O.signal)(Y()),setSurveyData:Object(O.signal)($()),init:Object(O.signal)(F())},ne),ae=n(108),oe=n(60),ce=n.n(oe),ie=n(107),ue=function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(b.a)(this,Object(f.a)(t).call(this,e))).name="GetLocationError",n}return Object(v.a)(t,e),t}(s.CerebralError),se={getCurrentLoc:function(){var e=Object(ie.a)(ce.a.mark(function e(){var t;return ce.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,new Promise(function(e,t){return navigator.geolocation.getCurrentPosition(e,t)}).then(function(e){return e.coords});case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e.catch(0),e.t1=e.t0.code,e.next=1===e.t1?11:2===e.t1?13:3===e.t1?15:17;break;case 11:return t="Permission denied",e.abrupt("break",18);case 13:return t="Position unavailable",e.abrupt("break",18);case 15:return t="Timeout obtaining position",e.abrupt("break",18);case 17:t="Unknown error";case 18:throw new ue(t);case 19:case"end":return e.stop()}},e,this,[[0,6]])}));return function(){return e.apply(this,arguments)}}()},le={setAnswer:function(e,t){N.model.setValue(e,t)},setData:function(e){N.model.data=e}},pe=n(23);function de(e){var t=e.survey,n=e.props;return t.setAnswer(n.question,n.answer)}function me(){var e=Object(p.a)(["currentLoc.longitude"]);return me=function(){return e},e}function be(){var e=Object(p.a)(["answer"]);return be=function(){return e},e}function fe(){var e=Object(p.a)(["question"]);return fe=function(){return e},e}function ve(){var e=Object(p.a)(["currentLoc.latitude"]);return ve=function(){return e},e}function Oe(){var e=Object(p.a)(["answer"]);return Oe=function(){return e},e}function ye(){var e=Object(p.a)(["question"]);return ye=function(){return e},e}function je(){var e=Object(p.a)(["data"]);return je=function(){return e},e}function he(){var e=Object(p.a)(["surveyData"]);return he=function(){return e},e}function Se(){var e=Object(p.a)(["sensorQRScannerActive"]);return Se=function(){return e},e}function ge(){var e=Object(p.a)(["sensorQRScannerActive"]);return ge=function(){return e},e}function Re(){var e=Object(p.a)(["droneQRScannerActive"]);return Re=function(){return e},e}function we(){var e=Object(p.a)(["droneQRScannerActive"]);return we=function(){return e},e}var Ae=[],Qe=[Object(pe.a)(Object(O.state)(we()),!0)],Ce=[Object(pe.a)(Object(O.state)(Re()),!1)],Ee=[Object(pe.a)(Object(O.state)(ge()),!0)],De=[Object(pe.a)(Object(O.state)(Se()),!1)],ke=[Object(pe.a)(Object(O.state)(he()),Object(O.props)(je()))],qe=[de],xe=[function(e){return e.geolocation.getCurrentLoc().then(function(e){return{currentLoc:{latitude:e.latitude,longitude:e.longitude}}})},Object(pe.a)(Object(O.props)(ye()),"latitude"),Object(pe.a)(Object(O.props)(Oe()),Object(O.props)(ve())),de,Object(pe.a)(Object(O.props)(fe()),"longitude"),Object(pe.a)(Object(O.props)(be()),Object(O.props)(me())),de],Te=new Date((new Date).toLocaleString()+" UTC").toISOString().split(/[TZ]/),Ie=Object(ae.a)(Te,2),Le=Ie[0],Ve=Ie[1],Pe=Object(s.Module)({signals:a,state:{droneQRScannerActive:!1,sensorQRScannerActive:!1,surveyData:null,questions:{pages:[{name:"general",title:"General",elements:[{name:"purpose",title:"Purpose",type:"dropdown",choices:["UAV","Planting","Spraying","Tilling","Harvest"],defaultValue:"UAV"},{name:"datetime",title:"Date/Time of data",type:"multipletext",defaultValue:{date:Le,time:Ve},items:[{name:"date",title:"Date",inputType:"date"},{name:"time",title:"Time",inputType:"time"}]},{name:"location",title:"Collection location",type:"panel",elements:[{name:"location-button",title:"Get current location",type:"html",cerebralbutton:"setCurrentLocation"},{name:"latitude",title:"Latitude",type:"text",isRequired:!0},{name:"longitude",title:"Longitude",type:"text",isRequired:!0}]},{name:"notes",title:"Notes or comments",type:"comment"}]},{name:"uav-operator",title:"UAV Operator",visibleIf:'{purpose} == "UAV"',elements:[{name:"license",title:"Operator License",type:"text",isRequired:!0,placeHolder:"1234567",validators:[{type:"regex",regex:/^[0-9]{7}$/,text:"Invalid license number"}]},{name:"operator",title:"Operator",type:"text",isRequired:!0,placeHolder:"Rusty Shackleford"},{name:"observer",title:"Observer",type:"text",isRequired:!0,placeHolder:"John Doe"},{name:"drone-qr",title:"Scan drone QR code",type:"html",cerebralbutton:"showDroneQRScanner"}]},{name:"uav-sensors",title:"Sensors",visibleIf:'{purpose} == "UAV"',elements:[{name:"sensor-qr",type:"html",cerebralbutton:"showSensorQRScanner"},{name:"sensors",title:"Sensors",type:"paneldynamic",panelCount:1,panelAddText:"Add Sensor",panelRemoveText:"Remove Sensor",templateTitle:"Sensor #{panelIndex}",templateElements:[{name:"uav-sensor-type",valueName:"type",title:"Type",type:"dropdown",isRequired:!0,hasOther:!0,choices:["RGB","Multispectral","Hyperspectral","LiDAR","Thermal"]},{name:"uav-sensor",title:"Sensor",type:"dropdown",hideIfChoicesEmpty:!0,choicesVisibleIf:"{panel.type} == {item.type}",choices:[{text:"Sony A6000",value:{make:"Sony",model:"A6000",type:"RGB"}},{text:"Parrot Sequoia",value:{make:"Parrot",model:"Sequoia",type:"Multispectral"}}]},{name:"uav-sensor-make",valueName:"sensor.make",title:"Make",type:"text"},{name:"uav-sensor-model",valueName:"model",title:"Model",type:"text"}]}]},{name:"b4ufly",title:"B4UFLY Status",visibleIf:'{purpose} == "UAV"',elements:[{name:"b4ufly-status",title:"Status",type:"dropdown",isRequired:!0,choices:["proceed with caution","flying in controlled airspace (class B/C/D/E)","other"]},{name:"b4ufly-extra",title:"",type:"panel",visibleIf:'{b4ufly-status} == "flying in controlled airspace (class B/C/D/E)" or {b4ufly-status} == "other"',elements:[{name:"b4ufly-airport-operator",title:"Airport Operator Contact",type:"text",requiredIf:'{b4ufly-status} == "flying in controlled airspace (class B/C/D/E)"'},{name:"b4ufly-control-tower",title:"Control Tower Contact",type:"text",requiredIf:'{b4ufly-status} == "flying in controlled airspace (class B/C/D/E)"'},{name:"b4ufly-prior-authorization",title:"Prior Authorization",type:"text",requiredIf:'{b4ufly-status} == "flying in controlled airspace (class B/C/D/E)"'}]},{name:"b4ufly-options",title:"Options",type:"checkbox",isRequired:!0,choices:["checked NOTAMS","checked flight restrictions","checked local restrictions","checked upcoming restrictions","checked national parks"]}]},{name:"planting",visibleIf:'!({purpose} == "UAV")',elements:[{name:"nyi",type:"html",html:"Not yet implemented"}]}]}},providers:r}),Be=Object(s.Controller)(Pe,{devtools:null});u.a.render(c.a.createElement(l.Container,{controller:Be},c.a.createElement(re,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[110,2,1]]]);
//# sourceMappingURL=main.8b4d3d71.chunk.js.map