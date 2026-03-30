import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { profile } from '../data/profileData';

export default function ProfileSidebar() {
  return (
    <View style={styles.container}>
      <Image source={profile.avatar} style={styles.avatar} />

      <Text style={styles.name}>{profile.name}</Text>
      <Text style={styles.username}>{profile.username}</Text>

      <TouchableOpacity style={styles.followBtn}>
        <Text style={styles.followBtnText}>Follow</Text>
      </TouchableOpacity>

      <View style={styles.statsRow}>
        <Ionicons name="people-outline" size={14} color="#8b949e" />
        <Text style={styles.statText}>
          <Text style={styles.statNumber}>{profile.followers}</Text>
          {' '}followers
        </Text>
        <Text style={styles.statDot}>·</Text>
        <Text style={styles.statText}>
          <Text style={styles.statNumber}>{profile.following}</Text>
          {' '}following
        </Text>
      </View>

      <View style={styles.divider} />

      <Text style={styles.sectionLabel}>Achievements</Text>
      <View style={styles.badgeRow}>
        {['star', 'trophy', 'ribbon', 'medal'].map((icon, i) => (
          <View key={i} style={styles.badge}>
            <Ionicons name={icon} size={16} color="#f0c040" />
          </View>
        ))}
      </View>

      <View style={styles.divider} />

      <Text style={styles.sectionLabel}>Organizations</Text>
      <View style={styles.orgRow}>
        {['briefcase', 'business', 'server', 'layers'].map((icon, i) => (
          <View key={i} style={styles.orgIcon}>
            <Ionicons name={icon} size={16} color="#8b949e" />
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0d1117',
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#21262d',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#30363d',
    alignSelf: 'center',
    marginBottom: 12,
  },
  name: {
    color: '#e6edf3',
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
  },
  username: {
    color: '#8b949e',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 12,
  },
  followBtn: {
    borderWidth: 1,
    borderColor: '#30363d',
    borderRadius: 6,
    paddingVertical: 5,
    paddingHorizontal: 16,
    alignSelf: 'center',
    marginBottom: 12,
  },
  followBtnText: {
    color: '#e6edf3',
    fontSize: 13,
    fontWeight: '600',
  },
  statsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    marginBottom: 12,
  },
  statText: {
    color: '#8b949e',
    fontSize: 12,
  },
  statNumber: {
    color: '#e6edf3',
    fontWeight: '600',
  },
  statDot: {
    color: '#8b949e',
    marginHorizontal: 4,
  },
  divider: {
    height: 1,
    backgroundColor: '#21262d',
    marginVertical: 12,
  },
  sectionLabel: {
    color: '#8b949e',
    fontSize: 12,
    fontWeight: '600',
    marginBottom: 8,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  badgeRow: {
    flexDirection: 'row',
    gap: 8,
  },
  badge: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#161b22',
    borderWidth: 1,
    borderColor: '#30363d',
    alignItems: 'center',
    justifyContent: 'center',
  },
  orgRow: {
    flexDirection: 'row',
    gap: 8,
  },
  orgIcon: {
    width: 28,
    height: 28,
    borderRadius: 6,
    backgroundColor: '#161b22',
    borderWidth: 1,
    borderColor: '#30363d',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
