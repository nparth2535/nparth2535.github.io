import React from 'react'
import './portfolio.css' 
import IMG1 from '../../assests/portfolio1.jpg'
import IMG2 from '../../assests/portfolio2.jpg'
import IMG3 from '../../assests/portfolio3.jpg'
import IMG4 from '../../assests/portfolio4.jpg'
const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>My Projects</h2>

      <div className='container portfolio_container'>
        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
            <img src={IMG1} alt=""></img>
            <h3>Project Title</h3>
            <div className='portfolio_item-cta'>
            <a href='https://github.com' className='btn' target='_blank'>Github</a>
            <a href='https://github.com' className='btn btn-primary'>Live Demo</a>
            </div>
          </div>
        </article>

        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
            <img src={IMG2} alt=""></img>
            <h3>Project Title</h3>
            <div className='portfolio_item-cta'>
            <a href='https://github.com' className='btn' target='_blank'>Github</a>
            <a href='https://github.com' className='btn btn-primary'>Live Demo</a>
            </div>
          </div>
        </article>

        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
            <img src={IMG3} alt=""></img>
            <h3>Project Title</h3>
            <div className='portfolio_item-cta'>
            <a href='https://github.com' className='btn' target='_blank'>Github</a>
            <a href='https://github.com' className='btn btn-primary'>Live Demo</a>
            </div>
          </div>
        </article>

        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
            <img src={IMG4} alt=""></img>
            <h3>Project Title</h3>
            <div className='portfolio_item-cta'>
            <a href='https://github.com' className='btn' target='_blank'>Github</a>
            <a href='https://github.com' className='btn btn-primary'>Live Demo</a>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

export default portfolio