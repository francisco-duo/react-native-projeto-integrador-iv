import * as React from 'react';
import { View, Text, Button } from 'react-native';

export function HomePage({ navigation }) {
    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <Text>Página de inicio</Text>
        </View>
    );
};
