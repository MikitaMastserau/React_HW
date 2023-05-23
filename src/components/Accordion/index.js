import MaterialAccordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";


export const Accordion = (title, children) => {
   return (
      <MaterialAccordion>
         <AccordionSummary>
            <Typography>{title}</Typography>
         </AccordionSummary>
         <AccordionDetails>{children}</AccordionDetails>
      </MaterialAccordion>
   )
};