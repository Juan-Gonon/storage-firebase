import { useState } from 'react'
import { editUrlImg, insertProducts } from '../DB/Products'

export const useFileImage = ({ sinfoto }) => {
  const [fileUrl, setFileUrl] = useState(sinfoto)
  const [file, setFile] = useState([])
  const [stateImage, setStateImage] = useState(false)

  const uploadImageStorage = (e) => {
    // carga local
    const fileLocal = e.target.files
    const fileReaderLocal = new FileReader()
    fileReaderLocal.readAsDataURL(fileLocal[0])
    const typeImage = e.target.files[0]

    if (!typeImage.type.includes('image/png')) return null
    if (fileReaderLocal && fileLocal && fileLocal.length) {
      fileReaderLocal.onload = function load () {
        setFileUrl(fileReaderLocal.result)
      }

      // preparar img para el storage

      const fileList = e.target.files
      const fileReader = new FileReader()
      fileReader.readAsArrayBuffer(fileList[0])
      fileReader.onload = function () {
        const imagenData = fileReader.result
        setFile(imagenData)
      }
    }
  }

  const stateFormImage = async ({ data }) => {
    const img = file.length
    console.log(data)
    console.log(img)
    if (img !== 0) {
      setStateImage(false)
      const product = { ...data, icono: '-' }
      const id = await insertProducts({ product })
      const url = await uploadImageStorage({ id, file })
      await editUrlImg({ id, url })
    } else {
      setStateImage(true)
    }
  }

  return {
    fileUrl,
    stateImage,
    uploadImageStorage,
    stateFormImage
  }
}
