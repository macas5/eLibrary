import { Autocomplete, Button, TextField } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import axios from 'axios';
import { useState } from 'react';
import './ManageBooks.css';

const ManageBooks = ({ user, books, backendUrl }) => {
  const emptyBook = {
    title: '',
    author: '',
    publicationDate: '',
    imageLink: '',
    form: 'Printed',
    language: 'English',
    isReleased: false,
    isReadableOnline: false,
  };
  const [book, setBook] = useState(emptyBook);
  const [success, setSuccess] = useState('');

  const handleInputName = (e, value) => {
    setBook(value ? value : emptyBook);
  };

  const handleInputChange = (e) => {
    setBook((prev) => ({
      ...prev,
      ...(!['isReleased', 'isReadableOnline'].includes(e.target.name)
        ? { [e.target.name]: e.target.value }
        : { [e.target.name]: `${e.target.checked}` }),
    }));
  };

  const handleSubmit = async (method) => {
    try {
      setSuccess('');
      if (method === 'new') {
        await axios.post(`${backendUrl}/book/new`, book, {
          withCredentials: true,
        });
        setSuccess('New book was created!');
        return;
      }

      if (method === 'update') {
        await axios.put(`${backendUrl}/book/update/${book._id}`, book, {
          withCredentials: true,
        });
        setSuccess('A book has been successfuly updated!');
        return;
      }

      if (method === 'delete') {
        await axios.delete(`${backendUrl}/book/delete/${book._id}`, {
          withCredentials: true,
        });
      }
      setSuccess('A book has been deleted!');
      return;
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="manageBooks">
      <div className="manageBooksWrapper">
        <div className="bookSelector">
          <Autocomplete
            options={books}
            getOptionLabel={(option) => (option.title ? option.title : option)}
            onChange={handleInputName}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Books"
              />
            )}
          />
        </div>
        <div className="bookDetails">
          <div className="padding-15"></div>
          <TextField
            label="Title"
            value={book.title}
            onChange={handleInputChange}
            name="title"
            type="text"
          ></TextField>
          <div className="padding-15"></div>
          <TextField
            label="Author"
            value={book.author}
            onChange={handleInputChange}
            name="author"
            type="text"
          ></TextField>
          <div className="padding-15"></div>
          <TextField
            label="Publication date"
            value={book.publicationDate}
            onChange={handleInputChange}
            name="publicationDate"
            type="text"
          ></TextField>
          <div className="padding-15"></div>
          <TextField
            label="Image link"
            value={book.imageLink}
            onChange={handleInputChange}
            name="imageLink"
            type="text"
          ></TextField>
          <div className="padding-15"></div>
          <label htmlFor="form">Form:</label>          
          <select
            value={book.form}
            onChange={handleInputChange}
            name="form"
          >
            <option value="Printed">Printed</option>
            <option value="Electronic">Electronic</option>
          </select>
          <div className="padding-15"></div>
          <label htmlFor="language">Language:</label>
          <select
            value={book.language}
            onChange={handleInputChange}
            name="language"
          >
            <option value="English">English</option>
            <option value="French">French</option>
            <option value="Latvian">Latvian</option>
            <option value="Lithuanian">Lithuanian</option>
          </select>
          <div className="padding-15"></div>
          <label htmlFor="isReleased">
            Released?:{' '}
            <Checkbox
              checked={book.isReleased === 'true'}
              onChange={handleInputChange}
              name="isReleased"
              type="checkbox"
            ></Checkbox>
          </label>

          <label htmlFor="isReadableOnline">
            Readable Online?:{' '}
              <Checkbox
                checked={book.isReadableOnline === 'true'}
                name="isReadableOnline"
                onChange={handleInputChange}
                type="checkbox"
              />
          </label>
        </div>
        <div className="submitButtons">
          <Button
            variant="outlined"
            color="success"
            onClick={() => handleSubmit('new')}
          >
            New Book
          </Button>
          <Button
            variant="outlined"
            color="warning"
            onClick={() => handleSubmit('update')}
          >
            Update Book
          </Button>
          <Button
            variant="outlined"
            color="error"
            onClick={() => handleSubmit('delete')}
          >
            Delete Book
          </Button>
        </div>
        {success && <p className="success">{success}</p>}
      </div>
      <div className="imagePreview">
        <p>Image preview:</p>
        {book.imageLink && (
          <img
            src={book.imageLink}
            alt=""
          />
        )}
      </div>
    </div>
  );
};

export default ManageBooks;
