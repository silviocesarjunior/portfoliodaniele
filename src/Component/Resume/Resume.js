import React from 'react';
import Card from './Card';
import ResumeApi from './ResumeApi';
import "./resume.css";

const Resume = () => {
  return (
    <>
      <section className='Resume' id='resume'>
        <div className='container top'>
          <div className='heading text-center'>
            <h4>1 ano de experiência profissional</h4>
            <h1>Meu currículo</h1>
          </div>

          <div className='content-section mtop d_flex'>
            <div className='left'>
              <div className='heading'>
                <h4>2007-2010</h4>
                <h1>Qualificação</h1>
              </div>

              <div className='content'>
                {ResumeApi.map((val, id) => {
                  if (val.category === "education") {
                    return <Card key={id} title={val.title} year={val.year} desc={val.desc} />
                  }
                })}
              </div>
            </div>
            <div className='left'>
              <div className='heading'>
                <h4>2007-2010</h4>
                <h1>Experiência profissional</h1>
              </div>

              <div className='content'>
                {ResumeApi.map((val, index) => {
                  if (val.category === "experience") {
                    return <Card key={index} title={val.title} year={val.year} rate={val.rate} desc={val.desc} />
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Resume