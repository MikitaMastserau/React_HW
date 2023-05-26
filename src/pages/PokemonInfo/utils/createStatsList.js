import camelCase from "lodash/camelCase";

export const createStatsList = (stats) => {
   if (Array.isArray(stats)) {
      return stats.reduce((result, { base_stat, stat }) => {
         result[camelCase(stat.name)] = base_stat;

         return result;
      }, {});
   }

   return;
};