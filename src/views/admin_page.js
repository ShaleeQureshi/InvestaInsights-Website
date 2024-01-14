import React, { useEffect, useState } from "react";
import { Footer, InvestaNav, Jumbo } from "../components";
import {
  Col,
  Container,
  Dropdown,
  Row,
  Table,
  Form,
  Button,
} from "react-bootstrap";
import FileTable from "../components/filetable";
import { database, storage } from "../scripts/firebase/config";
import { ref, onValue } from "@firebase/database";
import firebase_functions from "../scripts/firebase/firebase_functions";

const Admin_Page = () => {
  const [viewAllUsers, setViewAllUsers] = useState(false);
  const [uploadResources, setUploadResources] = useState(false);
  const [viewAllResources, setViewAllResources] = useState(false);
  const [viewSponsorRequests, setViewSponsorRequests] = useState(false);

  const [normalUserList, setNormalUserList] = useState([]);
  const [adminUserList, setAdminUserList] = useState([]);
  const [sponsorList, setSponsorList] = useState([]);

  //
  const [file_path, setFile_path] = useState();
  const [file, setFile] = useState();

  const getUserList = () => {
    const userRef = ref(database, "/normal-users");

    onValue(userRef, (snapshot) => {
      const data = snapshot.val();
      setNormalUserList((prevNormalUserList) => Object.values(data));
    });
    const adminRef = ref(database, "/admin-users");
    onValue(adminRef, (snapshot) => {
      const data = snapshot.val();
      setAdminUserList((prevAdminUserList) => Object.values(data));
    });
  };

  const getSponsorRequest = () => {
    const sponsorRef = ref(database, "/sponsors");

    onValue(sponsorRef, (snapshot) => {
      const data = snapshot.val();
      setSponsorList((prevSponsorList) => Object.values(data));
    });
  };

  const makeAllFalse = () => {
    setViewAllResources(false);
    setUploadResources(false);
    setViewAllUsers(false);
    setViewSponsorRequests(false);
  };

  return (
    <div className="admin-page">
      <div className="wrapper">
        <InvestaNav />
        <Jumbo
          elements={
            <div className="jumbo-admin">
              <h1>Admin Portal</h1>
              <p>Only accessible to the Investa Presidents & Technical Team</p>
            </div>
          }
        />
        <Container>
          <Dropdown className="mt-4 mb-4 text-center">
            <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
              Select Admin Functionality
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item
                onClick={() => {
                  if (!viewAllUsers) {
                    makeAllFalse();
                    getUserList();
                    setViewAllUsers(true);
                  } else {
                    setViewAllUsers(false);
                  }
                }}>
                View All Users
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  if (!uploadResources) {
                    makeAllFalse();
                    setUploadResources(true);
                  } else {
                    setUploadResources(false);
                  }
                }}>
                Upload / Remove Resources
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  if (!viewAllResources) {
                    makeAllFalse();
                    setViewAllResources(true);
                  } else {
                    setViewAllResources(false);
                  }
                }}>
                View All Resources
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  if (!viewSponsorRequests) {
                    makeAllFalse();
                    getSponsorRequest();
                    setViewSponsorRequests(true);
                  } else {
                    setViewSponsorRequests(false);
                  }
                }}>
                View Sponsor Requests
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          {/* Drop Down Items */}

          {/* View All Users */}

          {viewAllUsers ? (
            <div>
              <Row>
                <Col>
                  <h3>User Table</h3>
                  <Table id="admin-table">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                      </tr>
                    </thead>
                    <tbody>
                      {normalUserList.map((row, index) => {
                        console.log(row);
                        return (
                          <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{row.first_name}</td>
                            <td>{row.last_name}</td>
                            <td>{row.email}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                </Col>
                <Col>
                  <h3>Admin User Table</h3>
                  <Table id="admin-table">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                      </tr>
                    </thead>
                    <tbody>
                      {adminUserList.map((row, index) => {
                        console.log(row);
                        return (
                          <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{row.first_name}</td>
                            <td>{row.last_name}</td>
                            <td>{row.email}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                </Col>
              </Row>
            </div>
          ) : null}

          {/* Upload Resources */}

          {uploadResources ? (
            <div>
              <Row>
                <Col>
                  <h3>Upload Resources</h3>
                  <Form
                    onSubmit={(e) => {
                      e.preventDefault();
                      const filePath =
                        document.getElementById("file_path").value;
                      firebase_functions.upload_file(filePath, file);
                    }}>
                    <Form.Label>Enter File Path</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="E.g. /Interview-Prep-Materials/Limestone"
                      id="file_path"
                      required
                    />
                    <Form.Control
                      type="file"
                      className="mt-3"
                      required
                      multiple
                      onChange={(e) => {
                        setFile(e.target.files);
                      }}
                    />
                    <Button
                      className="mt-3"
                      variant="outline-dark"
                      type="submit">
                      Upload File
                    </Button>
                  </Form>
                  <h3 className="mt-5">Remove Resources</h3>
                  <Form
                    onSubmit={(e) => {
                      e.preventDefault();
                      const filePath =
                        document.getElementById("file_path_remove").value;
                      const directory =
                        document.getElementById("dir_check").value;
                      firebase_functions.delete_files(filePath, directory);
                    }}>
                    <Form.Label>Enter File Path</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="E.g. /Interview-Prep-Materials/Limestone"
                      id="file_path_remove"
                      required
                    />
                    <Form.Check
                      className="mt-3"
                      label="Is this a directory?"
                      id="dir_check"
                    />
                    <Button
                      className="mt-3"
                      variant="outline-dark"
                      type="submit">
                      Remove File(s)
                    </Button>
                  </Form>
                </Col>
                <Col>
                  <FileTable />
                </Col>
              </Row>
            </div>
          ) : null}

          {/* View All Resources */}
          {viewAllResources ? <FileTable /> : null}

          {/* View Sponsor Requests */}
          {viewSponsorRequests ? (
            <div>
              {" "}
              <h3>Sponsor Requests</h3>
              <Table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Organization Name</th>
                    <th>Requestor's Name</th>
                    <th>Requestor's Email</th>
                    <th>Message</th>
                    <th>Date Requested</th>
                  </tr>
                </thead>
                <tbody>
                  {sponsorList.map((row, index) => {
                    console.log(row);
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{row.organization}</td>
                        <td>{row.name}</td>
                        <td>{row.email}</td>
                        <td>{row.message}</td>
                        <td>{row.date}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </div>
          ) : null}
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default Admin_Page;
