import { create } from 'zustand';

interface MobileDrawerStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useMobileDrawer = create<MobileDrawerStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false })
}));

export default useMobileDrawer;