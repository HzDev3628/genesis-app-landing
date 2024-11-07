import Image from 'next/image'
import Link from 'next/link'

const LINKS: { ios: string; android: string } = {
  ios: '/',
  android: '/',
}

export const AppDownloadLinks = ({
  platform,
}: { platform: 'ios' | 'android' }) => {
  return (
    <Link
      href={platform === 'ios' ? LINKS.ios : LINKS.android}
      className="flex items-center justify-center bg-gradient-to-b from-white from-[20%] to-50 rounded-8 px-6 py-2.5 gap-2.5 shadow-[0px_7px_16px_#2895FF20]"
      target="_blank"
    >
      <Image
        src={
          platform === 'ios'
            ? '/mobile-platform/apple-icon.svg'
            : '/mobile-platform/play-market-icon.svg'
        }
        width={24}
        height={24}
        alt={platform}
      />
      <span className="text-lg">
        {platform === 'ios' ? 'Apple Store' : 'Google Play'}
      </span>
    </Link>
  )
}
