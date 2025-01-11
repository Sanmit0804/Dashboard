import React from 'react'
import CardHeader from '@/components/shared/CardHeader'
import Pagination from '@/components/shared/Pagination'
import CardLoader from '@/components/shared/CardLoader'
import useCardTitleActions from '@/hooks/useCardTitleActions'
import { FiEdit, FiTrash2 } from 'react-icons/fi'


const CustomUsersList = ({ title, usersData, handleUserDelete, handleUserEdit }) => {
    const { refreshKey, isRemoved, isExpanded, handleRefresh, handleExpand, handleDelete } = useCardTitleActions();

    if (isRemoved) {
        return null;
    }
    return (
        <div className="">
            <div className={`card stretch stretch-full ${isExpanded ? "card-expand" : ""} ${refreshKey ? "card-loading" : ""}`}>
                <CardHeader title={title} refresh={handleRefresh} remove={handleDelete} expanded={handleExpand} />

                <div className="card-body custom-card-action p-0">
                    <div className="table-responsive">
                        <table className="table table-hover mb-0">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Role</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {usersData.map((user, index) => (
                                    <tr key={index} className=''>
                                        <td className={`position-relative`}>
                                            <div className={`ht-50 position-absolute start-0 top-50 translate-middle border-start border-5 border-${user.role === 'admin' ? 'success' : user.role === 'manager' ? 'warning' : 'primary'} text-${user.role === 'admin' ? 'success' : user.role === 'manager' ? 'warning' : 'primary'}`} />
                                            <div className="hstack gap-3">
                                                {/* <div className="avatar-image rounded">
                                                    <img className="img-fluid" src={contact.avatar} alt={"user"} />
                                                </div> */}
                                                <div>
                                                    <span className="fs-12 text-muted">{`${user.firstName} ${user.lastName}`}</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <span className="fs-12 text-muted">{user.email}</span>
                                            {/* <a href="#" className="avatar-image avatar-md">
                                                <img src={user.avatar} alt={"user"} className="img-fluid" />
                                            </a> */}
                                        </td>
                                        <td>
                                            <a
                                                href="#"
                                                className={`badge bg-soft-${user.role === 'admin' ? 'success' : user.role === 'manager' ? 'warning' : 'primary'} text-${user.role === 'admin' ? 'success' : user.role === 'manager' ? 'warning' : 'primary'}`}
                                            >
                                                {user?.role?.charAt(0).toUpperCase() + user?.role?.slice(1)}
                                            </a>
                                        </td>

                                        <td className='d-flex gap-2'>
                                            <a onClick={() => handleUserEdit(user)} className="btn btn-primary btn-sm px-3 py-2">
                                                <FiEdit size={16} className='me-2' />
                                                <span>Edit</span>
                                            </a>
                                            <a onClick={() => handleUserDelete(user._id)} className="btn btn-light-brand btn-sm px-3 py-2">
                                                <FiTrash2 size={16} className='me-2' />
                                                <span>Delete</span>
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* <div className="card-footer"> <Pagination /></div> */}
                <CardLoader refreshKey={refreshKey} />
            </div>
        </div>
    )
}

export default CustomUsersList
