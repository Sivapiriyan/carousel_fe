/**
 * Get cats pictures
 * @param {number} length
 * @returns {Promise<Array<{ title: string, url:string }>}
 */
export const getImages = (length = 5) => {
  return fetch(`http://localhost:3600/api/carousel?slides=${length}`)
    .then((response) => response.json())
    .then((response) => {
      return response;
    });
};
