import { View, Text, TouchableOpacity } from "react-native";

function TabBarNavidation({ state, descriptors, navigation }) {
    return (
        <View style={{ flexDirection: "row" }}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: "tabPress",
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name, route.params);
                    };
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: "tabLongPress",
                        target: route.key,
                    });
                };
            })};

            <TouchableOpacity
                accessibilityRole="button"
                accessibilityState={ isFocused ? {selected: true}: {} }
                accessibilityLabel={ options.tabBarAccebilityLabel }
                testID={ option.tabBarTestID }
                onPress={ onPress }
                onLongPress={ onLongPress }
                style={{ flex: 1, backgroundColor: "#" }}
            >
                <Text>{ label }</Text>
            </TouchableOpacity>
        </View>
    );
};
