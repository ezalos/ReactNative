/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   App.js                                             :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: ldevelle <ldevelle@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/04/09 13:30:28 by ldevelle          #+#    #+#             */
/*   Updated: 2019/04/09 16:49:59 by ldevelle         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

// App.js

import React from 'react'
import { View } from 'react-native'
import Search from './Components/Search'

export default class App extends React.Component {
  render() {
    return (
		<View style={{flex: 1, backgroundColor: 'black'}}>
			<Search/>
		</View>
    )
  }
}
