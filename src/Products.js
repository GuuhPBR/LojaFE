import React, {useState} from 'react';

import type {Node} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity
} from 'react-native';

const Products = ({navigation}) => {
    const [products, setProducts] = useState([]);

    const getProductsFromApi = () => {
      return fetch('https://fbad-2804-431-c7d8-120c-e0dd-539a-2df9-922e.sa.ngrok.io/api/products')
        .then((response) => response.json())
        .then((json) => {
          setProducts(json);
          return json;
        })
        .catch((error) => {
          console.error(error);
        });
    };

    const deleteProduct = (productId) => {
      fetch(`https://fbad-2804-431-c7d8-120c-e0dd-539a-2df9-922e.sa.ngrok.io/api/products/${productId}`, {
        method: 'DELETE',
      });
    }

    function renderProducts(){
        getProductsFromApi();
        const productsList = products || [];
        return (
          <View>
            {productsList.map((product) => {
              return (
                <View key={product.id} style={styles.productContainer}>
                  <TouchableOpacity onPress={() => {console.log('press product')}}>
                    <View style={styles.view1}>                     
                      <Text style={styles.textInicial}>{product.name}</Text>
                      <Text style={styles.textInicial}> R$ {product.value} </Text>  
                    </View>
                    <View>
                        <Text style={styles.textSub}>
                            {product.description}
                        </Text>
                    </View>
                    <Text style={styles.textSub}>
                      {product.color}
                    </Text>
                  </TouchableOpacity>
                  <View>
                  <Button
                    onPress={() => {
                      deleteProduct(product.id)
                    }}
                    title="Deletar produto"
                    color="#790909"
                  />
                  </View>
                </View>
              )
            })}
          </View>
        )
      }

    return (
        <View style={styles.view3}>
            <View style={styles.view}>
                <Button
                    onPress={() =>
                        navigation.navigate('Novo Produto')
                      }
                    title="Novo Produto"
                    color="#841584"
                />
                {renderProducts()}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    textInicial: {
     fontSize: 25,
     fontWeight: 'bold',
     fontFamily: 'Arial',
     padding: 20,
    },
    productContainer: {
        borderRadius: 5,
        borderWidth: 2,
        marginTop: 5 
    },
    textSub: {
      fontSize: 20,
      paddingHorizontal:40
    },
    view: {
      backgroundColor: 'white',
      height: 1000,
      borderRadius: 15,
      flex: 1,
      width: '100%',
    },
    view3: {
      backgroundColor: '#BCBCBC',
      height: 1020,
      padding: 20
    },
    view1: {
     marginLeft: 10,
     flexDirection: 'row',
    },
    button: {
      alignItems: "center",
      backgroundColor: "#41d846",
      padding: 10,
      marginRight: 20,
      marginLeft: 20,
      marginTop: 70,
       borderRadius: 20
    },
    buttonText: {
      fontSize: 20,
      fontFamily: 'Italianno',
    },
    titleText: {
      fontSize: 25,
      fontFamily: 'Italianno',
      paddingLeft: 25,
      paddingTop: 20,
    },
  });

export default Products;