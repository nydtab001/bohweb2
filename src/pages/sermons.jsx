import React from "react";
import { Helmet } from "react-helmet";
//import logo from './logo.svg';
//import './App.css';
import { AlpsContextProvider } from 'alps-react'
import { Body,/* Div, Button, Blockquote, MediaBlock,
  Sabbath, */BasicPage, Image
} from '../alps-components'; // Import from your custom file
//import { BOH } from './boh';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import sermons from '../data/sermons.json'; // Adjust the path as necessary

const date = new Date();

function Sermons() {
  return (
    <AlpsContextProvider>
      <Helmet>
        <title>
          Sermons - Beacon of Hope Sevnth-day Adventist Church
        </title>
      </Helmet>
      <Body primaryColor="denim" l-wrap>
        <div >
        <BasicPage
          content={<><iframe
  src="https://drive.google.com/file/d/1Jnx91Q5494QVCISYMcghk_hAd-NNr4LR/preview"
  width="300"
  height="60"
  allow="autoplay"
  title="Audio Sermon"
  style={{ border: 'none' }}
></iframe>
<div className="p-4 max-w-7xl mx-auto">
  <h1 className="text-3xl font-bold mb-6">Sermons</h1>
  
  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
    {sermons.map((sermon, index) => (
      <div key={index} className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-xl font-semibold">{sermon.title}</h2>
        <p className="text-gray-600 text-sm mb-2">{sermon.date}</p>
        <audio controls className="w-full">
          <source src={sermon.audioUrl} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <p className="text-gray-700 mt-2">{sermon.description}</p>
      </div>
    ))}
  </div>
  </div>
          </>}
          footer={{
                                   address: {
                                     
                                   },
                                   copyright: (
                                     <>
                                     <div style={{width:"100%",display:"flex"}}>
                                     <FontAwesomeIcon icon={faFacebookF} style={{fontSize:22,paddingRight:"1rem"}}/>
                                     <FontAwesomeIcon icon={faYoutube} style={{fontSize:22,paddingRight:"1rem"}}/>
                                     <FontAwesomeIcon icon={faInstagram} style={{fontSize:22,paddingRight:"1rem"}}/>
                                     <br>
                                     </br>
                                     </div>
                                     <div style={{marginTop:"1rem"}}>
                                     Copyright ©{date.getFullYear()} Beacon of Hope Seventh-Day Adventist Church
                                     </div>
                                     </>
                                   ) ,
                                 //  'Copyright ©'+date.getFullYear()+' Beacon of Hope Seventh-Day Adventist Churchghgggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggghhhhhhhhhhhhhhhhmmmmmmmmmmmmmmmmmmmmmmmmmmm',
                                   primaryNav: {
                                     items: [
                                       {
                                         text: (
                                           <>
                                           <h3 style={{fontSize:22,textTransform: "none",paddingTop:"5px"}}><strong>Quick Links</strong></h3>
                                           <br/>
                                           <br/>
                                           </>
                                         ),
                                         //url: 'https://www.facebook.com/beaconofhopezw'
                                       },
                                       {
                                         text:(
                                           <>
                                           <div style={{textTransform:"none",fontSize:18,fontWeight:"normal"}}>
                                               Home
                                           </div>
                                           </>
                                         ),
                                         url:'/'
                                       },
                                       {
                                         text: (
                                           <>
                                           <div style={{textTransform:"none",fontSize:18,fontWeight:"normal"}}>
                                               About Us
                                           </div>
                                           </>
                                         ),
                                        // url: 'https://www.youtube.com/@beaconofhopesdazw'
                                        url: '/about'
                                       },
                                       {
                                         text: (
                                           <>
                                           <div style={{textTransform:"none",fontSize:18,fontWeight:"normal"}}>
                                               Ministries
                                           </div>
                                           </>
                                         ),
                                         url: '/ministries'
                                        // url: 'beaconofhope@wzc.adventist.org'
                                       },
                                       {
                                         text: (
                                           <>
                                           <div style={{textTransform:"none",fontSize:18,fontWeight:"normal"}}>
                                               Contact
                                           </div>
                                           </>
                                         ),
                                         url: '/contact'
                                       }
                                     ]
                                   },
                                   
                                   text: (
                                     <>
                                       <h3 style={{fontSize:22}}><strong>Service Times</strong></h3>
                                       <br />
                                       <div style={{fontSize:18,lineHeight:'1.8'}}>
                                       <strong>Sabbath School:</strong> Saturday, 9:00 AM – 10:00 AM
                                       <br />
                                       <strong>Main Service:</strong> Saturday, 10:30 AM – 12:00 PM
                                       <br />
                                       <strong>Afternoon Service:</strong> Saturday, 2:00 PM – 4:00 PM
                                       <br />
                                       <strong>Vespers:</strong> Saturday, Sunset</div>
                                       <br />
                                       <br />
                                     </>
                                   ),
                       }}
          header={{
                drawer: {
                  aboutLeft: 'Tell the world is an offical media production of the Seventh-day Adventist world church.',
                  aboutRight: 'Seventh-day Adventists are devoted to helping people understand the Bible to find freedom, healing and hope.',
                  hasPriorityNav: false,
                  
                  search: {
                    onSearch: undefined,
                    placeholder: 'Search...',
                    suggestions: undefined,
                    term: undefined,
                    title: 'Search'
                  },
                  showMenu: true,
                  showSearch: true,
                  simulateHeader: undefined
                },
                logo: {
                  canBeDark: undefined,
                  element: <Image alt="boh logo" src="/bohlogo.png" />,
                  link: '/',
                  useFillTheme: true
                },
                primaryNav: {
                  hasPriorityNav: false,
                  items: [
                    /*{
                      subnav: [
                        {
                          text: 'Assistant to the President for Evangelism',
                          url: '#'
                        },
                        {
                          text: 'Global Mission',
                          url: '#'
                        },
                        {
                          text: 'Mission Spotlight',
                          url: '#'
                        },
                        {
                          text: 'Church Mission Offerings',
                          url: '#'
                        }
                      ],
                      text: 'Leadership Certification',
                      url: '#'
                    },*/
                    {
                      text: 'Home',
                      url: '/'
                    },
                    {
                      subnav: [
                        {
                          text: 'Official Beliefs',
                          url: 'https://www.adventist.org/beliefs/'
                        },
                        {
                          text: 'Church Manual',
                          url: 'https://www.adventist.org/beliefs/'
                        },
                        {
                          subnav: [
                            {
                              text: 'Pastor',
                              url: '#'
                            },
                            {
                              text: 'Elders',
                              url: '#'
                            },
                            {
                              text: 'Department Leaders',
                              url: '#'
                            },
                          ],
                          text: 'Church Leaders',
                          url: '#'
                        },
                      ],
                      text: 'About Us',
                      url: '/about'
                    },
                    {
                      subnav: [
                        {
                          text: 'Life Hope Centers',
                          url: '#'
                        },
                        {
                          text: 'Global Mission',
                          url: '#'
                        },
                        {
                          text: 'Mission Spotlight',
                          url: '#'
                        },
                        {
                          text: 'Church Mission Offerings',
                          url: '#'
                        }
                      ],
                      text: 'Ministries',
                      url: '/ministries'
                    },
                    {
                      subnav: [
                        {
                          text: 'Sermons',
                          url: '/media/sermons'
                        }
                      ],
                      text: 'Media',
                      url: '#'
                    },
                    /*{
                      active: true,
                      text: 'Beliefs',
                      url: '#'
                    },*/
                   /* {
                    //  priority: true,
                      subnav: [
                        {
                          text: 'General Conference',
                          url: '#'
                        },
                        {
                          text: 'East-Central Africa',
                          url: '#'
                        },
                        {
                          subnav: [
                            {
                              text: 'Atlantic Union',
                              url: '#'
                            },
                            {
                              text: 'Canadian Union',
                              url: '#'
                            },
                            {
                              text: 'Columbia Union',
                              url: '#'
                            },
                            {
                              text: 'Lake Union',
                              url: '#'
                            }
                          ],
                          text: 'North America',
                          url: '#'
                        },
                        {
                          text: 'Middle East and North Africa',
                          url: '#'
                        }
                      ],
                      text: 'World Church',
                      url: '#'
                    },*/
                    // {
                    //   subnav: [
                    //     {
                    //       text: 'News Item 1',
                    //       url: '#'
                    //     },
                    //     {
                    //       text: 'News Item 2',
                    //       url: '#'
                    //     },
                    //     {
                    //       text: 'News Item 3',
                    //       url: '#'
                    //     },
                    //     {
                    //       text: 'News Item 4',
                    //       url: '#'
                    //     }
                    //   ],
                    //   text: 'News',
                    //   url: '#'
                    // },
                     {
                      text: 'Contact Us',
                      url: '/contact'
                    },
                  ]
                },
                secondaryNav: {
                  items: [
                  /*{
                      icon: 'language',
                      subnav: [
                        {
                          text: 'English',
                          url: '/en'
                        },
                        {
                          text: 'Español',
                          url: '/es'
                        },
                        {
                          text: 'Português',
                          url: '/pt'
                        },
                        {
                          text: 'Français',
                          url: '/fr'
                        }
                      ],
                      text: 'Language',
                      url: '#'
                    },
                    {
                      icon: 'subscribe',
                      text: 'Sitemap',
                      url: '#'
                    },
                    {
                      icon: 'find',
                      text: 'Find a Church',
                      url: '#'
                    },
                    {
                      icon: 'contact',
                      text: 'Contact',
                      url: '#'
                    },
                    {
                      icon: 'heart',
                      text: 'Press',
                      url: '#'
                    }*/
                  ],
                  showMenu: true,
                  showSearch: true,
                  simulateHeader: undefined
                }
          }}
          pageHeader={{
                title: 'Sermons',
          }}
          sabbath={{
                backgroundImage: undefined,
                hideLogoOnTop: false,
                showLogo: true,
                stickyLogo: true
          }}
        />
        </div>
      </Body>
    </AlpsContextProvider>
  );
}

export default Sermons;