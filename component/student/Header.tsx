import { useState } from 'react';
import { Image, Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import { images } from '../../assets/images';
import { Icon } from './Icon';
import { colors, radius, shadowCard, spacing, typography } from './theme';

type HeaderProps = {
  name: string;
  studentId: string;
  unreadNotifications: number;
};

export function Header({ name, studentId, unreadNotifications }: HeaderProps) {
  const [notifyVisible, setNotifyVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Image source={images.avatar} style={styles.avatar} />
      <View style={styles.middle}>
        <Text style={typography.caption}>Xin chào</Text>
        <Text style={typography.title} numberOfLines={1}>
          {name}
        </Text>
        <Text style={typography.caption}>{studentId}</Text>
      </View>
      <Pressable
        style={({ pressed }) => [styles.bellButton, pressed && styles.bellButtonPressed]}
        onPress={() => setNotifyVisible(true)}
      >
        <Icon name="bell" size={20} color={colors.text} />
        {unreadNotifications > 0 && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>
              {unreadNotifications > 9 ? '9+' : unreadNotifications}
            </Text>
          </View>
        )}
      </Pressable>
      <Modal
        visible={notifyVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setNotifyVisible(false)}
      >
        <Pressable
          style={styles.modalOverlay}
          onPress={() => setNotifyVisible(false)}
        >
          <Pressable style={styles.modalCard} onPress={() => {}}>
            <View style={styles.modalIconCircle}>
              <Icon name="bell" size={22} color={colors.primary} />
            </View>
            <Text style={typography.sectionTitle}>Thông báo</Text>
            <Text style={[typography.caption, styles.modalMessage]}>
              Chức năng đang phát triển
            </Text>
            <Pressable
              style={({ pressed }) => [styles.modalButton, pressed && styles.modalButtonPressed]}
              onPress={() => setNotifyVisible(false)}
            >
              <Text style={styles.modalButtonText}>Đã hiểu</Text>
            </Pressable>
          </Pressable>
        </Pressable>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing.lg,
    gap: spacing.md,
  },
  avatar: {
    width: 52,
    height: 52,
    borderRadius: radius.pill,
  },
  middle: {
    flex: 1,
  },
  bellButton: {
    width: 44,
    height: 44,
    borderRadius: radius.pill,
    backgroundColor: colors.card,
    alignItems: 'center',
    justifyContent: 'center',
    ...shadowCard,
  },
  bellButtonPressed: {
    opacity: 0.7,
    transform: [{ scale: 0.94 }],
  },
  badge: {
    position: 'absolute',
    top: 4,
    right: 4,
    minWidth: 18,
    height: 18,
    borderRadius: radius.pill,
    backgroundColor: colors.warning,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 3,
  },
  badgeText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '700',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: colors.overlay,
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing.xl,
  },
  modalCard: {
    width: '100%',
    maxWidth: 320,
    backgroundColor: colors.card,
    borderRadius: radius.lg,
    padding: spacing.xl,
    alignItems: 'center',
    gap: spacing.sm,
    ...shadowCard,
  },
  modalIconCircle: {
    width: 48,
    height: 48,
    borderRadius: radius.pill,
    backgroundColor: colors.primarySoft,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.xs,
  },
  modalMessage: {
    textAlign: 'center',
  },
  modalButton: {
    marginTop: spacing.md,
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.sm,
    borderRadius: radius.pill,
    backgroundColor: colors.primarySoft,
  },
  modalButtonPressed: {
    opacity: 0.8,
  },
  modalButtonText: {
    color: colors.primary,
    fontWeight: '700',
    fontSize: 14,
  },
});
