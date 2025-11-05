import { useGlobalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Product from "../models/product";
import productsApi from "../services/api";

export default function Detail() {
  const [product, setProduct] = useState<Product>()
  
  const { id } = useGlobalSearchParams(); 
  useEffect(() => {
    const get = async () => {
      let product = await productsApi.getOne(Number.parseInt(id.toString()  ))
      setProduct(product)
    }

    get();
  }, [])

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        padding: 20
      }}
    >
      <View style={styles.container}>
        {
            <View key={product?.id} style={styles.row}>
              <View style={styles.cell}>
                <Text>{product?.id}</Text>
              </View>
              <View style={styles.cell}>
                <Text>{product?.name}</Text>
              </View>
              <View style={styles.cell}>
                <Text>{product?.price}</Text>
              </View>
            </View>
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    minHeight: '15%'
  },
  row: {
    flex: 1,
    alignSelf: 'stretch',
    flexDirection: 'row'
  },
  cell: {
    flex: 1,
    alignSelf: 'stretch',
    borderWidth: 1,
    borderColor: '#e1e1e1',
    padding: 10
  }
})
