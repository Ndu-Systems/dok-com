(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{CFL1:function(n,e,a){"use strict";a.d(e,"a",function(){return i});var l=a("VJzw"),o=a("CcnG"),t=a("t/Na"),i=function(){function n(n){this.httpClient=n,this.url=l.a}return n.ngInjectableDef=o.defineInjectable({factory:function(){return new n(o.inject(t.c))},token:n,providedIn:"root"}),n}()},IRyT:function(n,e,a){"use strict";a.d(e,"a",function(){return o});var l=a("VJzw"),o=function(){function n(n){this.httpClient=n,this.url=l.a}return n.prototype.loginUser=function(n,e){return this.httpClient.get(this.url+"/account/SignIn.php?Email="+n+"&Password="+e)},n.prototype.changePassword=function(n){return this.httpClient.post(this.url+"/account/PasswordReset.php",n)},n}()},KqrR:function(n,e,a){"use strict";var l=a("VJzw"),o=a("CcnG"),t=a("t/Na");a.d(e,"a",function(){return i});var i=function(){function n(n){this.http=n,this.url=l.a}return n.prototype.getAppointment=function(){return this.http.get(this.url+"/appointment/get-appointments.php")},n.prototype.addAppointment=function(n){return this.http.post(this.url+"/appointment/add-appointment.php",n)},n.prototype.editAppointment=function(n){return this.http.post(this.url+"/appointment/edit-appointment.php",n)},n.ngInjectableDef=o.defineInjectable({factory:function(){return new n(o.inject(t.c))},token:n,providedIn:"root"}),n}()},UXJL:function(n,e,a){"use strict";a.d(e,"a",function(){return c});var l=a("F/XL"),o=a("VJzw"),t=a("CcnG"),i=a("t/Na"),c=function(){function n(n){this.http=n,this.url=o.a}return n.prototype.addPatient=function(n){return this.http.post(this.url+"/patient/add-patient.php",n)},n.prototype.updatePatient=function(n){return this.http.post(this.url+"/patient/edit-patient.php",n)},n.prototype.getDrugs=function(n){return Object(l.a)([{name:"Afghanistan",code:"AF"},{name:"\xc5land Islands",code:"AX"},{name:"Albania",code:"AL"},{name:"Algeria",code:"DZ"},{name:"American Samoa",code:"AS"},{name:"Andorra",code:"AD"},{name:"Angola",code:"AO"},{name:"Anguilla",code:"AI"},{name:"Antarctica",code:"AQ"},{name:"Antigua and Barbuda",code:"AG"},{name:"Argentina",code:"AR"},{name:"Armenia",code:"AM"},{name:"Aruba",code:"AW"},{name:"Australia",code:"AU"},{name:"Austria",code:"AT"},{name:"Azerbaijan",code:"AZ"},{name:"Bahamas",code:"BS"},{name:"Bahrain",code:"BH"},{name:"Bangladesh",code:"BD"},{name:"Barbados",code:"BB"},{name:"Belarus",code:"BY"},{name:"Belgium",code:"BE"},{name:"Belize",code:"BZ"},{name:"Benin",code:"BJ"},{name:"Bermuda",code:"BM"},{name:"Bhutan",code:"BT"},{name:"Bolivia",code:"BO"},{name:"Bosnia and Herzegovina",code:"BA"},{name:"Botswana",code:"BW"},{name:"Bouvet Island",code:"BV"},{name:"Brazil",code:"BR"},{name:"British Indian Ocean Territory",code:"IO"},{name:"Brunei Darussalam",code:"BN"},{name:"Bulgaria",code:"BG"},{name:"Burkina Faso",code:"BF"},{name:"Burundi",code:"BI"},{name:"Cambodia",code:"KH"},{name:"Cameroon",code:"CM"},{name:"Canada",code:"CA"},{name:"Cape Verde",code:"CV"},{name:"Cayman Islands",code:"KY"},{name:"Central African Republic",code:"CF"},{name:"Chad",code:"TD"},{name:"Chile",code:"CL"},{name:"China",code:"CN"},{name:"Christmas Island",code:"CX"},{name:"Cocos (Keeling) Islands",code:"CC"},{name:"Colombia",code:"CO"},{name:"Comoros",code:"KM"},{name:"Congo",code:"CG"},{name:"Congo, The Democratic Republic of the",code:"CD"},{name:"Cook Islands",code:"CK"},{name:"Costa Rica",code:"CR"},{name:'Cote D"Ivoire',code:"CI"},{name:"Croatia",code:"HR"},{name:"Cuba",code:"CU"},{name:"Cyprus",code:"CY"},{name:"Czech Republic",code:"CZ"},{name:"Denmark",code:"DK"},{name:"Djibouti",code:"DJ"},{name:"Dominica",code:"DM"},{name:"Dominican Republic",code:"DO"},{name:"Ecuador",code:"EC"},{name:"Egypt",code:"EG"},{name:"El Salvador",code:"SV"},{name:"Equatorial Guinea",code:"GQ"},{name:"Eritrea",code:"ER"},{name:"Estonia",code:"EE"},{name:"Ethiopia",code:"ET"},{name:"Falkland Islands (Malvinas)",code:"FK"},{name:"Faroe Islands",code:"FO"},{name:"Fiji",code:"FJ"},{name:"Finland",code:"FI"},{name:"France",code:"FR"},{name:"French Guiana",code:"GF"},{name:"French Polynesia",code:"PF"},{name:"French Southern Territories",code:"TF"},{name:"Gabon",code:"GA"},{name:"Gambia",code:"GM"},{name:"Georgia",code:"GE"},{name:"Germany",code:"DE"},{name:"Ghana",code:"GH"},{name:"Gibraltar",code:"GI"},{name:"Greece",code:"GR"},{name:"Greenland",code:"GL"},{name:"Grenada",code:"GD"},{name:"Guadeloupe",code:"GP"},{name:"Guam",code:"GU"},{name:"Guatemala",code:"GT"},{name:"Guernsey",code:"GG"},{name:"Guinea",code:"GN"},{name:"Guinea-Bissau",code:"GW"},{name:"Guyana",code:"GY"},{name:"Haiti",code:"HT"},{name:"Heard Island and Mcdonald Islands",code:"HM"},{name:"Holy See (Vatican City State)",code:"VA"},{name:"Honduras",code:"HN"},{name:"Hong Kong",code:"HK"},{name:"Hungary",code:"HU"},{name:"Iceland",code:"IS"},{name:"India",code:"IN"},{name:"Indonesia",code:"ID"},{name:"Iran, Islamic Republic Of",code:"IR"},{name:"Iraq",code:"IQ"},{name:"Ireland",code:"IE"},{name:"Isle of Man",code:"IM"},{name:"Israel",code:"IL"},{name:"Italy",code:"IT"},{name:"Jamaica",code:"JM"},{name:"Japan",code:"JP"},{name:"Jersey",code:"JE"},{name:"Jordan",code:"JO"},{name:"Kazakhstan",code:"KZ"},{name:"Kenya",code:"KE"},{name:"Kiribati",code:"KI"},{name:'Korea, Democratic People"S Republic of',code:"KP"},{name:"Korea, Republic of",code:"KR"},{name:"Kuwait",code:"KW"},{name:"Kyrgyzstan",code:"KG"},{name:'Lao People"S Democratic Republic',code:"LA"},{name:"Latvia",code:"LV"},{name:"Lebanon",code:"LB"},{name:"Lesotho",code:"LS"},{name:"Liberia",code:"LR"},{name:"Libyan Arab Jamahiriya",code:"LY"},{name:"Liechtenstein",code:"LI"},{name:"Lithuania",code:"LT"},{name:"Luxembourg",code:"LU"},{name:"Macao",code:"MO"},{name:"Macedonia, The Former Yugoslav Republic of",code:"MK"},{name:"Madagascar",code:"MG"},{name:"Malawi",code:"MW"},{name:"Malaysia",code:"MY"},{name:"Maldives",code:"MV"},{name:"Mali",code:"ML"},{name:"Malta",code:"MT"},{name:"Marshall Islands",code:"MH"},{name:"Martinique",code:"MQ"},{name:"Mauritania",code:"MR"},{name:"Mauritius",code:"MU"},{name:"Mayotte",code:"YT"},{name:"Mexico",code:"MX"},{name:"Micronesia, Federated States of",code:"FM"},{name:"Moldova, Republic of",code:"MD"},{name:"Monaco",code:"MC"},{name:"Mongolia",code:"MN"},{name:"Montserrat",code:"MS"},{name:"Morocco",code:"MA"},{name:"Mozambique",code:"MZ"},{name:"Myanmar",code:"MM"},{name:"Namibia",code:"NA"},{name:"Nauru",code:"NR"},{name:"Nepal",code:"NP"},{name:"Netherlands",code:"NL"},{name:"Netherlands Antilles",code:"AN"},{name:"New Caledonia",code:"NC"},{name:"New Zealand",code:"NZ"},{name:"Nicaragua",code:"NI"},{name:"Niger",code:"NE"},{name:"Nigeria",code:"NG"},{name:"Niue",code:"NU"},{name:"Norfolk Island",code:"NF"},{name:"Northern Mariana Islands",code:"MP"},{name:"Norway",code:"NO"},{name:"Oman",code:"OM"},{name:"Pakistan",code:"PK"},{name:"Palau",code:"PW"},{name:"Palestinian Territory, Occupied",code:"PS"},{name:"Panama",code:"PA"},{name:"Papua New Guinea",code:"PG"},{name:"Paraguay",code:"PY"},{name:"Peru",code:"PE"},{name:"Philippines",code:"PH"},{name:"Pitcairn",code:"PN"},{name:"Poland",code:"PL"},{name:"Portugal",code:"PT"},{name:"Puerto Rico",code:"PR"},{name:"Qatar",code:"QA"},{name:"Reunion",code:"RE"},{name:"Romania",code:"RO"},{name:"Russian Federation",code:"RU"},{name:"RWANDA",code:"RW"},{name:"Saint Helena",code:"SH"},{name:"Saint Kitts and Nevis",code:"KN"},{name:"Saint Lucia",code:"LC"},{name:"Saint Pierre and Miquelon",code:"PM"},{name:"Saint Vincent and the Grenadines",code:"VC"},{name:"Samoa",code:"WS"},{name:"San Marino",code:"SM"},{name:"Sao Tome and Principe",code:"ST"},{name:"Saudi Arabia",code:"SA"},{name:"Senegal",code:"SN"},{name:"Serbia and Montenegro",code:"CS"},{name:"Seychelles",code:"SC"},{name:"Sierra Leone",code:"SL"},{name:"Singapore",code:"SG"},{name:"Slovakia",code:"SK"},{name:"Slovenia",code:"SI"},{name:"Solomon Islands",code:"SB"},{name:"Somalia",code:"SO"},{name:"South Africa",code:"ZA"},{name:"South Georgia and the South Sandwich Islands",code:"GS"},{name:"Spain",code:"ES"},{name:"Sri Lanka",code:"LK"},{name:"Sudan",code:"SD"},{name:"Suriname",code:"SR"},{name:"Svalbard and Jan Mayen",code:"SJ"},{name:"Swaziland",code:"SZ"},{name:"Sweden",code:"SE"},{name:"Switzerland",code:"CH"},{name:"Syrian Arab Republic",code:"SY"},{name:"Taiwan, Province of China",code:"TW"},{name:"Tajikistan",code:"TJ"},{name:"Tanzania, United Republic of",code:"TZ"},{name:"Thailand",code:"TH"},{name:"Timor-Leste",code:"TL"},{name:"Togo",code:"TG"},{name:"Tokelau",code:"TK"},{name:"Tonga",code:"TO"},{name:"Trinidad and Tobago",code:"TT"},{name:"Tunisia",code:"TN"},{name:"Turkey",code:"TR"},{name:"Turkmenistan",code:"TM"},{name:"Turks and Caicos Islands",code:"TC"},{name:"Tuvalu",code:"TV"},{name:"Uganda",code:"UG"},{name:"Ukraine",code:"UA"},{name:"United Arab Emirates",code:"AE"},{name:"United Kingdom",code:"GB"},{name:"United States",code:"US"},{name:"United States Minor Outlying Islands",code:"UM"},{name:"Uruguay",code:"UY"},{name:"Uzbekistan",code:"UZ"},{name:"Vanuatu",code:"VU"},{name:"Venezuela",code:"VE"},{name:"Viet Nam",code:"VN"},{name:"Virgin Islands, British",code:"VG"},{name:"Virgin Islands, U.S.",code:"VI"},{name:"Wallis and Futuna",code:"WF"},{name:"Western Sahara",code:"EH"},{name:"Yemen",code:"YE"},{name:"Zambia",code:"ZM"},{name:"Zimbabwe",code:"ZW"}])},n.ngInjectableDef=t.defineInjectable({factory:function(){return new n(t.inject(i.c))},token:n,providedIn:"root"}),n}()},XYIR:function(n,e,a){"use strict";a("UXJL")},XzHB:function(n,e,a){"use strict";a("KqrR")},abRS:function(n,e,a){"use strict";a.d(e,"a",function(){return i}),a.d(e,"b",function(){return b});var l=a("CcnG"),o=a("xkgV"),t=a("Ip0R"),i=l["\u0275crt"]({encapsulation:2,styles:["\n.ngx-pagination {\n  margin-left: 0;\n  margin-bottom: 1rem; }\n  .ngx-pagination::before, .ngx-pagination::after {\n    content: ' ';\n    display: table; }\n  .ngx-pagination::after {\n    clear: both; }\n  .ngx-pagination li {\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n    margin-right: 0.0625rem;\n    border-radius: 0; }\n  .ngx-pagination li {\n    display: inline-block; }\n  .ngx-pagination a,\n  .ngx-pagination button {\n    color: #0a0a0a; \n    display: block;\n    padding: 0.1875rem 0.625rem;\n    border-radius: 0; }\n    .ngx-pagination a:hover,\n    .ngx-pagination button:hover {\n      background: #e6e6e6; }\n  .ngx-pagination .current {\n    padding: 0.1875rem 0.625rem;\n    background: #2199e8;\n    color: #fefefe;\n    cursor: default; }\n  .ngx-pagination .disabled {\n    padding: 0.1875rem 0.625rem;\n    color: #cacaca;\n    cursor: default; } \n    .ngx-pagination .disabled:hover {\n      background: transparent; }\n  .ngx-pagination a, .ngx-pagination button {\n    cursor: pointer; }\n\n.ngx-pagination .pagination-previous a::before,\n.ngx-pagination .pagination-previous.disabled::before { \n  content: '\xab';\n  display: inline-block;\n  margin-right: 0.5rem; }\n\n.ngx-pagination .pagination-next a::after,\n.ngx-pagination .pagination-next.disabled::after {\n  content: '\xbb';\n  display: inline-block;\n  margin-left: 0.5rem; }\n\n.ngx-pagination .show-for-sr {\n  position: absolute !important;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0); }\n.ngx-pagination .small-screen {\n  display: none; }\n@media screen and (max-width: 601px) {\n  .ngx-pagination.responsive .small-screen {\n    display: inline-block; } \n  .ngx-pagination.responsive li:not(.small-screen):not(.pagination-previous):not(.pagination-next) {\n    display: none; }\n}\n  "],data:{}});function c(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,3,"a",[["tabindex","0"]],[[1,"aria-label",0]],[[null,"keyup.enter"],[null,"click"]],function(n,e,a){var o=!0;return"keyup.enter"===e&&(o=!1!==l["\u0275nov"](n.parent.parent.parent,1).previous()&&o),"click"===e&&(o=!1!==l["\u0275nov"](n.parent.parent.parent,1).previous()&&o),o},null,null)),(n()(),l["\u0275ted"](1,null,[" "," "])),(n()(),l["\u0275eld"](2,0,null,null,1,"span",[["class","show-for-sr"]],null,null,null,null,null)),(n()(),l["\u0275ted"](3,null,["",""]))],null,function(n,e){var a=e.component;n(e,0,0,a.previousLabel+" "+a.screenReaderPageLabel),n(e,1,0,a.previousLabel),n(e,3,0,a.screenReaderPageLabel)})}function r(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,3,"span",[],null,null,null,null,null)),(n()(),l["\u0275ted"](1,null,[" "," "])),(n()(),l["\u0275eld"](2,0,null,null,1,"span",[["class","show-for-sr"]],null,null,null,null,null)),(n()(),l["\u0275ted"](3,null,["",""]))],null,function(n,e){var a=e.component;n(e,1,0,a.previousLabel),n(e,3,0,a.screenReaderPageLabel)})}function d(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,4,"li",[["class","pagination-previous"]],[[2,"disabled",null]],null,null,null,null)),(n()(),l["\u0275and"](16777216,null,null,1,null,c)),l["\u0275did"](2,16384,null,0,t.NgIf,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),l["\u0275and"](16777216,null,null,1,null,r)),l["\u0275did"](4,16384,null,0,t.NgIf,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(n,e){n(e,2,0,1<l["\u0275nov"](e.parent.parent,1).getCurrent()),n(e,4,0,l["\u0275nov"](e.parent.parent,1).isFirstPage())},function(n,e){n(e,0,0,l["\u0275nov"](e.parent.parent,1).isFirstPage())})}function u(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,4,"a",[["tabindex","0"]],null,[[null,"keyup.enter"],[null,"click"]],function(n,e,a){var o=!0;return"keyup.enter"===e&&(o=!1!==l["\u0275nov"](n.parent.parent.parent,1).setCurrent(n.parent.context.$implicit.value)&&o),"click"===e&&(o=!1!==l["\u0275nov"](n.parent.parent.parent,1).setCurrent(n.parent.context.$implicit.value)&&o),o},null,null)),(n()(),l["\u0275eld"](1,0,null,null,1,"span",[["class","show-for-sr"]],null,null,null,null,null)),(n()(),l["\u0275ted"](2,null,[""," "])),(n()(),l["\u0275eld"](3,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),l["\u0275ted"](4,null,["",""]))],null,function(n,e){n(e,2,0,e.component.screenReaderPageLabel),n(e,4,0,e.parent.context.$implicit.label)})}function m(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,4,null,null,null,null,null,null,null)),(n()(),l["\u0275eld"](1,0,null,null,1,"span",[["class","show-for-sr"]],null,null,null,null,null)),(n()(),l["\u0275ted"](2,null,[""," "])),(n()(),l["\u0275eld"](3,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),l["\u0275ted"](4,null,["",""]))],null,function(n,e){n(e,2,0,e.component.screenReaderCurrentLabel),n(e,4,0,e.parent.context.$implicit.label)})}function s(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,4,"li",[],[[2,"current",null],[2,"ellipsis",null]],null,null,null,null)),(n()(),l["\u0275and"](16777216,null,null,1,null,u)),l["\u0275did"](2,16384,null,0,t.NgIf,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),l["\u0275and"](16777216,null,null,1,null,m)),l["\u0275did"](4,16384,null,0,t.NgIf,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(n,e){n(e,2,0,l["\u0275nov"](e.parent.parent,1).getCurrent()!==e.context.$implicit.value),n(e,4,0,l["\u0275nov"](e.parent.parent,1).getCurrent()===e.context.$implicit.value)},function(n,e){n(e,0,0,l["\u0275nov"](e.parent.parent,1).getCurrent()===e.context.$implicit.value,"..."===e.context.$implicit.label)})}function p(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,3,"a",[["tabindex","0"]],[[1,"aria-label",0]],[[null,"keyup.enter"],[null,"click"]],function(n,e,a){var o=!0;return"keyup.enter"===e&&(o=!1!==l["\u0275nov"](n.parent.parent.parent,1).next()&&o),"click"===e&&(o=!1!==l["\u0275nov"](n.parent.parent.parent,1).next()&&o),o},null,null)),(n()(),l["\u0275ted"](1,null,[" "," "])),(n()(),l["\u0275eld"](2,0,null,null,1,"span",[["class","show-for-sr"]],null,null,null,null,null)),(n()(),l["\u0275ted"](3,null,["",""]))],null,function(n,e){var a=e.component;n(e,0,0,a.nextLabel+" "+a.screenReaderPageLabel),n(e,1,0,a.nextLabel),n(e,3,0,a.screenReaderPageLabel)})}function g(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,3,"span",[],null,null,null,null,null)),(n()(),l["\u0275ted"](1,null,[" "," "])),(n()(),l["\u0275eld"](2,0,null,null,1,"span",[["class","show-for-sr"]],null,null,null,null,null)),(n()(),l["\u0275ted"](3,null,["",""]))],null,function(n,e){var a=e.component;n(e,1,0,a.nextLabel),n(e,3,0,a.screenReaderPageLabel)})}function f(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,4,"li",[["class","pagination-next"]],[[2,"disabled",null]],null,null,null,null)),(n()(),l["\u0275and"](16777216,null,null,1,null,p)),l["\u0275did"](2,16384,null,0,t.NgIf,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),l["\u0275and"](16777216,null,null,1,null,g)),l["\u0275did"](4,16384,null,0,t.NgIf,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(n,e){n(e,2,0,!l["\u0275nov"](e.parent.parent,1).isLastPage()),n(e,4,0,l["\u0275nov"](e.parent.parent,1).isLastPage())},function(n,e){n(e,0,0,l["\u0275nov"](e.parent.parent,1).isLastPage())})}function h(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,8,"ul",[["class","ngx-pagination"],["role","navigation"]],[[1,"aria-label",0],[2,"responsive",null]],null,null,null,null)),(n()(),l["\u0275and"](16777216,null,null,1,null,d)),l["\u0275did"](2,16384,null,0,t.NgIf,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),l["\u0275eld"](3,0,null,null,1,"li",[["class","small-screen"]],null,null,null,null,null)),(n()(),l["\u0275ted"](4,null,[" "," / "," "])),(n()(),l["\u0275and"](16777216,null,null,1,null,s)),l["\u0275did"](6,278528,null,0,t.NgForOf,[l.ViewContainerRef,l.TemplateRef,l.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(n()(),l["\u0275and"](16777216,null,null,1,null,f)),l["\u0275did"](8,16384,null,0,t.NgIf,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(n,e){var a=e.component;n(e,2,0,a.directionLinks),n(e,6,0,l["\u0275nov"](e.parent,1).pages),n(e,8,0,a.directionLinks)},function(n,e){var a=e.component;n(e,0,0,a.screenReaderPaginationLabel,a.responsive),n(e,4,0,l["\u0275nov"](e.parent,1).getCurrent(),l["\u0275nov"](e.parent,1).getLastPage())})}function b(n){return l["\u0275vid"](2,[(n()(),l["\u0275eld"](0,0,null,null,3,"pagination-template",[],null,[[null,"pageChange"]],function(n,e,a){var l=!0;return"pageChange"===e&&(l=!1!==n.component.pageChange.emit(a)&&l),l},null,null)),l["\u0275did"](1,737280,[["p",4]],0,o.d,[o.e,l.ChangeDetectorRef],{id:[0,"id"],maxSize:[1,"maxSize"]},{pageChange:"pageChange"}),(n()(),l["\u0275and"](16777216,null,null,1,null,h)),l["\u0275did"](3,16384,null,0,t.NgIf,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(n,e){var a=e.component;n(e,1,0,a.id,a.maxSize),n(e,3,0,!(a.autoHide&&l["\u0275nov"](e,1).pages.length<=1))},null)}},cL2O:function(n,e,a){"use strict";a.d(e,"a",function(){return i});var l=a("VJzw"),o=a("CcnG"),t=a("t/Na"),i=function(){function n(n){this.http=n,this.url=l.a}return n.prototype.addMedication=function(n){return this.http.post(this.url+"/prescription/add-medication.php",n)},n.prototype.addPrescription=function(n){return this.http.post(this.url+"/prescription/add-prescription.php",n)},n.prototype.getPrescriptions=function(n){return this.http.get(this.url+"/prescription/get-prescriptions.php?UserId="+n)},n.ngInjectableDef=o.defineInjectable({factory:function(){return new n(o.inject(t.c))},token:n,providedIn:"root"}),n}()},o0su:function(n,e,a){"use strict";var l=a("IRyT"),o=(a("XYIR"),a("XzHB"),a("CFL1")),t=a("cL2O");a.d(e,!1,function(){return l.a}),a.d(e,!1,function(){}),a.d(e,!1,function(){}),a.d(e,!1,function(){return o.a}),a.d(e,!1,function(){return t.a})}}]);