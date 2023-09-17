import { v2 as cloudinary } from 'cloudinary'
import multer from 'multer'
import { NextResponse } from 'next/server'

interface NextApiFile extends Request {
  File: Express.Multer.File
}

export async function POST(request: NextApiFile) {
  cloudinary.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUD_NAME,
    api_key: process.env.NEXT_PUBLIC_API_KEY,
    api_secret: process.env.NEXT_PUBLIC_API_SECRET,
  })

  const upload = multer({ storage: multer.memoryStorage() })
  upload.single('image')

  const formData = (await request.formData()).get('image') as File

  const path = formData.name

  console.log(path)

  const opts = {
    use_filename: true,
    unique_filename: false,
    overwrite: true,
    public_id: path,
  }

  try {
    const upload = await cloudinary.uploader.upload(path, opts, (error, result) => {
      if (error) {
        console.log('CLOUDINARY UPLOAD ERROR', error)
      } else {
        console.log('CLOUDINARY UPLOAD RESULT', result)
      }
    })

    console.log(upload.secure_url)

    return NextResponse.json({ success: true, imageUrl: upload?.secure_url })
  } catch (e) {
    return NextResponse.json({ error: e }, { status: 400 })
  }
}

export const config = {
  api: {
    bodyParser: false,
  },
}
