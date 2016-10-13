import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View
} from 'react-native';
import {
	Tabs,
	Tab,
	Icon
} from 'react-native-elements'
import Home from '../Components/Home';
import About from '../Components/About';
import AddFeedbackForm from './AddFeedbackForm';

class Main extends Component {
	constructor() {
		super();
		this.state = {
			selectedTab: 'home'
		};

		this.changeTab = this.changeTab.bind(this);
	}

	changeTab(selectedTab) {
		this.setState({ selectedTab: selectedTab });
		this.props.navigator.push({
                        title: 'Home',
                        component: Home,
                        passProps: {  }
		});
	}

	render() {
		const selectedTab = this.state.selectedTab;

		return (
				<Tabs sceneStyle={styles.container}>
					<Tab
						tabStyle={selectedTab !== 'list-feedback' &&  styles.tabSelectedstyle }
						titleStyle={[styles.titleStyle]}
						selectedTitleStyle={[styles.titleSelected]}
						selected={selectedTab === 'list-feedback'}
						title={'My Feedbacks'}
						renderIcon={() => <Icon name='list' size={26} />}
						renderSelectedIcon={() => <Icon name='list' size={26} />}
						onPress={() => this.changeTab('list-feedback') }
					>
					{<View></View>}
					</Tab>
					<Tab
						tabStyle={selectedTab !== 'add-feedback' &&  styles.tabSelectedstyle }
						titleStyle={[styles.titleStyle]}
						selectedTitleStyle={[styles.titleSelected]}
						selected={selectedTab === 'add-feedback'}
						title={'Add Feedback'}
						renderIcon={() => <Icon name='note-add' size={26} />}
						renderSelectedIcon={() => <Icon name='note-add' size={26} />}
						onPress={() => this.changeTab('add-feedback') }>
						<AddFeedbackForm />
					</Tab>
					<Tab
						tabStyle={selectedTab !== 'activity' && styles.tabSelectedstyle}
						titleStyle={[styles.titleStyle]}
						selectedTitleStyle={[styles.titleSelected]}
						selected={selectedTab === 'activity'}
						title={'Activity'}
						renderIcon={() => <Icon name='polymer' size={26} />}
						renderSelectedIcon={() => <Icon name='polymer' size={26} />}
						onPress={() => this.changeTab('activity') }>
						<About />
					</Tab>
				</Tabs>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 20
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		marginTop: 40,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
	tabSelectedstyle: {
		backgroundColor: 'white',
	},
	titleStyle: {
		backgroundColor: 'white',
	},
	titleSelected: {
		backgroundColor: 'transparent',
	}
});

export default Main;