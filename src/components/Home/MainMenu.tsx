import React, { FC } from "react"
import { ScrollView } from "react-native"
import { MenuButton } from "./MenuButton"
import { useNavigation } from "../../navigation/NavigationTypes"

// TODO: pages should be defined in a more configurable way (in a single place, probably in navigation)
const pages = [
    "Calendario",
    "Orario Lezioni",
    "PoliAssociazioni",
    "AuleLibere",
    "Materiali Scaricabili",
]

/**
 * the main menu of the app, an horizontal scroll view with the buttons to navigate to the different pages
 */
export const MainMenu: FC = () => {
    const { navigate } = useNavigation()
    return (
        <ScrollView horizontal style={{ paddingHorizontal: 24 }}>
            {pages.map(p => (
                <MenuButton
                    // TODO: actual navigation
                    onPress={() => navigate("Saluti", { defaultName: "ciao" })}
                    title={p}
                    key={"menu_" + p}
                />
            ))}
        </ScrollView>
    )
}
