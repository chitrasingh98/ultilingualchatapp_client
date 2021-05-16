import React, { useRef } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import { v4 as uuidV4 } from 'uuid'

export default function Login({ onIdSubmit, onLangSubmit }) {
    const idRef = useRef()
    const langRef = useRef()

    function handleSubmit(e) {
        e.preventDefault()

        onIdSubmit(idRef.current.value)
        onLangSubmit(langRef.current.value)
    }

    function createNewId() {
        onLangSubmit(langRef.current.value)
        onIdSubmit(uuidV4())
    }

    return (
        <Container className="align-items-center d-flex" style={{ height: '100vh' }}>
            <Form onSubmit={handleSubmit} className="w-100">
                <Form.Group>
                    <Form.Label>Enter Your Id</Form.Label>
                    <Form.Control type="text" ref={idRef} required />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Select Language</Form.Label>
                    <Form.Control as="select" ref={langRef} required>
                        <option>English</option>
                        <option>Marathi</option>

                    </Form.Control>
                </Form.Group>
                <Button type="submit" className="mr-2">Login</Button>
                <Button onClick={createNewId} variant="secondary">Create A New Id</Button>
            </Form>
        </Container>
    )
}