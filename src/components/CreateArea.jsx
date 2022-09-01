import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import { Fab, Zoom } from '@mui/material';

function CreateArea(props) {

  const [isExpanded, setExpanded] = useState(false)

  const handleExpand = () => {
    setExpanded(true)
  }

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
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

  return (
    <div>
      <form className="create-note">
        {isExpanded ? <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        /> : null}

        <textarea
          name="content"
          onClick={handleExpand}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded ? "3" : "1"}
        />
        {/* <button onClick={submitNote}> */}
          <Zoom in={isExpanded} onClick={submitNote}>
            <Fab aria-label="add">
                <AddIcon />
            </Fab>
          </Zoom>
        {/* </button> */}
      </form>
    </div>
  );
}

export default CreateArea;
