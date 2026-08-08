// localStorage functions
export const getPublications = () => {
  const stored = localStorage.getItem('publications');
  return stored ? JSON.parse(stored) : [];
};

export const savePublications = (publications) => {
  localStorage.setItem('publications', JSON.stringify(publications));
};
