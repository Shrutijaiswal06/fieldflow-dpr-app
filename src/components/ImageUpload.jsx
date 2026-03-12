import { useState } from 'react'

const ImageUpload = () => {
  const [images, setImages] = useState([])
  const [error, setError] = useState('')
  const MAX_IMAGES = 3

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files)
    const remainingSlots = MAX_IMAGES - images.length

    if (files.length > remainingSlots) {
      setError(`You can only upload ${MAX_IMAGES} images maximum. ${remainingSlots} slot(s) remaining.`)
      return
    }

    setError('')

    files.forEach((file) => {
      if (!file.type.startsWith('image/')) {
        setError('Please upload only image files')
        return
      }

      const reader = new FileReader()
      reader.onloadend = () => {
        setImages((prev) => {
          if (prev.length < MAX_IMAGES) {
            return [...prev, reader.result]
          }
          return prev
        })
      }
      reader.readAsDataURL(file)
    })
  }

  const removeImage = (index) => {
    setImages((prev) => prev.filter((_, i) => i !== index))
  }

  return (
    <div>
      {/* Error Message */}
      {error && (
        <div className="mb-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
          {error}
        </div>
      )}

      {/* Upload Area */}
      <div
        className={`border-2 border-dashed rounded-lg p-8 text-center transition ${
          images.length < MAX_IMAGES
            ? 'border-gray-300 hover:border-orange-500 hover:bg-orange-50'
            : 'border-gray-200 bg-gray-50'
        }`}
      >
        <div className="text-gray-400 mb-3">
          <svg
            className="mx-auto h-12 w-12"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 48 48"
          >
            <path
              d="M28 8H12a4 4 0 00-4 4v20a4 4 0 004 4h24a4 4 0 004-4V20m-8-12l-3.172-3.172a2 2 0 00-2.828 0L28 8m0 0l6 6m6-6v20a4 4 0 01-4 4H12a4 4 0 01-4-4V12"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <p className="mb-2 text-sm font-medium text-gray-700">
          {images.length < MAX_IMAGES ? (
            <>
              <label htmlFor="file-upload" className="text-orange-600 hover:text-orange-700 cursor-pointer font-semibold">
                Click to upload
              </label>
              {' '}or drag and drop
            </>
          ) : (
            'Maximum images uploaded'
          )}
        </p>
        <p className="text-xs text-gray-500 mb-2">PNG, JPG, GIF (Max 3 images)</p>
        <p className="text-xs text-gray-400">Images uploaded: {images.length}/{MAX_IMAGES}</p>
        {images.length < MAX_IMAGES && (
          <input
            id="file-upload"
            type="file"
            multiple
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />
        )}
      </div>

      {/* Image Preview */}
      {images.length > 0 && (
        <div className="mt-6">
          <h4 className="text-sm font-semibold text-gray-900 mb-4">
            Uploaded Images ({images.length}/{MAX_IMAGES})
          </h4>
          <div className="grid grid-cols-3 gap-4">
            {images.map((image, index) => (
              <div key={index} className="relative group">
                <img
                  src={image}
                  alt={`Upload ${index + 1}`}
                  className="w-full h-32 object-cover rounded-lg shadow-md"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 rounded-lg transition flex items-center justify-center">
                  <button
                    onClick={() => removeImage(index)}
                    className="opacity-0 group-hover:opacity-100 bg-red-500 text-white rounded-full p-2 hover:bg-red-600 transition shadow-lg"
                    title="Remove image"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-2 text-center">Image {index + 1}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default ImageUpload
