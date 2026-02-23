import {v4 as uuidv4} from 'uuid'
import {storage} from '@wxt-dev/storage'
import { userProfile } from '@/types'

//Define storage key and the default value
export const profileStorage = storage.defineItem<userProfile[]>('local:profiles',{
    defaultValue: [],
})


// Helper function for CRUD

export const StorageActions = {
    // Add a new profile
    addProfile: async (newProfile: userProfile) => {
        const current = await profileStorage.getValue()
        await profileStorage.setValue([...current, newProfile])
    },

    deleteProfile: async(id: string) => {
        const current = await profileStorage.getValue()
        await profileStorage.setValue(current.filter(p=> p.id !==id))
    },

    updateProfile: async(id: string, updatedData: Partial<userProfile>) => {
        const current = await profileStorage.getValue()
        await profileStorage.setValue(current.map(p => p.id === id ? {...p, ...updatedData}:p))
    }
}