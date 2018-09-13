import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,Image,

} from "react-native";
import Proptypes from 'prop-types'
import ajax from '../networking/Authentication'

class DealDetail extends Component {
    static proptypes = {
        caterino:Proptypes.array.isRequired,
    };
    state = {
        helloworld:this.props.caterino
    };
    async componentDidMount() {
        const fullCategory = await ajax.fetchCategoryDetail(this.state.helloworld.catId)
        console.log(fullCategory)
        this.setState({helloworld : fullCategory });
        
    }
    render() {
        const {helloworld} = this.state;
        return (
            <View style={styles.deal}>
            <View style ={styles.info}>
                <Text style ={styles.title}>{helloworld.name}</Text>
                </View>
            {
                helloworld.name &&
                <View>
                    <Text>
                        {helloworld.name.name}
                    </Text>
                </View>
            }
               
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
        borderTopWidth:0
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
