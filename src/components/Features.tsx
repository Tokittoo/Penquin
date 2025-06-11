import React from 'react'
import { BentoGrid, BentoGridItem } from '@/components/BentoGrid'

const Features = () => {
  return (
    <div className='md:max-w-3xl mx-auto'>
      <h1 className='mt-16 bg-clip-text text-transparent py-2 max-md:mx-6 relative z-20 font-bold font-sans tracking-tight text-4xl md:text-7xl bg-gradient-to-b from-neutral-900 to-neutral-600 dark:from-neutral-700 dark:to-white'>
        Features
      </h1>
      <BentoGrid className='md:max-w-3xl max-w-[calc(100%-2rem)] mx-auto my-8 md:auto-rows-[12rem]'>
        {features.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            className={item.className}
          />
        ))}
      </BentoGrid>
    </div>
  )
}

const features = [
  {
    title: 'Reconnaissance Templates & Checklists:',
    description: 'Systematic recon for maximum target coverage. Structured workflows for subdomain enumeration, endpoint discovery, and vulnerability scanning to ensure nothing gets missed.',
    className: 'md:col-span-2'
  },
  {
    title: 'Ready-to-Use Command Templates:',
    description: 'Save time with pre-built commands for scanning, exploitation, and automation. ',
    className: 'md:col-span-1'
  },
  {
    title: 'In-Depth Security Writeups:',
    description: 'Curated breakdowns of past bug bounty successes and methodology deep dives to sharpen your skills.',
    className: 'md:col-span-1'
  },
  {
    title: 'Must-Have Browser Extensions:',
    description: 'Enhance efficiency with critical security tools at your fingertips. Handpicked extensions for passive scanning, request tampering, and vulnerability detection — integrated seamlessly into your browser.',
    className: 'md:col-span-2'
  }
]

export default Features