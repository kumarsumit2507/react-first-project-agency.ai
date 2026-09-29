import React from 'react'
import Title from '../Title'
import assets from '../assets/assets'
import { motion } from 'motion/react'

const Ourwork = () => {

    const workdata = [
        {
            title: 'Mobile App Marketing',
            description: 'We turn ideas into powerful digital solutions that connect, engage...',
            image: assets.work_mobile_app
        },
        {
            title: 'Dashboard Management',
            description: 'We help you execute  your plan and deliver results',
            image: assets.work_dashboard_management
        },
        {
            title: 'Fitness App Promotion',
            description: 'We help you create a marketing  strategy that drives results.',
            image: assets.work_fitness_app
        },
    ]

    return (
        <div id='our-work' className='flex flex-col items-center gap-7 px-4 sm:px-12 lh:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
            <Title title='Our Latest Work' desc='From Strategy to execution, we craft digital solutions that move your business forward.' />

            <div

                className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl'>
                {
                    workdata.map((work, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }} key={index}
                            className='hover:scale-102 duration-500 transition-all cursor-pointer'>
                            <img src={work.image} alt="" className='w-full rounded-xl' />
                            <h3 className='mt-3 mb-2 text-lg font-semibold'>{work.title}</h3>
                            <p className='text-sm opacity-60 w-5/6'>{work.description}</p>
                        </motion.div>

                    ))
                }

            </div>
        </div>
    )
}

export default Ourwork