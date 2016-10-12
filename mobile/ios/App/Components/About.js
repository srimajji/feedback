import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet
} from 'react-native';

class About extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.header}>
					About
				</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
	},
	header: {
		marginTop: 10,
		fontSize: 25,
		textAlign: 'center',
	}
})

export default About;