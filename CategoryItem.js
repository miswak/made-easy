import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,Image,
    TouchableOpacity
} from "react-native";
import Proptypes from 'prop-types'
import images from '../networking/util'


class CategoryItem extends Component {
    static proptypes = {
        box:Proptypes.array.isRequired,
        onPress:Proptypes.func.isRequired,
    };
    handlePress = () => {
       this.props.onPress(this.props.box.catId)
    };
    render() {
        const {box} = this.props;

        var strImageURL = "";
        switch(box.catId) {
            case '59085af44bc6b0d3074933b6':
                strImageURL = images.Accommodation;
                break;
            case '59085aff4bc6b0d3074933b7':
                strImageURL = images.Activities;
                break;
            case '59085b074bc6b0d3074933b8':
                strImageURL = images.Attractions;
                break;
            case '59085b114bc6b0d3074933b9':
                strImageURL = images.Nightlife;
                break;
            case '59085b1b4bc6b0d3074933ba':
                strImageURL = images.Restaurants;
                break;
            case '59085b244bc6b0d3074933bb':
                strImageURL = images.Shops;
                break;
            case '59085b2f4bc6b0d3074933bc':
                strImageURL = images.Transport;
                break;

        }
        return   <View style ={styles.deal}>
                <TouchableOpacity style={styles.info} onPress = {this.handlePress}>
                    <Image style ={styles.image} source={strImageURL}/> 
                        <Text style ={styles.title}>{box.name}</Text>          
                </TouchableOpacity>  
                    </View>
/*
                
        
        if(box.catId=='59085b114bc6b0d3074933b9'){
            return   <TouchableOpacity style={styles.info} onPress = {this.handlePress}>
                        <Image style ={styles.image} source={images.Nightlife}/> 
                            <Text style ={styles.title}>{box.name}</Text>          
                    </TouchableOpacity>  
                    }
        if(box.catId=='59085b1b4bc6b0d3074933ba'){
            return   <TouchableOpacity style={styles.info} onPress = {this.handlePress}>
                        <Image style ={styles.image} source={images.Restaurants}/> 
                            <Text style ={styles.title}>{box.name}</Text>          
                    </TouchableOpacity>  
                    }
        if(box.catId=='59085b244bc6b0d3074933bb'){
            return   <TouchableOpacity style={styles.info} onPress = {this.handlePress}>
                        <Image style ={styles.image} source={images.Shops}/> 
                            <Text style ={styles.title}>{box.name}</Text>          
                    </TouchableOpacity>  
                    }
        if(box.catId=='59085b2f4bc6b0d3074933bc'){
            return   <TouchableOpacity style={styles.info} onPress = {this.handlePress}>
                        <Image style ={styles.image} source={images.Transport}/> 
                            <Text style ={styles.title}>{box.name}</Text>          
                    </TouchableOpacity>  
                    }
            return (
            <TouchableOpacity style={styles.area} onPress = {this.handlePress}>
         
        </TouchableOpacity>   */     
    }
}
export default CategoryItem;

const styles = StyleSheet.create({
    deal: {
        marginHorizontal:12,
        marginTop:12,
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
        marginTop:5,
        padding:10,
        backgroundColor:'#fff',
        borderColor:'#bbb',
        borderWidth:1,
        borderTopWidth:1,
        width:350
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
