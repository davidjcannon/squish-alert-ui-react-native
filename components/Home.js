import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import postsData from '../assets/data/posts';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../assets/colors/colors';
import LinearGradient from 'react-native-linear-gradient';

Feather.loadFont();
MaterialCommunityIcons.loadFont();

export default Home = () => {
  const renderPost = ({item}) => {
    return (
      <View style={styles.alignPostBox}>
        <View style={[styles.postBox, styles.dropShadow]} />
        <View style={styles.post}>
          {/* Entire post */}

          {/* Left side */}
          <View style={styles.postContents}>
            <Image source={item.image} style={styles.postImage} />

            {/* Time */}
            <View style={styles.rowCent}>
              <Feather name="clock" color={colors.time}></Feather>
              <Text style={styles.timeText}>{item.time}</Text>
            </View>
          </View>

          {/* Right side */}
          {/* Title */}
          <View style={styles.postContents}>
            <Text style={styles.postTitle}>{item.title.toUpperCase()}</Text>

            {/* Location */}
            <View style={[styles.rowCent, styles.infospace]}>
              <Feather name="map" size={18} style={styles.postIcon}></Feather>
              <Text>{item.location}</Text>
            </View>

            {/* Price */}
            <View style={[styles.rowCent, styles.infospace]}>
              <Feather
                name="dollar-sign"
                size={18}
                style={styles.postIcon}></Feather>
              <Text>{item.price}</Text>
            </View>

            {/* Desc */}
            <View style={[styles.rowCent, styles.infospace]}>
              <Text style={styles.postDesc}>{item.desc}</Text>
            </View>
          </View>
        </View>

        {/* Border icons */}
        <Feather name="heart" style={styles.heart} size={25} />
        <Feather name="flag" style={styles.report} size={25} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <LinearGradient style={styles.container} colors={['#7CDE00', '#539400']}>
        {/* Header */}
        <SafeAreaView>
          <View style={styles.headerWrapper}>
            <MaterialCommunityIcons
              name="account-circle"
              style={styles.Icon}
              size={32}
            />
            <MaterialCommunityIcons
              name="bell-circle-outline"
              style={styles.Icon}
              size={32}
            />
            <Feather name="plus-circle" style={styles.Icon} size={32}></Feather>
            <Text style={styles.title}>Squish News</Text>
          </View>
        </SafeAreaView>

        {/* Search */}
        <View style={styles.Search}>
          <View style={styles.searchBar} />
          <Feather name="search" style={styles.spacing} size={24} />
          <Text style={styles.searchText}>
            Search a squish name or location
          </Text>
        </View>

        {/* Posts */}

        <View style={styles.center}>
          <FlatList
            data={postsData}
            renderItem={renderPost}
            keyExtractor={item => item.id}
          />
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerWrapper: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    paddingBottom: 16,
  },
  title: {
    justifyContent: 'space-between',
    width: '60%',
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.white,
  },
  Icon: {
    color: colors.white,
    paddingRight: 12,
  },
  Search: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    opacity: 1,
    borderRadius: 10,
    marginBottom: 12,
  },
  searchText: {
    color: colors.white,
    fontSize: 21,
  },
  searchBar: {
    width: 352,
    height: 28,
    backgroundColor: colors.search,
    position: 'absolute',
    borderRadius: 10,
  },
  spacing: {
    color: colors.white,
    paddingRight: 12,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  postBox: {
    width: '100%',
    height: '95%',
    backgroundColor: colors.white,
    position: 'absolute',
    borderRadius: 10,
  },
  postImage: {
    width: 125,
    height: 125,
    alignSelf: 'baseline',
    marginBottom: 3,
    borderRadius: 10,
  },
  post: {
    width: 375,
    height: 160,
    marginTop: 11,
    alignSelf: 'center',
    flexDirection: 'row',
  },
  postContents: {
    marginLeft: 10,
  },
  rowCent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infospace: {
    paddingTop: 3,
  },
  postIcon: {
    paddingRight: 5,
  },
  timeIcon: {
    width: 15,
    height: 15,
  },
  timeText: {
    color: colors.time,
    paddingLeft: 1,
  },
  postTitle: {
    color: colors.black,
    fontWeight: 'bold',
    fontSize: 16,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  postDesc: {
    width: 220,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  alignPostBox: {
    alignItems: 'center',
    marginBottom: 12,
  },
  heart: {
    position: 'absolute',
    paddingLeft: 335,
    paddingTop: 5,
  },
  report: {
    position: 'absolute',
    paddingLeft: 335,
    paddingTop: 130,
  },
  dropShadow: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});
