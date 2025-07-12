'use client';

import { create } from 'zustand';

interface UploadStore {
  isUploadMode: boolean;
  toggleMode: () => void;
  setMode: (mode: boolean) => void;
}

export const useUploadStore = create<UploadStore>(set => ({
  isUploadMode: false,
  toggleMode: () => set(state => ({ isUploadMode: !state.isUploadMode })),
  setMode: (mode: boolean) => set({ isUploadMode: mode }),
}));
