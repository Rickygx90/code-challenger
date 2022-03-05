import React, { useState } from "react";
import TableFiles from "./components/Files/files";
import { Card, InputGroup, FormControl } from "react-bootstrap";

function App() {
  const [fileName, setFileName] = useState("");

  const handleChange = (event) => {
    setFileName(event.target.value);
  };

  return (
    <div>
      <Card>
        <Card.Header className="d-flex justify-content-between bg-danger text-white">
          <h4 className="text-nowrap mx-4">React Test App</h4>
          <InputGroup style={{width: '400px'}}>
            <InputGroup.Text>File Name</InputGroup.Text>
            <FormControl
              type="text"
              name="fileName"
              value={fileName}
              onChange={handleChange}
            />
          </InputGroup>
        </Card.Header>
        <TableFiles fileName={fileName} />
      </Card>
    </div>
  );
}

export default App;
