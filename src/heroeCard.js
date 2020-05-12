import React from 'react'
import { View, Text, Image } from 'react-native'
import { Icon } from 'native-base'

const styleContainer = {
    flex: 1,
    flexDirection: 'row',
    minHeight: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#a0a0a0',
    justifyContent: 'space-between'
}

const styleCard = {
    flex:1,
    flexDirection: 'row',
    minHeight:40
}

const styleImage = {
    width: '100%',
    height: '100%'
}

const textStyle = {
    lineHeight:30,
    marginLeft:15
}
export default function HeroeCard(props) {
    return (
        <View style={styleContainer}>
            <View>
                <View style={styleCard}>
                    <Icon type="MaterialIcons" name="person" />
                    <Text style={textStyle}>{props.name}</Text>
                </View>
                <View style={styleCard}>
                    <Icon type="MaterialIcons" name="location-city" />
                    <Text style={textStyle}>{props.city}</Text>
                </View>
                <View style={styleCard}>
                    <Icon type="FontAwesome" name="id-card" />
                    <Text style={textStyle}>{props.age}</Text>
                </View>
                <View style={styleCard}>
                    <Icon type="FontAwesome" name="star" />
                    <Text style={textStyle}>{props.rating}</Text>
                </View>
            </View>
            <View style={{width: 200}}>
                <Image source={{ uri: props.picture }} style={styleImage} resizeMode={'cover'}/>
            </View>
        </View>
    )
}