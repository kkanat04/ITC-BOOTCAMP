import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './Dropdown.css'
import 'aos/dist/aos.css';

export default function SimpleAccordion(props) {



    const dropdown__wrap = {
        background: ' rgba(57, 61, 71, 0.7)',
    }

    return (
        <section className={'dropdown'}>
            <div className={'container'}>
                <h2>Программа курса</h2>
                <div data-aos="fade-right" className="dropdown__effect">
                    {props.state.map((el, id) => {
                        return (
                            <Accordion key={id} style={dropdown__wrap}>

                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon/>}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography className={'dropdown__title'}>{el.name}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        <ul className={'dropdown__list'}>
                                            {el.array.map((el, id) => {
                                                return (

                                                    <li key={id}>{el}</li>

                                                )
                                            })
                                            }
                                        </ul>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>

                        )
                    })
                    }
                </div>
            </div>
        </section>
    );
}