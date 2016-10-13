/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import {
	AppRegistry,
	StyleSheet,
	NavigatorIOS
} from 'react-native';
import {
	Tabs,
	Tab,
	Icon
} from 'react-native-elements'
import Main from './ios/App/Containers/Main';

class mobile extends Component {

	render() {
		return (
			<NavigatorIOS
				style={styles.container}
				barTintColor='#ffffcc'
				initialRoute={{
					title: 'Github Notetaker',
					component: Main
				}}
			/>
		);
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 20
	}
});

AppRegistry.registerComponent('mobile', () => mobile);
