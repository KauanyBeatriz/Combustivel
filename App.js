import React,{useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
	const [valor1, setValor1] = useState("");
	const [valor2, setValor2] = useState("");
	const[ resultado, setResultado]= useState();	
	
	function dividir(){
		let alcool = parseFloat(valor1);
		let gasolina = parseFloat(valor2);
		let r = alcool / gasolina;
		if(r<=0.7){
			setResultado(<Text>Abasteça com alcool</Text>);
		}else{
		setResultado(<Text>Abasteça com gasolina</Text>);
		}
	}

  return (
    <View style={styles.container}>
      <Text style={styles.tituloinicial}>Álcool vs Gasolina</Text>
		  <View style={styles.bloco}>
			  <Text style={styles.titulo}>Qual é a melhor opção?</Text>
		  </View>
		  
		  <View style={styles.bloco}>
			  <Text>VALOR DO ÁLCOOL: </Text>
			  <TextInput 
			  style={styles.input}
			  value={valor1}
			  onChangeText={(valor) => setValor1(valor)}
			  keyboardType="numeric"
			  />
		  </View>
		  
		  <View style={styles.bloco}>
			  <Text>VALOR DA GASOLINA: </Text>
			  <TextInput 
			    style={styles.input}
			    value={valor2}
			    onChangeText={(valor) => setValor2(valor)}
			    keyboardType="numeric"
			  />
		  </View>
		  
		  <View style={styles.bloco2}>
			    <TouchableOpacity 
				style={styles.botao}
				onPress={dividir}
				>
		    		<Text style={styles.textoBotao}>DIVIDIR</Text>
			    </TouchableOpacity>
		  </View>
		  
		  <View style={styles.bloco}>
				<Text style={styles.titulo}>
					Resultado: {resultado}
				</Text>
		  </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
	marginTop:'20%'
	 
  },
  	
	bloco:{
		marginTop: 20,
		width:'80%',
		marginLeft:'10%'
		
	},
	bloco2:{
		marginTop: 18,
		width:'80%',
		marginLeft:'10%',
		alignItems:'center'
	},
	titulo: {
		fontSize: 30,
		textAlign:'center'
	},
	input:{
		borderWidth:2,
		fontSize:20,
		borderRadius:10,
		textAlign: 'center'
	},
	botao:{
		backgroundColor:'#008000',
		width: '28%',
		borderRadius:5
	},
	textoBotao:{
		color:'#fff',
		fontSize:20,
		textAlign:'center'
	},
	tituloinicial:{
		textAlign: 'center'
	}
});