import { useState } from 'react'
import { editUrlImg, insertProducts, uploadImgStorage } from '../DB/Products'
import Swal from 'sweetalert2'

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

    if (img !== 0) {
      setStateImage(false)
      const product = { ...data, icono: '-' }
      const id = await insertProducts({ product })
      console.log(id)
      const url = await uploadImgStorage({ id, file })
      await editUrlImg({ id, url })
      console.log('final')
      Swal.fire({
        title: 'Good job!',
        text: 'You clicked the button!',
        icon: 'success'
      })
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
