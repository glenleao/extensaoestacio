import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

import { ListPets } from "../pages/ListPets";

import { ViewPet } from "../pages/ViewPet";

export default function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="ListPets"
                    component={ListPets}
                    options={{headerTitle: "Listar Pets"}}
                />
                <Stack.Screen
                    name="ViewPet"
                    component={ViewPet}
                    options={{headerTitle: "Detalhes do Pets"}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}