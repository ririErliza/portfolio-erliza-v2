import React from 'react'
import ProjectItem from './ProjectItem'
import Title from './Title'
import img1 from '../public/assets/images/webReviver.png'
import img2 from '../public/assets/images/reviveradminPage.png'

const Projects = () => {
  return (
    <div id='projects' className='py-20'>
      <Title title='Projects'/>

      <div className="grid md:grid-cols-2 gap-8">

                
          <ProjectItem title='NGO Web App' bgImg={img1} desc='React JS, Bootstrap, Express JS, MongoDB' projectUrl='https://reviver-org.vercel.app/' codeUrl='https://github.com/ririErliza/capstone-project-v3'/>
          <ProjectItem title='Admin Panel' bgImg={img2} desc='React JS, Material UI, Express JS, MongoDB' projectUrl='https://reviver-admin.vercel.app/' codeUrl='https://github.com/ririErliza/capstone-project-admin-panel'/>
      </div>


    </div>
  )
}

export default Projects