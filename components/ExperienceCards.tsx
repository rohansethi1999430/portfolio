import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

function ExperienceCards({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-5 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[700px] snap-center 
    p-10 bg-[#292929] opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200  overflow-hidden'>
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='h-32 w-32 rounded-full xl:w-[150px] xl:h-[150px]'
        src='/Dell_logo1.png'
        alt=''
      />
      <div className='px-0 md:px-10'>
        <h4 className='text-4xl'>Software Engineer</h4>
        <p className='font-bold text-2xl mt-1'>Dell Technologies</p>
        <div className='flex space-x-2 my-2'>
          {/* Tech used */}
        </div>
        <p className='uppercase py-5 text-gray-300'>Started working ... - Ended working...</p>
        <ul className='list-disc space-y-1 ml-5 text-md'>
          <li>
            Designed and developed workorder initiation, configuration, workflow and submission APIs microservices using Java and Spring Boot, powering Dell’s customer support.
          </li>
          <li>
            Reduced tp99 latency and increased throughput by 42% and 148% respectively by migrating <span className=' underline decoration-[#F7AB0A]/50 '>APIs</span> from Maven to Gradle.
          </li>

          <li>
            Led the effort to set up design and develop, dashboards and alerts for our team’s microservices using React and Java worth 2 million USD onto Dell’s non-production loggings
          </li>
          <li>
            Contributed to CI/CD pipeline integration, unit/functional/integration testing, deployments using Gitlab.
          </li>
          <li>Authored unit tests with Jest and Mockito achieving 90% code coverage</li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCards;