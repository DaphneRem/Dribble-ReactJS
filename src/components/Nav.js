import React from 'react';
import Li from './Li/Li';

class Nav extends React.Component {
// Faire un tableau tabs avec tous les composants du hover
// const tabs = [
//   {name:'Popular', url:'https://dribbble.com/shots/3209946-Focus-Lab-s-End-of-Year-2016-Video'},
//   {name:'Recent', url:'https://dribbble.com/shots/3209946-Focus-Lab-s-End-of-Year-2016-Video'},
//   {name:'Teams ', url:'https://dribbble.com/shots/3209946-Focus-Lab-s-End-of-Year-2016-Video'},
// ]

constructor(props){
  super(props);
    this.Shots = [{
      id : '1',
      url: 'http://www.google.fr',
      title: 'shops'
    },
    {
      id: '2',
      url: 'http://www.google.fr',
      title: 'Popular'
    },
    {
    id: '3',
    url: 'http://www.google.fr',
    title: 'Recent'
    },
    {
    id: '4',
    url: 'http://www.google.fr',
      title: 'Debuts'
    },
    {
    id: '5',
    url: 'http://www.google.fr',
      title: 'Teams'
    },
    {
    id: '6',
    url: 'http://www.google.fr',
      title: 'Playoffs'
    },
    {
    id: '7',
    url: 'http://www.google.fr',
      title: 'Highlights'
    },
    {
    id: '8',
    url: 'http://www.google.fr',
      title: 'Project'
    },
    {
    id: '9',
    url: 'http://www.google.fr',
      title: 'Goods by Designers'
    },
  ];
  this.Designers = [{
    id : '1',
    url: 'http://www.google.fr',
    title: 'shops'
  },
  {
    id: '2',
    url: 'http://www.google.fr',
    title: 'Popular'
  },
  {
  id: '3',
  url: 'http://www.google.fr',
  title: 'Recent'
  },
  {
  id: '4',
  url: 'http://www.google.fr',
    title: 'Debuts'
  },
  {
  id: '5',
  url: 'http://www.google.fr',
    title: 'Teams'
  },
  {
  id: '6',
  url: 'http://www.google.fr',
    title: 'Playoffs'
  },
  {
  id: '7',
  url: 'http://www.google.fr',
    title: 'Highlights'
  },
  {
  id: '8',
  url: 'http://www.google.fr',
    title: 'Project'
  },
  {
  id: '9',
  url: 'http://www.google.fr',
    title: 'Goods by Designers'
  }]
}
    render() {

      const styleNav = {
          height : "60px",
          display : "flex",
          justifyContent : "space-between",
          backgroundColor : "#EA4C89",
          color : "white"
      }
      const stylesLogo = {
      			height : "20px",
            width : "80px"
      }
      const styleUl = {
            listStyleType: "none",
            display : "flex"
      }
      const styleLi = {
            paddingTop : "5px",
            paddingRight : "20px",
            paddingBottom : "10px",
            paddingLeft : "20px"
      }
      const hidden = {
        display : "none"
      }
      // Faire une section type pour toutes les li et changer ses props dans le Nav
      // Faire une section différente pour le search avec un input
        return (
            <div style={styleNav}>
              <ul style={styleUl}>
                <li style={styleLi} ><a href="#"><img style={stylesLogo} src="http://www.logosurfer.com/sites/default/files/dribbble-logo_1.png"/></a></li>
                <Li name={'shots'} dropdown={this.Shots} />
                {/*<Li name={'shots'} tab1={'Popular'} tab2={'Recent'} tab3={'Debuts'} tab4={'Teams'} tab5={'Playoffs'} tab6={'Highlights'} tab7={'Project'} tab8={'Goods by Designers'}/>
               <Li name={'Designers'} tab1={'All'} tab2={'For Hire'} tab3={'Community'} />
                 <Li name={'Teams'} tab1={'All'} tab2={'Hiring Designers'} tab3={'Design Teams for Hire'} tab4={'Add Your Design Team'}/>
                 <Li name={'Community'} tab1={'Places'} tab2={'Meetups'} tab3={'Stories'} tab4={'Podcast'} tab5={'Testimonial'} tab6={'Guidline'}/>
               <Li name={'Jobs'} tab1={'All'} tab2={'Remote / Anywhere'} tab3={'Teams Hiring'} tab4={'Post a Job'}/>
                 <Li name={'...'} tab1={'About'} tab2={'Shop'} tab3={'Support'} tab4={'Buckets'} tab5={'Colors'} tab6={'Tags'} tab7={'Training'} tab8={'Twitter'} tab9={'Facebook'} tab10={'Integrations'}/>*/}
              </ul>
              <ul style={styleUl}>
                <li style={styleLi}>Sign Up</li>
                <li style={styleLi}>Sign in</li>
                <li style={styleLi}>Search</li>
              </ul>


            </div>
            );
    }
}

export default Nav;
