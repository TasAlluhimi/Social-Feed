import React from 'react'
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import { Link } from 'react-router-dom';

function ProfileWindow({ isOpen, openModal }) {

    const {onOpen, onOpenChange} = useDisclosure();

  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} onClose={openModal}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Profile</ModalHeader>
              <ModalBody>
                <div> 
                <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">Tasneem@gmail.com</p>
                </div>
                <div className='mt-5'>
                  <ul>
                    <li>My Settings</li>
                    <li>Help & Feedback</li>
                    <li className="text-red-500">Log Out</li>
                  </ul>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}

export default ProfileWindow