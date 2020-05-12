import React from 'react'
import firestore from '@react-native-firebase/firestore'
import { ScrollView } from 'react-native'
import HeroeCard from './heroeCard'

fireStoreInstace = firestore()

var heroesCollection = fireStoreInstace.collection('heroes')
var heroesList;

heroesCollection.get().then(data => {

    heroesList = data.docs.map(item => (
        < HeroeCard
            key={item.id}
            name={item._data.name}
            age={item._data.age}
            rating={item._data.rating}
            city={item._data.city}
            picture={item._data.picture}
        />

    ))
}).catch(errr => console.error(errr))

export default function Heroes(props) {

    return (<ScrollView>
        {heroesList}
    </ScrollView>
    )
}
