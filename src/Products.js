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
        return fetch('http://localhost:3000/api/products.json')
            .then((response) => response.json())
            .then((json) => {
            console.log(json);
            setProducts(json);
            return true;
        })
        .catch((error) => {
            console.error(error);
        });
    };

    function renderProducts(){
        // getProductsFromApi();

        var productsList = [
            {
              "id": 3,
              "name": "calca",
              "description": "teste",
              "value": 1.9,
              "color": "azul",
              "created_at": "2022-11-20T21:06:20.144Z",
              "updated_at": "2022-11-20T21:06:20.144Z"
            },
            {
              "id": 4,
              "name": "camisa",
              "description": "xablau",
              "value": 20,
              "color": "amarelo",
              "created_at": "2022-11-20T21:06:20.144Z",
              "updated_at": "2022-11-20T21:06:20.144Z"
            }
        ]
        return (
          <View>
            {productsList.map((product) => {
              return (
                <View key={product.id}>
                  <TouchableOpacity onPress={() => {console.log('press product')}}>
                    <View style={styles.view1}>
                      <Text style={styles.textImg5}>{product.name}</Text>
                      <Text style={styles.textSub}>
                        {product.description}
                      </Text>
                      <Text> R$ {product.value} </Text>  
                    </View>
                  </TouchableOpacity>
                </View>
              )
            })}
          </View>
        )
      }

    function onPressLearnMore(){
        console.log('adiciona novo')
    }

    return (
        <View style={styles.view3}>
            <Button
            onPress={() => console.log('teste')}
            title="Teste"
            color="#000000"
            />
            <View style={styles.view}>
                <Button
                    onPress={onPressLearnMore}
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
     fontSize: 40,
     fontFamily: 'Italianno',
     padding: 20
    },
    textSub: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    view: {
      backgroundColor: 'white',
      height: 1000,
      borderRadius: 15
    },
    view3: {
      backgroundColor: '#305887',
      height: 1020,
      padding: 20
    },
    view1: {
     marginLeft: 20,
     flexDirection: 'row',
     paddingTop: 30,
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