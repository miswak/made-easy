import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,FlatList
} from "react-native";

import CategoryItem from './CategoryItem'

import PropTypes from 'prop-types'

class CategoryList extends Component {
    static propTypes = {
        category: PropTypes.array.isRequired,
        onItemPress:PropTypes.func.isRequired,
    }

    render() {
        return (
            <View style={styles.container}>              
              <FlatList
                keyExtractor={(item,index) => index.toString()}
                data={this.props.category}
                renderItem={({item}) =>  <CategoryItem box ={item} onPress={this.props.onItemPress}/> }
                 />
            </View>
        );
    }
}
export default CategoryList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
/* 
                <FlatList
                data={this.props.category}
                renderItem={({item}) =>  <Text>{item.name}</Text>}
                 />
            */