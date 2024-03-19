import {create} from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';

export type UserStore = {
  user?: any;
  setUser: (user: any) => void;
  loadData: () => void;
};

export const useUserStore = create<UserStore>()(set => ({
  user: null,
  setUser: async (newData: any) => {
    await AsyncStorage.setItem('user', JSON.stringify(newData));
    set({user: newData});
  },
  loadData: async () => {
    const storedData = await AsyncStorage.getItem('user');
    if (storedData) {
      set({user: JSON.parse(storedData)});
    }
  },
}));
