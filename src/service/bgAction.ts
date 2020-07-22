// @flow
import firebase from 'react-native-firebase'
// Optional flow type
import type { NotificationOpen } from 'react-native-firebase'

export default async (notificationOpen: NotificationOpen) => {
  console.warn({ notificationOpen })
  if (notificationOpen.action === 'snooze') {
    // handle the action
    console.warn({ notificationOpen })
  }

  return Promise.resolve()
}
