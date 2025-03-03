export const parseIsFavourite = (value) => {
  if (typeof value === 'boolean') return value;
  if (value === 'true') return true;
  if (value === 'false') return false;
  return null;
};

export const parseContactType = (type) => {
  if (typeof type !== 'string') return null;
  const validContactTypes = ['work', 'home', 'personal'];
  const isValidType = validContactTypes.includes(type.toLowerCase());

  return isValidType ? type.toLowerCase() : null;
};

export const parseFilterParams = (query) => {
  const { isFavourite, contactType } = query;

  const parsedIsFavourite = parseIsFavourite(isFavourite);
  const parsedContactType = parseContactType(contactType);

  return {
    isFavourite: parsedIsFavourite,
    contactType: parsedContactType,
  };
};
