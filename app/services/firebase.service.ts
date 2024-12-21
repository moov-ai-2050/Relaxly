import { firebase } from '@nativescript/firebase';

export function initializeFirebase() {
  firebase.init({
    onMessageReceived: (message) => {
      console.log('Message received:', message);
    },
    showNotifications: true,
    showNotificationsWhenInForeground: true
  }).then(() => {
    console.log('Firebase initialized successfully');
  }).catch(error => {
    console.error('Error initializing Firebase:', error);
  });
}