import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import type { } from '@redux-devtools/extension' // required for devtools typing
import { HDNodeWallet } from 'ethers'

interface HdNodeState {
  hdNode: HDNodeWallet | null;
  update: (hdNode: HDNodeWallet) => void
}

const useHdNodeStore = create<HdNodeState>()(
  devtools(
    persist(
      (set) => ({
        hdNode: null,
        update: (hdNode: HDNodeWallet) => set(() => ({ hdNode: hdNode })),
      }),
      {
        name: 'hdNode-storage',
      },
    ),
  ),
)

export default useHdNodeStore