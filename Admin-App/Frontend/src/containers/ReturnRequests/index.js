// import { Button } from 'bootstrap'
import React, { useEffect } from 'react' 
import { Card, Col, Container, Row, Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { getAllReturnRequests , returnRequestAccepted , returnRequestDeclined} from '../../actions';
import Layout from '../../components/Layout' 
 
export default function AllReturnRequests() {
 
  const allTheReturnRequest = useSelector(state => state.allReturnRequest);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllReturnRequests());
  }, []);

  const renderReturnRequests = () => {

    let c = allTheReturnRequest.allReturnRequests.returnRequests;

    console.log(c.length); // array of elements
  }


  return (

    !allTheReturnRequest.allReturnRequests.returnRequests ?
    <Layout>
      <h1>Add Return Requests !!</h1>
      </Layout>
      :
      (
        
        <div>
      <Layout>
        <Container>

          <Row style={{ marginTop: '80px' }}>

            <Col md={{ span: 6, offset: 3 }}>
          
            <h1>Bicycle Return Requests</h1>

              {/* {renderPost()} */}

              {allTheReturnRequest.allReturnRequests.returnRequests.map((returnRequest) => (
                    

                    <Card style={{ width: '35rem', margin: '10px' }}>
                    <Card.Body>
                      <Card.Title> Return Request Id : {returnRequest._id} </Card.Title>
                      <Card.Text>
                        User Requesting : {returnRequest.userRequested}
                      </Card.Text>

                      <Card.Text>
                        Bicycle Return Request : {returnRequest.bicycleRequested}
                      </Card.Text>

                      <Card.Text>
                        User Id Requesting : {returnRequest.requestedBy}
                      </Card.Text>

                      
                      <Card.Text>
                        Bicycle Id Requested For : {returnRequest.requestedBicycle}
                      </Card.Text>
                      

                      {/* <Button onClick={(e) => {
                          
                          e.preventDefault();

                          const bicycleInfro = {
                            bicycleId : bicycle._id
                          }

                          dispatch(bicycleRequested(bicycleInfro));

                      }}
                       variant="primary">Btn</Button> */}
                       
                       <Button onClick={(e) => {
                          
                          e.preventDefault();

                          const requestIdObj = {
                            requestId : returnRequest._id,
                            bicycleId : returnRequest.requestedBicycle, 
                            userId : returnRequest.requestedBy
                          }

                          dispatch(returnRequestAccepted(requestIdObj));

                      }}
                       
                       variant="primary">Accept Request</Button>
                        
                        <span>  </span>
                       <Button onClick={(e) => {
                          
                          e.preventDefault();

                          const requestIdObj = {
                            requestId : returnRequest._id,
                            bicycleId : returnRequest.requestedBicycle, 
                            userId : returnRequest.requestedBy
                          }

                          dispatch(returnRequestDeclined(requestIdObj));


                      }}
                       
                       variant="primary">Decline Request</Button>

                    </Card.Body>
                  </Card>
                ))}

              {/* <h1>GAP</h1>
              <Card style={{ width: '35rem', margin: '10px' }}>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>


              <Card style={{ width: '35rem', margin: '10px' }}>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
 */}

            </Col>
          </Row>

        </Container>
      </Layout>

    </div>
      )
  )
}
