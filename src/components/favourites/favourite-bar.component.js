import React from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";
import { Spacer } from "../spacer/spacer.component";
import { CompactRestaurantInfo } from "../resturants/compact-resturant-info.component";
import { Text } from "../typography/text.component";

const FavouritesWrapper = styled.View`
  padding: 10px;
`;
export const FavouritesBar = ({ favourites, onNavigate }) => {
  if (!favourites.length) {
    return null;
  }
  return (
    <FavouritesWrapper>
      <Spacer variants="left.large">
        <Text variants="caption">Favourites</Text>
      </Spacer>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((restaurant) => {
          const key = restaurant.name;
          return (
            <Spacer key={key} position="right" size="large">
              <View style={{paddingLeft:10}}>
                <TouchableOpacity
                  onPress={() =>
                    onNavigate("RestaurantDetail", {
                      restaurant,
                    })
                  }
                >
                  <CompactRestaurantInfo restaurant={restaurant} />
                </TouchableOpacity>
              </View>
            </Spacer>
          );
        })}
      </ScrollView>
    </FavouritesWrapper>
  );
};
