import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Icon from "react-native-vector-icons/AntDesign"
import { ColorfulTabBar as TabBar } from "react-navigation-tabbar-collection"
import { SalutoConBottone } from "./src/pages/SalutoConBottone"
import { CardSection } from "./src/components/CardSection"
import { DemoScreen } from "./src/pages/DemoScreen"
import { Card } from "./src/components/Card"
import { Menu } from "./src/pages/Menu"

const Tab = createBottomTabNavigator()

const cards: { titolo: string; sottotitolo: string }[] = []
for (let i = 0; i < 20; i++) {
    cards.push({
        titolo: `Titolo ${i}`,
        sottotitolo: `Sottotitolo ${i}`,
    })
}

const pagesInfo = [
    {
        name: "Home",
        icon: "home",
        component: () => <SalutoConBottone />,
        color: "primary",
    },
    {
        name: "Share",
        icon: "sharealt",
        component: () => (
            <CardSection
                numColumns={3}
                titolo="Share"
                cards={cards}
                renderItem={({ item, index }) => {
                    if (index % 5 == 0)
                        return <SalutoConBottone key={`saluto ${index}`} />
                    else return <Card {...item} key={"card" + index} />
                }}
            ></CardSection>
        ),
        color: "info",
    },
    {
        name: "API",
        icon: "API",
        component: () => <DemoScreen name="API"></DemoScreen>,
        color: "warning",
        props: { name: "API" },
    },
    {
        name: "Hearth",
        icon: "hearto",
        component: () => <SalutoConBottone />,
        color: "danger",
    },
    {
        name: "Menu",
        icon: "ellipsis1",
        component: () => <Menu />,
        color: "success",
    },
]
const pages = []

for (let i = 0; i < pagesInfo.length; i++) {
    pages.push(
        <Tab.Screen
            name={pagesInfo[i].name}
            options={{
                title: pagesInfo[i].name,
                icon: ({ focused, color, size }) => (
                    <Icon name={pagesInfo[i].icon} size={size} color={color} />
                ),
                color: pagesInfo[i].color,
            }}
        >
            {pagesInfo[i].component}
        </Tab.Screen>
    )
}

const App = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                //initialRouteName="Name"
                screenOptions={{ headerShown: false }}
                tabBar={props => <TabBar {...props} />}
            >
                {pages}
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default App
