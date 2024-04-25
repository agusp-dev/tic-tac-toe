import PropTypes from 'prop-types'
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from '@chakra-ui/react'

export const SuccessModal = ({ isOpen, onClose, turn }) => (
  <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>YOU WON!!!</ModalHeader>
      <ModalBody>
        Congrats {turn}, you won this game!
      </ModalBody>
      <ModalFooter>
        <Button variant='ghost' onClick={ onClose }>Reset Game</Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
)

SuccessModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  turn: PropTypes.string.isRequired,
}
