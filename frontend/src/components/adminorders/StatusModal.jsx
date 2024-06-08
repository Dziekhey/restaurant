import React from 'react'
import StatusForm from './StatusForm'
import { Box, Modal } from '@mui/material';

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

const StatusModal = ({ open, handleClose, setOpen, orderId, updateOrderStatus }) => {
  return (
    <>
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <StatusForm id={orderId} setOpen={setOpen} updateOrderStatus={updateOrderStatus} />
        </Box>
      </Modal>
    </>
  )
}

export default StatusModal