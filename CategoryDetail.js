import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,Image,FlatList

} from "react-native";
import Proptypes from 'prop-types'
import ajax from '../networking/Authentication'



class DealDetail extends React.Component {
    static proptypes = {
        detail:Proptypes.array.isRequired,
    };
    state = {
        open:this.props.detail,
    };
    async componentDidMount() {
        const fullCategory = await ajax.fetchCategoryDetail(this.state.open.catId)             
        this.setState({open:fullCategory.content})
    
    }
    render() {
        const {open} = this.state;
        console.log(open)
    
        return (
            <View style={styles.deal} onPress={this.handlePress}>
            <View style ={styles.info}>
  
                <View style ={styles.footer}>
                <Text style ={styles.title}>{open.name}</Text>
                </View>
              {
                  open &&
                    <View>
                    <Text>
                    {open.name}
                    </Text>
                </View>
              }
               
            </View>
            <Text></Text>
            </View>
        
        
        );
    }
}
export default DealDetail;

const styles = StyleSheet.create({
    deal: {
        marginHorizontal:12,
        marginTop:42,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width:'100%',
        height:150,
    },
    info: {
        padding:10,
        backgroundColor:'#fff',
        borderColor:'#bbb',
        borderWidth:1,
        borderTopWidth:1
    },
    title: {
        fontSize: 16,
        fontWeight:'bold',
        marginBottom:5,
    },
    footer: {
        flexDirection:'row'
    },
    cause:{
        flex:2,
    },
    price: {
        flex:1,
        textAlign:'right'
    },
});

/*   <Image style ={styles.image}source={{ uri: deal.media[0] }}/> 
 <Image style ={styles.image}
                source={require('../catimages/59085af44bc6b0d3074933b6.jpg')}/> 

 <View style ={styles.info}>
                    <Text style ={styles.name}>{deal.title}</Text>                  
                
                </View>
           
*/
