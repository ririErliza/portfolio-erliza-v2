import React from 'react'
import ProjectItem from './ProjectItem'
import Title from './Title'
import img1 from '../public/assets/projects/web-reviver.png'
import img2 from '../public/assets/projects/reviveradmin-page.png'

const Projects = () => {
  return (
    <div id='projects' className='py-20'>
      <Title title='Projects'/>

      <div className="grid md:grid-cols-2 gap-8">

                
          <ProjectItem title='NGO Web App' bgImg={img1} desc='React JS, Bootstrap, Express JS, MongoDB' projectUrl='/' codeUrl='/'/>
          <ProjectItem title='Admin Panel' bgImg={img2} desc='React JS, Material UI, Express JS, MongoDB' projectUrl='/' codeUrl='/'/>
      </div>


    </div>
  )
}

export default Projects