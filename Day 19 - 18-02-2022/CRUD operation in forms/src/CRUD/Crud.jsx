import React from 'react'

const Crud = (props) => {
  return (
      <>
       <div className="list-group">
            {props.contacts.map(item=>{
                return (
                    <>
                        <li className="list-group-item">
                            {item.name}
                            <br />
                            {item.email}
                            <button className='btn btn-danger ms-3'onClick={()=>props.handleDeleteProp(item.email)}>Delete</button>
                            <button type="button" className="btn btn-warning ms-3" onClick={()=>props.handleUpdateProp(item.email)}>Update</button>
                            </li>
                    </>
                )
            })}
        </div>
      </>
  )
}

export default Crud