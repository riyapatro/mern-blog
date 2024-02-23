import { Footer } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'
import { BsFacebook, BsInstagram, BsTwitter, BsGithub, BsDribbble } from 'react-icons/bs';

const FooterCom = () => {
  return (
    <Footer container className='border border-t-8 border-teal-400'>
        <div className="w-full max-w-7xl mx-auto">
            <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
                <div className='mt-5'>
                <Link to="/" className='whitespace-nowrap self-center text-lg sm:text-xl font-semibold dark:text-white'>
                    <span className='px-2 py-1 mr-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md text-white'>Riya's</span>
                    <span>Blog</span>
                    </Link>
                </div>
                <div className='grid grid-cols-2 gap-9 sm:mt-4 sm:grid-cols-3 sm:gap-6'>
                    <div>
                    <Footer.Title title='About'/>
                    <Footer.LinkGroup col>
                        <Footer.Link
                         href='https://movixdummy.netlify.app/'
                         target='_blank'
                        >
                            Movixx Project
                        </Footer.Link>

                        <Footer.Link
                         href='/about'
                         target='_blank'
                        >
                           Riys's Blog
                        </Footer.Link>
                    </Footer.LinkGroup>

                    </div>

                    <div>
                    <Footer.Title title='Follow us'/>
                    <Footer.LinkGroup col>
                        <Footer.Link
                         href='https://www.linkedin.com/in/riyapatro/'
                         target='_blank'
                        >
                            Linkedin
                        </Footer.Link>

                        <Footer.Link
                         href='https://github.com/riyapatro'
                         target='_blank'
                        >
                           Github
                        </Footer.Link>
                    </Footer.LinkGroup>

                    </div>

                    <div>
                    <Footer.Title title='Legal'/>
                    <Footer.LinkGroup col>
                        <Footer.Link
                         href='#'
                        >
                           Privacy Policy
                        </Footer.Link>

                        <Footer.Link
                         href="#"
                        >
                          Terms & Conditions
                        </Footer.Link>
                    </Footer.LinkGroup>

                    </div>

                </div>
            </div>
            <Footer.Divider/>
            <Footer.Copyright
            href='#'
            by="Riya's Blog"
            year={new Date().getFullYear()}
            />

         <div className="flex gap-6 sm:mt-2 mt-4 sm:justify-center">
            <Footer.Icon href='#' icon={BsFacebook}/>
            <Footer.Icon href='#' icon={BsInstagram}/>
            <Footer.Icon href='#' icon={BsTwitter}/>
            <Footer.Icon href='https://github.com/riyapatro' icon={BsGithub}/>
            <Footer.Icon href='#' icon={BsDribbble}/>

          </div>
        </div>  
     
    </Footer>
  )
}

export default FooterCom
