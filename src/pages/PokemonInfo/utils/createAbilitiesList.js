import startCase from "lodash/startCase";

export const createAbilitiesList = (abilities) => {
   if (Array.isArray(abilities)) {
      return abilities.reduce((result, { ability }) => {
         result.push(startCase(ability.name));

         return result;
      }, []);
   }

   return;
};