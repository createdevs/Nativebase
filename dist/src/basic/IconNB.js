Object.defineProperty(exports,"__esModule",{value:true});exports.IconNB=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName="src/basic/IconNB.js";var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require("react");var _react2=_interopRequireDefault(_react);
var _propTypes=require("prop-types");var _propTypes2=_interopRequireDefault(_propTypes);

var _nativeBaseShoutemTheme=require("native-base-shoutem-theme");

var _Ionicons=require("react-native-vector-icons/Ionicons");var _Ionicons2=_interopRequireDefault(_Ionicons);
var _Entypo=require("react-native-vector-icons/Entypo");var _Entypo2=_interopRequireDefault(_Entypo);
var _Feather=require("react-native-vector-icons/Feather");var _Feather2=_interopRequireDefault(_Feather);
var _FontAwesome=require("react-native-vector-icons/FontAwesome");var _FontAwesome2=_interopRequireDefault(_FontAwesome);
var _Foundation=require("react-native-vector-icons/Foundation");var _Foundation2=_interopRequireDefault(_Foundation);
var _MaterialIcons=require("react-native-vector-icons/MaterialIcons");var _MaterialIcons2=_interopRequireDefault(_MaterialIcons);
var _MaterialCommunityIcons=require("react-native-vector-icons/MaterialCommunityIcons");var _MaterialCommunityIcons2=_interopRequireDefault(_MaterialCommunityIcons);
var _Octicons=require("react-native-vector-icons/Octicons");var _Octicons2=_interopRequireDefault(_Octicons);
var _Zocial=require("react-native-vector-icons/Zocial");var _Zocial2=_interopRequireDefault(_Zocial);
var _SimpleLineIcons=require("react-native-vector-icons/SimpleLineIcons");var _SimpleLineIcons2=_interopRequireDefault(_SimpleLineIcons);
var _EvilIcons=require("react-native-vector-icons/EvilIcons");var _EvilIcons2=_interopRequireDefault(_EvilIcons);

var _mapPropsToStyleNames=require("../Utils/mapPropsToStyleNames");var _mapPropsToStyleNames2=_interopRequireDefault(_mapPropsToStyleNames);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

IconNB=function(_Component){_inherits(IconNB,_Component);function IconNB(){_classCallCheck(this,IconNB);return _possibleConstructorReturn(this,(IconNB.__proto__||Object.getPrototypeOf(IconNB)).apply(this,arguments));}_createClass(IconNB,[{key:"setIcon",value:function setIcon(




iconType){
if(iconType==undefined&&this.context.theme){
iconType=this.context.theme["@@shoutem.theme/themeStyle"].variables.
iconFamily;
}
switch(iconType){
case"Entypo":
this.Icon=_Entypo2.default;
break;
case"EvilIcons":
this.Icon=_EvilIcons2.default;
break;
case"Feather":
this.Icon=_Feather2.default;
break;
case"FontAwesome":
this.Icon=_FontAwesome2.default;
break;
case"Foundation":
this.Icon=_Foundation2.default;
break;
case"Ionicons":
this.Icon=_Ionicons2.default;
break;
case"MaterialCommunityIcons":
this.Icon=_MaterialCommunityIcons2.default;
break;
case"MaterialIcons":
this.Icon=_MaterialIcons2.default;
break;
case"Octicons":
this.Icon=_Octicons2.default;
break;
case"SimpleLineIcons":
this.Icon=_SimpleLineIcons2.default;
break;
case"Zocial":
this.Icon=_Zocial2.default;
break;
default:
this.Icon=_Ionicons2.default;}

}},{key:"componentWillMount",value:function componentWillMount()

{
this.setIcon(this.props.type);
}},{key:"componentWillUpdate",value:function componentWillUpdate(

nextProps,nextState){
if(nextProps.type&&this.props.type!=nextProps.type){
this.setIcon(nextProps.type);
}
}},{key:"render",value:function render()

{var _this2=this;
return _react2.default.createElement(this.Icon,_extends({ref:function ref(c){return _this2._root=c;}},this.props,{__source:{fileName:_jsxFileName,lineNumber:80}}));
}}]);return IconNB;}(_react.Component);IconNB.contextTypes={theme:_propTypes2.default.object};


IconNB.propTypes={
style:_propTypes2.default.oneOfType([
_propTypes2.default.object,
_propTypes2.default.number,
_propTypes2.default.array]),

type:_propTypes2.default.oneOf([
"Entypo",
"EvilIcons",
"Feather",
"FontAwesome",
"Foundation",
"Ionicons",
"MaterialCommunityIcons",
"MaterialIcons",
"Octicons",
"SimpleLineIcons",
"Zocial"])};



var StyledIconNB=(0,_nativeBaseShoutemTheme.connectStyle)(
"NativeBase.IconNB",
{},_mapPropsToStyleNames2.default)(

IconNB);exports.

IconNB=StyledIconNB;
//# sourceMappingURL=IconNB.js.map