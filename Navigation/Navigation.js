import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Search from "../Screens/Search";
import FilmDetail from "../Screens/FilmDetail";
import Favorites from "../Screens/Favorites";
import News from "../Screens/News";
import Seen from "../Screens/Seen";
import WishList from "../Screens/WishList"
import Home from "../Screens/Home"
import More from "../Screens/More"
import FilmPlayer from "../Screens/FilmPlayer";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../Constants/Colors";
import { useColorScheme } from "react-native";

export default function Navigation({ colorScheme }) {
  return (
    <NavigationContainer
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <MovieTabNavigator />
    </NavigationContainer>
  );
}

const HomeStack = createStackNavigator();

const HomeStackNavigator = () => {
  const colorScheme = useColorScheme();
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerMode: "screen",
        headerStyle: { backgroundColor: "white" },
        headerTitleStyle: { fontWeight: "bold" },
        headerStyle: {
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 4.84,
          elevation: 12,
        },
      }}
    >
      <HomeStack.Group>
        <HomeStack.Screen
          name="HomeScreen"
          component={Home}
          options={{
            headerShown: false,
            title: "Accueil",
            headerTitleAlign: "center",
          }}
        />
        <HomeStack.Screen
          name="SearchScreen"
          component={Search}
          options={{
            headerShown: false,
            title: "Rechercher",
            headerTitleAlign: "center",
            gestureEnabled: true,
          }}
        />
        <HomeStack.Screen
          name="FilmDetail"
          component={FilmDetail}
          options={() => ({
            headerShown: true,
            // headerTransparent: true,
            title: "",
            gestureEnabled: true,
            headerBackImage: () => <HeaderBackIcon color={Colors[colorScheme].text}/>,
          })}
        />
        <HomeStack.Screen
          name="MoreScreen"
          component={More}
          options={{
            headerShown: true,
            title: "More",
            headerTitleAlign: "center",
            gestureEnabled: true,
            headerBackImage: () => <HeaderBackIcon color={Colors[colorScheme].text}/>,
          }}
        />
        <HomeStack.Screen
          name="FilmPlayerScreen"
          component={FilmPlayer}
          options={{
            headerShown: true,
            title: "",
            headerTitleAlign: "center",
            gestureEnabled: true,
            headerBackImage: () => <HeaderBackIcon color={Colors[colorScheme].text}/>,
          }}
        />
      </HomeStack.Group>
    </HomeStack.Navigator>
  );
};

const FavoritesStack = createStackNavigator();

const FavoritesStackNavigator = () => {
  const colorScheme = useColorScheme();
  return (
    <FavoritesStack.Navigator
      screenOptions={{
        headerMode: "screen",
        headerStyle: { backgroundColor: "white" },
        headerTitleStyle: { fontWeight: "bold" },
        headerStyle: {
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 4.84,
          elevation: 12,
        },
      }}
    >
      <FavoritesStack.Group>
        <FavoritesStack.Screen
          name="FavoritesScreen"
          component={Favorites}
          options={{
            headerShown: true,
            title: "Favoris",
            headerTitleAlign: "center",
          }}
        />
        <FavoritesStack.Screen
          name="FilmDetail"
          component={FilmDetail}
          options={() => ({
            headerShown: true,
            title: "",
            gestureEnabled: true,
            headerBackImage: () => <HeaderBackIcon color={Colors[colorScheme].text}/>,
          })}
        />
        <FavoritesStack.Screen
          name="FilmPlayerScreen"
          component={FilmPlayer}
          options={{
            headerShown: true,
            title: "",
            headerTitleAlign: "center",
            gestureEnabled: true,
            headerBackImage: () => <HeaderBackIcon color={Colors[colorScheme].text}/>,
          }}
        />
      </FavoritesStack.Group>
    </FavoritesStack.Navigator>
  );
};

const NewsStack = createStackNavigator();

