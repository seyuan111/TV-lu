import React from 'react'
import Image from 'next/image'
import HeaderItem from './HeaderItem'
import {BadgeCheckIcon, HomeIcon, CollectionIcon, LightningBoltIcon, SearchIcon, UserIcon} from '@heroicons/react/outline'

const Header = () => {
  return (
    <div className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
        <div className="flex flex-grow justify-evenly max-w-2xl">
          <HeaderItem title="HOME" Icon={HomeIcon} />
          <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
          <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
          <HeaderItem title="COLLECTION" Icon={CollectionIcon} />
          <HeaderItem title="SEARCH" Icon={SearchIcon} />
          <HeaderItem title="ACCOUNT" Icon={UserIcon} />
        </div>
        <Image 
            className="object-contain"
            src="https://static.vecteezy.com/system/resources/previews/007/688/855/original/tv-logo-free-vector.jpg"
            width={70}
            height={70}
            alt='/'
        />
    </div>
  )
}

export default Header