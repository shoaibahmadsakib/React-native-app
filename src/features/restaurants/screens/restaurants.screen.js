import React, { useContext, useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { Spacer } from "../../../components/spacer/spacer.component";
import { RestaurantInfoCard } from "../components/restaurant-info.component";
import { SafeArea } from "../../../components/Utils/SafeArea.component";
import { RestaurantsContext } from "../../../Service/restaurants/restaurants.context";
import { FavouritesContext } from "../../../Service/favourate/favourate.context";
import { ActivityIndicator, Colors } from "react-native-paper";
import { Search } from "../components/Search.component";
import { FavouritesBar } from "../../../components/favourites/favourite-bar.component";
import { RestaurantList } from "../components/restaurant-info-card.styles";

export const RestaurantsScreen = ({ navigation }) => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);
  const [isToggled, setIsToggled] = useState(false);
  const { favourites } = useContext(FavouritesContext);
  return (
    <SafeArea>
      <View style={{ position: "absolute", top: "50%", left: "50%" }}>
        {isLoading && (
          <ActivityIndicator
            style={{ marginLeft: -25 }}
            size={50}
            animating={true}
            color={Colors.blue300}
          />
        )}
      </View>
      <Search
        isFavouritesToggled={isToggled}
        onFavouritesToggle={() => setIsToggled(!isToggled)}
      />
      {isToggled && (
        <FavouritesBar
          favourites={favourites}
          onNavigate={navigation.navigate}
        />
      )}
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetail", {
                  restaurant: item,
                })
              }
            >
              <Spacer position="bottom" size="large">
                <RestaurantInfoCard restaurant={item} />
              </Spacer>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ padding: 16 }}
      />
    </SafeArea>
  );
};
