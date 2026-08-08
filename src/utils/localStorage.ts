export const getPublications = () => {
  const data = localStorage.getItem('publications');
  return data ? JSON.parse(data) : [];
};

export const savePublications = (publications) => {
  localStorage.setItem('publications', JSON.stringify(publications));
};
