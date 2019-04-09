/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Search.js                                          :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: ldevelle <ldevelle@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/04/09 13:29:20 by ldevelle          #+#    #+#             */
/*   Updated: 2019/04/09 17:28:13 by ldevelle         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

// Components/Search.js

import React from 'react'
import { StyleSheet, View, TextInput, Button } from 'react-native'

class Search extends React.Component {
  render() {
    return (
// Ici on rend à l'écran les éléments graphiques de notre component custom Search
	<View style={styles.main_container}>
		<View style={styles.search_bar}>
			<TextInput style={styles.textinput} placeholder='Titre du film'/>
			<View style={styles.button_container}>
				<View style={styles.space}/>
				<Button style={styles.buttoninput} title='Rechercher' onPress={() => {}}/>
				<View style={styles.space}/>
			</View>
		</View>
		<View style={styles.main_window}>
			<View style={stylesdb.red}></View>
			<View style={stylesdb.green}></View>
			<View style={stylesdb.blue}></View>
		</View>
	</View>
    )
  }
}

const styles = StyleSheet.create({
	top_bar: {
		flex: 1,
		backgroundColor: 'black'
	},
	main_container: {
		flex: 1,
		marginTop: 24
	},
	search_bar: {
		flex: 1,
		backgroundColor: '#ffffff'
	},
	main_window: {
		flex: 6,
		flexDirection: 'row',
		backgroundColor: '#ffffff'
	},
	viewinput: {
		flex: 1,
		marginTop: 30,
		backgroundColor: '#777777'
	},
	button_container: {
		flex: 5,
		flexDirection: 'row',
		// backgroundColor: '#777777'
	},
	space: {
		flex: 1,
		// marginTop: 30,
		backgroundColor: 'yellow',
		backgroundColor: 'white'
	},
	textinput: {
		flex: 10,
		marginHorizontal: 10,
		// marginLeft: 5,
		// marginRight: 5,
		// borderColor: '#777777',
		// borderWidth: 1,
		// paddingLeft: 5
		// backgroundColor: '#aaaaaa',
		paddingHorizontal: 5
	},
	buttoninput: {
		flex: 0,
		width: 200,
		// left: 100,
		// marginHorizontal: 500,
		// borderColor: '#777777',
		// borderWidth: 1,
		paddingHorizontal: 5
	}
})

const stylesdb = StyleSheet.create({
	yellow: {
		flex: 1,
		backgroundColor: '#000000',
	},
	red: {
		flex: 1,
		backgroundColor: '#ff0000',
	},
	green: {
		flex: 2,
		backgroundColor: '#00ff00',
	},
	blue: {
		flex: 3,
		backgroundColor: '#0000ff',
	}
})

export default Search
