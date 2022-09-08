/* eslint-disable react-native/no-inline-styles */
import {View, RefreshControl, FlatList} from 'react-native';
import React, {ReactElement, useRef, useState} from 'react';
import {useIsFocused, useScrollToTop} from '@react-navigation/native';

interface LiveStreamingListItemProps {
  data: any[];
  onWatchButtonClicked?: Function;
  showWatchButton?: Boolean;
  shouldShowBottomButtons?: Boolean;
  shouldShowCloseButton?: Boolean;
  tagLeftImagePath?: String;
  onMenuPressed?: (data, item) => void;
  onNextPageLoaded?: Function;
  isRefreshing: boolean;
  onRefreshCall: () => void;
  isLoading?: boolean;
  moreMenuOptionHidden?: boolean;
  headerView?: ReactElement;
}

export default function LiveStreamingFlatList(
  props: LiveStreamingListItemProps,
) {
  const scrollRef = useRef(null);
  const [isMenuOpen, seIsMenuOpen] = useState(false);
  const [feedItemData, setFeedItemData] = useState();
  let isScreenFocused = useIsFocused();

  // const ref = React.useRef(null);

  useScrollToTop(scrollRef);

  return (
    <>
      <FlatList
        ref={scrollRef}
        //horizontal
        contentContainerStyle={{paddingBottom: 100}}
        ListHeaderComponent={props.headerView}
        data={props.data}
        showsVerticalScrollIndicator={false}
        alwaysBounceVertical={false}
        renderItem={() => {
          return (
            <View
              style={{backgroundColor: 'blue', height: 200, marginBottom: 20}}
            />
          );
        }}
        onEndReachedThreshold={0.8}
        onMomentumScrollEnd={() => {
          // props.onNextPageLoaded();
          console.log('onMomentumScrollEnd??');
        }}
        // refreshing={props.isRefreshing}
        onEndReached={() => {
          // props.onNextPageLoaded();
          console.log('onEndReached?');
        }}
        // onRefresh={props.onRefreshCall}
        ListHeaderComponentStyle={{marginHorizontal: -16}}
        refreshControl={
          <RefreshControl
            refreshing={props.isRefreshing}
            onRefresh={props.onRefreshCall}
            title="Pull to refresh"
            tintColor="#fff"
            titleColor="#fff"
          />
        }
      />
    </>
  );
}
