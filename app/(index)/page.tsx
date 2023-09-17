'use client'

import CardImage from '@/components/card/CardBase'
import CardSuccess from '@/components/card/CardSucess'
import { subtitle, title } from '@/components/primitives'
import { useCallback, useState } from 'react'


export default function Home() {
  const [isUploading, setIsUploading] = useState(false)
  const [imageUrl, setImageUrl] = useState()

  const onDrop = useCallback((acceptedFiles: File[]) => {
    acceptedFiles.forEach((file) => {

      const formData = new FormData()
      formData.append('image', file)

      fetch('/api/upload', {
        method: 'POST',
        body: formData,
        headers: {
          'Access-Control-Allow-Origin': '*'
        },
      })
        .then((res) => res.json())
        .then(({ imageURL }) => {
          setImageUrl(imageURL)
          console.log('FETCH DONE');
          setIsUploading(false)
        })
    })
  }, [])

  if (imageUrl) {
    console.log('imageUrl', imageUrl);
  }

  return (
    <section className='flex flex-col items-center justify-center gap-4 py-8 md:py-10'>
      <div className='justify-center inline-block max-w-lg text-center'>
        <h1 className={title()}>Upload your&nbsp;</h1>
        <h1 className={title({ color: 'violet' })}>image&nbsp;</h1>
        <p className={`${subtitle({ class: 'mt-4' })} font-thin text-gray-400	mt-1`}>
          File should be jpeg, png...
        </p>
      </div>
      {
        imageUrl ? (
          <CardSuccess imageUrl={imageUrl} />
        ) : (
          <CardImage onDrop={onDrop} />
        )
      }
    </section>
  )
}
