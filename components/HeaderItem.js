const HeaderItem = ({ title, Icon, href }) => {
  console.log(href)
  return (
    <div
      className="flex flex-col items-center cursor-pointer w-12 sm:w-20 hover:text-white group"
      onClick={() => {
        console.log('clicked')
      }}
    >
      <Icon
        className="h-8 mb-1 group-hover:animate-bounce"
        href="/api/auth/login"
      />
      <p className="tracking-widest opacity-0  group-hover:opacity-100">
        {title}
      </p>
    </div>
  )
}

export default HeaderItem
