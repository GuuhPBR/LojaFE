import React, {useState} from 'react';

import {
  StyleSheet,
  View,
  SafeAreaView,
  TextInput,
  Button,
} from 'react-native';

const NewProduct = ({navigation}) => {
    const [product, setProduct,] = useState({});
    const [name, onChangeName] = React.useState("");
    const [description, onChangeDescription] = React.useState("");
    const [value, onChangeValue] = React.useState(0);
    const [color, onChangeColor] = React.useState("");

    function createProduct(){
        var payload = {
            product: {
                name,
                description,
                value,
                color
            }
        }

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        };
        fetch('https://fbad-2804-431-c7d8-120c-e0dd-539a-2df9-922e.sa.ngrok.io/api/products', requestOptions)
            .then(response => {
                console.log(response);
                response.json()
            }).then(data => {
                console.log(data)
                navigation.navigate('Produtos')
            }).catch((error) => {
                console.error(error);
            });
    }

    return (
        <View style={styles.view3}>
            <View style={styles.view}>
                <SafeAreaView>
                    <TextInput
                        style={styles.input}
                        value={name}
                        onChangeText={onChangeName}
                        placeholder="Nome produto"                     
                    />
                    <TextInput
                        style={styles.input}
                        value={description}
                        onChangeText={onChangeDescription}
                        placeholder="Descrição"
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeValue}
                        value={value}
                        placeholder="Valor R$ : "
                        keyboardType="numeric"
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeColor}
                        value={color}
                        placeholder="Cor do produto"
                    />
                </SafeAreaView>
                <Button
                    onPress={createProduct}
                    title="Criar Produto"
                    color="#841584"
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    view3: {
        backgroundColor: '#BCBCBC',
        height: 1020,
        padding: 20
    },
    view: {
        backgroundColor: 'white',
        height: 1000,
        borderRadius: 15,
        flex: 1,
        width: '100%',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
});

export default NewProduct;