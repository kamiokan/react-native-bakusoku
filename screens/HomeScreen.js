import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { ButtonGroup, ListItem } from "react-native-elements";
import { MaterialIcons } from "@expo/vector-icons";
import { connect } from "react-redux";

import * as actions from "../actions";

const ALL_INDEX = 0;

const GREAT = "sentiment-very-satisfied";
const GREAT_INDEX = 1;
const GREAT_COLOR = "red";

const GOOD = "sentiment-satisfied";
const GOOD_INDEX = 2;
const GOOD_COLOR = "orange";

const POOR = "sentiment-dissatisfied";
const POOR_INDEX = 3;
const POOR_COLOR = "blue";

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedIndex: ALL_INDEX,
    };
  }

  componentDidMount() {
    this.props.fetchAllReviews(); // Action creatorを呼ぶ
  }

  onListItemPress = (selectedReview) => {
    // Action creatorを発動する
    this.props.selectDetailReview(selectedReview);

    this.props.navigation.navigate("detail");
  };

  renderReviews() {
    let reviewRank;

    switch (this.state.selectedIndex) {
      case GREAT_INDEX:
        reviewRank = GREAT;
        break;

      case GOOD_INDEX:
        reviewRank = GOOD;
        break;

      case POOR_INDEX:
        reviewRank = POOR;
        break;

      default:
        break;
    }

    let rankedReviews = [];

    if (this.state.selectedIndex === ALL_INDEX) {
      rankedReviews = this.props.allReviews;
    } else {
      for (let i = 0; i < this.props.allReviews.length; i++) {
        if (this.props.allReviews[i].rank === reviewRank) {
          rankedReviews.push(this.props.allReviews[i]);
        }
      }
    }

    return (
      <ScrollView>
        {rankedReviews.map((review, index) => {
          let reviewColor;

          switch (review.rank) {
            case GREAT:
              reviewColor = GREAT_COLOR;
              break;

            case GOOD:
              reviewColor = GOOD_COLOR;
              break;

            case POOR:
              reviewColor = POOR_COLOR;
              break;

            default:
              break;
          }

          return (
            <ListItem
              key={index}
              leftIcon={{ name: review.rank, color: reviewColor }}
              onPress={() => this.onListItemPress(review)}
            >
              <MaterialIcons name={review.rank} color={reviewColor} size="60" />
              <ListItem.Content>
                <ListItem.Title>{review.country}</ListItem.Title>
                <ListItem.Subtitle>
                  {`${review.dateFrom} 〜 ${review.dateTo}`}
                </ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          );
        })}
      </ScrollView>
    );
  }

  onButtonGroupPress = (selectedIndex) => {
    this.setState({
      selectedIndex: selectedIndex,
    });
  };

  render() {
    let nGreat = 0; // "Number of Great" の略。
    let nGood = 0; // "Number of Good" の略。
    let nPoor = 0; // "Number of Poor" の略。

    for (let i = 0; i < this.props.allReviews.length; i++) {
      switch (this.props.allReviews[i].rank) {
        case GREAT:
          nGreat++;
          break;

        case GOOD:
          nGood++;
          break;

        case POOR:
          nPoor++;
          break;

        default:
          break;
      }
    }

    const buttonList = [
      `All(${this.props.allReviews.length})`,
      `Great(${nGreat})`,
      `Good(${nGood})`,
      `Poor(${nPoor})`,
    ];

    return (
      <View style={{ flex: 1 }}>
        <ButtonGroup
          buttons={buttonList}
          selectedIndex={this.state.selectedIndex}
          onPress={this.onButtonGroupPress}
        />

        {this.renderReviews()}
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // `state.review.allReviews`を → `this.props.allReviews`にコピー
    allReviews: state.review.allReviews,
  };
};

export default connect(mapStateToProps, actions)(HomeScreen);
