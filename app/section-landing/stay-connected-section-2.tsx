import Image from 'next/image'
import { Card } from '../components/ui'

export function StayConnectedSection2() {
  return (
    <section className="container flex flex-col items-center gap-8">
      <h2 className='text-[32px] font-bold text-center leading-10'>
        Stay connected <br />
        with church everywhere
      </h2>
      <div className="grid grid-cols-3 grid-rows-3 w-full gap-8">
        {ITEMS.map(({ title, description, icon }) => (
          <Card key={title}>
            <Image src={icon} width={60} height={60} alt={title} />
            <div className="flex flex-col items-center gap-3">
              <h4 className="text-xl font-medium text-grey-100">{title}</h4>
              <span className="text-grey-500 whitespace-pre-wrap">{description}</span>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}

const ITEMS: {
  title: string
  description: string
  icon: `/2-section-stay-connected/${string}.svg`
}[] = [
  {
    title: 'Announcements',
    description: 'Let others know what is\ngoing on at your church',
    icon: '/2-section-stay-connected/announcements.svg',
  },
  {
    title: 'Broadcasts',
    description: 'Invite nearby churches to\n attend and support programs',
    icon: '/2-section-stay-connected/broadcasts.svg',
  },
  {
    title: 'Calendar',
    description:
      'Add events to the calendar and\n notify all church members instantly',
    icon: '/2-section-stay-connected/calendar.svg',
  },
  {
    title: 'Community Services',
    description:
      'Let your community know how\n church can be a blessing to them.',
    icon: '/2-section-stay-connected/community-services.svg',
  },
  {
    title: 'Members Directory',
    description:
      'Get the list of members, birthdays,\n anniversaries and roles within the church.',
    icon: '/2-section-stay-connected/members.svg',
  },
  {
    title: 'Messages',
    description: 'Send and manage your church\n messages from all over the world',
    icon: '/2-section-stay-connected/messages.svg',
  },
  {
    title: 'Outreach',
    description:
      'Keep track of leads within community and\n assign members to follow-up with them.',
    icon: '/2-section-stay-connected/outreach.svg',
  },
  {
    title: 'Permissions',
    description:
      'Build church community by delegating\n roles and permissions to members',
    icon: '/2-section-stay-connected/permissions.svg',
  },
  {
    title: 'Potluck',
    description:
      'Turn pot-luck into pot-managed by \nletting members collaborate on dishes.',
    icon: '/2-section-stay-connected/potluck.svg',
  },
]
