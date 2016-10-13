import React, { Component } from 'react';
import {
	Stylesheet,
	Text,
	View,
	TouchableHighlight,
	Modal
} from 'react-native';
import { FormLabel, FormInput } from 'react-native-elements'

class AddFeedbackForm extends Component {
	constructor(props) {
    super(props);
    this.state = {modalVisible: true};
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <View style={{marginTop: 22}}>
        <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {alert("Modal has been closed.")}}
          >
         <View style={{marginTop: 22}}>
          <View>
            <Text>Hello World!</Text>
            <TouchableHighlight onPress={() => {
              this.setModalVisible(!this.state.modalVisible)
            }}>
              <Text>Hide Modal</Text>
            </TouchableHighlight>
          </View>
         </View>
        </Modal>
      </View>
    );
  }
}

export default AddFeedbackForm;