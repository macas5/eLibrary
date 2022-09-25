import { Autocomplete, Button, TextField } from '@mui/material';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import './SendMessage.css';

const SendMessage = ({ user, backendUrl }) => {
  const [users, setUsers] = useState([]);
  const [success, setSuccess] = useState('');
  const [recipient, setRecipient] = useState('');
  const [message, setMessage] = useState({
    from: user.name,
    date: new Date().toJSON().slice(0, 10),
    topic: '',
    content: '',
  });

  const handleInputName = (e, value) => {
    setRecipient(value._id);
  };

  const handleInput = (e) => {
    setMessage((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = () => {
    const recipientUser = users.find((user) => user._id === recipient);
    const newMessages = recipientUser.messages;
    newMessages.unshift(message);
    try {
      axios.put(
        `${backendUrl}/user/update/${recipient}`,
        { messages: newMessages },
        { withCredentials: true }
      );
      setSuccess('Message has been sent successfully');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(`${backendUrl}/user/users`, {
          withCredentials: true,
        });
        setUsers(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [backendUrl]);

  return (
    <div className="sendMessage">
      <div className="recipient">
        <Autocomplete
          value={message.name}
          options={users}
          getOptionLabel={(option) => (option.name ? option.name : option)}
          onChange={handleInputName}
          renderInput={(params) => (
            <TextField
              {...params}
              label="name"
            />
          )}
        />
      </div>
      <div className="topic">
        <TextField
          name="topic"
          onChange={handleInput}
          label="topic"
        />
      </div>
      <div className="message">
        <TextField
          name="content"
          onChange={handleInput}
          label="message"
        />
      </div>
      <div className="submit">
        <Button
          color="success"
          variant="outlined"
          onClick={handleSubmit}
        >
          Send
        </Button>
      </div>
      {success && <p className="success">{success}</p>}
    </div>
  );
};

export default SendMessage;
