// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/NetworkTrace/setting/summarySettingSelector.html":'\x3cdiv class\x3d"summarySelector"\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"showSummarySettingsButton" class\x3d"jimu-icon jimu-icon-add esriCTHover"\r\n        title\x3d"${nls.summaryTab.addSummaryItemsTitle}"\x3e\r\n    \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dijit/_WidgetsInTemplateMixin dijit/_WidgetBase dijit/_TemplatedMixin dojo/text!./summarySettingSelector.html dijit/TooltipDialog dijit/popup dojo/_base/lang dojo/_base/html dojo/on dojo/dom-construct dijit/form/Select".split(" "),function(p,q,r,t,u,v,m,g,w,l,c,n){return p([r,t,q],{baseClass:"jimu-widget-NetworkTrace-setting",templateString:u,_isTooltipDialogOpened:!1,startup:function(){this.inherited(arguments)},postCreate:function(){this._createTooltipDialog(this.domNode);
this._hideTooltipDialog()},destroy:function(){this.tooltipDialog&&(m.close(this.tooltipDialog),this.tooltipDialog.destroy());this.inherited(arguments)},_showTooltipDialog:function(){m.open({parent:this.getParent(),popup:this.tooltipDialog,around:this.domNode});this._isTooltipDialogOpened=!0},_hideTooltipDialog:function(){m.close(this.tooltipDialog);this._isTooltipDialogOpened=!1},_createTooltipDialog:function(){var b=this._createSummarySettingOptions();this.tooltipDialog=new v({content:b,baseClass:"jimu-widget-NetworkTrace-setting"});
this.own(l(this.domNode,"click",g.hitch(this,function(a){a.stopPropagation();a.preventDefault();this._isTooltipDialogOpened?this._hideTooltipDialog():this._showTooltipDialog()})))},_createSummarySettingOptions:function(){var b;b=c.create("div",{"class":"esriCTSummarySettingSelector"});c.create("div",{innerHTML:this.nls.summaryTab.addSummaryItemsTitle,"class":"esriCTOutputHeaderLabel"},b);for(var a=[],d=0;d<this.inputOutputParamArray.length;d++)a.push({label:this.inputOutputParamArray[d].name,value:this.inputOutputParamArray[d].name,
defaultValue:this.inputOutputParamArray[d].defaultValue,selected:0===d?!0:!1});var d=c.create("table",{"class":"esriCTPopupTable"},b),f=c.create("tr",{},d);c.create("td",{innerHTML:this.nls.summaryTab.inputOutput},f);f=c.create("td",{},f);f=c.create("div",{"class":"esriCTDropDownContainer"},f);this.outputSelect=new n({options:a,"class":"esriCTSummaryExpressionSelect"});this.outputSelect.placeAt(f);a=c.create("tr",{},d);c.create("td",{innerHTML:this.nls.summaryTab.operator},a);a=c.create("td",{},a);
a=c.create("div",{"class":"esriCTDropDownContainer"},a);this.operatorSelect=new n({options:[],"class":"esriCTSummaryExpressionSelect"});this.operatorSelect.placeAt(a);this.own(l(this.operatorSelect,"change",g.hitch(this,function(){this.operatorSelect.get("value")===this.nls.summaryTab.outputOperatorCountOption?this.fieldSelect.set("disabled",!0):this.fieldSelect.set("disabled",!1)})));a=c.create("tr",{},d);c.create("td",{innerHTML:this.nls.summaryTab.field},a);a=c.create("td",{},a);a=c.create("div",
{"class":"esriCTDropDownContainer"},a);this.fieldSelect=new n({options:[],"class":"esriCTSummaryExpressionSelect"});this.fieldSelect.placeAt(a);d=c.create("tr",{},d);d=c.create("td",{colspan:"2"},d);a=c.create("div",{"class":"esriCTButtonContainer"},d);d=c.create("div",{"class":"jimu-btn jimu-float-leading esriCTAddButtonMargin",innerHTML:this.nls.summaryTab.expressionAddButtonText},a);a=c.create("div",{"class":"jimu-btn jimu-float-trailing",innerHTML:this.nls.common.cancel},a);this.own(l(a,"click",
g.hitch(this,this._hideTooltipDialog)));this.own(l(document.body,"click",g.hitch(this,function(a){this.isPartOfPopup(a.target||a.srcElement,b)||this._hideTooltipDialog()})));this.own(l(d,"click",g.hitch(this,this._addExpression)));this.outputSelect.startup();this.own(this.outputSelect.on("change",g.hitch(this,this._onOutputDropDownChange)));this._onOutputDropDownChange(this.outputSelect.getValue());return b},_onOutputDropDownChange:function(b){for(var a=this.fieldSelect,d=this.operatorSelect,f=this.inputOutputParamArray,
e=[],e=0;e<f.length;e++)if(f[e].name===b){var h;b=[];f[e].defaultValue&&f[e].defaultValue.fields&&(h=f[e].defaultValue.fields);if(h&&0<h.length)for(var k=0;k<h.length;k++)if("esriFieldTypeDouble"===h[k].type||"esriFieldTypeSmallInteger"===h[k].type||"esriFieldTypeInteger"===h[k].type){var g=c.create("option",{});g.innerHTML=h[k].name;g.value=h[k].name;g.title=h[k].name;b.push(g)}0<b.length?e="Input"===f[e].type?this._getOperatorOptions(!0,!1,!1,!1):this._getOperatorOptions(!1,!1,!0,!1):(b=[{label:"",
value:"",selected:!0}],e=this._getOperatorOptions(!0,!1,!1,!1));a.set("options",b);a.set("disabled",!0);d.set("options",e);a.startup();d.startup();break}},_addExpression:function(){this._editorObj.focus();var b="";""!==this.outputSelect.get("value")&&(b=""!==b?b+":"+this.outputSelect.get("value"):this.outputSelect.get("value"));""===this.fieldSelect.get("value")||this.fieldSelect.get("disabled")||(b=""!==b?b+":"+this.fieldSelect.get("value"):this.fieldSelect.get("value"));""!==this.operatorSelect.get("value")&&
(b=""!==b?b+":"+this.operatorSelect.get("value"):this.operatorSelect.get("value"));this._editorObj.execCommand("inserthtml","{"+b+"}")},_getOperatorOptions:function(b,a,d,c){var e=[];b?e.push({label:this.nls.summaryTab.inputOperatorCountOption,value:this.nls.summaryTab.inputOperatorCountOption,selected:!0}):a?(e.push({label:this.nls.summaryTab.outputOperatorCountOption,value:this.nls.summaryTab.outputOperatorCountOption,selected:!0}),c&&e.push({label:this.nls.summaryTab.outputOperatorSkipCountOption,
value:this.nls.summaryTab.outputOperatorSkipCountOption,selected:!1})):d&&(e.push({label:this.nls.summaryTab.outputOperatorCountOption,value:this.nls.summaryTab.outputOperatorCountOption,selected:!0}),e.push({label:this.nls.summaryTab.fieldOperatorSumOption,value:this.nls.summaryTab.fieldOperatorSumOption,selected:!0}),e.push({label:this.nls.summaryTab.fieldOperatorMinOption,value:this.nls.summaryTab.fieldOperatorMinOption,selected:!1}),e.push({label:this.nls.summaryTab.fieldOperatorMaxOption,value:this.nls.summaryTab.fieldOperatorMaxOption,
selected:!1}),e.push({label:this.nls.summaryTab.fieldOperatorMeanOption,value:this.nls.summaryTab.fieldOperatorMeanOption,selected:!1}));return e},isPartOfPopup:function(b,a){return b===a||w.isDescendant(b,a)}})});