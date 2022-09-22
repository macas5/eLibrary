export const user = {
  username: 'usrnm',
  name: 'User Name',
  booksOwned: ['2', '3', '5'],
  email: 'usrname@email.com',
};

const Book = (
  title,
  author,
  publicationDate,
  imageLink,
  form,
  language,
  isReleased,
  isReadableOnline,
  id = ''
) => {
  return {
    title: title,
    author: author,
    form: form,
    publicationDate: publicationDate,
    imageLink: imageLink,
    language: language,
    isReleased: isReleased,
    isReadableOnline: isReadableOnline,
    id: id,
  };
};

export const books = [
  new Book(
    'In Search of Lost time',
    'Marcel Proust',
    2005,
    '',
    'Printed',
    'English',
    'true',
    'false',
    '1'
  ),
  new Book(
    'Ulysses',
    'James Joyse',
    1950,
    '',
    'Printed',
    'French',
    'false',
    'false',
    '2'
  ),
  new Book(
    'Don Quixote',
    'Muigel de Cervantes',
    1873,
    '',
    'Electronic',
    'Latvian',
    'true',
    'true',
    '3'
  ),
  new Book(
    'One Hundred Years of Solitude',
    'Gabriel Garcia Marquez',
    1701,
    '',
    'Printed',
    'Lithuanian',
    'false',
    'true',
    '4'
  ),
  new Book(
    'The Great Gatsby',
    'F. Scott Fitzgerald',
    1992,
    '',
    'Electronic',
    'English',
    'true',
    'false',
    '5'
  ),
];
