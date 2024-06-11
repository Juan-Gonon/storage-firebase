import { addDoc, collection, doc, getDoc, query, updateDoc, where } from 'firebase/firestore'
import { db } from '../api/firebase.config'
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage'

const conexion = collection(db, 'Products')

export const insertProducts = async ({ product }) => {
  try {
    const data = await addDoc(conexion, product)
    const id = data.id
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

export const editUrlImg = async ({ id, url }) => {
  console.log(url)
  await updateDoc(doc(db, 'Products', id), { icono: url })
}

export const repeatedData = async ({ product }) => {
  try {
    const res = []
    const q = query(conexion, where('descripcion', '==', product.descripcion))
    const queryConsult = await getDoc(q)

    queryConsult.forEach((element) => {
      res.push(element.data())
    })

    return res.length
  } catch (error) {
    console.log(error)
  }
}
