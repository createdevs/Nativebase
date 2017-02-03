Object.defineProperty(exports,"__esModule",{value:true});exports.Tabs=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');
var _reactNativeScrollableTabView=require('react-native-scrollable-tab-view');var _reactNativeScrollableTabView2=_interopRequireDefault(_reactNativeScrollableTabView);

var _variables=require('../theme/variables');var _variables2=_interopRequireDefault(_variables);
var _theme=require('@shoutem/theme');
var _mapPropsToStyleNames=require('../Utils/mapPropsToStyleNames');var _mapPropsToStyleNames2=_interopRequireDefault(_mapPropsToStyleNames);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

Tabs=function(_Component){_inherits(Tabs,_Component);function Tabs(){_classCallCheck(this,Tabs);return _possibleConstructorReturn(this,(Tabs.__proto__||Object.getPrototypeOf(Tabs)).apply(this,arguments));}_createClass(Tabs,[{key:'render',value:function render()
{var _this2=this;
return(
_react2.default.createElement(_reactNativeScrollableTabView2.default,_extends({
ref:function ref(c){return _this2._root=c;}},this.props,{
tabBarBackgroundColor:_reactNative.Platform.OS==='ios'?undefined:_variables2.default.toolbarDefaultBg,
tabBarInactiveTextColor:_variables2.default.tabBarActiveTextColor,
tabBarActiveTextColor:_variables2.default.tabBarActiveTextColor,
tabBarUnderlineStyle:{backgroundColor:_variables2.default.tabBarActiveTextColor}}),

this.props.children));


}}]);return Tabs;}(_react.Component);


Tabs.propTypes=_extends({},
_reactNativeScrollableTabView2.default.propTypes,{
style:_react2.default.PropTypes.object});


var StyledTabs=(0,_theme.connectStyle)('NativeBase.Tabs',{},_mapPropsToStyleNames2.default)(Tabs);exports.


Tabs=StyledTabs;
//# sourceMappingURL=Tabs.js.map