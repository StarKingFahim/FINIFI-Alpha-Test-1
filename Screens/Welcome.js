import * as React from 'react';
import {
  Text,
  View,
  ScrollView,
  KeyboardAvoidingView,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,

} from 'react-native';
import firebase from 'firebase';

export default class WelcomeScreen extends React.Component{
    constructor(props){
        super(props);
        this.state={
          userId          : firebase.auth().currentUser.email,
          userName          :'',
          receiverId      : this.props.navigation.getParam('details')["username"],
          exchangeId       : this.props.navigation.getParam('details')["exchangeId"],
          itemName        : this.props.navigation.getParam('details')["item_name"],
          description  : this.props.navigation.getParam('details')["description"],
          receiverName    : '',
          receiverContact : '',
          receiverAddress : '',
          receiverRequestDocId : ''
        }
      }

      getUserDetails=(userId)=>{
        db.collection("users").where('email_id','==', userId).get()
        .then((snapshot)=>{
          snapshot.forEach((doc) => {
            console.log(doc.data().first_name);
            this.setState({
              userName  :doc.data().first_name + " " + doc.data().last_name
            })
          })
        })
      }
  
  
  getreceiverDetails(){
    console.log("receiver ",this.state.receiverId);
    db.collection('users').where('username','==',this.state.receiverId).get()
    .then(snapshot=>{
      snapshot.forEach(doc=>{
        this.setState({
          receiverName    : doc.data().first_name,
          receiverContact : doc.data().mobile_number,
          receiverAddress : doc.data().address,
        })
      })
    });
  }
  componentDidMount(){
    this.getreceiverDetails()
    this.getUserDetails(this.state.userId)
   }

}