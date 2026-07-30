function ErrorMsg({ message }) {
  return (
    <div className="flex justify-center items-center py-20">
      <div className="bg-red-500 text-white px-6 py-4 rounded-xl text-center">
        <p className="text-lg font-semibold">Something went wrong</p>
        <p className="text-sm mt-1">{message}</p>
      </div>
    </div>
  )
}

export default ErrorMsg
 