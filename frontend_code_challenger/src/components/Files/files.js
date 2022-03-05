import React, { useState, useEffect } from "react";
import { Table, Spinner, Card } from "react-bootstrap";
import axios from "axios";
const host = "http://localhost:5000";
const headers = {
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
  },
};

const TableFiles = ({ fileName }) => {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async function () {
      setLoading(true);
      try {
        const url =
          fileName && fileName.length > 0
            ? `${host}/file/data?fileName=${fileName}`
            : `${host}/files/data`;
        const response = await axios.get(url, headers);
        if (response && response.status === 200) {
          if (Array.isArray(response.data)) {
            setFiles(response.data);
          } else {
            setFiles([response.data]);
          }
        }
      } catch (error) {
        setFiles([]);
      }
      setLoading(false);
    })();
  }, [fileName]);

  if (loading) {
    return (
      <div
        style={{
          display: "block",
          position: "fixed",
          top: "50%",
          right: "50%",
        }}
      >
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  return (
    <div>
      {files && files.length > 0 ? (
        <Card.Body className="p-2 m-2">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>File Name</th>
                <th>Text</th>
                <th>Number</th>
                <th>Hex</th>
              </tr>
            </thead>
            <tbody>
              {files.map(
                (file) =>
                  file.lines.length > 0 &&
                  file.lines.map((line) => (
                    <tr key={file.file + line.text}>
                      <td>{file.file}</td>
                      <td>{line.text}</td>
                      <td>{line.number}</td>
                      <td>{line.hex}</td>
                    </tr>
                  ))
              )}
            </tbody>
          </Table>
        </Card.Body>
      ) : (
        <Card.Body className="d-flex justify-content-center">
          <h3>No existe archivo con ese nombre: {fileName}</h3>
        </Card.Body>
      )}
    </div>
  );
};

export default TableFiles;
