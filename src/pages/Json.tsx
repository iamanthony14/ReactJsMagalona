import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Container } from "react-bootstrap";
import CustomNavbar from "../components/Navbar";
import UserCard from "../components/JsonCards";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

const JsonComponent: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const jsonData: User[] = await response.json();
        setUsers(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <CustomNavbar />
      <div className="titletop">
        <h1>JSON DATA</h1>
      </div>
      <Container>
        <div className="jsoncont">
          {users.length === 0 ? (
            <p>Loading...</p>
          ) : (
            <Row xs={1} md={3} lg={4} className="g-4">
              {users.map((user) => (
                <Col key={user.id}>
                  <UserCard user={user} />
                </Col>
              ))}
            </Row>
          )}
        </div>
      </Container>
    </>
  );
};

export default JsonComponent;
