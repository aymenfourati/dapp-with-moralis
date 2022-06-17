import { isVisible } from '@testing-library/user-event/dist/utils';
import React from 'react';
import { Modal, Icon, Typography,Input} from "web3uikit";


const post = (onDelete) => {
  return (
    <div className='post-main'>
 <div
  style={{
    height: '90vh',
    transform: 'scale(1)',
   }}
>
  <div>
    <Modal
      cancelText="Cancel"
      id="regular"
      isVisible
      okText="Publish"
      onCancel={function noRefCheck(){}}
      onCloseButtonPressed={function noRefCheck(){}}
      onOk={function noRefCheck(){}}
      title={<div style={{display: 'flex', gap: 10}}><Icon fill="#68738D" size={28} svg="edit"/><Typography color="#68738D" variant="h3">Post</Typography></div>}
    >
      <div
        style={{
          padding: '20px 0 20px 0'
        }}
      >
        <Input
          label="Express Yourself !"
          width="100%"
        />
      </div>
    </Modal>
  </div>
</div>
    </div>
  )
}


export default post;