import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import Product from "./models/product";
import productsApi from "./services/api";

export default function Index() {
  const [products, setProducts] = useState<Product[]>()

  useEffect(() => {
    const getAll = async () => {
      let products = await productsApi.getAll()
      setProducts(products)
    }

    getAll();
  }, [])
  
const router = useRouter();
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
      }}
    >
      <View style={styles.container}>
        <Text style={{fontSize: 30}}>Produtos</Text>
        <View style={styles.tableHead}>
              <View style={styles.tableHeadCell}>
                <Text style={styles.tableHeadCellContent}>#</Text>
              </View>
              <View style={styles.tableHeadCell}>
                <Text style={styles.tableHeadCellContent}>Nome</Text>
              </View>
              <View style={styles.tableHeadCell}>
                <Text style={styles.tableHeadCellContent}>Preço</Text>
              </View>
              <View style={styles.tableHeadCell}>
              </View>
            </View>
        {
          products?.map(({ id, name, price }) => (
            <View key={id} style={styles.row}>
              <View style={styles.cell}>
                <Text>{id}</Text>
              </View>
              <View style={styles.cell}>
                <Text>{name}</Text>
              </View>
              <View style={styles.cell}>
                <Text>{price}</Text>
              </View>
              <View style={styles.detailCell}>
              <Button title="📝" onPress={() => router.navigate({pathname: `/products/[id]`, params: { id }}) }/>
              </View>
            </View>
          )
          )
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    minHeight: '50%',
    padding: 20
  },
  row: {
    flex: 1,
    alignSelf: 'stretch',
    flexDirection: 'row'
  },
  tableHead: {
    flex: 1,
    alignSelf: 'stretch',
    flexDirection: 'row',
    backgroundColor: '#000',
    color: '#FFF',
  },
  tableHeadCell: {
   flex: 1,
    alignSelf: 'stretch',
    borderWidth: 1,
    borderColor: '#e1e1e1',
    padding: 10,
  },
  cell: {
    flex: 1,
    alignSelf: 'stretch',
    borderWidth: 1,
    borderColor: '#e1e1e1',
    padding: 10
  },
  detailCell: {
    flex: 1,
    alignSelf: 'stretch',
    borderWidth: 1,
    borderColor: '#e1e1e1',
    padding: 5
  },
  tableHeadCellContent: {
    color: '#FFF'
  }
})
