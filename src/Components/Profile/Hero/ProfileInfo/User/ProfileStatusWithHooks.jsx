import React, { useEffect, useState } from 'react';

const ProfileStatusWithHooks = (props) => {
  let [editMode, setEditMode] = useState(false)
  let [status, setStatus] = useState(props.status)
  const activateEditMode = () => {
    setEditMode(true)
  }
  const deActiveteEditMode = () => {
    setEditMode(false)
    props.updateStatus(status)
  }
  const deActiveteEditModeWithKey = (evt) => {
    if(evt.keyCode === 13){setEditMode(false)
    props.updateStatus(status)} 
  }
  const onStatusInputChange = (evt) => {
    setStatus(evt.target.value)
  }

  useEffect(() => {
    setStatus(props.status)
  }, [props.status])

  return(
    <>
    {!editMode && <div>
      <span onDoubleClick={activateEditMode}>{props.status ||'MyStatus'}</span>
    </div>}
    {editMode && <div>
      <input autoFocus type="text" value={status}
            onChange={onStatusInputChange} onBlur={deActiveteEditMode} onKeyUp={deActiveteEditModeWithKey}/>
    </div>
      
  }
    </>
  )
}

export default ProfileStatusWithHooks