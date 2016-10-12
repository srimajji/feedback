import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet
} from 'react-native';

class Home extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.header}>
					Home
				</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'grey',
	},
	header: {
		fontSize: 25,
		textAlign: 'center',
	}
})

export default Home;