const NewsStackNavigator = () => {
  const colorScheme = useColorScheme();
  return (
    <NewsStack.Navigator
      screenOptions={{
        headerMode: "screen",
        headerStyle: { backgroundColor: "white" },
        headerTitleStyle: { fontWeight: "bold" },
        headerStyle: {
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 4.84,
          elevation: 12,
        },
      }}
    >
      <NewsStack.Group>
        <NewsStack.Screen
          name="NewsScreen"
          component={News}
          options={{
            headerShown: true,
            title: "Nouveautés",
            headerTitleAlign: "center",
          }}
        />
        <NewsStack.Screen
          name="FilmDetail"
          component={FilmDetail}
          options={() => ({
            headerShown: true,
            title: "",
            gestureEnabled: true,
            headerBackImage: () => <HeaderBackIcon color={Colors[colorScheme].text}/>,
          })}
        />
        <NewsStack.Screen
          name="FilmPlayerScreen"
          component={FilmPlayer}
          options={{
            headerShown: true,
            title: "",
            headerTitleAlign: "center",
            gestureEnabled: true,
            headerBackImage: () => <HeaderBackIcon color={Colors[colorScheme].text}/>,
          }}
        />
      </NewsStack.Group>
    </NewsStack.Navigator>
  );
};

const SeenStack = createStackNavigator();

const SeenStackNavigator = () => {
  const colorScheme = useColorScheme();
  return (
    <SeenStack.Navigator
      screenOptions={{
        headerMode: "screen",
        headerStyle: { backgroundColor: "white" },
        headerTitleStyle: { fontWeight: "bold" },
        headerStyle: {
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 4.84,
          elevation: 12,
        },
      }}
    >
      <SeenStack.Group>
        <SeenStack.Screen
          name="SeenScreen"
          component={Seen}
          options={{
            headerShown: true,
            title: "Déjà vu",
            headerTitleAlign: "center",
          }}
        />
        <SeenStack.Screen
          name="FilmDetail"
          component={FilmDetail}
          options={() => ({
            headerShown: true,
            title: "",
            gestureEnabled: true,
            headerBackImage: () => <HeaderBackIcon color={Colors[colorScheme].text}/>,
          })}
        />
        <SeenStack.Screen
          name="FilmPlayerScreen"
          component={FilmPlayer}
          options={{
            headerShown: true,
            title: "",
            headerTitleAlign: "center",
            gestureEnabled: true,
            headerBackImage: () => <HeaderBackIcon color={Colors[colorScheme].text}/>,
          }}
        />
      </SeenStack.Group>
    </SeenStack.Navigator>
  );
};

const WishListStack = createStackNavigator();

const WishListStackNavigator = () => {
  const colorScheme = useColorScheme();
  return (
    <WishListStack.Navigator
      screenOptions={{
        headerMode: "screen",
        headerStyle: { backgroundColor: "white" },
        headerTitleStyle: { fontWeight: "bold" },
        headerStyle: {
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 4.84,
          elevation: 12,
        },
      }}
    >
      <WishListStack.Group>
        <WishListStack.Screen
          name="WishListScreen"
          component={WishList}
          options={{
            headerShown: true,
            title: "Ma liste",
            headerTitleAlign: "center",
          }}
        />
        <WishListStack.Screen
          name="FilmDetail"
          component={FilmDetail}
          options={() => ({
            headerShown: true,
            title: "",
            gestureEnabled: true,
            headerBackImage: () => <HeaderBackIcon color={Colors[colorScheme].text}/>,
          })}
        />
        <WishListStack.Screen
          name="FilmPlayerScreen"
          component={FilmPlayer}
          options={{
            headerShown: true,
            title: "",
            headerTitleAlign: "center",
            gestureEnabled: true,
            headerBackImage: () => <HeaderBackIcon color={Colors[colorScheme].text}/>,
          }}
        />
      </WishListStack.Group>
    </WishListStack.Navigator>
  );
};


const BottomTab = createBottomTabNavigator();

const MovieTabNavigator = () => {
  const colorScheme = useColorScheme();
  return (
    <BottomTab.Navigator
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
        tabBarInactiveTintColor: "black",
        // tabBarActiveBackgroundColor: 'black',
        // tabBarInactiveBackgroundColor: 'orange'
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{
          headerShown: false,
          title: "Home",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="search" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="FavoritesStack"
        component={FavoritesStackNavigator}
        options={{
          headerShown: false,
          title: "Favoris",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="heart-outline" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="SeenStack"
        component={SeenStackNavigator}
        options={{
          headerShown: false,
          title: "Vu",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="eye-outline" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="WishListStack"
        component={WishListStackNavigator}
        options={{
          headerShown: false,
          title: "Ma liste",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="bookmark-outline" color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

function TabBarIcon(props) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

function HeaderBackIcon(props) {
  return (
    <Ionicons
      name="arrow-back-outline"
      size={30}
      style={{
        marginRight: 15,
        borderRadius: 20,
        backgroundColor: "white",
        padding: 5,
      }}
      {...props}
    />
  );
}
