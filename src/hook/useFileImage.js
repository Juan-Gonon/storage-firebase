import { useState } from 'react'

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

  const stateFormImage = () => {
    const img = file.length
    if (img !== 0) {
      setStateImage(false)
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
