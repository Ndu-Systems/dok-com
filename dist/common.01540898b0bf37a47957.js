(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"4lDY":function(e,n,t){"use strict";t.d(n,"a",function(){return d});var o=t("CcnG"),i=t("Ip0R"),a=t("o1U6"),l=t("e5OV"),r=o["\u0275crt"]({encapsulation:2,styles:[],data:{}});function c(e){return o["\u0275vid"](0,[(e()(),o["\u0275eld"](0,0,null,null,2,"button",[["aria-label","Close"],["class","close"],["type","button"]],null,[[null,"click"]],function(e,n,t){var o=!0;return"click"===n&&(o=!1!==e.component.closeHandler()&&o),o},null,null)),(e()(),o["\u0275eld"](1,0,null,null,1,"span",[["aria-hidden","true"]],null,null,null,null,null)),(e()(),o["\u0275ted"](-1,null,["\xd7"]))],null,null)}function u(e){return o["\u0275vid"](2,[(e()(),o["\u0275eld"](0,0,null,null,3,"div",[["role","alert"]],[[8,"className",0]],null,null,null,null)),(e()(),o["\u0275and"](16777216,null,null,1,null,c)),o["\u0275did"](2,16384,null,0,i.NgIf,[o.ViewContainerRef,o.TemplateRef],{ngIf:[0,"ngIf"]},null),o["\u0275ncd"](null,0)],function(e,n){e(n,2,0,n.component.dismissible)},function(e,n){var t=n.component;e(n,0,0,"alert alert-"+t.type+(t.dismissible?" alert-dismissible":""))})}var d=o["\u0275ccf"]("ngb-alert",a.a,function(e){return o["\u0275vid"](0,[(e()(),o["\u0275eld"](0,0,null,null,1,"ngb-alert",[],null,null,null,u,r)),o["\u0275did"](1,49152,null,0,a.a,[l.a],null,null)],null,null)},{dismissible:"dismissible",type:"type"},{close:"close"},["*"])},C1df:function(e,n,t){"use strict";t.d(n,"a",function(){return i});var o=new(function(){function e(){}return e.prototype.getAllStyles=function(e){return window.getComputedStyle(e)},e.prototype.getStyle=function(e,n){return this.getAllStyles(e)[n]},e.prototype.isStaticPositioned=function(e){return"static"===(this.getStyle(e,"position")||"static")},e.prototype.offsetParent=function(e){for(var n=e.offsetParent||document.documentElement;n&&n!==document.documentElement&&this.isStaticPositioned(n);)n=n.offsetParent;return n||document.documentElement},e.prototype.position=function(e,n){var t;void 0===n&&(n=!0);var o={width:0,height:0,top:0,bottom:0,left:0,right:0};if("fixed"===this.getStyle(e,"position"))t=e.getBoundingClientRect();else{var i=this.offsetParent(e);t=this.offset(e,!1),i!==document.documentElement&&(o=this.offset(i,!1)),o.top+=i.clientTop,o.left+=i.clientLeft}return t.top-=o.top,t.bottom-=o.top,t.left-=o.left,t.right-=o.left,n&&(t.top=Math.round(t.top),t.bottom=Math.round(t.bottom),t.left=Math.round(t.left),t.right=Math.round(t.right)),t},e.prototype.offset=function(e,n){void 0===n&&(n=!0);var t=e.getBoundingClientRect(),o=window.pageYOffset-document.documentElement.clientTop,i=window.pageXOffset-document.documentElement.clientLeft,a={height:t.height||e.offsetHeight,width:t.width||e.offsetWidth,top:t.top+o,bottom:t.bottom+o,left:t.left+i,right:t.right+i};return n&&(a.height=Math.round(a.height),a.width=Math.round(a.width),a.top=Math.round(a.top),a.bottom=Math.round(a.bottom),a.left=Math.round(a.left),a.right=Math.round(a.right)),a},e.prototype.positionElements=function(e,n,t,o){var i=o?this.offset(e,!1):this.position(e,!1),a=this.getAllStyles(n),l=n.getBoundingClientRect(),r=t.split("-")[0]||"top",c=t.split("-")[1]||"center",u={height:l.height||n.offsetHeight,width:l.width||n.offsetWidth,top:0,bottom:l.height||n.offsetHeight,left:0,right:l.width||n.offsetWidth};switch(r){case"top":u.top=i.top-(n.offsetHeight+parseFloat(a.marginBottom));break;case"bottom":u.top=i.top+i.height;break;case"left":u.left=i.left-(n.offsetWidth+parseFloat(a.marginRight));break;case"right":u.left=i.left+i.width}switch(c){case"top":u.top=i.top;break;case"bottom":u.top=i.top+i.height-n.offsetHeight;break;case"left":u.left=i.left;break;case"right":u.left=i.left+i.width-n.offsetWidth;break;case"center":"top"===r||"bottom"===r?u.left=i.left+i.width/2-n.offsetWidth/2:u.top=i.top+i.height/2-n.offsetHeight/2}return u.top=Math.round(u.top),u.bottom=Math.round(u.bottom),u.left=Math.round(u.left),u.right=Math.round(u.right),u},e.prototype.getAvailablePlacements=function(e,n){var t=[],o=e.getBoundingClientRect(),i=n.getBoundingClientRect(),a=document.documentElement,l=window.innerHeight||a.clientHeight,r=window.innerWidth||a.clientWidth,c=o.left+o.width/2,u=o.top+o.height/2;return i.width<o.left&&(u>i.height/2&&l-u>i.height/2&&t.splice(t.length,1,"left"),this.setSecondaryPlacementForLeftRight(o,i,"left",t)),i.height<o.top&&(c>i.width/2&&r-c>i.width/2&&t.splice(t.length,1,"top"),this.setSecondaryPlacementForTopBottom(o,i,"top",t)),r-o.right>i.width&&(u>i.height/2&&l-u>i.height/2&&t.splice(t.length,1,"right"),this.setSecondaryPlacementForLeftRight(o,i,"right",t)),l-o.bottom>i.height&&(c>i.width/2&&r-c>i.width/2&&t.splice(t.length,1,"bottom"),this.setSecondaryPlacementForTopBottom(o,i,"bottom",t)),t},e.prototype.setSecondaryPlacementForLeftRight=function(e,n,t,o){var i=document.documentElement;n.height<=e.bottom&&o.splice(o.length,1,t+"-bottom"),(window.innerHeight||i.clientHeight)-e.top>=n.height&&o.splice(o.length,1,t+"-top")},e.prototype.setSecondaryPlacementForTopBottom=function(e,n,t,o){var i=document.documentElement;(window.innerWidth||i.clientWidth)-e.left>=n.width&&o.splice(o.length,1,t+"-left"),n.width<=e.right&&o.splice(o.length,1,t+"-right")},e}());function i(e,n,t,i){var a=Array.isArray(t)?t:[t],l=a.findIndex(function(e){return"auto"===e});l>=0&&["top","bottom","left","right","top-left","top-right","bottom-left","bottom-right","left-top","left-bottom","right-top","right-bottom"].forEach(function(e){null==a.find(function(n){return-1!==n.search("^"+e)})&&a.splice(l++,1,e)});for(var r,c=0,u=0,d=o.getAvailablePlacements(e,n),s=function(t,l){if(null!=d.find(function(e){return e===t})||a.length===l+1){r=t;var s=o.positionElements(e,n,t,i);return c=s.top,u=s.left,"break"}},p=0,m=a.map(function(e,n){return{item:e,index:n}});p<m.length;p++){var h=m[p];if("break"===s(h.item,h.index))break}return n.style.top=c+"px",n.style.left=u+"px",r}},C9m0:function(e,n,t){"use strict";t.d(n,"a",function(){return i}),t("lwpf");var o=t("ebCm"),i=function(){function e(){}return e.forRoot=function(){return{ngModule:e,providers:[o.a]}},e}()},CFL1:function(e,n,t){"use strict";t.d(n,"a",function(){return l});var o=t("VJzw"),i=t("CcnG"),a=t("t/Na"),l=function(){function e(e){this.httpClient=e,this.url=o.a}return e.ngInjectableDef=i.defineInjectable({factory:function(){return new e(i.inject(a.c))},token:e,providedIn:"root"}),e}()},IRyT:function(e,n,t){"use strict";t.d(n,"a",function(){return i});var o=t("VJzw"),i=function(){function e(e){this.httpClient=e,this.url=o.a}return e.prototype.loginUser=function(e,n){return this.httpClient.get(this.url+"/account/SignIn.php?Email="+e+"&Password="+n)},e.prototype.changePassword=function(e){return this.httpClient.post(this.url+"/account/PasswordReset.php",e)},e}()},KqrR:function(e,n,t){"use strict";var o=t("VJzw"),i=t("CcnG"),a=t("t/Na");t.d(n,"a",function(){return l});var l=function(){function e(e){this.http=e,this.url=o.a}return e.prototype.getAppointment=function(){return this.http.get(this.url+"/appointment/get-appointments.php")},e.prototype.addAppointment=function(e){return this.http.post(this.url+"/appointment/add-appointment.php",e)},e.prototype.editAppointment=function(e){return this.http.post(this.url+"/appointment/edit-appointment.php",e)},e.ngInjectableDef=i.defineInjectable({factory:function(){return new e(i.inject(a.c))},token:e,providedIn:"root"}),e}()},PsaP:function(e,n,t){"use strict";var o=t("CcnG"),i=t("q7oS"),a=0,l=function(){return function(e){this.tplRef=e,this.id="ngb-slide-"+a++}}(),r=function(){function e(e){this.slide=new o.EventEmitter,this.interval=e.interval,this.wrap=e.wrap,this.keyboard=e.keyboard,this.pauseOnHover=e.pauseOnHover,this.showNavigationArrows=e.showNavigationArrows,this.showNavigationIndicators=e.showNavigationIndicators}return e.prototype.ngAfterContentChecked=function(){var e=this._getSlideById(this.activeId);this.activeId=e?e.id:this.slides.length?this.slides.first.id:null},e.prototype.ngOnInit=function(){this._startTimer()},e.prototype.ngOnChanges=function(e){"interval"in e&&!e.interval.isFirstChange()&&this._restartTimer()},e.prototype.ngOnDestroy=function(){clearInterval(this._slideChangeInterval)},e.prototype.select=function(e){this.cycleToSelected(e,this.getSlideEventDirection(this.activeId,e)),this._restartTimer()},e.prototype.prev=function(){this.cycleToPrev(),this._restartTimer()},e.prototype.next=function(){this.cycleToNext(),this._restartTimer()},e.prototype.pause=function(){this._stopTimer()},e.prototype.cycle=function(){this._startTimer()},e.prototype.cycleToNext=function(){this.cycleToSelected(this._getNextSlide(this.activeId),c.LEFT)},e.prototype.cycleToPrev=function(){this.cycleToSelected(this._getPrevSlide(this.activeId),c.RIGHT)},e.prototype.cycleToSelected=function(e,n){var t=this._getSlideById(e);t&&(t.id!==this.activeId&&this.slide.emit({prev:this.activeId,current:t.id,direction:n}),this.activeId=t.id)},e.prototype.getSlideEventDirection=function(e,n){return this._getSlideIdxById(e)>this._getSlideIdxById(n)?c.RIGHT:c.LEFT},e.prototype.keyPrev=function(){this.keyboard&&this.prev()},e.prototype.keyNext=function(){this.keyboard&&this.next()},e.prototype.onMouseEnter=function(){this.pauseOnHover&&this.pause()},e.prototype.onMouseLeave=function(){this.pauseOnHover&&this.cycle()},e.prototype._restartTimer=function(){this._stopTimer(),this._startTimer()},e.prototype._startTimer=function(){var e=this;this.interval>0&&(this._slideChangeInterval=setInterval(function(){e.cycleToNext()},this.interval))},e.prototype._stopTimer=function(){clearInterval(this._slideChangeInterval)},e.prototype._getSlideById=function(e){var n=this.slides.filter(function(n){return n.id===e});return n.length?n[0]:null},e.prototype._getSlideIdxById=function(e){return this.slides.toArray().indexOf(this._getSlideById(e))},e.prototype._getNextSlide=function(e){var n=this.slides.toArray(),t=this._getSlideIdxById(e);return t===n.length-1?this.wrap?n[0].id:n[n.length-1].id:n[t+1].id},e.prototype._getPrevSlide=function(e){var n=this.slides.toArray(),t=this._getSlideIdxById(e);return 0===t?this.wrap?n[n.length-1].id:n[0].id:n[t-1].id},e}(),c=function(e){return e[e.LEFT="left"]="LEFT",e[e.RIGHT="right"]="RIGHT",e}({});t.d(n,"a",function(){return u}),t.d(n,!1,function(){return r}),t.d(n,!1,function(){return l}),t.d(n,!1,function(){return i.a});var u=function(){function e(){}return e.forRoot=function(){return{ngModule:e,providers:[i.a]}},e}()},UXJL:function(e,n,t){"use strict";t.d(n,"a",function(){return r});var o=t("F/XL"),i=t("VJzw"),a=t("CcnG"),l=t("t/Na"),r=function(){function e(e){this.http=e,this.url=i.a}return e.prototype.addPatient=function(e){return this.http.post(this.url+"/patient/add-patient.php",e)},e.prototype.updatePatient=function(e){return this.http.post(this.url+"/patient/edit-patient.php",e)},e.prototype.getDrugs=function(e){return Object(o.a)([{name:"Afghanistan",code:"AF"},{name:"\xc5land Islands",code:"AX"},{name:"Albania",code:"AL"},{name:"Algeria",code:"DZ"},{name:"American Samoa",code:"AS"},{name:"Andorra",code:"AD"},{name:"Angola",code:"AO"},{name:"Anguilla",code:"AI"},{name:"Antarctica",code:"AQ"},{name:"Antigua and Barbuda",code:"AG"},{name:"Argentina",code:"AR"},{name:"Armenia",code:"AM"},{name:"Aruba",code:"AW"},{name:"Australia",code:"AU"},{name:"Austria",code:"AT"},{name:"Azerbaijan",code:"AZ"},{name:"Bahamas",code:"BS"},{name:"Bahrain",code:"BH"},{name:"Bangladesh",code:"BD"},{name:"Barbados",code:"BB"},{name:"Belarus",code:"BY"},{name:"Belgium",code:"BE"},{name:"Belize",code:"BZ"},{name:"Benin",code:"BJ"},{name:"Bermuda",code:"BM"},{name:"Bhutan",code:"BT"},{name:"Bolivia",code:"BO"},{name:"Bosnia and Herzegovina",code:"BA"},{name:"Botswana",code:"BW"},{name:"Bouvet Island",code:"BV"},{name:"Brazil",code:"BR"},{name:"British Indian Ocean Territory",code:"IO"},{name:"Brunei Darussalam",code:"BN"},{name:"Bulgaria",code:"BG"},{name:"Burkina Faso",code:"BF"},{name:"Burundi",code:"BI"},{name:"Cambodia",code:"KH"},{name:"Cameroon",code:"CM"},{name:"Canada",code:"CA"},{name:"Cape Verde",code:"CV"},{name:"Cayman Islands",code:"KY"},{name:"Central African Republic",code:"CF"},{name:"Chad",code:"TD"},{name:"Chile",code:"CL"},{name:"China",code:"CN"},{name:"Christmas Island",code:"CX"},{name:"Cocos (Keeling) Islands",code:"CC"},{name:"Colombia",code:"CO"},{name:"Comoros",code:"KM"},{name:"Congo",code:"CG"},{name:"Congo, The Democratic Republic of the",code:"CD"},{name:"Cook Islands",code:"CK"},{name:"Costa Rica",code:"CR"},{name:'Cote D"Ivoire',code:"CI"},{name:"Croatia",code:"HR"},{name:"Cuba",code:"CU"},{name:"Cyprus",code:"CY"},{name:"Czech Republic",code:"CZ"},{name:"Denmark",code:"DK"},{name:"Djibouti",code:"DJ"},{name:"Dominica",code:"DM"},{name:"Dominican Republic",code:"DO"},{name:"Ecuador",code:"EC"},{name:"Egypt",code:"EG"},{name:"El Salvador",code:"SV"},{name:"Equatorial Guinea",code:"GQ"},{name:"Eritrea",code:"ER"},{name:"Estonia",code:"EE"},{name:"Ethiopia",code:"ET"},{name:"Falkland Islands (Malvinas)",code:"FK"},{name:"Faroe Islands",code:"FO"},{name:"Fiji",code:"FJ"},{name:"Finland",code:"FI"},{name:"France",code:"FR"},{name:"French Guiana",code:"GF"},{name:"French Polynesia",code:"PF"},{name:"French Southern Territories",code:"TF"},{name:"Gabon",code:"GA"},{name:"Gambia",code:"GM"},{name:"Georgia",code:"GE"},{name:"Germany",code:"DE"},{name:"Ghana",code:"GH"},{name:"Gibraltar",code:"GI"},{name:"Greece",code:"GR"},{name:"Greenland",code:"GL"},{name:"Grenada",code:"GD"},{name:"Guadeloupe",code:"GP"},{name:"Guam",code:"GU"},{name:"Guatemala",code:"GT"},{name:"Guernsey",code:"GG"},{name:"Guinea",code:"GN"},{name:"Guinea-Bissau",code:"GW"},{name:"Guyana",code:"GY"},{name:"Haiti",code:"HT"},{name:"Heard Island and Mcdonald Islands",code:"HM"},{name:"Holy See (Vatican City State)",code:"VA"},{name:"Honduras",code:"HN"},{name:"Hong Kong",code:"HK"},{name:"Hungary",code:"HU"},{name:"Iceland",code:"IS"},{name:"India",code:"IN"},{name:"Indonesia",code:"ID"},{name:"Iran, Islamic Republic Of",code:"IR"},{name:"Iraq",code:"IQ"},{name:"Ireland",code:"IE"},{name:"Isle of Man",code:"IM"},{name:"Israel",code:"IL"},{name:"Italy",code:"IT"},{name:"Jamaica",code:"JM"},{name:"Japan",code:"JP"},{name:"Jersey",code:"JE"},{name:"Jordan",code:"JO"},{name:"Kazakhstan",code:"KZ"},{name:"Kenya",code:"KE"},{name:"Kiribati",code:"KI"},{name:'Korea, Democratic People"S Republic of',code:"KP"},{name:"Korea, Republic of",code:"KR"},{name:"Kuwait",code:"KW"},{name:"Kyrgyzstan",code:"KG"},{name:'Lao People"S Democratic Republic',code:"LA"},{name:"Latvia",code:"LV"},{name:"Lebanon",code:"LB"},{name:"Lesotho",code:"LS"},{name:"Liberia",code:"LR"},{name:"Libyan Arab Jamahiriya",code:"LY"},{name:"Liechtenstein",code:"LI"},{name:"Lithuania",code:"LT"},{name:"Luxembourg",code:"LU"},{name:"Macao",code:"MO"},{name:"Macedonia, The Former Yugoslav Republic of",code:"MK"},{name:"Madagascar",code:"MG"},{name:"Malawi",code:"MW"},{name:"Malaysia",code:"MY"},{name:"Maldives",code:"MV"},{name:"Mali",code:"ML"},{name:"Malta",code:"MT"},{name:"Marshall Islands",code:"MH"},{name:"Martinique",code:"MQ"},{name:"Mauritania",code:"MR"},{name:"Mauritius",code:"MU"},{name:"Mayotte",code:"YT"},{name:"Mexico",code:"MX"},{name:"Micronesia, Federated States of",code:"FM"},{name:"Moldova, Republic of",code:"MD"},{name:"Monaco",code:"MC"},{name:"Mongolia",code:"MN"},{name:"Montserrat",code:"MS"},{name:"Morocco",code:"MA"},{name:"Mozambique",code:"MZ"},{name:"Myanmar",code:"MM"},{name:"Namibia",code:"NA"},{name:"Nauru",code:"NR"},{name:"Nepal",code:"NP"},{name:"Netherlands",code:"NL"},{name:"Netherlands Antilles",code:"AN"},{name:"New Caledonia",code:"NC"},{name:"New Zealand",code:"NZ"},{name:"Nicaragua",code:"NI"},{name:"Niger",code:"NE"},{name:"Nigeria",code:"NG"},{name:"Niue",code:"NU"},{name:"Norfolk Island",code:"NF"},{name:"Northern Mariana Islands",code:"MP"},{name:"Norway",code:"NO"},{name:"Oman",code:"OM"},{name:"Pakistan",code:"PK"},{name:"Palau",code:"PW"},{name:"Palestinian Territory, Occupied",code:"PS"},{name:"Panama",code:"PA"},{name:"Papua New Guinea",code:"PG"},{name:"Paraguay",code:"PY"},{name:"Peru",code:"PE"},{name:"Philippines",code:"PH"},{name:"Pitcairn",code:"PN"},{name:"Poland",code:"PL"},{name:"Portugal",code:"PT"},{name:"Puerto Rico",code:"PR"},{name:"Qatar",code:"QA"},{name:"Reunion",code:"RE"},{name:"Romania",code:"RO"},{name:"Russian Federation",code:"RU"},{name:"RWANDA",code:"RW"},{name:"Saint Helena",code:"SH"},{name:"Saint Kitts and Nevis",code:"KN"},{name:"Saint Lucia",code:"LC"},{name:"Saint Pierre and Miquelon",code:"PM"},{name:"Saint Vincent and the Grenadines",code:"VC"},{name:"Samoa",code:"WS"},{name:"San Marino",code:"SM"},{name:"Sao Tome and Principe",code:"ST"},{name:"Saudi Arabia",code:"SA"},{name:"Senegal",code:"SN"},{name:"Serbia and Montenegro",code:"CS"},{name:"Seychelles",code:"SC"},{name:"Sierra Leone",code:"SL"},{name:"Singapore",code:"SG"},{name:"Slovakia",code:"SK"},{name:"Slovenia",code:"SI"},{name:"Solomon Islands",code:"SB"},{name:"Somalia",code:"SO"},{name:"South Africa",code:"ZA"},{name:"South Georgia and the South Sandwich Islands",code:"GS"},{name:"Spain",code:"ES"},{name:"Sri Lanka",code:"LK"},{name:"Sudan",code:"SD"},{name:"Suriname",code:"SR"},{name:"Svalbard and Jan Mayen",code:"SJ"},{name:"Swaziland",code:"SZ"},{name:"Sweden",code:"SE"},{name:"Switzerland",code:"CH"},{name:"Syrian Arab Republic",code:"SY"},{name:"Taiwan, Province of China",code:"TW"},{name:"Tajikistan",code:"TJ"},{name:"Tanzania, United Republic of",code:"TZ"},{name:"Thailand",code:"TH"},{name:"Timor-Leste",code:"TL"},{name:"Togo",code:"TG"},{name:"Tokelau",code:"TK"},{name:"Tonga",code:"TO"},{name:"Trinidad and Tobago",code:"TT"},{name:"Tunisia",code:"TN"},{name:"Turkey",code:"TR"},{name:"Turkmenistan",code:"TM"},{name:"Turks and Caicos Islands",code:"TC"},{name:"Tuvalu",code:"TV"},{name:"Uganda",code:"UG"},{name:"Ukraine",code:"UA"},{name:"United Arab Emirates",code:"AE"},{name:"United Kingdom",code:"GB"},{name:"United States",code:"US"},{name:"United States Minor Outlying Islands",code:"UM"},{name:"Uruguay",code:"UY"},{name:"Uzbekistan",code:"UZ"},{name:"Vanuatu",code:"VU"},{name:"Venezuela",code:"VE"},{name:"Viet Nam",code:"VN"},{name:"Virgin Islands, British",code:"VG"},{name:"Virgin Islands, U.S.",code:"VI"},{name:"Wallis and Futuna",code:"WF"},{name:"Western Sahara",code:"EH"},{name:"Yemen",code:"YE"},{name:"Zambia",code:"ZM"},{name:"Zimbabwe",code:"ZW"}])},e.ngInjectableDef=a.defineInjectable({factory:function(){return new e(a.inject(l.c))},token:e,providedIn:"root"}),e}()},XYIR:function(e,n,t){"use strict";t("UXJL")},XzHB:function(e,n,t){"use strict";t("KqrR")},abRS:function(e,n,t){"use strict";t.d(n,"a",function(){return l}),t.d(n,"b",function(){return v});var o=t("CcnG"),i=t("xkgV"),a=t("Ip0R"),l=o["\u0275crt"]({encapsulation:2,styles:["\n.ngx-pagination {\n  margin-left: 0;\n  margin-bottom: 1rem; }\n  .ngx-pagination::before, .ngx-pagination::after {\n    content: ' ';\n    display: table; }\n  .ngx-pagination::after {\n    clear: both; }\n  .ngx-pagination li {\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n    margin-right: 0.0625rem;\n    border-radius: 0; }\n  .ngx-pagination li {\n    display: inline-block; }\n  .ngx-pagination a,\n  .ngx-pagination button {\n    color: #0a0a0a; \n    display: block;\n    padding: 0.1875rem 0.625rem;\n    border-radius: 0; }\n    .ngx-pagination a:hover,\n    .ngx-pagination button:hover {\n      background: #e6e6e6; }\n  .ngx-pagination .current {\n    padding: 0.1875rem 0.625rem;\n    background: #2199e8;\n    color: #fefefe;\n    cursor: default; }\n  .ngx-pagination .disabled {\n    padding: 0.1875rem 0.625rem;\n    color: #cacaca;\n    cursor: default; } \n    .ngx-pagination .disabled:hover {\n      background: transparent; }\n  .ngx-pagination a, .ngx-pagination button {\n    cursor: pointer; }\n\n.ngx-pagination .pagination-previous a::before,\n.ngx-pagination .pagination-previous.disabled::before { \n  content: '\xab';\n  display: inline-block;\n  margin-right: 0.5rem; }\n\n.ngx-pagination .pagination-next a::after,\n.ngx-pagination .pagination-next.disabled::after {\n  content: '\xbb';\n  display: inline-block;\n  margin-left: 0.5rem; }\n\n.ngx-pagination .show-for-sr {\n  position: absolute !important;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0); }\n.ngx-pagination .small-screen {\n  display: none; }\n@media screen and (max-width: 601px) {\n  .ngx-pagination.responsive .small-screen {\n    display: inline-block; } \n  .ngx-pagination.responsive li:not(.small-screen):not(.pagination-previous):not(.pagination-next) {\n    display: none; }\n}\n  "],data:{}});function r(e){return o["\u0275vid"](0,[(e()(),o["\u0275eld"](0,0,null,null,3,"a",[["tabindex","0"]],[[1,"aria-label",0]],[[null,"keyup.enter"],[null,"click"]],function(e,n,t){var i=!0;return"keyup.enter"===n&&(i=!1!==o["\u0275nov"](e.parent.parent.parent,1).previous()&&i),"click"===n&&(i=!1!==o["\u0275nov"](e.parent.parent.parent,1).previous()&&i),i},null,null)),(e()(),o["\u0275ted"](1,null,[" "," "])),(e()(),o["\u0275eld"](2,0,null,null,1,"span",[["class","show-for-sr"]],null,null,null,null,null)),(e()(),o["\u0275ted"](3,null,["",""]))],null,function(e,n){var t=n.component;e(n,0,0,t.previousLabel+" "+t.screenReaderPageLabel),e(n,1,0,t.previousLabel),e(n,3,0,t.screenReaderPageLabel)})}function c(e){return o["\u0275vid"](0,[(e()(),o["\u0275eld"](0,0,null,null,3,"span",[],null,null,null,null,null)),(e()(),o["\u0275ted"](1,null,[" "," "])),(e()(),o["\u0275eld"](2,0,null,null,1,"span",[["class","show-for-sr"]],null,null,null,null,null)),(e()(),o["\u0275ted"](3,null,["",""]))],null,function(e,n){var t=n.component;e(n,1,0,t.previousLabel),e(n,3,0,t.screenReaderPageLabel)})}function u(e){return o["\u0275vid"](0,[(e()(),o["\u0275eld"](0,0,null,null,4,"li",[["class","pagination-previous"]],[[2,"disabled",null]],null,null,null,null)),(e()(),o["\u0275and"](16777216,null,null,1,null,r)),o["\u0275did"](2,16384,null,0,a.NgIf,[o.ViewContainerRef,o.TemplateRef],{ngIf:[0,"ngIf"]},null),(e()(),o["\u0275and"](16777216,null,null,1,null,c)),o["\u0275did"](4,16384,null,0,a.NgIf,[o.ViewContainerRef,o.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(e,n){e(n,2,0,1<o["\u0275nov"](n.parent.parent,1).getCurrent()),e(n,4,0,o["\u0275nov"](n.parent.parent,1).isFirstPage())},function(e,n){e(n,0,0,o["\u0275nov"](n.parent.parent,1).isFirstPage())})}function d(e){return o["\u0275vid"](0,[(e()(),o["\u0275eld"](0,0,null,null,4,"a",[["tabindex","0"]],null,[[null,"keyup.enter"],[null,"click"]],function(e,n,t){var i=!0;return"keyup.enter"===n&&(i=!1!==o["\u0275nov"](e.parent.parent.parent,1).setCurrent(e.parent.context.$implicit.value)&&i),"click"===n&&(i=!1!==o["\u0275nov"](e.parent.parent.parent,1).setCurrent(e.parent.context.$implicit.value)&&i),i},null,null)),(e()(),o["\u0275eld"](1,0,null,null,1,"span",[["class","show-for-sr"]],null,null,null,null,null)),(e()(),o["\u0275ted"](2,null,[""," "])),(e()(),o["\u0275eld"](3,0,null,null,1,"span",[],null,null,null,null,null)),(e()(),o["\u0275ted"](4,null,["",""]))],null,function(e,n){e(n,2,0,n.component.screenReaderPageLabel),e(n,4,0,n.parent.context.$implicit.label)})}function s(e){return o["\u0275vid"](0,[(e()(),o["\u0275eld"](0,0,null,null,4,null,null,null,null,null,null,null)),(e()(),o["\u0275eld"](1,0,null,null,1,"span",[["class","show-for-sr"]],null,null,null,null,null)),(e()(),o["\u0275ted"](2,null,[""," "])),(e()(),o["\u0275eld"](3,0,null,null,1,"span",[],null,null,null,null,null)),(e()(),o["\u0275ted"](4,null,["",""]))],null,function(e,n){e(n,2,0,n.component.screenReaderCurrentLabel),e(n,4,0,n.parent.context.$implicit.label)})}function p(e){return o["\u0275vid"](0,[(e()(),o["\u0275eld"](0,0,null,null,4,"li",[],[[2,"current",null],[2,"ellipsis",null]],null,null,null,null)),(e()(),o["\u0275and"](16777216,null,null,1,null,d)),o["\u0275did"](2,16384,null,0,a.NgIf,[o.ViewContainerRef,o.TemplateRef],{ngIf:[0,"ngIf"]},null),(e()(),o["\u0275and"](16777216,null,null,1,null,s)),o["\u0275did"](4,16384,null,0,a.NgIf,[o.ViewContainerRef,o.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(e,n){e(n,2,0,o["\u0275nov"](n.parent.parent,1).getCurrent()!==n.context.$implicit.value),e(n,4,0,o["\u0275nov"](n.parent.parent,1).getCurrent()===n.context.$implicit.value)},function(e,n){e(n,0,0,o["\u0275nov"](n.parent.parent,1).getCurrent()===n.context.$implicit.value,"..."===n.context.$implicit.label)})}function m(e){return o["\u0275vid"](0,[(e()(),o["\u0275eld"](0,0,null,null,3,"a",[["tabindex","0"]],[[1,"aria-label",0]],[[null,"keyup.enter"],[null,"click"]],function(e,n,t){var i=!0;return"keyup.enter"===n&&(i=!1!==o["\u0275nov"](e.parent.parent.parent,1).next()&&i),"click"===n&&(i=!1!==o["\u0275nov"](e.parent.parent.parent,1).next()&&i),i},null,null)),(e()(),o["\u0275ted"](1,null,[" "," "])),(e()(),o["\u0275eld"](2,0,null,null,1,"span",[["class","show-for-sr"]],null,null,null,null,null)),(e()(),o["\u0275ted"](3,null,["",""]))],null,function(e,n){var t=n.component;e(n,0,0,t.nextLabel+" "+t.screenReaderPageLabel),e(n,1,0,t.nextLabel),e(n,3,0,t.screenReaderPageLabel)})}function h(e){return o["\u0275vid"](0,[(e()(),o["\u0275eld"](0,0,null,null,3,"span",[],null,null,null,null,null)),(e()(),o["\u0275ted"](1,null,[" "," "])),(e()(),o["\u0275eld"](2,0,null,null,1,"span",[["class","show-for-sr"]],null,null,null,null,null)),(e()(),o["\u0275ted"](3,null,["",""]))],null,function(e,n){var t=n.component;e(n,1,0,t.nextLabel),e(n,3,0,t.screenReaderPageLabel)})}function f(e){return o["\u0275vid"](0,[(e()(),o["\u0275eld"](0,0,null,null,4,"li",[["class","pagination-next"]],[[2,"disabled",null]],null,null,null,null)),(e()(),o["\u0275and"](16777216,null,null,1,null,m)),o["\u0275did"](2,16384,null,0,a.NgIf,[o.ViewContainerRef,o.TemplateRef],{ngIf:[0,"ngIf"]},null),(e()(),o["\u0275and"](16777216,null,null,1,null,h)),o["\u0275did"](4,16384,null,0,a.NgIf,[o.ViewContainerRef,o.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(e,n){e(n,2,0,!o["\u0275nov"](n.parent.parent,1).isLastPage()),e(n,4,0,o["\u0275nov"](n.parent.parent,1).isLastPage())},function(e,n){e(n,0,0,o["\u0275nov"](n.parent.parent,1).isLastPage())})}function g(e){return o["\u0275vid"](0,[(e()(),o["\u0275eld"](0,0,null,null,8,"ul",[["class","ngx-pagination"],["role","navigation"]],[[1,"aria-label",0],[2,"responsive",null]],null,null,null,null)),(e()(),o["\u0275and"](16777216,null,null,1,null,u)),o["\u0275did"](2,16384,null,0,a.NgIf,[o.ViewContainerRef,o.TemplateRef],{ngIf:[0,"ngIf"]},null),(e()(),o["\u0275eld"](3,0,null,null,1,"li",[["class","small-screen"]],null,null,null,null,null)),(e()(),o["\u0275ted"](4,null,[" "," / "," "])),(e()(),o["\u0275and"](16777216,null,null,1,null,p)),o["\u0275did"](6,278528,null,0,a.NgForOf,[o.ViewContainerRef,o.TemplateRef,o.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(e()(),o["\u0275and"](16777216,null,null,1,null,f)),o["\u0275did"](8,16384,null,0,a.NgIf,[o.ViewContainerRef,o.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(e,n){var t=n.component;e(n,2,0,t.directionLinks),e(n,6,0,o["\u0275nov"](n.parent,1).pages),e(n,8,0,t.directionLinks)},function(e,n){var t=n.component;e(n,0,0,t.screenReaderPaginationLabel,t.responsive),e(n,4,0,o["\u0275nov"](n.parent,1).getCurrent(),o["\u0275nov"](n.parent,1).getLastPage())})}function v(e){return o["\u0275vid"](2,[(e()(),o["\u0275eld"](0,0,null,null,3,"pagination-template",[],null,[[null,"pageChange"]],function(e,n,t){var o=!0;return"pageChange"===n&&(o=!1!==e.component.pageChange.emit(t)&&o),o},null,null)),o["\u0275did"](1,737280,[["p",4]],0,i.d,[i.e,o.ChangeDetectorRef],{id:[0,"id"],maxSize:[1,"maxSize"]},{pageChange:"pageChange"}),(e()(),o["\u0275and"](16777216,null,null,1,null,g)),o["\u0275did"](3,16384,null,0,a.NgIf,[o.ViewContainerRef,o.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(e,n){var t=n.component;e(n,1,0,t.id,t.maxSize),e(n,3,0,!(t.autoHide&&o["\u0275nov"](n,1).pages.length<=1))},null)}},bt6x:function(e,n,t){"use strict";t.d(n,"a",function(){return i}),t("o1U6");var o=t("e5OV"),i=function(){function e(){}return e.forRoot=function(){return{ngModule:e,providers:[o.a]}},e}()},cL2O:function(e,n,t){"use strict";t.d(n,"a",function(){return l});var o=t("VJzw"),i=t("CcnG"),a=t("t/Na"),l=function(){function e(e){this.http=e,this.url=o.a}return e.prototype.addMedication=function(e){return this.http.post(this.url+"/prescription/add-medication.php",e)},e.prototype.addPrescription=function(e){return this.http.post(this.url+"/prescription/add-prescription.php",e)},e.prototype.getPrescriptions=function(e){return this.http.get(this.url+"/prescription/get-prescriptions.php?UserId="+e)},e.ngInjectableDef=i.defineInjectable({factory:function(){return new e(i.inject(a.c))},token:e,providedIn:"root"}),e}()},e5OV:function(e,n,t){"use strict";t.d(n,"a",function(){return o});var o=function(){this.dismissible=!0,this.type="warning"}},ebCm:function(e,n,t){"use strict";t.d(n,"a",function(){return o});var o=function(){this.autoClose=!0,this.placement="bottom-left"}},ldgc:function(e,n,t){"use strict";t.d(n,"a",function(){return o});var o=function(e){return e[e.Tab=9]="Tab",e[e.Enter=13]="Enter",e[e.Escape=27]="Escape",e[e.Space=32]="Space",e[e.PageUp=33]="PageUp",e[e.PageDown=34]="PageDown",e[e.End=35]="End",e[e.Home=36]="Home",e[e.ArrowLeft=37]="ArrowLeft",e[e.ArrowUp=38]="ArrowUp",e[e.ArrowRight=39]="ArrowRight",e[e.ArrowDown=40]="ArrowDown",e}({})},lwpf:function(e,n,t){"use strict";t.d(n,"c",function(){return m}),t.d(n,"b",function(){return h}),t.d(n,"d",function(){return f}),t.d(n,"a",function(){return g});var o,i=t("CcnG"),a=t("K9Ia"),l=t("bne5"),r=t("W0Ae"),c=t("ny24"),u=t("VnD/"),d=(t("ebCm"),t("C1df")),s=t("ldgc"),p=(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t])},function(e,n){function t(){this.constructor=e}o(e,n),e.prototype=null===n?Object.create(n):(t.prototype=n.prototype,new t)}),m=function(){function e(e,n,t){this.dropdown=e,this._elementRef=n,this._renderer=t,this.placement="bottom",this.isOpen=!1}return e.prototype.isEventFrom=function(e){return this._elementRef.nativeElement.contains(e.target)},e.prototype.position=function(e,n){this.applyPlacement(Object(d.a)(e,this._elementRef.nativeElement,n))},e.prototype.applyPlacement=function(e){this._renderer.removeClass(this._elementRef.nativeElement.parentNode,"dropup"),this._renderer.removeClass(this._elementRef.nativeElement.parentNode,"dropdown"),this.placement=e,-1!==e.search("^top")?this._renderer.addClass(this._elementRef.nativeElement.parentNode,"dropup"):this._renderer.addClass(this._elementRef.nativeElement.parentNode,"dropdown")},e}(),h=function(){function e(e,n){this.dropdown=e,this._elementRef=n,this.anchorEl=n.nativeElement}return e.prototype.isEventFrom=function(e){return this._elementRef.nativeElement.contains(e.target)},e}(),f=function(e){function n(n,t){return e.call(this,n,t)||this}return p(n,e),n.prototype.toggleOpen=function(){this.dropdown.toggle()},n}(h),g=function(){function e(e,n,t,o){var l=this;this._changeDetector=e,this._document=t,this._ngZone=o,this._closed$=new a.a,this._open=!1,this.openChange=new i.EventEmitter,this.placement=n.placement,this.autoClose=n.autoClose,this._zoneSubscription=o.onStable.subscribe(function(){l._positionMenu()})}return e.prototype.ngOnInit=function(){this._menu&&this._menu.applyPlacement(Array.isArray(this.placement)?this.placement[0]:this.placement),this._open&&this._setCloseHandlers()},e.prototype.isOpen=function(){return this._open},e.prototype.open=function(){this._open||(this._open=!0,this._positionMenu(),this.openChange.emit(!0),this._setCloseHandlers())},e.prototype._setCloseHandlers=function(){var e=this;this.autoClose&&this._ngZone.runOutsideAngular(function(){var n=Object(l.a)(e._document,"keyup").pipe(Object(c.a)(e._closed$),Object(u.a)(function(e){return e.which===s.a.Escape})),t=Object(l.a)(e._document,"click").pipe(Object(c.a)(e._closed$),Object(u.a)(function(n){return e._shouldCloseFromClick(n)}));Object(r.a)([n,t]).pipe(Object(c.a)(e._closed$)).subscribe(function(){return e._ngZone.run(function(){e.close(),e._changeDetector.markForCheck()})})})},e.prototype.close=function(){this._open&&(this._open=!1,this._closed$.next(),this.openChange.emit(!1))},e.prototype.toggle=function(){this.isOpen()?this.close():this.open()},e.prototype._shouldCloseFromClick=function(e){if(2!==e.button&&!this._isEventFromToggle(e)){if(!0===this.autoClose)return!0;if("inside"===this.autoClose&&this._isEventFromMenu(e))return!0;if("outside"===this.autoClose&&!this._isEventFromMenu(e))return!0}return!1},e.prototype.ngOnDestroy=function(){this._closed$.next(),this._zoneSubscription.unsubscribe()},e.prototype._isEventFromToggle=function(e){return this._anchor.isEventFrom(e)},e.prototype._isEventFromMenu=function(e){return!!this._menu&&this._menu.isEventFrom(e)},e.prototype._positionMenu=function(){this.isOpen()&&this._menu&&this._menu.position(this._anchor.anchorEl,this.placement)},e}()},ny24:function(e,n,t){"use strict";t.d(n,"a",function(){return l});var o=t("mrSG"),i=t("MGBS"),a=t("zotm");function l(e){return function(n){return n.lift(new r(e))}}var r=function(){function e(e){this.notifier=e}return e.prototype.call=function(e,n){var t=new c(e),o=Object(a.a)(t,this.notifier);return o&&!o.closed?(t.add(o),n.subscribe(t)):t},e}(),c=function(e){function n(n){return e.call(this,n)||this}return o.__extends(n,e),n.prototype.notifyNext=function(e,n,t,o,i){this.complete()},n.prototype.notifyComplete=function(){},n}(i.a)},o0su:function(e,n,t){"use strict";var o=t("IRyT"),i=(t("XYIR"),t("XzHB"),t("CFL1")),a=t("cL2O");t.d(n,!1,function(){return o.a}),t.d(n,!1,function(){}),t.d(n,!1,function(){}),t.d(n,!1,function(){return i.a}),t.d(n,!1,function(){return a.a})},o1U6:function(e,n,t){"use strict";t.d(n,"a",function(){return i});var o=t("CcnG"),i=(t("e5OV"),function(){function e(e){this.close=new o.EventEmitter,this.dismissible=e.dismissible,this.type=e.type}return e.prototype.closeHandler=function(){this.close.emit(null)},e}())},q7oS:function(e,n,t){"use strict";t.d(n,"a",function(){return o});var o=function(){this.interval=5e3,this.wrap=!0,this.keyboard=!0,this.pauseOnHover=!0,this.showNavigationArrows=!0,this.showNavigationIndicators=!0}}}]);