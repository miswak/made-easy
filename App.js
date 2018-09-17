import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ajax from './networking/Authentication'
import CategoryList from './components/CategoryList'
import CategoryDetail from './components/CategoryDetail';




export default class App extends React.Component {
  state = {
    category:[],
    currentCategoryId:null,
    };
async componentDidMount() {
    const category = await ajax.getCategories();
     this.setState({ category: category.cats });
  }
  setCurrentCategory = (catId) => {
    this.setState({currentCategoryId:catId})
  }
  currentCategory = () => {
    return this.state.category.find(
      (detail) => detail.catId ===this.state.currentCategoryId
      )
  };

  render() {
    if(this.state.currentCategoryId) {
      return <CategoryDetail detail={this.currentCategory()} />
    }
    if(this.state.category.length > 0 ) {
      return <CategoryList category={this.state.category} onItemPress={this.setCurrentCategory}/>
    }
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Test</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize:40,
  },
  main:{
    marginTop:40,
  }
});

