import React, { useState } from 'react';
import { Accordion, Card, CardTitle, AccordionHeader, AccordionItem, AccordionBody } from "reactstrap";
import Projects from '../../Projects';

const Portfolio = (props) => {
    const [open, setOpen] = useState('1');
    const toggle = (id) => {
      if (open === id) {
        setOpen();
      } else {
        setOpen(id);
      }
    };

  return (
    <div className="portfolio-overlay" >
      <main className="portfolio-cards">
        <h3>Some projects I've worked on!...</h3>
        {Projects?.map((project,index) => {
          return (
            <>
            <Accordion open={open} toggle={toggle} key={index}>
              <AccordionItem>
              <AccordionHeader targetId={index}>{project.name}</AccordionHeader>
                <AccordionBody accordionId={index}>
                  <div className='project'>
                    <img alt="project card" src={project.image} className="project-image"/>
                    <strong>{project.description}</strong>
                  </div>
                </AccordionBody>
              </AccordionItem>
            </Accordion>
            </>
          );
        })}
      </main>
    </div>
  );
};

export default Portfolio;