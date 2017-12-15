import React, { Component } from "react";
import PropTypes from "prop-types";
import { TouchableOpacity, View } from "react-native";

import { connectStyle } from "native-base-shoutem-theme";
import mapPropsToStyleNames from "../Utils/mapPropsToStyleNames";

class CardItem extends Component {
	render() {
		if (this.props.button) {
			return (
				<TouchableOpacity
					ref={c => (this._root = c)}
					{...this.props}
					activeOpacity={this.props.activeOpacity ? this.props.activeOpacity : 0.2}
				>
					{this.props.children}
				</TouchableOpacity>
			);
		} else {
			return (
				<View ref={c => (this._root = c)} {...this.props}>
					{this.props.children}
				</View>
			);
		}
	}
}

CardItem.propTypes = {
	...TouchableOpacity.propTypes,
	style: PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.array]),
	header: PropTypes.bool,
	cardBody: PropTypes.bool,
	footer: PropTypes.bool,
	button: PropTypes.bool,
	activeOpacity:PropTypes.number
};

const StyledCardItem = connectStyle("NativeBase.CardItem", {}, mapPropsToStyleNames)(CardItem);

export { StyledCardItem as CardItem };
