import { create } from 'zustand';

interface SearchDrawerStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useSearchDrawer = create<SearchDrawerStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false })
}));
export default useSearchDrawer;