import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.soothify.app',
  appName: 'junctionfrontend',
  webDir: 'dist/junctionfrontend',
  server: {
    androidScheme: 'https'
  }
};

export default config;
