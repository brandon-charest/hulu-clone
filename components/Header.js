import Image from 'next/image'
import HeaderItem from './HeaderItem'
import {
  CollectionIcon,
  FireIcon,
  HomeIcon,
  SearchIcon,
  UserIcon
} from '@heroicons/react/outline'

const Header = () => {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem title="HOME" Icon={HomeIcon} />
        <HeaderItem title="TRENDING" Icon={FireIcon} />
        <HeaderItem title="COLLECTION" Icon={CollectionIcon} />
        <HeaderItem title="SEARCH" Icon={SearchIcon} />
        <HeaderItem title="SIGN IN" Icon={UserIcon} href="/api/auth/login" />
      </div>
      <Image
        className="object-contain"
        src="https://links.papareact.com/ua6"
        alt="Hulu"
        width={200}
        height={100}
      />
    </header>
  )
}

export default Header
