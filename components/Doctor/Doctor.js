import React from 'react'
import { View, Text, Image } from 'react-native'

export default function Doctor({ doctor }) {
    const { name, email, image } = doctor;
    return (
        <View>
            <Image
                source={{
                    uri: `data:image/png;base64,${image}`,
                }}
                style={{ width: 200, height: 200 }}
            />
            <Text>{name}</Text> <br />
            <Text>{email}</Text><br />
        </View>
    )
}
