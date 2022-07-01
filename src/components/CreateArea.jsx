import React, { useState } from "react";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  const [isExpanded,setExpanded] = useState(false);

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setNote((prevVal) => {
      return {
        ...prevVal,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  function handleClick(){
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
      {isExpanded ?
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={note.title}
        /> : null
      }
        <textarea
          onChange={handleChange}
          onClick={handleClick}
          name="content"
          placeholder="Take a note..."
          value={note.content}
          rows= {isExpanded ? "3" : "1"}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}><AddIcon/></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
