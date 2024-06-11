import { addDoc, collection } from 'firebase/firestore'
import { db } from '../api/firebase.config'
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage'

const conexion = collection(db, 'Products')

export const insertProducts = async ({ product }) => {
  try {
    const data = await addDoc(conexion, product)
    const id = data.id
    console.log(data)
    return id
  } catch (error) {
    console.log(error.message)
  }
}

export const uploadImgStorage = async ({ id, file }) => {
  const storage = getStorage()
  const nameImg = ref(storage, `Products/${id}.png`)
  await uploadBytes(nameImg, file)
  const url = await getDownloadURL(nameImg)
  return url
}
