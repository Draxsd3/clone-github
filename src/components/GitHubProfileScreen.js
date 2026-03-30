import React from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  StatusBar,
  Text,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ProfileSidebar from './ProfileSidebar';
import ReadmeContent from './ReadmeContent';

function TopBar() {
  return (
    <View style={styles.topBar}>
      <View style={styles.topBarLeft}>
        <Ionicons name="logo-github" size={22} color="#e6edf3" />
      </View>
      <View style={styles.topBarRight}>
        <Ionicons name="notifications-outline" size={20} color="#e6edf3" />
        <Ionicons name="add-circle-outline" size={20} color="#e6edf3" />
        <View style={styles.topBarAvatar}>
          <Ionicons name="person" size={14} color="#0d1117" />
        </View>
      </View>
    </View>
  );
}

function TabBar() {
  const tabs = ['Overview', 'Repositories', 'Projects', 'Packages', 'Stars'];
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.tabBarScroll}
    >
      <View style={styles.tabBar}>
        {tabs.map((tab, i) => (
          <View
            key={i}
            style={[styles.tab, i === 0 && styles.tabActive]}
          >
            <Text style={[styles.tabText, i === 0 && styles.tabTextActive]}>
              {tab}
            </Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

export default function GitHubProfileScreen() {
  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor="#161b22" />

      <TopBar />
      <TabBar />

      <ScrollView
        style={styles.scroll}
        showsVerticalScrollIndicator={false}
      >
        <ProfileSidebar />
        <ReadmeContent />
        <View style={styles.bottomSpacer} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#0d1117',
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: '#161b22',
    borderBottomWidth: 1,
    borderBottomColor: '#21262d',
  },
  topBarLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  topBarRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  topBarAvatar: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: '#58a6ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabBarScroll: {
    backgroundColor: '#0d1117',
    borderBottomWidth: 1,
    borderBottomColor: '#21262d',
  },
  tabBar: {
    flexDirection: 'row',
    paddingHorizontal: 12,
  },
  tab: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    marginRight: 2,
  },
  tabActive: {
    borderBottomWidth: 2,
    borderBottomColor: '#f78166',
  },
  tabText: {
    color: '#8b949e',
    fontSize: 13,
    fontWeight: '500',
  },
  tabTextActive: {
    color: '#e6edf3',
    fontWeight: '600',
  },
  scroll: {
    flex: 1,
  },
  bottomSpacer: {
    height: 32,
  },
});
