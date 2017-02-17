/**
 * Created by andrew.yang on 2/17/2017.
 */
'use strict';
import React,{Component} from 'react';
import {
    Image,
    TextInput,
    View,
    Text,
    StyleSheet,
    Platform,
    TouchableOpacity
} from 'react-native';

export default class Header extends Component {
    render() {
        return (
            <View style={styles.navBarContainerStlye}>
                <TouchableOpacity style={{flex:1}}>
                    <View style={styles.navBarCenterViewStyle}>
                        <Image source={require('../images/icon_shop_search.png')} style={{width:14,height:14}}/>
                        <Text style={{color:'#dddddd',fontSize:13,marginLeft:5}}>Search Equipment</Text>
                    </View>
                </TouchableOpacity>

                <View style={styles.navRightViweStyle}>
                    <TouchableOpacity>
                        <Image source={require('../images/icon_navigationitem_scan_white.png')}
                               style={styles.navRightImageStyle}/>
                    </TouchableOpacity>

                    <Image source={require('../images/icon_homepage_message.png')} style={styles.navRightImageStyle}/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    navBarContainerStlye:{
        flexDirection: 'row',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: Platform.OS === 'ios' ? 20 : 0,
        height: Platform.OS === 'ios' ? 68 : 48,
        backgroundColor:'rgb(25,182,158)',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    navBarCenterViewStyle:{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'white',
        height:28,
        borderRadius:14,
        paddingLeft:10,
        paddingRight:40
    },

    navRightViweStyle:{
        flexDirection:'row',
        alignItems:'center',
        marginLeft:10,
        marginRight:10
    },

    navRightImageStyle:{
        width:20,
        height:20,
        marginLeft:10
    }
});